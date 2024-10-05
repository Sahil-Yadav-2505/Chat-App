import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const messageRouter = express.Router();

messageRouter.post('/send/:id',isAuthenticated,sendMessage);
messageRouter.get('/:id',isAuthenticated,getMessages);

export default messageRouter;
