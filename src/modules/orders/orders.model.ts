import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
   email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
   },
   productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required'],
   },
   price: {
      type: Number,
      required: [true, 'Price is required'],
   },
   quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
   },
});

export const OrderModel = model('Order', OrderSchema);
