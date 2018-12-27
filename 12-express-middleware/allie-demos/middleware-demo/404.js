'use strict';

module.exports = (req, res) => {
  res.status(404);
  res.send('Route not found');
};
