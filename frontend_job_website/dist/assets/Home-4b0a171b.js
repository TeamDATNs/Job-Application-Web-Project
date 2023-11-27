import{r as c,u as U,_ as J,a as K,o as W,j as e,b,T as Q,d as Z,c as ee,g as V,m as x,B as se,E as te,e as F,D as ae,f as ne,h as le,i as ie,k as re,l as P,n as oe,p as ce,N as me,F as de,q as xe,s as ue,t as pe}from"./index-7aecd9f1.js";const fe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ge(s,a,l){const t=a.getBoundingClientRect(),i=l&&l.getBoundingClientRect(),d=W(a);let r;if(a.fakeTransform)r=a.fakeTransform;else{const o=d.getComputedStyle(a);r=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}let h=0,u=0;if(r&&r!=="none"&&typeof r=="string"){const o=r.split("(")[1].split(")")[0].split(",");h=parseInt(o[4],10),u=parseInt(o[5],10)}return s==="left"?i?`translateX(${i.right+h-t.left}px)`:`translateX(${d.innerWidth+h-t.left}px)`:s==="right"?i?`translateX(-${t.right-i.left-h}px)`:`translateX(-${t.left+t.width-h}px)`:s==="up"?i?`translateY(${i.bottom+u-t.top}px)`:`translateY(${d.innerHeight+u-t.top}px)`:i?`translateY(-${t.top-i.top+t.height-u}px)`:`translateY(-${t.top+t.height-u}px)`}function he(s){return typeof s=="function"?s():s}function v(s,a,l){const t=he(l),i=ge(s,a,t);i&&(a.style.webkitTransform=i,a.style.transform=i)}const je=c.forwardRef(function(a,l){const t=U(),i={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},d={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:r,appear:h=!0,children:u,container:o,direction:p="down",easing:y=i,in:f,onEnter:N,onEntered:$,onEntering:I,onExit:S,onExited:k,onExiting:H,style:E,timeout:T=d,TransitionComponent:D=Q}=a,_=J(a,fe),g=c.useRef(null),A=K(u.ref,g,l),w=n=>m=>{n&&(m===void 0?n(g.current):n(g.current,m))},B=w((n,m)=>{v(p,n,o),ee(n),N&&N(n,m)}),G=w((n,m)=>{const L=V({timeout:T,style:E,easing:y},{mode:"enter"});n.style.webkitTransition=t.transitions.create("-webkit-transform",b({},L)),n.style.transition=t.transitions.create("transform",b({},L)),n.style.webkitTransform="none",n.style.transform="none",I&&I(n,m)}),Y=w($),M=w(H),X=w(n=>{const m=V({timeout:T,style:E,easing:y},{mode:"exit"});n.style.webkitTransition=t.transitions.create("-webkit-transform",m),n.style.transition=t.transitions.create("transform",m),v(p,n,o),S&&S(n)}),z=w(n=>{n.style.webkitTransition="",n.style.transition="",k&&k(n)}),q=n=>{r&&r(g.current,n)},C=c.useCallback(()=>{g.current&&v(p,g.current,o)},[p,o]);return c.useEffect(()=>{if(f||p==="down"||p==="right")return;const n=Z(()=>{g.current&&v(p,g.current,o)}),m=W(g.current);return m.addEventListener("resize",n),()=>{n.clear(),m.removeEventListener("resize",n)}},[p,f,o]),c.useEffect(()=>{f||C()},[f,C]),e.jsx(D,b({nodeRef:g,onEnter:B,onEntered:Y,onEntering:G,onExit:X,onExited:z,onExiting:M,addEndListener:q,appear:h,in:f,timeout:T},_,{children:(n,m)=>c.cloneElement(u,b({ref:A,style:b({visibility:n==="exited"&&!f?"hidden":void 0},E,u.props.style)},m))}))}),ye=je,we="/assets/slideShowImage1-659a1aa0.svg";function be(){return e.jsxs("div",{className:" grid grid-cols-6 mt-10 gap-3 slideShow max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 place-items-center px-[1.5rem] ",children:[e.jsxs("div",{className:" col-span-3 flex flex-col items-start  justify-center  max-md:items-center max-md:col-span-1",children:[e.jsxs(x.div,{className:"py-4",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5},children:[e.jsxs("div",{className:"font-semibold text-4xl py-3 max-md:text-[2rem]",children:[e.jsx("p",{children:"Where IT"})," ",e.jsx("p",{children:"Dreams Become"}),e.jsx("p",{children:"Professional Realities."})]}),e.jsx("span",{className:"max-sm:w-full flex max-sm:items-center max-sm:justify-center",children:"Find your dream job today !"})]}),e.jsxs(x.div,{className:"mx-4 rounded-lg border  border-black relative w-[250px] h-10",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.8,bounce:1},children:[e.jsx("input",{type:"text",placeholder:"Search by Vacancies",className:"rounded-lg outline-none absolute w-full h-9 text-sm px-3"}),e.jsx(se,{className:"absolute top-1/2 right-2 -translate-y-1/2"})]})]}),e.jsx("div",{className:"col-span-3  items-center justify-center pl-10 flex max-md:col-span-1",children:e.jsx(x.img,{initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.7,bounce:1},src:we,alt:"",className:"w-96"})})]})}const Ne="/assets/chart-4fbf926a.svg";function ve(){const s={type:"spring",duration:.8};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"max-md:overflow-hidden max-sm:px-5",children:[e.jsx(x.div,{initial:{x:"15rem",opacity:0},whileInView:{x:"0rem",opacity:1},transition:{...s,bounce:.6},children:e.jsx("span",{className:"font-semibold text-2xl max-sm:text-xl",children:"Popular Vacancies and salaries"})}),e.jsxs(x.div,{className:"tabVacancies grid grid-cols-[repeat(15,minmax(0,1fr))] max-md:grid-cols-[repeat(12,minmax(0,1fr))] max-sm:grid-cols-2  gap-3  place-content-center place-items-center sideShowPopular pt-7",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:s,children:[e.jsx("span",{className:"col-span-3 max-md:col-span-3 max-sm:col-span-1 border  border-black  w-full text-center rounded-lg bg-blue-100 font-semibold cursor-pointer",children:"SEO specialist"}),e.jsx("span",{className:"col-span-3 max-md:col-span-3 max-sm:col-span-1  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"Copywriter"}),e.jsx("span",{className:"col-span-3 max-md:col-span-3 max-sm:col-span-1  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"AI Specialist"}),e.jsx("span",{className:"col-span-3 max-md:col-span-3 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"UX/UI designer"}),e.jsx("span",{className:"col-span-3 max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"Front-end"}),e.jsx("span",{className:"col-span-5  max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"Back-end"}),e.jsx("span",{className:"col-span-5  max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg",children:"Webflow developer"}),e.jsx("span",{className:"underline col-span-5  max-md:col-start-5 max-md:col-span-4  max-sm:col-span-1 text-center font-bold ",children:"See all vacancies"})]}),e.jsx("div",{className:"py-10 flex items-start justify-center w-full",children:e.jsx(x.img,{src:Ne,alt:"",className:"w-full",initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},transition:{...s,duration:1.5}})})]})})}const Ee="/assets/vietnam_map-8c661a4e.svg";const R=["Ha Noi","Ha Tinh","Hue","Da Nang","Khanh Hoa","Ho Chi Minh","Can Tho","Nha Trang","Hai Phong","Quy Nhon"];function Te(){const s={type:"spring",duration:.8},[a,l]=c.useState(0),t=c.useRef(null),i=()=>{a<R.length-1&&(l(a+1),t.current.scrollLeft+=t.current.offsetWidth)},d=()=>{a>0&&(l(a-1),t.current.scrollLeft-=t.current.offsetWidth)};return e.jsxs("div",{className:"max-sm:px-5",children:[e.jsx("span",{className:"font-semibold text-2xl max-sm:text-xl",children:"Largest cities"}),e.jsx("div",{className:"flex items-center justify-center ",children:e.jsx(x.img,{src:Ee,alt:"",className:"max-lg:w-[30rem] max-md:w-[20rem] max-sm:w-[250px]",initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},transition:{...s,duration:1.5}})}),e.jsx("span",{className:"underline font-semibold text-2xl max-sm:text-xl",children:"All cites"}),e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsxs("div",{className:" flex items-center justify-center py-4 relative lg:w-full max-lg:w-[700px] max-md:w-[500px] max-sm:w-[250px]",children:[e.jsx("div",{className:"flex flex-nowrap overflow-x-auto w-[80%] max-md:w-[90%] slideshow-c gap-3",ref:t,children:R.map(r=>e.jsx("div",{className:"border rounded-lg border-slate-500",children:e.jsx("button",{className:"w-[210px] max-sm:w-[213px] whitespace-nowrap font-semibold hover:bg-blue-200 rounded-lg",children:r})},r))}),e.jsx("button",{className:"absolute top-1/2 left-10  max-md:-left-16 max-sm:-left-14 -translate-y-1/2 text-3xl font-semibold",onClick:d,children:"<"}),e.jsx("button",{className:"absolute top-1/2 right-10 max-md:-right-16 max-sm:-right-14 -translate-y-1/2 text-3xl font-semibold",onClick:i,children:">"})]})})]})}const Ie="/assets/logoForm-e9bedbee.svg";function Se({label:s,type:a,placeholder:l}){return e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsxs("label",{htmlFor:"",className:"font-normal text-x",children:[s,":"]}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:a,placeholder:l,className:"pl-3 w-full h-[40px] rounded-md border border-slate-600"})})]})}const ke=[{id:1,label:"FullName",type:"Text",placeholder:"Enter Your name"},{id:2,label:"Email",type:"email",placeholder:"Email Address"},{id:3,label:"Phone Number",type:"Number",placeholder:"Enter your phone number"}];function Ce(){return e.jsxs("div",{className:"grid grid-cols-5 max-md:grid-cols-1 max-sm:place-items-center place-items-center ",children:[e.jsxs("div",{className:"col-span-3 max-lg:col-span-2 ",children:[e.jsxs("div",{className:" max-sm:flex max-sm:flex-col items-center justify-center",children:[e.jsx("span",{className:"text-xl font-semibold",children:"Talk to our HR experts.."}),e.jsx("br",{}),e.jsx("span",{className:"text-lg font-normal text-center w-4/5",children:"Please feel free to send us any of your inquiries / questions, we’ll get back to you asap"})]}),e.jsx("div",{className:" flex items-center justify-center py-6",children:e.jsx("img",{src:Ie,alt:"",className:"w-72"})})]}),e.jsx("div",{className:"col-span-2 max-lg:col-span-3 max-sm:flex items-center justify-center",children:e.jsx("div",{className:"border w-[400px] p-8 rounded-[2rem] border-slate-600 max-sm:w-[90%] ",children:e.jsxs("div",{className:"px-3",children:[ke.map(s=>e.jsx(Se,{label:s.label,placeholder:s.placeholder,type:s.type},s.id)),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Message"}),e.jsx("textarea",{rows:"6",className:"w-full resize-none p-2 rounded-lg border border-slate-600",placeholder:"Message"})]}),e.jsx("div",{className:"flex items-center justify-center pt-4",children:e.jsx("button",{className:"bg-blue-300 p-2 rounded-lg font-bold text-white w-full hover:bg-blue-500",children:"Submit"})})]})})})]})}const Le="/assets/fptLogo-881e0e28.svg",Ve="/assets/NasaLogo-7276cb31.svg",Pe="/assets/ShoppeLogo-4a54e6df.svg",j="/assets/GoogleLogo-cd94096a.svg",Re="_slide_uq829_1",Oe={slide:Re},O=[{logo:Le,name:"FPT Software IT"},{logo:te,name:"Ecomdy Marking"},{logo:Ve,name:"NASA IT"},{logo:Pe,name:"Shoppe Marketing"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"},{logo:j,name:"Google IT"}];function We(){const[s,a]=c.useState(0),l=c.useRef(null),t=()=>{s<O.length-1&&(a(s+1),l.current.scrollLeft+=l.current.offsetWidth)},i=()=>{s>0&&(a(s-1),l.current.scrollLeft-=l.current.offsetWidth)};return e.jsxs("div",{className:"py-10 max-sm:px-5",children:[e.jsx("span",{className:"font-semibold text-2xl max-sm:text-xl",children:"Our Employers"}),e.jsx("div",{className:"flex items-center justify-center  w-full",children:e.jsxs("div",{className:"flex items-center justify-center py-4 relative lg:w-full max-lg:w-[700px] max-md:w-[500px] max-sm:w-[250px]",children:[e.jsx("div",{className:`flex overflow-x-auto w-[80%] max-md:w-[90%] ${Oe.slide}`,ref:l,children:O.map((d,r)=>e.jsx("div",{className:"",children:e.jsxs("div",{className:"w-[200px] flex flex-col items-center justify-center",children:[e.jsx("img",{src:d.logo,alt:"",className:"w-14 h-14 border-2 border-black rounded-full"}),e.jsx("span",{className:"items-center justify-center text-center",children:d.name})]})},r))}),e.jsx("button",{className:"absolute top-1/2 -left-1  max-md:-left-16 max-sm:-left-14 -translate-y-1/2 text-3xl font-semibold",onClick:i,children:"<"}),e.jsx("button",{className:"absolute top-1/2 -right-1 max-md:-right-16 max-sm:-right-14 -translate-y-1/2 text-3xl font-semibold",onClick:t,children:">"})]})})]})}const Fe="/assets/liImg-cb30ed6c.svg",$e="/assets/liImg2-7668d6a5.svg",He="/assets/liImg3-c48dab21.svg";function De(){const s={type:"spring",duration:.8};return e.jsxs("div",{className:"py-10 max-sm:px-5",children:[e.jsx(x.div,{initial:{x:"15rem",opacity:0},whileInView:{x:"0rem",opacity:1},transition:{...s,bounce:.6},children:e.jsx("span",{className:" font-semibold text-2xl max-sm:text-xl ",children:"Your Can Trust Us"})}),e.jsxs("div",{className:"lg:w-3/4 py-5 max-sm:w-full",children:[e.jsxs(x.div,{className:"flex gap-9 py-4 max-sm:flex-col items-center justify-center",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:s,children:[e.jsx("img",{src:Fe,alt:"",className:"max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("span",{className:"font-bold text-lg max-sm:flex items-center justify-center",children:"We carefully screen all employee"}),e.jsx("p",{className:"font-normal max-sm:text-lg",children:"On our platform, you will not find dubious vacacies from marriage angencices or call centers. Only conscientious employers."})]})]}),e.jsxs(x.div,{className:"flex gap-9 py-4 max-sm:flex-col items-center justify-center",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:s,children:[e.jsx("img",{src:$e,alt:"",className:"max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"}),e.jsxs(x.div,{className:"flex flex-col gap-3",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:s,children:[e.jsx("span",{className:"font-bold text-lg max-sm:flex items-center justify-center",children:"We carefully screen all employee"}),e.jsx("p",{className:"font-normal max-sm:text-lg",children:"On our platform, you will not find dubious vacacies from marriage angencices or call centers. Only conscientious employers.More than 2500 people found the job they dreamed of, according to a survey conducted in 2022"})]})]}),e.jsxs(x.div,{className:"flex gap-9 py-4 max-sm:flex-col items-center max-sm:justify-center",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:s,children:[e.jsx("img",{src:He,alt:"",className:"max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("span",{className:"font-bold text-lg max-sm:flex items-center justify-center",children:"We carefully screen all employee"}),e.jsx("p",{className:"font-normal max-sm:text-lg",children:"Every day, about 150 vacancies are published on our platform - a huge selection is provided"})]})]})]})]})}const _e=c.forwardRef(function(a,l){return e.jsx(ye,{direction:"up",ref:l,...a})});function Ae({open:s,handleActiveEmail:a,title:l}){const t=F(),i=()=>{localStorage.removeItem("Token"),localStorage.removeItem("Profile"),t("/login")};return e.jsxs(ae,{open:s,TransitionComponent:_e,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",className:"rounded-lg",children:[e.jsx(ne,{children:l}),e.jsx(le,{children:e.jsxs(ie,{id:"alert-dialog-slide-description",children:["Please, forward link"," ",e.jsx("a",{href:"#",className:"text-blue-500 font-bold",children:"here"})]})}),e.jsxs(re,{children:[e.jsx(P,{onClick:i,children:"Login"}),e.jsx(P,{onClick:a,children:"Confirm yet"})]})]})}function Ge(){var p;const s=JSON.parse(localStorage.getItem("Profile")),a=(p=s==null?void 0:s.user)==null?void 0:p.status,[l,t]=c.useState("Please verify your email, easy to use other functions!"),i=F(),[d,r]=c.useState(!1),h=oe(),u=async()=>{await xe.get("/api/auth/verified").then(y=>{const f=y.data;if(console.log(f),f){console.log(f);const N=JSON.parse(localStorage.getItem("Token")).access_token;r(!1),ue.success("Verify Success.",{autoClose:1500}),h(pe(N)),i("/")}else t("You have not verified email!")}).catch(y=>console.log(y))},o=c.useCallback(()=>{!a&&a!=null&&s.user.role.roleName==="Candidate"&&(console.log("Email not verify"),r(!0))},[a]);return c.useEffect(()=>{o()},[o]),e.jsxs("div",{className:"flex items-center justify-center relative",children:[d&&e.jsx(Ae,{open:d,handleActiveEmail:u,title:l}),e.jsx(ce,{position:"bottom-right",autoClose:1600,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsxs("div",{className:"xl:w-[1200px] lg:w-[1000px] md:w-[900px] max-sm:w-[700px] ",children:[e.jsx(me,{}),e.jsx(be,{}),e.jsx(De,{}),e.jsx(ve,{}),e.jsx(Te,{}),e.jsx(We,{}),e.jsx(Ce,{}),e.jsx(de,{})]})]})}export{Ge as default};