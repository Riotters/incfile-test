(window.webpackJsonp=window.webpackJsonp||[]).push([[41,49],{"5T/x":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"container__Wrapper",componentId:"sc-174oewj-0"})(["position:relative;z-index:1;width:100%;max-width:568px;padding-left:30px;padding-right:30px;margin:0 auto;@media (min-width:769px){max-width:768px;}@media (min-width:992px){max-width:100%;padding-left:15px;padding-right:15px;}@media (min-width:","px){max-width:","px;}"],(function(e){return e.width}),(function(e){return e.width})),o=function(e){var t=e.children,n=e.style,a=e.width;return i.a.createElement(r,{style:n,width:a},t)};t.a=o,o.defaultProps={width:1200}},C9un:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z",fill:"#FD8550"}),o=a.createElement("path",{d:"M29.452 21.415a1 1 0 00-1.413-.004l-.656.652a1 1 0 00-.002 1.417l3.794 3.794H20.25a1 1 0 00-1 1v.91a1 1 0 001 1h10.925l-3.794 3.794a1 1 0 00.002 1.417l.657.652a1 1 0 001.412-.003l6.593-6.609a1 1 0 000-1.412l-6.593-6.608z",fill:"#fff"});t.a=function(e){return a.createElement("svg",i({width:56,height:56,fill:"none"},e),r,o)}},E2cJ:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){i=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p}));var r=n("q1tI"),o=n.n(r);var l=function(e){var t=Object(r.useRef)();return t.current||(t.current={v:e()}),t.current.v},c=Object(r.createContext)(),d=Object(r.createContext)(),s=function(e){var t=e.state,n=e.children,a=Object(r.useState)(0),i=l((function(){return{tabs:0,panels:0}})),s=t||a;return o.a.createElement(d.Provider,{value:i},o.a.createElement(c.Provider,{value:s},n))},p=function(){var e=i(Object(r.useContext)(c),2),t=e[0],n=e[1],a=Object(r.useContext)(d),o=l((function(){var e=a.tabs;return a.tabs+=1,e})),s=l((function(){return function(){return n(o)}}));return Object(r.useMemo)((function(){return{isActive:t===o,onClick:s}}),[t,s,o])},m=function(){var e=i(Object(r.useContext)(c),1)[0],t=Object(r.useContext)(d);return l((function(){var e=t.panels;return t.panels+=1,e}))===e},u=function(e){var t=e.active,n=e.children;return m()||t?n:null}},"I95+":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("qcxv"),l=n("AZup"),c=r.b.div.withConfig({displayName:"heading-center__Wrapper",componentId:"sc-16prid1-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;h2{max-width:","px;margin-bottom:24px;}p{max-width:","px;text-align:center;margin-bottom:24px;}a{margin-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:"610"}),(function(e){return e.textWidth?e.textWidth:"750"}));t.a=function(e){var t=e.className,n=e.headline,a=e.headlineWidth,r=e.text,d=e.textWidth,s=e.linkText,p=e.linkUrl;return i.a.createElement(c,{className:t,headlineWidth:a,textWidth:d},n&&i.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("h2",{className:t?"slideUp enter":"slideUp"},n)})),r&&i.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("p",{className:t?"slideUp enter":"slideUp"},r)})),s&&i.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement(o.a,{href:p,className:t?"slideUp enter":"slideUp"},s)})))}},MZ2l:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("7cWy"),l=n("vvhN"),c=r.b.div.withConfig({displayName:"color-box__Wrapper",componentId:"sc-1aahzfb-0"})(["padding:16px 16px 0 0;position:relative;> div{background-color:",";border-radius:5px 50px 50px 5px;padding:40px;@media (min-width:576px){padding:",";}h4{padding-bottom:",";}p{color:",";}ul{list-style:none;li{font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:#63666E;padding-left:26px;position:relative;&::before{content:'';height:4px;width:4px;background-color:",";border-radius:50%;position:absolute;top:9px;left:6px;}&:not(:last-child){margin-bottom:12px;}}}}& > svg{position:absolute;top:0;right:0;path{fill:","}}& > div{svg{position:absolute;left:44px;display:none;@media (min-width:576px){display:block;}}}"],(function(e){return e.color?e.color:""}),(function(e){return"icon"===e.theme?"40px 40px 40px 112px":"40px"}),(function(e){return"icon"===e.theme?"16px":"24px"}),l.a.grey1,(function(e){return e.dotsColor?e.dotsColor:""}),(function(e){return e.curveColor?e.curveColor:""}));t.a=function(e){var t=e.className,n=e.theme,a=e.Icon,r=e.color,l=e.dotsColor,d=e.children,s=e.curve,p=e.curveColor;return i.a.createElement(c,{className:t,theme:n,color:r,dotsColor:l,curveColor:p},s&&i.a.createElement(o.a,null),i.a.createElement("div",null,a&&"icon"===n?i.a.createElement(a,null):null,d))}},QWzL:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("+e4l"),l=n("I95+"),c=n("75yN"),d=n("DJbB"),s=n("p/GV"),p=n("mN2e"),m=n("2sx2"),u=n("vpi6"),h=n("5FjD"),f=n("yQ63"),g=n("n8xl"),x=n("wI+P"),b=r.b.div.withConfig({displayName:"benefits__Wrapper",componentId:"fsvto6-0"})(["padding-top:50px;position:relative;@media (min-width:769px){padding-top:105px;}"]),v=r.b.div.withConfig({displayName:"benefits__Grid",componentId:"fsvto6-1"})(["display:grid;grid-template-columns:1fr;grid-column-gap:30px;grid-row-gap:56px;padding-top:76px;@media (min-width:769px){grid-template-columns:1fr 1fr 1fr;}"]);t.a=function(){return i.a.createElement(b,null,i.a.createElement(o.a,null,i.a.createElement(l.a,{headline:"Providing everything you need when you need it",text:"As your business grows we'll be there every step of the way to make sure that you have the resources at hand to serve your companies ongoing needs.",headlineWidth:"700"}),i.a.createElement(v,null,i.a.createElement(c.a,{Icon:d.a,headline:"File Annual Report",text:"The majority of states require that companies file periodic reports that affirm  the current information of the companies memebrs, directors, and business address."}),i.a.createElement(c.a,{Icon:s.a,headline:"Certificate of Good Standing",text:"Required by govermental and private agencies to validate a companies status in  order to facilitate specified transactions."}),i.a.createElement(c.a,{Icon:f.a,headline:"Foreign Qualification",text:"Filed when you need to expand your entity to new states."}),i.a.createElement(c.a,{Icon:m.a,headline:"Amendment",text:"Filed if a company requires changes to membership, addresses or company name."}),i.a.createElement(c.a,{Icon:u.a,headline:"Dissolution",text:"Used to formally terminate the existence of an entity."}),i.a.createElement(c.a,{Icon:h.a,headline:"Order Registered Agent",text:"Order registered agent service and receive your new registered agent information immediately."}),i.a.createElement(c.a,{Icon:p.a,headline:"Corporate LLC Kit",text:"The Corporate/LLC Kit is a professional binder enclosed in a matching slip case, customized  with the name of your company on the spine insert. Click the icon to view the full contents.",textWidth:"298"}),i.a.createElement(c.a,{Icon:g.a,headline:"Business License Search",text:"Determine all business licenses and permits required at the federal, state, county and  municipal level"}),i.a.createElement(c.a,{Icon:x.a,headline:"EIN/TAX ID#",text:"An EIN is required to open a bank account, file taxes and sumbit payroll taxes."}))))}},TvSw:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("nIY7");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("vvhN");var l=r.b.p.withConfig({displayName:"paragraph__StyledParagraph",componentId:"si4vm-0"})(["font-family:Avenir,sans-serif;font-size:","px;line-height:","px;max-width:",";padding-bottom:",";margin-bottom:","px;"," "," "," span.big{font-family:Avenir-Heavy,sans-serif;}span.blue{color:","}"],(function(e){return e.big?"20":"16"}),(function(e){return e.big?"32":"24"}),(function(e){return e.maxWidth?e.maxWidth+"px":""}),(function(e){return e.bottomPadding?e.bottomPadding+"px":""}),(function(e){return e.bottomMargin}),(function(e){return e.flex&&"display: flex;"}),(function(e){return e.flexAlign&&"align-items: "+e.flexAlignValue+";"}),(function(e){return e.flexJustify&&"justify-content: "+e.flexJustifyValue+";"}),o.a.blue1),c=function(e){var t=e.children,n=e.maxWidth,a=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","maxWidth"]);return i.a.createElement(l,Object.assign({maxWidth:n},a),t)};c.defaultProps={flex:!1,flexAlign:!1,flexJustify:!1,flexJustifyValue:"center",flexAlignValue:"center",bottomMargin:32}},"Y+kd":function(e,t,n){"use strict";n("Z2Ku"),n("L9s1"),n("dRSK");var a=n("fzJm"),i=n("q1tI"),r=n.n(i),o=n("Wbzz"),l=n("9eSz"),c=n.n(l);t.a=function(e){return r.a.createElement(o.StaticQuery,{query:"1938523414",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a=n.node.childImageSharp.fluid;return r.a.createElement(c.a,{alt:e.alt,fluid:a})},data:a})}},bcDI:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("bfge"),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("aqT/")),c=n.n(l);var d=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state.active,n=this.props,a=n.once,r=n.children,o=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["once","children"]);return i.a.createElement(c.a,Object.assign({active:t,onChange:function(t){return a&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},o),(function(e){var t=e.isVisible;return r({isVisible:t})}))},a}(a.Component);d.defaultProps={once:!1};var s=d,p=n("5T/x"),m=n("Y+kd"),u=n("dBvy"),h=r.b.div.withConfig({displayName:"top__Wrapper",componentId:"sc-1ld4c8g-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;padding-top:80px;@media (min-width:992px){flex-direction:row;height:100vh;max-height:777px;padding-top:0;}"]),f=r.b.div.withConfig({displayName:"top__Oval",componentId:"sc-1ld4c8g-1"})(['width:90%;max-height:777px;max-width:350px;position:absolute;top:0;right:0;z-index:-1;overflow:hidden;@media (min-width:992px){width:50%;max-width:850px;}&::after{content:"";display:block;padding-bottom:100%;}& > svg{position:absolute;right:0;bottom:0;defs{radialGradient{stop{&:nth-child(1){stop-color:',";}&:nth-child(2){stop-color:",";}}}}path{transform:matrix(1,0,0,-1,-115,777);}}"],(function(e){return function(e){switch(e){case"blue":return o.a.blue1;case"orange":return o.a.orange1;case"purple":return o.a.purple1;case"yellow":return o.a.yellow1;case"green":return"#97e0c7";case"sun":return"#ffb059";case"blackpink":return"#ffb8b8";case"darkblue":return"#7891fc";default:return""}}(e.ovalColor)}),(function(e){return function(e){switch(e){case"blue":return o.a.babyblue2;case"orange":return o.a.orange2;case"purple":return o.a.purple2;case"yellow":return o.a.yellow2;case"green":return"#d5f3e8";case"sun":return"#ffe3c5";case"blackpink":return"#ffdddd";case"darkblue":return"#ced7ff";default:return""}}(e.ovalColor)})),g=r.b.div.withConfig({displayName:"top__Content",componentId:"sc-1ld4c8g-2"})(["display:flex;flex-wrap:wrap;"]),x=r.b.div.withConfig({displayName:"top__TextContainer",componentId:"sc-1ld4c8g-3"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding-top:32px;@media (min-width:992px){width:50%;align-items:flex-start;padding-top:150px;}h1{width:100%;text-align:center;padding-bottom:40px;@media (min-width:992px){text-align:left;padding-bottom:20px;}@media (min-width:1200px){max-width:","px;}}p{margin-bottom:33px;text-align:center;@media (min-width:1200px){text-align:left;max-width:","px;}}"],(function(e){return e.headlineWidth?e.headlineWidth:"480"}),(function(e){return e.headlineWidth?e.headlineWidth:"480"})),b=r.b.div.withConfig({displayName:"top__ImageContainer",componentId:"sc-1ld4c8g-4"})(["display:flex;max-width:950px;width:100%;top:50%;right:55%;@media (min-width:992px){position:absolute;width:55%;transform:translate(100%,-50%);}.gatsby-image-wrapper{width:100%;img{object-fit:contain !important;}}"]),v=function(e){var t=e.children,n=e.imageName,a=e.imageAlt,r=e.headlineWidth,o=e.ovalColor;return i.a.createElement(h,null,i.a.createElement(s,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement(f,{className:t?"scaleUp enter":"scaleUp",ovalColor:o},i.a.createElement(u.a,null))})),i.a.createElement(b,null,i.a.createElement(m.a,{filename:n,alt:a})),i.a.createElement(p.a,null,i.a.createElement(g,null,i.a.createElement(s,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return i.a.createElement(x,{className:n?"slideRight enter":"slideRight",headlineWidth:r},t)})))))};t.a=v;v.defaultProps={OvalSVGFile:u.a}},cQKk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"heading__HeadingWrapper",componentId:"gx3uoj-0"})(["margin-bottom:","px;padding-bottom:",";max-width:",";"],(function(e){return e.bottomMargin}),(function(e){return e.bottomPadding?e.bottomPadding+"px":""}),(function(e){return e.maxWidth?e.maxWidth+"px":""})),o=function(e){var t=e.size,n=e.children,a=e.bottomMargin,o=e.bottomPadding,l=e.maxWidth,c=e.className,d=e.style;return i.a.createElement(r,{as:"h"+t,bottomMargin:a,bottomPadding:o,maxWidth:l,className:c,style:d},n)};o.defaultProps={size:1,bottomMargin:"24"}},kDk7:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),l=n("Y+kd"),c=r.b.div.withConfig({displayName:"left-image-right-content__Wrapper",componentId:"oxrm8t-0"})(["position:relative;"]),d=r.b.div.withConfig({displayName:"left-image-right-content__Flex",componentId:"oxrm8t-1"})(["display:flex;justify-content:space-between;"]),s=r.b.div.withConfig({displayName:"left-image-right-content__Content",componentId:"oxrm8t-2"})(["display:flex;flex-direction:column;width:100%;max-width:670px;padding-top:","px;"],(function(e){return e.paddingTop?e.paddingTop:"60"})),p=r.b.div.withConfig({displayName:"left-image-right-content__Sticky",componentId:"oxrm8t-3"})(["display:block;width:100%;.gatsby-image-wrapper{position:sticky !important;top:100px;}"]),m=r.b.div.withConfig({displayName:"left-image-right-content__Imagebox",componentId:"oxrm8t-4"})(["display:none;width:100%;max-width:485px;position:relative;@media(min-width:769px){display:flex;}.gatsby-image-wrapper{height:auto;width:100%;}"]);t.a=function(e){var t=e.children,n=e.image,a=e.paddingTop;return i.a.createElement(c,null,i.a.createElement(o.a,null,i.a.createElement(d,null,i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement(l.a,{filename:n}))),i.a.createElement(s,{paddingTop:a},t))))}},"m4/u":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=r.b.div.withConfig({displayName:"left-content-right-object__Wrapper",componentId:"sc-7j6uhz-0"})(["display:flex;flex-direction:column;width:100%;@media(min-width:769px){flex-direction:row;}"]),l=r.b.div.withConfig({displayName:"left-content-right-object__Content",componentId:"sc-7j6uhz-1"})(["display:flex;flex-direction:column;justify-content:center;@media (min-width:769px){width:60%;max-width:700px;padding-right:100px;}h2{max-width:","px;}p{max-width:","px;}h2{text-align:left;padding-bottom:56px;}h4{padding-bottom:24px;}p{padding-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:""}),(function(e){return e.textWidth?e.textWidth:""})),c=r.b.div.withConfig({displayName:"left-content-right-object__Objectbox",componentId:"sc-7j6uhz-2"})(["display:flex;align-items:center;@media (min-width:769px){width:40%;}"]);t.a=function(e){var t=e.children,n=e.className,a=e.object,r=e.headlineWidth,d=e.textWidth;return i.a.createElement(o,{className:n},i.a.createElement(l,{headlineWidth:r,textWidth:d},t),i.a.createElement(c,null,a))}},nIY7:function(e,t,n){"use strict";n("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))},qcxv:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("JBFi"),l=r.b.a.withConfig({displayName:"arrow-link__Wrapper",componentId:"icd0r5-0"})(["display:flex;align-items:center;text-decoration:none;span{transition:color 0.3s ease;font-weight:600;}&:hover{color:#fd8550;svg{path{fill:#fd8550;}}}"]),c=r.b.div.withConfig({displayName:"arrow-link__Arrow",componentId:"icd0r5-1"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:10px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]);t.a=function(e){var t=e.children,n=e.className;return i.a.createElement(l,{href:"#",className:n},i.a.createElement(c,null,i.a.createElement(o.a,null)),i.a.createElement("span",null,t))}},ri8M:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Bl7J"),o=n("vrFN"),l=n("Wdr8"),c=n("ZXdF"),d=n("MZ2l"),s=n("I95+"),p=n("vOnD"),m=n("bcDI"),u=n("kDk7"),h=n("H0Ff"),f=n("vvhN"),g=n("/e4F"),x=n("+e4l");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var v=a.createElement("path",{d:"M24.12 7.16a.94.94 0 01.79.93V15a17.15 17.15 0 01-3.62 10.55l-7 5.53-5.84-4.35c-4.35-3.24-6.71-9.65-6.71-15.09v-5.7a2 2 0 01.36-.29 3 3 0 00.54-.11 4.47 4.47 0 002.15-1.21A4.52 4.52 0 005.9 2.56h13.35c.538.01.995.4 1.09.93a4.67 4.67 0 003.78 3.67z",fill:"#fff"}),y=a.createElement("path",{clipRule:"evenodd",d:"M26.5 5.54v7.79A17.22 17.22 0 0119.8 27l-.29.23-5.24 4.09-5.84-4.36A17.24 17.24 0 011.5 13.11V5.54c.2.016.4.016.6 0a3 3 0 00.54-.11 4.39 4.39 0 002.15-1.25A4.55 4.55 0 005.9 2.42a.32.32 0 000-.09 2.09 2.09 0 012-1.46h12.21a2.06 2.06 0 011.95 1.44 4.67 4.67 0 004.44 3.23z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),w=a.createElement("path",{clipRule:"evenodd",d:"M22.66 8.77v5.4A11.93 11.93 0 0118 23.62l-.2.16-3.64 2.83-4-3A11.94 11.94 0 015.34 14V8.77a3 3 0 00.42 0 2.45 2.45 0 00.37-.08 3.08 3.08 0 001.49-.84 3.1 3.1 0 00.77-1.22v-.06a1.44 1.44 0 011.35-1h8.48a1.41 1.41 0 011.34 1c.097.287.231.56.4.81a3.23 3.23 0 002.7 1.39z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"});var E=function(e){return a.createElement("svg",b({width:28,height:33,fill:"none"},e),v,y,w)},k=n("m4/u"),I=n("xVvc"),C=n("QWzL"),_=n("aYt9"),N=n("C9un"),W=n("DNaL"),O=n("yEnY"),j=n("cQKk"),q=n("TvSw"),z=p.b.section.withConfig({displayName:"trademark-name-search__BusinessOwnerResponsibilities",componentId:"i5u5zr-0"})(["position:relative;padding-top:75px;padding-bottom:64px;h3{&.pt32{padding-top:32px;}&.pt48{padding-top:48px;}}p{&.pb32{padding-bottom:32px;}&.pb40{padding-bottom:40px;}}.purplebox{margin-bottom:48px;}"]),A=p.b.section.withConfig({displayName:"trademark-name-search__RequirementsByState",componentId:"i5u5zr-1"})(["background-image:",";padding-top:100px;.wrapper{display:flex;flex-direction:column;align-items:center;}.help{padding-bottom:150px;}.numericlist{display:grid;grid-template-columns:270px 270px;grid-gap:30px;list-style:none;margin-top:24px;li{position:relative;padding-left:52px;font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:",";svg{position:absolute;top:0;left:0;}}}"],f.b.blue3,f.a.grey2),T=p.b.div.withConfig({displayName:"trademark-name-search__Boxes",componentId:"i5u5zr-2"})(["display:flex;flex-direction:column;align-items:stretch;padding-top:72px;@media (min-width:769px){flex-direction:row;}.box{width:100%;box-shadow:",";padding:40px 48px;.icon{display:flex;justify-content:center;align-items:center;height:140px;width:140px;margin:0 auto 60px;.gatsby-image-wrapper{height:100%;width:100%;img{object-fit:contain !important;}}}h4{padding-bottom:16px;}p{font-size:16px;line-height:24px;color:",";}}.circle{align-self:center;height:30px;width:100%;max-width:30px;position:relative;& > span{display:flex;justify-content:center;align-items:center;height:96px;width:96px;background-color:",";box-shadow:inset ",";box-shadow:inset 0 0 32px 0 rgba(236,236,236,0.4);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(90deg);@media (min-width:769px){transform:translate(-50%,-50%) rotate(0);}}}"],g.a.white1,f.a.grey1,f.a.white,g.a.white1),P=p.b.div.withConfig({displayName:"trademark-name-search__FAQ",componentId:"i5u5zr-3"})(["padding-top:75px;.wrapper{display:flex;flex-direction:column;align-items:center;}"]),D={items:[{question:"How broad is my trademark protection?",answer:"In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae."},{question:"Can I cancel my order?",answer:"The trademark will be filed within 3 business days upon receiving the desired trademark and performing a search. If it's determined after the search that the name has a low likelihood for approval, you can request a refund before the application is filed."},{question:"How long will it take for my trademark to be filed?",answer:"Trademark approval times can vary based on demand but generally fall in the window of 3-4 months. Despite the delayed approval time, you will be able to monitor the status of the trademark online as it's going through the approval process."},{question:"What level of support can I expect through this process?",answer:"Once you have submitted your business name or logo, an attorney will conduct the initial search and discuss the results via email or phone. The attorney will then prepare the filing application and submit to the United States Patent and Trademark Office. You will be able to track the approval status and contact us with any questions you may have while awaiting for the approval."}]},S=p.b.div.withConfig({displayName:"trademark-name-search__CTA",componentId:"i5u5zr-4"})(["padding-top:75px;"]),V=i.a.createElement(_.a,{headline:"Register a Trademark",price:"199"});t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),i.a.createElement(m.a,{imageName:"mrs-bulb-trademark",imageAlt:"Mr Bulb holding a certificate and tossing an orginal and a trademark sign"},i.a.createElement("h1",null,"Register a Trademark"),i.a.createElement("p",null,"Only $199 + Federal fee"),i.a.createElement(l.a,null,i.a.createElement(c.a,{to:"#",theme:"primary56",width:"200px",arrow:!0},"Get started"))),i.a.createElement(z,null,i.a.createElement(u.a,{image:"shieldo",paddingTop:"60",imageAlt:"a shield icon with a TM sign "},i.a.createElement(j.a,{size:"3",bottomMargin:"24"},"Protect your business name with a trademark"),i.a.createElement(q.a,{big:!0,bottomMargin:"24"},"Protecting your trademark can really pay dividends. Not only is it a valuable property asset, but it’s also your brand, your reputation. The reputation you have established is associated with these different brand elements - your name, logo, and tagline - and the reason why people buy from you."),i.a.createElement(d.a,{className:"purplebox",theme:"icon",Icon:E,color:f.a.orange3,curve:!0,curveColor:f.a.yellow1},i.a.createElement("h4",null,"Enterpreneur 360 (2019)"),i.a.createElement("p",null,"It’s important to take steps to protect these company assets. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing gets accepted by the government office, and provide sound legal advice throughout the entire process.")))),i.a.createElement(A,null,i.a.createElement(x.a,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(k.a,{className:"help",headlineWidth:"450",object:V},i.a.createElement("h2",null,"Help with trademark registration"),i.a.createElement("h4",null,"What’s included in the package?"),i.a.createElement("ul",{className:"numericlist"},i.a.createElement("li",null,i.a.createElement(O.a,null),"A registered trademark with the USPTO"),i.a.createElement("li",null,i.a.createElement(O.a,null),"A thorough search of existing trademarks"),i.a.createElement("li",null,i.a.createElement(O.a,null),"Legal counsel from an experienced trademark attorney"),i.a.createElement("li",null,i.a.createElement(O.a,null),"Handling all correspondence with the USPTO until the name is approved."))),i.a.createElement(s.a,{headline:"Trademark Searches & Registration: How it works?",headlineWidth:"770"}),i.a.createElement(T,null,i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"icon"},i.a.createElement(W.a,{filename:"needs",imageAlt:"an comic speech bubble icon"})),i.a.createElement("h4",null,"Tell us what you need"),i.a.createElement("p",null,"Tell us what you need. A trademark attorney will follow up with you to get a better understanding of your needs and provide guidance on how the process works.")),i.a.createElement("div",{className:"circle"},i.a.createElement("span",null,i.a.createElement(N.a,null))),i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"icon"},i.a.createElement(W.a,{filename:"trademark",imageAlt:"a papersheet with a trademark icon"})),i.a.createElement("h4",null,"We will file your trademark wih the Patent and Trademark office"),i.a.createElement("p",null,"The attorney will file the trademark with the US Patent and Trademark office and deliver the approved trademark documentation.")),i.a.createElement("div",{className:"circle"},i.a.createElement("span",null,i.a.createElement(N.a,null))),i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"icon"},i.a.createElement(W.a,{filename:"work",imageAlt:"a papersheet icon with a magnifire"})),i.a.createElement("h4",null,"We get to work"),i.a.createElement("p",null,"The trademark attorney will conduct a trademark search to ensure the availability, then provide the search results along with a plan of action.")))))),i.a.createElement(C.a,null),i.a.createElement(P,null,i.a.createElement(x.a,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(s.a,{headline:"Common questions about Registering a Trademark"}),i.a.createElement(I.default,{faq:D})))),i.a.createElement(S,null,i.a.createElement(x.a,null,i.a.createElement(s.a,{headline:"Protect your name, logo, or phrase with a U.S trademark registration.",headlineWidth:"770",linkText:"Order now",linkUrl:"#"}))),i.a.createElement(h.a,null))}},xVvc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),o=n("vOnD"),l=n("E2cJ"),c=n("ZMKu"),d=n("vvhN"),s=n("xjTF"),p=n("eH7y"),m=n("AZup"),u=o.b.div.withConfig({displayName:"accordion__Wrapper",componentId:"sc-1cq2zsm-0"})(["display:flex;width:100%;position:relative;margin-top:80px;@media (min-width:769px){width:auto;padding:25px 29px 0;}"]),h=o.b.div.withConfig({displayName:"accordion__Curve",componentId:"sc-1cq2zsm-1"})(["height:25px;width:25px;position:absolute;top:-16px;left:-13px;@media (min-width:769px){top:0;left:0;}"]),f=o.b.div.withConfig({displayName:"accordion__TabsWrapper",componentId:"sc-1cq2zsm-2"})(["display:flex;flex-direction:column;width:100%;max-width:770px;"]),g=o.b.div.withConfig({displayName:"accordion__TabBox",componentId:"sc-1cq2zsm-3"})(["box-shadow:0 24px 32px 0 rgba(236,236,236,0.5);margin-bottom:8px;.accordion-panel{overflow:hidden;}"]),x=o.b.div.withConfig({displayName:"accordion__PanelWrapper",componentId:"sc-1cq2zsm-4"})(["display:flex;flex-direction:column;background:#fff;margin-bottom:7px;padding:15px;z-index:1;@media (min-width:769px){padding:24px 40px 40px 80px;}h3{margin-bottom:48px;}p,li{color:",";font-family:Avenir,sans-serif;max-width:650px;text-align:left;}p{font-size:16px;line-height:24px;a{color:",";font-size:inherit;line-height:inherit;text-decoration:none;}}li{font-size:14px;line-height:19px;}ul{padding-left:16px;li{padding-top:16px;}}"],d.a.grey1,d.a.orange1),b=o.b.button.withConfig({displayName:"accordion__Button",componentId:"sc-1cq2zsm-5"})(["height:80px;width:100%;line-height:80px;color:#4e4e4e;background:#fff;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;border:none;&.active{border-radius:5px 5px 0 0;font-weight:600;svg{transform:rotate(0deg);}}"]),v=o.b.div.withConfig({displayName:"accordion__Content",componentId:"sc-1cq2zsm-6"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding-right:40px;span{color:#4e4e4e;font-family:Avenir;font-size:16px;}"]),y=o.b.div.withConfig({displayName:"accordion__Icon",componentId:"sc-1cq2zsm-7"})(["display:flex;align-items:center;justify-content:center;height:80px;width:80px;opacity:0.75;svg{transform:rotate(180deg);transition:transform 0.3s ease;}"]),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},E=function(e){var t=e.children,n=Object(l.d)(),a=n.isActive,r=n.onClick;return i.a.createElement(b,{className:w("accordion-tab",a&&"active"),onClick:r},t)},k={hidden:{height:0},visible:{height:"auto"}},I=function(e){var t=e.children,n=Object(l.c)();return i.a.createElement(c.a.div,{className:"accordion-panel",animate:n?"visible":"hidden",transition:{ease:"easeOut",duration:.3},variants:k},t)};t.default=function(e){var t=e.faq;return i.a.createElement(m.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return i.a.createElement(u,{className:n?"slideUp enter":"slideUp"},i.a.createElement(h,null,i.a.createElement(p.a,null)),i.a.createElement(l.b,null,i.a.createElement(f,null,t.items.map((function(e){return i.a.createElement(g,null,i.a.createElement(E,null,i.a.createElement(y,null,i.a.createElement(s.a,null)),i.a.createElement(v,null,i.a.createElement("span",null,e.question))),i.a.createElement(I,null,i.a.createElement(x,null,"string"==typeof e.answer?i.a.createElement("p",null,e.answer):null,"object"==typeof e.answer?i.a.createElement("p",null,e.answer.map((function(e,t){return t%2?i.a.createElement(r.Link,{to:e.url}," "+e.text+" "):e.text}))):null,e.list&&i.a.createElement("ul",null,e.list.map((function(e){return i.a.createElement("li",null,e)}))))))})))))}))}},yEnY:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("defs",null,a.createElement("path",{d:"M10.328 15.84a.784.784 0 00-1.1 0 .763.763 0 000 1.089l3.889 3.846c.303.3.796.3 1.1 0l8.555-8.462a.763.763 0 000-1.088.784.784 0 00-1.1 0l-8.005 7.918-3.34-3.302z",id:"circle-status-check-blue_inline_svg__a"})),o=a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("circle",{fill:"#5089FD",cx:16,cy:16,r:16}),a.createElement("use",{stroke:"#FFF",fill:"#FFF",fillRule:"nonzero",xlinkHref:"#circle-status-check-blue_inline_svg__a"}));t.a=function(e){return a.createElement("svg",i({width:32,height:32},e),r,o)}}}]);
//# sourceMappingURL=component---src-pages-manage-your-company-trademark-name-search-js-30f626a7568638d5434a.js.map