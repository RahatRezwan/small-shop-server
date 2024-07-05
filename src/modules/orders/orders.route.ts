import express from 'express';
const router = express.Router();

import { OrderController } from './orders.controller';

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);

export const OrderRoutes = router;
