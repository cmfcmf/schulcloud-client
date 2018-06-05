(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/plugins/TwoColLayout/View/LayoutPlugin.jsx":
/*!********************************************************!*\
  !*** ./src/plugins/TwoColLayout/View/LayoutPlugin.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./../styles.scss */ "./src/plugins/TwoColLayout/styles.scss"));

var _Viewer = _interopRequireDefault(__webpack_require__(/*! edtrio/common/Components/PluginResolver/Viewer */ "./src/common/Components/PluginResolver/Viewer/index.js"));

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
  }, _react.default.createElement(_Viewer.default, {
    plugin: childs[0].name
  }, function (First) {
    return First ? _react.default.createElement(First, {
      id: childs[0].id,
      content: childs[0].content,
      options: options,
      isEditable: false
    }) : _react.default.createElement("p", null, "Leer");
  })), _react.default.createElement("div", {
    className: _styles.default.placeholder
  }, _react.default.createElement(_Viewer.default, {
    plugin: childs[1].name
  }, function (Second) {
    return Second ? _react.default.createElement(Second, {
      id: childs[1].id,
      options: options,
      content: childs[1].content,
      isEditable: false
    }) : _react.default.createElement("p", null, "Leer");
  })));
};

LayoutPlugin.propTypes = {
  options: _propTypes.default.shape({
    allowChildRearrangement: _propTypes.default.bool
  }),
  childs: _propTypes.default.array.isRequired,
  id: _propTypes.default.number.isRequired
};
var _default = LayoutPlugin;
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
//# sourceMappingURL=7.js.map