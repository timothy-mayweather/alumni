import{a as e,r as d,W as w,j as n}from"./app-ccb9fa51.js";import{T as x,I as b}from"./TextInput-0d547954.js";import{I as N}from"./InputLabel-bccecc2a.js";import{M as v}from"./Modal-a859fdb6.js";import"./transition-6a456565.js";function u({className:s="",disabled:o,children:t,...r}){return e("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${o&&"opacity-25"} `+s,disabled:o,children:t})}function D({type:s="button",className:o="",disabled:t,children:r,...a}){return e("button",{...a,type:s,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:r})}function j({className:s=""}){const[o,t]=d.useState(!1),r=d.useRef(),{data:a,setData:m,delete:p,processing:f,reset:i,errors:y}=w({password:""}),g=()=>{t(!0)},h=l=>{l.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>r.current.focus(),onFinish:()=>i()})},c=()=>{t(!1),i()};return n("section",{className:`space-y-6 ${s}`,children:[n("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(u,{onClick:g,children:"Delete Account"}),e(v,{show:o,onClose:c,children:n("form",{onSubmit:h,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),n("div",{className:"mt-6",children:[e(N,{htmlFor:"password",value:"Password",className:"sr-only"}),e(x,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:l=>m("password",l.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(b,{message:y.password,className:"mt-2"})]}),n("div",{className:"mt-6 flex justify-end",children:[e(D,{onClick:c,children:"Cancel"}),e(u,{className:"ml-3",disabled:f,children:"Delete Account"})]})]})})]})}export{j as default};