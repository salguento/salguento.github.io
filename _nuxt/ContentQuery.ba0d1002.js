import"./app.config.cd7a789a.js";import{u as q}from"./asyncData.e2950149.js";import{h as g,q as m}from"./query.8a9cce46.js";import{F as S,V as b,G as C,y as k,U as N,h as _}from"./runtime-core.esm-bundler.75832562.js";import"./entry.e46a1f5d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./cookie.43cdc36d.js";import"./query.c3f7607a.js";import"./utils.6ccb8667.js";const G=S({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:n,where:a,sort:o,limit:l,skip:f,locale:s,find:d}=b(i),h=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")});k(()=>i,()=>p(),{deep:!0});const{data:y,refresh:p}=await q(`content-query-${g(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),a.value&&(e=e.where(a.value)),o.value&&(e=e.sort(o.value)),l.value&&(e=e.limit(l.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:h,data:y,refresh:p}},render(i){var v;const t=N(),{data:r,refresh:n,isPartial:a,path:o,only:l,without:f,where:s,sort:d,limit:h,skip:y,locale:p,find:e}=i,u={path:o,only:l,without:f,where:s,sort:d,limit:h,skip:y,locale:p,find:e};if(u.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:a,props:u,...this.$attrs}):((c,w)=>_("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:a})}});export{G as default};