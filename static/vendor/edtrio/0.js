(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/plugins/Dummy/DummyPlugin.jsx":
/*!*******************************************!*\
  !*** ./src/plugins/Dummy/DummyPlugin.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));

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

/**
 * Dummy Plugin for testing
 * Does not have any functionality apart from displaying whether it is in edit
 * mode or not.
 * **DEVELOPMENT ONLY**
 */
var DummyPlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyPlugin, _Component);

  function DummyPlugin(props) {
    var _this;

    _classCallCheck(this, DummyPlugin);

    _this = _possibleConstructorReturn(this, (DummyPlugin.__proto__ || Object.getPrototypeOf(DummyPlugin)).call(this, props));
    _this.state = {
      lx: "XXX",
      ly: "YYY"
    };
    return _this;
  }

  _createClass(DummyPlugin, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var isEditable = _ref.isEditable;
      return isEditable && !(0, _lodash.default)(this.state, nextState);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this2 = this;

      this.setState(_defineProperty({}, e.target.name, e.target.value), function () {
        _this2.props.saveContent(_this2.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isEditable = this.props.isEditable;
      return _react.default.createElement("span", null, _react.default.createElement("div", null, "unstyled"), _react.default.createElement("h2", null, "Static dummy text plugin"), _react.default.createElement("div", null, "Editable: ".concat(isEditable)), _react.default.createElement("input", {
        autoFocus: true,
        type: "text",
        name: "lx",
        value: this.state.lx,
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        }
      }), _react.default.createElement("input", {
        type: "text",
        name: "ly",
        value: this.state.ly,
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        }
      }));
    }
  }]);

  return DummyPlugin;
}(_react.Component);

Object.defineProperty(DummyPlugin, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEditable: _propTypes.default.bool.isRequired,
    content: _propTypes.default.object,
    saveContent: _propTypes.default.func.isRequired //isPrint: PropTypes.bool,
    //isViewMode: PropTypes.bool,

  }
});
var _default = DummyPlugin;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=0.js.map