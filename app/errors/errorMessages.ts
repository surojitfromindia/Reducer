import { Response } from "express";

class CustomError extends Error {
  error_body;
  constructor(message_key: ErrorMessageKey) {
    super();
    this.error_body = errorMessages[message_key];
  }
  format()  {
      return {
          success : false,
          error_code : this.error_body.code,
          error_message : this.error_body.message
      }
  }
}

interface CustomErrorFunctionType {
    (this: Response,  error: CustomError) : void
}
const  sendCustomeError : CustomErrorFunctionType =function(this: Response, error: CustomError){
    this.status(400).json(error.format())
}


type ErroMessges = {
  code: number;
  message: string;
  group_code?: number;
};

type ErrorMessageKey = "email_already_registed"


const errorMessages: { [key: string]: ErroMessges } = {
    "email_already_registed" :{
        code :1,
        message : "This email or user name is already registed",
        group_code : 1
    }
};
export {CustomError, sendCustomeError, CustomErrorFunctionType}
