import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { getLists, getMovieLists, getSeriesLists, getNewAndPopularLists } from '../controllers/listsController.js';
import { isAuth } from '../utils.js';

const listsRouter = express.Router();

listsRouter.get('/', isAuth, expressAsyncHandler(getLists));
listsRouter.get('/movies', isAuth, expressAsyncHandler(getMovieLists));
listsRouter.get('/series', isAuth, expressAsyncHandler(getSeriesLists));
listsRouter.get('/newandpopular', isAuth, expressAsyncHandler(getNewAndPopularLists));

export default listsRouter;
