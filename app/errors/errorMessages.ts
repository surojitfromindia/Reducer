import { Response } from 'express';

class CustomError extends Error {
  message_key;
  constructor(message_key: ErrorMessageKey) {
    super();
    this.message_key = message_key;
  }
}

interface CustomErrorFunctionType {
  (this: Response, error_key: ErrorMessageKey): void;
}
const sendCustomError: CustomErrorFunctionType = function (this: Response, error_key: ErrorMessageKey) {
  let error_information = errorMessages[error_key];
  this.status(error_information.http_code).json({
    success: false,
    group_code: error_information.group_code,
    code: error_information.code,
    reason: {
      message: error_information.message,
    },
  });
  return;
};

type ErroMessges = {
  code: number;
  message: string | string[];
  group_code?: GroupCode;
  http_code: number;
};

type CustomErrorMessageKey = 'email_already_registed' | 'user_name_empty' | 'user_name_null'|"password_format" | "email_is_not_registered" | "credential_do_not_match"
type DbErrorMessagKey = 'db_connection_fail';
type ErrorMessageKey = CustomErrorMessageKey | DbErrorMessagKey;
type GroupCode = 'A1' | 'D1' | 'U' | 'V1'; //A1 - APPLICATION LEVEL ERROR, D1 - DATABASE LEVEL

const errorMessages: { [key: string]: ErroMessges } = {
  email_already_registed: {
    code: 1,
    message: 'This email or user name is already registed',
    group_code: 'A1',
    http_code: 400,
  },
  user_name_empty: {
    code: 2,
    message: 'User name can not be empty',
    group_code: 'A1',
    http_code: 400,
  },
  user_name_null: {
    code: 3,
    message: 'User name can not be null or undefined',
    group_code: 'A1',
    http_code: 400,
  },
  "password_format":{
    code : 4,
    message : ["Password must be 6 character long","Password can not have space"],
    group_code : "A1",
    http_code : 400
  },
  db_connection_fail: {
    code: 1,
    message: 'Database is offline',
    group_code: 'D1',
    http_code: 500,
  },
  "email_is_not_registered" :{
    code: 4,
    message: 'This email is not registered',
    group_code: 'A1',
    http_code: 400,
  },
  "credential_do_not_match" :{
    code: 5,
    message: 'Either user name or password is incorrect',
    group_code: 'A1',
    http_code: 400,
  }
};
export { CustomError, sendCustomError, CustomErrorFunctionType };
