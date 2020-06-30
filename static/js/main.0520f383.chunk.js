(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),s=(a(41),a(42),a(43),a(17)),l=a(3),i=a.n(l),u=a(12),m=a(7),p=a(8),d=a(10),h=a(9),f=a(35),v=a(16),b=a(13),E=a.n(b),y=r.a.createContext(),g=function(e,t){return"DELETE_CONTACT"===t.type?Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))}):"ADD_CONTACT"===t.type?Object(v.a)(Object(v.a)({},e),{},{contacts:[t.payload].concat(Object(f.a)(e.contacts))}):"UPDATE_CONTACT"===t.type?Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return t.payload.id===e.id?e=t.payload:e}))}):e},x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return g(e,t)}))}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),N=y.Consumer,w=a(33),C=a.n(w),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.lable,n=e.name,c=e.type,o=e.value,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},a),r.a.createElement("input",{type:c,name:n,className:C()("form-control",{"is-invalid":s}),value:o,onChange:t}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}}]),a}(n.Component);k.defaultProps={type:"text"};var O=k,j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.submitForm=function(){var t=Object(u.a)(i.a.mark((function t(a,n){var r,c,o,s,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,s=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==s){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return l={name:c,email:o,phone:s},t.next=14,E.a.post("https://jsonplaceholder.typicode.com/users",l);case 14:u=t.sent,a({type:"ADD_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onType=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(N,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card mt-3 t",style:{width:"50%",left:"25%",border:"0.5px solid #4f8a8b"}},r.a.createElement("div",{className:"card-header text-dark",style:{backgroundColor:"#fbd46d",borderBottom:"1px solid #4f8a8b"}},"Add Contact"),r.a.createElement("div",{className:"card-body text-left",style:{width:"80%",left:"10%"}},r.a.createElement("form",{onSubmit:e.submitForm.bind(e,s)},r.a.createElement(O,{type:"text",name:"name",lable:"Name:",value:a,onChange:e.onType,error:o.name}),r.a.createElement(O,{type:"email",lable:"Email:",name:"email",className:"form-control",value:n,onChange:e.onType,error:o.email}),r.a.createElement(O,{type:"text",name:"phone",lable:"Phone:",value:c,onChange:e.onType,error:o.phone}),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-dark"})))))}))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.submitForm=function(){var t=Object(u.a)(i.a.mark((function t(a,n){var r,c,o,s,l,u,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,s=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==s){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return l={name:c,phone:s,email:o},u=e.props.match.params.id,t.next=15,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(u),l);case 15:m=t.sent,a({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onType=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(N,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card mt-3 t",style:{width:"50%",left:"25%",border:"0.5px solid #4f8a8b"}},r.a.createElement("div",{className:"card-header text-dark",style:{backgroundColor:"#fbd46d",borderBottom:"1px solid #4f8a8b"}},"Edit Contact"),r.a.createElement("div",{className:"card-body text-left",style:{width:"80%",left:"10%"}},r.a.createElement("form",{onSubmit:e.submitForm.bind(e,s)},r.a.createElement(O,{type:"text",name:"name",lable:"Name:",value:a,onChange:e.onType,error:o.name}),r.a.createElement(O,{type:"email",lable:"Email:",name:"email",className:"form-control",value:n,onChange:e.onType,error:o.email}),r.a.createElement(O,{type:"text",name:"phone",lable:"Phone:",value:c,onChange:e.onType,error:o.phone}),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-dark"})))))}))}}]),a}(n.Component),A=a(14),S=(a(62),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.onDeleteClick=function(){var e=Object(u.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.phone,o=t.email;return r.a.createElement(N,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body text-left",style:{width:"50%"}},r.a.createElement("h4",null,n,r.a.createElement("i",{className:"fas fa-caret-down",style:{cursor:"pointer"},onClick:function(){e.setState({show:!e.state.show})}}),r.a.createElement("i",{className:"fas fa-times text-danger",style:{cursor:"pointer",float:"right"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(A.b,{to:"/contacts/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt text-info mr-3 mt-1",style:{cursor:"pointer",float:"right",fontSize:"17px"}}))),e.state.show?r.a.createElement("ul",{className:"list-group detail"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c," ")):null)}))}}]),a}(n.Component)),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-4 mb-2",style:{width:"50%",position:"relative",left:"25%"}},r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"My ")," Contacts")),t.map((function(e){return r.a.createElement(S,{key:e.key,contact:e})})))}))}}]),a}(n.Component);var P=function(e){var t=e.brand;return r.a.createElement("div",{className:"text-light text-center p-3",style:{backgroundColor:"#e43f5a"}},r.a.createElement("h2",null,t))};a(68);var M=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-elem text-center p-3"},r.a.createElement(A.b,{to:"/"},r.a.createElement("i",{className:"fas fa-address-card text-danger mt-4 mb-4"},r.a.createElement("p",{className:"nav-heading"},"Contacts"))),r.a.createElement(A.b,{to:"/contacts/add"},r.a.createElement("i",{className:"fas fa-user-plus text-danger mt-4 mb-4"},r.a.createElement("p",{className:"nav-heading"},"Add "))),r.a.createElement(A.b,{to:"/about"},r.a.createElement("i",{className:"fas fa-question text-danger mt-4 mb-4"},r.a.createElement("p",{className:"nav-heading"},"About")))))};function W(e){return r.a.createElement("div",{className:"p-3 display-4"},r.a.createElement("h1",{className:"text-danger text-center"},"About"),r.a.createElement("p",{className:"mt-5"},"This is a Contact Manager App."),r.a.createElement("p",null,"0.1.0.v"))}var q=function(){return r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%"}},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found "),r.a.createElement("p",{className:"lead"},"Sorry that page doesnot exist"),r.a.createElement("a",{href:"/"}," Click here to redirect to Homepage"))},F=a(1);var _=function(){return r.a.createElement(x,null,r.a.createElement(A.a,null,r.a.createElement("div",{className:"App text-center"},r.a.createElement(P,{brand:"Contact Manager"}),r.a.createElement(M,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",component:D}),r.a.createElement(F.a,{exact:!0,path:"/contacts/add",component:j}),r.a.createElement(F.a,{exact:!0,path:"/contacts/edit/:id",component:T}),r.a.createElement(F.a,{exact:!0,path:"/about",component:W}),r.a.createElement(F.a,{component:q})))))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/contactManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/contactManager","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.0520f383.chunk.js.map