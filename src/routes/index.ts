import express from 'express';

import v1Route from './v1';

const apiRoute = express.Router();

apiRoute.use('/v1', v1Route);

export default apiRoute;