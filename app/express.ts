import * as express from "express";
import { sendCustomeError } from "./errors/errorMessages";

const express_app =  express.default();


express_app.response.sendCustomError = sendCustomeError
express_app.get("/",(req,res)=> res.send("Hello"))


export {express_app}