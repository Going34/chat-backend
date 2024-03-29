"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const jwt_token_verify_1 = require("../middleware/jwt_token_verify");
const meassge_controller_1 = require("../controller/meassge.controller");
exports.messageRouter = (0, express_1.Router)();
const message = new meassge_controller_1.MessageController();
exports.messageRouter.use(jwt_token_verify_1.verifyToken);
exports.messageRouter.post('/', message.sendMessage);
exports.messageRouter.get('/:chatId', message.allMessages);
exports.messageRouter.delete('/:messageId', message.deleteMessage);
exports.messageRouter.patch('/:messageId', message.editMeassge);
