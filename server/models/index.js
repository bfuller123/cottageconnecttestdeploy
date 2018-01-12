const mongoose = require('mongoose');

const herokuMongoURI = 'mongodb://heroku_bx92v1q4:f6lvg45a5ulejd6mtdl6epq04u@ds161048.mlab.com:61048/heroku_bx92v1q4';

module.exports.connect = (uri) => {

  //if this doesn't work, delete uri = herokuMongoURI;
  // uri = herokuMongoURI;
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
};
