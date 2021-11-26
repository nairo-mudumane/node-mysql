const responseModel = require('./ResponseModel').ResponseModel;
const response = { ...responseModel };

exports.login = async (req, res) => {
  return res.status(200).json(response);
};

exports.create = async (req, res) => {
  response['data'] = [...response['data'], 'fruta', 'limao'];
  return res.status(201).json(response);
};
