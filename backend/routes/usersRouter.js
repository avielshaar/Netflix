import express from "express";
import expressAsyncHandler from "express-async-handler";
import {signin, signup, addToList, removeFromList} from "../controllers/usersController.js";

const usersRouter = express.Router();
usersRouter.post('/signin', expressAsyncHandler(signin));
usersRouter.post('/signup', expressAsyncHandler(signup));
usersRouter.post('/addToList/:id', expressAsyncHandler(addToList))
usersRouter.post('/removeFromList/:id', expressAsyncHandler(removeFromList))

export default usersRouter;