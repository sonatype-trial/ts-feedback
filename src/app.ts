import express from 'express';
import http from 'http';
import { setupRoutes } from './router';

console.log('starting');

const app = express();
setupRoutes(app);

http.createServer(app).listen(() => {
    console.log('started');
});
