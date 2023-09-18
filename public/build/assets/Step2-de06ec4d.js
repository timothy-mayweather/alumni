import{W as d,j as r,a}from"./app-0bc4e90a.js";import{T as l,I as i}from"./TextInput-0b0d9eb7.js";import{I as n}from"./InputLabel-aaa96895.js";import{P as c}from"./PrimaryButton-5735c0e2.js";function f(){const{data:t,setData:s,post:o,processing:u,errors:m}=d({institutions:"",faculty:"",course:"",gradYear:"",hall:"",responsibilities:"",firstName:"",middleName:"",lastName:"",role:"",organisation:"",email:"",phone:""});return r("div",{className:"w-full px-6 py-4 bg-white shadow-md overflow-hidden text-lg sm:rounded-lg",children:[a("p",{className:"text-2xl font-bold",children:"UBTEB Information"}),r("form",{onSubmit:e=>{e.preventDefault(),o(route("academic.store"))},children:[r("div",{children:[a(n,{htmlFor:"name",value:"UBTEB Institution(s) attended"}),a(l,{name:"institutions",value:t.institutions,className:"mt-1 w-full",isFocused:!0,onChange:e=>s(e.target.name,e.target.value),required:!0}),a(i,{message:m.institutions,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{className:"grid grid-cols-4 gap-x-4",children:[a(n,{htmlFor:"faculty",value:"Faculty/School"}),a(n,{htmlFor:"course",value:"Course of Study"}),a(n,{htmlFor:"gradYear",value:"Year of Graduation"}),a(n,{htmlFor:"hall",value:"Hall of Residence/Attachment"}),a(l,{id:"faculty",type:"text",name:"faculty",value:t.faculty,className:"mt-1",autoComplete:"faculty",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"course",type:"text",name:"course",value:t.course,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"gradYear",type:"text",name:"gradYear",value:t.gradYear,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0}),a(l,{id:"hall",type:"text",name:"hall",value:t.hall,className:"mt-1",onChange:e=>s(e.target.name,e.target.value),required:!0})]}),a(i,{message:m.faculty,className:"mt-2"}),a(i,{message:m.course,className:"mt-2"}),a(i,{message:m.gradYear,className:"mt-2"}),a(i,{message:m.hall,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{children:[a(n,{htmlFor:"responsibilities",value:"Responsibilities held while a student"}),a(l,{id:"responsibilities",type:"text",name:"responsibilities",value:t.responsibilities,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full",onChange:e=>s(e.target.name,e.target.value),required:!0})]}),a(i,{message:m.responsibilities,className:"mt-2"})]}),r("div",{className:"mt-4",children:[a("p",{className:"font-bold",children:"Most prominent Alumni you know"}),a(n,{htmlFor:"name",value:"Name",required:!1}),r("div",{className:"grid grid-cols-3 gap-4",children:[a(l,{name:"firstName",value:t.firstName,placeholder:"First",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"middleName",value:t.middleName,placeholder:"Middle",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"lastName",value:t.lastName,placeholder:"Last",className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)})]}),a(i,{message:m.firstName,className:"mt-2"}),a(i,{message:m.middleName,className:"mt-2"}),a(i,{message:m.lastName,className:"mt-2"})]}),r("div",{className:"mt-4",children:[r("div",{className:"grid grid-cols-2 gap-x-4",children:[a(n,{htmlFor:"role",value:"Role/Position",required:!1}),a(n,{htmlFor:"organisation",value:"Organisation/Company/Industry",required:!1}),a(l,{name:"role",value:t.role,className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)}),a(l,{name:"organisation",value:t.organisation,className:"mt-1",isFocused:!0,onChange:e=>s(e.target.name,e.target.value)})]}),a(i,{message:m.role,className:"mt-2"}),a(i,{message:m.organisation,className:"mt-2"})]}),a("div",{className:"mt-4",children:r("div",{className:"grid grid-cols-2 gap-x-4",children:[a(n,{htmlFor:"email",value:"Email",required:!1}),a(n,{htmlFor:"phone",value:"Phone",required:!1}),a(l,{id:"email",type:"email",name:"email",placeholder:"e.g gw@gmail.com",value:t.email,className:"mt-1",autoComplete:"email",onChange:e=>s(e.target.name,e.target.value)}),a(l,{id:"phone",type:"tel",name:"phone",placeholder:"e.g 256700000000",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",value:t.phone,className:"mt-1",onChange:e=>s(e.target.name,e.target.value)})]})}),a("div",{className:"flex items-center justify-end mt-4",children:a(c,{className:"ml-4",disabled:u,children:"Submit"})})]})]})}export{f as default};
