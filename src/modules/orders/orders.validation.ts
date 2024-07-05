import { z } from 'zod';

const OrderCreateSchema = z.object({
   email: z.string().email({ message: 'Invalid email address' }),
   productId: z.string({ message: 'Product ID is required' }),
   price: z.number().positive({ message: 'Price must be a positive number' }),
   quantity: z.number().int().positive({ message: 'Quantity must be at least 1' }),
});

export const OrderValidation = { OrderCreateSchema };
