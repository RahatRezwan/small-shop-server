import { productsModel } from '../products/products.model';
import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrder = async (order: TOrder) => {
   const result = await OrderModel.create(order);
   // reduce the quantity of the product
   const product = await productsModel.findById(order.productId);

   if (!product) {
      throw new Error('Product not found');
   }

   const inventory = product.inventory;

   if (product) {
      inventory.quantity -= order.quantity;

      if (inventory.quantity === 0) {
         inventory.inStock = false;
      }

      await product.save();
   }

   // if order quantity is greater than product quantity
   if (inventory.quantity < order.quantity) {
      throw new Error('Insufficient quantity available in inventory');
   }

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

   if (!result) {
      throw new Error('Order not found');
   }

   return result;
};

export const OrderService = {
   createOrder,
   getAllOrders,
};
