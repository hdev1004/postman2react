"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _postman2ReactModule = _interopRequireDefault(require("../css/postman2React.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PostmanQuery = function PostmanQuery(_ref) {
  var kind = _ref.kind,
    data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_query
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, "( ", kind, " )"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, kind === "Param" ? data : data.key)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: "500px",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    spellCheck: false,
    "data-type": kind,
    "data-key": kind === "Param" ? data : data.key,
    value: kind === "" ? data : data.value
  })));
};
var _default = PostmanQuery;
exports.default = _default;