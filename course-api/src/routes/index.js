import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurant from '../controller/restaurant';

let router = express();

// connect to db
// the initializeDb object contains just a function, that needs a function as a param
// this is the 'callback', which takes the db as an argument
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  // restaurant is a controller similar to a view controller
  router.use('/restaurant', restaurant({ config, db }));

});

export default router;
