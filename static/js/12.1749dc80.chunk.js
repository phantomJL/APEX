(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[12],{98:function(e,t,a){"use strict";a.r(t);var n=a(17),l=a(0),r=a.n(l),c=a(1),s=a(56),i=a(83),m=a.n(i);function o(e){var t=Object(s.useToasts)().addToast;return r.a.createElement("form",{className:"contact-form p-4",id:"myForm",onSubmit:function(a){a.preventDefault(),t("Message is on its way, Please wait!",{appearance:"info",autoDismiss:!0}),"Reach Out"===e.purpose&&m.a.sendForm("service_g1beyp4","template_nob8jfo",a.target,"user_vqDbT4W4iarR10zKXuSiJ").then((function(t){e.setSuccess(!0)}),(function(e){t(e.text,{appearance:"error",autoDismiss:!0})})),"Media Inquiry"===e.purpose&&m.a.sendForm("service_qruwgft","template_jmyr1sg",a.target,"user_iM1KcMZO1OQCsEraQwPJG").then((function(t){e.setSuccess(!0)}),(function(e){t(e.text,{appearance:"error",autoDismiss:!0})}))}},r.a.createElement("div",{className:"row article"},r.a.createElement("div",{className:"py-2 col-sm-12 col-md-4"},r.a.createElement("div",null,r.a.createElement("label",{className:"d-flex"},"Name ",r.a.createElement("p",{className:"text-danger"},"*"))),r.a.createElement("input",{className:"short-input",type:"text",name:"name",style:{width:"100%"},required:!0})),r.a.createElement("div",{className:"py-2 col-sm-12 col-md-4 "},r.a.createElement("div",null,r.a.createElement("label",{className:"d-flex"},"Email ",r.a.createElement("p",{className:"text-danger"},"*"))),r.a.createElement("input",{className:"short-input",type:"email",name:"email",style:{width:"100%"},required:!0})),r.a.createElement("div",{className:"py-2 col-sm-12 col-md-4 "},"Media Inquiry"==e.purpose?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{className:"d-flex"},"Company ",r.a.createElement("p",{className:"text-danger"},"*"))),r.a.createElement("input",{className:"short-input",type:"text",name:"company",style:{width:"100%"},required:!0})):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{className:"d-flex"},"Phone number ",r.a.createElement("p",{className:"text-danger"},"*"))),r.a.createElement("input",{className:"short-input",type:"number",name:"number",style:{width:"100%"},required:!0})))),r.a.createElement("div",{className:"py-4 article"},r.a.createElement("label",null,"Subject")),r.a.createElement("div",null,r.a.createElement("textarea",{name:"subject",className:"large-input",style:{width:"100%"}})),r.a.createElement("div",{className:"py-4 article"},r.a.createElement("label",null,"Message")),r.a.createElement("div",null,r.a.createElement("textarea",{name:"message",className:"large-input",style:{width:"100%",height:"250px"}})),r.a.createElement("div",{className:"py-4 my-2 d-flex justify-content-center"},r.a.createElement("button",{className:"btn btn-outline-dark font-weight-bold",style:{width:"70%"},type:"submit",value:"Send"},"Submit")))}function u(){return r.a.createElement("div",{className:"text-center p-4 m-4"},r.a.createElement("img",{alt:"gif",src:"".concat("","/img/contact/source.gif"),style:{width:"30%",marginTop:"8%"}}),r.a.createElement("h2",{className:"p-4 m-4"},"THANK YOU!"),r.a.createElement("div",{className:"p-4 large-title",style:{marginBotton:"15%",color:"#6c6c6c"}},"Your message has been sent. We'll get in touch with you shortly. "," "))}var d=function(e){return r.a.createElement(s.DefaultToastContainer,Object.assign({className:"toast-container",style:{zIndex:"2000"}},e))};t.default=Object(c.g)((function(e){var t=Object(l.useState)("Reach Out"),a=Object(n.a)(t,2),c=a[0],i=a[1],m=Object(l.useState)(!1),p=Object(n.a)(m,2),E=p[0],b=p[1];return r.a.createElement("main",{className:"mx-auto",style:{width:"70%",height:"100%"}},0==E?r.a.createElement("secion",null,r.a.createElement("h1",{className:"article text-uppercase text-center p-4"},"Let's work together"),r.a.createElement("div",{className:"d-flex justify-content-center p-4"},r.a.createElement("button",{className:"article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ".concat("Media Inquiry"===c?"":"active"),style:{width:"50%"},onClick:function(){return i("Reach Out")}},"say \ud83d\udc4b to us"),r.a.createElement("button",{className:"article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ".concat("Media Inquiry"===c?"active":""),style:{width:"50%"},onClick:function(){return i("Media Inquiry")}},"media inquiry")),r.a.createElement(s.ToastProvider,{components:{ToastContainer:d}},r.a.createElement(o,{purpose:c,setSuccess:function(){b(!0)}}))):r.a.createElement(u,null))}))}}]);
//# sourceMappingURL=12.1749dc80.chunk.js.map