import{_}from"./nuxt-link.69418fb9.js";import{o as i,b as a,f as t,F as l,k as c,u as d,t as n,e as p,w as k,l as f}from"./entry.599d8b46.js";const u=[{id:1,number:"01",type:"Design",title:"Everybody sunshine",image:"/dark/assets/imgs/works/full/1.jpg"},{id:2,number:"02",type:"Branding",title:"Who Dares Wins",image:"/dark/assets/imgs/works/full/2.jpg"},{id:3,number:"03",type:"Branding",title:"Fountain Studio",image:"/dark/assets/imgs/works/full/3.jpg"},{id:4,number:"04",type:"Photography",title:"April willow flower",image:"/dark/assets/imgs/works/full/4.jpg"},{id:5,number:"05",type:"Design",title:"Step Over",image:"/dark/assets/imgs/works/full/1.jpg"},{id:6,number:"06",type:"ART Design",title:"Snowy Zero",image:"/dark/assets/imgs/works/full/2.jpg"},{id:7,number:"07",type:"Design",title:"Fun Bike",image:"/dark/assets/imgs/works/full/3.jpg"},{id:8,number:"08",type:"Apps",title:"Mobile Apps",image:"/dark/assets/imgs/works/full/4.jpg"}],h={class:"inter-links-center horizontal section-padding d-flex align-items-center"},y={class:"container-xxl"},b={class:"row justify-content-center"},v={class:"col-lg-10"},w={class:"links-text d-flex justify-content-center"},x={class:"rest"},L=["data-tab"],j={class:"num"},A={class:"tag sub-title"},S={class:"text"},E={class:"links-img"},q=["id"],B=["src"],F={__name:"InteractiveCenterHorizontal",setup(D){function m(e){var o=e.currentTarget.getAttribute("data-tab");if(document.querySelectorAll(".links-text li").forEach(r=>{r.classList.remove("current"),r.classList.add("no-active")}),e.currentTarget.classList.add("current"),e.currentTarget.classList.remove("no-active"),document.querySelectorAll(".links-img .img").forEach(r=>r.classList.remove("current")),document.querySelector("#"+o).classList.add("current"),e.currentTarget.classList.contains("current"))return!1}function g(){document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-img .img").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("no-active"))}return(e,o)=>{const r=_;return i(),a("section",h,[t("div",y,[t("div",b,[t("div",v,[t("div",w,[t("ul",x,[(i(!0),a(l,null,c(d(u),s=>(i(),a("li",{"data-tab":`tab-${s.id}`,key:s.id,onMouseenter:m,onMouseleave:g},[t("h2",null,[t("span",j,n(s.number)+".",1),p(r,{to:"/dark/project-details1"},{default:k(()=>[t("span",A,n(s.type),1),f(),t("span",S,n(s.title),1)]),_:2},1024)])],40,L))),128))])])])])]),t("div",E,[(i(!0),a(l,null,c(d(u),s=>(i(),a("div",{class:"img",id:`tab-${s.id}`,key:s.id},[t("img",{src:s.image,alt:""},null,8,B)],8,q))),128))])])}}};export{F as _};
