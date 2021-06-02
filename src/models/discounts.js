const { Schema, model } = require('mongoose');

const DiscountsSchema = Schema({
  brand: { type: String },
  threshold: { type: Number },
  discount: { type: Number },
});

module.exports = model('Discounts', DiscountsSchema);
