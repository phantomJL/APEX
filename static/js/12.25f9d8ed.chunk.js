(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[12],{100:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(0),c=a.n(l),s=a(1),r=a(57),i=a(85),m=a.n(i);function o(e){var t=Object(r.useToasts)().addToast;return c.a.createElement("form",{className:"contact-form p-4",id:"myForm",onSubmit:function(a){a.preventDefault(),t("Message is on its way, Please wait!",{appearance:"info",autoDismiss:!0}),"Reach Out"===e.purpose&&m.a.sendForm("service_g1beyp4","template_nob8jfo",a.target,"user_vqDbT4W4iarR10zKXuSiJ").then((function(t){e.setSuccess(!0)}),(function(e){t(e.text,{appearance:"error",autoDismiss:!0})})),"Media Inquiry"===e.purpose&&m.a.sendForm("service_qruwgft","template_jmyr1sg",a.target,"user_iM1KcMZO1OQCsEraQwPJG").then((function(t){e.setSuccess(!0)}),(function(e){t(e.text,{appearance:"error",autoDismiss:!0})}))}},c.a.createElement("div",{className:"row article"},c.a.createElement("div",{className:"py-2 col-sm-12 col-md-4"},c.a.createElement("div",null,c.a.createElement("label",{className:"d-flex"},"Name ",c.a.createElement("p",{className:"text-danger"},"*"))),c.a.createElement("input",{className:"short-input",type:"text",name:"name",style:{width:"100%"},required:!0})),c.a.createElement("div",{className:"py-2 col-sm-12 col-md-4 "},c.a.createElement("div",null,c.a.createElement("label",{className:"d-flex"},"Email ",c.a.createElement("p",{className:"text-danger"},"*"))),c.a.createElement("input",{className:"short-input",type:"email",name:"email",style:{width:"100%"},required:!0})),c.a.createElement("div",{className:"py-2 col-sm-12 col-md-4 "},"Media Inquiry"==e.purpose?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{className:"d-flex"},"Company ",c.a.createElement("p",{className:"text-danger"},"*"))),c.a.createElement("input",{className:"short-input",type:"text",name:"company",style:{width:"100%"},required:!0})):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{className:"d-flex"},"Phone number ",c.a.createElement("p",{className:"text-danger"},"*"))),c.a.createElement("input",{className:"short-input",type:"number",name:"number",style:{width:"100%"},required:!0})))),c.a.createElement("div",{className:"py-4 article"},c.a.createElement("label",null,"Subject")),c.a.createElement("div",null,c.a.createElement("textarea",{name:"subject",className:"large-input",style:{width:"100%"}})),c.a.createElement("div",{className:"py-4 article"},c.a.createElement("label",null,"Message")),c.a.createElement("div",null,c.a.createElement("textarea",{name:"message",className:"large-input",style:{width:"100%",height:"250px"}})),c.a.createElement("div",{className:"py-4 my-2 d-flex justify-content-center"},c.a.createElement("button",{className:"btn btn-outline-dark font-weight-bold",style:{width:"70%"},type:"submit",value:"Send"},"Submit")))}var u=function(e){return c.a.createElement("section",{className:"p-4",style:{bottom:0,position:"absolute"}},c.a.createElement("section",{className:"py-4"},c.a.createElement("div",{className:"paragraph font-weight-bold"},"Address"),c.a.createElement("div",{className:"large-title"},"New York")),c.a.createElement("section",{className:"py-4"},c.a.createElement("div",{className:"large-title"},"hello@apexcomm.us")),c.a.createElement("section",{className:"row"},c.a.createElement("div",{className:"col-4 py-2 font-weight-bold median-title"},"ABOUT US"),c.a.createElement("div",{className:"col-4 py-2 font-weight-bold median-title"},"WORK"),c.a.createElement("div",{className:"col-4 py-2 font-weight-bold median-title"},"GALLERY"),c.a.createElement("div",{className:"col-4 py-2 font-weight-bold median-title"},"MEDIA RELATION"),c.a.createElement("div",{className:"col-4 py-2 font-weight-bold median-title"},"CONTACT US")),c.a.createElement("section",{className:"d-flex justify-content-around"},c.a.createElement("a",{onClick:function(){return window.open("https://www.instagram.com/apexcomm/","_blank")},class:"instagram"},c.a.createElement("i",{class:"fab fa-instagram"})),c.a.createElement("a",{onClick:function(){return window.open("https://www.weibo.com/u/5888176990","_blank")},class:"weibo"},c.a.createElement("i",{class:"fab fa-weibo"})),c.a.createElement("a",{onClick:function(){return window.open("https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg","_blank")},class:"youtube"},c.a.createElement("i",{class:"fab fa-youtube"}))," ",c.a.createElement("a",{onClick:function(){return window.open("https://vimeo.com/apexcomm","_blank")},class:"vimeo"},c.a.createElement("i",{class:"fab fa-vimeo-v"}))))};function d(){return c.a.createElement("div",{className:"text-center p-4 m-4"},c.a.createElement("img",{alt:"gif",src:"".concat("","/img/contact/source.gif"),style:{width:"30%",marginTop:"8%"}}),c.a.createElement("h2",{className:"p-4 m-4"},"THANK YOU!"),c.a.createElement("div",{className:"p-4 large-title",style:{marginBotton:"15%",color:"#6c6c6c"}},"Your message has been sent. We'll get in touch with you shortly. "," "))}var p=function(e){return c.a.createElement(r.DefaultToastContainer,Object.assign({className:"toast-container",style:{zIndex:"2000"}},e))};t.default=Object(s.g)((function(e){var t=Object(l.useState)("Reach Out"),a=Object(n.a)(t,2),s=a[0],i=a[1],m=Object(l.useState)(!1),E=Object(n.a)(m,2),b=E[0],f=E[1],w=Object(l.useState)(window.innerWidth),h=Object(n.a)(w,2),y=h[0],g=h[1],v=function(){g(window.innerWidth)};return Object(l.useEffect)((function(){return window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}}),[v,y]),c.a.createElement("div",null,y<767?c.a.createElement("div",{style:{position:"relative",height:"89vh"}},c.a.createElement(u,null)):c.a.createElement("main",{className:"mx-auto",style:{width:"70%",height:"100%"}},0==b?c.a.createElement("secion",null,c.a.createElement("h1",{className:"article text-uppercase text-center p-4"},"Let's work together"),c.a.createElement("div",{className:"d-flex justify-content-center p-4"},c.a.createElement("button",{className:"article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ".concat("Media Inquiry"===s?"":"active"),style:{width:"50%"},onClick:function(){return i("Reach Out")}},"say \ud83d\udc4b to us"),c.a.createElement("button",{className:"article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ".concat("Media Inquiry"===s?"active":""),style:{width:"50%"},onClick:function(){return i("Media Inquiry")}},"media inquiry")),c.a.createElement(r.ToastProvider,{components:{ToastContainer:p}},c.a.createElement(o,{purpose:s,setSuccess:function(){f(!0)}}))):c.a.createElement(d,null)))}))}}]);
//# sourceMappingURL=12.25f9d8ed.chunk.js.map