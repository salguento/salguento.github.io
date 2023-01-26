import{u as h,w as d,a as g,b as w,e as v,f as C,h as D,i as _,j as s}from"./entry.0a6051c2.js";import S from"./ContentRenderer.c9623c97.js";import $ from"./ContentQuery.b0e110c2.js";import"./ContentRendererMarkdown.c059edbd.js";import"./_commonjsHelpers.fed2a411.js";import"./asyncData.53df7bb9.js";import"./query.c5e76b69.js";import"./utils.09c4f586.js";const a=(f,e=g())=>{const c=h(f);d(()=>h(f),(o=c)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),p=t.title||(o==null?void 0:o.title);p&&(t.title=p),t.meta=[...t.meta||[]];const u=(t==null?void 0:t.description)||(o==null?void 0:o.description);u&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:u});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>v(t))},{immediate:!0})},N=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=D(),{tag:c,excerpt:m,path:o,query:t,head:p}=f,u={...t||{},path:o||(t==null?void 0:t.path)||_(g().path),find:"one"},r=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s($,u,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:y})=>{var l;return p&&a(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:y,excerpt:m,...this.$attrs})}:({data:n})=>(p&&a(n),s(S,{value:n,excerpt:m,tag:c,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{N as default};
