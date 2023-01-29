import * as express from 'express';
import 'express-async-errors';
import * as methodOverride from 'method-override';
// import { engine } from 'express-handlebars';
import { homeRouter } from './routers/home';
import { clientRouter } from './routers/client';
import { pool } from './utils/db';

import { handleError } from './utils/error';
import './utils/db';

const app = express();

app.use(methodOverride('_method'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public')); //displays static files from public directory
app.use(express.json());
// app.engine(
//   '.hbs',
//   engine({
//     extname: '.hbs',
//     // helpers: handlebarsHelpers,
//   })
// );
// app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.use(handleError); //own error handling from error.hbs

app.listen(3001, 'localhost', () => {
  console.log('Server is ON and running on http://localhost:3001');
});
