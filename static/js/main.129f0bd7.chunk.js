(this["webpackJsonpsrg-web"]=this["webpackJsonpsrg-web"]||[]).push([[0],{72:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),i=n.n(r),s=n(11),c=n.n(s),o=(n(72),n(27)),l=n.n(o),h=n(37),j=n(24),d=n(17),m=n(18),b=n(15),p=n(20),u=n(19),O=n(115),x=n(119),g=n(120),f=n(127),y=n(122),C=(n(74),function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(m.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;"member_emails"===t?this.setState({member_emails:n.split(/\r?\n/)}):"member_names"===t?this.setState({member_names:n.split(/\r?\n/)}):"deadline"===t?this.setState({deadline:Date.parse(n)/1e3}):"grpSize"===t?this.setState({grpSize:parseInt(n)}):this.setState(Object(j.a)({},t,n))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(JSON.stringify(this.state)),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)},fetch("http://127.0.0.1:5000/create",n).then((function(e){return e.json()})).then((function(e){console.log(e),a.props.history.push("/Done")})).catch((function(e){console.info(e+"------err------")}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"main",children:[Object(a.jsxs)("div",{style:{"margin-left":"40px"},children:[Object(a.jsx)("br",{}),"How to use:",Object(a.jsx)("br",{}),Object(a.jsxs)(O.a,{children:[Object(a.jsx)(x.a,{children:"Fill out this Form"}),Object(a.jsx)(x.a,{children:"App sends out a form to all members to fill out their preferences."}),Object(a.jsx)(x.a,{children:"Once done (or deadline reached), the app will form you and the members groups and send emails to informing people of their groups"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)(g.a,{container:!0,spacing:0,direction:"column",alignItems:"left",style:{minHeight:"100vh",margin:"40px"},children:Object(a.jsxs)("form",{id:"mainForm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("p",{children:"Enter Your Name"}),Object(a.jsx)(f.a,{name:"owner_name",type:"text",required:!0,"data-parse":"uppercase",onChange:this.handleChange}),Object(a.jsx)("p",{children:"Enter Your Email"}),Object(a.jsx)(f.a,{name:"owner_email",type:"email",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Enter Title of Project"}),Object(a.jsx)(f.a,{name:"title",type:"text",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Enter Max Group Size"}),Object(a.jsx)(f.a,{name:"grpSize",type:"number",InputProps:{inputProps:{min:0}},required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Enter The Deadline for Group Formation"}),Object(a.jsx)(f.a,{name:"deadline",type:"date",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Enter Names of Members seperated by newline"}),Object(a.jsx)(f.a,{multiline:!0,required:!0,rowsMax:10,onChange:this.handleChange,label:"Member Emails",variant:"outlined",name:"member_names"}),Object(a.jsx)("p",{children:"Enter Emails of Members (In same order as names)"}),Object(a.jsx)(f.a,{multiline:!0,required:!0,rowsMax:10,onChange:this.handleChange,label:"Member Emails",variant:"outlined",name:"member_emails"}),Object(a.jsx)("p",{}),Object(a.jsx)(y.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})})]})}}]),n}(i.a.Component)),v=(i.a.Component,i.a.Component,n(125)),S=n(126),w=n(45),E=n(60),k=n.n(E),q=n(128),I=n(123),M=n(82),P=n(124),_=(i.a.Component,function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)(x.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(M.a,{children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(a.jsx)(I.a,{align:"center",style:{margin:"20px"},children:this.props.name}),Object(a.jsx)(f.a,{style:{minWidth:"170px"},required:!0,onChange:this.props.onPref,InputProps:{inputProps:{max:10,min:0}},type:"number",label:"Preference (0-10)"}),Object(a.jsx)(P.a,{"aria-label":"delete",onClick:this.props.onClick,children:Object(a.jsx)(k.a,{fontSize:"large"})})]})})})}}]),n}(i.a.Component));function z(){return Object(a.jsx)(C,{})}c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(v.a,{position:"static",children:Object(a.jsx)(S.a,{children:"Group Us"})}),Object(a.jsx)(z,{}),","]})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.129f0bd7.chunk.js.map