import * as express from 'express';
import { errorHandler } from './api/express/middlewares/errorHandler';
import { UserRegisterValidate, Register } from './api/express/v1/register';
import { Login } from './api/express/v1/login';
import { sendCustomError } from './errors/errorMessages';
import "./config/passport";
import * as cors from "cors";

const express_app = express.default();

express_app.response.sendCustomError = sendCustomError;
express_app.use(express.json())
express_app.use(cors.default());

express_app.get('/register/validateuser', UserRegisterValidate);
express_app.post('/register', Register);
express_app.post('/login', Login );

express_app.use(errorHandler);

export { express_app };
