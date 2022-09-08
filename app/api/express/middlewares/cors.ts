import { Request, Response,NextFunction } from "express";

const cors =()=>(req: Request, res:Response, next:NextFunction)=>{
    res.setHeader("access-control-allow-origin","*");
    next()
}

export {cors}