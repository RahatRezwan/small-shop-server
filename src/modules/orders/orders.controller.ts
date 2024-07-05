import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import { OrderValidation } from './orders.validation';

const createOrder = async (req: Request, res: Response) => {
   const order = req.body;

   try {
      const zodParsedOrder = OrderValidation.OrderCreateSchema.parse(order);

      const response = await OrderService.createOrder(zodParsedOrder);

      res.status(200).json({
         success: true,
         message: 'Order created successfully',
         data: response,
      });
   } catch (error: any) {
      res.status(500).json({
         success: false,
         message: 'Order creation failed',
         error: error?.errors ? error : error.message || 'Something went wrong',
      });
   }
};

const getAllOrders = async (req: Request, res: Response) => {
   try {
      const email = req.query.email as string;
      const response = await OrderService.getAllOrders(email);
      res.status(200).json({
         success: true,
         message: email
            ? `Orders fetched successfully for user email '${email}'`
            : 'Orders fetched successfully',
         data: response,
      });
   } catch (error: any) {
      res.status(500).json({
         success: false,
         message: 'Orders fetch failed',
         error: error?.message || error || 'Something went wrong',
      });
   }
};

export const OrderController = {
   createOrder,
   getAllOrders,
};
