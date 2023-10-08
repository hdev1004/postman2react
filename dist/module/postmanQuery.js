"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _postman2ReactModule = _interopRequireDefault(require("../css/postman2React.module.css"));
var _recycleBin_white = _interopRequireDefault(require("../images/recycle-bin_white.png"));
var _recycleBin_red = _interopRequireDefault(require("../images/recycle-bin_red.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PostmanQuery = function PostmanQuery(_ref) {
  var kind = _ref.kind,
    data = _ref.data;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    addParam = _useState2[0],
    setAddParam = _useState2[1];
  var _useState3 = (0, _react.useState)(_objectSpread({}, data)),
    _useState4 = _slicedToArray(_useState3, 2),
    queryData = _useState4[0],
    setQueryData = _useState4[1];
  var addParamClick = function addParamClick() {
    var data = _toConsumableArray(addParam);
    data.push("");
    setAddParam(data);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array.isArray(queryData.value) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_query,
    style: {
      height: "auto"
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, "( ", kind, " )"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, queryData.key)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: "500px",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, queryData.value.map(function (array_data, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _postman2ReactModule.default.input_wrap
    }, /*#__PURE__*/_react.default.createElement("input", {
      spellCheck: false,
      "data-type": kind,
      "data-key": queryData.key,
      value: array_data,
      style: {
        marginTop: "9px",
        marginBottom: "7px"
      },
      onChange: function onChange(e) {
        var data = queryData.value;
        data[index] = e.target.value;
        setQueryData(_objectSpread(_objectSpread({}, queryData), {}, {
          value: data
        }));
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: _postman2ReactModule.default.input_delete,
      onClick: function onClick() {
        var tempData = queryData.value;
        tempData.splice(index, 1);
        //console.log(tempData);
        setQueryData(_objectSpread(_objectSpread({}, queryData), {}, {
          value: tempData
        }));
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _recycleBin_white.default
    })));
  }), addParam.map(function (array_data, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _postman2ReactModule.default.input_wrap
    }, /*#__PURE__*/_react.default.createElement("input", {
      spellCheck: false,
      "data-type": kind,
      "data-key": data.key,
      style: {
        marginTop: "9px",
        marginBottom: "7px"
      },
      value: array_data,
      onChange: function onChange(e) {
        var tempData = _toConsumableArray(addParam);
        tempData[index] = e.target.value;
        setAddParam(tempData);
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: _postman2ReactModule.default.input_delete,
      onClick: function onClick() {
        var tempData = _toConsumableArray(addParam);
        tempData.splice(index, 1);
        setAddParam(tempData);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _recycleBin_white.default
    })));
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: _postman2ReactModule.default.postman_folder_btn,
    onClick: addParamClick
  }, "Add Query")))) : /*#__PURE__*/_react.default.createElement("div", {
    className: _postman2ReactModule.default.postman_folder_file_query
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, "( ", kind, " )"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, data.key)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: "500px",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    spellCheck: false,
    "data-type": kind,
    "data-key": data.key,
    defaultValue: data.value
  }))));
};
var _default = PostmanQuery;
exports.default = _default;