(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[1],{20:function(e,t,a){},34:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),c=a.n(l),r=(a(20),a(22)),i=a(23),s=a(32),m=a(24),u=a(33),d=a(1),p=a(25),h=a(9);a(39);function b(e){var t=Object(n.useState)("0"),a=Object(h.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(""),i=Object(h.a)(r,2),s=i[0],m=i[1],u=function(t){e.history.push("/".concat(t))};Object(n.useEffect)((function(){m(e.history.location.pathname),window.scrollTo(0,0)}),[e.history.location.pathname]);var d=function(e){e.target.style.color="#6c6c6c"},p=function(t){"white"===e.color?t.target.style.color="black":t.target.style.color="white"};return o.a.createElement("nav",{className:"navbar fixed-top navbar-expand-md p-3 ",id:"mynav",style:{backgroundColor:"black"===e.color?"":"white",position:"white"===e.color?"":"absolute",overflow:"hidden"}},o.a.createElement("div",{className:"navbar-brand",style:{cursor:"pointer"},onClick:function(t){return e.history.push("/")}},o.a.createElement("img",{alt:"logo",src:"".concat("","/img/apex_").concat("white"===e.color?"black":"white",".png"),style:{width:"80px"}})),o.a.createElement("button",{class:"navbar-toggler collapsed",type:"button","data-toggle":"collapse",onClick:function(){c("0"===l?"100%":"0")},"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",style:{zIndex:"1000"}},o.a.createElement("div",{class:"close-icon"},o.a.createElement("i",{class:"fas fa-times"})),o.a.createElement("div",{className:"navbar-toggler-icon",style:{color:"white"===e.color?"":"white"}},o.a.createElement("i",{class:"fas fa-bars"}))),o.a.createElement("div",{class:"collapse navbar-collapse flex-row-reverse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav small-title"},o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/AboutUS"===s&&"selected"),onClick:function(e){return u("AboutUS")},onMouseOver:p,onMouseOut:d},"ABOUT US")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/CaseStudy"===s&&"selected"),onClick:function(e){return u("CaseStudy")},onMouseOver:p,onMouseOut:d},"WORK")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/Gallery"===s&&"selected"),onClick:function(e){return u("Gallery")},onMouseOver:p,onMouseOut:d},"GALLERY")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{className:"nav-link ".concat("/MediaRelation"===s&&"selected"),"data-toggle":"collapse","data-target":"#navbarSupportedContent",onClick:function(e){return u("MediaRelation")},onMouseOver:p,onMouseOut:d},"MEDIA RELATIONS")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{className:"nav-link ".concat("/ContactUs"===s&&"selected"),"data-toggle":"collapse","data-target":"#navbarSupportedContent",onClick:function(e){return u("ContactUs")},onMouseOver:p,onMouseOut:d},"CONTACT US")))),o.a.createElement("div",{className:"overlay",style:{width:l},onClick:function(){return c("0")},"data-toggle":"collapse","data-target":"#navbarSupportedContent"}))}var g=Object(d.g)((function(e){var t=Object(n.useState)(window.innerWidth),a=Object(h.a)(t,2),l=a[0],c=a[1],r=function(){c(window.innerWidth)};return Object(n.useEffect)((function(){return r(),window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[r,l]),o.a.createElement("main",{className:"main-canvas",style:{position:"/"===e.history.location.pathname?"absolute":""}},o.a.createElement("section",null,o.a.createElement(b,{history:e.history,color:"/"===e.history.location.pathname?"black":"white"})),"/"===e.history.location.pathname||l<767?o.a.createElement("section",{style:{position:"/"===e.history.location.pathname?"absolute":"",width:"100%",marginTop:"/"===e.history.location.pathname?"0px":"60px",minHeight:"100vh !important",overflow:"hidden !important"}},e.children,"/"!==e.history.location.pathname&&o.a.createElement("footer",{className:"trocchi text-weight-bold text-center p-4  text-uppercase small-title",style:{width:"100%",bottom:0}},"\xa92021 APEX Communications, INC. All Rights Reserved.")):o.a.createElement("section",null,o.a.createElement("section",{style:{minHeight:"90vh",marginTop:"60px"}},o.a.createElement("section",{className:"container-fluid content-padding"},e.children),o.a.createElement("section",{class:"icon-bar"},o.a.createElement("a",{onClick:function(){return window.open("https://www.instagram.com/apexcomm/","_blank")},class:"instagram"},o.a.createElement("i",{class:"fab fa-instagram"})),o.a.createElement("a",{onClick:function(){return window.open("https://www.weibo.com/u/5888176990","_blank")},class:"weibo"},o.a.createElement("i",{class:"fab fa-weibo"})),o.a.createElement("a",{onClick:function(){return window.open("https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg","_blank")},class:"youtube"},o.a.createElement("i",{class:"fab fa-youtube"}))," ",o.a.createElement("a",{onClick:function(){return window.open("https://vimeo.com/apexcomm","_blank")},class:"vimeo"},o.a.createElement("i",{class:"fab fa-vimeo-v"}))),o.a.createElement("section",{class:"gmail-bar avenir text-uppercase",style:{writingMode:"vertical-rl",textOrientation:"mixed",cursor:"pointer"},onClick:function(){window.location.href="mailto:hello@apexcomm.us"}},"hello@apexcomm.us")),o.a.createElement("footer",{className:"trocchi text-weight-bold text-center p-2 mt-2 text-uppercase small-title",style:Object(p.a)({position:"relative",bottom:"0 !important",marginTop:"120px"},"bottom","25px")},"\xa92021 APEX Communications, INC. All Rights Reserved.")))})),v=o.a.lazy((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,90))})),f=o.a.lazy((function(){return a.e(5).then(a.bind(null,96))})),E=o.a.lazy((function(){return a.e(7).then(a.bind(null,99))})),w=o.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,98))})),y=o.a.lazy((function(){return a.e(9).then(a.bind(null,97))})),x=o.a.lazy((function(){return Promise.all([a.e(4),a.e(12)]).then(a.bind(null,100))})),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Promise.all([a.e(11).then(a.t.bind(null,91,7)),a.e(15).then(a.t.bind(null,92,7)),a.e(6).then(a.t.bind(null,93,7)),a.e(14).then(a.t.bind(null,94,7)),a.e(10).then(a.t.bind(null,95,7))])}},{key:"render",value:function(){return o.a.createElement(g,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",component:v}),o.a.createElement(d.b,{exact:!0,path:"/AboutUs",component:f}),o.a.createElement(d.b,{exact:!0,path:"/CaseStudy",component:E}),o.a.createElement(d.b,{exact:!0,path:"/Gallery",component:w}),o.a.createElement(d.b,{exact:!0,path:"/MediaRelation",component:y}),o.a.createElement(d.b,{exact:!0,path:"/ContactUs",component:x}),o.a.createElement(d.b,{exact:!0,path:"/nomatch",component:k}))))}}]),t}(n.Component);function k(e){return o.a.createElement("main",{style:O.container,className:"text-center"},o.a.createElement("img",{style:O.imageContainer,src:"".concat("","/img/404/error404-head.png"),alt:"error404"}),o.a.createElement("div",{className:"d-flex mt-3"},o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/4.png"),alt:"error404"}),o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/0.png"),alt:"error404"}),o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/4.png"),alt:"error404"})),o.a.createElement("img",{style:O.imageContainerText,src:"".concat("","/img/404/sorry.png"),alt:"error404",className:"mt-4"}),o.a.createElement("a",{className:"btn mr-bg-darkblue text-white mt-4",href:"/dashboard"},"\u8fd4\u56de"))}var O={container:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",margin:"5vh auto",width:"300px",overflowY:"auto"},imageContainer:{width:"300px",margin:"0 auto"},imageContainerSub:{width:"100px",margin:"0 auto",height:"10vh"},imageContainerText:{width:"300px",margin:"0 auto",height:"5vh"}},N=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(10),j=a(31),M=a(7),A=a(28),T=a(29),R=Object(M.createStore)(Object(M.combineReducers)({}),Object(T.composeWithDevTools)(Object(M.applyMiddleware)(A.a))),z=a(30);c.a.render(o.a.createElement(j.a,{store:R},o.a.createElement(S.a,{basename:""},o.a.createElement(z.a,null,o.a.createElement(N,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,2,3]]]);
//# sourceMappingURL=main.a2612108.chunk.js.map