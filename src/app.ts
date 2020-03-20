import * as express from 'express';
import { Application } from 'express';

import { IMiddleware, IRoute } from './interfaces/interfaces';

class App {
    public port: number;
    public middlewares: IMiddleware[];
    public routes: IRoute[]
    public app: Application;

    constructor(appInit: {
        port: number,
        middlewares: IMiddleware[],
        routes: IRoute[]
    }) {
        this.port = appInit.port;
        this.middlewares = appInit.middlewares;
        this.routes = appInit.routes;

        this.app = express();
        this.initMilldeware(this.middlewares);
        this.initRoute(this.routes);
    }

    private initMilldeware(middlewares: IMiddleware[]) {
        middlewares.forEach((middleware: IMiddleware) => {
            this.app.use(middleware);
        })
    }

    private initRoute(routes: IRoute[]) {
        routes.forEach((route: IRoute) => {
            this.app.use('/', route.router);
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`server listen ${this.port}`);
        });
    }
}

export default App;