import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/products/products.routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRoutes);
// app.use('/api/v1/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
   res.send('Welcome to super shop');
});

export default app;
