// import apiController
import { Router } from 'express';
import * as createError from 'http-errors';
import { checkRequest } from '../models/tokenauth';
const debug = require('debug')('server:server');

const router = Router()
router.get('/api/v1', async (req, res, next) => {
  try {
    const authOk = await checkRequest(req);
    if (authOk) next();
  } catch (err) {
    debug(err);
    return next(createError(401, err));
  }
});

router.get('/api/v1', undefined);

export = router;
