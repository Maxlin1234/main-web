import{g as x,$ as r}from"./swiper-slide.4759609c.js";function k(a,c,e,o){const g=x();return a.params.createElements&&Object.keys(o).forEach(s=>{if(!e[s]&&e.auto===!0){let i=a.$el.children(`.${o[s]}`)[0];i||(i=g.createElement("div"),i.className=o[s],a.$el.append(i)),e[s]=i,c[s]=i}}),e}function N({swiper:a,extendParams:c,on:e,emit:o}){c({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function g(n){let l;return n&&(l=r(n),a.params.uniqueNavElements&&typeof n=="string"&&l.length>1&&a.$el.find(n).length===1&&(l=a.$el.find(n))),l}function s(n,l){const t=a.params.navigation;n&&n.length>0&&(n[l?"addClass":"removeClass"](t.disabledClass),n[0]&&n[0].tagName==="BUTTON"&&(n[0].disabled=l),a.params.watchOverflow&&a.enabled&&n[a.isLocked?"addClass":"removeClass"](t.lockClass))}function i(){if(a.params.loop)return;const{$nextEl:n,$prevEl:l}=a.navigation;s(l,a.isBeginning&&!a.params.rewind),s(n,a.isEnd&&!a.params.rewind)}function u(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),o("navigationPrev"))}function E(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),o("navigationNext"))}function f(){const n=a.params.navigation;if(a.params.navigation=k(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;const l=g(n.nextEl),t=g(n.prevEl);l&&l.length>0&&l.on("click",E),t&&t.length>0&&t.on("click",u),Object.assign(a.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(l&&l.addClass(n.lockClass),t&&t.addClass(n.lockClass))}function m(){const{$nextEl:n,$prevEl:l}=a.navigation;n&&n.length&&(n.off("click",E),n.removeClass(a.params.navigation.disabledClass)),l&&l.length&&(l.off("click",u),l.removeClass(a.params.navigation.disabledClass))}e("init",()=>{a.params.navigation.enabled===!1?b():(f(),i())}),e("toEdge fromEdge lock unlock",()=>{i()}),e("destroy",()=>{m()}),e("enable disable",()=>{const{$nextEl:n,$prevEl:l}=a.navigation;n&&n[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),l&&l[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),e("click",(n,l)=>{const{$nextEl:t,$prevEl:d}=a.navigation,v=l.target;if(a.params.navigation.hideOnClick&&!r(v).is(d)&&!r(v).is(t)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===v||a.pagination.el.contains(v)))return;let C;t?C=t.hasClass(a.params.navigation.hiddenClass):d&&(C=d.hasClass(a.params.navigation.hiddenClass)),o(C===!0?"navigationShow":"navigationHide"),t&&t.toggleClass(a.params.navigation.hiddenClass),d&&d.toggleClass(a.params.navigation.hiddenClass)}});const h=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),f(),i()},b=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),m()};Object.assign(a.navigation,{enable:h,disable:b,update:i,init:f,destroy:m})}export{N,k as c};
