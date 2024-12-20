import express from 'express';

import db from './configs/dbConfig';
import logger from './configs/loggerConfig';
import serverConfig from './configs/serverConfig';
import apiRoute from './routes';
import errorHandler from './utils/error/errorHandler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.use(errorHandler);

const { PORT } = serverConfig;

app.listen(PORT, async () => {
    await db.connect();
    logger.info(`Server started at PORT: ${PORT}`);
});