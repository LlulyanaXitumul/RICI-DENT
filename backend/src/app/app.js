import express from 'express';
import cors from 'cors';
import logger from 'morgan';

// Import routes
import userRoute from '../route/userRoute.js'
import patientRoute from '../route/patientRoute.js'
import appointmentScheduleRoute from '../route/appointmentScheduleRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Use routes
app.use('/api', userRoute);
app.use('/api', patientRoute);
app.use('/api', appointmentScheduleRoute);

export default app; 