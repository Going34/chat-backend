"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchJoi = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().required().min(8),
    password: joi_1.default.string().required().min(6).max(50),
    name: joi_1.default.string().required().min(3),
    pic: joi_1.default.string(),
    isAdmin: joi_1.default.boolean(),
    phoneNumber: joi_1.default.string().required(),
    token: joi_1.default.string().default("")
});
exports.searchJoi = joi_1.default.object().keys({
    phoneNumber: joi_1.default.string().required().min(8),
});
