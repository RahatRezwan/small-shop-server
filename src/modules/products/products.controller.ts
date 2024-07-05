import { Request, Response } from 'express';

const createProduct = async (req: Request, res: Response) => {
   const product = req.body;

   try {
      const response = await ProductService.createProduct(product);

      res.status(200).json({
         success: true,
         message: 'Product created successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Product creation failed',
         error: error,
      });
   }
};

const getAllProducts = async (req: Request, res: Response) => {
   try {
      const response = await ProductService.getAllProducts();

      res.status(200).json({
         success: true,
         message: 'Products fetched successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Products fetch failed',
         error: error,
      });
   }
};

const getProductById = async (req: Request, res: Response) => {
   const productId = req.params.productId;

   try {
      const response = await ProductService.getProductById(productId);

      res.status(200).json({
         success: true,
         message: 'Product fetched successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Product fetch failed',
         error: error,
      });
   }
};

const updateProduct = async (req: Request, res: Response) => {
   const productId = req.params.productId;
   const product = req.body;

   try {
      const response = await ProductService.updateProduct(productId, product);

      res.status(200).json({
         success: true,
         message: 'Product updated successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Product update failed',
         error: error,
      });
   }
};

const deleteProduct = async (req: Request, res: Response) => {
   const productId = req.params.productId;

   try {
      const response = await ProductService.deleteProduct(productId);

      res.status(200).json({
         success: true,
         message: 'Product deleted successfully',
         data: response,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Product delete failed',
         error: error,
      });
   }
};

export const ProductController = {
   createProduct,
   getAllProducts,
   getProductById,
   updateProduct,
   deleteProduct,
};
