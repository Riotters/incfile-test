(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{A8UT:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("E2cJ"),a=n("vOnD").b.article.withConfig({displayName:"panel__PanelBox",componentId:"sc-1uxjqbm-0"})(["display:flex;flex-direction:column;flex-grow:1;max-width:",";margin-left:auto;padding-top:24px;h3{margin-bottom:48px;}"],(function(e){return"grid"!==e.layout?"670px":""}));t.a=function(e){var t=e.children,n=e.isVisible,i=e.layout,l=e.panelNo;return o.a.createElement(r.a,null,o.a.createElement(a,{className:n?"slideUp enter panel"+l:"slideUp panel"+l,layout:i},t))}},E2cJ:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){o=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n("q1tI"),a=n.n(r);var l=function(e){var t=Object(r.useRef)();return t.current||(t.current={v:e()}),t.current.v},c=Object(r.createContext)(),u=Object(r.createContext)(),s=function(e){var t=e.state,n=e.children,i=Object(r.useState)(0),o=l((function(){return{tabs:0,panels:0}})),s=t||i;return a.a.createElement(u.Provider,{value:o},a.a.createElement(c.Provider,{value:s},n))},p=function(){var e=o(Object(r.useContext)(c),2),t=e[0],n=e[1],i=Object(r.useContext)(u),a=l((function(){var e=i.tabs;return i.tabs+=1,e})),s=l((function(){return function(){return n(a)}}));return Object(r.useMemo)((function(){return{isActive:t===a,onClick:s}}),[t,s,a])},d=function(){var e=o(Object(r.useContext)(c),1)[0],t=Object(r.useContext)(u);return l((function(){var e=t.panels;return t.panels+=1,e}))===e},f=function(e){var t=e.active,n=e.children;return d()||t?n:null}},FWCZ:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var i=n("q1tI"),o=n.n(i),r=(n("E2cJ"),n("vOnD"));var a=function(e){e.title,e.filename;var t=e.children,n=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["title","filename","children"]);return o.a.createElement(l,{className:n.isVisible?"slideUp enter":"slideUp",layout:n.layout},console.log(n),o.a.createElement(c,{layout:n.layout,columns:n.columns},t))},l=r.b.div.withConfig({displayName:"TabHeading__TabsWrapper",componentId:"sc-1idgv94-0"})(["display:flex;flex-direction:column;width:100%;@media (min-width:769px){max-width:",";}@media (min-width:1200px){max-width:",";}"],(function(e){return"grid"!==e.layout?"40%":""}),(function(e){return"grid"!==e.layout?"370px":""})),c=r.b.div.withConfig({displayName:"TabHeading__Sticky",componentId:"sc-1idgv94-1"})(["display:",";flex-direction:",";grid-template-columns:",";grid-gap:",";position:",";top:100px;"],(function(e){return"grid"===e.layout?"grid":"flex"}),(function(e){return"grid"!==e.layout?"column":""}),(function(e){return e.columns?"repeat("+e.columns+", 1fr)":""}),(function(e){return"grid"===e.layout?"30px":""}),(function(e){return"grid"!==e.layout?"sticky":""}));t.a=a,a.defaultProps={}},JS0p:function(e,t,n){"use strict";var i=n("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("path",{fill:"#FCE7D0",fillRule:"nonzero",d:"M30.9 18.04c-.11-1.51-1.82-2.74-2.26-4.11-.44-1.37.22-3.56-.67-4.79s-3.11-1.21-4.35-2.11c-1.24-.9-1.88-3-3.35-3.49-1.47-.49-3.19.85-4.77.85-1.58 0-3.34-1.31-4.76-.89-1.42.42-2.13 2.63-3.35 3.53-1.22.9-3.39.87-4.33 2.09-.71 1-.42 2.46-.5 3.77-.015.34-.072.675-.17 1A15.763 15.763 0 01.6 16.68c.13 1.49 1.82 2.73 2.26 4.09.44 1.36-.22 3.56.67 4.79s3.11 1.21 4.35 2.11c1.24.9 1.88 3 3.35 3.49 1.47.49 3.19-.85 4.77-.85 1.58 0 3.34 1.31 4.76.85 1.42-.46 2.13-2.6 3.35-3.49 1.22-.89 3.42-.87 4.33-2.09a13.13 13.13 0 01.2-3.11c.078-.24.185-.468.32-.68.68-1.16 1.95-2.26 1.95-3.59a.855.855 0 00-.01-.16zm-9.76 1.27l.06.37.6 3.47a1.231 1.231 0 01-1.07 1.43c-.246.047-.5.02-.73-.08l-3.44-1.82c-.36-.19-.79-.19-1.15 0L12 24.5a1.228 1.228 0 01-1.78-1.3l.66-3.84a1.26 1.26 0 00-.36-1.09L7.7 15.5l3.61-.52c.4-.06.745-.315.92-.68l1.73-3.49a1.22 1.22 0 012.2 0l1.73 3.49c.177.368.526.623.93.68l3.85.56c.408.048.76.306.93.68l-2.08 2a1.23 1.23 0 00-.38 1.09z"}),i.createElement("path",{stroke:"#1D1D1B",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.4,d:"M31.41 16.5a3 3 0 01-.51 1.54 15.538 15.538 0 00-1.77 2.73c-.098.325-.155.66-.17 1-.08 1.31.21 2.8-.5 3.77h0c-.91 1.22-3.1 1.2-4.33 2.09-1.23.89-1.88 3-3.35 3.49-1.47.49-3.19-.85-4.76-.85-1.57 0-3.34 1.31-4.77.85-1.43-.46-2.12-2.6-3.35-3.49-1.23-.89-3.45-.87-4.35-2.11-.9-1.24-.19-3.32-.67-4.79C2.4 19.26.73 18.17.6 16.68a1.082 1.082 0 010-.18c0-1.33 1.27-2.43 2-3.59.135-.212.242-.44.32-.68.19-1.025.257-2.07.2-3.11a2.925 2.925 0 01.47-1.68c.9-1.24 3.11-1.21 4.35-2.11 1.24-.9 1.88-3 3.35-3.49 1.47-.49 3.19.85 4.77.85 1.58 0 3.34-1.31 4.76-.85 1.42.46 2.13 2.59 3.35 3.49 1.22.9 3.45.87 4.35 2.11.9 1.24.2 3.32.67 4.79.47 1.47 2.22 2.69 2.22 4.27z"}),i.createElement("path",{stroke:"#1D1D1B",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.4,d:"M17.1 8.22l1.73 3.49c.175.365.52.62.92.68l3.86.56a1.229 1.229 0 01.68 2.1l-2.79 2.71a1.23 1.23 0 00-.35 1.09l.66 3.84a1.23 1.23 0 01-1.81 1.3l-3.45-1.81a1.211 1.211 0 00-1.14 0L12 23.99a1.23 1.23 0 01-1.79-1.3l.66-3.84a1.23 1.23 0 00-.35-1.09l-2.81-2.71a1.232 1.232 0 01.68-2.1l3.86-.56c.4-.06.745-.315.92-.68l1.73-3.49a1.22 1.22 0 012.2 0z"}));t.a=function(e){return i.createElement("svg",o({width:32,height:33},e),r)}},PRqb:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("E2cJ"),a=n("vOnD"),l=n("+e4l"),c=n("AZup"),u=a.b.div.withConfig({displayName:"tabs__Wrapper",componentId:"erpd1c-0"})(["display:flex;flex-direction:column;padding-bottom:115px;position:relative;@media (min-width:769px){flex-direction:",";}.accordion-panel{overflow:hidden;}.ReactCollapse--collapse{width:100%;transition:height 500ms;margin-left:auto;@media (min-width:769px){max-width:",";}@media (min-width:1200px){max-width:",";}}"],(function(e){return"grid"!==e.layout?"row":"column"}),(function(e){return"grid"!==e.layout?"55%":""}),(function(e){return"grid"!==e.layout?"670px":""}));t.a=function(e){var t=e.layout,n=(e.column,e.children);return o.a.createElement(u,null,o.a.createElement(l.a,null,o.a.createElement(u,{layout:t},o.a.createElement(c.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible,i=e.layout,a=e.column;return o.a.createElement(r.b,null,o.a.Children.map(n,(function(e){return o.a.cloneElement(e,{isVisible:t,layout:i,column:a})})))})))))}},bvKj:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("JS0p"),a=n("JBFi"),l=n("E2cJ"),c=n("vOnD"),u=function(e){var t=e.title,n=e.arrow,i=e.SvgIcon;return o.a.createElement(p,null,o.a.createElement(d,null,o.a.createElement(i,null)),o.a.createElement(f,null,o.a.createElement("span",null,t),n&&o.a.createElement(h,{className:"tabArrow"},o.a.createElement(a.a,null))))};t.a=u;var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},p=function(e){var t=e.children,n=Object(l.d)(),i=n.isActive,r=n.onClick;return o.a.createElement(m,{className:s("accordion-tab",i&&"active"),onClick:r},t)};u.defaultProps={arrow:!0,SvgIcon:r.a};var d=c.b.div.withConfig({displayName:"tab-title__Icon",componentId:"ljzbso-0"})(["display:flex;align-items:center;justify-content:center;height:80px;width:50px;opacity:0.75;@media (min-width:992px){width:80px;}"]),f=c.b.div.withConfig({displayName:"tab-title__Content",componentId:"ljzbso-1"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding:0 24px;border-left:1px solid #f4f4f4;span{color:#4e4e4e;font-family:Avenir;font-size:13px;white-space:nowrap;@media (min-width:769px){font-size:16px;}}.tabArrow{opacity:0;transform:translateX(-3px);transition:opacity 0.3s ease,transform 0.3s ease;svg{path{fill:#1d1d1d;}}}&:hover{.tabArrow{opacity:1;transform:translateX(0);}}"]),h=c.b.div.withConfig({displayName:"tab-title__Arrow",componentId:"ljzbso-2"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:10px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]),m=c.b.button.withConfig({displayName:"tab-title__ButtonBox",componentId:"ljzbso-3"})(["height:78px;line-height:78px;color:#4e4e4e;background:#fff;transition:box-shadow 0.3s ease;box-shadow:0 20px 30px 0 #e6e6e6;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;margin-bottom:7px;border:none;z-index:0;&.active{box-shadow:0 40px 80px 0 #e6e6e6;font-weight:600;z-index:1;.tabArrow{opacity:1;transform:translateX(0);}}"])},kihd:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("rfF1"),a=function(e){var t=e.isOpened,n=e.isVisible,i=e.layout,a=e.children;return o.a.createElement(r.Collapse,{isOpened:t},o.a.Children.map(a,(function(e,t){return o.a.cloneElement(e,{isVisible:n,layout:i,panelNo:t})})))};t.a=a,a.defaultProps={isOpened:!0}},rfF1:function(e,t,n){"use strict";(function(e){n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("dZ+Y"),n("hHhE"),n("/SS/"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var i,o=(i=n("q1tI"))&&i.__esModule?i:{default:i};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(t){function n(t){var i,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,a=l(n).call(this,t),i=!a||"object"!==r(a)&&"function"!=typeof a?c(o):a,s(c(i),"timeout",void 0),s(c(i),"container",void 0),s(c(i),"content",void 0),s(c(i),"onResize",(function(){if(e.clearTimeout(i.timeout),i.container&&i.content){var t=i.props,n=t.isOpened,o=t.checkTimeout,r=i.container.clientHeight,a=i.content.clientHeight,l=n&&a===r,c=!n&&0===r;l||c?i.onRest({isFullyOpened:l,isFullyClosed:c,isOpened:n,containerHeight:r,contentHeight:a}):(i.onWork({isFullyOpened:l,isFullyClosed:c,isOpened:n,containerHeight:r,contentHeight:a}),i.timeout=setTimeout((function(){return i.onResize()}),o))}})),s(c(i),"onRest",(function(e){var t=e.isFullyOpened,n=e.isFullyClosed,o=e.isOpened,r=e.containerHeight,a=e.contentHeight;if(i.container&&i.content){var l=o&&i.container.style.height==="".concat(a,"px"),c=!o&&"0px"===i.container.style.height;if(l||c){i.container.style.overflow=o?"initial":"hidden",i.container.style.height=o?"auto":"0px";var u=i.props.onRest;u&&u({isFullyOpened:t,isFullyClosed:n,isOpened:o,containerHeight:r,contentHeight:a})}}})),s(c(i),"onWork",(function(e){var t=e.isFullyOpened,n=e.isFullyClosed,o=e.isOpened,r=e.containerHeight,a=e.contentHeight;if(i.container&&i.content){var l=o&&i.container.style.height==="".concat(a,"px"),c=!o&&"0px"===i.container.style.height;if(!l&&!c){i.container.style.overflow="hidden",i.container.style.height=o?"".concat(a,"px"):"0px";var u=i.props.onWork;u&&u({isFullyOpened:t,isFullyClosed:n,isOpened:o,containerHeight:r,contentHeight:a})}}})),s(c(i),"onRefContainer",(function(e){i.container=e})),s(c(i),"onRefContent",(function(e){i.content=e})),t.initialStyle?i.initialStyle=t.initialStyle:i.initialStyle=t.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},i}var i,p,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,t),i=n,(p=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,i=t.isOpened;return t.children!==e.children||i!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){e.clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children;return o.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle},o.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&a(i.prototype,p),d&&a(i,d),n}(o.default.Component);t.Collapse=p,s(p,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=cc0161138f440fb07204cdfb5b3ecc30465862cf-c78177440698733db96f.js.map