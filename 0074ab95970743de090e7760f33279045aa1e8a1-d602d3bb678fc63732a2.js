(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"6uOS":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("bfge"),l=n("cQKk"),s=n("TvSw"),c=n("ufX1"),p=n("MQU0"),u=n("aYt9"),d=n("w0o3"),m=n("Og96"),f=n("Zar6"),h=n("9A80"),b=n("KpOY"),v=r.b.section.withConfig({displayName:"help__Help",componentId:"vq92jx-0"})(['position:relative;padding-top:75px;padding-bottom:64px;&::before{content:"";height:2032px;width:100%;background-image:',";position:absolute;top:0;left:0;}"],i.b.blue3),g=r.b.div.withConfig({displayName:"help__TextWrapper",componentId:"vq92jx-1"})(["width:100%;position:relative;"]),y=c.a.state.map((function(e){return e.name}));t.a=function(e){var t=e.className,n=e.content;return o.a.createElement(v,{className:t},o.a.createElement(d.a,{className:"oval",height:"136",width:"136",top:"0",left:"0"},o.a.createElement(f.a,null)),o.a.createElement(d.a,{className:"oval",height:"570",width:"570",y:"20",bottom:"0",right:"0"},o.a.createElement(h.a,null)),o.a.createElement(p.a,{className:"help",headlineWidth:"450",object:o.a.createElement(u.a,{className:"card",content:n.card,headline:"Annual Report",dropdownOnePlaceholder:"Select Entity Type",dropdownTwoPlaceholder:"Select State",dropdownTwoOptions:y,priceColumn:"annualReport",orderPage:"/annual-report.php",fields:"state,annualReportLLC,annualReportCorp,annualReportNpc"})},o.a.createElement(g,null,o.a.createElement(m.a,{top:"-20",right:"-5",rightXL:"190",color:i.a.blue1},o.a.createElement(b.a,null)),o.a.createElement(l.a,{size:"2",bottomMargin:"56",maxWidth:"460"},n.header),o.a.createElement(l.a,{size:"4"},n.header2),o.a.createElement(s.a,{big:!0,bottomMargin:"0"},n.text))))}},E85H:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("vvhN"),l=r.b.label.withConfig({displayName:"label__Wrapper",componentId:"z49heo-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:wrap;font-size:14px;color:",";line-height:24px;font-family:Avenir,sans-serif;margin:",";a{font-size:14px;color:",";line-height:24px;font-family:Avenir,sans-serif;text-decoration:none;margin-left:auto;}"],(function(e){return e.justify?e.justify:""}),(function(e){return e.align?e.align:""}),i.a.grey2,(function(e){return e.margin?e.margin:""}),i.a.blue1);t.a=function(e){var t=e.className,n=e.children,a=e.justify,r=e.align,i=e.margin;return o.a.createElement(l,{className:t,justify:a,align:r,margin:i},n)}},Fsc3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=i(n("i8i4")),r=i(n("TSYQ"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=u(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?d(a):o).state={selected:n.parseValue(e.value,e.options)||{label:void 0===e.placeholder?"Select...":e.placeholder,value:""},isOpen:!1},n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(d(n)),n.fireChangeEvent=n.fireChangeEvent.bind(d(n)),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?"Select...":e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n;if("string"==typeof e)for(var a=0,o=t.length;a<o;a++)if("group"===t[a].type){var r=t[a].items.filter((function(t){return t.value===e}));r.length&&(n=r[0])}else void 0!==t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;void 0===n&&(n=e.label||e);var o=e.label||e.value||e,i=n===this.state.selected.value||n===this.state.selected,l=(c(t={},"".concat(this.props.baseClassName,"-option"),!0),c(t,e.className,!!e.className),c(t,"is-selected",i),t),s=(0,r.default)(l);return a.default.createElement("div",{key:n,className:s,onMouseDown:this.setValue.bind(this,n,o),onClick:this.setValue.bind(this,n,o),role:"option","aria-selected":i?"true":"false"},o)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,o=t.baseClassName,r=n.map((function(t){if("group"===t.type){var n=a.default.createElement("div",{className:"".concat(o,"-title")},t.name),r=t.items.map((function(t){return e.renderOption(t)}));return a.default.createElement("div",{className:"".concat(o,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},n,r)}return e.renderOption(t)}));return r.length?r:a.default.createElement("div",{className:"".concat(o,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(o.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,o,i,l=this.props,s=l.baseClassName,p=l.controlClassName,u=l.placeholderClassName,d=l.menuClassName,m=l.arrowClassName,f=l.arrowClosed,h=l.arrowOpen,b=l.className,v=this.props.disabled?"Dropdown-disabled":"",g="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,y=(0,r.default)((c(e={},"".concat(s,"-root"),!0),c(e,b,!!b),c(e,"is-open",this.state.isOpen),e)),w=(0,r.default)((c(t={},"".concat(s,"-control"),!0),c(t,p,!!p),c(t,v,!!v),t)),x=(0,r.default)((c(n={},"".concat(s,"-placeholder"),!0),c(n,u,!!u),c(n,"is-selected",this.isValueSelected()),n)),E=(0,r.default)((c(o={},"".concat(s,"-menu"),!0),c(o,d,!!d),o)),N=(0,r.default)((c(i={},"".concat(s,"-arrow"),!0),c(i,m,!!m),i)),O=a.default.createElement("div",{className:x},g),C=this.state.isOpen?a.default.createElement("div",{className:E,"aria-expanded":"true"},this.buildMenu()):null;return a.default.createElement("div",{className:y},a.default.createElement("div",{className:w,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},O,a.default.createElement("div",{className:"".concat(s,"-arrow-wrapper")},h&&f?this.state.isOpen?h:f:a.default.createElement("span",{className:N}))),C)}}])&&p(n.prototype,i),l&&p(n,l),t}(a.Component);f.defaultProps={baseClassName:"Dropdown"};var h=f;t.default=h},MQU0:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("5T/x"),l=r.b.div.withConfig({displayName:"left-content-right-object__Wrapper",componentId:"sc-17hn7mm-0"})(["display:flex;flex-direction:column;width:100%;max-width:",";margin:0 auto;margin-bottom:",";@media (min-width:992px){flex-direction:row;}"],(function(e){return e.maxWidth?e.maxWidth+"px":""}),(function(e){return e.bottomMargin?e.bottomMargin+"px":""})),s=r.b.div.withConfig({displayName:"left-content-right-object__Content",componentId:"sc-17hn7mm-1"})(["display:flex;flex-direction:column;justify-content:",";width:100%;@media (min-width:992px){padding-right:100px;max-width:500px;}@media (min-width:1200px){max-width:","px;}h2{text-align:left;}"],(function(e){return e.contentCenter?"center":""}),(function(e){return e.contentWidth?parseInt(e.contentWidth)+100:"700"})),c=r.b.div.withConfig({displayName:"left-content-right-object__Sticky",componentId:"sc-17hn7mm-2"})(["display:block;width:100%;position:sticky !important;top:100px;"]),p=r.b.div.withConfig({displayName:"left-content-right-object__Objectbox",componentId:"sc-17hn7mm-3"})(["display:flex;flex-direction:column;@media (min-width:992px){flex-grow:1;}.card{margin:80px auto 0;@media (min-width:992px){margin:0 auto;}}"]);t.a=function(e){var t=e.className,n=e.object,a=e.children,r=e.maxWidth,u=e.contentWidth,d=e.contentCenter,m=e.bottomMargin;return o.a.createElement(i.a,null,o.a.createElement(l,{className:t,maxWidth:r,bottomMargin:m},o.a.createElement(s,{contentWidth:u,contentCenter:d},a),o.a.createElement(p,null,o.a.createElement(c,null,n))))}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},Xlwc:function(e,t,n){"use strict";var a=n("uRdJ"),o=n("9Hrx"),r=n("q1tI"),i=n.n(r),l=n("Fsc3"),s=n.n(l),c=n("vOnD"),p=n("vvhN"),u=n("qsH/"),d=c.b.div.withConfig({displayName:"dropdown__Wrapper",componentId:"sc-195c4ka-0"})(["position:relative;.Dropdown{&-root{position:relative;min-width:227px;font-family:Avenir,sans-serif;font-size:16px;line-height:24px;border-radius:5px;&.is-open{.Dropdown-control{border-radius:5px 5px 0 0;}}}&-control{position:relative;overflow:hidden;background-color:",";border-radius:5px;font-weight:400;color:",";outline:none;padding:12px 32px 12px 24px;transition:all 200ms ease;cursor:pointer;border:1px solid ",";}&-menu{background-color:",";margin-top:-1px;max-height:200px;overflow-y:auto;width:100%;position:absolute;-webkit-overflow-scrolling:touch;z-index:1;border:1px solid ",";}&-option{color:",";cursor:pointer;display:block;padding:12px 24px;&:hover{background-color:",";color:",";}&.is-selected{background-color:",";color:",";}}}svg{position:absolute;top:25px;right:16px;transform:translateY(-50%);pointer-events:none;}"],p.a.grey5,p.a.black,p.a.grey3,p.a.grey5,p.a.grey3,p.a.grey1,p.a.blue3,p.a.grey1,p.a.blue3,p.a.grey1),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={selected:""},n._onSelect=n._onSelect.bind(Object(a.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n._onSelect=function(e){var t=this;this.setState({selected:e},(function(){t.props.onChange&&t.props.onChange(e)}))},n.render=function(){var e=this.state.selected;return i.a.createElement(d,{className:this.props.className},i.a.createElement(s.a,{options:this.props.options,onChange:this._onSelect,value:e,placeholder:this.props.placeholder}),i.a.createElement(u.a,null))},t}(r.Component);t.a=m},aYt9:function(e,t,n){"use strict";var a=n("kD0k"),o=n.n(a),r=(n("ls82"),n("/S4K")),i=n("q1tI"),l=n.n(i),s=n("vOnD"),c=n("vvhN"),p=n("/e4F"),u=n("tBDR"),d=n("E85H"),m=n("Xlwc"),f=n("1u1j"),h=s.b.div.withConfig({displayName:"certificate-card__Wrapper",componentId:"sc-1eyrvt9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;max-width:470px;padding:64px 40px 48px;position:relative;background-color:",";box-shadow:",";border-radius:5px;h3{text-align:center;max-width:320px;margin-bottom:32px;}.gatsby-image-wrapper{height:152px;width:152px;margin:0 auto 24px;}label{width:100%;}.label{margin-bottom:24px;}.dropdown{width:100%;}.price{font-family:MarkPro,sans-serif;font-size:48px;line-height:56px;color:",";margin-bottom:8px;}.fee{font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:",";}"],c.a.white,p.a.white1,c.a.black,c.a.grey2);t.a=function(e){var t=e.className,n=e.headline,a=e.content,s=e.image,c=e.dropdownOnePlaceholder,p=e.dropdownTwoPlaceholder,b=e.dropdownTwoOptions,v=e.dropdownThreePlaceholder,g=e.dropdownThreeOptions,y=e.priceColumn,w=e.fields,x=e.orderPage,E=Object(i.useState)(0),N=E[0],O=E[1],C=Object(i.useState)(!1),k=C[0],j=C[1],S=Object(i.useState)({}),_=S[0],M=S[1],D=Object(i.useState)(""),P=D[0],I=D[1],W=Object(i.useState)(""),T=W[0],R=W[1];function q(){return(q=Object(r.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=""),void 0===n&&(n={}),e.next=4,fetch(t,{method:"GET"});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement(h,{className:t},l.a.createElement("h3",null,n),s&&l.a.createElement(u.a,{filename:s}),c&&l.a.createElement(d.a,{className:"label"},"Entity Type",l.a.createElement(m.a,{className:"dropdown",placeholder:c,options:[{value:"LLC",label:"LLC"},{value:"Corp",label:"Corporation"},{value:"Npc",label:"Nonprofit"}],onChange:function(e){return M(e)}})),p&&l.a.createElement(d.a,{className:"label"},"State",l.a.createElement(m.a,{className:"dropdown",placeholder:p,options:b,onChange:function(e){if(!e)return j(!1),void O(0);var t=e.value,n=""+y+_.value;I(t);var a="https://api.incfile.com/api/v1/get-price-by-state/?state="+t;w&&(a+="&_fields="+w),function(e,t){return q.apply(this,arguments)}(a).then((function(e){j(!0),O(e[n])}))}})),v&&l.a.createElement(d.a,{className:"label"},"State of Formation",l.a.createElement(m.a,{className:"dropdown",placeholder:v,options:g,onChange:function(e){return R(e.value)}})),a&&l.a.createElement(l.a.Fragment,null,a.price&&l.a.createElement("span",{className:"price"},"$",a.price),k&&l.a.createElement("span",{className:"fee"},"+$",N," State Fee")),l.a.createElement(f.a,{content:a.button,theme:"primary56",margin:"40px 0 0 0",arrow:!0,onClick:function(){if("undefined"!=typeof window){var e="https://orders.incfile.com"+x+"?entityType="+_.label+"&entityState="+P;T&&(e+="&compState="+T),window.location.replace(e)}}}))}},oGEw:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("BV+q"),l=n("cQKk"),s=n("TvSw"),c=n("bfge"),p=n("Og96"),u=n("KpOY"),d=n("RRzO"),m=function(e){switch(e){case c.a.blue3:return c.a.blue1;case c.a.orange3:return c.a.orange1;case c.a.green3:return c.a.green1;case c.a.purple3:return c.a.purple1;case c.a.babyblue3:return c.a.babyblue1;case c.a.yellow3:return c.a.yellow1;default:return""}},f=r.b.div.withConfig({displayName:"icon-h4-text-color__Wrapper",componentId:"sc-19dh619-0"})(["position:relative;margin-bottom:",";.box{padding:40px;border-radius:",";@media (min-width:576px){padding:40px 40px 40px 112px;}.icon-wrapper svg{display:none;position:absolute;top:40px;left:40px;@media (min-width:576px){display:block;}}}p{color:"," !important;}"],(function(e){return e.bottomMargin?e.bottomMargin+"px":""}),(function(e){return e.rounded?"5px 50px 50px 5px":""}),c.a.grey1);t.a=function(e){var t=e.className,n=e.Icon,a=e.color,r=e.content,c=e.bottomMargin,h=e.rounded,b=e.curve,v=e.curveColor;return o.a.createElement(f,{className:t,rounded:h,bottomMargin:c},b&&o.a.createElement(p.a,{top:"-15",right:"-15",color:v||m(a)},o.a.createElement(u.a,null)),o.a.createElement(i.a,{className:"box",color:a},o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement(n,null)),o.a.createElement(l.a,{size:"4",bottomMargin:"16"},r.header),r.text&&o.a.createElement(s.a,{bottomMargin:"0"},r.text),r.link&&o.a.createElement(d.a,{className:"more-info-link",content:r.link,topMargin:8})))}},uRdJ:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=0074ab95970743de090e7760f33279045aa1e8a1-d602d3bb678fc63732a2.js.map