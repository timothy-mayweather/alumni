import{q as l,j as r,a as e,b as d,F as p}from"./app-8f101c97.js";import{A as n}from"./AuthenticatedLayout-219936d1.js";import c from"./DeleteUserForm-8bf45d9d.js";import h from"./UpdatePasswordForm-ac23199d.js";import x from"./UpdateProfileInformationForm-4dd524e8.js";import"./ApplicationLogo-d6bf06fd.js";import"./transition-c72f98cb.js";import"./TextInput-3743626a.js";import"./InputLabel-48bb5118.js";import"./Modal-f31af360.js";import"./PrimaryButton-9840ceac.js";function A({chosenUser:s,auth:t,mustVerifyEmail:m,status:i}){const a=l().props.auth.user,o=(s??a).id===a.id;return r(n,{user:t.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(d,{title:"Profile"}),e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(x,{chosenUser:s,mustVerifyEmail:m,status:i,className:"max-w-xl"})}),o&&r(p,{children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(h,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(c,{className:"max-w-xl"})})]})]})})]})}export{A as default};