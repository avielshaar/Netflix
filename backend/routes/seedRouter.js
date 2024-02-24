import express from 'express';
import seedData from '../controllers/seedController.js';
import expressAsyncHandler from 'express-async-handler';

const seedRouter = express.Router();

seedRouter.get('/', expressAsyncHandler(seedData));

export default seedRouter;
