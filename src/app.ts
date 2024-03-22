import morgan from 'morgan';
import cors from 'cors';
import express, { Response, Express, Request } from 'express';
import mailRoutes from './routes/mail';

const app: Express = express();
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use('/', mailRoutes);

app.get('/helper', (_req: Request, res: Response) => {
  res.send('Road to success is always under construction!');
});

export default app;
