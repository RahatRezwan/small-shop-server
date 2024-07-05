import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/products/products.routes';
import path from 'path';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRoutes);
// app.use('/api/v1/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
   res.send('Welcome to super shop');
});

app.use((req: Request, res: Response, next: NextFunction) => {
   res.status(404).json({
      success: false,
      path: req.originalUrl,
      message: 'Route not found',
   });
   next();
});

export default app;
