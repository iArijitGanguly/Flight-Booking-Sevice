import express from 'express';

import bookingRoute from './bookingRoute';

const v1Route = express.Router();

v1Route.use('/bookings', bookingRoute);

export default v1Route;