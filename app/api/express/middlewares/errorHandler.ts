import { CustomError } from '../../../errors/errorMessages';
import { ErrorRequestHandler, Response } from 'express';
import { Prisma } from '../../../generated/mysqlClient';
const errorHandler: ErrorRequestHandler = (err: Error, _req, res: Response, _next) => {
  if (err instanceof CustomError) {
    res.sendCustomError(err.message_key);
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    res.sendCustomError('db_connection_fail');
  }
  res.status(500).json({
    success: false,
    message: err,
  });
  return;
};

export { errorHandler };
