import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getLists, getMovieLists, getSeriesLists, getNewAndPopularLists } from "../controllers/listsController.js";
import { isAuth } from "../utils.js";

const listsRouter = express.Router();

listsRouter.post('/', isAuth, expressAsyncHandler(getLists));
listsRouter.post('/movies', isAuth, expressAsyncHandler(getMovieLists));
listsRouter.post('/series', isAuth, expressAsyncHandler(getSeriesLists));
listsRouter.post('/newandpopular', isAuth, expressAsyncHandler(getNewAndPopularLists));

export default listsRouter;