import './config/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Router from './routes/Team';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', Router);


const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
export default app;
