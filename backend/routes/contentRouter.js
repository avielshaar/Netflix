import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getContent, getContentById ,getContentByToken,getGenres,getContentByQuery} from "../controllers/contentController.js";
import { isAuth } from "../utils.js";

const contentRouter = express.Router();
contentRouter.get('/', isAuth, expressAsyncHandler(getContent));
contentRouter.get('/genres', isAuth ,expressAsyncHandler(getGenres));
contentRouter.get('/search', isAuth ,expressAsyncHandler(getContentByQuery));
contentRouter.get('/token/:token', isAuth ,expressAsyncHandler(getContentByToken));
contentRouter.get('/:id', isAuth ,expressAsyncHandler(getContentById));

export default contentRouter;