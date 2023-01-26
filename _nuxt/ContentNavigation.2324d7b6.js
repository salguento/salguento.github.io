import{l as R,_ as e,f as m,q as v,p as T,D as V,E as A,F as L,G as P,j as p,H as b,k as y,e as j,d as r,t as N,I as k,h as $,J as B}from"./entry.0a6051c2.js";import{u as w}from"./asyncData.53df7bb9.js";import{h as g,e as x,j as C}from"./query.c5e76b69.js";import{w as O,s as M,u as z,a as H}from"./utils.09c4f586.js";import"./Icon.vue.6666fa5d.js";import"./Footer.e281d06a.js";import"./ContentDoc.d8df6148.js";import"./ContentList.4fa46a08.js";import"./ContentQuery.b0e110c2.js";import"./ContentRenderer.c9623c97.js";import"./ContentRendererMarkdown.c059edbd.js";import"./ContentSlot.283e6707.js";import"./DocumentDrivenEmpty.8188dac3.js";import"./DocumentDrivenNotFound.453fa95d.js";import"./Markdown.3b2d4abc.js";import"./ProseCode.7a0559d7.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./_commonjsHelpers.fed2a411.js";const F=async t=>{var n,l;const{content:i}=R().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};i.locales.length&&((l=(n=o.where)==null?void 0:n.find(u=>u._locale))!=null&&l._locale||(o.where=o.where||[],o.where.push({_locale:i.defaultLocale})));const _=i.experimental.stripQueryParameters?O(`/navigation/${`${g(o)}.${i.integrity}`}/${x(o)}.json`):O(`/navigation/${g(o)}.${i.integrity}.json`);if(M())return(await e(()=>import("./client-db.6f973cbc.js"),["./client-db.6f973cbc.js","./entry.0a6051c2.js","./entry.11ca119c.css","./utils.09c4f586.js","./query.c5e76b69.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(u=>u.generateNavigation))(o);const a=await $fetch(_,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:C(o),previewToken:z("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const q=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const _=v(null),a=T();return V(n=>{if(!a.isHydrating)return o("error",n),_.value=n,!1}),()=>{var n,l;return _.value?(n=i.error)==null?void 0:n.call(i,{error:_}):(l=i.default)==null?void 0:l.call(i)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:o}){const _=v(!1);return A(()=>{_.value=!0}),a=>{var u;if(_.value)return(u=i.default)==null?void 0:u.call(i);const n=i.fallback||i.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return L(d,o,l)}}}),E=new WeakMap;function G(t){if(E.has(t))return E.get(t);const i={...t};return i.render?i.render=(o,..._)=>{var a;if(o.mounted$){const n=t.render(o,..._);return n.children===null||typeof n.children=="string"?P(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):p(n)}else return p("div",(a=o.$attrs)!=null?a:o._.attrs)}:i.template&&(i.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(o,_)=>{var n;const a=v(!1);return A(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,_))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const u=l(...d);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",_.attrs)})},E.set(t,i),i}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),J=m({name:"DevOnly",setup(t,i){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),K=m({name:"ServerPlaceholder",render(){return L("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Z=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=tt({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),b(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function tt(t){const i=v(0),o=v(!1),_=y(()=>1e4/t.duration);let a=null,n=null;function l(){u(),i.value=0,o.value=!0,t.throttle?n=setTimeout(c,t.throttle):c()}function d(){i.value=100,I()}function u(){clearInterval(a),clearTimeout(n),a=null,n=null}function S(D){i.value=Math.min(100,i.value+D)}function I(){u(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function c(){a=setInterval(()=>{S(_.value)},100)}return{progress:i,isLoading:o,start:l,finish:d,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),f=(t,i)=>(o,_)=>(j(()=>t({...rt(o),..._.attrs},_)),()=>{var a,n;return i?(n=(a=_.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:i})=>{var a;const o={...t},_=(((a=i.default)==null?void 0:a.call(i))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return _&&(o.children=_),{noscript:[o]}})}),ot=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),nt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:i})=>{var _,a,n;return{title:((n=(a=(_=i.default)==null?void 0:_.call(i))==null?void 0:a[0])==null?void 0:n.children)||null}})}),_t=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),ut=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:i})=>{var a,n,l;const o={...t},_=(l=(n=(a=i.default)==null?void 0:a.call(i))==null?void 0:n[0])==null?void 0:l.children;return _&&(o.children=_),{style:[o]}})}),lt=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,_;return(_=(o=i.slots).default)==null?void 0:_.call(o)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:ot,Base:nt,Title:at,Meta:_t,Style:ut,Head:lt,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./AboutBtn.31042e43.js"),["./AboutBtn.31042e43.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AboutHeader.94a04d9f.js"),["./AboutHeader.94a04d9f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AboutPopUp.fe39fc28.js"),["./AboutPopUp.fe39fc28.js","./AboutBtn.31042e43.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.2148c986.js","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./AboutHeader.94a04d9f.js","./Footer.e281d06a.js","./transition.15467788.js","./open-closed.f92ddf89.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContactSection.815bfbbd.js"),["./ContactSection.815bfbbd.js","./SectionTitle.f5b567a2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.2148c986.js","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.eab9a0f9.js"),["./FilterBar.eab9a0f9.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Footer.e281d06a.js").then(t=>t.F),["./Footer.e281d06a.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./HeaderSection.e2133fcb.js"),["./HeaderSection.e2133fcb.js","./Three.vue.0cc68275.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LinksMenuNav.4e77de07.js"),["./LinksMenuNav.4e77de07.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoNavbar.b16597fe.js"),["./LogoNavbar.b16597fe.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./MobileMenu.25016ce9.js"),["./MobileMenu.25016ce9.js","./SocialBtn.7122ce10.js","./Icon.2148c986.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./_plugin-vue_export-helper.a1a6add7.js","./disclosure.6dbf46b9.js","./open-closed.f92ddf89.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./MobileMenuButton.5f22238a.js"),["./MobileMenuButton.5f22238a.js","./Icon.2148c986.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./_plugin-vue_export-helper.a1a6add7.js","./disclosure.6dbf46b9.js","./open-closed.f92ddf89.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./NavBar.c62b99bd.js"),["./NavBar.c62b99bd.js","./MobileMenuButton.5f22238a.js","./Icon.2148c986.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./_plugin-vue_export-helper.a1a6add7.js","./disclosure.6dbf46b9.js","./open-closed.f92ddf89.js","./LinksMenuNav.4e77de07.js","./LogoNavbar.b16597fe.js","./SocialBtn.7122ce10.js","./AboutPopUp.fe39fc28.js","./AboutBtn.31042e43.js","./AboutHeader.94a04d9f.js","./Footer.e281d06a.js","./transition.15467788.js","./MobileMenu.25016ce9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PopUp.0ec447a5.js"),["./PopUp.0ec447a5.js","./WorkCard.bd252c2d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.2148c986.js","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./ProjectHeader.2c373312.js","./ProjectLabel.b260e99b.js","./ProjectBody.483db04c.js","./Footer.e281d06a.js","./transition.15467788.js","./open-closed.f92ddf89.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProjectBody.483db04c.js"),["./ProjectBody.483db04c.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProjectHeader.2c373312.js"),["./ProjectHeader.2c373312.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProjectLabel.b260e99b.js"),["./ProjectLabel.b260e99b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SectionTitle.f5b567a2.js"),["./SectionTitle.f5b567a2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SocialBtn.7122ce10.js"),["./SocialBtn.7122ce10.js","./Icon.2148c986.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Three.4dc899bb.js"),["./Three.4dc899bb.js","./Three.vue.0cc68275.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./WorkCard.bd252c2d.js"),["./WorkCard.bd252c2d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./WorkSection.214fc370.js"),["./WorkSection.214fc370.js","./SectionTitle.f5b567a2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css","./PopUp.0ec447a5.js","./WorkCard.bd252c2d.js","./Icon.2148c986.js","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./ProjectHeader.2c373312.js","./ProjectLabel.b260e99b.js","./ProjectBody.483db04c.js","./Footer.e281d06a.js","./transition.15467788.js","./open-closed.f92ddf89.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.d8df6148.js"),["./ContentDoc.d8df6148.js","./entry.0a6051c2.js","./entry.11ca119c.css","./ContentRenderer.c9623c97.js","./ContentRendererMarkdown.c059edbd.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.b0e110c2.js","./asyncData.53df7bb9.js","./query.c5e76b69.js","./utils.09c4f586.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.4fa46a08.js"),["./ContentList.4fa46a08.js","./ContentQuery.b0e110c2.js","./entry.0a6051c2.js","./entry.11ca119c.css","./asyncData.53df7bb9.js","./query.c5e76b69.js","./utils.09c4f586.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.b0e110c2.js"),["./ContentQuery.b0e110c2.js","./entry.0a6051c2.js","./entry.11ca119c.css","./asyncData.53df7bb9.js","./query.c5e76b69.js","./utils.09c4f586.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.c9623c97.js"),["./ContentRenderer.c9623c97.js","./ContentRendererMarkdown.c059edbd.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.c059edbd.js"),["./ContentRendererMarkdown.c059edbd.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.283e6707.js"),["./ContentSlot.283e6707.js","./utils.09c4f586.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.8188dac3.js"),["./DocumentDrivenEmpty.8188dac3.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.453fa95d.js"),["./DocumentDrivenNotFound.453fa95d.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.3b2d4abc.js"),["./Markdown.3b2d4abc.js","./ContentSlot.283e6707.js","./utils.09c4f586.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.e1485572.js"),["./ProseA.e1485572.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.f6795966.js"),["./ProseBlockquote.f6795966.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.7a0559d7.js"),["./ProseCode.7a0559d7.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.1aa925a1.js"),["./ProseCodeInline.1aa925a1.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.d6415a6b.js"),["./ProseEm.d6415a6b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.a6fdc414.js"),["./ProseH1.a6fdc414.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.798635ca.js"),["./ProseH2.798635ca.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.1714c8a4.js"),["./ProseH3.1714c8a4.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.646fe1f6.js"),["./ProseH4.646fe1f6.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.e7aaa12a.js"),["./ProseH5.e7aaa12a.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.1f352709.js"),["./ProseH6.1f352709.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.e2656205.js"),["./ProseHr.e2656205.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.27bbb39a.js"),["./ProseImg.27bbb39a.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.f3d13629.js"),["./ProseLi.f3d13629.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.e7c276f2.js"),["./ProseOl.e7c276f2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.12b939e7.js"),["./ProseP.12b939e7.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.c136580a.js"),["./ProseStrong.c136580a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.2f9c0802.js"),["./ProseTable.2f9c0802.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.4cf426fe.js"),["./ProseTbody.4cf426fe.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.49a1d125.js"),["./ProseTd.49a1d125.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.808b4a24.js"),["./ProseTh.808b4a24.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.28c94507.js"),["./ProseThead.28c94507.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.a38b4ef3.js"),["./ProseTr.a38b4ef3.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.0acc48ec.js"),["./ProseUl.0acc48ec.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.c107d032.js"),["./welcome.c107d032.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.53df7bb9.js","./query.c5e76b69.js","./utils.09c4f586.js","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./Footer.e281d06a.js","./ContentDoc.d8df6148.js","./ContentRenderer.c9623c97.js","./ContentRendererMarkdown.c059edbd.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.b0e110c2.js","./ContentList.4fa46a08.js","./ContentSlot.283e6707.js","./DocumentDrivenEmpty.8188dac3.js","./DocumentDrivenNotFound.453fa95d.js","./Markdown.3b2d4abc.js","./ProseCode.7a0559d7.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Footer.e281d06a.js").then(t=>t.l),["./Footer.e281d06a.js","./entry.0a6051c2.js","./entry.11ca119c.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.0a6051c2.js").then(t=>t.ab),["./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Icon.2148c986.js"),["./Icon.2148c986.js","./entry.0a6051c2.js","./entry.11ca119c.css","./Icon.vue.6666fa5d.js","./Icon.d8d7130f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.0a6051c2.js").then(t=>t.ac),["./entry.0a6051c2.js","./entry.11ca119c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=N(t),o=y(()=>{var a;return typeof((a=i.value)==null?void 0:a.params)=="function"?i.value.params():i.value});if(!o.value&&k("dd-navigation").value){const{navigation:a}=H();return{navigation:a}}const{data:_}=await w(`content-navigation-${g(o.value)}`,()=>F(o.value));return{navigation:_}},render(t){const i=$(),{navigation:o}=t,_=l=>p(B,{to:l._path},()=>l.title),a=(l,d)=>p("ul",d?{"data-level":d}:null,l.map(u=>u.children?p("li",null,[_(u),a(u.children,d+1)]):p("li",null,_(u)))),n=l=>a(l,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):n(o)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};