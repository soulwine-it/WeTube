# OurTube

Cloning Youtube with Vanilla and NodeJS

gitignore:  
node_modules  
package-lock.json

using site:  
Babel : https://babeljs.io/ (최신의 Javascript 코드를 예전의 Javascript코드로 변환해줌)

install:
node js
npm init
npm install express (in terminal)  
npm install @babel/node (in terminal)  
npm install @babel/preset-env (in terminal)  
npm install @babel/core (in terminal)  
npm install nodemon -D (in terminal 반영하려면 대문자로 -D를 붙이는 것 프로젝트에 필요한 것이 아니라 개발자에게 필요한 것이니 -D를 붙여 project 밖으로 빼냄 저장할때 마다 서버를 새로 실행함)  
npm install morgan(morgan middleware 설치 logging)
npm install helmet(보안관련)
npm install body-parser(body로부터 정보를 얻을 수 있게 해주는 것, 서버가 유저로부터 받은 데이터를 이해하는 방법)  
npm install cookie-parser(cookie에 유저 정보 저장)
npm install pug
npm install multer

install: Database  
MONgo db설치
npm install mongoose
npm install dotenv

description
cookieParser : cookie를 전달 받아서 사용할 수 있도록 함 ex)사용자 인증같은 곳에서 쿠키 검사할때 사용  
babelrc: 우리가 원하는 node.js와 js관련된 필요한 것들을 모두 넣을 것입니다.  
Pug : Pug는 express에서 View를 다루는 방식 중 하나(view engin)(http://expressjs.com/en/4x/api.html#app.set);
MONGoose: Database와 연결해주는 것  
dotenv : 뭔가를 숨기려고 할 때  
multer : mddleware가 file의 URL 을 반환

using site:  
status code Http: https://developer.mozilla.org/ko/docs/Web/HTTP/Status
MONGoose : http://MONGoosejs.com

