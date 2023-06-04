import { Router } from "express";
import { verifyToken } from "../middleware/jwt_token_verify";
import { MessageController } from "../controller/meassge.controller";

export const messageRouter = Router();

const message = new MessageController()

messageRouter.use(verifyToken)

messageRouter.post('/send', message.sendMessage)

messageRouter.get('/recive/:chatId', message.allMessages)