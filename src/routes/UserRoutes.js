const UserController = require('../controllers/UserController');

module.exports = (App) => {
  App.get('/login', UserController.login);
  App.get('/create', UserController.create);
};
