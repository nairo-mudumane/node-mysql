const UserRoutes = require('./UserRoutes');

module.exports = (App) => {
  UserRoutes(App);

  App.get('/', (req, res) => {
    res.status(404).send('No body returned for response');
  });
  App.get('/*', (req, res) => {
    res.status(404).redirect('/');
  });
};
