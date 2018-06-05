(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/plugins/Tool/Tool.jsx":
/*!***********************************!*\
  !*** ./src/plugins/Tool/Tool.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _UI = __webpack_require__(/*! edtrio/UI */ "./src/UI/index.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/Tool/styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tool =
/*#__PURE__*/
function (_Component) {
  _inherits(Tool, _Component);

  function Tool(props) {
    var _this;

    _classCallCheck(this, Tool);

    _this = _possibleConstructorReturn(this, (Tool.__proto__ || Object.getPrototypeOf(Tool)).call(this, props));
    var ltiBaseUrl = document.getElementById("root").dataset.ltiBaseUrl;
    _this.state = {
      tool: _this.props.initialState ? _this.props.initialState.tool : {},
      ltiBaseUrl: ltiBaseUrl
    };
    return _this;
  }

  _createClass(Tool, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
      this.props.saveContent({
        tool: this.state.tool
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(tool) {
      var _this2 = this;

      this.setState({
        tool: tool
      }, function () {
        return _this2.props.saveContent({
          tool: _this2.state.tool
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          tool = _state.tool,
          ltiBaseUrl = _state.ltiBaseUrl;
      var isEditable = this.props.isEditable;
      var src = tool.ltiId ? ltiBaseUrl + tool.ltiId : tool.url;
      return _react.default.createElement("span", null, isEditable && _react.default.createElement("span", null, tool && _react.default.createElement("div", null, tool.name, _react.default.createElement("br", null), _react.default.createElement("iframe", {
        src: src
      }))), !isEditable && tool && _react.default.createElement("iframe", {
        onClick: function onClick(e) {
          return e.target.requestFullscreen();
        },
        src: src
      }));
    }
  }]);

  return Tool;
}(_react.Component);

exports.default = Tool;
Object.defineProperty(Tool, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEditable: _propTypes.default.bool.isRequired,
    content: _propTypes.default.object,
    saveContent: _propTypes.default.func.isRequired,
    initialState: _propTypes.default.object
  }
});

/***/ }),

/***/ "./src/plugins/Tool/styles.scss":
/*!**************************************!*\
  !*** ./src/plugins/Tool/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=22.js.map