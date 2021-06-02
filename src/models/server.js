const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8080;
    this.conectarDB()
    this.middleware();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
}
  middleware() {
    this.app.use( cors() );
    this.app.use(express.json()); 

  }
  routes() {
    this.app.use('/api/products-catalog', require('../routes/products'));
    this.app.use('/api/discounts', require('../routes/discounts'));
  }

  listen() {
    this.app.listen(this.PORT);
  }
}

module.exports = Server;
