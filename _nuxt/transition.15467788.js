import{o as x,u as O,P as $,t as U,p as De,l as Y,R as me,a as Ge,f as We,O as q,c as _e,w as Ve}from"./open-closed.f92ddf89.js";import{a2 as A,q as m,k as b,f as P,j as S,$ as ze,E as T,w as oe,x as j,a3 as M,O as R,a6 as Ye,S as Ke,u as Qe,b as Xe}from"./entry.0a6051c2.js";const ie=typeof window>"u"||typeof document>"u";function K(e){if(ie)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}let ge=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var N=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(N||{}),Oe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Oe||{}),Je=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Je||{});function Ze(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ge)).sort((t,l)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}var xe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(xe||{});function et(e,t=0){var l;return e===((l=K(e))==null?void 0:l.body)?!1:O(t,{[0](){return e.matches(ge)},[1](){let r=e;for(;r!==null;){if(r.matches(ge))return!0;r=r.parentElement}return!1}})}function z(e){e==null||e.focus({preventScroll:!0})}let tt=["textarea","input"].join(",");function nt(e){var t,l;return(l=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,tt))!=null?l:!1}function rt(e,t=l=>l){return e.slice().sort((l,r)=>{let a=t(l),n=t(r);if(a===null||n===null)return 0;let o=a.compareDocumentPosition(n);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function le(e,t,{sorted:l=!0,relativeTo:r=null,skipElements:a=[]}={}){var n;let o=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?n:document,i=Array.isArray(e)?l?rt(e):e:Ze(e);a.length>0&&(i=i.filter(f=>!a.includes(f))),r=r!=null?r:o.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,v=i.length,p;do{if(c>=v||c+v<=0)return 0;let f=s+c;if(t&16)f=(f+v)%v;else{if(f<0)return 3;if(f>=v)return 1}p=i[f],p==null||p.focus(d),c+=u}while(p!==o.activeElement);return t&6&&nt(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function ve(e,t,l){ie||A(r=>{document.addEventListener(e,t,l),r(()=>document.removeEventListener(e,t,l))})}function lt(e,t,l=b(()=>!0)){function r(n,o){if(!l.value||n.defaultPrevented)return;let i=o(n);if(i===null||!i.getRootNode().contains(i))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:x(s);if(d!=null&&d.contains(i)||n.composed&&n.composedPath().includes(d))return}return!et(i,xe.Loose)&&i.tabIndex!==-1&&n.preventDefault(),t(n,i)}let a=m(null);ve("mousedown",n=>{var o,i;l.value&&(a.value=((i=(o=n.composedPath)==null?void 0:o.call(n))==null?void 0:i[0])||n.target)},!0),ve("click",n=>{!a.value||(r(n,()=>a.value),a.value=null)},!0),ve("blur",n=>r(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ae=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ae||{});let he=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{let{features:r,...a}=e,n={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:n,theirProps:a,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function at(e,t,l){ie||A(r=>{window.addEventListener(e,t,l),r(()=>window.removeEventListener(e,t,l))})}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function ot(){let e=m(0);return at("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function ke(e,t,l,r){ie||A(a=>{e=e!=null?e:window,e.addEventListener(t,l,r),a(()=>e.removeEventListener(t,l,r))})}function it(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var Re=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Re||{});let J=Object.assign(P({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let a=m(null);r({el:a,$el:a});let n=b(()=>K(a));ut({ownerDocument:n},b(()=>Boolean(e.features&16)));let o=st({ownerDocument:n,container:a,initialFocus:b(()=>e.initialFocus)},b(()=>Boolean(e.features&2)));dt({ownerDocument:n,container:a,containers:e.containers,previousActiveElement:o},b(()=>Boolean(e.features&8)));let i=ot();function u(v){let p=x(a);!p||(f=>f())(()=>{O(i.value,{[Z.Forwards]:()=>le(p,N.First,{skipElements:[v.relatedTarget]}),[Z.Backwards]:()=>le(p,N.Last,{skipElements:[v.relatedTarget]})})})}let s=m(!1);function d(v){v.key==="Tab"&&(s.value=!0,requestAnimationFrame(()=>{s.value=!1}))}function c(v){var p;let f=new Set((p=e.containers)==null?void 0:p.value);f.add(a);let D=v.relatedTarget;!D||D.dataset.headlessuiFocusGuard!=="true"&&(Ce(f,D)||(s.value?le(x(a),O(i.value,{[Z.Forwards]:()=>N.Next,[Z.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&z(v.target)))}return()=>{let v={},p={ref:a,onKeydown:d,onFocusout:c},{features:f,initialFocus:D,containers:I,...Q}=e;return S(ze,[Boolean(f&4)&&S(he,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ae.Focusable}),$({ourProps:p,theirProps:{...t,...Q},slot:v,attrs:t,slots:l,name:"FocusTrap"}),Boolean(f&4)&&S(he,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ae.Focusable})])}}}),{features:Re});function ut({ownerDocument:e},t){let l=m(null);function r(){var n;l.value||(l.value=(n=e.value)==null?void 0:n.activeElement)}function a(){!l.value||(z(l.value),l.value=null)}T(()=>{oe(t,(n,o)=>{n!==o&&(n?r():a())},{immediate:!0})}),j(a)}function st({ownerDocument:e,container:t,initialFocus:l},r){let a=m(null),n=m(!1);return T(()=>n.value=!0),j(()=>n.value=!1),T(()=>{oe([t,l,r],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!r.value)return;let u=x(t);!u||it(()=>{var s,d;if(!n.value)return;let c=x(l),v=(s=e.value)==null?void 0:s.activeElement;if(c){if(c===v){a.value=v;return}}else if(u.contains(v)){a.value=v;return}c?z(c):le(u,N.First|N.NoScroll)===Oe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function dt({ownerDocument:e,container:t,containers:l,previousActiveElement:r},a){var n;ke((n=e.value)==null?void 0:n.defaultView,"focus",o=>{if(!a.value)return;let i=new Set(l==null?void 0:l.value);i.add(t);let u=r.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?Ce(i,s)?(r.value=s,z(s)):(o.preventDefault(),o.stopPropagation(),z(u)):z(r.value)},!0)}function Ce(e,t){var l;for(let r of e)if((l=r.value)!=null&&l.contains(t))return!0;return!1}let $e="body > *",V=new Set,B=new Map;function Pe(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Le(e){let t=B.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function ft(e,t=m(!0)){A(l=>{if(!t.value||!e.value)return;let r=e.value,a=K(r);if(a){V.add(r);for(let n of B.keys())n.contains(r)&&(Le(n),B.delete(n));a.querySelectorAll($e).forEach(n=>{if(n instanceof HTMLElement){for(let o of V)if(n.contains(o))return;V.size===1&&(B.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),Pe(n))}}),l(()=>{if(V.delete(r),V.size>0)a.querySelectorAll($e).forEach(n=>{if(n instanceof HTMLElement&&!B.has(n)){for(let o of V)if(n.contains(o))return;B.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),Pe(n)}});else for(let n of B.keys())Le(n),B.delete(n)})}})}let Be=Symbol("ForcePortalRootContext");function ct(){return R(Be,!1)}let be=P({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return M(Be,e.force),()=>{let{force:r,...a}=e;return $({theirProps:a,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}});function vt(e){let t=K(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let Ne=P({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let r=m(null),a=b(()=>K(r)),n=ct(),o=R(Me,null),i=m(n===!0||o==null?vt(r.value):o.resolveTarget());return A(()=>{n||o!=null&&(i.value=o.resolveTarget())}),j(()=>{var u,s;let d=(u=a.value)==null?void 0:u.getElementById("headlessui-portal-root");!d||i.value===d&&i.value.children.length<=0&&((s=i.value.parentElement)==null||s.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:r,"data-headlessui-portal":""};return S(Ye,{to:i.value},$({ourProps:u,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),Me=Symbol("PortalGroupContext"),pt=P({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let r=Ke({resolveTarget(){return e.target}});return M(Me,r),()=>{let{target:a,...n}=e;return $({theirProps:n,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}}),je=Symbol("StackContext");var we=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(we||{});function mt(){return R(je,()=>{})}function gt({type:e,enabled:t,element:l,onUpdate:r}){let a=mt();function n(...o){r==null||r(...o),a(...o)}T(()=>{oe(t,(o,i)=>{o?n(0,e,l):i===!0&&n(1,e,l)},{immediate:!0,flush:"sync"})}),j(()=>{t.value&&n(1,e,l)}),M(je,n)}let Ie=Symbol("DescriptionContext");function ht(){let e=R(Ie,null);if(e===null)throw new Error("Missing parent");return e}function bt({slot:e=m({}),name:t="Description",props:l={}}={}){let r=m([]);function a(n){return r.value.push(n),()=>{let o=r.value.indexOf(n);o!==-1&&r.value.splice(o,1)}}return M(Ie,{register:a,slot:e,name:t,props:l}),b(()=>r.value.length>0?r.value.join(" "):void 0)}let kt=P({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${U()}`}},setup(e,{attrs:t,slots:l}){let r=ht();return T(()=>j(r.register(e.id))),()=>{let{name:a="Description",slot:n=m({}),props:o={}}=r,{id:i,...u}=e,s={...Object.entries(o).reduce((d,[c,v])=>Object.assign(d,{[c]:Qe(v)}),{}),id:i};return $({ourProps:s,theirProps:u,slot:n.value,attrs:t,slots:l,name:a})}}});function Se(){let e=[],t=[],l={enqueue(r){t.push(r)},addEventListener(r,a,n,o){return r.addEventListener(a,n,o),l.add(()=>r.removeEventListener(a,n,o))},requestAnimationFrame(...r){let a=requestAnimationFrame(...r);l.add(()=>cancelAnimationFrame(a))},nextFrame(...r){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...r)})},setTimeout(...r){let a=setTimeout(...r);l.add(()=>clearTimeout(a))},add(r){e.push(r)},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()}};return l}function wt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{});let ye=Symbol("DialogContext");function ee(e){let t=R(ye,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ee),l}return t}let ne="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Rt=P({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ne},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${U()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:r,expose:a}){var n;let o=m(!1);T(()=>{o.value=!0});let i=m(0),u=De(),s=b(()=>e.open===ne&&u!==null?O(u.value,{[Y.Open]:!0,[Y.Closed]:!1}):e.open),d=m(new Set),c=m(null),v=m(null),p=b(()=>K(c));if(a({el:c,$el:c}),!(e.open!==ne||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ne?void 0:e.open}`);let f=b(()=>o.value&&s.value?0:1),D=b(()=>f.value===0),I=b(()=>i.value>1),Q=R(ye,null)!==null,se=b(()=>I.value?"parent":"leaf");ft(c,b(()=>I.value?D.value:!1)),gt({type:"Dialog",enabled:b(()=>f.value===0),element:c,onUpdate:(w,g,h)=>{if(g==="Dialog")return O(w,{[we.Add](){d.value.add(h),i.value+=1},[we.Remove](){d.value.delete(h),i.value-=1}})}});let te=bt({name:"DialogDescription",slot:b(()=>({open:s.value}))}),G=m(null),k={titleId:G,panelRef:m(null),dialogState:f,setTitleId(w){G.value!==w&&(G.value=w)},close(){t("close",!1)}};M(ye,k);function X(){var w,g,h;return[...Array.from((g=(w=p.value)==null?void 0:w.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?g:[]).filter(y=>!(!(y instanceof HTMLElement)||y.contains(x(v))||k.panelRef.value&&y.contains(k.panelRef.value))),(h=k.panelRef.value)!=null?h:c.value]}return lt(()=>X(),(w,g)=>{k.close(),Xe(()=>g==null?void 0:g.focus())},b(()=>f.value===0&&!I.value)),ke((n=p.value)==null?void 0:n.defaultView,"keydown",w=>{w.defaultPrevented||w.key===Ge.Escape&&f.value===0&&(I.value||(w.preventDefault(),w.stopPropagation(),k.close()))}),A(w=>{var g;if(f.value!==0||Q)return;let h=p.value;if(!h)return;let y=Se(),E=window.pageYOffset;function W(L,F,C){let fe=L.style.getPropertyValue(F);return Object.assign(L.style,{[F]:C}),y.add(()=>{Object.assign(L.style,{[F]:fe})})}let _=h==null?void 0:h.documentElement,de=((g=h.defaultView)!=null?g:window).innerWidth-_.clientWidth;if(W(_,"overflow","hidden"),de>0){let L=_.clientWidth-_.offsetWidth,F=de-L;W(_,"paddingRight",`${F}px`)}if(wt()){W(h.body,"marginTop",`-${E}px`),window.scrollTo(0,0);let L=null;y.addEventListener(h,"click",F=>{if(F.target instanceof HTMLElement)try{let C=F.target.closest("a");if(!C)return;let{hash:fe}=new URL(C.href),ce=h.querySelector(fe);ce&&!X().some(Ue=>Ue.contains(ce))&&(L=ce)}catch{}},!0),y.addEventListener(h,"touchmove",F=>{F.target instanceof HTMLElement&&!X().some(C=>C.contains(F.target))&&F.preventDefault()},{passive:!1}),y.add(()=>{window.scrollTo(0,window.pageYOffset+E),L&&L.isConnected&&(L.scrollIntoView({block:"nearest"}),L=null)})}w(y.dispose)}),A(w=>{if(f.value!==0)return;let g=x(c);if(!g)return;let h=new IntersectionObserver(y=>{for(let E of y)E.boundingClientRect.x===0&&E.boundingClientRect.y===0&&E.boundingClientRect.width===0&&E.boundingClientRect.height===0&&k.close()});h.observe(g),w(()=>h.disconnect())}),()=>{let{id:w,open:g,initialFocus:h,...y}=e,E={...l,ref:c,id:w,role:"dialog","aria-modal":f.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":te.value},W={open:f.value===0};return S(be,{force:!0},()=>[S(Ne,()=>S(pt,{target:c.value},()=>S(be,{force:!1},()=>S(J,{initialFocus:h,containers:d,features:D.value?O(se.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>$({ourProps:E,theirProps:y,slot:W,attrs:l,slots:r,visible:f.value===0,features:me.RenderStrategy|me.Static,name:"Dialog"}))))),S(he,{features:ae.Hidden,ref:v})])}}});P({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${U()}`}},setup(e,{attrs:t,slots:l}){let r=ee("DialogOverlay");function a(n){n.target===n.currentTarget&&(n.preventDefault(),n.stopPropagation(),r.close())}return()=>{let{id:n,...o}=e;return $({ourProps:{id:n,"aria-hidden":!0,onClick:a},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogOverlay"})}}});P({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${U()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let a=ee("DialogBackdrop"),n=m(null);return r({el:n,$el:n}),T(()=>{if(a.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:o,...i}=e,u={id:o,ref:n,"aria-hidden":!0};return S(be,{force:!0},()=>S(Ne,()=>$({ourProps:u,theirProps:{...t,...i},slot:{open:a.dialogState.value===0},attrs:t,slots:l,name:"DialogBackdrop"})))}}});let Ct=P({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${U()}`}},setup(e,{attrs:t,slots:l,expose:r}){let a=ee("DialogPanel");r({el:a.panelRef,$el:a.panelRef});function n(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,u={id:o,ref:a.panelRef,onClick:n};return $({ourProps:u,theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}}),Bt=P({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${U()}`}},setup(e,{attrs:t,slots:l}){let r=ee("DialogTitle");return T(()=>{r.setTitleId(e.id),j(()=>r.setTitleId(null))}),()=>{let{id:a,...n}=e;return $({ourProps:{id:a},theirProps:n,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});function Et(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function pe(e,...t){e&&t.length>0&&e.classList.add(...t)}function re(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ee=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ee||{});function St(e,t){let l=Se();if(!e)return l.dispose;let{transitionDuration:r,transitionDelay:a}=getComputedStyle(e),[n,o]=[r,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return n!==0?l.setTimeout(()=>t("finished"),n+o):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Ae(e,t,l,r,a,n){let o=Se(),i=n!==void 0?Et(n):()=>{};return re(e,...a),pe(e,...t,...l),o.nextFrame(()=>{re(e,...l),pe(e,...r),o.add(St(e,u=>(re(e,...r,...t),pe(e,...a),i(u))))}),o.add(()=>re(e,...t,...l,...r,...a)),o.add(()=>i("cancelled")),o.dispose}function H(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Fe=Symbol("TransitionContext");var Ft=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ft||{});function Tt(){return R(Fe,null)!==null}function $t(){let e=R(Fe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Pt(){let e=R(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Te=Symbol("NestingContext");function ue(e){return"children"in e?ue(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function He(e){let t=m([]),l=m(!1);T(()=>l.value=!0),j(()=>l.value=!1);function r(n,o=q.Hidden){let i=t.value.findIndex(({id:u})=>u===n);i!==-1&&(O(o,{[q.Unmount](){t.value.splice(i,1)},[q.Hidden](){t.value[i].state="hidden"}}),!ue(t)&&l.value&&(e==null||e()))}function a(n){let o=t.value.find(({id:i})=>i===n);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:n,state:"visible"}),()=>r(n,q.Unmount)}return{children:t,register:a,unregister:r}}let qe=me.RenderStrategy,Lt=P({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:r,expose:a}){if(!Tt()&&We())return()=>S(Dt,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},r);let n=m(null),o=m("visible"),i=b(()=>e.unmount?q.Unmount:q.Hidden);a({el:n,$el:n});let{show:u,appear:s}=$t(),{register:d,unregister:c}=Pt(),v={value:!0},p=U(),f={value:!1},D=He(()=>{f.value||(o.value="hidden",c(p),t("afterLeave"))});T(()=>{let g=d(p);j(g)}),A(()=>{if(i.value===q.Hidden&&!!p){if(u&&o.value!=="visible"){o.value="visible";return}O(o.value,{hidden:()=>c(p),visible:()=>d(p)})}});let I=H(e.enter),Q=H(e.enterFrom),se=H(e.enterTo),te=H(e.entered),G=H(e.leave),k=H(e.leaveFrom),X=H(e.leaveTo);T(()=>{A(()=>{if(o.value==="visible"){let g=x(n);if(g instanceof Comment&&g.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function w(g){let h=v.value&&!s.value,y=x(n);!y||!(y instanceof HTMLElement)||h||(f.value=!0,u.value&&t("beforeEnter"),u.value||t("beforeLeave"),g(u.value?Ae(y,I,Q,se,te,E=>{f.value=!1,E===Ee.Finished&&t("afterEnter")}):Ae(y,G,k,X,te,E=>{f.value=!1,E===Ee.Finished&&(ue(D)||(o.value="hidden",c(p),t("afterLeave")))})))}return T(()=>{oe([u],(g,h,y)=>{w(y),v.value=!1},{immediate:!0})}),M(Te,D),_e(b(()=>O(o.value,{visible:Y.Open,hidden:Y.Closed}))),()=>{let{appear:g,show:h,enter:y,enterFrom:E,enterTo:W,entered:_,leave:de,leaveFrom:L,leaveTo:F,...C}=e;return $({theirProps:C,ourProps:{ref:n},slot:{},slots:r,attrs:l,features:qe,visible:o.value==="visible",name:"TransitionChild"})}}}),At=Lt,Dt=P({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:r}){let a=De(),n=b(()=>e.show===null&&a!==null?O(a.value,{[Y.Open]:!0,[Y.Closed]:!1}):e.show);A(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=m(n.value?"visible":"hidden"),i=He(()=>{o.value="hidden"}),u=m(!0),s={show:n,appear:b(()=>e.appear||!u.value)};return T(()=>{A(()=>{u.value=!1,n.value?o.value="visible":ue(i)||(o.value="hidden")})}),M(Te,i),M(Fe,s),()=>{let d=Ve(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return $({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[S(At,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...c,...d},r.default)]},attrs:{},features:qe,visible:o.value==="visible",name:"Transition"})}}});export{Ct as G,Rt as U,Dt as f,Lt as o,Bt as z};
