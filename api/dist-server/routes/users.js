"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(handler) {
  var router = _express["default"].Router();

  router.get('/', function (req, res, next) {
    res.json({
      title: 'Express'
    });
  });
  return router;
};

var _default = {
  init: function init(server, handler) {
    var routes = register(handler);
    server.use('/users', routes);
  }
};
exports["default"] = _default;