import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrder = async (order: TOrder) => {
   const result = await OrderModel.create(order);
   return result;
};

const getAllOrders = async (email: string) => {
   let query = {};
   if (email) {
      query = {
         email: { $regex: email, $options: 'i' },
      };
   }
   const result = await OrderModel.find(query);
   return result;
};

export const OrderService = {
   createOrder,
   getAllOrders,
};
