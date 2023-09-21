"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execute = exports.cancel = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var execute = function execute(method, server, ref, setCode) {
  var file = ref.current;
  var inputs = Array.from(file.querySelectorAll("input"));
  var textAreas = Array.from(file.querySelectorAll("textArea"));
  var body = {};
  if (textAreas.length === 2) {
    body = JSON.parse(textAreas[0].value);
  }
  var params = {};
  inputs.map(function (item) {
    if (params[item.dataset.type] === undefined) params[item.dataset.type] = [];
    params[item.dataset.type].push(_defineProperty({}, item.dataset.key, item.value));
  });
  var param = "";
  var query = "";
  var header = {};
  console.log(params);
  Object.keys(params).map(function (type) {
    if (type === "Param") {
      params[type].map(function (value) {
        var key = Object.keys(value)[0];
        param += value[key] + "/";
      });
    } else if (type === "Query") {
      params[type].map(function (value) {
        var key = Object.keys(value)[0];
        query += value[key] + "&";
      });
    } else if (type === "Header") {
      params[type].map(function (value) {
        var key = Object.keys(value)[0];
        header = _objectSpread(_objectSpread({}, header), {}, _defineProperty({}, key, value[key]));
      });
    }
  });
  param = param.slice(0, param.length - 1);
  query = query.slice(0, query.length - 1);
  console.log("PARAM : ", param, "QUERY : ", query, "HEADER : ", header);
  var requestURL = server + "/" + param + "?" + query;
  console.log(requestURL);
  if (method === "GET") {
    _axios.default.get(requestURL, {
      headers: header
    }).then(function (res) {
      var result = res.data.data;
      result = JSON.stringify(result, null, 2);
      setCode(result);
    }).catch(function (err) {});
  } else if (method === "POST") {
    _axios.default.post(requestURL, body, {
      headers: header
    }).then(function (res) {
      var result = res.data.data;
      result = JSON.stringify(result, null, 2);
      setCode(result);
    }).catch(function (err) {});
  }
};
exports.execute = execute;
var cancel = function cancel(ref) {
  alert("Cancel");
  console.log(ref);
};
exports.cancel = cancel;