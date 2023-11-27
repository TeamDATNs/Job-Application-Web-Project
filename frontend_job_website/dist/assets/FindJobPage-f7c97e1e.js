import{j as e,C as pe,H as ue,I as ie,J as ge,r as Z,K as me,M as xe,O as fe,v as he,P as be,y as ve,q as ye,N as Ne,F as je}from"./index-114a60e0.js";function Ce({job:y,load:z}){return e.jsx("div",{className:"col-span-7 border-2 border-slate-600 w-full h-[46rem] pt-2 rounded-2xl  sticky top-4 max-md:hidden overflow-y-hidden ",children:!z&&y===null?e.jsx("div",{className:"flex items-center justify-center h-1/2 text-2xl",children:e.jsxs("button",{type:"button",className:" flex items-center justify-center ",disabled:!0,children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-10 w-10 text-black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" p-3 ",children:[e.jsx("div",{className:"relative h-52",children:e.jsxs("div",{className:"flex flex-col items-start justify-center gap-2 absolute z-50 top-1/2 backdrop-blur-xl w-full px-5 ",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold text-[1.5rem]",children:y.company_name}),e.jsx("span",{className:"text-[1.125rem]",children:y.hiringName})]}),e.jsxs("span",{children:["location: ",y.location]})]})}),e.jsxs("div",{children:[e.jsx("span",{children:"Summary"}),e.jsxs("div",{className:"flex items-center justify-start gap-3",children:[e.jsx("button",{className:"w-[19rem] h-[3.125rem] bg-[#1CB8FF] rounded-lg text-[1.31rem] text-white font-bold",children:"Apply on company site"}),e.jsx("span",{className:`text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center\r
                 justify-center rounded-xl hover:text-rose-500 cursor-pointer`,children:e.jsx(pe,{})}),e.jsx("span",{className:`text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center\r
                 justify-center rounded-xl hover:text-red-500 cursor-pointer`,children:e.jsx(ue,{})})]})]})]}),e.jsxs("div",{className:" h-[28rem]",children:[e.jsxs("div",{className:"border-t-4 border-slate-700/40 pt-1",children:[e.jsx("span",{className:"p-3 font-bold text-[1.5rem]",children:"Job Details"}),e.jsxs("div",{className:" p-3  flex items-center justify-evenly gap-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(ie,{}),e.jsx("span",{children:"Job type"})]}),e.jsx("div",{children:e.jsx("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ",children:"Full-time"})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(ie,{}),e.jsx("span",{children:"Salary"})]}),e.jsxs("div",{className:"flex items-center justify-start gap-3",children:[e.jsxs("span",{className:"h-[1.68rem]  bg-sky-300 text-black p-1 text-[0.875rem] rounded-lg ",children:[y.minSalary," $"]}),"-",e.jsxs("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ",children:[y.maxSalary," $"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(ie,{}),e.jsx("span",{children:"Start Date - End Date"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ",children:y.dateSubmit}),"-",e.jsx("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ",children:y.dateEnd})]})]})]})]}),e.jsxs("div",{className:"description border-t-2 border-slate-700/40 overflow-y-auto h-full pb-[12rem] px-4",children:[e.jsx("span",{className:"text-2xl font-bold",children:y.hiringContentID.title}),e.jsx("span",{children:y.experience_years}),e.jsx("br",{}),e.jsx("span",{children:y.education_level}),e.jsx("br",{}),e.jsx("p",{children:y.job_description}),e.jsx("div",{dangerouslySetInnerHTML:{__html:y.hiringContentID.content}}),e.jsx("div",{children:e.jsxs("div",{className:`flex items-center justify-start px-3 h-[3.25rem] border w-[12.18rem] text-[1.3rem] \r
            font-bold mx-3 rounded-lg bg-[#E4E2E0] gap-3 mt-3 hover:bg-red-500/60 hover:text-white transition-colors`,children:[e.jsx(ge,{}),e.jsx("button",{children:"Report Job"})]})})]})]})]})})}var oe={exports:{}};(function(y,z){(function(f,V){y.exports=V(Z)})(me,f=>(()=>{var V={703:(p,g,C)=>{var t=C(414);function _(){}function B(){}B.resetWarningCache=_,p.exports=function(){function b(N,P,Y,q,le,G){if(G!==t){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function L(){return b}b.isRequired=b;var m={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:L,element:b,elementType:b,instanceOf:L,node:b,objectOf:L,oneOf:L,oneOfType:L,shape:L,exact:L,checkPropTypes:B,resetWarningCache:_};return m.PropTypes=m,m}},697:(p,g,C)=>{p.exports=C(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=f}},X={};function j(p){var g=X[p];if(g!==void 0)return g.exports;var C=X[p]={exports:{}};return V[p](C,C.exports,j),C.exports}j.n=p=>{var g=p&&p.__esModule?()=>p.default:()=>p;return j.d(g,{a:g}),g},j.d=(p,g)=>{for(var C in g)j.o(g,C)&&!j.o(p,C)&&Object.defineProperty(p,C,{enumerable:!0,get:g[C]})},j.o=(p,g)=>Object.prototype.hasOwnProperty.call(p,g),j.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var T={};return(()=>{j.r(T),j.d(T,{default:()=>ce});var p=j(98),g=j.n(p),C=j(697),t=j.n(C);function _(){return _=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},_.apply(this,arguments)}var B=function(r){var i=r.pageClassName,o=r.pageLinkClassName,c=r.page,$=r.selected,K=r.activeClassName,R=r.activeLinkClassName,s=r.getEventListener,a=r.pageSelectedHandler,u=r.href,n=r.extraAriaContext,l=r.pageLabelBuilder,d=r.rel,h=r.ariaLabel||"Page "+c+(n?" "+n:""),k=null;return $&&(k="page",h=r.ariaLabel||"Page "+c+" is your current page",i=i!==void 0?i+" "+K:K,o!==void 0?R!==void 0&&(o=o+" "+R):o=R),g().createElement("li",{className:i},g().createElement("a",_({rel:d,role:u?void 0:"button",className:o,href:u,tabIndex:$?"-1":"0","aria-label":h,"aria-current":k,onKeyPress:a},s(a)),l(c)))};B.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const b=B;function L(){return L=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},L.apply(this,arguments)}var m=function(r){var i=r.breakLabel,o=r.breakAriaLabel,c=r.breakClassName,$=r.breakLinkClassName,K=r.breakHandler,R=r.getEventListener,s=c||"break";return g().createElement("li",{className:s},g().createElement("a",L({className:$,role:"button",tabIndex:"0","aria-label":o,onKeyPress:K},R(K)),i))};m.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const N=m;function P(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function Y(r){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Y(r)}function q(){return q=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},q.apply(this,arguments)}function le(r,i){for(var o=0;o<i.length;o++){var c=i[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function G(r,i){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},G(r,i)}function ee(r,i){if(i&&(Y(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(r)}function A(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ae(r){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ae(r)}function w(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var re=function(r){(function(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&G(s,a)})(R,r);var i,o,c,$,K=(c=R,$=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var s,a=ae(c);if($){var u=ae(this).constructor;s=Reflect.construct(a,arguments,u)}else s=a.apply(this,arguments);return ee(this,s)});function R(s){var a,u;return function(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(this,R),w(A(a=K.call(this,s)),"handlePreviousPage",function(n){var l=a.state.selected;a.handleClick(n,null,l>0?l-1:void 0,{isPrevious:!0})}),w(A(a),"handleNextPage",function(n){var l=a.state.selected,d=a.props.pageCount;a.handleClick(n,null,l<d-1?l+1:void 0,{isNext:!0})}),w(A(a),"handlePageSelected",function(n,l){if(a.state.selected===n)return a.callActiveCallback(n),void a.handleClick(l,null,void 0,{isActive:!0});a.handleClick(l,null,n)}),w(A(a),"handlePageChange",function(n){a.state.selected!==n&&(a.setState({selected:n}),a.callCallback(n))}),w(A(a),"getEventListener",function(n){return w({},a.props.eventListener,n)}),w(A(a),"handleClick",function(n,l,d){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},k=h.isPrevious,S=k!==void 0&&k,U=h.isNext,Q=U!==void 0&&U,W=h.isBreak,D=W!==void 0&&W,I=h.isActive,J=I!==void 0&&I;n.preventDefault?n.preventDefault():n.returnValue=!1;var F=a.state.selected,x=a.props.onClick,O=d;if(x){var E=x({index:l,selected:F,nextSelectedPage:d,event:n,isPrevious:S,isNext:Q,isBreak:D,isActive:J});if(E===!1)return;Number.isInteger(E)&&(O=E)}O!==void 0&&a.handlePageChange(O)}),w(A(a),"handleBreakClick",function(n,l){var d=a.state.selected;a.handleClick(l,n,d<n?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})}),w(A(a),"callCallback",function(n){a.props.onPageChange!==void 0&&typeof a.props.onPageChange=="function"&&a.props.onPageChange({selected:n})}),w(A(a),"callActiveCallback",function(n){a.props.onPageActive!==void 0&&typeof a.props.onPageActive=="function"&&a.props.onPageActive({selected:n})}),w(A(a),"getElementPageRel",function(n){var l=a.state.selected,d=a.props,h=d.nextPageRel,k=d.prevPageRel,S=d.selectedPageRel;return l-1===n?k:l===n?S:l+1===n?h:void 0}),w(A(a),"pagination",function(){var n=[],l=a.props,d=l.pageRangeDisplayed,h=l.pageCount,k=l.marginPagesDisplayed,S=l.breakLabel,U=l.breakClassName,Q=l.breakLinkClassName,W=l.breakAriaLabels,D=a.state.selected;if(h<=d)for(var I=0;I<h;I++)n.push(a.getPageElement(I));else{var J=d/2,F=d-J;D>h-d/2?J=d-(F=h-D):D<d/2&&(F=d-(J=D));var x,O,E=function(H){return a.getPageElement(H)},v=[];for(x=0;x<h;x++){var te=x+1;if(te<=k)v.push({type:"page",index:x,display:E(x)});else if(te>h-k)v.push({type:"page",index:x,display:E(x)});else if(x>=D-J&&x<=D+(D===0&&d>1?F-1:F))v.push({type:"page",index:x,display:E(x)});else if(S&&v.length>0&&v[v.length-1].display!==O&&(d>0||k>0)){var ne=x<D?W.backward:W.forward;O=g().createElement(N,{key:x,breakAriaLabel:ne,breakLabel:S,breakClassName:U,breakLinkClassName:Q,breakHandler:a.handleBreakClick.bind(null,x),getEventListener:a.getEventListener}),v.push({type:"break",index:x,display:O})}}v.forEach(function(H,M){var se=H;H.type==="break"&&v[M-1]&&v[M-1].type==="page"&&v[M+1]&&v[M+1].type==="page"&&v[M+1].index-v[M-1].index<=2&&(se={type:"page",index:H.index,display:E(H.index)}),n.push(se.display)})}return n}),s.initialPage!==void 0&&s.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(s.initialPage,") and forcePage (").concat(s.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=s.initialPage?s.initialPage:s.forcePage?s.forcePage:0,a.state={selected:u},a}return i=R,(o=[{key:"componentDidMount",value:function(){var s=this.props,a=s.initialPage,u=s.disableInitialCallback,n=s.extraAriaContext,l=s.pageCount,d=s.forcePage;a===void 0||u||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(l)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(l,"). Did you forget a Math.ceil()?")),a!==void 0&&a>l-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(l-1,").")),d!==void 0&&d>l-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(d," > ").concat(l-1,")."))}},{key:"componentDidUpdate",value:function(s){this.props.forcePage!==void 0&&this.props.forcePage!==s.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(s.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var s=this.state.selected,a=this.props,u=a.pageCount,n=s+a.pageRangeDisplayed;return n>=u?u-1:n}},{key:"getBackwardJump",value:function(){var s=this.state.selected-this.props.pageRangeDisplayed;return s<0?0:s}},{key:"getElementHref",value:function(s){var a=this.props,u=a.hrefBuilder,n=a.pageCount,l=a.hrefAllControls;if(u)return l||s>=0&&s<n?u(s+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(s){var a=s===this.state.selected;if(this.props.ariaLabelBuilder&&s>=0&&s<this.props.pageCount){var u=this.props.ariaLabelBuilder(s+1,a);return this.props.extraAriaContext&&!a&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(s){var a=this.state.selected,u=this.props,n=u.pageClassName,l=u.pageLinkClassName,d=u.activeClassName,h=u.activeLinkClassName,k=u.extraAriaContext,S=u.pageLabelBuilder;return g().createElement(b,{key:s,pageSelectedHandler:this.handlePageSelected.bind(null,s),selected:a===s,rel:this.getElementPageRel(s),pageClassName:n,pageLinkClassName:l,activeClassName:d,activeLinkClassName:h,extraAriaContext:k,href:this.getElementHref(s),ariaLabel:this.ariaLabelBuilder(s),page:s+1,pageLabelBuilder:S,getEventListener:this.getEventListener})}},{key:"render",value:function(){var s=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&s!==void 0)return s&&s(this.props);var a=this.props,u=a.disabledClassName,n=a.disabledLinkClassName,l=a.pageCount,d=a.className,h=a.containerClassName,k=a.previousLabel,S=a.previousClassName,U=a.previousLinkClassName,Q=a.previousAriaLabel,W=a.prevRel,D=a.nextLabel,I=a.nextClassName,J=a.nextLinkClassName,F=a.nextAriaLabel,x=a.nextRel,O=this.state.selected,E=O===0,v=O===l-1,te="".concat(P(S)).concat(E?" ".concat(P(u)):""),ne="".concat(P(I)).concat(v?" ".concat(P(u)):""),H="".concat(P(U)).concat(E?" ".concat(P(n)):""),M="".concat(P(J)).concat(v?" ".concat(P(n)):""),se=E?"true":"false",de=v?"true":"false";return g().createElement("ul",{className:d||h,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:te},g().createElement("a",q({className:H,href:this.getElementHref(O-1),tabIndex:E?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":se,"aria-label":Q,rel:W},this.getEventListener(this.handlePreviousPage)),k)),this.pagination(),g().createElement("li",{className:ne},g().createElement("a",q({className:M,href:this.getElementHref(O+1),tabIndex:v?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":de,"aria-label":F,rel:x},this.getEventListener(this.handleNextPage)),D)))}}])&&le(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),R}(p.Component);w(re,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),w(re,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ce=re})(),T})())})(oe);var Pe=oe.exports;const ke=xe(Pe);function we(){const[y,z]=Z.useState(!1),[f,V]=Z.useState([]),[X,j]=Z.useState(0),T=10,p=window.innerWidth<=768,[g,C]=Z.useState(null),t=async m=>{z(!1),await ve.get(`http://localhost:80/api/hiring/${m}`).then(N=>{console.log(N.data),z(!0),C(N.data)}).catch(N=>{console.log(N)})};Z.useEffect(()=>{async function m(){await ye.get("http://localhost:80/api/hiring/get").then(N=>{const P=N.data;console.log(P),V(P)}).catch(N=>console.log(N))}m()},[]),console.log(f);const _=X+T,B=f==null?void 0:f.slice(X,_),b=isNaN(Math.ceil((f==null?void 0:f.length)/T))?0:Math.ceil((f==null?void 0:f.length)/T),L=m=>{const N=m.selected*T%(f==null?void 0:f.length);j(N)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12 place-content-center place-items-start pt-5 gap-5 max-md:px-10",children:[e.jsxs("div",{className:"col-span-5 max-md:col-span-12",children:[e.jsxs("div",{className:"border-b border-slate-300 pb-4 ",children:[e.jsx("span",{className:"text-blue-400 text-[0.875rem]",children:"Post your resume"}),e.jsx("span",{className:" text-[0.875rem]",children:"and find your next job on JobHunter!"})]}),e.jsxs("div",{className:"pb-3",children:[e.jsx("span",{className:"text-[0.68rem]",children:"Job in Da Nang"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[0.81rem]",children:"Short by: (X) - (X)"}),e.jsxs("span",{className:"flex items-center justify-center text-[0.68rem] gap-1",children:[f==null?void 0:f.length," Jobs",e.jsx(fe,{className:"text-slate-400"})]})]})]}),Object.keys(f).length===0?Array.from({length:5},(m,N)=>e.jsx("div",{className:"border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-2",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-700 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-700 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-700 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-700 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-700 rounded"})]})]})]})},N)):e.jsx("div",{className:"listJobs flex flex-col items-center icon gap-3",children:B==null?void 0:B.map((m,N)=>{var P;return e.jsxs(he,{to:`${p?"detailsMb":""}`,className:"box border-[3px] border-slate-700 px-4 rounded-2xl py-2 cursor-pointer hover:bg-blue-500/30 transition-colors max-h-[17rem] w-full",onClick:()=>t(m.id),children:[e.jsxs("div",{className:"flex items-start justify-between pb-2",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:" flex flex-col",children:[e.jsx("span",{className:"font-bold text-[1.5rem]",children:m.hiringName}),e.jsx("span",{className:"text-[1.125rem]",children:m.hiringContentID.title})]}),e.jsxs("div",{className:"flex flex-col items-start justify-center ",children:[e.jsx("span",{children:m.location}),(P=m.fieldName)==null?void 0:P.split(",").map((Y,q)=>e.jsx("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ",children:m.fieldName},q))]})]}),e.jsx(be,{className:"text-3xl font-bold"})]}),e.jsxs("div",{className:"flex items-center justify-start gap-3",children:[e.jsxs("span",{className:"h-[1.68rem]  bg-sky-300 text-black p-1 text-[0.875rem] rounded-lg ",children:[m.minSalary," $"]}),"-",e.jsxs("span",{className:"h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ",children:[m.maxSalary," $"]})]}),e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col items-start justify-center gap-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-normal",children:"Date End:"}),e.jsx("span",{className:"text-black bg-slate-200 p-1 rounded-lg",children:m.dateEnd})]}),e.jsx("span",{className:"cursor-pointer hover:font-bold",children:"More"})]})})]},N)})}),e.jsx("div",{className:"flex items-center justify-center text-lg",children:e.jsxs("span",{children:["Be the first to see new ",e.jsx("strong",{children:"jobs in Da Nang"})]})})]}),e.jsx(Ce,{job:g,load:y})]}),e.jsx("div",{className:" flex items-center justify-center gap-2 py-[1.875rem] ",children:e.jsx("div",{className:"flex flex-nowrap overflow-x-auto gap-1",children:e.jsx(ke,{breakLabel:"...",nextLabel:">",onPageChange:L,pageRangeDisplayed:2,marginPagesDisplayed:2,pageCount:b,previousLabel:"<",className:"flex items-center justify-center gap-3 pagination",renderOnZeroPageCount:null})})})]})}function Ee(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full",children:e.jsx(Ne,{})})}),e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("div",{className:"w-full  "})}),e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("div",{className:"xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ",children:e.jsx(we,{})})}),e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("div",{className:"xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ",children:e.jsx(je,{})})})]})}export{Ee as default};