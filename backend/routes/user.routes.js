import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { getUserSidebar } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/',isAuthenticated,getUserSidebar);

export default userRouter;