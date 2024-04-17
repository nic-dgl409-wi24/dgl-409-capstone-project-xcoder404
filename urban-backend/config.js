const path = require('path');

module.exports = {
  // Server configuration
  PORT: process.env.PORT || 3001,

  // Database configuration
  dbConfig: {
    host: 'localhost',
    
    // user: 'n0199525_xcoder',
    // password: 'Meet@572000',
    // database: 'n0199525_urbanglide'
    user: 'root',
    password: '',
    database: 'urbanglide'
  },


};