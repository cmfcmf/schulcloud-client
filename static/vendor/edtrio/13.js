(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/rmwc/Fab/index.js":
/*!****************************************!*\
  !*** ./node_modules/rmwc/Fab/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fab = exports.FabIcon = exports.FabRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__(/*! ../Icon */ "./node_modules/rmwc/Icon/index.js");

var _Provider = __webpack_require__(/*! ../Provider */ "./node_modules/rmwc/Provider/index.js");

var _Base = __webpack_require__(/*! ../Base */ "./node_modules/rmwc/Base/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Private
 */

var FabRoot = exports.FabRoot = (0, _Base.withRipple)({ surface: false })((0, _Base.simpleTag)({
  displayName: 'FabRoot',
  tag: 'button',
  classNames: function classNames(props) {
    return ['mdc-fab', {
      'mdc-fab--mini': props.mini,
      'mdc-fab--exited': props.exited
    }];
  },
  defaultProps: {
    cssOnly: false,
    mini: false
  },
  consumeProps: ['mini', 'cssOnly', 'exited']
}));

var FabIcon = exports.FabIcon = (0, _Base.simpleTag)({
  displayName: 'FabIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-fab__icon'
});

/**
 * Public
 */
/** A floating action button component */

var Fab = exports.Fab = function (_React$Component) {
  _inherits(Fab, _React$Component);

  function Fab() {
    _classCallCheck(this, Fab);

    return _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  _createClass(Fab, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonDefaultRipple = this.providerOptions.buttonDefaultRipple;

      var _props = this.props,
          ripple = _props.ripple,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['ripple', 'className', 'children']);

      var shouldRipple = ripple === undefined ? buttonDefaultRipple : ripple;
      var classes = (0, _classnames2.default)(this.providerOptions.iconClassNamePrefix, className);

      return React.createElement(
        FabRoot,
        Object.assign({ className: classes, ripple: shouldRipple }, rest),
        React.createElement(
          FabIcon,
          null,
          children
        )
      );
    }
  }]);

  return Fab;
}(React.Component);

Object.defineProperty(Fab, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    mini: undefined,
    exited: undefined,
    cssOnly: undefined
  }
});
Object.defineProperty(Fab, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: _propTypes2.default.object
  }
});
exports.default = Fab;


/***/ }),

/***/ "./src/editor/components/AddPlugin/AddPlugin.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/AddPlugin/AddPlugin.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/@7rulnik/react-loadable/lib/index.js"));

var _UI = __webpack_require__(/*! edtrio/UI */ "./src/UI/index.js");

var _Fab = __webpack_require__(/*! rmwc/Fab */ "./node_modules/rmwc/Fab/index.js");

var _Editor = _interopRequireDefault(__webpack_require__(/*! edtrio/common/Components/PluginResolver/Editor */ "./src/common/Components/PluginResolver/Editor/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/editor/components/AddPlugin/styles.scss"));

var _Plugin = _interopRequireDefault(__webpack_require__(/*! edtrio/models/Plugin */ "./src/models/Plugin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var AddPlugin =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AddPlugin, _PureComponent);

  function AddPlugin(props) {
    var _this;

    _classCallCheck(this, AddPlugin);

    _this = _possibleConstructorReturn(this, (AddPlugin.__proto__ || Object.getPrototypeOf(AddPlugin)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "renderMenuItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info, key) {
        return _react.default.createElement("div", {
          key: key,
          className: _styles.default.item
        }, _react.default.createElement(_UI.MenuItem, {
          key: info.name,
          onClick: function onClick(e) {
            _this.handleClose();

            _this.props.addPlugin(info);
          }
        }, _react.default.createElement(_UI.PluginPreview, {
          name: info.name,
          displayName: info.displayName,
          image: info.preview_image,
          description: info.description
        })));
      }
    });
    _this.state = {
      open: true
    };
    _this.types = Object.keys(_Plugin.default.TYPES).reduce(function (acc, pl) {
      return _objectSpread({}, acc, _defineProperty({}, pl.toLocaleLowerCase(), _Editor.default.allPlugins.reduce(function (acc, info) {
        if (info.type !== pl) {
          return acc;
        }

        if (info.multi) {
          return _toConsumableArray(acc).concat(_toConsumableArray(info.multi.map(function (item) {
            return _objectSpread({}, item, {
              preview_image: info.preview_image,
              name: info.name
            });
          })));
        }

        return _toConsumableArray(acc).concat([info]);
      }, [])));
    }, {});
    return _this;
  }

  _createClass(AddPlugin, [{
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("span", null, _react.default.createElement(_UI.Modal, {
        open: this.state.open,
        onClose: function onClose() {
          return _this2.handleClose();
        }
      }, _react.default.createElement("span", null, _react.default.createElement("div", {
        className: _styles.default.title
      }, "Add element"), Object.entries(this.types).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        return _react.default.createElement("div", {
          key: key
        }, _react.default.createElement("div", {
          className: _styles.default.title_block
        }, key.charAt(0).toUpperCase() + key.slice(1)), _react.default.createElement("div", {
          className: _styles.default.container
        }, val.map(function (item, j) {
          return _this2.renderMenuItem(item, j);
        })));
      }))), _react.default.createElement(_Fab.Fab, {
        className: _styles.default.floating_button,
        onClick: function onClick() {
          return _this2.handleOpen();
        }
      }, "add"));
    }
  }]);

  return AddPlugin;
}(_react.PureComponent);

Object.defineProperty(AddPlugin, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addPlugin: _propTypes.default.func.isRequired
  }
});
Object.defineProperty(AddPlugin, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "AddPlugin Button"
});
var _default = AddPlugin;
exports.default = _default;

/***/ }),

/***/ "./src/editor/components/AddPlugin/styles.scss":
/*!*****************************************************!*\
  !*** ./src/editor/components/AddPlugin/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"floating_button":"_2lokVvCck0vZ9lsODN_fZ0","item":"_3tmQ36YJUkWtlWvAmzElPv","container":"_1sOwgEPelunzfVaYaYSvr9","title":"_9h9bLJ5TmWp67_J5iOyaX","title_block":"_2jQM1IMyGrgT4q-GIz_-yf"};

/***/ })

}]);
//# sourceMappingURL=13.js.map