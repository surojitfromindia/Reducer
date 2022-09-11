import { CustomError } from '../errors/errorMessages';
import * as bcyr from 'bcrypt';

//create a hashed password
const hashPassword = async (plain_password: string) => {
  let alpha_numeric_regex = /[a-zA-Z0-9]{6,}$/;
  let error_array = plain_password.trim().match(alpha_numeric_regex);
  if (error_array === null) {
    throw new CustomError('password_format');
  }
  let hashed_password = await bcyr.hash(plain_password, 10);
  return hashed_password;
};
const verifyPassword  = async (plain_password : string, hashed_password: string)=>{
 let password_matched = await  bcyr.compare(plain_password.toString(), hashed_password);
 return password_matched
}
export {hashPassword, verifyPassword}