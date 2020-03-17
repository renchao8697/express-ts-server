import * as express from 'express';
import { Application, Request, Response } from 'express';

class App {
    public port: number;
    public app: Application;

    constructor(appInit) {
        this.port = appInit.port;
        this.app = express();
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server listen ${this.port}`);
        });
    }
}

export default App;