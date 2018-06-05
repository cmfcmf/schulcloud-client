(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/plugins/Video/VideoPlugin.jsx":
/*!*******************************************!*\
  !*** ./src/plugins/Video/VideoPlugin.jsx ***!
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

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.scss */ "./src/plugins/Video/styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseUrlRegex = /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/;

var VideoPlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoPlugin, _Component);

  function VideoPlugin(props) {
    var _this;

    _classCallCheck(this, VideoPlugin);

    _this = _possibleConstructorReturn(this, (VideoPlugin.__proto__ || Object.getPrototypeOf(VideoPlugin)).call(this, props));
    _this.state = {
      embedURL: ""
    };
    return _this;
  }

  _createClass(VideoPlugin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.props.content));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var isEditable = _ref.isEditable,
          isViewMode = _ref.isViewMode;
      return (isEditable || isViewMode) && !(0, _lodash.default)(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isEditable = _props.isEditable,
          isViewMode = _props.isViewMode,
          saveContent = _props.saveContent;
      var embedURL = this.state.embedURL;
      return _react.default.createElement("div", {
        className: _styles.default.video_wrapper
      }, embedURL && _react.default.createElement("div", {
        className: _styles.default.iframe_wrapper
      }, _react.default.createElement("iframe", {
        src: embedURL,
        frameBorder: "0",
        allowFullScreen: true
      })), !isViewMode && _react.default.createElement("input", {
        className: _styles.default.video_input,
        autoFocus: true,
        type: "url",
        name: "url",
        value: embedURL,
        onInput: function onInput(e) {
          return _this2.handleChange(e);
        },
        disabled: !isEditable,
        placeholder: "Youtube oder Vimeo URL eingeben"
      }));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;

      var _parseUrlRegex$exec = parseUrlRegex.exec(e.target.value),
          _parseUrlRegex$exec2 = _slicedToArray(_parseUrlRegex$exec, 7),
          platform = _parseUrlRegex$exec2[3],
          id = _parseUrlRegex$exec2[6];

      var embedPrefix = "";

      if (platform.indexOf("youtu") > -1) {
        embedPrefix = "https://www.youtube.com/embed/";
      } else if (platform.indexOf("vimeo") > -1) {
        embedPrefix = "https://player.vimeo.com/video/";
      }

      this.setState({
        embedURL: embedPrefix + id
      }, function () {
        return _this3.props.saveContent(_this3.state);
      });
    }
  }]);

  return VideoPlugin;
}(_react.Component);

Object.defineProperty(VideoPlugin, "propTypes", {
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
var _default = VideoPlugin;
exports.default = _default;

/***/ }),

/***/ "./src/plugins/Video/styles.scss":
/*!***************************************!*\
  !*** ./src/plugins/Video/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"video_wrapper":"_1ehvhhAerLvNcfEZ7v6B6","iframe_wrapper":"_2x4AFp9FnJADIS6GlFYqAk","video_input":"_1fVYQOt45kPAhJd9UnUxsF"};

/***/ })

}]);
//# sourceMappingURL=14.js.map