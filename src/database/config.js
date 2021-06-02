const mongoose = require("mongoose");

const dbConnection = () =>
  mongoose.connect(
    "mongodb://brandDiscountsUser:brandDiscountsPassword@127.0.0.1:27017/desafio_walmart?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

module.exports = {
  dbConnection,
};
