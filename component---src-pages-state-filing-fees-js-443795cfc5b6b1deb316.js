(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{f2yH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("vrFN"),r=n("bcDI"),l=n("FQHe"),s=n("28u8"),c=n("vGqF"),p=n("Bl7J"),d=n("t8Zj"),m=n("kD0k"),u=n.n(m),f=(n("ls82"),n("/S4K")),h=n("Wbzz"),g=n("5T/x"),y=n("vOnD"),b=n("eqkC");var w=n("TvSw"),x=y.b.section.withConfig({displayName:"fees-table__Wrapper",componentId:"fozw7r-0"})([""]),C=y.b.div.withConfig({displayName:"fees-table__FeesTableWrapper",componentId:"fozw7r-1"})(["display:grid;grid-template-columns:1fr;row-gap:8px;margin-bottom:48px;overflow-y:scroll;"]),v=y.b.div.withConfig({displayName:"fees-table__TableRow",componentId:"fozw7r-2"})(["display:grid;grid-template-columns:auto 160px 160px 160px 160px;align-items:center;box-shadow:",";background-color:white;font-family:'Avenir';font-size:16px;line-height 24px;border-radius:5px;&:first-child{font-family:'Avenir';font-weight:700;}"],b.a.white1),E=y.b.div.withConfig({displayName:"fees-table__TableCell",componentId:"fozw7r-3"})(["display:flex;align-items:center;justify-content:center;padding:28px;border-right:1px solid #f4f4f4;&:first-child{justify-content:flex-start;}&:last-child{border-right:none;}"]),k=y.b.span.withConfig({displayName:"fees-table__Price",componentId:"fozw7r-4"})(["padding:8px 26px;border-radius:20px;background-color:#f2f8f3;"]),L=(y.b.button.withConfig({displayName:"fees-table__Button",componentId:"fozw7r-5"})(["width:32px;height:32px;margin-right:24px;border:0;background:none;"]),function(){var e=o.a.useState([]),t=e[0],n=e[1],a=o.a.useState(!1),i=a[0],r=a[1],l=o.a.useState(!1),s=l[0],c=l[1],p=o.a.useState(!1),m=p[0],y=p[1],b=o.a.useState(!1),L=b[0],S=b[1],_=function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.incfile.com/api/v1/getStatePrices").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){var a=Object(d.a)(t).sort((function(t,n){return"LLC"===e?i?t.LLC-n.LLC:n.LLC-t.LLC:"CCorp"===e?s?t.CCorporation-n.CCorporation:n.CCorporation-t.CCorporation:"SCorp"===e?m?t.SCorporation-n.SCorporation:n.SCorporation-t.SCorporation:"non"===e?L?t.nonprofit-n.nonprofit:n.nonprofit-t.nonprofit:void 0}));n(a)};return o.a.useEffect((function(){_().then((function(e){n(e)}))}),[]),o.a.createElement(x,null,o.a.createElement(g.a,null,o.a.createElement(C,null,o.a.createElement(v,null,o.a.createElement(E,null,"State"),o.a.createElement(E,{style:{cursor:"pointer"},onClick:function(){r(!i),N("LLC")}},"LLC"),o.a.createElement(E,{style:{cursor:"pointer"},onClick:function(){c(!s),N("CCorp")}},"C-Corp"),o.a.createElement(E,{style:{cursor:"pointer"},onClick:function(){y(!m),N("SCorp")}},"S-Corp"),o.a.createElement(E,{style:{cursor:"pointer"},onClick:function(){S(!L),N("non")}},"Non-Profit")),t.length&&t.map((function(e,t){return o.a.createElement(v,{key:t},o.a.createElement(E,null,e.state),o.a.createElement(E,null,o.a.createElement(k,null,"$",e.LLC)),o.a.createElement(E,null,o.a.createElement(k,null,"$",e.CCorporation)),o.a.createElement(E,null,o.a.createElement(k,null,"$",e.SCorporation)),o.a.createElement(E,null,o.a.createElement(k,null,"$",e.nonprofit)))}))),o.a.createElement(w.a,{mixed:!0,big:!0},"Compare state filing times side by side using our ",o.a.createElement(h.Link,{to:"/compare-state-filing-times/"},"comparison tool"),".")))}),S=n("nHYi"),_={included:{header:"Included in all of our packages",benefits:[{label:"Verify Company Name Availability",header:"Verify Company Name Availability",text:"We conduct a thorough name search with the state corporation database and will work with you as long as needed to find an available company name."},{label:"Registered Agent Service<span style={{color: "+n("bfge").a.orange1+"}}>(1st Year FREE)</span>",header:"Registered Agent Service (1st Year FREE)",text:"Every new incorporation order is eligible for 1 full year of FREE Registered Agent service. As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is an invaluable service that will eliminate junk mail and limit personal information available to third parties."},{label:"Free Business Tax Consultation",header:"Free Business Tax Consultation",text:"Every new incorporation order is eligible for 1 full year of FREE Registered Agent service. As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is an invaluable service that will eliminate junk mail and limit personal information available to third parties."},{label:"Preparation & Filing of Articles",header:"Preparation & Filing of Articles",text:"We will review the information, prepare your incorporation documents, and send them to the state of formation."},{label:"Lifetime Company Alerts",header:"Lifetime Company Alerts",text:"Never miss an important filing date again. Lifetime Company Alerts is designed to send email notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc."},{label:"Lifetime Customer Support",header:"Lifetime Customer Support",text:"We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document."},{label:"Next Business Day Processing",header:"Next Business Day Processing",text:"We strive to ensure that every order received is prepared and forwarded to the state within 1 business day."},{label:"Online Order Status Tracking",header:"Online Order Status Tracking",text:"This feature allows you to review the status of your order in real time."},{label:"Online Access to Incorporation Documents",header:"Online Access to Incorporation Documents",text:"You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time."}]}},N=n("Y+kd"),A=n("WQl+"),F=n("yNbE"),I=n("cQKk"),R=n("1u1j"),T=y.b.div.withConfig({displayName:"rocket__Wrapper",componentId:"sc-1ncsvyn-0"})(["padding-top:75px;position:relative;min-height:626px;margin-bottom:50px;margin-top:104px;@media (min-width:769px){padding-top:125px;}"]),W=y.b.div.withConfig({displayName:"rocket__RocketWrapper",componentId:"sc-1ncsvyn-1"})(["position absolute;left:-15%;top:calc(50% - 313px);width:720px;height:626px;display:none;@media (min-width:1130px){display:block;}"]),z=y.b.div.withConfig({displayName:"rocket__Oval",componentId:"sc-1ncsvyn-2"})(['height:100%;width:100%;max-height:460px;max-width:370px;position:absolute;right:0;bottom:0;display:none;@media (min-width:720px){display:block;}&::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:rgb(255,255,255);background:linear-gradient( 0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20% );}']),O=y.b.div.withConfig({displayName:"rocket__Curve",componentId:"sc-1ncsvyn-3"})(["height:97px;width:81px;position:absolute;right:0;bottom:150px;@media (max-width:1200px){display:none;}"]),B=y.b.div.withConfig({displayName:"rocket__Moon",componentId:"sc-1ncsvyn-4"})(["display:none;height:130px;width:81px;position:absolute;top:190px;right:190px;@media (min-width:769px){display:block;}"]),j=y.b.div.withConfig({displayName:"rocket__Content",componentId:"sc-1ncsvyn-5"})(["margin:0 auto;width:100%;max-width:600px;@media (min-width:1130px){margin:0 0 0px auto;}"]),D=function(){return o.a.createElement(T,null,o.a.createElement(z,null,o.a.createElement(A.a,null)),o.a.createElement(O,null,o.a.createElement(F.a,null)),o.a.createElement(B,null,o.a.createElement(N.a,{filename:"moon",alt:"moon"})),o.a.createElement(g.a,null,o.a.createElement(W,null,o.a.createElement(N.a,{filename:"rocket-2x",alt:"rocket lunch"})),o.a.createElement(j,null,o.a.createElement(I.a,{size:4,style:{fontFamily:"MarkPro, sans-serif",fontSize:"40px"}},"Launch",o.a.createElement("br",null),"your business with Incfile"),o.a.createElement(w.a,{big:!0,mixed:!0},"No Contracts. No Surprise.",o.a.createElement("br",null),"Only $0 + State Fee to Launch Your Business."),o.a.createElement(R.a,{theme:"primary48",arrow:!0,width:"239px",content:{url:"https://orders.incfile.com/form-order-now.php",text:"Launch your business!"}}))))};t.default=function(){return o.a.createElement(p.a,null,o.a.createElement(i.a,{title:"LLC Filing Fees By State | How Much Does an LLC Cost?",description:"Want to know the cost for filing an LLC or Corporation in any state? Easily research and compare fees state-by-state with this tool."}),o.a.createElement(r.a,{imageName:"state-filling-fees-main-image",imageAlt:"Mrs Bulb and with checklist",ovalColor:"sun",textWidth:"530"},o.a.createElement("h1",null,"Review State Filing Fees & LLC Costs"),o.a.createElement("p",null,"Filing costs for forming an LLC or corporation can vary from state to state. Use this filing fees tool to easily research and compare state fees before you start your business."),o.a.createElement(l.a,{topMargin:"0"},o.a.createElement(s.a,null),o.a.createElement(c.a,null))),o.a.createElement(L,null),o.a.createElement(S.a,{content:_.included}),o.a.createElement(D,null))}}}]);
//# sourceMappingURL=component---src-pages-state-filing-fees-js-443795cfc5b6b1deb316.js.map