import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getMovieLists, getSeriesLists } from "../controllers/listsController.js";
import { isAuth } from "../utils.js";

const listsRouter = express.Router();
listsRouter.post('/movies', isAuth, expressAsyncHandler(getMovieLists));
listsRouter.post('/series', isAuth, expressAsyncHandler(getSeriesLists));

export default listsRouter;