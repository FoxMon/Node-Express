import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import tweetsRouter from './router/tweets.js';

const app = express();

app.use(express.json()); // middleware 끼워줌.
app.use(helmet());
app.use(cors()); // 나중에 필요한 것만... 옵션 추가.
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter); // router 사용한다는 의미.

app.use((request, response, next) => {
    response.sendStatus(404);
});

app.use((error, request, response, next) => {
    console.error(error);
    response.sendStatus(500);
})
app.listen(8080);