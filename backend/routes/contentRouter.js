import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getContent, getContentById ,getContentByToken,getGenres,getContentByQuery} from "../controllers/contentController.js";

const contentRouter = express.Router();
contentRouter.get('/',expressAsyncHandler(getContent));
contentRouter.get('/genres',expressAsyncHandler(getGenres));
contentRouter.get('/search',expressAsyncHandler(getContentByQuery));
contentRouter.get('/token/:token',expressAsyncHandler(getContentByToken));
contentRouter.get('/:id',expressAsyncHandler(getContentById));


export default contentRouter;