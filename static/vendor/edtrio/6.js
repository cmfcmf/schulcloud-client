(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Tool =
/*#__PURE__*/
function (_Component) {
  _inherits(Tool, _Component);

  function Tool(props) {
    var _this;

    _classCallCheck(this, Tool);

    _this = _possibleConstructorReturn(this, (Tool.__proto__ || Object.getPrototypeOf(Tool)).call(this, props));
    var ltiBaseUrl = document.getElementById("root").dataset.ltiBaseUrl;
    _this.refFrame = _react.default.createRef();
    _this.setDeeplink = _this.setDeeplink.bind(_assertThisInitialized(_this));
    _this.state = {
      tool: _this.props.initialState ? _this.props.initialState.tool : {},
      ltiBaseUrl: ltiBaseUrl
    };
    return _this;
  }

  _createClass(Tool, [{
    key: "setDeeplink",
    value: function setDeeplink(event) {
      if (event.data.url && this.props.id.toString() === event.data.windowName) {
        this.setState({
          tool: _objectSpread({}, this.state.tool, {
            url: event.data.url
          })
        });
        this.props.saveContent({
          tool: this.state.tool
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
      this.props.saveContent({
        tool: this.state.tool
      });
      window.addEventListener("message", this.setDeeplink, false);
    }
  }, {
    key: "enterFullscreen",
    value: function enterFullscreen() {
      var elem = this.refFrame.current;

      if (elem.requestFullScreen) {
        elem.requestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tool = _state.tool,
          ltiBaseUrl = _state.ltiBaseUrl;
      var _props = this.props,
          isEditable = _props.isEditable,
          id = _props.id;
      var src = null;

      if (tool.ltiId && ltiBaseUrl) {
        src = ltiBaseUrl + tool.ltiId;
      } else if (tool.url) {
        src = tool.url;
      }

      if (isEditable) {
        src += "".concat(src.indexOf('?') === -1 ? '?' : '&', "edit=1");
      }

      console.log(src);
      return src ? _react.default.createElement("div", null, _react.default.createElement("button", {
        className: _styles.default.fullscreenButton,
        onClick: function onClick(e) {
          return _this2.enterFullscreen();
        }
      }, "Vollbild"), _react.default.createElement("iframe", {
        className: _styles.default.frame,
        name: id,
        src: src,
        ref: this.refFrame
      })) : _react.default.createElement("p", null, "Das Tool kann eventuell nur in der Schul-Cloud angezeigt werden.");
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
    initialState: _propTypes.default.object,
    id: _propTypes.default.number.isRequired
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
module.exports = {"frame":"_2SAoUUpOEM3rfSghR6IWyN","fullscreenButton":"_1l7MJr1zp4OFDhB1r8GjIX"};

/***/ })

}]);
//# sourceMappingURL=6.js.map