(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/CheckboxEntry.jsx":
/*!*************************************************************************!*\
  !*** ./src/plugins/MultipleChoice/Edit/CheckboxEntry/CheckboxEntry.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/styles.scss"));

var _Checkbox = __webpack_require__(/*! rmwc/Checkbox */ "./node_modules/rmwc/Checkbox/index.js");

var _TextField = __webpack_require__(/*! rmwc/TextField */ "./node_modules/rmwc/TextField/index.js");

var _Icon = __webpack_require__(/*! rmwc/Icon */ "./node_modules/rmwc/Icon/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxEntry =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckboxEntry, _Component);

  function CheckboxEntry() {
    _classCallCheck(this, CheckboxEntry);

    return _possibleConstructorReturn(this, (CheckboxEntry.__proto__ || Object.getPrototypeOf(CheckboxEntry)).apply(this, arguments));
  }

  _createClass(CheckboxEntry, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          labelIsEditable = _props.labelIsEditable,
          toggleChoice = _props.toggleChoice,
          nextChoice = _props.nextChoice,
          setChoice = _props.setChoice,
          label = _props.label,
          id = _props.id,
          deleteChoice = _props.deleteChoice,
          isEditable = _props.isEditable,
          activateEntry = _props.activateEntry;
      return _react.default.createElement("div", {
        className: !labelIsEditable ? _styles.default.checkbox_wrapper : _styles.default.checkbox_wrapperli
      }, _react.default.createElement(_Checkbox.Checkbox, {
        onClick: function onClick(e) {
          return toggleChoice(e, +id);
        },
        tabIndex: -1
      }), labelIsEditable ? _react.default.createElement(_TextField.TextField, {
        rootProps: {
          style: {
            width: "100%"
          }
        },
        onKeyDown: function onKeyDown(e) {
          return nextChoice(e);
        },
        onInput: function onInput(e) {
          return setChoice(e.target.value);
        },
        value: label,
        label: "Option ".concat(id),
        tabIndex: 0,
        autoFocus: true
      }) : _react.default.createElement("label", {
        onClick: function onClick() {
          return activateEntry(+id);
        },
        onFocus: function onFocus() {
          return activateEntry(+id);
        },
        tabIndex: 0,
        className: _styles.default.checkbox_label
      }, label || "Option ".concat(id)), isEditable ? _react.default.createElement(_Icon.Icon, {
        onClick: function onClick() {
          return deleteChoice(+id);
        },
        className: _styles.default.removeButton
      }, "clear") : null);
    }
  }]);

  return CheckboxEntry;
}(_react.Component);

CheckboxEntry.propTypes = {
  labelIsEditable: _propTypes.default.bool,
  isEditable: _propTypes.default.bool,
  activateEntry: _propTypes.default.func,
  toggleChoice: _propTypes.default.func,
  nextChoice: _propTypes.default.func,
  setChoice: _propTypes.default.func,
  deleteChoice: _propTypes.default.func,
  label: _propTypes.default.string,
  id: _propTypes.default.number
};
var _default = CheckboxEntry;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/index.js":
/*!****************************************************************!*\
  !*** ./src/plugins/MultipleChoice/Edit/CheckboxEntry/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CheckboxEntry = _interopRequireDefault(__webpack_require__(/*! ./CheckboxEntry */ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/CheckboxEntry.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _CheckboxEntry.default;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/styles.scss":
/*!*******************************************************************!*\
  !*** ./src/plugins/MultipleChoice/Edit/CheckboxEntry/styles.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"checkbox_wrapper":"_3PkQ_teIBDzFRUrOLx3YSi","removeButton":"_2WSgnX_oRvp4AVBgRtf5Mk","checkbox_wrapperli":"_1kmADqGhqSD2CaF3BNWzE5","checkbox_label":"H5qGWe68MaRjeUUdPNQ_v"};

/***/ }),

/***/ "./src/plugins/MultipleChoice/Edit/MultipleChoice.jsx":
/*!************************************************************!*\
  !*** ./src/plugins/MultipleChoice/Edit/MultipleChoice.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _has = _interopRequireDefault(__webpack_require__(/*! has */ "./node_modules/has/src/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./../styles.scss */ "./src/plugins/MultipleChoice/styles.scss"));

