import { Schema, model } from 'mongoose';
import { IInventory, IProduct, IVariant } from './products.interface';

const VariantSchema = new Schema<IVariant>({
   type: {
      type: String,
      required: [true, 'Variant type is required'],
   },
   value: {
      type: Schema.Types.Mixed,
      required: [true, 'Variant value is required'],
   },
});

const InventorySchema = new Schema<IInventory>({
   quantity: {
      type: Number,
      required: [true, 'Inventory quantity is required'],
   },
   inStock: {
      type: Boolean,
      default: true,
   },
});

const ProductSchema = new Schema<IProduct>({
   name: {
      type: String,
      required: [true, 'Product name is required'],
      unique: true,
   },
   description: {
      type: String,
      required: [true, 'Product description is required'],
   },
   price: {
      type: Number,
      required: [true, 'Product price is required'],
   },
   category: {
      type: String,
   },
   tags: {
      type: [String],
   },
   variants: {
      type: [VariantSchema],
   },
   inventory: {
      type: InventorySchema,
      required: [true, 'Product inventory is required'],
   },
});

export const productsModel = model<IProduct>('Product', ProductSchema);
