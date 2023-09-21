import{_ as w}from"./nuxt-link.69418fb9.js";import{h as x,o,c as y,w as l,f as s,u as r,I as V,P,b as n,e as c,F as p,l as g,q as A,a as H,G as _,H as M,J as D,k as u,t as h,j as O}from"./entry.599d8b46.js";import{_ as S,S as B,a as k}from"./swiper-slide.4759609c.js";import{l as I}from"./loadBackgroudImages.6dc4ef71.js";import{N as q}from"./navigation.39505f1e.js";import{P as N}from"./pagination.bac628d0.js";import{d as z}from"./app-data.c5e7f44e.js";const U=""+globalThis.__publicAssetsURL("dark/assets/imgs/background/14.jpg"),W={class:"modal-video-body"},E={class:"modal-video-inner"},T={class:"modal-video-movie-wrap"},F=["src","autoPlay"],Z={__name:"ModalVideo",props:["videoId","channel","isOpen","onClose","autoplay"],setup(t){const{videoId:i,channel:d,isOpen:a,onClose:e,autoplay:m}=t;function v(f){return"//www.youtube.com/embed/"+f}function L(f){return"//player.vimeo.com/video/"+f}let $;return x(()=>{d==="youtube"?$=v(i):d==="vimeo"&&($=L(i))}),(f,b)=>{const j=S;return t.isOpen?(o(),y(j,{key:0},{default:l(()=>[s("div",{class:"modal-video",tabIndex:"-1",role:"dialog","aria-label":"video",onClick:b[1]||(b[1]=(...C)=>t.onClose&&t.onClose(...C))},[s("div",W,[s("div",E,[s("button",{class:"modal-video-close-btn","aria-label":"video",ref:"closeBtn",onClick:b[0]||(b[0]=(...C)=>t.onClose&&t.onClose(...C))},null,512),s("div",T,[s("iframe",{src:r($),allowFullScreen:"allowFullScreen",autoPlay:t.autoplay||!1,tabIndex:"-1"},null,8,F)])])])])]),_:1})):V("",!0)}}},R={class:"crev-header"},G={class:"container mt-80"},Y={class:"row"},X=s("h1",null,[g("High End "),s("br"),g(),s("span",{class:"stroke"},"Creative"),g(" Agency")],-1),J=s("div",{class:"text"},[s("p",null,"Through our years of experience, we've also learned that while each channel has its own set of advantages.")],-1),K=s("span",{class:"text sub-title"},"Watch",-1),Q=s("span",{class:"icon main-colorbg4"},[s("svg",{class:"default",width:"13",height:"20",viewBox:"0 0 13 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0 20L13 10L0 0V20Z"})])],-1),ss=[K,Q],ts={class:"col-lg-3"},es={class:"md-hide"},is=s("div",{class:"circle-button in-bord hover-anim"},[s("div",{class:"rotate-circle fz-30 text-u"},[s("svg",{class:"textcircle",viewBox:"0 0 500 500"},[s("defs",null,[s("path",{id:"textcircle",d:"M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"})]),s("text",null,[s("textPath",{"xlink:href":"#textcircle",textLength:"900"},"Explore More - Explore More -")])])]),s("div",{class:"arrow"},[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])])],-1),as=s("div",{class:"main-img"},[s("img",{src:U,alt:""})],-1),os=["data-background"],Ui={__name:"Header",props:["lightMode"],setup(t){const i=P("isOpen",()=>!1);function d(e){e.preventDefault(),i.value=!0}function a(){i.value=!1}return x(()=>{I()}),(e,m)=>{const v=w;return o(),n(p,null,[s("header",R,[s("div",G,[s("div",Y,[s("div",{class:"col-lg-9"},[s("div",{class:"caption"},[X,s("div",{class:"row mt-30"},[s("div",{class:"col-lg-5 offset-lg-1"},[J,s("div",{class:"crv-butn-vid mt-30"},[s("a",{href:"https://youtu.be/AzwC6umvd1s",class:"vid",onClick:d},ss)])])])])]),s("div",ts,[s("div",es,[c(v,{to:"/dark/page-about",class:"hover-this"},{default:l(()=>[is]),_:1})])])])]),as,s("div",{class:"bg-pattern bg-img","data-background":`/${t.lightMode?"light":"dark"}/assets/imgs/patterns/graph.png`},null,8,os)]),c(r(Z),{channel:"youtube",videoId:"AzwC6umvd1s",isOpen:r(i),onClose:a},null,8,["isOpen"])],64)}}},ns=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),ls=(t,i)=>(d,a)=>(H(()=>t({...ns(d),...a.attrs},a)),()=>{var e,m;return i?(m=(e=a.slots).default)==null?void 0:m.call(e):null}),cs={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ds=A({name:"Link",inheritAttrs:!1,props:{...cs,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:ls(t=>({link:[t]}))}),rs={class:"about-intro section-padding"},gs={class:"container"},hs={class:"row mb-80"},_s=_('<div class="col-lg-5"><div class="sec-lg-head md-mb30"><h6 class="dot-titl-non mb-15 wow fadeIn">OUR BENEFITS</h6><h2 class="d-rotate wow"><span class="rotate-text">Our Team of Dedicated Digital Professionals.</span></h2></div></div>',1),ms={class:"col-lg-5 offset-lg-2 valign"},vs={class:"text"},ps=_('<p class="d-slideup wow"><span class="sideup-text"><span class="up-text">Through our years of experience, we’ve also learned that while</span></span><span class="sideup-text"><span class="up-text">each channel has its own set of advantages, they all work best</span></span><span class="sideup-text"><span class="up-text">when strategically paired with other channels.</span></span></p>',1),us={class:"vew-all mt-50 ml-30 wow fadeIn","data-wow-delay":".8s"},fs=s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),bs={class:"row justify-content-center"},ws={class:"col-lg-6 rest"},$s={class:"imgs md-mb50"},Cs={class:"img1"},ks={class:"o-hidden"},xs={class:"imago wow"},ys=["src"],Ss={class:"img2"},zs={class:"o-hidden"},Ms={class:"imago wow"},Ds=["src"],Bs={class:"col-lg-5 valign rest"},Is={class:"cont"},Ls=s("h2",{class:"d-rotate wow"},[s("span",{class:"rotate-text"},"Unlock Revenue Growth for Your Business.")],-1),js={class:"feat mt-80"},Vs={class:"item-flex d-flex align-items-center mb-50 wow fadeInUp","data-wow-delay":".4s"},Ps={class:"icon-img-50"},As=["src"],Hs=s("div",{class:"cont ml-30"},[s("h6",null,"High Standerd"),s("p",{class:"fz-15"},"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),Os={class:"item-flex d-flex align-items-center wow fadeInUp","data-wow-delay":".8s"},qs={class:"icon-img-50"},Ns=["src"],Us=s("div",{class:"cont ml-30"},[s("h6",null,"Ease of Communication"),s("p",{class:"fz-15"},"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),Wi={__name:"About",props:["lightMode"],setup(t){return(i,d)=>{const a=ds;return o(),n("section",rs,[s("div",gs,[s("div",hs,[_s,s("div",ms,[s("div",vs,[ps,s("div",us,[c(a,{href:"/dark/blog-classic"},{default:l(()=>[g("View All Our News "),fs]),_:1})])])])]),s("div",bs,[s("div",ws,[s("div",$s,[s("div",Cs,[s("div",ks,[s("div",xs,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/about/01.jpg`,alt:""},null,8,ys)])])]),s("div",Ss,[s("div",zs,[s("div",Ms,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/about/1.jpg`,alt:""},null,8,Ds)])])])])]),s("div",Bs,[s("div",Is,[Ls,s("div",js,[s("div",Vs,[s("div",null,[s("div",Ps,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/0.png`,alt:""},null,8,As)])]),Hs]),s("div",Os,[s("div",null,[s("div",qs,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/1.png`,alt:""},null,8,Ns)])]),Us])])])])])])])}}},Ws={},Es={class:"marquee"},Ts=_('<div class="container-fluid rest"><div class="row"><div class="col-12"><div class="main-marq"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div>',1),Fs=[Ts];function Zs(t,i){return o(),n("section",Es,Fs)}const Ei=M(Ws,[["render",Zs]]),Rs=["assets/imgs/brands/01.png","assets/imgs/brands/02.png","assets/imgs/brands/03.png","assets/imgs/brands/04.png","assets/imgs/brands/05.png"],Gs={class:"clients-carso2"},Ys={class:"container"},Xs={class:"row justify-content-center"},Js={class:"col-lg-11"},Ks={class:"swiper5"},Qs={class:"item"},st={class:"img icon-img-100"},tt={href:"#0"},et=["src"],Ti={__name:"Clients",props:["lightMode"],setup(t){const i={slidesPerView:5,loop:!0,spaceBetween:40,breakpoints:{0:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:3},1024:{slidesPerView:5}}};return(d,a)=>{const e=S;return o(),n("div",Gs,[s("div",Ys,[s("div",Xs,[s("div",Js,[s("div",Ks,[c(e,null,{default:l(()=>[c(r(B),D(i,{id:"content-carousel-container-unq-clients",class:"swiper-container"}),{default:l(()=>[(o(!0),n(p,null,u(r(Rs),(m,v)=>(o(),y(r(k),{key:v},{default:l(()=>[s("div",Qs,[s("div",st,[s("a",tt,[s("img",{src:`/${t.lightMode?"light":"dark"}/${m}`,alt:""},null,8,et)])])])]),_:2},1024))),128))]),_:1},16)]),_:1})])])])])])}}},it=[{id:1,image:"assets/imgs/serv-icons/0.png",type:"Product Design",title:"Digital Product Design",text:"Creating a higher spacing and how people move through a unique."},{id:2,image:"assets/imgs/serv-icons/1.png",type:"Customs Services",title:"Branding & Design",text:"Creating a higher spacing and how people move through a unique."},{id:3,image:"assets/imgs/serv-icons/2.png",type:"Product Development",title:"Web Development",text:"Creating a higher spacing and how people move through a unique."}],at={class:"serv-box section-padding pb-0"},ot={class:"container"},nt=_('<div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl-non mb-15 wow fadeIn">Featured Services</h6><h2 class="d-rotate wow"><span class="rotate-text">Our Services</span></h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text wow fadeIn"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div>',1),lt={class:"row"},ct={class:"serv-item lg-pad md-mb50 radius-5 wow fadeIn","data-wow-delay":".5s"},dt={class:"icon-img-50 mb-40"},rt=["src"],gt={class:"mb-10 opacity-7"},ht={class:"mb-15"},_t={class:"fz-14"},mt={class:"crv-more"},vt=s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})],-1),Fi={__name:"Services",props:["lightMode"],setup(t){return(i,d)=>{const a=w;return o(),n("section",at,[s("div",ot,[nt,s("div",lt,[(o(!0),n(p,null,u(r(it),e=>(o(),n("div",{class:"col-lg-4",key:e.id},[s("div",ct,[s("div",dt,[s("img",{src:`/${t.lightMode?"light":"dark"}/${e.image}`,alt:""},null,8,rt)]),s("span",gt,h(e.type),1),s("h6",ht,h(e.title),1),s("p",_t,h(e.text),1),s("div",mt,[c(a,{to:"/dark/page-services",class:"mt-30 ls1 fz-12 text-u"},{default:l(()=>[g(" Read More "),vt]),_:1})])])]))),128))])])])}}},pt=[{id:1,image:"/dark/assets/imgs/portfolio/4/01.jpg",tag:"Web Design",title:"Color Integration",date:2023},{id:2,image:"/dark/assets/imgs/portfolio/4/02.jpg",tag:"Mobile Software",title:"Color Integration",date:2023},{id:3,image:"/dark/assets/imgs/portfolio/4/03.jpg",tag:"Web Design",title:"New Gadgets",date:2023},{id:4,image:"/dark/assets/imgs/portfolio/4/04.jpg",tag:"Web Design",title:"Digital Platform",date:2023},{id:5,image:"/dark/assets/imgs/portfolio/4/05.jpg",tag:"Web Design",title:"Branding Process",date:2023},{id:6,image:"/dark/assets/imgs/portfolio/4/06.jpg",tag:"Web Design",title:"Branding Process",date:2023}],ut={class:"works thecontainer"},ft={class:"item"},bt={class:"img"},wt=["src"],$t={class:"cont d-flex align-items-end"},Ct={class:"ml-auto"},kt=s("a",{href:"#0",class:"link-overlay"},null,-1),Zi={__name:"Works",setup(t){return(i,d)=>(o(),n("section",ut,[(o(!0),n(p,null,u(r(pt),a=>(o(),n("div",{class:"panel mt-30",key:a.id,Vfor:""},[s("div",ft,[s("div",bt,[s("img",{src:a.image,alt:""},null,8,wt)]),s("div",$t,[s("div",null,[s("span",null,h(a.tag),1),s("h5",null,h(a.title),1)]),s("div",Ct,[s("h6",null,h(a.date),1)])]),kt])]))),128))]))}},xt={class:"services-tab revers section-padding pt-0"},yt={class:"container"},St=_('<div class="row mb-80"><div class="col-lg-12"><div class="full-width"><div class="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div>',1),zt={class:"row justify-content-center",id:"tabs"},Mt=s("div",{class:"sec-lg-head mb-80 wow fadeIn"},[s("h6",{class:"dot-titl-non mb-15"},"Services"),s("p",null,"We help you to go online and increase your conversion rate Better design for your digital products. ")],-1),Dt=s("span",null,"01",-1),Bt=s("span",null,"02",-1),It=s("span",null,"03",-1),Lt=s("span",null,"04",-1),jt={class:"col-lg-6"},Vt={class:"serv-tab-cont"},Pt={class:"tab-content current",id:"tabs-1"},At={class:"item"},Ht={class:"img"},Ot=["src"],qt={class:"cont sub-bg"},Nt={class:"icon-img-60 mb-40"},Ut=["src"],Wt=s("div",{class:"text"},[s("p",null,"We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.")],-1),Et=s("span",{class:"mr-15"},"Read More",-1),Tt=s("i",{class:"fas fa-long-arrow-alt-right"},null,-1),Ft=["data-background"],Zt={class:"tab-content",id:"tabs-2"},Rt={class:"item"},Gt={class:"img"},Yt=["src"],Xt={class:"cont sub-bg"},Jt={class:"icon-img-60 mb-40"},Kt=["src"],Qt=s("div",{class:"text"},[s("p",null,"We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.")],-1),se=s("span",{class:"mr-15"},"Read More",-1),te=s("i",{class:"fas fa-long-arrow-alt-right"},null,-1),ee={class:"tab-content",id:"tabs-3"},ie={class:"item"},ae={class:"img"},oe=["src"],ne={class:"cont sub-bg"},le={class:"icon-img-60 mb-40"},ce=["src"],de=s("div",{class:"text"},[s("p",null,"We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.")],-1),re=s("span",{class:"mr-15"},"Read More",-1),ge=s("i",{class:"fas fa-long-arrow-alt-right"},null,-1),he={class:"tab-content",id:"tabs-4"},_e={class:"item"},me={class:"img"},ve=["src"],pe={class:"cont sub-bg"},ue={class:"icon-img-60 mb-40"},fe=["src"],be=s("div",{class:"text"},[s("p",null,"We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.")],-1),we=s("span",{class:"mr-15"},"Read More",-1),$e=s("i",{class:"fas fa-long-arrow-alt-right"},null,-1),Ri={__name:"ServicesTabs",props:["lightMode"],setup(t){function i(d){document.querySelectorAll(".tab-content").forEach(e=>e.style.display="none");const a=d.currentTarget.getAttribute("data-tab");document.querySelector(`.tab-content#${a}`).style.display="block"}return x(()=>{I()}),(d,a)=>{const e=w;return o(),n("section",xt,[s("div",yt,[St,s("div",zt,[s("div",{class:"col-lg-5 valign"},[s("div",{class:"serv-tab-link tab-links full-width md-mb50"},[Mt,s("div",{class:"row"},[s("div",{class:"col-lg-10"},[s("ul",{class:"rest"},[s("li",{class:"item-link current mb-15 pb-15 bord-thin-bottom","data-tab":"tabs-1",onClick:i},[Dt,g(" UI/UX Design ")]),s("li",{class:"item-link mb-15 pb-15 bord-thin-bottom","data-tab":"tabs-2",onClick:i},[Bt,g(" Branding")]),s("li",{class:"item-link mb-15 pb-15 bord-thin-bottom","data-tab":"tabs-3",onClick:i},[It,g(" Development")]),s("li",{class:"item-link","data-tab":"tabs-4",onClick:i},[Lt,g(" Marketing")])])])])])]),s("div",jt,[s("div",Vt,[s("div",Pt,[s("div",At,[s("div",Ht,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/sass-img/serv/4.jpg`,alt:""},null,8,Ot)]),s("div",qt,[s("div",Nt,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/0.png`,alt:""},null,8,Ut)]),Wt,c(e,{to:`/${t.lightMode?"light":"dark"}/page-services`,class:"mt-30"},{default:l(()=>[Et,Tt]),_:1},8,["to"]),s("div",{class:"bg-pattern bg-img","data-background":`/${t.lightMode?"light":"dark"}/assets/imgs/patterns/abstact-BG.png`},null,8,Ft)])])]),s("div",Zt,[s("div",Rt,[s("div",Gt,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/sass-img/serv/2.jpg`,alt:""},null,8,Yt)]),s("div",Xt,[s("div",Jt,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/1.png`,alt:""},null,8,Kt)]),Qt,c(e,{to:`/${t.lightMode?"light":"dark"}/page-services`,class:"mt-30"},{default:l(()=>[se,te]),_:1},8,["to"])])])]),s("div",ee,[s("div",ie,[s("div",ae,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/sass-img/serv/3.jpg`,alt:""},null,8,oe)]),s("div",ne,[s("div",le,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/2.png`,alt:""},null,8,ce)]),de,c(e,{to:`/${t.lightMode?"light":"dark"}/page-services`,class:"mt-30"},{default:l(()=>[re,ge]),_:1},8,["to"])])])]),s("div",he,[s("div",_e,[s("div",me,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/sass-img/serv/1.jpg`,alt:""},null,8,ve)]),s("div",pe,[s("div",ue,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/serv-icons/0.png`,alt:""},null,8,fe)]),be,c(e,{to:`/${t.lightMode?"light":"dark"}/page-services`,class:"mt-30"},{default:l(()=>[we,$e]),_:1},8,["to"])])])])])])])])])}}},Ce={},ke={class:"numbers mt-80 pt-80 bord-thin-top wow fadeIn","data-wow-delay":".4s"},xe=_('<div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">16</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item md-mb50"><h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item sm-mb50"><h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6 d-flex"><div class="item ml-auto"><h2 class="fw-800">12</h2><h6>Awards Winning</h6></div></div></div>',1),ye=[xe];function Se(t,i){return o(),n("div",ke,ye)}const ze=M(Ce,[["render",Se]]),Me={class:"container"},De={class:"row"},Be=_('<div class="col-12"><div class="sec-lg-head mb-80"><div class="position-re text-center"><h6 class="dot-titl-non mb-15 wow fadeIn">Testimonials</h6><h2 class="d-rotate wow"><span class="rotate-text">What People Says?</span></h2></div></div></div>',1),Ie={class:"col-lg-5 position-re wow fadeInUp","data-wow-delay":".4s"},Le={class:"bord-qoute d-flex align-items-center justify-content-center"},je={class:"qoute-icon main-bg"},Ve=["src"],Pe={class:"img-qoute"},Ae=["src"],He={class:"col-lg-7 wow fadeInUp","data-wow-delay":".4s"},Oe={class:"testim-swiper"},qe={class:"item"},Ne=s("div",{class:"cont mb-40"},[s("div",{class:"rate-stars mb-20 fz-16"},[s("span",{class:"rate main-color4"},[s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"})])]),s("h5",{class:"fw-400"},"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.")],-1),Ue={class:"d-flex align-items-center"},We={class:"img circle-60"},Ee=["src"],Te=s("div",{class:"ml-30"},[s("div",{class:"info"},[s("h6",{class:"fz-16"},"Leonard Heiser"),s("span",{class:"opacity-7 sub-title"},"Ceo")])],-1),Fe={class:"item"},Ze=s("div",{class:"cont mb-40"},[s("div",{class:"rate-stars mb-20 fz-16"},[s("span",{class:"rate main-color4"},[s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"})])]),s("h5",{class:"fw-400"},"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.")],-1),Re={class:"d-flex align-items-center"},Ge={class:"img circle-60"},Ye=["src"],Xe=s("div",{class:"ml-30"},[s("div",{class:"info"},[s("h6",{class:"fz-16"},"Leonard Heiser"),s("span",{class:"opacity-7 sub-title"},"Ceo")])],-1),Je=_('<div class="d-flex"><div class="swiper-controls testim-controls arrow-out d-flex ml-auto"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div>',1),Gi={__name:"Testimonials",props:["lightMode"],setup(t){const i={modules:[q,N],slidesPerView:1,loop:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"}};return(d,a)=>{const e=S;return o(),n("section",{class:O(`testim-crv2 section-padding sub-bg ${t.lightMode?"light":""}`)},[s("div",Me,[s("div",De,[Be,s("div",Ie,[s("div",Le,[s("div",je,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/svg-assets/quote.png`,alt:""},null,8,Ve)])]),s("div",Pe,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/about/sq1.jpg`,alt:""},null,8,Ae)])]),s("div",He,[s("div",Oe,[c(e,null,{default:l(()=>[c(r(B),D(i,{id:"content-carousel-container-unq-testim",class:"swiper-container"}),{default:l(()=>[c(r(k),null,{default:l(()=>[s("div",qe,[Ne,s("div",Ue,[s("div",null,[s("div",We,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/testim/1.jpg`,alt:"",class:"circle-img"},null,8,Ee)])]),Te])])]),_:1}),c(r(k),null,{default:l(()=>[s("div",Fe,[Ze,s("div",Re,[s("div",null,[s("div",Ge,[s("img",{src:`/${t.lightMode?"light":"dark"}/assets/imgs/testim/2.jpg`,alt:"",class:"circle-img"},null,8,Ye)])]),Xe])])]),_:1})]),_:1},16)]),_:1})]),Je])]),c(r(ze))])],2)}}},Ke=[{id:1,title:"Free advertising for your online business.",image:"/dark/assets/imgs/sass-img/blog/1.jpg",date:"August 6, 2022",tags:["Marketing","Design"]},{id:2,title:"Business meeting 2023 in San Francisco.",image:"/dark/assets/imgs/sass-img/blog/2.jpg",date:"August 6, 2022",tags:["Marketing","Design"]}],Qe={class:"blog-list-half crev section-padding"},si={class:"container"},ti={class:"sec-lg-head mb-80"},ei={class:"row"},ii=s("div",{class:"col-lg-6"},[s("h6",{class:"dot-titl-non mb-15 wow fadeIn"},"Our Blog"),s("h2",{class:"d-rotate wow"},[s("span",{class:"rotate-text"},"Latest News.")])],-1),ai={class:"col-lg-6 d-flex align-items-center"},oi={class:"full-width d-flex justify-content-end justify-end"},ni={class:"vew-all"},li=s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),ci={class:"row wow fadeIn","data-wow-delay":".4s"},di={class:"item md-mb80"},ri={class:"row rest"},gi={class:"col-md-6"},hi={class:"img"},_i=["src"],mi={class:"col-md-6 valign"},vi={class:"cont"},pi={class:"date fz-12 ls1 text-u opacity-7 mb-15"},ui={class:"tags colorbg mt-15"},Yi={__name:"Blog",setup(t){return(i,d)=>{const a=w;return o(),n("section",Qe,[s("div",si,[s("div",ti,[s("div",ei,[ii,s("div",ai,[s("div",oi,[s("div",ni,[c(a,{to:"/dark/blog-list"},{default:l(()=>[g("View All Our News "),li]),_:1})])])])])]),s("div",ci,[(o(!0),n(p,null,u(r(Ke),e=>(o(),n("div",{class:"col-lg-6",key:e.id},[s("div",di,[s("div",ri,[s("div",gi,[s("div",hi,[s("img",{src:e.image,alt:""},null,8,_i)])]),s("div",mi,[s("div",vi,[s("span",pi,h(e.date),1),s("h5",null,[c(a,{to:"/dark/blog-details"},{default:l(()=>[g(h(e.title),1)]),_:2},1024)]),s("div",ui,[(o(!0),n(p,null,u(e.tags,(m,v)=>(o(),y(a,{to:"/dark/blog-half-img",class:"me-1",key:v},{default:l(()=>[g(h(m),1)]),_:2},1024))),128))])])])])])]))),128))])])])}}},fi={class:"sub-bg"},bi={class:"footer-container"},wi=_('<div class="container pb-80 pt-80 ontop"><div class="call-box text-center mb-80"><h2><a href="page-contact.html">Let&#39;s <span class="stroke"> Discuss</span></a><span class="arrow"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></h2></div><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div>',1),$i={class:"sub-footer pt-40 pb-40 bord-thin-top ontop"},Ci={class:"container"},ki={class:"row"},xi={class:"col-lg-4"},yi={class:"logo"},Si={href:"#"},zi=["src"],Mi={class:"col-lg-8"},Di={class:"copyright d-flex"},Bi={class:"ml-auto"},Ii={class:"fz-13"},Li={class:"underline"},ji=["href"],Xi={__name:"Footer",props:["lightMode"],setup(t){return(i,d)=>(o(),n("footer",fi,[s("div",bi,[wi,s("div",$i,[s("div",Ci,[s("div",ki,[s("div",xi,[s("div",yi,[s("a",Si,[s("img",{src:`/dark/assets/imgs/logo-${t.lightMode?"dark":"light"}.png`,alt:""},null,8,zi)])])]),s("div",Mi,[s("div",Di,[s("div",Bi,[s("p",Ii,[g(" © 2023 Geekfolio is Proudly Powered by "),s("span",Li,[s("a",{href:r(z).author_link,target:"_blank"},h(r(z).author),9,ji)])])])])])])])])])]))}};export{Ui as _,Wi as a,Ei as b,Ti as c,Fi as d,Zi as e,Ri as f,Gi as g,Yi as h,Xi as i};
