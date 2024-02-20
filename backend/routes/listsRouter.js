import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getMovieLists, getSeriesLists, getLatestLists } from "../controllers/listsController.js";
import { isAuth } from "../utils.js";

const listsRouter = express.Router();
listsRouter.post('/movies', isAuth, expressAsyncHandler(getMovieLists));
listsRouter.post('/series', isAuth, expressAsyncHandler(getSeriesLists));
listsRouter.post('/latest',isAuth, expressAsyncHandler(getLatestLists));

export default listsRouter;