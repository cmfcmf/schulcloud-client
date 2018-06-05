(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/plugins/Text/TextPlugin.jsx":
/*!*****************************************!*\
  !*** ./src/plugins/Text/TextPlugin.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactQuill = _interopRequireDefault(__webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/Text/styles.scss"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var TextPlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(TextPlugin, _Component);

  function TextPlugin(props) {
    var _this;

    _classCallCheck(this, TextPlugin);

    _this = _possibleConstructorReturn(this, (TextPlugin.__proto__ || Object.getPrototypeOf(TextPlugin)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "focusQuill", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.reactQuillRef || typeof _this.reactQuillRef.getEditor !== 'function') return;

        _this.reactQuillRef.getEditor().focus();
      }
    });
    _this.reactQuillRef = null;
    _this.state = {
      text: "",
      visible: false
    };
    _this.modules = {
      toolbar: [[{
        'header': [1, 2, 3, false]
      }], ['bold', 'italic', 'underline', 'strike'], [{
        'align': []
      }], ['blockquote', 'code-block'], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], [{
        'color': []
      }, {
        'background': []
      }], ['clean']]
    };
    return _this;
  }

  _createClass(TextPlugin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
      this.focusQuill();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        return _this2.focusQuill();
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      var _this3 = this;

      this.setState({
        text: value
      }, function () {
        return _this3.props.saveContent({
          text: _this3.state.text
        });
      });
    } //TODO

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isEditable = this.props.isEditable;
      var visible = this.state.visible;
      return _react.default.createElement("span", null, _react.default.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.quilljs.com/1.2.6/quill.snow.css",
        type: "text/css",
        onLoad: function onLoad() {
          return _this4.setState({
            visible: true
          });
        }
      }), isEditable && visible && _react.default.createElement(_reactQuill.default, {
        id: _styles.default.quill_editor,
        ref: function ref(el) {
          _this4.reactQuillRef = el;
        },
        modules: this.modules,
        value: this.state.text,
        placeholder: "Start typing...",
        onChange: function onChange(e) {
          return _this4.handleChange(e);
        }
      }), !isEditable && _react.default.createElement("div", {
        className: "ql-editor ".concat(_styles.default.ql_editor),
        dangerouslySetInnerHTML: {
          __html: this.state.text || "<p>Empty text plugin</p>"
        }
      }));
    }
  }]);

  return TextPlugin;
}(_react.Component);

TextPlugin.propTypes = {
  isEditable: _propTypes.default.bool.isRequired,
  content: _propTypes.default.object,
  saveContent: _propTypes.default.func.isRequired
};
var _default = TextPlugin;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/Text/styles.scss":
/*!**************************************!*\
  !*** ./src/plugins/Text/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ql_editor":"_2iZ-_BpSmV-I7eH7Rs_5IX"};

/***/ })

}]);
//# sourceMappingURL=12.js.map