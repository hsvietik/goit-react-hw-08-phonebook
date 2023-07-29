"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[212],{1735:function(e,r,n){n.d(r,{Bc:function(){return p},Fy:function(){return c},Gq:function(){return u},OL:function(){return m}});var a,s,i,o,t=n(168),d=n(7686),l=n(4943),u=d.Z.form(a||(a=(0,t.Z)(["\n  width: 300px;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n  border-radius: 6px;\n  background-color: ",";\n"])),l.w.green),c=d.Z.input(s||(s=(0,t.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  background-color: #e1d5bb;\n  &:focus,\n  &:hover {\n    outline: solid 2px ",";\n  }\n"])),l.w.yellow),m=d.Z.button(i||(i=(0,t.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 6px;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  padding: 8px;\n  background-color: ",";\n  &:focus,\n  &:hover {\n    background-color: ",";\n  }\n"])),l.w.yellow,l.w.yellowHover),p=d.Z.p(o||(o=(0,t.Z)(["\n  margin: 0px;\n  padding: 0px;\n"])))},6038:function(e,r,n){n.d(r,{Yy:function(){return s},dm:function(){return i},jg:function(){return o}});var a=n(6727),s=a.Ry().shape({name:a.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),email:a.Z_().email("Invalid email").required("Email is required"),password:a.Z_().min(7,"Password must be at least 7 characters long").required("Password is required")}).required(),i=a.Ry().shape({email:a.Z_().email("Invalid email").required("Email is required"),password:a.Z_().min(7,"Password must be at least 7 characters long").required("Password is required")}).required(),o=a.Ry().shape({name:a.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:a.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}).required()},9212:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});n(2791);var a=n(1413),s=n(887),i=n(5218),o=n(9434),t=n(4695),d=n(1735),l=n(5822),u=n(6038),c=n(3329);function m(){var e,r,n=(0,o.I0)(),m=(0,s.cI)({defaultValues:{email:"",password:""},resolver:(0,t.X)(u.dm)}),p=m.register,h=m.handleSubmit,g=m.formState.errors,w=m.reset;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.Gq,{onSubmit:h((function(e){var r=e.email,a=e.password;n((0,l.Ib)({email:r,password:a})).unwrap().then((function(e){i.ZP.success("Successfully logged in as ".concat(e.user.name))})).catch((function(e){"Request failed with status code 400"===e?i.ZP.error("Wrong email or password"):i.ZP.error("Something went wrong, try one nore time!")})),w()})),children:[(0,c.jsx)("label",{htmlFor:"email",children:"Email"}),(0,c.jsx)(d.Fy,(0,a.Z)((0,a.Z)({},p("email")),{},{type:"email",id:"email"})),(0,c.jsx)(d.Bc,{children:null===(e=g.email)||void 0===e?void 0:e.message}),(0,c.jsx)("label",{htmlFor:"password",children:"Password"}),(0,c.jsx)(d.Fy,(0,a.Z)((0,a.Z)({},p("password")),{},{type:"password",id:"password"})),(0,c.jsx)(d.Bc,{children:null===(r=g.password)||void 0===r?void 0:r.message}),(0,c.jsx)(d.OL,{type:"submit",children:"Login"})]}),(0,c.jsx)(i.x7,{})]})}var p=n(7005);var h=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"Log into your account"}),(0,c.jsx)(m,{}),(0,c.jsxs)("h4",{children:["Or use ",(0,c.jsx)(p.F,{to:"/register",children:"Register"})," to create a new account"]})]})}}}]);
//# sourceMappingURL=212.85ac43e3.chunk.js.map