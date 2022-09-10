

interface UserRegistrationInfo {
    user_name : string,
    password : string,
    confirmpassword : string
}

interface UserLoginInfo {
    user_name : string,
    password : string,
}

type UserRegistrationReturn  = {
    user_name : string,
    email? : string,
    id  : string
}

type UserTokenPayload = {
    email : string,
    id :  string
}

export type { UserRegistrationInfo, UserRegistrationReturn, UserTokenPayload, UserLoginInfo}

