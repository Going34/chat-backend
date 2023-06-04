"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importStar(require("express"));
const user_controller_1 = require("../controller/user.controller");
const jwt_token_verify_1 = require("../middleware/jwt_token_verify");
exports.userRouter = (0, express_1.Router)();
const user = new user_controller_1.UserController();
exports.userRouter.use(express_1.default.static("public"));
exports.userRouter.post("/register", user.createUser);
exports.userRouter.post("/login", user.loginUser);
// Don't put this into top if you are put this middleware on top then they apply on all routes
exports.userRouter.use(jwt_token_verify_1.verifyToken);
//when you write any route after verifyToken middlware then middleware apply on it
exports.userRouter.post("/search", user.searchUser);
exports.userRouter.post('/autologin', user.loginWithAccessToken);
