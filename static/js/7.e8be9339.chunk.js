(this.webpackJsonpAPEX=this.webpackJsonpAPEX||[]).push([[7],{48:function(e,a,i){"use strict";i.d(a,"a",(function(){return r}));var l=i(10),g=i(0),n=i.n(g);function r(e){var a=Object(g.useState)(!1),i=Object(l.a)(a,2),r=i[0],t=i[1],m=Object(g.useState)(""),o=Object(l.a)(m,2),c=o[0],u=o[1];return Object(g.useEffect)((function(){u(e.url)}),[e.url]),n.a.createElement(n.a.Fragment,null,e.container?n.a.createElement("div",{className:"".concat(e.containerClass," animation"),style:{width:"100%",opacity:r?1:0,backgroundColor:r?e.containerColor:"transparent"}},n.a.createElement("img",{alt:"cover",className:"".concat(e.imgClass),src:"".concat("").concat(c),style:{width:"100%",opacity:r?e.imgOpacity:0,objectFit:"contain"},onLoad:function(){return t(!0)}})):n.a.createElement("img",{alt:"cover",className:"animation",src:"".concat("").concat(c),style:{width:e.imgWidth,height:e.imgHeight,opacity:r?e.imgOpacity:0,objectFit:"cover"},onLoad:function(){return t(!0)}}))}},49:function(e,a,i){},98:function(e,a,i){"use strict";i.r(a);var l=i(10),g=i(0),n=i.n(g),r=i(1);i(49);function t(e){var a=Object(g.useState)(!0),i=Object(l.a)(a,2),r=i[0],t=i[1],m=Object(g.useState)(!1),o=Object(l.a)(m,2),c=o[0],u=o[1],s=Object(g.useState)(""),d=Object(l.a)(s,2),p=d[0],_=d[1],y=Object(g.useRef)();Object(g.useEffect)((function(){return _(e.url),window.addEventListener("scroll",h),function(){return window.removeEventListener("scroll",h)}}),[h,e.url]);var h=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];y.current||t(!1);var e=y.current.getBoundingClientRect().top;t(e<=window.innerHeight)};return n.a.createElement("img",{alt:"images",ref:function(e){return y.current=e},className:"".concat(r?"animation":""),src:"".concat("").concat(p),style:{width:e.imgWidth,height:e.imgHeight,opacity:c&&r?e.imgOpacity:0,objectFit:"cover"},onLoad:function(){return u(!0)}})}var m=Object(r.g)((function(e){return n.a.createElement("div",{style:{height:"".concat(e.height)},className:"p-1"},n.a.createElement(t,{imgHeight:"100%",imgOpacity:1,url:e.data.img_url}))})),o=i(48);var c=function(e){var a=Object(g.useState)(!1),i=Object(l.a)(a,2),r=i[0],t=i[1],m=Object(g.useState)(1),c=Object(l.a)(m,2),u=c[0],s=c[1],d=Object(g.useState)(window.innerWidth),p=Object(l.a)(d,2),_=p[0],y=p[1],h=function(){y(window.innerWidth)};return Object(g.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[h,_]),n.a.createElement("div",{className:"col-12 col-lg-4 col-md-6 px-md-3 py-md-2 py-1 px-3"},n.a.createElement("div",{onMouseEnter:function(){t(!0),s(.6)},onMouseLeave:function(){t(!1),s(1)},className:"container","data-toggle":"modal","data-target":"#exampleModal",style:{cursor:"pointer"},onClick:function(){return a=e.data.video_link,e.setVideo(a),void e.setVideoPlay(!0);var a}},n.a.createElement(o.a,{container:!0,containerColor:"black",containerClass:"cover video-cover",imgClass:"cover_img",imgOpacity:_<767?.9:u,url:e.data.img_url}),(r||_<767)&&n.a.createElement("div",{className:"bottom-left-gallery p-2 prata"},n.a.createElement("div",{className:"text-white median-title py-2"},e.data.magazine),e.data.starring?n.a.createElement("div",null,n.a.createElement("div",{className:"text-white median-title",style:{fontWeight:950}},"STARRING"),n.a.createElement("div",{className:"text-white median-title"},e.data.starring)):n.a.createElement("div",null),_>=767&&(e.data.director?n.a.createElement("div",null,n.a.createElement("div",{className:"text-white median-title",style:{fontWeight:950}},"DIRECTED BY"),n.a.createElement("div",{className:"text-white median-title"},e.data.director)):n.a.createElement("div",null)))))},u=[{img_url:"/img/gallery/video/Fala x HR_16.6.75.png",magazine:"Helena Rubinstein x Fala Chen",video_link:"https://www.dropbox.com/s/7pxqr1a8qqc4nhd/helena_rubinstein_120th_anniversary_spot_w__fala_chen_16x9%20%28Original%29.mp4?dl=0"},{img_url:"/img/gallery/video/TYY x Glass.png",magazine:"GLASS (China) August 2022",starring:"Tan Yuanyuan",video_link:"https://www.dropbox.com/s/62c5o0ws33i64id/GLASS%20China%20x%20Tan%20Yuanyuan%20ver.2%203%20cut.mov?dl=0"},{img_url:"/img/gallery/video/Bazzar HK x Fala.jpg",magazine:"Harper's Bazaar (Hong Kong) August 2022",starring:"Fala Chen",video_link:"https://www.dropbox.com/s/q64wn630gt214gz/Bazaar%20HK%20x%20Fala.mov?dl=0"},{img_url:"/img/gallery/video/ApedeMod.jpeg",magazine:"APEDE MOD x Grazia (China)",video_link:"https://www.dropbox.com/s/albs3ktykh3fjop/Grazia%20China%20x%20Apede%20Mod-NY-Final-out-2.mp4?dl=0"},{img_url:"/img/gallery/video/ZHU x NYLON China 4.png",magazine:"NYLON (China) January 2022",starring:"ZHU",director:"Shawn Zhang",video_link:"https://www.dropbox.com/s/9oylecx4joglb33/Nylon%20X%20ZHU%20V2.mp4?dl=0"},{img_url:"/img/gallery/video/Fala Chen_Vogue HK_HR.png",magazine:"Helena Rubinstein x VOGUE (Hong Kong)",starring:"Fala Chen",director:"",video_link:"https://www.dropbox.com/s/5qtnas47jyky4qo/Fala%20Chen%20x%20Vogue%20HK%20x%20HR.mov?dl=0"},{img_url:"/img/gallery/video/5. nick 16x6.75.jpg",magazine:"ELLEMEN (China) Fresh  April 2019",starring:"Nicholas Hoult",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/6ywblxgzst6kbt8/Nicholas%20Hoult%20-%20ELLEMEN%20Fresh%20Fashion%20Film.mp4?dl=0"},{img_url:"/img/gallery/video/4. alyssa 16x6.75.png",magazine:"David Yurman BTS",starring:"Alyssa Chia",director:"Yulizhe/Fnu",video_link:""},{img_url:"/img/gallery/video/2. henry 16x6.75.png",magazine:"ELLEMEN (China) Fresh Digital March 2019 ",starring:"Henry Lau (\u5218\u5baa\u534e)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/zn1qqgn2obw7jpm/Henry%20Lau%20%C3%97%20ELLEMEN%20Fresh_master%20SUBWAY%20version%20final.mp4?dl=0"},{img_url:"/img/gallery/video/Timmy.jpeg",magazine:"DAZED (China) March/April 2020",starring:"Timoth\xe9e Chalamet",director:"Yulizhe",video_link:""},{img_url:"/img/gallery/video/5. web_selina 4 16x6.75.jpg",magazine:"NYFW F/W 2019 BTS",starring:"Selina Jen (\u4efb\u5bb6\u8431)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/fse0blhn8182twb/Selina_final%20h264%201080.mp4?dl=0"},{img_url:"/img/gallery/video/Leo Wu.png",magazine:"Wear OS by Google x ELLENMAN (China)",starring:"Leo Wu (\u5434\u78ca)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/72gjfsbl0g3setq/%E5%90%B4%E7%A3%8A%20x%20Ellemen%20Fresh_%E6%89%8B%E8%A1%A8.MP4?dl=0"},{img_url:"/img/gallery/video/Ian Somerhalder 6.75x16.png",magazine:"Esquire (Malaysia) December 2019",starring:"Ian Somerhalder",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/puljcuaazdjuv4v/IAN%20ESQUIRE%20MY%201080.mp4?dl=0"},{img_url:"/img/gallery/video/8. web_Amber Kuo_Bazzar Men China_16x6.75.jpg",magazine:"Harper's Bazaar MEN (China) June 2020 (Special Issue)",starring:"Amber Kuo",director:"Jeff Wang",video_link:"https://www.dropbox.com/s/9juc4kqttwwyd3b/Final_Bazzar%20Men%C3%97Amber%20Kuo%20with%20CN%20ENG%20subtitle.mp4?dl=0"},{img_url:"/img/gallery/video/1. jd 16x6.75.png",magazine:"ELLEMEN (China) Fresh April 2019",starring:"Jodie Comer",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/cyjq77th0ksaghb/Jodie%20Comer%20-%20ELLEMEN%20Fresh%20Fashion%20Film.mp4?dl=0"},{img_url:"/img/gallery/video/10. web_Amber Kuo_Lulualways1_16x6.75.jpg",magazine:"T-mall x Amber Kuo (\u90ed\u91c7\u6d01)",starring:"",director:"",video_link:"https://www.dropbox.com/s/ypqohgw9hrzhikt/Amber%20Kuo%20%C3%97%20T-mall%20%C3%97%20Lulualways%2015s.mp4?dl=0"},{img_url:"/img/gallery/video/3. alyssa mj 2 16x6.75.png",magazine:"Marc Jacobs Street Snaps BTS",starring:"Alyssa Chia (\u8d3e\u9759\u96ef)",director:"Yulizhe/Fnu",video_link:"https://www.dropbox.com/s/p4zc49k5n1sp4ni/Alyssa%20Chia%20X%20Marc%20Jacobs%20BTS.mp4?dl=0"}],s=[{img_url:"img/gallery/magazine/20220714_Helena Rubinstein X Fala Chen_Beauty0195-725.png"},{img_url:"img/gallery/magazine/20220714_Helena Rubinstein X Fala Chen_Beauty0334-625 \xb5\xef\u2556\u03a6\u2524\xa5.png"},{img_url:"img/gallery/magazine/20220714_Helena Rubinstein X Fala Chen_Beauty0698-725.png"},{img_url:"img/gallery/magazine/20220714_Helena Rubinstein X Fala Chen_Beauty0954 2-725.png"},{img_url:"img/gallery/magazine/ezgif.com-gif-maker copy.gif"},{img_url:"img/gallery/magazine/ezgif.com-gif-maker.gif"},{img_url:"img/gallery/magazine/Figaro-sean (1).jpg"},{img_url:"img/gallery/magazine/Figaro-sean (2).jpg"},{img_url:"img/gallery/magazine/Figaro-sean (3).jpg"},{img_url:"img/gallery/magazine/Figaro-sean (4).jpg"},{img_url:"img/gallery/magazine/Figaro-sean (7).jpg"},{img_url:"img/gallery/magazine/Figaro-sean (11).jpg"},{img_url:"img/gallery/magazine/BAZ407_coverstory_1080x1350_4.jpg"},{img_url:"img/gallery/magazine/BAZ407_coverstory_1080x1350_5.jpg"},{img_url:"img/gallery/magazine/GlassChina_07122022_8840-.jpg"},{img_url:"img/gallery/magazine/GlassChina_07122022_9899-2.jpg"},{img_url:"img/gallery/magazine/GlassChina_07122022_11277-2.jpg"},{img_url:"img/gallery/magazine/P092-099_ZHU122002_Page_1.jpg"},{img_url:"img/gallery/magazine/nylon-0105ZHU-2.jpg"},{img_url:"img/gallery/magazine/nylon-0105ZHU-4.jpg"},{img_url:"img/gallery/magazine/nylon-0105ZHU.jpg"},{img_url:"img/gallery/magazine/nylon-0105ZHUh.jpg"},{img_url:"img/gallery/magazine/fala1.png"},{img_url:"img/gallery/magazine/Fala5.png"},{img_url:"img/gallery/magazine/Fala6.png"},{img_url:"img/gallery/magazine/5001646644210_.pic.jpg"},{img_url:"img/gallery/magazine/5031646644210_.pic_hd.jpg"},{img_url:"img/gallery/magazine/5051646644246_.pic_hd.jpg"},{img_url:"img/gallery/magazine/SET_1-702_FINAL.png"},{img_url:"img/gallery/magazine/SET_2-571_FINAL.png"},{img_url:"img/gallery/magazine/SET_3-121_FINAL.png"},{img_url:"img/gallery/magazine/200716x\u90ed\u91c7\u6d010264.jpg"},{img_url:"img/gallery/magazine/200716\u90ed\u91c7\u6d01\u6b4c\u529b\u601dlogo-.jpg"},{img_url:"img/gallery/magazine/200716\u90ed\u91c7\u6d01\u6b4c\u529b\u601dlogo.jpg"},{img_url:"img/gallery/magazine/Alyssa Chia 01.jpg"},{img_url:"img/gallery/magazine/Alyssa Chia 02.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 01.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 02.jpg"},{img_url:"img/gallery/magazine/Amber Kuo 03.jpg"},{img_url:"img/gallery/magazine/DAZED_ digital_2020_3&4_COVER_Timoth\xe9e Chalamet_02.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-05.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-06.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-07.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-09.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-10.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-11.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-12.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-14.jpg"},{img_url:"img/gallery/magazine/DAZED_digital_\u6c34\u5370-1-16.jpg"},{img_url:"img/gallery/magazine/ELLEMEN Editorial 01.jpg"},{img_url:"img/gallery/magazine/ELLEMEN Editorial 02.jpg"},{img_url:"img/gallery/magazine/Gavin 1.jpg"},{img_url:"img/gallery/magazine/Gavin 2.jpg"},{img_url:"img/gallery/magazine/Henry Lau 01.jpg"},{img_url:"img/gallery/magazine/Henry Lau 02.jpg"},{img_url:"img/gallery/magazine/Ian Somerhalder 01.jpg"},{img_url:"img/gallery/magazine/Ian Somerhalder 02.jpg"},{img_url:"img/gallery/magazine/Jodie Comer 01.jpeg"},{img_url:"img/gallery/magazine/Jodie Comer 02.jpeg"},{img_url:"img/gallery/magazine/Nicholas Hoult 01.jpeg"},{img_url:"img/gallery/magazine/Nicholas Hoult 02.jpg"},{img_url:"img/gallery/magazine/Nicholas Hoult 03.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 27 58 (1).jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 12.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 15.jpg"},{img_url:"img/gallery/magazine/Photo Sep 18, 15 28 18.jpg"},{img_url:"img/gallery/magazine/Selina_Spotlight_6.jpg"},{img_url:"img/gallery/magazine/\u5434\u78ca 01.jpg"},{img_url:"img/gallery/magazine/\u5434\u78ca 02.jpg"},{img_url:"img/gallery/magazine/\u7121\u984c\u6703\u8a7115580.jpg"},{img_url:"img/gallery/magazine/\u90ed\u91c7\u6d0124p\u5bfc\u51fa-3.jpg"}],d=i(54),p=i.n(d);i(13);a.default=Object(r.g)((function(e){var a=Object(g.useState)("video"),i=Object(l.a)(a,2),r=i[0],t=i[1],o=Object(g.useState)(""),d=Object(l.a)(o,2),_=d[0],y=d[1],h=Object(g.useState)(!0),z=Object(l.a)(h,2),v=z[0],j=z[1],E=s.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,a){return e.sort-a.sort})).map((function(e){return e.value})),w=Object(g.useState)(window.innerWidth),b=Object(l.a)(w,2),f=b[0],x=b[1],N=function(){x(window.innerWidth)};return Object(g.useEffect)((function(){return window.addEventListener("resize",N),function(){return window.removeEventListener("resize",N)}}),[N,f]),n.a.createElement("main",{className:"px-md-4 px-2 py-4"},n.a.createElement("section",{className:"d-flex p-4 justify-content-center  freeze"},n.a.createElement("div",{className:"btn btn-line mx-4 article ".concat("video"===r?"active":""),onClick:function(e){return t("video")}},"VIDEOS"),n.a.createElement("div",{className:"btn btn-line mx-4 article ".concat("video"===r?"":"active"),onClick:function(e){return t("magazine")}},"IMAGES")),"video"===r?n.a.createElement("section",{className:"py-4 video-margin",style:{overflowX:"hidden"}},n.a.createElement("div",{className:"row"},u.map((function(e,a){return n.a.createElement(c,{data:e,setVideo:y,setVideoPlay:j})})))):n.a.createElement("section",{className:"py-4"},f<767?n.a.createElement("div",{className:"d-flex flex-wrap"},E.map((function(e,a){return n.a.createElement(m,{data:e,height:"160px"})}))):n.a.createElement("div",{className:"d-flex flex-wrap"},E.map((function(e,a){return n.a.createElement(m,{data:e,height:"260px"})})))),n.a.createElement("div",{className:"modal fade",id:"exampleModal",onClick:function(){return j(!1)},tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-lg"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"player-wrapper"},n.a.createElement(p.a,{className:"react-player",url:_,width:"100%",height:"100%",playing:v,controls:!0,config:{file:{attributes:{onContextMenu:function(e){return e.preventDefault()},controlsList:"nodownload"}}}}))))))}))}}]);
//# sourceMappingURL=7.e8be9339.chunk.js.map