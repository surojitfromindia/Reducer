//write controller for registration here.

import { MysqlClient } from '../../../../config/DbClient';
import { uid } from '../../../../utils/random';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../../../errors/errorMessages';
import { UserRegistrationInfo, UserRegistrationReturn } from 'app/types/registration';

//register a new user and return inserted values and time of the insert/create
const registerNewUser = async (user_info: UserRegistrationInfo): Promise<UserRegistrationReturn | null> => {
  let user_name = user_info.user_name;
  if (await userAlreadyExists(user_name)) {
    throw new CustomError('email_already_registed');
  } else {
    //code to register new user
    let new_user_reg_info = await MysqlClient.user.create({
      data: {
        email: user_name,
        id: uid(),
      },
    });
    let data = await MysqlClient.$queryRaw<UserRegistrationReturn>`select email as "user_name" from "User" where id =${new_user_reg_info.id}`;
    return data;
  }
};

//check if given username  already exists
//if it exits return true else false
//make sure the parameter passed should be a string
const userAlreadyExists = async (username?: string): Promise<boolean> => {
  if (username === undefined || username==="") {
    throw new CustomError('user_name_empty');
  } else if (username === null) {
    throw new CustomError('user_name_null');
  }
  const email_exits = await MysqlClient.user.findUnique({
    where: {
      email: username,
    },
    select: {
      email: true,
    },
  });
  if (email_exits === null) return false;
  return true;
};

const Register = async (req: Request, res: Response, next:NextFunction) => {
  try {
    let user_info: UserRegistrationInfo = {
      user_name: '',
      password: '',
      confirmpassword: '',
    };
    let user_payload = req?.body;
    if (user_payload?.user_name && user_payload?.password && user_payload?.confirmpassword) {
      user_info.user_name = user_payload.user_name.toString();
      user_info.password = user_payload.passed.toString();
      user_info.confirmpassword = user_payload.confirmpassword.toString();
      await registerNewUser(user_info);
    }
  } catch (error) {
    next(error)
  }
};

const UserRegisterValidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let username = req.query.username?.toString();
    let is_already_exists = await userAlreadyExists(username);
    res.status(200).json({
      success: true,
      data: {
        user_already_registered: is_already_exists,
        message: is_already_exists ? 'This username is already registered':  "User name is available",
      },
    });
  } catch (error) {
    return next(error);
  }
};

export { UserRegisterValidate };
