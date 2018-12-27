'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach( method => {
  router.routes[method] = {};

  router.routes[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});


router.route = (req, res) => {
  console.log(`${req.method} requst made to ${req.url}`);
  return parser(req)
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];

      if (handler) return handler(req, res);
    })
    .catch(err => {
      console.error(`Could not find ${req.parsed.pathname}`);
      res.status = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource not found at ${req.parsed.pathname}`);
      res.end();
    });
};
