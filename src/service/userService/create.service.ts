import { Request } from "express";
import bcrypt from "bcryptjs";
import { userSchema } from "../../helper/joiValidation";
import { User } from "../../model/user";
import { v4 as uuidv4 } from "uuid";
import { tokenGenrate } from "./login.service";

export const passwordHash = async (password: string) => {
  const Password = await bcrypt.hash(password, 8);
  return Password;
};

export const create = async (req: Request) => {
  const { email, password } = req.body;
  // if you want file in req object install multer
  // req.body['pic'] = req.file?.filename;
  // console.log(req.file?.filename);
  const result = userSchema.validate({ ...req.body });
  if (result.error) {
    const { error } = result;
    return { validate: false, msg: error };
  }
  const setPassword = await passwordHash(password);
  req.body["password"] = setPassword;
  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return { email: "email exist" };
    } else {
      const data = await User.create({ ...req.body, _id: uuidv4() });
      // const data = await user.save();
      return {...data,token: tokenGenrate(data._id)};
    }
  } catch (error) {
    return error;
  }
};
