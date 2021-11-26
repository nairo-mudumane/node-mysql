const connection = require('../database/connection');
const responseModel = require('./ResponseModel').ResponseModel;
const response = { ...responseModel };

exports.login = async (req, res) => {
  return res.status(200).json(response);
};

exports.create = async (req, res) => {
  const { username, password } = req.body;
  return res.status(201).json(response);
};
