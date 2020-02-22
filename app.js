import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {
  localsMiddleware
} from "./middleWares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";


// // 디폴트 값이 아닐때는 아래와 같이 표현
// import {
//   userRouter
// } from "./routers/userRouter";

const app = express();

// middleware 보안 관련
app.use(helmet());
//view engine 설정값을 pug로 변경
app.set('view engine', 'pug');
//디렉토리에서 file을 보내주는 middleware
app.use('/uploads', express.static('uploads'));
//middleware 사용자의 정보를 담도록 해줌
app.use(cookieParser());
//middleware bodyParser 는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어, request 정보에서
//form이나 json 형태로 된 body를 검사
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//middleware logging
app.use(morgan("dev"));

// 미들웨어 만드는 방법
// app.use((req, res, next) => {})
// app.use(function (req, res, next) {})
// const localMiddleware = (req, res, next) => {}
app.use(localsMiddleware);

//router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;