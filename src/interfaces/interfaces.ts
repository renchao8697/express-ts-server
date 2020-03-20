import { Request, Response, NextFunction, Router } from 'express';

interface IMiddleware {
  (req: Request, res: Response, next: NextFunction): void;
}

interface IRoute {
  initRoutes(): void;
  router: Router
}

export { IMiddleware, IRoute };