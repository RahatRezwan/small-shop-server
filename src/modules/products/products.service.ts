import { IProduct } from './products.interface';
import { productsModel } from './products.model';

const createProduct = async (product: IProduct) => {
   const result = await productsModel.create(product);
   return result;
};

const getAllProducts = async (searchTerm: string) => {
   let query = {};
   if (searchTerm) {
      query = {
         $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
         ],
      };
   }
   const result = await productsModel.find(query);
   return result;
};

const getProductById = async (productId: string) => {
   const result = await productsModel.findOne({ _id: productId });
   return result;
};

const updateProduct = async (productId: string, product: IProduct) => {
   const result = await productsModel.findOneAndUpdate({ _id: productId }, product, { new: true });
   return result;
};

const deleteProduct = async (productId: string) => {
   const result = await productsModel.findOneAndDelete({ _id: productId });
   return result;
};

export const ProductService = {
   createProduct,
   getAllProducts,
   getProductById,
   updateProduct,
   deleteProduct,
};
