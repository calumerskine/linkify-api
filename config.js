const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8888
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/linkify-api'
  }
};

module.exports = config;
