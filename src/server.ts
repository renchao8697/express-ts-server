import * as bodyParser from 'body-parser';

import App from './app';
import HomeRouter from './routes/home';
import cors from './middlewares/cors';

const app = new App({
    port: 8697,
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors()
    ],
    routes: [
        new HomeRouter()
    ]
});

app.listen();