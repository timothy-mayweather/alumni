import{r as i,j as t,a as e,b as p}from"./app-8f101c97.js";import{A as x}from"./AuthenticatedLayout-219936d1.js";import"./ApplicationLogo-d6bf06fd.js";import"./transition-c72f98cb.js";function u({auth:d,init:o,people:c}){const[h,g]=i.useState(JSON.parse(c)),[r,m]=i.useState(n(JSON.parse(o)));window.Echo.channel("demo").listen("WebsocketDemoEvent",l=>{let a=JSON.parse(l.data);m(n(a.contributions)),g(a.people)});function n(l){let a=2e8,s=l.cash;return l.cash=parseInt(l.cash).toLocaleString(),l.pledge=parseInt(l.pledge).toLocaleString(),l.totalAmount=parseInt(l.totalAmount).toLocaleString(),l.percentage=(parseInt(s)/a*100).toFixed(2),l.remaining=(a-s).toLocaleString(),l}return t(x,{user:d.user,children:[e(p,{title:"Bukasa Land"}),t("div",{className:"py-8",children:[t("div",{className:"mx-auto sm:px-6 lg:px-8",children:[t("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-6",children:[e("h1",{style:{fontSize:"35px"},className:"font-bold",children:"GOAL: UGX: 200,000,000"}),t("h1",{style:{fontSize:"35px"},className:"font-bold",children:["Mobile Money (RAYMOND KABUUKA) ",e("br",{})," 0703017187 (AIRTEL) 0785842406 (MTN)"]}),e("br",{}),e("br",{}),e("table",{className:"px-6 py-8",width:"100%",children:t("tbody",{children:[t("tr",{className:"p-6 text-gray-900 font-bold",style:{fontSize:"30px"},children:[e("td",{children:"Cash:"}),t("td",{style:{textAlign:"right"},children:["UGX ",r.cash]})]}),t("tr",{className:"p-6 text-gray-900 font-bold",style:{fontSize:"30px"},children:[e("td",{children:"Pledge:"}),t("td",{style:{textAlign:"right"},children:["UGX ",r.pledge]})]}),t("tr",{className:"p-6 text-gray-900 font-bold",style:{fontSize:"30px"},children:[e("td",{children:"Total Amount:"}),t("td",{style:{textAlign:"right"},children:["UGX ",r.totalAmount]})]}),t("tr",{className:"p-6 text-gray-900 font-bold",style:{fontSize:"30px"},children:[e("td",{children:"Percentage (Out of Cash):"}),t("td",{style:{textAlign:"right"},children:[r.percentage,"%"]})]}),t("tr",{className:"p-6 text-gray-900 font-bold",style:{fontSize:"30px"},children:[e("td",{children:"Remaining:"}),t("td",{style:{textAlign:"right"},children:["UGX ",r.remaining]})]})]})})]}),e("br",{}),e("br",{}),e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-6",children:t("table",{className:"px-6 py-8 border",width:"100%",style:{fontSize:"25px"},children:[t("thead",{children:[e("th",{style:{textAlign:"left"},className:"border",children:"Name"}),e("th",{style:{textAlign:"right"},className:"border",children:"Amount"}),e("th",{style:{textAlign:"right"},className:"border",children:"Pledge"}),e("th",{style:{textAlign:"right"},className:"border",children:"Total"})]}),e("tbody",{children:h.map(l=>t("tr",{className:"p-6 text-gray-900 font-bold",children:[e("td",{className:"border px-2",children:l.name}),e("td",{style:{textAlign:"right"},className:"border px-2",children:parseInt(l.amount).toLocaleString()}),e("td",{style:{textAlign:"right"},className:"border px-2",children:parseInt(l.pledge).toLocaleString()}),e("td",{style:{textAlign:"right"},className:"border px-2",children:parseInt(l.pledge+l.amount).toLocaleString()})]}))})]})})]}),e("br",{}),e("br",{}),e("br",{})]})]})}export{u as default};