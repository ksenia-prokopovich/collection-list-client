(this["webpackJsonpmy-collection"]=this["webpackJsonpmy-collection"]||[]).push([[0],{25:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},29:function(t,e,s){},30:function(t,e,s){},31:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){},34:function(t,e,s){},35:function(t,e,s){},36:function(t,e,s){},45:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),i=s(19),c=s.n(i),l=(s(25),s(3)),o=s(4),r=s(6),h=s(5),d=(s(26),s(16)),u=(s(27),s(0)),m=function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={user:JSON.parse(localStorage.getItem("user"))},a.onApplyTheme(),a}return Object(o.a)(s,[{key:"onDark",value:function(){localStorage.setItem("theme","dark"),this.onApplyTheme()}},{key:"onLight",value:function(){localStorage.setItem("theme","light"),this.onApplyTheme()}},{key:"onApplyTheme",value:function(){document.body.className="dark"===localStorage.getItem("theme")?"theme-dark":"theme-light"}},{key:"logOut",value:function(){localStorage.removeItem("user"),window.open("/sing-in","_self")}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"collection-header",children:Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"My collection"}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(u.jsx)("div",{className:"navbar-brand",children:Object(u.jsxs)("p",{className:"navbar-name",children:[this.state.user&&this.state.user.firstname," ",Object(u.jsx)("a",{className:"bi bi-person-circle",children:" "})]})}),Object(u.jsxs)("ul",{className:"user-nav",children:[Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsxs)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(u.jsx)("a",{className:"bi bi-moon"}),"Theme"]}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item",type:"button",onClick:this.onDark.bind(this),children:"Dark"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item",type:"button",onClick:this.onLight.bind(this),children:"Light"})})]})]}),!this.state.user&&Object(u.jsxs)("div",{className:"auth-actions",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"/collection-list-client/sing-in",children:"Log In"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"/sing-up",children:"Sing Up"})})]}),this.state.user&&Object(u.jsx)("div",{children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",onClick:this.logOut.bind(this),children:"Log Out"})})})]})]})]})})}}]),s}(n.a.Component),j=s(7),b=s(2),p=(s(29),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={collections:[],users:[],user:JSON.parse(localStorage.getItem("user"))},a.loadCollections(),a.loadUsers(),a}return Object(o.a)(s,[{key:"loadUsers",value:function(){var t=this;fetch("http://localhost:8000/users").then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{users:e}))}))}},{key:"loadCollections",value:function(){var t=this;fetch("http://localhost:8000/collections").then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{collections:e}))}))}},{key:"collectionsChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.collections),{},{collections:t.target.value}))}},{key:"delete",value:function(t){var e=this;fetch("http://localhost:8000/collections/delete/"+t,{method:"DELETE"}).then((function(){return e.loadCollections()}))}},{key:"add",value:function(){fetch("http://localhost:8000/collections/add",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,description:this.state.description})}).then((function(){window.open("/create-collections","_self")}))}},{key:"getUserFirstname",value:function(t){return t&&this.state.users.length&&this.state.users.find((function(e){return e.id===t})).firstname}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"collection-list container",children:[this.state.user&&Object(u.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.add.bind(this),children:"Create..."}),this.state.collections.map((function(e){return Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:e.title}),Object(u.jsx)("img",{src:e.image}),Object(u.jsx)("p",{className:"card-text",children:e.description}),Object(u.jsxs)("span",{className:"card-author",children:["Author: ",t.getUserFirstname(e.userId)," ",Object(u.jsx)("a",{className:"bi bi-person-circle",children:" "})]}),Object(u.jsxs)("div",{className:"actions",children:[t.state.user&&t.state.user.id===e.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.delete(e.id)},children:"Delete"}),Object(u.jsx)("a",{href:"/"+e.id+"/edit-collection",children:t.state.user&&t.state.user.id===e.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-link",children:"Edit"})}),Object(u.jsx)("a",{className:"card-link list-link",href:"/"+e.id+"/items",children:"All collection..."})]})]})})})}))]})}}]),s}(n.a.Component)),O=(s(30),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={firstname:"",email:"",password:""},a}return Object(o.a)(s,[{key:"create",value:function(){var t=this;fetch("http://localhost:8000/users/sing-up",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.state.firstname,email:this.state.email,password:this.state.password})}).then((function(){t.props.history.push("/sing-in")}))}},{key:"firstnameChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{firstname:t.target.value}))}},{key:"emailChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{email:t.target.value}))}},{key:"passwordChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{password:t.target.value}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"registration container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputName1",className:"form-label",children:"Name"}),Object(u.jsx)("input",{type:"text",value:this.state.firstname,onChange:this.firstnameChange.bind(this),className:"form-control",id:"exampleInputName1",placeholder:"Enter name"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",value:this.state.email,onChange:this.emailChange.bind(this),className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",value:this.state.password,onChange:this.passwordChange.bind(this),className:"form-control",id:"exampleInputPassword1",placeholder:"Enter password"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:this.create.bind(this),children:"Sing Up"})]})}}]),s}(n.a.Component));s(31);function f(t){if(!t.ok)throw new Error(t.status);return t}var v=function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={email:"",password:"",hasError:!1},a}return Object(o.a)(s,[{key:"singIn",value:function(){var t=this;fetch("http://localhost:8000/users/sing-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(t){return f(t)})).then((function(t){return t.json()})).then((function(t){localStorage.setItem("user",JSON.stringify(t)),window.open("/","_self")})).catch((function(){t.setState(Object(b.a)(Object(b.a)({},t.state),{},{hasError:!0}))}))}},{key:"emailChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{email:t.target.value}))}},{key:"passwordChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{password:t.target.value}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"login container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",value:this.state.email,onChange:this.emailChange.bind(this),className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",value:this.state.password,onChange:this.passwordChange.bind(this),className:"form-control",id:"exampleInputPassword1",placeholder:"Enter password"})]}),this.state.hasError&&Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Your email or password is incorrect!"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:this.singIn.bind(this),children:"Sing In"})]})}}]),s}(n.a.Component),x=function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsxs)("div",{className:"error-template",children:[Object(u.jsx)("h1",{children:"Oops!"}),Object(u.jsx)("h2",{children:"404 Not Found"}),Object(u.jsx)("div",{className:"error-details",children:"Sorry, an error has occured, Requested page not found!"})]})})})})}}]),s}(n.a.Component),g=(s(32),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={title:"",description:"",userId:JSON.parse(localStorage.getItem("user")).id,collectionId:t.match.params.collectionId,id:t.match.params.id,fileInput:n.a.createRef()},a}return Object(o.a)(s,[{key:"componentWillMount",value:function(){this.state.id&&this.loadCollectionItem()}},{key:"add",value:function(){var t=this;fetch("http://localhost:8000/collections/items/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,description:this.state.description,image:this.state.image,collectionId:this.state.collectionId,userId:this.state.userId})}).then((function(){t.props.history.push("/".concat(t.state.collectionId,"/items"))}))}},{key:"edit",value:function(){var t=this;fetch("http://localhost:8000/collections/items/edit-items/"+this.state.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,description:this.state.description,image:this.state.image})}).then((function(t){return f(t)})).then((function(){t.props.history.push("/".concat(t.state.collectionId,"/items"))}))}},{key:"onSave",value:function(){this.state.id?this.edit():this.add()}},{key:"loadCollectionItem",value:function(){var t=this;fetch("http://localhost:8000/collections/items/"+this.state.id).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),e))}))}},{key:"titleChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{title:t.target.value}))}},{key:"descriptionChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{description:t.target.value}))}},{key:"imageChange",value:function(){var t=this,e=new FileReader;e.readAsDataURL(this.state.fileInput.current.files[0]),e.onload=function(){t.setState({image:e.result})}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"form-collection container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputTitle",children:"Title"}),Object(u.jsx)("input",{type:"text",value:this.state.title,className:"form-control",id:"exampleInputTitle",name:"title",onChange:this.titleChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("textarea",{rows:"5",value:this.state.description,className:"form-control",id:" exampleInputTitle",name:" content",onChange:this.descriptionChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("input",{ref:this.state.fileInput,type:"file",className:"form-control",name:"title",onChange:this.imageChange.bind(this)})]}),Object(u.jsx)("button",{type:"submit",className:" btn btn-secondary",onClick:this.onSave.bind(this),children:"Save"})]})}}]),s}(n.a.Component)),y=(s(33),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={itemCollections:[],collection:[],collectionId:t.match.params.collectionId,user:JSON.parse(localStorage.getItem("user")),userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,users:[]},a.loadItemCollections(),a.loadItemCollection(),a.loadUsers(),a}return Object(o.a)(s,[{key:"loadUsers",value:function(){var t=this;fetch("http://localhost:8000/users").then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{users:e}))}))}},{key:"loadItemCollection",value:function(){var t=this;fetch("http://localhost:8000/collections/".concat(this.state.collectionId)).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{collection:e}))}))}},{key:"loadItemCollections",value:function(){var t=this;fetch("http://localhost:8000/collections/items/".concat(this.state.collectionId,"/list")).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{itemCollections:e}))}))}},{key:"delete",value:function(t){var e=this;fetch("http://localhost:8000/collections/items/delete/"+t,{method:"DELETE"}).then((function(){return e.loadItemCollections()}))}},{key:"getUserFirstname",value:function(t){return t&&this.state.users.length&&this.state.users.find((function(e){return e.id===t})).firstname}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"collection-item-list",children:[Object(u.jsx)("a",{href:"/"+this.state.collectionId+"/add",children:this.state.user&&this.state.user.id===this.state.collection.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-secondary -add",children:"Add"})}),this.state.itemCollections.map((function(e){return Object(u.jsx)("div",{className:"card mb-3",children:Object(u.jsx)("div",{className:"row g-0",children:Object(u.jsx)("div",{className:"card-body-list",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("a",{href:"/"+t.state.collectionId+"/items/"+e.id,children:Object(u.jsx)("h5",{className:"card-title",title:e.title,children:e.title})}),Object(u.jsx)("img",{src:e.image}),Object(u.jsx)("p",{className:"card-text",children:e.description})]}),t.state.user&&t.state.user.id===e.userId&&Object(u.jsxs)("div",{className:"actions",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.delete(e.id)},children:"Delete"}),Object(u.jsx)("a",{href:"/"+e.id+"/edit-items",children:Object(u.jsx)("button",{type:"button",className:"btn btn-link",children:"Edit"})}),Object(u.jsxs)("span",{className:"card-author",children:["Author: ",t.getUserFirstname(e.userId)," ",Object(u.jsx)("a",{className:"bi bi-person-circle",children:" "})]})]})]})})})})}))]})}}]),s}(n.a.Component)),N=(s(34),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={id:t.match.params.id,title:"",description:"",fileInput:n.a.createRef()},a.state.id&&a.loadItem(),a}return Object(o.a)(s,[{key:"onSave",value:function(){this.state.id?this.edit():this.add()}},{key:"add",value:function(){var t=this;fetch("http://localhost:8000/collections/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,description:this.state.description,image:this.state.image,userId:JSON.parse(localStorage.getItem("user")).id})}).then((function(){t.props.history.push("/")}))}},{key:"edit",value:function(){var t=this;fetch("http://localhost:8000/collections/edit-collection/"+this.state.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,description:this.state.description,image:this.state.image})}).then((function(t){return f(t)})).then((function(){t.props.history.push("/")}))}},{key:"loadItem",value:function(){var t=this;fetch("http://localhost:8000/collections/"+this.state.id).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),e))}))}},{key:"titleChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{title:t.target.value}))}},{key:"descriptionChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{description:t.target.value}))}},{key:"imageChange",value:function(){var t=this,e=new FileReader;e.readAsDataURL(this.state.fileInput.current.files[0]),e.onload=function(){t.setState({image:e.result})}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"form-collection container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputTitle",children:"Title"}),Object(u.jsx)("input",{type:"text",value:this.state.title,className:"form-control",id:"exampleInputTitle",name:"title",onChange:this.titleChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("textarea",{rows:"5",value:this.state.description,className:" form-control",id:" exampleInputTitle",name:" content",onChange:this.descriptionChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("input",{ref:this.state.fileInput,type:"file",className:"form-control",name:"title",onChange:this.imageChange.bind(this)})]}),Object(u.jsx)("button",{type:"submit",className:" btn btn-secondary",onClick:this.onSave.bind(this),children:"Save"})]})}}]),s}(n.a.Component)),k=(s(35),s(36),function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={id:t.id,message:"",comments:[],users:[],userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,user:JSON.parse(localStorage.getItem("user"))},a.loadComments(),a.loadUsers(),a}return Object(o.a)(s,[{key:"loadComments",value:function(){var t=this;fetch("http://localhost:8000/collections/items/comments/".concat(this.state.id)).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{comments:e}))}))}},{key:"addComment",value:function(){var t=this;fetch("http://localhost:8000/collections/items/comments/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.state.message,itemId:this.state.id,userId:JSON.parse(localStorage.getItem("user")).id})}).then((function(){t.setState({message:""}),t.loadComments()}))}},{key:"messageChange",value:function(t){this.setState(Object(b.a)(Object(b.a)({},this.state),{},{message:t.target.value}))}},{key:"delete",value:function(t){var e=this;fetch("http://localhost:8000/collections/items/comments/delete/"+t,{method:"DELETE"}).then((function(){return e.loadComments()}))}},{key:"loadUsers",value:function(){var t=this;fetch("http://localhost:8000/users").then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{users:e}))}))}},{key:"getUserName",value:function(t){return t&&this.state.users.length&&this.state.users.find((function(e){return e.id===t})).firstname}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"collection-comment",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mb-3-comment",children:[Object(u.jsx)("label",{htmlFor:"formGroupExampleInput",className:"form-label",children:"Comments"}),Object(u.jsx)("input",{type:"text",value:this.state.message,className:"form-control",placeholder:"Enter your comment",onChange:this.messageChange.bind(this)})]}),Object(u.jsx)("div",{className:"actions-comment",children:Object(u.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.addComment.bind(this),children:"Send"})})]}),this.state.comments.map((function(e){return Object(u.jsxs)("div",{className:"card-body-comment",children:[Object(u.jsxs)("h5",{className:"card-title",children:[t.state.user&&t.state.user.id===e.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger trash",onClick:function(){return t.delete(e.id)},children:Object(u.jsx)("i",{className:"bi bi-trash",children:" "})}),Object(u.jsxs)("span",{className:"user-name",children:[t.getUserName(e.userId)," ",Object(u.jsx)("a",{className:"bi bi-person-circle",children:" "})]})]}),Object(u.jsx)("p",{className:"card-text",children:e.message})]})}))]})}}]),s}(n.a.Component)),I=function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={title:"",description:"",createdAt:"",userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,id:t.match.params.id,collectionId:t.match.params.collectionId,likes:[],users:[],user:JSON.parse(localStorage.getItem("user"))},a.loadUsers(),a}return Object(o.a)(s,[{key:"componentWillMount",value:function(){this.state.id&&(this.loadItem(),this.loadLikes())}},{key:"loadItem",value:function(){var t=this;fetch("http://localhost:8000/collections/items/".concat(this.state.id)).then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),e))}))}},{key:"delete",value:function(t){var e=this;fetch("http://localhost:8000/collections/items/delete/"+t,{method:"DELETE"}).then((function(){e.props.history.push("/".concat(e.state.collectionId,"/items"))}))}},{key:"like",value:function(){var t=this;fetch("http://localhost:8000/collections/items/like",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId,itemId:this.state.id})}).then((function(){return t.loadLikes()}))}},{key:"hasLike",value:function(t){return t&&this.state.likes.length&&this.state.likes.find((function(e){return e.userId===t}))}},{key:"loadLikes",value:function(){var t=this;fetch("http://localhost:8000/collections/items/likes/".concat(this.state.id)).then((function(t){return t.json()})).then((function(e){return t.setState({likes:e})}))}},{key:"getUserFirstname",value:function(t){return t&&this.state.users.length&&this.state.users.find((function(e){return e.id===t})).firstname}},{key:"loadUsers",value:function(){var t=this;fetch("http://localhost:8000/users").then((function(t){return t.json()})).then((function(e){return t.setState(Object(b.a)(Object(b.a)({},t.state),{},{users:e}))}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"collection-item-view",children:[Object(u.jsx)("div",{className:"card mb-3",children:Object(u.jsx)("div",{className:"row g-0",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",title:this.state.title,children:this.state.title}),Object(u.jsx)("img",{src:this.state.image}),Object(u.jsx)("p",{className:"card-text",children:this.state.description}),Object(u.jsxs)("div",{className:"card-author",children:[Object(u.jsxs)("span",{className:"card-author",children:["Author: ",this.getUserFirstname(this.state.userId)," ",Object(u.jsx)("a",{className:"bi bi-person-circle",children:" "})]}),Object(u.jsx)("p",{className:"card-text-date",children:new Date(this.state.createdAt).toDateString()})]}),Object(u.jsxs)("div",{className:"actions",children:[this.state.user&&this.state.user.id===this.state.userId&&Object(u.jsxs)("div",{className:"actions2",children:[Object(u.jsx)("a",{href:"/"+this.state.id+"/edit-items",children:Object(u.jsx)("i",{className:"bi bi-gear-fill",children:" "})}),Object(u.jsx)("i",{className:"bi bi-trash",onClick:function(){return t.delete(t.state.id)},children:" "})]}),this.state.user&&Object(u.jsx)("i",{className:this.hasLike(this.state.userId)?"bi bi-heart-fill -active":"bi bi-heart-fill",onClick:this.like.bind(this),children:this.state.likes.length})]})]})})}),this.state.user&&Object(u.jsx)(k,{id:this.state.id})]})}}]),s}(n.a.Component),C=function(t){Object(r.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={user:localStorage.getItem("user")},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(m,{}),Object(u.jsx)(d.a,{basename:"/collection-list-client",children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(u.jsx)(j.a,{exact:!0,path:"/:collectionId/items",component:y}),!this.state.user&&Object(u.jsx)(j.a,{path:"/sing-up",component:O}),!this.state.user&&Object(u.jsx)(j.a,{path:"/sing-in",component:v}),this.state.user&&Object(u.jsx)(j.a,{path:"/:collectionId/add",component:g}),Object(u.jsx)(j.a,{path:"/:collectionId/items/:id",component:I}),this.state.user&&Object(u.jsx)(j.a,{path:"/create-collections",component:N}),this.state.user&&Object(u.jsx)(j.a,{path:"/:id/edit-collection",component:N}),this.state.user&&Object(u.jsx)(j.a,{path:"/:id/edit-items",component:g}),Object(u.jsx)(j.a,{component:x})]})})]})}}]),s}(n.a.Component),S=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),a(t),n(t),i(t),c(t)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.f7392c22.chunk.js.map