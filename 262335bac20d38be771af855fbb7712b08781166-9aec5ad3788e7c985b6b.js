(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/61k":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),o=n("9eSz"),l=n.n(o);t.a=function(e){return i.a.createElement(r.StaticQuery,{query:"3314247562",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a=n.node.childImageSharp.fluid;return i.a.createElement(l.a,{alt:e.alt,fluid:a})}})}},E85H:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("vvhN"),l=r.b.label.withConfig({displayName:"label__Wrapper",componentId:"z49heo-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:wrap;font-size:14px;color:",";line-height:24px;font-family:Avenir,sans-serif;margin:",";a{font-size:14px;color:",";line-height:24px;font-family:Avenir,sans-serif;text-decoration:none;margin-left:auto;}"],(function(e){return e.justify?e.justify:""}),(function(e){return e.align?e.align:""}),o.a.grey2,(function(e){return e.margin?e.margin:""}),o.a.blue1);t.a=function(e){var t=e.className,n=e.children,a=e.justify,r=e.align,o=e.margin;return i.a.createElement(l,{className:t,justify:a,align:r,margin:o},n)}},Fsc3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=a?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=o(n("i8i4")),r=o(n("TSYQ"));function o(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(i=p(t).call(this,e))||"object"!==s(i)&&"function"!=typeof i?u(a):i).state={selected:n.parseValue(e.value,e.options)||{label:void 0===e.placeholder?"Select...":e.placeholder,value:""},isOpen:!1},n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(u(n)),n.fireChangeEvent=n.fireChangeEvent.bind(u(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?"Select...":e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n;if("string"==typeof e)for(var a=0,i=t.length;a<i;a++)if("group"===t[a].type){var r=t[a].items.filter((function(t){return t.value===e}));r.length&&(n=r[0])}else void 0!==t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;void 0===n&&(n=e.label||e);var i=e.label||e.value||e,o=n===this.state.selected.value||n===this.state.selected,l=(c(t={},"".concat(this.props.baseClassName,"-option"),!0),c(t,e.className,!!e.className),c(t,"is-selected",o),t),s=(0,r.default)(l);return a.default.createElement("div",{key:n,className:s,onMouseDown:this.setValue.bind(this,n,i),onClick:this.setValue.bind(this,n,i),role:"option","aria-selected":o?"true":"false"},i)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,i=t.baseClassName,r=n.map((function(t){if("group"===t.type){var n=a.default.createElement("div",{className:"".concat(i,"-title")},t.name),r=t.items.map((function(t){return e.renderOption(t)}));return a.default.createElement("div",{className:"".concat(i,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},n,r)}return e.renderOption(t)}));return r.length?r:a.default.createElement("div",{className:"".concat(i,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(i.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,i,o,l=this.props,s=l.baseClassName,d=l.controlClassName,p=l.placeholderClassName,u=l.menuClassName,f=l.arrowClassName,m=l.arrowClosed,h=l.arrowOpen,g=l.className,v=this.props.disabled?"Dropdown-disabled":"",b="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,x=(0,r.default)((c(e={},"".concat(s,"-root"),!0),c(e,g,!!g),c(e,"is-open",this.state.isOpen),e)),w=(0,r.default)((c(t={},"".concat(s,"-control"),!0),c(t,d,!!d),c(t,v,!!v),t)),y=(0,r.default)((c(n={},"".concat(s,"-placeholder"),!0),c(n,p,!!p),c(n,"is-selected",this.isValueSelected()),n)),E=(0,r.default)((c(i={},"".concat(s,"-menu"),!0),c(i,u,!!u),i)),N=(0,r.default)((c(o={},"".concat(s,"-arrow"),!0),c(o,f,!!f),o)),O=a.default.createElement("div",{className:y},b),C=this.state.isOpen?a.default.createElement("div",{className:E,"aria-expanded":"true"},this.buildMenu()):null;return a.default.createElement("div",{className:x},a.default.createElement("div",{className:w,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},O,a.default.createElement("div",{className:"".concat(s,"-arrow-wrapper")},h&&m?this.state.isOpen?h:m:a.default.createElement("span",{className:N}))),C)}}])&&d(n.prototype,o),l&&d(n,l),t}(a.Component);m.defaultProps={baseClassName:"Dropdown"};var h=m;t.default=h},KpOY:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{d:"M0 1.389c0 .746.599 1.349 1.354 1.384a26.869 26.869 0 0112.317 3.66c6.754 3.954 11.098 10.402 12.544 17.451A1.4 1.4 0 0027.592 25c.89 0 1.556-.806 1.38-1.666-1.599-7.79-6.398-14.916-13.863-19.286A29.704 29.704 0 001.46.002 1.393 1.393 0 000 1.387v.002z",fill:"#C9A3EE",fillRule:"evenodd"});t.a=function(e){return a.createElement("svg",i({width:29,height:25},e),r)}},RRzO:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Wbzz"),l=n("JBFi"),s=Object(r.b)(o.Link).withConfig({displayName:"text__Wrapper",componentId:"z6idrg-0"})(["display:flex;align-items:center;text-decoration:none;max-width:"," !important;padding-bottom:"," !important;margin-top:",";margin-bottom:","px !important;span{transition:color 0.3s ease;font-weight:600;}&:hover{color:#fd8550;svg{path{fill:#fd8550;}}}"],(function(e){return e.maxWidth?e.maxWidth+"px":""}),(function(e){return e.bottomPadding?e.bottomPadding+"px":""}),(function(e){return e.topMargin?e.topMargin+"px":""}),(function(e){return e.bottomMargin})),c=r.b.div.withConfig({displayName:"text__Arrow",componentId:"z6idrg-1"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:10px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]),d=function(e){var t=e.className,n=e.content,a=e.maxWidth,r=e.bottomPadding,o=e.bottomMargin,d=e.topMargin;return i.a.createElement(s,{to:n.url,className:t,maxWidth:a,bottomPadding:r,bottomMargin:o,topMargin:d},i.a.createElement(c,null,i.a.createElement(l.a,null)),i.a.createElement("span",null,n.text))};t.a=d,d.defaultProps={bottomMargin:32}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},Tzsx:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),l=r.b.div.withConfig({displayName:"content-center__Wrapper",componentId:"gze970-0"})(["display:flex;justify-content:center;width:100%;@media(min-width:769px){flex-direction:row;}"]),s=r.b.div.withConfig({displayName:"content-center__Content",componentId:"gze970-1"})(["display:flex;flex-direction:column;align-items:center;width:100%;@media (min-width:769px){max-width:",";}"],(function(e){return e.contentWidth?e.contentWidth+"px":""}));t.a=function(e){var t=e.className,n=e.children,a=e.contentWidth,r=e.headlineWidth,c=e.textWidth;return i.a.createElement(o.a,null,i.a.createElement(l,{className:t},i.a.createElement(s,{contentWidth:a,headlineWidth:r,textWidth:c},n)))}},Wdr8:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"top-buttons-box__Wrapper",componentId:"sc-12jcaeq-0"})(["display:flex;flex-direction:column;width:100%;@media (min-width:576px){align-items:center;}@media (min-width:","){flex-direction:row;}"],(function(e){return e.mediaXL?"1200px":"992px"}));t.a=function(e){var t=e.children,n=e.mediaXL;return i.a.createElement(r,{mediaXL:n},t)}},Xlwc:function(e,t,n){"use strict";var a=n("uRdJ"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),l=n("Fsc3"),s=n.n(l),c=n("vOnD"),d=n("vvhN"),p=n("qsH/"),u=c.b.div.withConfig({displayName:"dropdown__Wrapper",componentId:"sc-195c4ka-0"})(["position:relative;.Dropdown{&-root{position:relative;min-width:227px;font-family:Avenir,sans-serif;font-size:16px;line-height:24px;border-radius:5px;&.is-open{.Dropdown-control{border-radius:5px 5px 0 0;}}}&-control{position:relative;overflow:hidden;background-color:",";border-radius:5px;font-weight:400;color:",";outline:none;padding:12px 32px 12px 24px;transition:all 200ms ease;cursor:pointer;border:1px solid ",";}&-menu{background-color:",";margin-top:-1px;max-height:200px;overflow-y:auto;width:100%;position:absolute;-webkit-overflow-scrolling:touch;z-index:1;border:1px solid ",";}&-option{color:",";cursor:pointer;display:block;padding:12px 24px;&:hover{background-color:",";color:",";}&.is-selected{background-color:",";color:",";}}}svg{position:absolute;top:25px;right:16px;transform:translateY(-50%);pointer-events:none;}"],d.a.grey5,d.a.black,d.a.grey3,d.a.grey5,d.a.grey3,d.a.grey1,d.a.blue3,d.a.grey1,d.a.blue3,d.a.grey1),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={selected:""},n._onSelect=n._onSelect.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n._onSelect=function(e){this.setState({selected:e})},n.render=function(){var e=this.state.selected;return o.a.createElement(u,{className:this.props.className},o.a.createElement(s.a,{options:this.props.options,onChange:this._onSelect,value:e,placeholder:this.props.placeholder}),o.a.createElement(p.a,null))},t}(r.Component);t.a=f},XuRJ:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),l=n("aqT/"),s=n.n(l),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.active,n=this.props,i=n.once,r=n.children,l=Object(a.a)(n,["once","children"]);return o.a.createElement(s.a,Object.assign({active:t,onChange:function(t){return i&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},l),(function(e){var t=e.isVisible;return r({isVisible:t})}))},t}(r.Component);c.defaultProps={once:!1},t.a=c},aYt9:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("vvhN"),l=n("/e4F"),s=n("tBDR"),c=n("E85H"),d=n("Xlwc"),p=n("ZXdF"),u=r.b.div.withConfig({displayName:"certificate-card__Wrapper",componentId:"sc-1eyrvt9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;max-width:470px;padding:64px 40px 48px;position:relative;background-color:",";box-shadow:",";border-radius:5px;h3{text-align:center;max-width:320px;margin-bottom:32px;}.gatsby-image-wrapper{height:152px;width:152px;margin:0 auto 24px;}label{width:100%;}.label{margin-bottom:24px;}.dropdown{width:100%;}.price{font-family:MarkPro,sans-serif;font-size:48px;line-height:56px;color:",";margin-bottom:8px;}.fee{font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:",";margin-bottom:40px;}"],o.a.white,l.a.white1,o.a.black,o.a.grey2);t.a=function(e){var t=e.className,n=e.headline,a=e.content,r=e.image,o=e.dropdownOnePlaceholder,l=e.dropdownOneOptions,f=e.dropdownTwoPlaceholder,m=e.dropdownTwoOptions,h=e.dropdownThreePlaceholder,g=e.dropdownThreeOptions;return i.a.createElement(u,{className:t},i.a.createElement("h3",null,n),r&&i.a.createElement(s.a,{filename:r}),o&&i.a.createElement(c.a,{className:"label"},"Entity Type",i.a.createElement(d.a,{className:"dropdown",placeholder:o,options:l})),f&&i.a.createElement(c.a,{className:"label"},"State",i.a.createElement(d.a,{className:"dropdown",placeholder:f,options:m})),h&&i.a.createElement(c.a,{className:"label"},"State of Formation",i.a.createElement(d.a,{className:"dropdown",placeholder:h,options:g})),a&&i.a.createElement(i.a.Fragment,null,a.price&&i.a.createElement("span",{className:"price"},"$",a.price),a.fee&&i.a.createElement("span",{className:"fee"},a.fee)),i.a.createElement(p.a,{theme:"primary56",arrow:!0},"Order now"))}},bcDI:function(e,t,n){"use strict";var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),l=n("bfge"),s=n("XuRJ"),c=n("5T/x"),d=n("/61k"),p=n("dBvy"),u=o.b.div.withConfig({displayName:"top__Wrapper",componentId:"sc-1ld4c8g-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;padding-top:80px;@media (min-width:992px){flex-direction:row;height:100vh;max-height:777px;padding-top:0;}"]),f=o.b.div.withConfig({displayName:"top__Oval",componentId:"sc-1ld4c8g-1"})(['width:90%;position:absolute;top:0;right:0;z-index:-1;@media (min-width:992px){width:50%;}@media (min-width:1200px){max-width:850px;max-height:777px;}&::after{content:"";display:block;padding-bottom:100%;}& > svg{position:absolute;right:0;bottom:0;defs{radialGradient{stop{&:nth-child(1){stop-color:',";}&:nth-child(2){stop-color:",";}}}}path{transform:matrix(1,0,0,-1,-115,777);}}"],(function(e){return function(e){switch(e){case"blue":return l.a.blue1;case"orange":return l.a.orange1;case"purple":return"#9168ff";case"yellow":return l.a.yellow1;case"green":return"#97e0c7";case"sun":return"#ffb059";case"sun-2":return"#ffc95b";case"blackpink":return"#ffb8b8";case"darkblue":return"#7891fc";case"lightpurple":return"#d2aafb";default:return""}}(e.ovalColor)}),(function(e){return function(e){switch(e){case"blue":return l.a.babyblue2;case"orange":return l.a.orange2;case"purple":return"#dad2ff";case"yellow":return l.a.yellow2;case"green":return"#d5f3e8";case"sun":return"#ffe3c5";case"sun-2":return"#fff5d4";case"blackpink":return"#ffdddd";case"darkblue":return"#ced7ff";case"lightpurple":return"#ede0fa";default:return""}}(e.ovalColor)})),m=o.b.div.withConfig({displayName:"top__Content",componentId:"sc-1ld4c8g-2"})(["display:flex;flex-wrap:wrap;"]),h=o.b.div.withConfig({displayName:"top__TextContainer",componentId:"sc-1ld4c8g-3"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding-top:32px;@media (min-width:992px){width:50%;align-items:flex-start;}@media (min-width:1200px){padding-top:150px;}h1{width:100%;text-align:center;padding-bottom:40px;@media (min-width:992px){text-align:left;padding-bottom:24px;}@media (min-width:992px){max-width:","px;}}p{margin-bottom:32px;text-align:center;@media (min-width:992px){text-align:left;max-width:","px;}}"],(function(e){return e.headlineWidth?e.headlineWidth:"480"}),(function(e){return e.headlineWidth?e.headlineWidth:"480"})),g=o.b.div.withConfig({displayName:"top__ImageContainer",componentId:"sc-1ld4c8g-4"})(["display:flex;max-width:950px;width:100%;top:50%;right:55%;@media (min-width:992px){position:absolute;width:55%;transform:translate(100%,-50%);}.gatsby-image-wrapper{width:100%;img{object-fit:contain !important;}}"]),v=function(e){var t=e.children,n=e.imageName,i=e.imageAlt,o=e.headlineWidth,l=e.ovalColor,v=Object(a.a)(e,["children","imageName","imageAlt","headlineWidth","ovalColor"]);return r.a.createElement(u,v,r.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return r.a.createElement(f,{className:t?"scaleUp enter":"scaleUp",ovalColor:l},r.a.createElement(p.a,null))})),r.a.createElement(g,null,r.a.createElement(d.a,{filename:n,alt:i})),r.a.createElement(c.a,null,r.a.createElement(m,null,r.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement(h,{className:n?"slideRight enter":"slideRight",headlineWidth:o},t)})))))};t.a=v,v.defaultProps={OvalSVGFile:p.a}},kDk7:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),l=n("Y+kd"),s=r.b.div.withConfig({displayName:"left-image-right-content__Wrapper",componentId:"oxrm8t-0"})(["position:relative;"]),c=r.b.div.withConfig({displayName:"left-image-right-content__Flex",componentId:"oxrm8t-1"})(["display:flex;justify-content:space-between;"]),d=r.b.div.withConfig({displayName:"left-image-right-content__Content",componentId:"oxrm8t-2"})(["display:flex;flex-direction:column;justify-content:",";width:100%;max-width:670px;padding-top:","px;"],(function(e){return e.contentCenter?"center":""}),(function(e){return e.paddingTop?e.paddingTop:"60"})),p=r.b.div.withConfig({displayName:"left-image-right-content__Sticky",componentId:"oxrm8t-3"})(["display:block;width:100%;.gatsby-image-wrapper{position:sticky !important;top:100px;}"]),u=r.b.div.withConfig({displayName:"left-image-right-content__Imagebox",componentId:"oxrm8t-4"})(["display:none;width:100%;max-width:","px;position:relative;@media(min-width:769px){display:flex;}.gatsby-image-wrapper{height:auto;width:100%;}"],(function(e){return e.imageWidth?e.imageWidth:"485"}));t.a=function(e){var t=e.children,n=e.image,a=e.paddingTop,r=e.contentCenter,f=e.imageWidth;return i.a.createElement(s,null,i.a.createElement(o.a,null,i.a.createElement(c,null,i.a.createElement(u,{imageWidth:f},i.a.createElement(p,null,i.a.createElement(l.a,{filename:n}))),i.a.createElement(d,{paddingTop:a,contentCenter:r},t))))}},uRdJ:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=262335bac20d38be771af855fbb7712b08781166-9aec5ad3788e7c985b6b.js.map