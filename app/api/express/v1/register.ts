//write controller for registration here.

import { MysqlClient } from '../../../config/DbClient';
import { uid } from '../../../utils/random';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../../errors/errorMessages';
import { hashPassword } from '../../../utils/password';
import { signAccessToken } from '../../../utils/jwttoken';
import { UserRegistrationInfo, UserRegistrationReturn } from 'app/types/user';
import { User } from 'app/generated/mysqlClient';

//register a new user and return inserted values and time of the insert/create
const registerNewUser = async (user_info: UserRegistrationInfo): Promise<User | null> => {
  let user_name = user_info.user_name;
  if (await userAlreadyExists(user_name)) {
    throw new CustomError('email_already_registed');
  } else {
    //code to register new user
    let hashed_password = await hashPassword(user_info.password);
    let new_user_reg_info = await MysqlClient.user.create({
      data: {
        email: user_name,
        id: uid(),
        password: hashed_password,
        status: 'A',
      },
    });
    let data = await MysqlClient.user.findFirst({
      where :{
        id : new_user_reg_info.id,
      },
    })
    return data;
  }
};

//check if given username  already exists
//if it exits return true else false
//make sure the parameter passed should be a string
const userAlreadyExists = async (username?: string): Promise<boolean> => {
  if (username === undefined || username === '') {
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

//express specfic handlers
const Register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let user_info: UserRegistrationInfo = {
      user_name: '',
      password: '',
      confirmpassword: '',
    };
    let user_payload = req?.body;
    if (user_payload?.user_name && user_payload?.password && user_payload?.confirmpassword) {
      user_info.user_name = user_payload.user_name.toString();
      user_info.password = user_payload.password.toString();
      user_info.confirmpassword = user_payload.confirmpassword.toString();
      let reg_result = await registerNewUser(user_info);
      let user_reg = reg_result;
      if (user_reg) {
        let access_token = signAccessToken(user_reg);
        res.json({
          data: {
            user_name: user_reg?.email,
            message: 'Registration successfull',
            access_token,
          },
        });
        return;
      }
    }
  } catch (error) {
    return next(error);
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
        message: is_already_exists ? 'This username is already registered' : 'User name is available',
      },
    });
  } catch (error) {
    return next(error);
  }
};

export { UserRegisterValidate, Register, userAlreadyExists };
