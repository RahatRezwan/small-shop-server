import { productsModel } from '../products/products.model';
import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrder = async (order: TOrder) => {
   const product = await productsModel.findById(order.productId);

   if (!product) {
      throw new Error('Product not found');
   }
   const inventory = product.inventory;

   if (!inventory.inStock) {
      throw new Error('Product is out of stock');
   }
   // if order quantity is greater than product quantity
   if (inventory.quantity < order.quantity) {
      throw new Error('Insufficient quantity available in inventory');
   }

   // update inventory (product quantity and inStock status)
   if (product) {
      const quantity = product.inventory.quantity - order.quantity;

      if (quantity === 0) {
         inventory.inStock = false;
      }
      inventory.quantity = quantity;

      await product.save();
   }

   const result = await OrderModel.create(order);

   return result;
};

const getAllOrders = async (email: string) => {
   let query = {};
   if (email) {
      query = {
         email: email,
      };
   }

   const result = await OrderModel.find(query);

   if (!result.length && email) {
      throw new Error('User not found');
   }

   if (!result) {
      throw new Error('Order not found');
   }

   return result;
};

export const OrderService = {
   createOrder,
   getAllOrders,
};
