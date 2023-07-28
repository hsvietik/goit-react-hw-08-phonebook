"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[853],{1735:function(e,r,n){n.d(r,{Bc:function(){return m},Fy:function(){return c},Gq:function(){return u},OL:function(){return l}});var a,s,i,d,o=n(168),t=n(7686),u=t.Z.form(a||(a=(0,o.Z)(["\n  width: 300px;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n  border: solid 2px;\n  border-radius: 6px;\n  background-color: #389677;\n"]))),c=t.Z.input(s||(s=(0,o.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  background-color: #e1d5bb;\n  &:focus,\n  &:hover {\n    outline: solid 2px #c7a149;\n  }\n"]))),l=t.Z.button(i||(i=(0,o.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 6px;\n  font-size: 16px;\n  background-color: #c7a149;\n  &:focus,\n  &:hover {\n    background-color: #b38f41;\n  }\n"]))),m=t.Z.p(d||(d=(0,o.Z)(["\n  margin: 0px;\n  padding: 0px;\n"])))},6038:function(e,r,n){n.d(r,{Yy:function(){return s},dm:function(){return i},jg:function(){return d}});var a=n(6727),s=a.Ry().shape({name:a.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),email:a.Z_().email("Invalid email").required("Email is required"),password:a.Z_().required("Password is required")}).required(),i=a.Ry().shape({email:a.Z_().email("Invalid email").required("Email is required"),password:a.Z_().required("Password is required")}).required(),d=a.Ry().shape({name:a.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:a.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}).required()},853:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});n(2791);var a=n(1413),s=n(887),i=n(9434),d=n(4695),o=n(5218),t=n(1735),u=n(5822),c=n(6038),l=n(3329);function m(){var e,r,n,m=(0,i.I0)(),p=(0,s.cI)({defaultValues:{name:"",email:"",password:""},resolver:(0,d.X)(c.Yy)}),h=p.register,x=p.handleSubmit,f=p.formState.errors,Z=p.reset;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.Gq,{onSubmit:x((function(e){var r=e.name,n=e.email,a=e.password;m((0,u.r4)({name:r,email:n,password:a})).unwrap().then((function(){return o.ZP.success("Account successfully created!")})).catch((function(e){return"Request failed with status code 400"===e?o.ZP.error("This user already exist! Use Log In button"):o.ZP.error("Something went wrong, try one nore time!")})),Z()})),children:[(0,l.jsx)("label",{htmlFor:"name",children:"Name"}),(0,l.jsx)(t.Fy,(0,a.Z)((0,a.Z)({},h("name")),{},{type:"text",id:"name"})),(0,l.jsx)(t.Bc,{children:null===(e=f.name)||void 0===e?void 0:e.message}),(0,l.jsx)("label",{htmlFor:"email",children:"Email"}),(0,l.jsx)(t.Fy,(0,a.Z)((0,a.Z)({},h("email")),{},{type:"email",id:"email"})),(0,l.jsx)(t.Bc,{children:null===(r=f.email)||void 0===r?void 0:r.message}),(0,l.jsx)("label",{htmlFor:"password",children:"Password"}),(0,l.jsx)(t.Fy,(0,a.Z)((0,a.Z)({},h("password")),{},{type:"password",id:"password"})),(0,l.jsx)(t.Bc,{children:null===(n=f.password)||void 0===n?void 0:n.message}),(0,l.jsx)(t.OL,{type:"submit",children:"Register"})]}),(0,l.jsx)(o.x7,{})]})}var p=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Create an account"}),(0,l.jsx)(m,{})]})}}}]);
//# sourceMappingURL=853.8c772931.chunk.js.map