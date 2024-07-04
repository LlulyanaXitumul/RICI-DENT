import express from 'express';
import cors from 'cors';
import logger from 'morgan';

// Import routes
import userRoute from '../route/userRoute.js'
import patientRecordRoute from '../route/patientRecordRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Use routes
app.use('/api', userRoute);
app.use('/api', patientRecordRoute);

export default app; 