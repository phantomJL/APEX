(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[1],{14:function(e,t,a){},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),c=a.n(l),r=(a(14),a(22)),i=a(23),s=a(29),m=a(24),u=a(30),h=a(1),d=a(10);a(36);function p(e){var t=Object(n.useState)("0"),a=Object(d.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),s=i[0],m=i[1],u=function(t){c("0"),e.history.push("/".concat(t))};Object(n.useEffect)((function(){m(e.history.location.pathname)}),[e.history.location.pathname]);var h=function(e){e.target.style.color="#6c6c6c"},p=function(t){"white"===e.color?t.target.style.color="black":t.target.style.color="white"};return o.a.createElement("nav",{className:"navbar fixed-top navbar-expand-md p-3 ",id:"mynav",style:{backgroundColor:"black"===e.color?"":"white",position:"white"===e.color?"":"absolute",overflow:"hidden"}},o.a.createElement("div",{className:"navbar-brand",style:{cursor:"pointer"},onClick:function(t){return e.history.push("/")}},o.a.createElement("img",{alt:"logo",src:"".concat("","/img/apex_").concat("white"===e.color?"black":"white",".png"),style:{width:"80px"}})),o.a.createElement("button",{class:"navbar-toggler collapsed",type:"button","data-toggle":"collapse",onClick:function(){c("0"===l?"100%":"0")},"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",style:{zIndex:"1000"}},o.a.createElement("div",{class:"close-icon",style:{color:"black !important"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}))),o.a.createElement("div",{className:"navbar-toggler-icon",style:{color:"white"===e.color?"black":"white"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-list",viewBox:"0 0 16 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})))),o.a.createElement("div",{class:"collapse navbar-collapse flex-row-reverse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav small-title"},o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/AboutUS"===s?"selected":""),onClick:function(e){return u("AboutUS")},onMouseOver:p,onMouseOut:h},"WHO WE ARE")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/SelectWork"===s?"selected":""),onClick:function(e){return u("SelectWork")},onMouseOver:p,onMouseOut:h},"SELECT WORK")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{"data-toggle":"collapse","data-target":"#navbarSupportedContent",className:"nav-link ".concat("/Gallery"===s?"selected":""),onClick:function(e){return u("Gallery")},onMouseOver:p,onMouseOut:h},"GALLERY")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{className:"nav-link ".concat("/MediaRelation"===s?"selected":""),"data-toggle":"collapse","data-target":"#navbarSupportedContent",onClick:function(e){return u("MediaRelation")},onMouseOver:p,onMouseOut:h},"MEDIA RELATIONS")),o.a.createElement("li",{className:"nav-item px-2 d-flex "},o.a.createElement("div",{className:"nav-link ".concat("/ContactUs"===s?"selected":""),"data-toggle":"collapse","data-target":"#navbarSupportedContent",onClick:function(e){return u("ContactUs")},onMouseOver:p,onMouseOut:h},"CONTACT US")))),o.a.createElement("div",{className:"overlay",style:{width:l},onClick:function(){return c("0")},"data-toggle":"collapse","data-target":"#navbarSupportedContent"}))}var g=Object(h.g)((function(e){var t=Object(n.useState)(window.innerWidth),a=Object(d.a)(t,2),l=a[0],c=a[1],r=function(){c(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[r,l]),o.a.createElement("main",{className:"main-canvas",style:{position:"/"===e.history.location.pathname?"absolute":""}},o.a.createElement("section",null,o.a.createElement(p,{history:e.history,color:"/"===e.history.location.pathname?"black":"white"})),"/"===e.history.location.pathname||"/SelectWork"===e.history.location.pathname||l<767?o.a.createElement("section",{style:{position:"/"===e.history.location.pathname?"absolute":"",width:"100%",marginTop:"/"===e.history.location.pathname?"0px":"60px",minHeight:"100vh !important",overflow:"hidden !important"}},e.children,"/"!==e.history.location.pathname&&o.a.createElement("footer",{className:"times text-weight-bold text-center p-1 text-uppercase small-title",style:{width:"100%",bottom:0}},"\xa92022 APEX Communications, INC. All Rights Reserved.")):o.a.createElement("section",null,o.a.createElement("section",{style:{minHeight:"90vh",marginTop:"60px"}},o.a.createElement("section",{className:"container-fluid content-padding"},e.children),o.a.createElement("section",{class:"icon-bar"},o.a.createElement("a",{onClick:function(){return window.open("https://www.instagram.com/apexcomm/","_blank")},class:"instagram"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-instagram",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),o.a.createElement("a",{onClick:function(){return window.open("https://www.weibo.com/u/5888176990","_blank")},class:"weibo"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-sina-weibo",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M10.878 1.093a4.23 4.23 0 0 1 4.031 1.305 4.225 4.225 0 0 1 .886 4.14v.001a.612.612 0 0 1-1.166-.377 3.01 3.01 0 0 0-3.495-3.873.611.611 0 1 1-.256-1.196ZM3.753 9.465c.548-1.11 1.972-1.74 3.233-1.411 1.304.338 1.971 1.568 1.437 2.764-.541 1.221-2.095 1.875-3.416 1.449-1.271-.411-1.812-1.67-1.254-2.802Zm2.658.567c.16.066.365-.009.458-.168.088-.16.03-.34-.129-.397-.156-.062-.353.013-.446.168-.09.154-.041.333.117.397Zm-1.607 1.314c.413.188.963.009 1.219-.4.252-.413.12-.883-.296-1.062-.41-.172-.94.005-1.194.402-.256.4-.135.874.271 1.06Z"}),o.a.createElement("path",{d:"m12.014 7.238.005.001c.919.285 1.941.974 1.939 2.188 0 2.007-2.895 4.535-7.246 4.535C3.393 13.962 0 12.352 0 9.708c0-1.385.876-2.985 2.384-4.493C4.4 3.199 6.751 2.28 7.634 3.165c.39.392.427 1.065.177 1.87-.132.405.38.182.38.182 1.63-.682 3.051-.722 3.57.02.278.397.252.951-.004 1.594-.116.293.035.34.257.407Zm-10.4 3.101c.172 1.738 2.46 2.936 5.109 2.674 2.647-.26 4.656-1.883 4.482-3.623-.17-1.738-2.458-2.937-5.107-2.674-2.647.263-4.656 1.883-4.484 3.623Zm11.681-6.484a2.056 2.056 0 0 0-1.962-.634.526.526 0 1 0 .219 1.031 1.008 1.008 0 0 1 1.17 1.296.528.528 0 0 0 1.005.325 2.062 2.062 0 0 0-.432-2.018Z"}))),o.a.createElement("a",{onClick:function(){return window.open("https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg","_blank")},class:"youtube"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-youtube",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})))," ",o.a.createElement("a",{onClick:function(){return window.open("https://vimeo.com/apexcomm","_blank")},class:"vimeo"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-vimeo",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z"})))),o.a.createElement("section",{class:"gmail-bar news text-uppercase",style:{writingMode:"vertical-rl",textOrientation:"mixed",cursor:"pointer"},onClick:function(){window.location.href="mailto:hello@apexcomm.us"}},"hello@apexcomm.us")),o.a.createElement("footer",{className:"times text-weight-bold text-center p-2 mt-2 text-uppercase small-title",style:{position:"relative",marginTop:"120px",bottom:"6px"}},"\xa92022 APEX Communications, INC. All Rights Reserved.")))}));var b=Object(h.g)((function(e){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e.location]),o.a.createElement("div",null,e.children)})),v=o.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,89))})),w=o.a.lazy((function(){return a.e(5).then(a.bind(null,94))})),E=o.a.lazy((function(){return a.e(11).then(a.bind(null,97))})),f=o.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,95))})),x=o.a.lazy((function(){return a.e(6).then(a.bind(null,96))})),C=o.a.lazy((function(){return Promise.all([a.e(4),a.e(12)]).then(a.bind(null,98))})),y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Promise.all([a.e(10).then(a.t.bind(null,90,7)),a.e(14).then(a.t.bind(null,91,7)),a.e(9).then(a.t.bind(null,92,7)),a.e(13).then(a.t.bind(null,93,7))])}},{key:"render",value:function(){return o.a.createElement(g,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(b,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:v}),o.a.createElement(h.b,{exact:!0,path:"/AboutUs",component:w}),o.a.createElement(h.b,{exact:!0,path:"/SelectWork",component:E}),o.a.createElement(h.b,{exact:!0,path:"/Gallery",component:f}),o.a.createElement(h.b,{exact:!0,path:"/MediaRelation",component:x}),o.a.createElement(h.b,{exact:!0,path:"/ContactUs",component:C}),o.a.createElement(h.b,{exact:!0,path:"/nomatch",component:k})))))}}]),t}(n.Component);function k(e){return o.a.createElement("main",{style:O.container,className:"text-center"},o.a.createElement("img",{style:O.imageContainer,src:"".concat("","/img/404/error404-head.png"),alt:"error404"}),o.a.createElement("div",{className:"d-flex mt-3"},o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/4.png"),alt:"error404"}),o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/0.png"),alt:"error404"}),o.a.createElement("img",{style:O.imageContainerSub,src:"".concat("","/img/404/4.png"),alt:"error404"})),o.a.createElement("img",{style:O.imageContainerText,src:"".concat("","/img/404/sorry.png"),alt:"error404",className:"mt-4"}),o.a.createElement("a",{className:"btn mr-bg-darkblue text-white mt-4",href:"/dashboard"},"\u8fd4\u56de"))}var O={container:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",margin:"5vh auto",width:"300px",overflowY:"auto"},imageContainer:{width:"300px",margin:"0 auto"},imageContainerSub:{width:"100px",margin:"0 auto",height:"10vh"},imageContainerText:{width:"300px",margin:"0 auto",height:"5vh"}},N=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(8),M=a(28),z=a(7),j=a(26),A=a(27),L=Object(z.createStore)(Object(z.combineReducers)({}),Object(A.composeWithDevTools)(Object(z.applyMiddleware)(j.a)));a(42);c.a.render(o.a.createElement(M.a,{store:L},o.a.createElement(S.a,{basename:""},o.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,2,3]]]);
//# sourceMappingURL=main.5841d69d.chunk.js.map