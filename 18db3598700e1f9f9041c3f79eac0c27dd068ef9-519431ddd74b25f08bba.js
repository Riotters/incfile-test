(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"17xh":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("vvhN"),l=i.b.div.withConfig({displayName:"text-only__Wrapper",componentId:"sc-10qosq9-0"})(["display:flex;padding-left:40px;position:relative;p{font-size:16px;line-height:24px;max-width:85%;color:",";}svg{position:absolute;top:2px;left:0;stroke-dashoffset:0;height:20px;width:20px;fill:none;stroke:",";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18;transition:all 0.3s ease;transition-delay:0.1s;transform:translate3d(0,0,0);z-index:99;}"],(function(e){return"dark"===e.theme?o.a.white:o.a.grey1}),(function(e){return"dark"===e.theme?o.a.white:o.a.green1}));t.a=function(e){var t=e.className,n=e.theme,r=e.children;return a.a.createElement(l,{className:t,theme:n},a.a.createElement("svg",{viewBox:"-1 0 16 12"},a.a.createElement("polyline",{points:"2 6 4.5 9 10.5 3"})),r)}},"4nfj":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("bfge"),l=n("TvSw"),c=i.b.div.withConfig({displayName:"blue-box-with-absolute-text__Wrapper",componentId:"sc-1xp0rbl-0"})(["background-color:",";padding:40px;position:relative;border-radius:5px 30px 30px 5px;margin-bottom:44px;"],o.a.blue3),s=i.b.div.withConfig({displayName:"blue-box-with-absolute-text__AbsoluteText",componentId:"sc-1xp0rbl-1"})(["color:",";position:absolute;top:-25px;left:40px;font-size:48px;line-height:56px;font-weight:bold;font-family:MarkPro,sans-serif;"],o.a.blue1),p=Object(i.b)(l.a).withConfig({displayName:"blue-box-with-absolute-text__Text",componentId:"sc-1xp0rbl-2"})(["margin-bottom:0 !important;font-weight:bold;font-family:Avenir,sans-serif;font-weight:900;color:",";"],o.a.black);t.a=function(e){var t=e.absoluteText,n=e.text;return a.a.createElement(c,null,a.a.createElement(s,null,t),a.a.createElement(p,{big:!0},n))}},"72Y9":function(e,t,n){"use strict";var r=n("8o2o"),a=n("q1tI"),i=n.n(a),o=n("vOnD"),l=n("bxJw"),c=n("jcsU"),s=n("5T/x"),p=o.b.section.withConfig({displayName:"useful-tools__Wrapper",componentId:"sc-1gyv5sv-0"})(["padding-top:100px;"]);t.a=function(e){var t=e.toolsList,n=e.headlineText,a=e.description,o=Object(r.a)(e,["toolsList","headlineText","description"]);return i.a.createElement(p,o,i.a.createElement(l.a,{headline:n,text:a}),i.a.createElement(s.a,null,i.a.createElement(c.a,{tools:t})))}},A8UT:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("E2cJ"),o=n("vOnD").b.article.withConfig({displayName:"panel__PanelBox",componentId:"sc-1uxjqbm-0"})(["display:flex;flex-direction:column;flex-grow:1;max-width:",";margin-left:auto;padding-top:24px;h3{margin-bottom:48px;}"],(function(e){return"grid"!==e.layout?"670px":""}));t.a=function(e){var t=e.children,n=e.isVisible,r=e.layout,l=e.panelNo;return a.a.createElement(i.a,null,a.a.createElement(o,{className:n?"slideUp enter panel"+l:"slideUp panel"+l,layout:r},t))}},ChdA:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(0 .5)"},r.createElement("circle",{cx:84,cy:84,r:80,stroke:"#F2F6FF",strokeWidth:8}),r.createElement("path",{fill:"#5089FD",d:"M84 0a83.999 83.999 0 0179.889 109.957A83.995 83.995 0 0184 168a83.996 83.996 0 01-79.889-58.043 84.007 84.007 0 010-51.914 4.001 4.001 0 017.609 2.471 75.996 75.996 0 0027.608 84.971 75.998 75.998 0 0089.344 0 76.003 76.003 0 0027.609-84.97 75.994 75.994 0 00-27.61-38A75.985 75.985 0 0084 8c-2.21 0-4-1.79-4-4s1.79-4 4-4z"}),r.createElement("path",{fill:"#E8E8E8",d:"M84 145h1v7h-1zm0-129h1v7h-1zM23 83v1h-7v-1zM152 83v1h-7v-1z"}));t.a=function(e){return r.createElement("svg",a({width:168,height:169},e),i)}},E2cJ:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u}));var i=n("q1tI"),o=n.n(i);var l=function(e){var t=Object(i.useRef)();return t.current||(t.current={v:e()}),t.current.v},c=Object(i.createContext)(),s=Object(i.createContext)(),p=function(e){var t=e.state,n=e.children,r=Object(i.useState)(0),a=l((function(){return{tabs:0,panels:0}})),p=t||r;return o.a.createElement(s.Provider,{value:a},o.a.createElement(c.Provider,{value:p},n))},u=function(){var e=a(Object(i.useContext)(c),2),t=e[0],n=e[1],r=Object(i.useContext)(s),o=l((function(){var e=r.tabs;return r.tabs+=1,e})),p=l((function(){return function(){return n(o)}}));return Object(i.useMemo)((function(){return{isActive:t===o,onClick:p}}),[t,p,o])},d=function(){var e=a(Object(i.useContext)(c),1)[0],t=Object(i.useContext)(s);return l((function(){var e=t.panels;return t.panels+=1,e}))===e},f=function(e){var t=e.active,n=e.children;return d()||t?n:null}},FWCZ:function(e,t,n){"use strict";var r=n("8o2o"),a=n("q1tI"),i=n.n(a),o=(n("E2cJ"),n("vOnD")),l=function(e){e.title,e.filename;var t=e.children,n=Object(r.a)(e,["title","filename","children"]);return i.a.createElement(c,{className:n.isVisible?"slideUp enter":"slideUp",layout:n.layout},i.a.createElement(s,{layout:n.layout,columns:n.columns},t))},c=o.b.div.withConfig({displayName:"TabHeading__TabsWrapper",componentId:"sc-1idgv94-0"})(["display:flex;flex-direction:column;width:100%;@media (min-width:769px){max-width:",";}@media (min-width:1200px){max-width:",";}"],(function(e){return"grid"!==e.layout?"40%":""}),(function(e){return"grid"!==e.layout?"370px":""})),s=o.b.div.withConfig({displayName:"TabHeading__Sticky",componentId:"sc-1idgv94-1"})(["display:",";flex-direction:",";grid-template-columns:",";grid-gap:",";position:",";top:100px;"],(function(e){return"grid"===e.layout?"grid":"flex"}),(function(e){return"grid"!==e.layout?"column":""}),(function(e){return e.columns?"repeat("+e.columns+", 1fr)":""}),(function(e){return"grid"===e.layout?"30px":""}),(function(e){return"grid"!==e.layout?"sticky":""}));t.a=l,l.defaultProps={}},JS0p:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"#FCE7D0",fillRule:"nonzero",d:"M30.9 18.04c-.11-1.51-1.82-2.74-2.26-4.11-.44-1.37.22-3.56-.67-4.79s-3.11-1.21-4.35-2.11c-1.24-.9-1.88-3-3.35-3.49-1.47-.49-3.19.85-4.77.85-1.58 0-3.34-1.31-4.76-.89-1.42.42-2.13 2.63-3.35 3.53-1.22.9-3.39.87-4.33 2.09-.71 1-.42 2.46-.5 3.77-.015.34-.072.675-.17 1A15.763 15.763 0 01.6 16.68c.13 1.49 1.82 2.73 2.26 4.09.44 1.36-.22 3.56.67 4.79s3.11 1.21 4.35 2.11c1.24.9 1.88 3 3.35 3.49 1.47.49 3.19-.85 4.77-.85 1.58 0 3.34 1.31 4.76.85 1.42-.46 2.13-2.6 3.35-3.49 1.22-.89 3.42-.87 4.33-2.09a13.13 13.13 0 01.2-3.11c.078-.24.185-.468.32-.68.68-1.16 1.95-2.26 1.95-3.59a.855.855 0 00-.01-.16zm-9.76 1.27l.06.37.6 3.47a1.231 1.231 0 01-1.07 1.43c-.246.047-.5.02-.73-.08l-3.44-1.82c-.36-.19-.79-.19-1.15 0L12 24.5a1.228 1.228 0 01-1.78-1.3l.66-3.84a1.26 1.26 0 00-.36-1.09L7.7 15.5l3.61-.52c.4-.06.745-.315.92-.68l1.73-3.49a1.22 1.22 0 012.2 0l1.73 3.49c.177.368.526.623.93.68l3.85.56c.408.048.76.306.93.68l-2.08 2a1.23 1.23 0 00-.38 1.09z"}),r.createElement("path",{stroke:"#1D1D1B",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.4,d:"M31.41 16.5a3 3 0 01-.51 1.54 15.538 15.538 0 00-1.77 2.73c-.098.325-.155.66-.17 1-.08 1.31.21 2.8-.5 3.77h0c-.91 1.22-3.1 1.2-4.33 2.09-1.23.89-1.88 3-3.35 3.49-1.47.49-3.19-.85-4.76-.85-1.57 0-3.34 1.31-4.77.85-1.43-.46-2.12-2.6-3.35-3.49-1.23-.89-3.45-.87-4.35-2.11-.9-1.24-.19-3.32-.67-4.79C2.4 19.26.73 18.17.6 16.68a1.082 1.082 0 010-.18c0-1.33 1.27-2.43 2-3.59.135-.212.242-.44.32-.68.19-1.025.257-2.07.2-3.11a2.925 2.925 0 01.47-1.68c.9-1.24 3.11-1.21 4.35-2.11 1.24-.9 1.88-3 3.35-3.49 1.47-.49 3.19.85 4.77.85 1.58 0 3.34-1.31 4.76-.85 1.42.46 2.13 2.59 3.35 3.49 1.22.9 3.45.87 4.35 2.11.9 1.24.2 3.32.67 4.79.47 1.47 2.22 2.69 2.22 4.27z"}),r.createElement("path",{stroke:"#1D1D1B",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.4,d:"M17.1 8.22l1.73 3.49c.175.365.52.62.92.68l3.86.56a1.229 1.229 0 01.68 2.1l-2.79 2.71a1.23 1.23 0 00-.35 1.09l.66 3.84a1.23 1.23 0 01-1.81 1.3l-3.45-1.81a1.211 1.211 0 00-1.14 0L12 23.99a1.23 1.23 0 01-1.79-1.3l.66-3.84a1.23 1.23 0 00-.35-1.09l-2.81-2.71a1.232 1.232 0 01.68-2.1l3.86-.56c.4-.06.745-.315.92-.68l1.73-3.49a1.22 1.22 0 012.2 0z"}));t.a=function(e){return r.createElement("svg",a({width:32,height:33},e),i)}},MG55:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("5T/x"),o=n("vOnD"),l=n("Y+kd"),c=n("1u1j"),s=o.b.section.withConfig({displayName:"conclusion__ConclusionWrapper",componentId:"d7bvib-0"})(["position:relative;margin-top:76px;margin-bottom:150px;"]),p=o.b.div.withConfig({displayName:"conclusion__Oval",componentId:"d7bvib-1"})(["position:absolute;right:0;bottom:calc(50% - 313px);width:480px;display:none;@media (min-width:1130px){display:block;}"]),u=o.b.div.withConfig({displayName:"conclusion__Content",componentId:"d7bvib-2"})(["margin:0 auto;width:100%;max-width:600px;@media (min-width:1130px){margin:0 0 0px auto;}"]),d=o.b.div.withConfig({displayName:"conclusion__TextBox",componentId:"d7bvib-3"})([""]),f=o.b.div.withConfig({displayName:"conclusion__ImageBox",componentId:"d7bvib-4"})(["position absolute;left:-15%;top:calc(50% - 313px);width:720px;height:626px;display:none;@media (min-width:1130px){display:block;}"]);t.a=function(e){var t=e.buttonTitle,n=e.children,r=e.to;return a.a.createElement(s,null,a.a.createElement(p,null,a.a.createElement(l.a,{filename:"oval-conclusion-1"})),a.a.createElement(i.a,null,a.a.createElement(f,null,a.a.createElement(l.a,{filename:"conclusion-main"})),a.a.createElement(u,null,a.a.createElement(d,null,n),a.a.createElement(c.a,{arrow:!0,theme:"primary48",content:{text:t,url:r},width:"max-content"}))))}},Nkf8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("1u1j"),l=n("XuRJ"),c=i.b.div.withConfig({displayName:"heading-left__Wrapper",componentId:"g1d3l8-0"})(["display:flex;flex-direction:column;justify-content:center;h2,p,a{text-align:left;}h2{max-width:","px;margin-bottom:24px;}p{max-width:","px;margin-bottom:24px;}a{margin-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:"610"}),(function(e){return e.textWidth?e.textWidth:"750"}));t.a=function(e){var t=e.headline,n=e.headlineWidth,r=e.text,i=e.textWidth,s=e.linkText,p=e.linkUrl;return a.a.createElement(c,{headlineWidth:n,textWidth:i},t&&a.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return a.a.createElement("h2",{className:n?"slideUp enter":"slideUp"},t)})),r&&a.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return a.a.createElement("p",{className:t?"slideUp enter":"slideUp"},r)})),s&&a.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return a.a.createElement(o.a,{href:p,className:t?"slideUp enter":"slideUp"},s)})))}},OiF8:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("defs",null,r.createElement("linearGradient",{id:"top-right-transparent-blue2_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),r.createElement("stop",{offset:"100%",stopColor:"#D2E0FE"}))),o=r.createElement("path",{fill:"url(#top-right-transparent-blue2_inline_svg__a)",fillRule:"evenodd",d:"M570 0v570H0C0 255.198 255.198 0 570 0z",opacity:.4,transform:"matrix(1 0 0 -1 0 570)"});t.a=function(e){return r.createElement("svg",a({viewBox:"0 0 570 570"},e),i,o)}},PRqb:function(e,t,n){"use strict";var r=n("8o2o"),a=n("q1tI"),i=n.n(a),o=n("E2cJ"),l=n("vOnD"),c=n("5T/x"),s=n("AZup"),p=l.b.div.withConfig({displayName:"tabs__MainWrapper",componentId:"erpd1c-0"})(["padding-bottom:100px;"]),u=l.b.div.withConfig({displayName:"tabs__Wrapper",componentId:"erpd1c-1"})(["display:flex;flex-direction:column;position:relative;@media (min-width:769px){flex-direction:",";}.accordion-panel{overflow:hidden;}.ReactCollapse--collapse{width:100%;transition:height 500ms;margin-left:auto;@media (min-width:769px){max-width:",";}@media (min-width:1200px){max-width:",";}}"],(function(e){return"grid"!==e.layout?"row":"column"}),(function(e){return"grid"!==e.layout?"55%":""}),(function(e){return"grid"!==e.layout?"670px":""}));t.a=function(e){var t=e.layout,n=(e.column,e.children),a=(e.oval,Object(r.a)(e,["layout","column","children","oval"]));return i.a.createElement(p,a,i.a.createElement(c.a,null,i.a.createElement(u,{layout:t},i.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible,r=e.layout,a=e.column;return i.a.createElement(o.b,null,i.a.Children.map(n,(function(e){return i.a.cloneElement(e,{isVisible:t,layout:r,column:a})})))})))))}},Sid9:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("Wbzz"),l=n("bfge"),c=n("JBFi"),s=Object(i.b)(o.Link).withConfig({displayName:"path__Wrapper",componentId:"irt7xd-0"})(["display:inline-flex;align-items:center;text-decoration:none;span{font-size:16px;line-height:24px;font-weight:600;color:",";transition:color 0.3s ease;}&:hover{span{color:",";}svg{path{fill:",";}}}"],(function(e){return e.textColor}),(function(e){return e.hoverColor}),(function(e){return e.hoverColor})),p=i.b.div.withConfig({displayName:"path__Arrow",componentId:"irt7xd-1"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-left:10px;svg{path{transition:fill 0.3s ease;fill:",";}}"],(function(e){return e.arrowColor})),u=function(e){var t=e.children,n=e.className,r=e.to,i=e.textColor,o=e.arrowColor,l=e.hoverColor;return a.a.createElement(s,{to:r,className:n,textColor:i,hoverColor:l},a.a.createElement("span",null,t),a.a.createElement(p,{arrowColor:o},a.a.createElement(c.a,null)))};u.defaultProps={textColor:l.a.orange1,arrowColor:l.a.black,hoverColor:l.a.blue1},t.a=u},TDQI:function(e,t,n){"use strict";var r=n("8o2o"),a=n("q1tI"),i=n.n(a),o=n("vOnD"),l=n("bfge"),c=n("eqkC"),s=n("ChdA"),p=function(e){var t=e.textInsideCircle,n=e.textLine,a=e.symbol,o=e.withBg,l=e.SvgChart,c=Object(r.a)(e,["textInsideCircle","textLine","symbol","withBg","SvgChart"]);return i.a.createElement(u,Object.assign({withBg:o},c),i.a.createElement(d,null,i.a.createElement(l,null),i.a.createElement(f,null,i.a.createElement("span",null,t,a&&i.a.createElement(m,null,a)))),i.a.createElement(h,null,n))};p.defaultProps={withBg:!1,SvgChart:s.a};var u=o.b.div.withConfig({displayName:"circle-with-text-block__Wrapper",componentId:"sc-1jqbke0-0"})(["max-height:270px;display:flex;align-items:center;padding:40px 40px 40px 40px;",""],(function(e){return e.withBg&&"background-color:"+l.a.white+";box-shadow:"+c.a.white1+";border-top-left-radius: 8px;border-top-right-radius: 20px;border-bottom-left-radius: 8px;border-bottom-right-radius: 20px;"})),d=o.b.div.withConfig({displayName:"circle-with-text-block__Circle",componentId:"sc-1jqbke0-1"})(["position:relative;width:180px;"]),f=o.b.div.withConfig({displayName:"circle-with-text-block__TextInside",componentId:"sc-1jqbke0-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:48px;color:black;line-height:56px;font-family:MarkPro-Bold,sans-serif;font-weight:bold;span{position:relative;}"]),m=o.b.div.withConfig({displayName:"circle-with-text-block__Symbol",componentId:"sc-1jqbke0-3"})(["position:absolute;top:0;right:-20px;font-size:18px;line-height:32px;color:#7a7a7a;"]),h=o.b.div.withConfig({displayName:"circle-with-text-block__TextBox",componentId:"sc-1jqbke0-4"})(["font-family:Avenir,sans-serif;font-weight:900;font-size:20px;color:#1d1d1d;padding-right:48px;padding-bottom:24px;padding-top:24px;margin-left:44px;width:calc(100% - 160px);"]);t.a=p},XrS5:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("defs",null,r.createElement("linearGradient",{id:"bottom-left-transparent-blue3_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),r.createElement("stop",{offset:"100%",stopColor:"#d2e0fe",stopOpacity:.4}))),o=r.createElement("path",{fill:"url(#bottom-left-transparent-blue3_inline_svg__a)",fillRule:"evenodd",d:"M420 0v420H0C0 188.04 188.04 0 420 0z",transform:"matrix(-1 0 0 1 420 0)"});t.a=function(e){return r.createElement("svg",a({viewBox:"0 0 420 420"},e),i,o)}},bvKj:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("JS0p"),o=n("JBFi"),l=n("E2cJ"),c=n("vOnD"),s=function(e){var t=e.title,n=e.arrow,r=e.SvgIcon;return a.a.createElement(u,null,a.a.createElement(d,null,a.a.createElement(r,null)),a.a.createElement(f,null,a.a.createElement("span",null,t),n&&a.a.createElement(m,{className:"tabArrow"},a.a.createElement(o.a,null))))};t.a=s;var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},u=function(e){var t=e.children,n=Object(l.d)(),r=n.isActive,i=n.onClick;return a.a.createElement(h,{className:p("accordion-tab",r&&"active"),onClick:i},t)};s.defaultProps={arrow:!0,SvgIcon:i.a};var d=c.b.div.withConfig({displayName:"tab-title__Icon",componentId:"ljzbso-0"})(["display:flex;align-items:center;justify-content:center;height:80px;width:50px;opacity:0.75;@media (min-width:992px){width:80px;}"]),f=c.b.div.withConfig({displayName:"tab-title__Content",componentId:"ljzbso-1"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding:0 24px;border-left:1px solid #f4f4f4;span{color:#4e4e4e;font-family:Avenir;font-size:13px;white-space:nowrap;@media (min-width:769px){font-size:16px;}}.tabArrow{opacity:0;transform:translateX(-3px);transition:opacity 0.3s ease,transform 0.3s ease;svg{path{fill:#1d1d1d;}}}&:hover{.tabArrow{opacity:1;transform:translateX(0);}}"]),m=c.b.div.withConfig({displayName:"tab-title__Arrow",componentId:"ljzbso-2"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:10px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]),h=c.b.button.withConfig({displayName:"tab-title__ButtonBox",componentId:"ljzbso-3"})(["height:78px;line-height:78px;color:#4e4e4e;background:#fff;transition:box-shadow 0.3s ease;box-shadow:0 20px 30px 0 #e6e6e6;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;margin-bottom:7px;border:none;z-index:0;&.active{box-shadow:0 40px 80px 0 #e6e6e6;font-weight:600;z-index:1;.tabArrow{opacity:1;transform:translateX(0);}}"])},cws8:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("defs",null,r.createElement("linearGradient",{id:"top-right-transparent-orange_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),r.createElement("stop",{offset:"100%",stopColor:"#FCE7D0"}))),o=r.createElement("path",{fill:"url(#top-right-transparent-orange_inline_svg__a)",fillRule:"evenodd",d:"M570 0v570H0C0 255.198 255.198 0 570 0z",transform:"matrix(1 0 0 -1 0 570)"});t.a=function(e){return r.createElement("svg",a({viewBox:"0 0 570 570"},e),i,o)}},dDmD:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{d:"M31.63 23.55a1.33 1.33 0 01-.6 1.18l-8.72 7.34c-.28.19-1.38-.1-1.68-.14L20.2 28a1.36 1.36 0 00-1.36-1.36h-4c-.62 0-.64-.3-1.13-.62-.11-.3-.72-.51-.72-.85 0-.85-1.13-1.62-.57-2.17a3 3 0 012.17-.9h5.44a1.36 1.36 0 001.36-1.36v-2.88a1.37 1.37 0 012.12-1.13l8.12 6.82z",fill:"#fff"}),o=r.createElement("path",{clipRule:"evenodd",d:"M31.29 23.55a1.33 1.33 0 01-.6 1.18L22 32.07a1.29 1.29 0 01-.9.21 1.34 1.34 0 01-1.21-1.34V28a1.36 1.36 0 00-1.36-1.36h-3.1a3.07 3.07 0 010-6.14h3.07a1.36 1.36 0 001.36-1.36v-2.9a1.35 1.35 0 012.14-1.1l8.72 7.33c.35.25.561.65.57 1.08z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),l=r.createElement("path",{d:"M.38 10.35c-.02.476.217.926.62 1.18l8.7 7.34c.28.19 1.38-.1 1.68-.14l.43-3.9c0-.751.609-1.36 1.36-1.36h4c.62 0 .63-.3 1.12-.62.11-.3.73-.51.73-.85 0-.85 1.13-1.62.57-2.17a3 3 0 00-2.17-.9H12a1.36 1.36 0 01-1.4-1.36V4.66a1.37 1.37 0 00-2.12-1.13l-8.1 6.82z",fill:"#fff"}),c=r.createElement("path",{clipRule:"evenodd",d:"M.72 10.35a1.33 1.33 0 00.6 1.18L10 18.87c.264.179.584.254.9.21a1.34 1.34 0 001.21-1.34v-2.91c0-.751.609-1.36 1.36-1.36h3.07a3.07 3.07 0 000-6.14h-3.03A1.36 1.36 0 0112.15 6V3.07A1.35 1.35 0 0010 1.94L1.32 9.27a1.36 1.36 0 00-.6 1.08z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"});t.a=function(e){return r.createElement("svg",a({width:32,height:33,fill:"none"},e),i,o,l,c)}},"dGx+":function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("defs",null,r.createElement("filter",{id:"chart_inline_svg__a",width:"315.3%",height:"1063%",x:"-105.7%",y:"-341.5%",filterUnits:"objectBoundingBox"},r.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:4,result:"shadowSpreadOuter1"}),r.createElement("feOffset",{dy:10,in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),r.createElement("feMorphology",{in:"SourceAlpha",radius:4,result:"shadowInner"}),r.createElement("feOffset",{dy:10,in:"shadowInner",result:"shadowInner"}),r.createElement("feComposite",{in:"shadowOffsetOuter1",in2:"shadowInner",operator:"out",result:"shadowOffsetOuter1"}),r.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:9}),r.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0.31372549 0 0 0 0 0.537254902 0 0 0 0 0.992156863 0 0 0 0.2 0"})),r.createElement("path",{id:"chart_inline_svg__b",d:"M0 0c11.776 0 23.407 2.6 34.062 7.614"})),o=r.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(4 12)"},r.createElement("circle",{cx:80,cy:80,r:80,stroke:"#F2F6FF",strokeWidth:8}),r.createElement("g",{strokeLinecap:"round",transform:"translate(80)"},r.createElement("use",{fill:"#000",filter:"url(#chart_inline_svg__a)",xlinkHref:"#chart_inline_svg__b"}),r.createElement("use",{stroke:"#5089FD",strokeWidth:8,xlinkHref:"#chart_inline_svg__b"})));t.a=function(e){return r.createElement("svg",a({width:168,height:176},e),i,o)}},kihd:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("rfF1"),o=function(e){var t=e.isOpened,n=e.isVisible,r=e.layout,o=e.children;return a.a.createElement(i.Collapse,{isOpened:t},a.a.Children.map(o,(function(e,t){return a.a.cloneElement(e,{isVisible:n,layout:r,panelNo:t})})))};t.a=o,o.defaultProps={isOpened:!0}},p0Gj:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("defs",null,r.createElement("linearGradient",{id:"bottom-left-transparent-orange_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),r.createElement("stop",{offset:"100%",stopColor:"#FCE7D0"}))),o=r.createElement("path",{fill:"url(#bottom-left-transparent-orange_inline_svg__a)",fillRule:"evenodd",d:"M720 0v720H0C0 322.355 322.355 0 720 0z",opacity:.6,transform:"matrix(-1 0 0 1 720 0)"});t.a=function(e){return r.createElement("svg",a({viewBox:"0 0 720 720"},e),i,o)}}}]);
//# sourceMappingURL=18db3598700e1f9f9041c3f79eac0c27dd068ef9-519431ddd74b25f08bba.js.map