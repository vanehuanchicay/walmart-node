const { response, request } = require("express");
const Discounts = require("../models/discounts");

const discountsGet = async (req, res = response) => {
  const discounts = await Discounts.find();
  res.json({
    discounts,
  });
};

module.exports = discountsGet;
