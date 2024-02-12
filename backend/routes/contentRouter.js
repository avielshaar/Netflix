import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getContent, getContentById ,getContentByToken,getCategories,getContentByQuery} from "../controllers/contentController.js";



const contentRouter=express.Router();
contentRouter.get('/',expressAsyncHandler(getContent));
contentRouter.get('/categories',expressAsyncHandler(getCategories));
contentRouter.get('/search',expressAsyncHandler(getContentByQuery));
contentRouter.get('/:id',expressAsyncHandler(getContentById));
contentRouter.get('/token/:token',expressAsyncHandler(getContentByToken));


export default contentRouter;