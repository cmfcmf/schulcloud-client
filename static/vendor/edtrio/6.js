(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t})(n(0)),o=u(n(1)),a=u(n(439)),i=u(n(437));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e})(e):t}var p=(function(e){function t(e){var n;return (function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),(n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={embedURL:""},n}var n,o,u;return (function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},this.props.content))}},{key:"render",value:function(){var e=this,t=this.props,n=t.isEditable,o=t.isViewMode,u=this.state.embedURL;return r.default.createElement("span",null,r.default.createElement("a",{href:o?u:"#"},r.default.createElement("img",{src:u,className:u?a.default.imagePlugin:""}),!o&&r.default.createElement("input",{id:a.default.imageUrl,autoFocus:!0,type:"url",name:"url",value:u,onInput:function(t){return e.handleChange(t)},disabled:!n,placeholder:"Bild URL eingeben"})),r.default.createElement("span",{className:i.default.link},u))}},{key:"handleChange",value:function(e){var t=this;this.setState({embedURL:e.target.value},(function(){return t.props.saveContent(t.state)}))}}])&&f(n.prototype,o),u&&f(n,u),t})();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isEditable:o.default.bool,isViewMode:o.default.bool.isRequired,content:o.default.object,saveContent:o.default.func}});var b=p;t.default=b},437:function(e,t,n){e.exports={link:"_1TIDxVDd_xONDKgywgNcVi"}},439:function(e,t,n){e.exports={imagePlugin:"_1vq93VoXyLSX6teQTt-KlR",imageUrl:"_2xPvS9WBB84e7Z6R-wiQSs"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbbnVsbF0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtLQUFrSyxDQUFBLHVTQUF1UyxDQUFBLCtwQkFBK3BCLENBQUEseUhBQXlILENBQUEsWUFBWSxDQUFBLHVDQUF1QyxDQUFBLDRGQUE0RixDQUFBLGlIQUFpSCxDQUFBLDBTQUEwUyxDQUFBLDhSQUE4UixDQUFBLG1FQUFtRSxDQUFBLGNBQWMsQ0FBQSx3QkFBd0IsQ0FBQSwrb0JBQStvQixDQUFBLCtDQUErQyxDQUFBLG9DQUFvQyxDQUFBIn0=