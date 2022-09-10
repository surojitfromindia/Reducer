//write controller for login here.

import { MysqlClient } from '../../../config/DbClient';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../../errors/errorMessages';
import { verifyPassword } from '../../../utils/password';
import { signAccessToken } from '../../../utils/jwttoken';
import { UserLoginInfo, } from 'app/types/user';
import { userAlreadyExists } from './register';
import { User } from 'app/generated/mysqlClient';

const loginUser = async (user_info: UserLoginInfo): Promise<User | null> => {
  let user_name = user_info.user_name.toString();
  let plain_password = user_info.password;
  if (!(await userAlreadyExists(user_name))) {
    throw new CustomError('email_is_not_registered');
  } else {
    let data = await MysqlClient.user.findFirst({
      where: {
        email: user_name.toString(),
      },
    });
    if (data) {
      let is_password_match = await verifyPassword(plain_password, data.password);
      if (is_password_match) {
        return data;
      } else {
        throw new CustomError('credential_do_not_match');
      }
    } else {
      return null;
    }
  }
};

//express specfic handlers
const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let user_info: UserLoginInfo = {
      user_name: '',
      password: '',
    };
    let user_payload = req?.body;
    if (user_payload?.user_name && user_payload?.password) {
      user_info.user_name = user_payload.user_name.toString();
      user_info.password = user_payload.password.toString();
      let login_result = await loginUser(user_info);
      if (login_result) {
        let access_token = signAccessToken(login_result);
        res.json({
          data: {
            user_name: login_result?.email,
            message: 'Login successfull',
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

export { Login };
