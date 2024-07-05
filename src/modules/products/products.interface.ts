import { Model } from 'mongoose';

export type IVariant = {
   type: string;
   value: string | number;
};

export type IInventory = {
   quantity: number;
   inStock: boolean;
};

export type IProduct = {
   name: string;
   description: string;
   price: number;
   category: string;
   tags: string[];
   variants: IVariant[];
   inventory: IInventory;
};

export type ProductModel = {
   isProductExists(id: string): Promise<IProduct>;
} & Model<IProduct>;
