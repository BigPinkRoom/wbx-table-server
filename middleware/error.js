const path = require('path');

module.exports = function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
};
