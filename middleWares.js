import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "OurTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    //미들웨어가 커넥션과 라우트 사이에 있으니까
    next();
};

export const uploadVideo = multerVideo.single('videoFile');