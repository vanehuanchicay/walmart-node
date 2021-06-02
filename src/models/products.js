const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  id: { type: Number , unique: true},
  brand: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
});

module.exports = model('Products', ProductSchema);
