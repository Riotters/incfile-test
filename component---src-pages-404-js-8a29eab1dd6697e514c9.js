(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"+EVf":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),l=n("bfge"),o=n("DNaL"),c=n("+e4l"),d=n("dBvy"),p=n("AZup"),s=r.b.div.withConfig({displayName:"top__Wrapper",componentId:"ofxtto-0"})(["display:flex;align-items:center;position:relative;min-height:100vh;max-height:777px;"]),u=r.b.div.withConfig({displayName:"top__Oval",componentId:"ofxtto-1"})(['width:90%;max-height:777px;max-width:350px;position:absolute;top:0;right:0;z-index:-1;@media (min-width:992px){width:50%;max-width:850px;}&::after{content:"";display:block;padding-bottom:100%;}& > svg{position:absolute;right:0;bottom:0;defs{radialGradient{stop{&:nth-child(1){stop-color:',";}&:nth-child(2){stop-color:",";}}}}path{transform:matrix(1,0,0,-1,-115,777);}}"],(function(e){return function(e){switch(e){case"blue":return l.a.blue1;case"orange":return l.a.orange1;case"purple":return l.a.purple1;case"yellow":return l.a.yellow1;case"green":return l.a.green1;case"sun":return"#ffb059";default:return""}}(e.ovalColor)}),(function(e){return function(e){switch(e){case"blue":return l.a.babyblue2;case"orange":return l.a.orange2;case"purple":return l.a.purple2;case"green":return l.a.green2;case"yellow":return l.a.yellow2;case"sun":return"#ffe3c5";default:return""}}(e.ovalColor)})),m=r.b.div.withConfig({displayName:"top__Content",componentId:"ofxtto-2"})(["display:flex;flex-wrap:wrap;"]),h=r.b.div.withConfig({displayName:"top__TextContainer",componentId:"ofxtto-3"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding-top:150px;padding-bottom:120px;@media (min-width:992px){width:50%;align-items:flex-start;}h1{width:100%;text-align:center;padding-bottom:40px;@media (min-width:992px){text-align:left;padding-bottom:20px;}@media (min-width:1200px){max-width:","px;}}p{margin-bottom:33px;text-align:center;@media (min-width:1200px){text-align:left;max-width:","px;}}"],(function(e){return e.headlineWidth?e.headlineWidth:"480"}),(function(e){return e.headlineWidth?e.headlineWidth:"480"})),f=r.b.div.withConfig({displayName:"top__ImageContainer",componentId:"ofxtto-4"})(["display:none;width:55%;max-width:950px;position:absolute;top:50%;right:55%;transform:translate(100%,-50%);@media (min-width:992px){display:flex;}.gatsby-image-wrapper{width:100%;img{object-fit:contain !important;}}"]),g=function(e){var t=e.children,n=e.imageName,a=e.imageAlt,r=e.headlineWidth,l=e.ovalColor;return i.a.createElement(s,null,i.a.createElement(p.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement(u,{className:t?"scaleUp enter":"scaleUp",ovalColor:l},i.a.createElement(d.a,null))})),i.a.createElement(f,null,i.a.createElement(o.a,{filename:n,alt:a})),i.a.createElement(c.a,null,i.a.createElement(m,null,i.a.createElement(p.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return i.a.createElement(h,{className:n?"slideRight enter":"slideRight",headlineWidth:r},t)})))))};t.a=g,g.defaultProps={OvalSVGFile:d.a}},"+e4l":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"container__Wrapper",componentId:"sc-2o7k8r-0"})(["position:relative;z-index:1;width:100%;padding-left:15px;padding-right:15px;margin:0 auto;@media (min-width:1230px){max-width:1200px;}"]);t.a=function(e){var t=e.children;return i.a.createElement(r,null,t)}},AZup:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),l=n.n(r),o=n("aqT/"),c=n.n(o),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.state.active,t=this.props,n=(t.once,t.children),i=Object(a.a)(t,["once","children"]);return l.a.createElement(c.a,Object.assign({active:e},i),(function(e){var t=e.isVisible;return n({isVisible:t})}))},t}(r.Component);d.defaultProps={once:!1},t.a=d},DNaL:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),l=n("9eSz"),o=n.n(l);t.a=function(e){return i.a.createElement(r.StaticQuery,{query:"1938523414",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a="";return null!==n.node.childImageSharp&&(a=n.node.childImageSharp.fluid),a?i.a.createElement(o.a,{alt:e.alt,fluid:a}):null}})}},dBvy:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("defs",null,a.createElement("radialGradient",{cx:"0%",cy:"100%",fx:"0%",fy:"100%",r:"110.957%",gradientTransform:"scale(.94296 1) rotate(-44.136 0 1)",id:"oval_inline_svg__a"},a.createElement("stop",{stopColor:"#FFB8DA",offset:"0%"}),a.createElement("stop",{stopColor:"#FCEFEF",offset:"100%"}))),l=a.createElement("path",{d:"M948.2 0v777l-824-.007C149.072 343.7 508.48 0 948.2 0z",transform:"matrix(1 0 0 -1 -124 777)",fill:"url(#oval_inline_svg__a)",fillRule:"evenodd"});t.a=function(e){return a.createElement("svg",i({viewBox:"0 0 824 777"},e),r,l)}},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Bl7J"),l=n("vrFN"),o=n("+EVf"),c=n("ZXdF");t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"404: Not found",description:"not found"}),i.a.createElement(o.a,{imageName:"mr-bulb-404",alt:"Mr Bulb is showing 404 communique"},i.a.createElement("h1",null,"Whoops, that Page is Gone"),i.a.createElement("p",null,"The link you clicked may be broke or the page may have been removed."),i.a.createElement(c.a,{to:"/",theme:"primary56",width:"200px"},"Go to the home page")))}}}]);
//# sourceMappingURL=component---src-pages-404-js-8a29eab1dd6697e514c9.js.map