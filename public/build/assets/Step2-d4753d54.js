import{W as c,j as r,a}from"./app-ccb9fa51.js";import{T as l,I as i}from"./TextInput-0d547954.js";import{I as n}from"./InputLabel-bccecc2a.js";import{P as g}from"./PrimaryButton-c34aed54.js";function y({validated:o}){const{data:t,setData:s,post:u,processing:d,errors:m}=c({...o,step:2,institutions:"",faculty:"",course:"",gradYear:"",hall:"",responsibilities:"",firstName:"",middleName:"",lastName:"",role:"",organisation:"",email:"",phone:""});return r("div",{className:"w-full px-6 py-4 bg-white shadow-md overflow-hidden text-lg sm:rounded-lg",children:[a("p",{className:"text-2xl font-bold",children:"UBTEB Information"}),r("form",{onSubmit:e=>{e.preventDefault(),u(route("register"))},children:[r("div",{children:[a(n,{htmlFor:"name",value:"UBTEB Institution(s) attended"}),a(l,{name:"institutions",value:t.institutions,className:"mt-1 w-full",isFocused:!0,onChange:e=>s(e.target.name,e.target.value),required:!0}),a(i,{message:m.institutions,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{className:"grid grid-cols-4 gap-x-4",children:[a(n,{htmlFor:"faculty",value:"Faculty/School"}),a(n,{htmlFor:"course",value:"Course of Study"}),a(n,{htmlFor:"gradYear",value:"Year of Graduation"}),a(n,{htmlFor:"hall",value:"Hall of Residence/Attachment"}),a(l,{id:"faculty",type:"text",name:"faculty",value:t.faculty,className:"mt-1",autoComplete:"faculty",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"course",type:"text",name:"course",value:t.course,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"gradYear",type:"text",name:"gradYear",value:t.gradYear,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"hall",type:"text",name:"hall",value:t.hall,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0})]}),a(i,{message:m.faculty,className:"mt-2"}),a(i,{message:m.course,className:"mt-2"}),a(i,{message:m.gradYear,className:"mt-2"}),a(i,{message:m.hall,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{children:[a(n,{htmlFor:"responsibilities",value:"Responsibilities held while a student"}),a(l,{id:"responsibilities",type:"text",name:"responsibilities",value:t.responsibilities,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full",onChange:e=>s(e.target.name,e.target.value),required:!0})]}),a(i,{message:m.responsibilities,className:"mt-2"})]}),r("div",{className:"mt-4",children:[a("p",{className:"font-bold",children:"Most prominent Alumni you know"}),a(n,{htmlFor:"name",value:"Name",required:!1}),r("div",{className:"grid grid-cols-3 gap-4",children:[a(l,{name:"firstName",value:t.firstName,placeholder:"First",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"middleName",value:t.middleName,placeholder:"Middle",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"lastName",value:t.middleName,placeholder:"Last",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)})]}),a(i,{message:m.firstName,className:"mt-2"}),a(i,{message:m.middleName,className:"mt-2"}),a(i,{message:m.lastName,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{className:"grid grid-cols-2 gap-x-4",children:[a(n,{htmlFor:"role",value:"Role/Position",required:!1}),a(n,{htmlFor:"organisation",value:"Organisation/Company/Industry",required:!1}),a(l,{name:"role",value:t.role,className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"organisation",value:t.organisation,className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)})]}),a(i,{message:m.role,className:"mt-2"}),a(i,{message:m.organisation,className:"mt-2"})]}),a("div",{className:"mt-4",children:r("div",{className:"grid grid-cols-2 gap-x-4",children:[a(n,{htmlFor:"email",value:"Email",required:!1}),a(n,{htmlFor:"phone",value:"Phone",required:!1}),a(l,{id:"email",type:"email",name:"email",placeholder:"e.g gw@gmail.com",value:t.email,className:"mt-1",autoComplete:"email",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"phone",type:"tel",name:"phone",placeholder:"e.g 256700000000",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",value:t.phone,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0})]})}),a("div",{className:"flex items-center justify-end mt-4",children:a(g,{className:"ml-4",disabled:d,children:"Submit"})})]})]})}export{y as default};