import{v as A,a as I,b as M,r as c,q as P,j as t,i as w,g as d,ac as n,ab as R,aa as z,p as T,ae as j}from"./index-BIGXeMZu.js";import{c as W,G as D,P as F,A as b,R as V,b as B}from"./RelatedCategories-C2yA0Xrj.js";import{u as H,L as O,G as q}from"./setAppPlayed-CLlN8FqT.js";import{B as U}from"./BottomMarkdown-BHU-5-xy.js";import{S as J}from"./SEOHelmet-CvMrDeOk.js";import K from"./404-BPCKtBjT.js";import{u as Q}from"./useApps-Cf9w8cmL.js";import"./useCurUser-CfKXuSJt.js";import"./Icon-DiavSCz8.js";const g={underPill:"slot-6",topRight:"slot-3",underGame:"slot-5"},X=["slot-1","slot-2","slot-4","slot-7","slot-8","slot-9","slot-10"],Y={width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%"},Z={display:"none"},p=({slotId:u})=>t.jsx("div",{className:"egg-container",children:t.jsx("div",{className:"egg-wrapper",children:t.jsx("div",{id:u,style:Y})})}),ce=()=>{var v,S,x;const C=(v=A().title)==null?void 0:v.toLowerCase(),o=Q(),r=I(M),E=r==null?void 0:r.Apps,_=r==null?void 0:r.Categories,[m,N]=c.useState(typeof window<"u"?window.innerWidth:1024),f=c.useRef(!1);c.useEffect(()=>{const s=()=>N(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),c.useEffect(()=>{if(typeof window>"u"||f.current)return;const s=document.head||document.getElementsByTagName("head")[0];if(!s)return;const a=[];if(!document.getElementById("vm-loader-script")){const i=document.createElement("script");i.id="vm-loader-script",i.innerHTML=`(function () {
  var script = document.createElement("script");
  script.src =
    "https://hb.vntsm.com/v4/live/vms/sites/" +
    window.location.hostname +
    "/index.js";
  script.async = true;
  document.head.appendChild(script);
})();`,a.push(i)}if(!document.getElementById("vm-config-script")){const i=document.createElement("script");i.id="vm-config-script",i.innerHTML=`self.__VM = self.__VM || [];
self.__VM.push(function (admanager, scope) {
  scope.Config.get("desktop_takeover").display("slot-1");
  scope.Config.get("mobile_takeover").display("slot-2");
  scope.Config.get("skyscraper").display("slot-3");
  scope.Config.get("billboard").display("slot-4");
  scope.Config.get("leaderboard").display("slot-5");
  scope.Config.get("double_mpu").display("slot-6");
  scope.Config.get("mpu").display("slot-7");
  scope.Config.get("mobile_banner").display("slot-8");
  scope.Config.get("mobile_mpu").display("slot-9");
  scope.Config.get("video").display("slot-10");
});`,a.push(i)}a.forEach(i=>s.appendChild(i)),a.length&&(f.current=!0)},[]);const L=C||"steal-a-brainrot",e=o==null?void 0:o.find(s=>{var a;return((a=s.title)==null?void 0:a.toLowerCase())===L});H(e);const $=P((e==null?void 0:e.title)||"");if(E||_||!(o!=null&&o.length))return t.jsx(O,{});if(!e)return t.jsx(K,{});const h=new Set(((S=e.categories)==null?void 0:S.split(" "))||[]),y=o.filter(s=>Array.from(h).some(a=>{var i;return((i=s.categories)==null?void 0:i.includes(a))||!1})).slice(0,50),l=Array.from(h)[0],k=w()&&l?W(e,d(!1),l,o):null,G=(x=e==null?void 0:e.categories)==null?void 0:x.split(" ").join(", ");return t.jsxs("div",{children:[t.jsx(J,{seo:{title:`${n(e.title)} Unblocked - ${d(!1)}`,description:(e==null?void 0:e.desc)||`Play ${n(e.title)} unblocked at school! Free online game with no downloads.`,keywords:`${G}, unblocked games, free games, online games, school games, unblocked`,image:e==null?void 0:e.icon},regular:{title:`${d(!1)} Study Set ${n(e.title)}`,description:`Study the ${n(e.title)} flashcard set. Master key concepts with spaced repetition and active recall.`,keywords:"flashcards, study, learning, education, memorization"},structuredData:k||void 0}),t.jsxs(D,{children:[t.jsx(F,{size:"1x1"}),t.jsx(q,{app:e}),m>564&&t.jsx("li",{className:"egg-vertical-under-pill",children:t.jsx(p,{slotId:g.underPill})}),m>=1074&&t.jsx("li",{className:"egg-vertical-top-right",children:t.jsx(p,{slotId:g.topRight})}),m>=834&&t.jsx("li",{className:"egg-horizontal-under-game",children:t.jsx(p,{slotId:g.underGame})}),y.slice(0,2).map(s=>t.jsx(b,{title:s.title,icon:s.icon,id:String(s.id),size:"1x1"},s.id)),y.slice(3).map(s=>t.jsx(b,{title:s.title,icon:s.icon,id:String(s.id),size:"1x1"},s.id)),t.jsx(V,{app:e})]}),t.jsx("div",{className:"vm-hidden-ad-slots","aria-hidden":"true",style:Z,children:X.map(s=>t.jsx("div",{id:s},s))}),w()&&t.jsx("div",{className:"px-4 pb-8",children:t.jsx(U,{rating:j(e).rating,totalRatings:j(e).totalVotes,title:n(e.title),breadcrumb:[{label:d(!1),href:"/"},{label:z(l),href:R(l)},{label:n(e.title),href:T($)}],content:`${e.desc||""}

## Developer

${e.developer_name||"N/A"}

## Controls

${e.controls||"N/A"}

## Devices

${n(e.title)} can be played on: ${e.devices||"N/A"}

${B(e,void 0,o)}`})})]})};export{ce as default};
