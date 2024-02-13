import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getMovieLists, getSeriesLists } from "../controllers/listsController.js";

const listsRouter = express.Router();
listsRouter.post('/movies', expressAsyncHandler(getMovieLists));
listsRouter.post('/series', expressAsyncHandler(getSeriesLists));

export default listsRouter;