import * as express from 'express';
import { ClusterConfig } from './cluster';
const port = 2023;
const app: express.Application = require('./app/app');
const clusterConfig = new ClusterConfig();
clusterConfig.initaliseCLuster(false, (isReady: boolean) => {
    app.listen(port, () => {
        console.log("Node app is running at localhost:" + port);
    });
});
