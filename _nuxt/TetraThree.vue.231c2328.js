import{S as P,P as A,M as S,T,a as C,H as W,A as L,W as N}from"./three.module.9ac8c37e.js";import{s as Q,P as b,v as B,A as H,a9 as M,aa as x,w,y as R,F as k,L as z,Z as F,_ as G}from"./runtime-core.esm-bundler.75832562.js";var _;const f=typeof window<"u",j=e=>typeof e=="string",U=()=>{};f&&((_=window==null?void 0:window.navigator)!=null&&_.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X(e){return typeof e=="function"?e():H(e)}function V(e){return e}function Y(e){return M()?(x(e),!0):!1}function Z(e,t=!0){Q()?b(e):t?e():B(e)}function q(e){var t;const n=X(e);return(t=n==null?void 0:n.$el)!=null?t:n}const E=f?window:void 0;f&&window.document;f&&window.navigator;f&&window.location;function O(...e){let t,n,o,u;if(j(e[0])||Array.isArray(e[0])?([n,o,u]=e,t=E):[t,n,o,u]=e,!t)return U;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const a=[],s=()=>{a.forEach(i=>i()),a.length=0},r=(i,d,l)=>(i.addEventListener(d,l,u),()=>i.removeEventListener(d,l,u)),c=R(()=>q(t),i=>{s(),i&&a.push(...n.flatMap(d=>o.map(l=>r(i,d,l))))},{immediate:!0,flush:"post"}),p=()=>{c(),s()};return Y(p),p}const h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m="__vueuse_ssr_handlers__";h[m]=h[m]||{};h[m];var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var D=Object.defineProperty,y=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&I(e,n,t[n]);if(y)for(var n of y(t))$.call(t,n)&&I(e,n,t[n]);return e};const ee={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};J({linear:V},ee);function te(e={}){const{window:t=E,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:u=!0,includeScrollbar:a=!0}=e,s=w(n),r=w(o),c=()=>{t&&(a?(s.value=t.innerWidth,r.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};return c(),Z(c),O("resize",c,{passive:!0}),u&&O("orientationchange",c,{passive:!0}),{width:s,height:r}}const oe=k({__name:"TetraThree",setup(e){let t;const n=w(null),{width:o}=te(),u=1,a=new P,s=new A(50,u,.1,1e3);s.position.set(0,0,3.5),a.add(s);const r=new S(new T(1.3,2),new C({color:"#2dd4bf",specular:"#c084fc",shininess:30,fog:!0,wireframe:!0}));r.rotateX(.3),a.add(r);const c=new W(16777147,526368,1);a.add(c);const p=new L(10592682);a.add(p);function i(){o.value<1024?t.setSize(350,350):t.setSize(512,512),t.render(a,s)}function d(){n.value&&(t=new N({canvas:n.value,alpha:!0}),i())}const l=()=>{const v=a.getObjectByName("alien");v&&(v.rotateY(.004),v.rotateX(-2e-4)),r.rotateY(-.002),r.rotateX(.001),r.rotateZ(-.001),i(),requestAnimationFrame(l)};return b(()=>{d(),l()}),(v,ne)=>(z(),F("div",null,[G("canvas",{ref_key:"three",ref:n},null,512)]))}});export{oe as _};