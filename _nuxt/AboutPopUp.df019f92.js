import _ from"./AboutBtn.e9d5fb01.js";import d from"./Icon.6751b69b.js";import m from"./AboutHeader.84610694.js";import b from"./layout.6dc90833.js";import{w as x,L as v,Z as h,a5 as e,O as t,A as o,_ as a,a6 as y}from"./runtime-core.esm-bundler.75832562.js";import{U as w,o as c,G as g,z,f as k}from"./transition.1695ad1c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./app.config.cd7a789a.js";import"./entry.3d106520.js";import"./Icon.vue.df74b995.js";import"./open-closed.a2beb7a6.js";const j=a("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),A={class:"fixed inset-0 h-screen w-screen overflow-y-auto"},B={class:"flex h-full min-h-full w-full items-center justify-center pt-16 text-center lg:py-16"},C={props:{about:{type:Object,required:!0}}},Z=Object.assign(C,{__name:"AboutPopUp",setup(l){const n=x(!1);function s(){n.value=!1}function r(){n.value=!0}return(O,N)=>{const i=_,u=d,f=m,p=b;return v(),h(y,null,[e(i,{btn:l.about.btn,onClick:r},null,8,["btn"]),e(o(k),{appear:"",show:n.value,as:"template",class:"z-50"},{default:t(()=>[e(o(w),{as:"div",class:"relative z-10",onClose:s},{default:t(()=>[e(o(c),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[j]),_:1}),a("div",A,[a("div",B,[e(o(c),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:t(()=>[e(o(g),{class:"h-full w-full max-w-6xl transform overflow-hidden rounded-2xl border-2 border-zinc-700 bg-black text-left align-middle shadow-xl transition-all"},{default:t(()=>[e(o(z),{as:"div",class:"fixed flex w-full justify-end p-2"},{default:t(()=>[a("button",{class:"rounded-full p-1 hover:bg-zinc-900",onClick:s},[e(u,{name:"ic:round-close",class:"h-8 w-8 text-zinc-400 hover:text-zinc-50"})])]),_:1}),e(p,{name:"project"},{default:t(()=>[e(f,{about:l.about.body},null,8,["about"])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}});export{Z as default};