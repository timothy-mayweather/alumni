import{q as l,j as r,a as e,b as d,F as p}from"./app-0bc4e90a.js";import{A as n}from"./AuthenticatedLayout-45bfaace.js";import c from"./DeleteUserForm-d7395d05.js";import h from"./UpdatePasswordForm-749173a9.js";import x from"./UpdateProfileInformationForm-ff2affd6.js";import"./ApplicationLogo-f9e12f05.js";import"./transition-cd347c9a.js";import"./TextInput-0b0d9eb7.js";import"./InputLabel-aaa96895.js";import"./Modal-d5c410f0.js";import"./PrimaryButton-5735c0e2.js";function A({chosenUser:s,auth:t,mustVerifyEmail:m,status:i}){const a=l().props.auth.user,o=(s??a).id===a.id;return r(n,{user:t.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(d,{title:"Profile"}),e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(x,{chosenUser:s,mustVerifyEmail:m,status:i,className:"max-w-xl"})}),o&&r(p,{children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(h,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(c,{className:"max-w-xl"})})]})]})})]})}export{A as default};