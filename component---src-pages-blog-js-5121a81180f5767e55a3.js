(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{Z40u:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("vOnD"),r=a("jplB"),o=a("bfge"),c=a("Y+kd"),s=i.b.div.withConfig({displayName:"blog-article-image__Wrapper",componentId:"sc-1cudzkz-0"})(["display:flex;width:100%;overflow:hidden;position:relative;padding:24px;&::before{content:'';display:block;padding-top:65%;}.gatsby-image-wrapper{height:100%;width:100%;position:absolute !important;top:50%;left:50%;transform:translate(-50%,-50%);}"]),m=(i.b.div.withConfig({displayName:"blog-article-image__Counter",componentId:"sc-1cudzkz-1"})(["display:flex;"]),function(e){var t=e.className,a=e.image,n=e.children;return l.a.createElement(s,{className:t},l.a.createElement(c.a,{filename:a}),n)}),p=i.b.span.withConfig({displayName:"blog-article-num__Wrapper",componentId:"sc-1j41wl1-0"})(["display:flex;justify-content:center;align-items:center;height:40px;width:40px;background-color:",";border-radius:5px 0 0 5px;font-family:Avenir,sans-serif;font-size:16px;line-height:1;color:",";"],o.a.white,o.a.grey2),d=function(e){var t=e.className,a=e.likes;return l.a.createElement(p,{className:t},a)};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=n.createElement("path",{fill:"#FD8550",d:"M27.54 14.556a4.83 4.83 0 00-3.594-1.564 4.514 4.514 0 00-2.822.974 5.763 5.763 0 00-1.142 1.191 5.78 5.78 0 00-1.14-1.191 4.519 4.519 0 00-2.823-.974 4.83 4.83 0 00-3.594 1.564C11.506 15.552 11 16.914 11 18.39c0 1.52.566 2.91 1.782 4.377 1.087 1.312 2.65 2.644 4.46 4.187.618.527 1.319 1.124 2.046 1.76a1.054 1.054 0 001.389 0c.727-.636 1.428-1.234 2.046-1.76 1.81-1.543 3.373-2.875 4.46-4.187 1.216-1.466 1.782-2.857 1.782-4.377 0-1.476-.506-2.838-1.425-3.834z"});var f=function(e){return n.createElement("svg",g({width:40,height:41},e),u)},h=i.b.button.withConfig({displayName:"blog-article-heart__Wrapper",componentId:"sc-7enuwf-0"})(["display:flex;justify-content:center;align-items:center;height:40px;width:40px;background-color:",";border-radius:0 5px 5px 0;font-family:Avenir,sans-serif;font-size:16px;line-height:1;color:",";border:0;cursor:pointer;svg{path{transition:fill .3s ease;}}&:hover{svg{path{fill:",";}}}"],o.a.white,o.a.grey2,o.a.blue1),x=function(e){var t=e.className,a=e.onClick;return l.a.createElement(h,{className:t,onClick:a},l.a.createElement(f,null))},b=i.b.div.withConfig({displayName:"hearts-counter__Wrapper",componentId:"sc-1hpmgkq-0"})(["display:flex;justify-content:space-between;align-items:center;height:40px;width:81px;background-color:",";border-radius:5px;position:relative;z-index:1;"],o.a.grey4),y=function(e){var t=e.className,a=e.likes,i=Object(n.useState)(a),r=i[0],o=i[1];return l.a.createElement(b,{className:t},l.a.createElement(d,{likes:r}),l.a.createElement(x,{onClick:function(){o(parseInt(r)+1)}}))},E=a("jVWb"),w=i.b.div.withConfig({displayName:"blog-article-title__Wrapper",componentId:"sc-1acns0f-0"})(["display:flex;width:100%;padding-bottom:8px;"]),v=function(e){var t=e.className,a=e.content;return l.a.createElement(w,{className:t},l.a.createElement("h3",null,a))},N=i.b.div.withConfig({displayName:"blog-article-meta__Wrapper",componentId:"sc-1ixsz35-0"})(["display:flex;width:100%;padding-bottom:24px;p,a{font-size:16px;line-height:24px;}p{color:",";}a{text-decoration:none;transition:color .3s ease;&:hover{color:",";}}"],o.a.grey2,o.a.orange1),_=function(e){var t=e.className,a=e.date,n=e.author,i=e.from;return l.a.createElement(N,{className:t},l.a.createElement("p",null,a," by ",l.a.createElement("a",{href:"#"},n)," in ",l.a.createElement("a",{href:"#"},i)))},C=i.b.span.withConfig({displayName:"blog-article-text__Wrapper",componentId:"sc-13xeclw-0"})(["display:flex;min-height:120px;width:100%;p{font-size:16px;line-height:24px;color:",";}"],o.a.grey2),k=function(e){var t=e.className,a=e.content;return l.a.createElement(C,{className:t},l.a.createElement("p",null,a))},I=i.b.div.withConfig({displayName:"blog-article-texts__Wrapper",componentId:"zb3oue-0"})(["display:flex;flex-direction:column;padding:0 24px;"]),W=function(e){var t=e.className,a=e.content;return l.a.createElement(I,{className:t},l.a.createElement(v,{content:a[0].title?a[0].title:""}),l.a.createElement(_,{date:a[0].meta[0].date?a[0].meta[0].date:"",author:a[0].meta[0].author?a[0].meta[0].author:"",from:a[0].meta[0].from?a[0].meta[0].from:""}),l.a.createElement(k,{content:a[0].text?a[0].text:""}))},j=a("1u1j"),z=a("PNwU"),O=a("c2iV"),q=a("fm8S"),B=a("hlp7"),J=i.b.ul.withConfig({displayName:"blog-article-socials__Wrapper",componentId:"ubblns-0"})(["display:flex;justify-content:flex-end;align-items:center;list-style:none;span{&:not(:last-child){margin-right:8px;}}"]),M=i.b.li.withConfig({displayName:"blog-article-socials__Social",componentId:"ubblns-1"})(["height:32px;width:32px;a{display:block;height:100%;width:100%;}"]),S=function(e){var t=e.className;return l.a.createElement(J,{className:t},l.a.createElement(M,null,l.a.createElement("a",{href:"#"},l.a.createElement(z.a,null))),l.a.createElement(M,null,l.a.createElement("a",{href:"#"},l.a.createElement(O.a,null))),l.a.createElement(M,null,l.a.createElement("a",{href:"#"},l.a.createElement(q.a,null))),l.a.createElement(M,null,l.a.createElement("a",{href:"#"},l.a.createElement(B.a,null))))},A=i.b.div.withConfig({displayName:"blog-article-footer__Wrapper",componentId:"ap441b-0"})(["display:flex;flex-direction:column;justify-content:space-between;width:100%;padding:24px 24px 32px;@media (min-width:769px){flex-direction:row;}.more-button{margin-bottom:16px;@media (min-width:769px){margin-bottom:0;}}"]),D={text:"More",url:"/article"},L=function(e){var t=e.className;return l.a.createElement(A,{className:t},l.a.createElement(j.a,{className:"more-button",theme:"primary48",content:D,arrow:!0}),l.a.createElement(S,null))},F=i.b.div.withConfig({displayName:"blog-article-card__Wrapper",componentId:"xv6rcu-0"})(["height:100%;width:100%;.card{display:flex;flex-direction:column;justify-content:space-between;height:100%;}.tags{padding:16px 24px 8px;}"]);t.a=function(e){var t=e.className,a=e.content;return l.a.createElement(F,{className:t},l.a.createElement(r.a,{className:"card",overflow:!0},l.a.createElement("div",null,l.a.createElement(m,{image:a.image},l.a.createElement(y,{likes:a.likes})),l.a.createElement(E.a,{className:"tags",content:a.tags}),l.a.createElement(W,{content:a.texts})),l.a.createElement(L,null)))}},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("Bl7J"),r=a("vrFN"),o=a("vOnD"),c=a("bfge"),s=a("93Zh"),m=a("5T/x"),p=a("Z40u"),d=a("Xx49"),g=a("gb9J"),u=a("AuJ4"),f=a("gqKf"),h=o.b.section.withConfig({displayName:"blog__Wrapper",componentId:"sc-15xlt4x-0"})(["padding:72px 0;background-color:",";"],c.a.grey5),x=o.b.div.withConfig({displayName:"blog__Content",componentId:"sc-15xlt4x-1"})(["display:grid;grid-template-columns:100%;grid-gap:30px;@media(min-width:769px){grid-template-columns:2fr 1fr;}"]),b=o.b.div.withConfig({displayName:"blog__Articles",componentId:"sc-15xlt4x-2"})(["display:grid;grid-template-columns:100%;grid-gap:30px;@media(min-width:769px){grid-template-columns:1fr 1fr;}"]),y=o.b.div.withConfig({displayName:"blog__Sidebar",componentId:"sc-15xlt4x-3"})(["width:100%;"]),E=o.b.div.withConfig({displayName:"blog__Sticky",componentId:"sc-15xlt4x-4"})(["position:sticky;top:100px;& > div{&:not(:last-child){margin-bottom:30px;}}"]);t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),l.a.createElement(s.a,{headline:"Where Business Begins. Your Resource to Grow.",text:"The Incfile Blog",imageName:"business-checklist"}),l.a.createElement(h,null,l.a.createElement(m.a,null,l.a.createElement(x,null,l.a.createElement(b,null,f.a.map((function(e){return l.a.createElement(p.a,{content:e})}))),l.a.createElement(y,null,l.a.createElement(E,null,l.a.createElement(g.a,null),l.a.createElement(d.a,null),l.a.createElement(u.a,{content:f.b})))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5121a81180f5767e55a3.js.map