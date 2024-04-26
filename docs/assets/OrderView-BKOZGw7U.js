import{d as m,r as b,o as n,c as d,a as t,t as c,b as i,w as x,F as v,e as g,p as y,f as k,u as w,g as S,h as O,i as h}from"./index-9mFyylNr.js";const V=e=>(y("data-v-bcd5131b"),e=e(),k(),e),B={class:"max-height-screen md:w-3/6"},D={class:"font-bold uppercase"},$=V(()=>t("thead",{class:"bg-slate-300"},[t("tr",null,[t("th",{class:"text-left"},"Price"),t("th",{class:"text-left hidden md:table-cell"},"Amount"),t("th",{class:"text-left"},"Total")])],-1)),A={class:"bg-slate-200"},I={class:"w-1/3"},C={class:"hidden md:table-cell w-1/3"},F={class:"w-1/3"},N=m({__name:"OrderTable",props:{title:{type:String},data:{type:Object}},setup(e){const s=e;return(o,a)=>{const _=b("v-table");return n(),d("div",B,[t("h3",D,c(s.title),1),i(_,{class:"bg-slate-500","fixed-header":"","max-height":"100vh"},{default:x(()=>[$,t("tbody",A,[(n(!0),d(v,null,g(e.data,(l,p)=>(n(),d("tr",{key:p},[t("td",I,c(l[0]),1),t("td",C,c(l[1]),1),t("td",F,c((l[0]*l[1]).toFixed(8)),1)]))),128))])]),_:1})])}}}),T=(e,s)=>{const o=e.__vccOpts||e;for(const[a,_]of s)o[a]=_;return o},f=T(N,[["__scopeId","data-v-bcd5131b"]]),j={class:"text-lg"},E={class:"max-height-screen"},L={class:"flex flex-col md:flex-row gap-5"},M=m({__name:"OrderBook",props:{title:{type:String}},setup(e){const s=w(),o=S(),a=O(100);return(_,l)=>{const p=b("v-select");return n(),d(v,null,[t("h2",j,c(h(o).symbol.title),1),i(p,{class:"width-100",label:"Number of rows to show",items:[{title:"100",value:100},{title:"500",value:500},{title:"1000",value:1e3}],modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r)},null,8,["modelValue"]),t("div",E,[t("div",L,[i(f,{title:"Bids",data:Array.from(h(s).marketDepth.bids).sort((r,u)=>u[0]-r[0]).slice(0,a.value)},null,8,["data"]),i(f,{title:"Asks",data:Array.from(h(s).marketDepth.asks).sort((r,u)=>r[0]-u[0]).slice(0,a.value)},null,8,["data"])])])],64)}}}),U=m({__name:"OrderView",props:{title:{type:String}},setup(e){const s=e;return(o,a)=>(n(),d("main",null,[t("h1",null,c(s.title),1),i(M,{title:"Order book"})]))}});export{U as default};
