import { z } from 'zod';

const VariantCreateSchema = z.object({
   type: z.string({ message: 'Variant type is required' }),
   value: z.string({ message: 'Variant value is required' }),
});

const InventoryCreateSchema = z.object({
   quantity: z.number().int().nonnegative({
      message: 'Inventory quantity is required and must be a non-negative integer',
   }),
   inStock: z.boolean({ message: 'Inventory inStock status is required' }),
});

const ProductCreateSchema = z.object({
   name: z
      .string({ message: 'Product name is required' })
      .min(3, { message: 'Product name must be at least 3 characters' }),
   description: z.string({ message: 'Product description is required' }),
   price: z
      .number()
      .positive({ message: 'Product price is required and must be a positive number' }),
   category: z.string({ message: 'Product category is required' }),
   tags: z.array(z.string({ message: 'Product tags are required' })),
   variants: z.array(VariantCreateSchema).nonempty({ message: 'Product variants are required' }),
   inventory: InventoryCreateSchema,
});

export const ProductsValidation = { ProductCreateSchema };
