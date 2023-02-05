import * as express from 'express';
import 'express-async-errors';
import * as methodOverride from 'method-override';
import {homeRouter} from './routers/home';
import {clientRouter} from './routers/client';
import * as cors from 'cors';
import {handleError} from './utils/error';
import './utils/db';

const app = express();

app.use(methodOverride('_method'));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['POST', 'PUT', 'GET', 'DELETE'],
        credentials: true,
    })
);
app.use('/', homeRouter);
app.use('/client', clientRouter);


app.use(handleError); //own error handling from error.ts

app.listen(3001, 'localhost', () => {
    console.log('Server is ON and running on http://localhost:3001');
});
