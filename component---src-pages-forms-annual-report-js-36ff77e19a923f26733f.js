(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"+hIG":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),o=t("vOnD"),r=t("TvSw"),i=t("bfge"),s=o.b.div.withConfig({displayName:"company-name-info-box__Wrapper",componentId:"nirek0-0"})(["width:100%;"]),c=o.b.div.withConfig({displayName:"company-name-info-box__InfoBox",componentId:"nirek0-1"})(["width:100%;padding:5px 10px;border-radius:5px;background-color:",";color:white;font-size:16px;font-family:Avenir-Heavy;"],i.a.blue1);a.a=function(e){var a=e.companyName,t=e.designator;return l.a.createElement(s,null,l.a.createElement(r.a,{bottomMargin:16},"Please confirm that this is exactly how your company name is filed with the state."),l.a.createElement(c,null,a," ",t))}},"4yl7":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),o=t("vOnD"),r=t("bfge"),i=o.b.div.withConfig({displayName:"left-icon-block-colored__Wrapper",componentId:"yrovty-0"})(["background-color:",";"," padding:",";position:relative;h4{padding-bottom:",";}p{font-size:16px;line-height:24px;color:",";padding-bottom:0;}ul{list-style:none;li{font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:#63666E;padding-left:26px;position:relative;&::before{content:'';height:4px;width:4px;background-color:",";border-radius:50%;position:absolute;top:9px;left:6px;}&:not(:last-child){margin-bottom:12px;}}}svg{position:absolute;left:",";top:",";}"],(function(e){return e.color?e.color:""}),(function(e){return e.hasBorderRadius&&"border-radius:"+e.borderRadiusValue+";"}),(function(e){return e.Icon?e.paddingValue:"40px"}),(function(e){return e.Icon?"16px":"24px"}),r.a.grey1,(function(e){return e.dotsColor?e.dotsColor:""}),(function(e){return e.iconLeftPosition}),(function(e){return e.iconTopPosition})),s=function(e){var a=e.className,t=e.color,n=e.Icon,o=e.dotsColor,r=e.content,s=e.hasBorderRadius,c=e.borderRadiusValue,p=e.paddingValue,u=e.iconLeftPosition,d=e.iconTopPosition,m=e.style;return l.a.createElement(i,{style:m,className:a,color:t,Icon:n,dotsColor:o,iconLeftPosition:u,iconTopPosition:d,paddingValue:p,hasBorderRadius:s,borderRadiusValue:c},n&&l.a.createElement(n,null),r.header&&l.a.createElement("h4",null,r.header),r.text&&l.a.createElement("p",null,r.text),r.list&&l.a.createElement("ul",null,r.list.map((function(e){return l.a.createElement("li",null,e)}))))};s.defaultProps={hasBorderRadius:!0,borderRadiusValue:"5px 50px 50px 5px",paddingValue:"40px 40px 40px 112px",iconTopPosition:"inherit",iconLeftPosition:"44px"},a.a=s},"f+IA":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),o=t("Bl7J"),r=t("vrFN"),i=t("3WLz"),s=t("i2DR"),c=t("DcgH"),p=t("SZ/8"),u=t("PPDc"),d=t("jvXC"),m=t("cQKk"),f=t("gqTg"),E=t("1f+6"),b=t("UVl4"),g=t("9nJy"),h=t("pip3"),v=t("fQvE"),x=t("LvpO"),y=t("5Z3c"),C=t("7vEw"),S=t("rfx+"),R=t("Acje"),w=t("JaNh"),I=t("RPig"),T=t("S4F2"),P=t("4yl7"),A=t("n2nj"),L=t("bfge"),z=t("+hIG"),O=[{value:"LLC",label:"LLC"},{value:"Corporation",label:"Corporation"},{value:"NonProfit",label:"NonProfit"}],k=[{value:"Alaska",label:"Alaska",prefix:"AL",prices:[{startFee:233},{processingFee:32}]},{value:"Arizona",label:"Arizona"}],D=[{value:"Alaska",label:"Alaska",designators:["Corporation","Corp","Inc","Limited","CO.","Incorporated","CORP.","INC.","LTD.","CO","Company"]},{value:"Arizona",label:"Arizona",designators:["Company"]},{value:"Arkansas",label:"Arkansas",designators:["Corporation","LTD.","CO","Company"]}],F=[{id:"startFee",description:"Start Fee",price:23},{id:"processingFee",description:"Processing Fee",price:76}];a.default=function(){var e,a,t=Object(n.useState)(null),N=t[0],q=t[1],V=Object(n.useState)(null),j=V[0],B=V[1],_=Object(n.useState)(null),J=_[0],M=_[1],H=Object(n.useState)(null),W=H[0],Z=H[1],G=Object(n.useState)(null),Q=G[0],K=G[1];return l.a.createElement(o.a,null,l.a.createElement(r.a,{title:"Annual Report",description:"Annual Report"}),l.a.createElement(x.a,{formTitle:"Annual Report"},l.a.createElement(y.a,null,l.a.createElement(i.a,{icon:s.a,title:"Contact Information"},l.a.createElement(f.a,null,l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"First Name *",isRequired:!0})),l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"Last Name *",isRequired:!0})),l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"Email *",isRequired:!0})),l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"Phone"})))),l.a.createElement(i.a,{icon:c.a,title:"Company Information"},l.a.createElement(f.a,null,l.a.createElement(p.a,{span:6},l.a.createElement(P.a,{paddingValue:"24px 32px 24px 88px",iconLeftPosition:"32px",iconTopPosition:"calc(50% - 16px)",Icon:A.a,borderRadiusValue:"5px",color:L.a.yellow3,content:{text:"The state of formation is where the company was formed, while the state of service would only be applicable if you are conducting business in a different state. In most cases the state of formation and state of service will be the same."}})),l.a.createElement(p.a,{span:2},l.a.createElement(d.a,{label:"Entity Type *",options:O,placeholder:"Select Entity Type",onToggleSelect:B})),l.a.createElement(p.a,{span:2},l.a.createElement(d.a,{label:"State of Formation *",options:D,placeholder:"Select Entity Type",onToggleSelect:M})),l.a.createElement(p.a,{span:2},l.a.createElement(d.a,{label:"State of Service *",options:k,placeholder:"Select Entity Type",onToggleSelect:q})),N&&J&&j&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{span:4},l.a.createElement(u.a,{label:"Company Name *",isRequired:!0,onChange:function(e){return K(e.target.value)}})),l.a.createElement(p.a,{span:2},l.a.createElement(d.a,{label:"Designator *",options:(e=J.value,a=D.find((function(a){return a.value===e})),a.designators?a.designators:null),placeholder:"Select Designator",onToggleSelect:Z}))),Q&&W&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{span:6},l.a.createElement(z.a,{companyName:Q,designator:W.label})))),l.a.createElement(f.a,null,l.a.createElement(p.a,{span:6},l.a.createElement(m.a,{size:3,style:{fontSize:"16px",lineHeight:"19px",marginTop:"10px",marginBottom:0}},"Company Address")),l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"Street Address *",isRequired:!0})),l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"Address (Count) *",isRequired:!0}))),l.a.createElement(f.a,null,l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"City *",isRequired:!0})),l.a.createElement(p.a,{span:3},l.a.createElement(f.a,{columns:5,paddingTop:0,paddingLeft:0,paddingRight:0},l.a.createElement(p.a,{span:3},l.a.createElement(u.a,{label:"State *",isRequired:!0})),l.a.createElement(p.a,{span:2},l.a.createElement(u.a,{label:"ZIP Code *",isRequired:!0})))))),l.a.createElement(E.a,{title:"Safe & Secure",text:"Your information and data is safe and secure. Our servers are located in secure data centers and our website uses SSL modern encryption for all sensitive data. Our servers are also backed up hourly ensuring your data is never lost.",Icon:b.a})),l.a.createElement(C.a,null,l.a.createElement(S.a,null,l.a.createElement(R.a,{orderSum:99}),l.a.createElement(w.a,{barPercentage:50}),l.a.createElement(I.a,{list:F}),l.a.createElement(T.a,{Icon:g.a,text:"Trusted by over 250,000 business owners to maintain their state's business compliance obligations.",title:"Maintain business compliance"}),l.a.createElement(T.a,{Icon:h.a,text:"This is a fully deductible business expense.",title:"Tax savings benefit"}))),l.a.createElement(v.a,null)))}},n2nj:function(e,a,t){"use strict";var n=t("q1tI");function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("circle",{cx:15,cy:17,r:12,fill:"#FFF"}),n.createElement("path",{fill:"#1D1D1D",fillRule:"nonzero",d:"M15.75 1.5C23.62 1.5 30 7.88 30 15.75S23.62 30 15.75 30 1.5 23.62 1.5 15.75 7.88 1.5 15.75 1.5zm0 1.5C8.708 3 3 8.708 3 15.75S8.708 28.5 15.75 28.5 28.5 22.792 28.5 15.75 22.792 3 15.75 3zm0 3c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S6 21.135 6 15.75 10.365 6 15.75 6zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm0 3a5.25 5.25 0 110 10.5 5.25 5.25 0 110-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"}),n.createElement("path",{fill:"#1D1D1D",fillRule:"nonzero",d:"M28.06 4.5L16.28 16.28a.749.749 0 11-1.06-1.06L27 3.44V.75a.75.75 0 011.5 0V3h2.25a.75.75 0 010 1.5h-2.69z"}));a.a=function(e){return n.createElement("svg",l({width:32,height:32},e),o)}}}]);
//# sourceMappingURL=component---src-pages-forms-annual-report-js-36ff77e19a923f26733f.js.map