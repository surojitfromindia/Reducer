
declare namespace Express {
  interface Response {
    sendCustomError : import("../../errors/errorMessages").CustomErrorFunctionType
  }
  interface Request {}
}
