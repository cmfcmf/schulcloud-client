(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/plugins/DropSlot/DropSlot.jsx":
/*!*******************************************!*\
  !*** ./src/plugins/DropSlot/DropSlot.jsx ***!
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

var _reactDnd = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");

var _plugin = __webpack_require__(/*! edtrio/editor/actions/plugin */ "./src/editor/actions/plugin.js");

var _Plugin = _interopRequireDefault(__webpack_require__(/*! edtrio/models/Plugin */ "./src/models/Plugin.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/DropSlot/styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var accepted_types = Object.values(_Plugin.default.TYPES).filter(function (type) {
  return type !== _Plugin.default.TYPES["LAYOUT"];
});

var collect_drop = function collect_drop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var cardTarget = {
  drop: function drop(props) {
    props.movePlugin(props.slot);
  }
};

var Slot =
/*#__PURE__*/
function (_Component) {
  _inherits(Slot, _Component);

  function Slot(props) {
    var _this;

    _classCallCheck(this, Slot);

    _this = _possibleConstructorReturn(this, (Slot.__proto__ || Object.getPrototypeOf(Slot)).call(this, props));
    _this.slot = _react.default.createRef();
    return _this;
  }

  _createClass(Slot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDropTarget = this.props.connectDropTarget;
      connectDropTarget(this.slot.current);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: _styles.default.slot,
        ref: this.slot
      });
    }
  }]);

  return Slot;
}(_react.Component);

Object.defineProperty(Slot, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    slot: _propTypes.default.number.isRequired,
    id: _propTypes.default.number.isRequired,
    connectDropTarget: _propTypes.default.func.isRequired
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var id = _ref.id;
  return {
    movePlugin: function movePlugin(slot) {
      dispatch((0, _plugin.movePlugin)(id, slot));
    }
  };
};

var _default = (0, _reactRedux.connect)(function () {
  return {};
}, mapDispatchToProps)((0, _reactDnd.DropTarget)(accepted_types, cardTarget, collect_drop)(Slot));

exports.default = _default;

/***/ }),

/***/ "./src/plugins/DropSlot/styles.scss":
/*!******************************************!*\
  !*** ./src/plugins/DropSlot/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"slot":"FVn70E3M04yN5RCdQyZer"};

/***/ }),

/***/ "./src/plugins/TwoColLayout/Edit/LayoutPlugin.jsx":
/*!********************************************************!*\
  !*** ./src/plugins/TwoColLayout/Edit/LayoutPlugin.jsx ***!
  \********************************************************/
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

var _DropSlot = _interopRequireDefault(__webpack_require__(/*! edtrio/plugins/DropSlot/DropSlot */ "./src/plugins/DropSlot/DropSlot.jsx"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./../styles.scss */ "./src/plugins/TwoColLayout/styles.scss"));

var _Editor = _interopRequireDefault(__webpack_require__(/*! edtrio/common/Components/PluginResolver/Editor */ "./src/common/Components/PluginResolver/Editor/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var LayoutPlugin = function LayoutPlugin(props) {
  var id = props.id,
      childs = props.childs,
      options = props.options;
  return _react.default.createElement("div", {
    className: _styles.default.layout_wrapper
  }, _react.default.createElement("div", {
    className: _styles.default.placeholder
  }, _react.default.createElement(_Editor.default, {
    plugin: childs[0].name
  }, function (First) {
    return First ? _react.default.createElement(First, {
      id: childs[0].id,
      options: options
    }) : _react.default.createElement(_DropSlot.default, {
      id: props.id,
      slot: 0
    });
  })), _react.default.createElement("div", {
    className: _styles.default.placeholder
  }, _react.default.createElement(_Editor.default, {
    plugin: childs[1].name
  }, function (Second) {
    return Second ? _react.default.createElement(Second, {
      id: childs[1].id,
      options: options
    }) : _react.default.createElement(_DropSlot.default, {
      id: props.id,
      slot: 1
    });
  })));
};

LayoutPlugin.propTypes = {
  options: _propTypes.default.shape({
    allowChildRearrangement: _propTypes.default.bool
  }),
  childs: _propTypes.default.array.isRequired,
  id: _propTypes.default.number.isRequired
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var plugin = _ref.plugin;
  var id = _ref2.id;
  var childs = plugin.lookup[id].childs;
  return {
    options: plugin.lookup[id].options,
    childs: [0, 1].map(function (i) {
      return plugin.lookup[childs[i]] || {};
    })
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(LayoutPlugin);

exports.default = _default;

/***/ }),

/***/ "./src/plugins/TwoColLayout/styles.scss":
/*!**********************************************!*\
  !*** ./src/plugins/TwoColLayout/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout_wrapper":"_17l7dzoEOoeMg1xG7lXvsD","placeholder":"_2kD-LUXXmX6bUTnCz6Kx_n"};

/***/ })

}]);
//# sourceMappingURL=12.js.map