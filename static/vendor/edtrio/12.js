(window.webpackJsonp=window.webpackJsonp||[]).push([[12,17],{145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(337)),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t})(n(0)),i=u(n(1)),l=u(n(309));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=(function(e){function t(e){var n,r,o;return (function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),r=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!o||"object"!==a(o)&&"function"!=typeof o?f(r):o,Object.defineProperty(f(n),"focusQuill",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.reactQuillRef&&"function"==typeof n.reactQuillRef.getEditor&&n.reactQuillRef.getEditor().focus()}}),n.reactQuillRef=null,n.state={text:"",visible:!1},n.modules={toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike"],[{align:[]}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},n}var n,i,u;return (function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,o.Component),n=t,(i=[{key:"componentDidMount",value:function(){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},this.props.content)),this.focusQuill()}},{key:"componentDidUpdate",value:function(){var e=this;window.requestAnimationFrame((function(){return e.focusQuill()}))}},{key:"handleChange",value:function(e){var t=this;this.setState({text:e},(function(){return t.props.saveContent({text:t.state.text})}))}},{key:"shouldComponentUpdate",value:function(e){return!0}},{key:"render",value:function(){var e=this,t=this.props.isEditable,n=this.state.visible;return o.default.createElement("span",null,o.default.createElement("link",{rel:"stylesheet",href:"//cdn.quilljs.com/1.2.6/quill.snow.css",type:"text/css",onLoad:function(){return e.setState({visible:!0})}}),t&&n&&o.default.createElement(r.default,{id:l.default.quill_editor,ref:function(t){e.reactQuillRef=t},modules:this.modules,value:this.state.text,placeholder:"Start typing...",onChange:function(t){return e.handleChange(t)}}),!t&&o.default.createElement("div",{className:"ql-editor ".concat(l.default.ql_editor),dangerouslySetInnerHTML:{__html:this.state.text||"<p>Empty text plugin</p>"}}))}}])&&s(n.prototype,i),u&&s(n,u),t})();p.propTypes={isEditable:i.default.bool.isRequired,content:i.default.object,saveContent:i.default.func.isRequired};var d=p;t.default=d},309:function(e,t,n){e.exports={ql_editor:"_2iZ-_BpSmV-I7eH7Rs_5IX"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbbnVsbF0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtMQUFrTCxDQUFBLHVTQUF1UyxDQUFBLG90QkFBb3RCLENBQUEsMkNBQTJDLENBQUEsNEZBQTRGLENBQUEsaW5CQUFpbkIsQ0FBQSwwU0FBMFMsQ0FBQSw4UkFBOFIsQ0FBQSxtRUFBbUUsQ0FBQSxjQUFjLENBQUEsd0JBQXdCLENBQUEsMklBQTJJLENBQUEsaUNBQWlDLENBQUEsNEVBQTRFLENBQUEsMkRBQTJELENBQUEsNHdCQUE0d0IsQ0FBQSJ9