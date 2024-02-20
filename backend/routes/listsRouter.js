import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getMovieLists, getSeriesLists, getNewAndPopularLists } from "../controllers/listsController.js";
import { isAuth } from "../utils.js";

const listsRouter = express.Router();
listsRouter.post('/movies', isAuth, expressAsyncHandler(getMovieLists));
listsRouter.post('/series', isAuth, expressAsyncHandler(getSeriesLists));
listsRouter.post('/newAndPopular', isAuth, expressAsyncHandler(getNewAndPopularLists));

export default listsRouter;