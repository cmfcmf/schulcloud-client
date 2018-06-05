(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/plugins/Image/ImagePlugin.jsx":
/*!*******************************************!*\
  !*** ./src/plugins/Image/ImagePlugin.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/Image/styles.scss"));

var _print = _interopRequireDefault(__webpack_require__(/*! ./print.scss */ "./src/plugins/Image/print.scss"));

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

var ImagePlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(ImagePlugin, _Component);

  function ImagePlugin(props) {
    var _this;

    _classCallCheck(this, ImagePlugin);

    _this = _possibleConstructorReturn(this, (ImagePlugin.__proto__ || Object.getPrototypeOf(ImagePlugin)).call(this, props));
    _this.state = {
      embedURL: ""
    };
    return _this;
  }

  _createClass(ImagePlugin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isEditable = _props.isEditable,
          isViewMode = _props.isViewMode;
      var embedURL = this.state.embedURL;
      return _react.default.createElement("span", null, _react.default.createElement("a", {
        href: isViewMode ? embedURL : "#"
      }, _react.default.createElement("img", {
        src: embedURL,
        className: embedURL ? _styles.default.imagePlugin : ""
      }), !isViewMode && _react.default.createElement("input", {
        id: _styles.default.imageUrl,
        autoFocus: true,
        type: "url",
        name: "url",
        value: embedURL,
        onInput: function onInput(e) {
          return _this2.handleChange(e);
        },
        disabled: !isEditable,
        placeholder: "Bild URL eingeben"
      })), _react.default.createElement("span", {
        className: _print.default.link
      }, embedURL));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;

      this.setState({
        embedURL: e.target.value
      }, function () {
        return _this3.props.saveContent(_this3.state);
      });
    }
  }]);

  return ImagePlugin;
}(_react.Component);

Object.defineProperty(ImagePlugin, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEditable: _propTypes.default.bool,
    isViewMode: _propTypes.default.bool.isRequired,
    content: _propTypes.default.object,
    saveContent: _propTypes.default.func
  }
});
var _default = ImagePlugin;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/Image/print.scss":
/*!**************************************!*\
  !*** ./src/plugins/Image/print.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"link":"_1TIDxVDd_xONDKgywgNcVi"};

/***/ }),

/***/ "./src/plugins/Image/styles.scss":
/*!***************************************!*\
  !*** ./src/plugins/Image/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"imagePlugin":"_1vq93VoXyLSX6teQTt-KlR","imageUrl":"_2xPvS9WBB84e7Z6R-wiQSs"};

/***/ })

}]);
//# sourceMappingURL=2.js.map