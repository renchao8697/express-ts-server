import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from '../interfaces/interfaces';

// const cors: IMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Controll-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-length, X-Request-With');
//   next();
// }

const cors = function(): IMiddleware {
  return (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-length, X-Request-With');
    next();
  }
} 

export default cors;