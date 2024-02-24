import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { signIn, signUp, addToList, removeFromList } from '../controllers/usersController.js';
import { isAuth } from '../utils.js';

const usersRouter = express.Router();

usersRouter.post('/signin', expressAsyncHandler(signIn));
usersRouter.post('/signup', expressAsyncHandler(signUp));
usersRouter.post('/addtolist/:id', isAuth, expressAsyncHandler(addToList));
usersRouter.post('/removefromlist/:id', isAuth, expressAsyncHandler(removeFromList));

export default usersRouter;
