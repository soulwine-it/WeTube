import express from "express";
import routes from "../routes.js";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController.js";

const userRouter = express.Router();

//순서 중요 editProfile이 밑으로 내려가면 :id가 edit를 id로 인식해서 안됨.
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;