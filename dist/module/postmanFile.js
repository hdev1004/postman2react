"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _postman2ReactModule = _interopRequireDefault(require("../css/postman2React.module.css"));
var _postmanQuery = _interopRequireDefault(require("./postmanQuery"));
var _reactTextareaCodeEditor = _interopRequireDefault(require("@uiw/react-textarea-code-editor"));
var _Status = require("../utils/Status");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var findDescription = function findDescription(item) {
  var query = item.item.request.url.query;
  var descript = "";
  query === null || query === void 0 || query.map(function (data) {
    if (data.key === "postman_description") {
      descript = data.description;
    }
  });
  return descript;
};
var getQuery = function getQuery(item) {
  var _query;
  var query = item.item.request.url.query;
  if (query === undefined) return [];
  query = (_query = query) === null || _query === void 0 ? void 0 : _query.filter(function (prev) {
    return prev.key !== "postman_description";
  });
  return query;
};
var getHeader = function getHeader(item) {
  var header = item.item.request.header;
  return header;
};
var getParam = function getParam(item) {
  var path = item.item.request.url.path;
  var result = [];
  path.map(function (item) {
    if (item.includes("{") && item.includes("}")) {
      var data = item.replace(/{/g, "").replace(/}/g, "");
      result.push(data);
    }
  });
  return result;
};
var getBody = function getBody(item) {
  var body = item.item.request.body;
  if (body === undefined) return undefined;
  body = JSON.parse(body.raw);
  return body;
};
var methodStyling = function methodStyling(method) {
  if (method === "GET") return _postman2ReactModule.default.postman_folder_file_GET;else if (method === "POST") return _postman2ReactModule.default.postman_folder_file_POST;
};
var methodStylingTitle = function methodStylingTitle(method) {
  if (method === "GET") return _postman2ReactModule.default.postman_folder_method_GET;else if (method === "POST") return _postman2ReactModule.default.postman_folder_method_POST;
};
var PostmanFile = function PostmanFile(item) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isClick = _useState2[0],
    setIsClick = _useState2[1];
  var method = item.item.request.method;
  var descript = findDescription(item);
  var query = getQuery(item);
  var header = getHeader(item);
  var param = getParam(item);
  var body = getBody(item);
  var fileRef = (0, _react.useRef)(null);
  var path = item.item.request.url.path;
  path = path.join("/").replace(/\{\w+\}/g, "").replace(/\/+/g, "/");
  if (path[path.length - 1] === "/") {
    path = path.slice(0, path.length - 1);
  }
  var url = item.item.request.url;
  var server = "".concat(url.protocol, "://").concat(url.host.join("."), ":").concat(url.port, "/").concat(path);
  //console.log(server);

  var _React$useState = _react.default.useState(body === undefined ? "" : JSON.stringify(body, null, 2)),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    code = _React$useState2[0],
    setCode = _React$useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    result = _useState4[0],
    setResult = _useState4[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: fileRef,
    className: "".concat(isClick ? _postman2ReactModule.default.postman_folder_file : _postman2ReactModule.default.postman_folder_file_hidden, " ").concat(methodStyling(method))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_title,
    onClick: function onClick() {
      setIsClick(!isClick);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_postman2ReactModule.default.postman_folder_method, " ").concat(methodStylingTitle(method))
  }, method), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_url
  }, isClick ? "📖" : "📘", " ", "/" + item.item.request.url.path.join("/")), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_descript
  }, descript)), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_detail
  }, param.length === 0 && query.length === 0 && header.length === 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_param
  }, "Parameters"), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_wrap
  }, header.map(function (data) {
    return /*#__PURE__*/_react.default.createElement(_postmanQuery.default, {
      kind: "Header",
      data: data
    });
  }), param.map(function (data) {
    return /*#__PURE__*/_react.default.createElement(_postmanQuery.default, {
      kind: "Param",
      data: data
    });
  }), query.map(function (data) {
    return /*#__PURE__*/_react.default.createElement(_postmanQuery.default, {
      kind: "Query",
      data: data
    });
  }))), body ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_param
  }, "Body"), /*#__PURE__*/_react.default.createElement(_reactTextareaCodeEditor.default, {
    value: code,
    language: "json",
    placeholder: "Body Input",
    onChange: function onChange(evn) {
      return setCode(evn.target.value);
    },
    padding: 15,
    style: {
      fontSize: 15,
      backgroundColor: "white",
      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: "40px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_execute_wrap
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      (0, _Status.execute)(method, server, fileRef, setResult);
    }
  }, "Execute"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      (0, _Status.cancel)(fileRef);
    }
  }, "Cancle")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: "80px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_param
  }, "Result"), /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_scroll,
    style: {
      maxHeight: "400px",
      overflow: "auto"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactTextareaCodeEditor.default, {
    disabled: true,
    value: result,
    language: "json",
    placeholder: "result",
    padding: 15,
    style: {
      fontSize: 15,
      backgroundColor: "white",
      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
    }
  }))));
};
var _default = PostmanFile;
exports.default = _default;