import * as express from 'express';
import { cors } from './api/express/middlewares/cors';
import { errorHandler } from './api/express/middlewares/errorHandler';
import { UserRegisterValidate, Register } from './api/express/v1/register';
import { Login } from './api/express/v1/login';
import { sendCustomError } from './errors/errorMessages';
import "./config/passport";

const express_app = express.default();

express_app.response.sendCustomError = sendCustomError;
express_app.use(cors());
express_app.use(express.json())

express_app.get('/register/validateuser', UserRegisterValidate);
express_app.post('/register', Register);
express_app.post('/login', Login );

express_app.use(errorHandler);

export { express_app };
