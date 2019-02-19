import { doWork } from './service';

export const setupRoutes = (app: import('express').Application) => {

    app.get('/', (req, res, next) => {
        return res.status(204).send();
    });

    app.get('/stuff', (req, res, next) => {
        return res.send(doWork(1, 3));
    });
};
