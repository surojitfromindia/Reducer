import { UserTokenPayload } from 'app/types/user';
import * as jwt from 'jsonwebtoken';

const signAccessToken = (user_information: UserTokenPayload) : string => {
  const token_payload = {
    user_name: user_information.email,
    id: user_information.id,
  };
  const access_token = jwt.sign(token_payload, process.env.JWT_ACC_SKEY!, { expiresIn: process.env.JWT_ACC_EXP_DUR! });
  return access_token;
};

export {signAccessToken};
