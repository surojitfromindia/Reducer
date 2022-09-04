interface IUserNewRegistration {
    user_name : string,
    password : string,
    confirmpassword : string
}

type UserRegistrationReturn  = {
    user_name : string,
    email? : string
}
type UserRegistrationInfo  = IUserNewRegistration
