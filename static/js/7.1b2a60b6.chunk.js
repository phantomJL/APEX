(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[7],{48:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i(10),l=i(0),r=i.n(l);function n(e){var a=Object(l.useState)(!1),i=Object(t.a)(a,2),n=i[0],g=i[1],m=Object(l.useState)(""),o=Object(t.a)(m,2),c=o[0],u=o[1];return Object(l.useEffect)((function(){u(e.url)}),[e.url]),r.a.createElement(r.a.Fragment,null,e.container?r.a.createElement("div",{className:"".concat(e.containerClass," animation"),style:{width:"100%",opacity:n?1:0,backgroundColor:n?e.containerColor:"transparent"}},r.a.createElement("img",{alt:"cover",className:"".concat(e.imgClass),src:"".concat("").concat(c),style:{width:"100%",opacity:n?e.imgOpacity:0,objectFit:"contain"},onLoad:function(){return g(!0)}})):r.a.createElement("img",{alt:"cover",className:"animation",src:"".concat("").concat(c),style:{width:e.imgWidth,height:e.imgHeight,opacity:n?e.imgOpacity:0,objectFit:"cover"},onLoad:function(){return g(!0)}}))}},49:function(e,a,i){},97:function(e,a,i){"use strict";i.r(a);var t=i(10),l=i(0),r=i.n(l),n=i(1);i(49);function g(e){var a=Object(l.useState)(!0),i=Object(t.a)(a,2),n=i[0],g=i[1],m=Object(l.useState)(!1),o=Object(t.a)(m,2),c=o[0],u=o[1],s=Object(l.useState)(""),d=Object(t.a)(s,2),p=d[0],h=d[1],_=Object(l.useRef)();Object(l.useEffect)((function(){return h(e.url),window.addEventListener("scroll",y),function(){return window.removeEventListener("scroll",y)}}),[y,e.url]);var y=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];_.current||g(!1);var e=_.current.getBoundingClientRect().top;g(e<=window.innerHeight)};return r.a.createElement("img",{alt:"images",ref:function(e){return _.current=e},className:"".concat(n?"animation":""),src:"".concat("").concat(p),style:{width:e.imgWidth,height:e.imgHeight,opacity:c&&n?e.imgOpacity:0,objectFit:"cover"},onLoad:function(){return u(!0)}})}var m=Object(n.g)((function(e){return r.a.createElement("div",{style:{height:"".concat(e.height)},className:"p-1"},r.a.createElement(g,{imgHeight:"100%",imgOpacity:1,url:e.data.img_url}))})),o=i(48);var c=function(e){var a=Object(l.useState)(!1),i=Object(t.a)(a,2),n=i[0],g=i[1],m=Object(l.useState)(1),c=Object(t.a)(m,2),u=c[0],s=c[1],d=Object(l.useState)(window.innerWidth),p=Object(t.a)(d,2),h=p[0],_=p[1],y=function(){_(window.innerWidth)};return Object(l.useEffect)((function(){return window.addEventListener("resize",y),function(){return window.removeEventListener("resize",y)}}),[y,h]),r.a.createElement("div",{className:"col-12 col-lg-4 col-md-6 px-md-3 py-md-2 py-1 px-3"},r.a.createElement("div",{onMouseEnter:function(){g(!0),s(.6)},onMouseLeave:function(){g(!1),s(1)},className:"container","data-toggle":"modal","data-target":"#exampleModal",style:{cursor:"pointer"},onClick:function(){return a=e.data.video_link,e.setVideo(a),void e.setVideoPlay(!0);var a}},r.a.createElement(o.a,{container:!0,containerColor:"black",containerClass:"cover video-cover",imgClass:"cover_img",imgOpacity:h<767?.9:u,url:e.data.img_url}),(n||h<767)&&r.a.createElement("div",{className:"bottom-left-gallery p-2 prata"},r.a.createElement("div",{className:"text-white median-title py-2"},e.data.magazine),e.data.starring?r.a.createElement("div",null,r.a.createElement("div",{className:"text-white font-weight-bold median-title"},"STARRING"),r.a.createElement("div",{className:"text-white median-title"},e.data.starring)):r.a.createElement("div",null),h>=767&&(e.data.director?r.a.createElement("div",null,r.a.createElement("div",{className:"text-white font-weight-bold median-title"},"DIRECTED BY"),r.a.createElement("div",{className:"text-white median-title"},e.data.director)):r.a.createElement("div",null)))))},u=[{img_url:"/img/gallery/video/5. nick 16x6.75.jpg",magazine:"ELLEMEN (China) Fresh  April 2019",starring:"Nicholas Hoult",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/6ywblxgzst6kbt8/Nicholas%20Hoult%20-%20ELLEMEN%20Fresh%20Fashion%20Film.mp4?dl=0"},{img_url:"/img/gallery/video/4. alyssa 16x6.75.png",magazine:"David Yurman BTS",starring:"Alyssa Chia",director:"Yulizhe/Fnu",video_link:""},{img_url:"/img/gallery/video/2. henry 16x6.75.png",magazine:"ELLEMEN (China) Fresh Digital March 2019 ",starring:"Henry Lau (\u5218\u5baa\u534e)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/zn1qqgn2obw7jpm/Henry%20Lau%20%C3%97%20ELLEMEN%20Fresh_master%20SUBWAY%20version%20final.mp4?dl=0"},{img_url:"/img/gallery/video/Timmy.png",magazine:"DAZED China March.April 2020",starring:"Timoth\xe9e Chalamet",director:"Yulizhe",video_link:""},{img_url:"/img/gallery/video/5. web_selina 4 16x6.75.jpg",magazine:"NYFW F/W 2019 BTS",starring:"Selina Jen (\u4efb\u5bb6\u8431)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/fse0blhn8182twb/Selina_final%20h264%201080.mp4?dl=0"},{img_url:"/img/gallery/video/Leo Wu.png",magazine:"ELLEMEN (China) Fresh April 2019",starring:"Leo Wu (\u5434\u78ca)",director:"Yulizhe/Fnu",video_link:""},{img_url:"/img/gallery/video/Ian Somerhalder 6.75x16.png",magazine:"Esquire (Malaysia) December 2019",starring:"Ian Somerhalder",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/puljcuaazdjuv4v/IAN%20ESQUIRE%20MY%201080.mp4?dl=0"},{img_url:"/img/gallery/video/8. web_Amber Kuo_Bazzar Men China_16x6.75.jpg",magazine:"Harper's Bazaar (China) June 2020 (Special Issue)",starring:"Amber Kuo",director:"Jeff Wang",video_link:"https://www.dropbox.com/s/9juc4kqttwwyd3b/Final_Bazzar%20Men%C3%97Amber%20Kuo%20with%20CN%20ENG%20subtitle.mp4?dl=0"},{img_url:"/img/gallery/video/1. jd 16x6.75.png",magazine:"ELLEMEN (China) Fresh April 2019",starring:"Jodie Comer",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/cyjq77th0ksaghb/Jodie%20Comer%20-%20ELLEMEN%20Fresh%20Fashion%20Film.mp4?dl=0"},{img_url:"/img/gallery/video/10. web_Amber Kuo_Lulualways1_16x6.75.jpg",magazine:"T-mall x Amber Kuo (\u90ed\u91c7\u6d01)",starring:"",director:"",video_link:"https://www.dropbox.com/s/ypqohgw9hrzhikt/Amber%20Kuo%20%C3%97%20T-mall%20%C3%97%20Lulualways%2015s.mp4?dl=0"},{img_url:"/img/gallery/video/3. alyssa mj 2 16x6.75.png",magazine:"Marc Jacobs Street Snaps BTS",starring:"Alyssa Chia (\u8d3e\u9759\u96ef)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/p4zc49k5n1sp4ni/Alyssa%20Chia%20X%20Marc%20Jacobs%20BTS.mp4?dl=0"}],s=[{img_url:"img/gallery/magazine/200716x\u90ed\u91c7\u6d010264.jpg"},{img_url:"img/gallery/magazine/200716\u90ed\u91c7\u6d01\u6b4c\u529b\u601dlogo-.jpg"},{img_url:"img/gallery/magazine/200716\u90ed\u91c7\u6d01\u6b4c\u529b\u601dlogo.jpg"},{img_url:"img/gallery/magazine/Alyssa Chia 01.jpg"},{img_url:"img/gallery/magazine/Alyssa Chia 02.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 01.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 02.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 03.jpg"},{img_url:"img/gallery/magazine/DAZED_ digital_2020_3&4_COVER_Timoth\xe9e Chalamet_02.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-05.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-06.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-07.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-09.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-10.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-11.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-12.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-14.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-16.jpg"},{img_url:"img/gallery/magazine/ELLEMEN Editorial 01.jpg"},{img_url:"img/gallery/magazine/ELLEMEN Editorial 02.jpg"},{img_url:"img/gallery/magazine/Gavin 1.jpg"},{img_url:"img/gallery/magazine/Gavin 2.jpg"},{img_url:"img/gallery/magazine/Henry Lau 01.jpg"},{img_url:"img/gallery/magazine/Henry Lau 02.jpg"},{img_url:"img/gallery/magazine/Ian Somerhalder 01.jpg"},{img_url:"img/gallery/magazine/Ian Somerhalder 02.jpg"},{img_url:"img/gallery/magazine/Jodie Comer 01.jpeg"},{img_url:"img/gallery/magazine/Jodie Comer 02.jpeg"},{img_url:"img/gallery/magazine/Nicholas Hoult 01.jpeg"},{img_url:"img/gallery/magazine/Nicholas Hoult 02.jpg"},{img_url:"img/gallery/magazine/Nicholas Hoult 03.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 27 58 (1).jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 12.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 15.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 18.jpg"},{img_url:"img/gallery/magazine/Selina_Spotlight_6.jpg"},{img_url:"img/gallery/magazine/\u5434\u78ca 01.jpg"},{img_url:"img/gallery/magazine/\u5434\u78ca 02.jpg"},{img_url:"img/gallery/magazine/\u7121\u984c\u6703\u8a7115580.jpg"},{img_url:"img/gallery/magazine/\u90ed\u91c7\u6d0124p\u5bfc\u51fa-3.jpg"}],d=i(54),p=i.n(d);a.default=Object(n.g)((function(e){var a=Object(l.useState)("video"),i=Object(t.a)(a,2),n=i[0],g=i[1],o=Object(l.useState)(""),d=Object(t.a)(o,2),h=d[0],_=d[1],y=Object(l.useState)(!0),E=Object(t.a)(y,2),v=E[0],j=E[1],b=s.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,a){return e.sort-a.sort})).map((function(e){return e.value})),w=Object(l.useState)(window.innerWidth),z=Object(t.a)(w,2),f=z[0],N=z[1],x=function(){N(window.innerWidth)};return Object(l.useEffect)((function(){return window.addEventListener("resize",x),function(){return window.removeEventListener("resize",x)}}),[x,f]),r.a.createElement("main",{className:"px-md-4 px-2 py-4"},r.a.createElement("section",{className:"d-flex p-4 justify-content-center  freeze"},r.a.createElement("div",{className:"btn btn-line mx-4 article ".concat("video"===n?"active":""),onClick:function(e){return g("video")}},"VIDEOS"),r.a.createElement("div",{className:"btn btn-line mx-4 article ".concat("video"===n?"":"active"),onClick:function(e){return g("magazine")}},"IMAGES")),"video"===n?r.a.createElement("section",{className:"py-4 video-margin",style:{overflowX:"hidden"}},r.a.createElement("div",{className:"row"},u.map((function(e,a){return r.a.createElement(c,{data:e,setVideo:_,setVideoPlay:j})})))):r.a.createElement("section",{className:"py-4"},f<767?r.a.createElement("div",{className:"d-flex flex-wrap"},b.map((function(e,a){return r.a.createElement(m,{data:e,height:"160px"})}))):r.a.createElement("div",{className:"d-flex flex-wrap"},b.map((function(e,a){return r.a.createElement(m,{data:e,height:"260px"})})))),r.a.createElement("div",{className:"modal fade",id:"exampleModal",onClick:function(){return j(!1)},tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(p.a,{className:"react-player",url:h,width:"100%",height:"100%",playing:v,controls:!0,config:{file:{attributes:{onContextMenu:function(e){return e.preventDefault()},controlsList:"nodownload"}}}}))))))}))}}]);
//# sourceMappingURL=7.1b2a60b6.chunk.js.map