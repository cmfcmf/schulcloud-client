(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{299:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t})(r(0)),o=r(35),u=c(r(1)),i=c(r(435)),l=c(r(318)),a=c(r(149));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){e.id;var t=e.childs,r=e.options;return n.default.createElement("div",{className:l.default.layout_wrapper},n.default.createElement("div",{className:l.default.placeholder},n.default.createElement(a.default,{plugin:t[0].name},(function(o){return o?n.default.createElement(o,{id:t[0].id,options:r}):n.default.createElement(i.default,{id:e.id,slot:0})}))),n.default.createElement("div",{className:l.default.placeholder},n.default.createElement(a.default,{plugin:t[1].name},(function(o){return o?n.default.createElement(o,{id:t[1].id,options:r}):n.default.createElement(i.default,{id:e.id,slot:1})}))))};f.propTypes={options:u.default.shape({allowChildRearrangement:u.default.bool}),childs:u.default.array.isRequired,id:u.default.number.isRequired};var p=(0,o.connect)((function(e,t){var r=e.plugin,n=t.id,o=r.lookup[n].childs;return{options:r.lookup[n].options,childs:[0,1].map((function(e){return r.lookup[o[e]]||{}}))}}))(f);t.default=p},318:function(e,t,r){e.exports={layout_wrapper:"_2CRUruWXNHXzNTRmiz8JCi",placeholder:"_3WjyAQa8cyLw1_pGsOh0_O"}},434:function(e,t,r){e.exports={slot:"FVn70E3M04yN5RCdQyZer"}},435:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t})(r(0)),o=r(35),u=f(r(1)),i=r(118),l=r(48),a=f(r(47)),c=f(r(434));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e})(e):t}var y=Object.values(a.default.TYPES).filter((function(e){return e!==a.default.TYPES.GRID})),b=(function(e){function t(){return (function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,o,u;return (function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,n.Component),r=t,(o=[{key:"componentDidMount",value:function(){(0,this.props.connectDropTarget)(this.slot)}},{key:"render",value:function(){var e=this;return n.default.createElement("div",{className:c.default.slot,ref:function(t){return e.slot=t}})}}])&&d(r.prototype,o),u&&d(r,u),t})();Object.defineProperty(b,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{slot:u.default.number.isRequired,id:u.default.number.isRequired,connectDropTarget:u.default.func.isRequired}});var m=(0,o.connect)((function(){return{}}),(function(e,t){var r=t.id;return{movePlugin:function(t){e((0,l.movePlugin)(r,t))}}}))((0,i.DropTarget)(y,{drop:function(e){e.movePlugin(e.slot)}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))(b));t.default=m}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbbnVsbF0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1LQUFtSyxDQUFBLHVTQUF1UyxDQUFBLGlXQUFpVyxDQUFBLDJIQUEySCxDQUFBLHdIQUF3SCxDQUFBLDJIQUEySCxDQUFBLDBLQUEwSyxDQUFBLDZHQUE2RyxDQUFBLHNDQUFzQyxDQUFBLEdBQUcsQ0FBQSx5U0FBeVMsQ0FBQSx1U0FBdVMsQ0FBQSwrakJBQStqQixDQUFBLHlIQUF5SCxDQUFBLGtEQUFrRCxDQUFBLDRDQUE0QyxDQUFBLElBQUksQ0FBQSxnQ0FBZ0MsQ0FBQSw0RkFBNEYsQ0FBQSxnR0FBZ0csQ0FBQSwwU0FBMFMsQ0FBQSw4UkFBOFIsQ0FBQSw0TkFBNE4sQ0FBQSxvQkFBb0IsQ0FBQSxDQUFDLENBQUEsa0ZBQWtGLENBQUEsOERBQThELENBQUEseUVBQXlFLENBQUEifQ==