(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/plugins/GeoGebra/GeoGebra.jsx":
/*!*******************************************!*\
  !*** ./src/plugins/GeoGebra/GeoGebra.jsx ***!
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

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/GeoGebra/styles.scss"));

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

//jaz8F8hZ
var Geogebra =
/*#__PURE__*/
function (_Component) {
  _inherits(Geogebra, _Component);

  function Geogebra(props) {
    var _this;

    _classCallCheck(this, Geogebra);

    _this = _possibleConstructorReturn(this, (Geogebra.__proto__ || Object.getPrototypeOf(Geogebra)).call(this, props));
    _this.state = {
      id: "",
      geogebra: null
    };
    _this.applet = _react.default.createRef();
    return _this;
  }

  _createClass(Geogebra, [{
    key: "renderApplet",
    value: function renderApplet(id) {
      var _this2 = this;

      this.setState(function (state) {
        var app = new _this2.state.geogebra({
          material_id: id,
          width: _this2.applet.current.offsetWidth,
          height: 500
        }, true);
        app.inject("ggb-element");
        return _objectSpread({}, state, {
          id: id
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      __webpack_require__.e(/*! import() */ 9).then(function() { var module = __webpack_require__(/*! ./gg.js */ "./src/plugins/GeoGebra/gg.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }).then(function (GeoGebra) {
        _this3.setState(function (state) {
          return _objectSpread({}, state, {
            geogebra: GeoGebra.default
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var id = this.state.id;
      return _react.default.createElement("span", null, _react.default.createElement("div", {
        id: "ggb-element",
        ref: this.applet
      }), _react.default.createElement("div", null, _react.default.createElement("input", {
        className: _styles.default.id_input,
        onInput: function onInput(e) {
          return _this4.renderApplet(e.target.value);
        },
        type: "text",
        placeholder: "GeoGebra Id"
      })));
    }
  }]);

  return Geogebra;
}(_react.Component);

exports.default = Geogebra;
Object.defineProperty(Geogebra, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEditable: _propTypes.default.bool.isRequired,
    content: _propTypes.default.object,
    saveContent: _propTypes.default.func.isRequired
  }
});

/***/ }),

/***/ "./src/plugins/GeoGebra/styles.scss":
/*!******************************************!*\
  !*** ./src/plugins/GeoGebra/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"id_input":"_2cuNNliiMFcn2xrEoCyGHc"};

/***/ })

}]);
//# sourceMappingURL=1.js.map