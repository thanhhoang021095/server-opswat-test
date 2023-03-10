import * as express from 'express';
import { AppRoutes } from './routes';
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
import { SERVER_ERROR, CumtomResponse } from './config/response';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express.use(bodyParser.json());
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(new AppRoutes().routes);
    this.express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (err.code) {
        res.status(err.code).json({
          data: err.data,
          message: err.message
        });
      } else {
        res.status(SERVER_ERROR[500]).json({ data: err.code, message: 'Unhandelled Exception' });
      }
    });
  }
}

module.exports = new App().express;