var _styles2 = _interopRequireDefault(__webpack_require__(/*! ./CheckboxEntry/styles.scss */ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/styles.scss"));

var _TextField = __webpack_require__(/*! rmwc/TextField */ "./node_modules/rmwc/TextField/index.js");

var _Checkbox = __webpack_require__(/*! rmwc/Checkbox */ "./node_modules/rmwc/Checkbox/index.js");

var _UI = __webpack_require__(/*! edtrio/UI */ "./src/UI/index.js");

var _CheckboxEntry = _interopRequireDefault(__webpack_require__(/*! ./CheckboxEntry */ "./src/plugins/MultipleChoice/Edit/CheckboxEntry/index.js"));

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleChoice =
/*#__PURE__*/
function (_Component) {
  _inherits(MultipleChoice, _Component);

  function MultipleChoice(props) {
    var _this;

    _classCallCheck(this, MultipleChoice);

    _this = _possibleConstructorReturn(this, (MultipleChoice.__proto__ || Object.getPrototypeOf(MultipleChoice)).call(this, props));
    _this.state = {
      active: 0,
      question: "",
      choices: {
        1: {
          label: ""
        }
      },
      solution: []
    };
    return _this;
  } //TODO


  _createClass(MultipleChoice, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
    }
  }, {
    key: "handleQuestionChange",
    value: function handleQuestionChange(value) {
      this.setState({
        question: value
      });
    }
  }, {
    key: "toggleChoice",
    value: function toggleChoice(e, id) {
      var _this2 = this;

      var index = this.state.solution.findIndex(function (i) {
        return i === id;
      });

      var solution = _toConsumableArray(this.state.solution);

      if (index > -1) {
        solution = this.state.solution.filter(function (i) {
          return i !== id;
        });
      } else {
        solution.push(id);
      }

      this.setState({
        solution: solution
      }, function () {
        return _this2.props.saveContent(_this2.state);
      });
    }
  }, {
    key: "setChoice",
    value: function setChoice(value) {
      var _this3 = this;

      this.setState({
        choices: _objectSpread({}, this.state.choices, _defineProperty({}, this.state.active, {
          label: value
        }))
      }, function () {
        return _this3.props.saveContent(_this3.state);
      });
    }
  }, {
    key: "activateEntry",
    value: function activateEntry(id) {
      this.setState({
        active: id
      });
    }
    /**
     * Delete a choice option from the state
     * @param {*} id which choice
     */

  }, {
    key: "deleteChoice",
    value: function deleteChoice(id) {
      var _this4 = this;

      var deleteableChoices = this.state.choices;
      delete deleteableChoices[id];
      this.setState({
        choices: _objectSpread({}, deleteableChoices)
      }, function () {
        return _this4.props.saveContent(_this4.state);
      });
    }
    /**
     * Jump to the next choice option (or append a new one)
     * @param {*} e event that was fired
     */

  }, {
    key: "nextChoice",
    value: function nextChoice(e) {
      if (e.keyCode && e.keyCode !== 13) {
        return;
      }

      var nextOption = this.state.active + 1;
      this.setState({
        active: nextOption,
        choices: _objectSpread({}, this.state.choices, _defineProperty({}, nextOption, {
          label: ""
        }))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _state = this.state,
          choices = _state.choices,
          active = _state.active;
      var isEditable = this.props.isEditable;
      return _react.default.createElement("span", null, _react.default.createElement(_TextField.TextField, {
        fullwidth: true,
        autoFocus: true,
        placeholder: "Untitled Question",
        value: this.state.question,
        onKeyDown: function onKeyDown(e) {
          return _this5.nextChoice(e);
        },
        tabIndex: 0,
        onChange: function onChange(e) {
          return _this5.handleQuestionChange(e.target.value);
        },
        className: _styles.default.question
      }), Object.entries(choices).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            label = _ref2[1].label;

        return _react.default.createElement(_CheckboxEntry.default, {
          key: id,
          id: +id,
          labelIsEditable: active === +id && isEditable,
          toggleChoice: _this5.toggleChoice.bind(_this5),
          nextChoice: _this5.nextChoice.bind(_this5),
          setChoice: _this5.setChoice.bind(_this5),
          deleteChoice: _this5.deleteChoice.bind(_this5),
          activateEntry: _this5.activateEntry.bind(_this5),
          label: label,
          isEditable: isEditable
        });
      }), isEditable ? _react.default.createElement("span", null, _react.default.createElement("div", {
        className: _styles2.default.checkbox_wrapper
      }, _react.default.createElement(_Checkbox.Checkbox, {
        disabled: true
      }), _react.default.createElement("label", {
        onClick: function onClick(e) {
          return _this5.nextChoice(e);
        }
      }, _react.default.createElement("div", {
        className: _styles.default.addOption
      }, "Add Option"))), _react.default.createElement(_UI.Infobox, null, "Don't forget to check the boxes next to the correct answer")) : null);
    }
  }]);

  return MultipleChoice;
}(_react.Component);

Object.defineProperty(MultipleChoice, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEditable: _propTypes.default.bool.isRequired,
    content: _propTypes.default.object,
    saveContent: _propTypes.default.func.isRequired
  }
});
var _default = MultipleChoice;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/MultipleChoice/styles.scss":
/*!************************************************!*\
  !*** ./src/plugins/MultipleChoice/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"question":"md7Lq9d9PQ2JrWhhOTLpD","addOption":"IMyq4CFRkHDXALEk01H81"};

/***/ })

}]);
//# sourceMappingURL=11.js.map