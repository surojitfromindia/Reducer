import { CustomError } from '../errors/errorMessages';
import * as bcyr from 'bcrypt';

//create a hashed password
const hashPassword = async (plain_password: string) => {
  let alpha_numeric_regex = /[a_zA_Z0_9]{6,}$/;
  let error_array = plain_password.trim().match(alpha_numeric_regex);
  if (error_array !== null) {
    throw new CustomError('password_format');
  }
  let hashed_password = await bcyr.hash(plain_password, 10);
  return hashed_password;
};
export {hashPassword}