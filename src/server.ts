import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from 'middleware-http-errors';

const app = express();
app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'EdStem stats poker backend is up and running!' });
});

app.use(errorHandler());

export default app;
