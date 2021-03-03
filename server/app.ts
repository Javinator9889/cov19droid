import * as path from 'path';
import * as logger from 'morgan';
import * as express from 'express';
import * as createError from 'http-errors';
import * as cookieParser from 'cookie-parser';
import * as apiRouter from './routes/api';

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRouter);

// catch 404 errors and forward to error handler
app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, _) => {
  res.locals.message = err.message;
  res.locals.error = res.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export = app;
