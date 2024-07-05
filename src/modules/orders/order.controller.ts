import { Request, Response } from 'express';
import { OrderService } from './orders.service';

const createOrder = async (req: Request, res: Response) => {
   try {
      const response = await OrderService.createOrder(req.body);
      res.status(201).json({
         success: true,
         message: 'Order created successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Order creation failed',
         error: error,
      });
   }
};

const getAllOrders = async (req: Request, res: Response) => {
   try {
      const response = await OrderService.getAllOrders(req.query.email as string);
      res.status(200).json({
         success: true,
         message: 'Orders fetched successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Orders fetch failed',
         error: error,
      });
   }
};

export const OrderController = {
   createOrder,
   getAllOrders,
};
