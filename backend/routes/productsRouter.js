import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getProducts, getProductById ,getProductByToken,getCategories,getProductsByQuery} from "../controllers/productController.js";



const productRouter=express.Router();
productRouter.get('/',expressAsyncHandler(getProducts));
productRouter.get('/categories',expressAsyncHandler(getCategories));
productRouter.get('/search',expressAsyncHandler(getProductsByQuery));
productRouter.get('/:id',expressAsyncHandler(getProductById));
productRouter.get('/token/:token',expressAsyncHandler(getProductByToken));


export default productRouter;