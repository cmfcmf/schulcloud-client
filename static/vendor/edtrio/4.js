(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./src/plugins/MultipleChoice/View/MultipleChoice.jsx":
/*!************************************************************!*\
  !*** ./src/plugins/MultipleChoice/View/MultipleChoice.jsx ***!
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

var _Checkbox = __webpack_require__(/*! rmwc/Checkbox */ "./node_modules/rmwc/Checkbox/index.js");

var _TextField = __webpack_require__(/*! rmwc/TextField */ "./node_modules/rmwc/TextField/index.js");

var _UI = __webpack_require__(/*! edtrio/UI */ "./src/UI/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleChoice =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MultipleChoice, _PureComponent);

  function MultipleChoice(props) {
    var _this;

    _classCallCheck(this, MultipleChoice);

    _this = _possibleConstructorReturn(this, (MultipleChoice.__proto__ || Object.getPrototypeOf(MultipleChoice)).call(this, props));
    _this.state = {
      valid: null,
      userChoice: []
    };
    return _this;
  }

  _createClass(MultipleChoice, [{
    key: "validate",
    value: function validate() {
      var _this2 = this;

      this.setState({
        valid: this.props.content.solution.every(function (solution) {
          return _this2.state.userChoice.includes(solution);
        }) && this.props.content.solution.length === this.state.userChoice.length
      });
    }
  }, {
    key: "toggleChoice",
    value: function toggleChoice(id) {
      this.setState({
        valid: null
      }); //reset Validator button

      var index = this.state.userChoice.findIndex(function (e) {
        return e === id;
      });

      var choices = _toConsumableArray(this.state.userChoice);

      if (index > -1) {
        choices = this.state.userChoice.filter(function (i) {
          return i !== id;
        });
      } else {
        choices.push(id);
      }

      this.setState({
        userChoice: choices
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props$content = this.props.content,
          question = _props$content.question,
          choices = _props$content.choices,
          solution = _props$content.solution;
      return _react.default.createElement("span", null, _react.default.createElement("p", {
        className: _styles.default.question
      }, question), Object.entries(choices).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            label = _ref2[1].label;

        return _react.default.createElement("div", {
          key: id
        }, _react.default.createElement(_Checkbox.Checkbox, {
          onClick: function onClick() {
            return _this3.toggleChoice(+id);
          }
        }, label));
      }), _react.default.createElement(_UI.ValidatorButton, {
        onClick: function onClick() {
          return _this3.validate();
        },
        valid: this.state.valid
      }));
    }
  }]);

  return MultipleChoice;
}(_react.PureComponent);

Object.defineProperty(MultipleChoice, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    content: _propTypes.default.object.isRequired
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
//# sourceMappingURL=4.js.map