import * as express from 'express';
import { Request, Response } from 'express';
import { IRoute } from '../interfaces/interfaces';

class HomeRouter implements IRoute {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.home);
  }

  private home(req: Request, res: Response) {
    res.send({message: 'Welcom ^_^ !!!'});
  }
}

export default HomeRouter;