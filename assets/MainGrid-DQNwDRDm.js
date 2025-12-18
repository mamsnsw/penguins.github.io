import{r as w,a as S,b as j,j as o,p as r,i as b,g as m}from"./index-BIGXeMZu.js";import{g as P,G as $,P as G,A as D,R as I}from"./RelatedCategories-C2yA0Xrj.js";import{B as L}from"./BottomMarkdown-BHU-5-xy.js";import{L as E}from"./LoadMainGrid-6pE7NYTP.js";import{S as R}from"./SEOHelmet-CvMrDeOk.js";import{u as B}from"./useApps-Cf9w8cmL.js";import"./useCurUser-CfKXuSJt.js";import"./Icon-DiavSCz8.js";function F(){const[t,g]=w.useState(!1);return w.useEffect(()=>{const i=()=>{g(window.innerWidth<800)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t}const K=()=>{var p;let t=B();const g=(p=S(j))==null?void 0:p.Apps,i=F();if(t=t==null?void 0:t.filter(s=>s.is_listed!==!1),g||!(t!=null&&t.length))return o.jsx(E,{});const x=(s=>{if(!s||s.length===0)return[];const c=[...s.map(e=>({...e,upvotes:(e.upvotes||0)+(e.is_featured?1e5:0)+(e.game_score||0)}))].sort((e,z)=>(z.upvotes||0)-(e.upvotes||0)),y=c.slice(0,3).map(e=>({...e,size:i?"2x2":"3x3"})),A=c.slice(3,9).map(e=>({...e,size:i?"1x1":"2x2"})),a=[...y,...A],u=c.slice(9).map(e=>({...e,size:"1x1"})),f=Math.min(100,c.length),d=[],h=new Set;h.add(0);const M=Math.floor((f-1)/(a.length-1));for(let e=1;e<a.length;e++)h.add(e*M);let n=0,l=0;for(let e=0;e<f;e++)h.has(e)&&n<a.length?(d.push(a[n]),n++):l<u.length&&(d.push(u[l]),l++);for(;n<a.length;)d.push(a[n]),n++;for(;l<u.length;)d.push(u[l]),l++;return d})(t||[]),v=`##### About DuckMath
  
  # Unblocked Games

DuckMath hosts a curated library of actually working unblocked games in school with fast loads and minimal friction. Play instantly with no downloads or logins. Join 150,000 daily active awesome users today.

### Featured games you can play here

- [Steal A Brainrot](${r("steal-a-brainrot")})
- [Minecraft](${r("minecraft")})
- [Ragdoll Archers](${r("ragdoll-archers")})
- [Grow A Garden](${r("grow-a-garden")})
- [Race Survival Arena King](${r("race-survival-arena-king")})
- [Undertale Yellow](${r("undertale-yellow")})
- [99 Nights In The Forest](${r("99-nights-in-the-forest")})

Browse the [New](/new) page or explore the homepage to discover more.

### Popular categories

- **[Roblox](/roblox)**
- **[Multiplayer](/multiplayer)**
- **[2D](/2d)**
- **[Flash](/flash)**
- **[Horror](/horror)**
- **[Platformer](/platformer)**
- **[Puzzle](/puzzle)**
- **[Fighting](/fighting)**
- **[Sports](/sports)**
- **[Driving](/driving)**

### What is DuckMath?

DuckMath is a simple, fast, student run unblocked games website. We prioritize stable, lightweight embeds, helpful controls info, and quick links so you can get into a game and have fun. Our goal is to make it easy for students to find and play unblocked games at school.`,k=b()?P(t,`${m(!1)} - Free Unblocked Games Online`,"Play hundreds of unblocked games free online! No downloads needed. Access your favorite games at school with our collection of unblocked games.",20):null;return o.jsxs("div",{children:[o.jsx(R,{seo:{title:`${m(!1)} Unblocked Games`,description:"Play hundreds of unblocked games free online! No downloads needed. Access your favorite games at school with our collection of unblocked games.",keywords:"unblocked games, free games, school games, online games, play games"},regular:{title:`${m(!1)}`,description:"Browse our collection of study flashcard sets. Learn smarter with spaced repetition and interactive study tools.",keywords:"flashcards, study sets, learning, education, quizlet"},structuredData:k||void 0}),o.jsxs($,{children:[o.jsx(G,{size:"1x1"}),x.map(s=>o.jsx(D,{title:s.title,icon:s.icon,id:String(s.id),size:s.size,videoUrl:s.video_link},s.id)),o.jsx(I,{})]}),b()&&o.jsx("div",{className:"px-4 pb-8",children:o.jsx(L,{content:v})})]})};export{K as default};
