(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{76:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(63),i=n.n(r),s=(n(76),n(10)),o=n(16),l=n(6),d=n(67),j=n(93),u=n(95),b=n(92),O=n(64),h=n(7),p=n(68),m=n(17),x="UPDATE_PRODUCTS",g="UPDATE_CATEGORIES",f="UPDATE_CURRENT_CATEGORY",v="ADD_TO_CART",y="REMOVE_FROM_CART",w="UPDATE_CART_QUANTITY",N="TOGGLE_CART",_=function(e,t){switch(t.type){case x:return Object(s.a)(Object(s.a)({},e),{},{products:Object(m.a)(t.products)});case g:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(m.a)(t.categories)});case f:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(m.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),Object(m.a)(t.products))});case y:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case N:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var k=n(2),C=["value"],S=Object(c.createContext)(),T=S.Provider,E=function(e){e.value;var t,n=Object(p.a)(e,C),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(_,t)),r=Object(h.a)(a,2),i=r[0],o=r[1];return console.log(i),Object(k.jsx)(T,Object(s.a)({value:[i,o]},n))},A=function(){Object(c.useContext)(S)},$=n(97);function R(e,t){return 1===t?e:e+"s"}var D,P,I,F,L=function(e){var t=A(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,l=e._id,d=e.price,j=e.quantity,u=c.cart;return Object(k.jsxs)("div",{className:"card px-1 py-1",children:[Object(k.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(k.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(k.jsx)("p",{children:i})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[j," ",R("item",j)," in stock"]}),Object(k.jsxs)("span",{children:["$",d]})]}),Object(k.jsx)("button",{onClick:function(){var t=u.find((function(e){return e._id===l}));a(t?{type:w,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}:{type:v,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})})},children:"Add to cart"})]})},U=n(27),Q=n(94),q=Object(Q.a)(D||(D=Object(U.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),W=(Object(Q.a)(P||(P=Object(U.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(Q.a)(I||(I=Object(U.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),G=Object(Q.a)(F||(F=Object(U.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),B=n.p+"static/media/spinner.689d9a07.gif";var H=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object($.a)(q),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o&&a({type:x,products:o.products})}),[o,a]),Object(k.jsxs)("div",{className:"my-2",children:[Object(k.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(k.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(k.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(k.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(k.jsx)("img",{src:B,alt:"loading"}):null]})};var M=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object($.a)(W).data;return Object(c.useEffect)((function(){i&&a({type:g,categories:i.categories})}),[i,a]),Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(k.jsx)("button",{onClick:function(){var t;t=e._id,a({type:f,currentCategory:t})},children:e.name},e._id)}))]})},Y=function(e){var t=e.item,n=A(),c=Object(h.a)(n,2)[1];return Object(k.jsxs)("div",{className:"flex-row",children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:"/image/".concat(t.image),alt:""})}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[t.name,", $",t.price]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Qty:"}),Object(k.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;c("0"===n?{type:y,_id:t._id}:{type:w,_id:t._id,purchaseQuantity:parseInt(n)})}}),Object(k.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:y,_id:e._id})}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},J=n(26),z=n(25),V=n(56),K=n.n(V),X=new(function(){function e(){Object(J.a)(this,e)}return Object(z.a)(e,[{key:"getProfile",value:function(){return K()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return K()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),Z=(n(81),function(){var e=A(),t=Object(h.a)(e,2),n=t[0],c=t[1];function a(){c({type:N})}return console.log(n),n.cartOpen?Object(k.jsxs)("div",{className:"cart",children:[Object(k.jsx)("div",{className:"close",onClick:a,children:"[close]"}),Object(k.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(k.jsxs)("div",{children:[n.cart.map((function(e){return Object(k.jsx)(Y,{item:e},e._id)})),Object(k.jsxs)("div",{className:"flex-row space-between",children:[Object(k.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),X.loggedIn()?Object(k.jsx)("button",{children:"Checkout"}):Object(k.jsx)("span",{children:"(Log in to checkout)"})]})]}):Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(k.jsx)("div",{className:"cart-closed",onClick:a,children:Object(k.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})}),ee=function(){return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(M,{}),Object(k.jsx)(H,{}),Object(k.jsx)(Z,{})]})};var te=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.n)().id,i=Object(c.useState)({}),d=Object(h.a)(i,2),j=d[0],u=d[1],b=Object($.a)(q),O=b.loading,p=b.data,m=n.products,g=n.cart;return Object(c.useEffect)((function(){m.length?u(m.find((function(e){return e._id===r}))):p&&a({type:x,products:p.products})}),[m,p,a,r]),Object(k.jsxs)(k.Fragment,{children:[j&&g?Object(k.jsxs)("div",{className:"container my-1",children:[Object(k.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(k.jsx)("h2",{children:j.name}),Object(k.jsx)("p",{children:j.description}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object(k.jsx)("button",{onClick:function(){var e=g.find((function(e){return e._id===r}));a(e?{type:w,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}:{type:v,product:Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})})},children:"Add to Cart"}),Object(k.jsx)("button",{disabled:!g.find((function(e){return e._id===j._id})),onClick:function(){a({type:y,_id:j._id})},children:"Remove from Cart"})]}),Object(k.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,O?Object(k.jsx)("img",{src:B,alt:"loading"}):null,Object(k.jsx)(Z,{})]})};var ne,ce,ae,re=function(e){var t=e.children;return Object(k.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},ie=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(re,{children:[Object(k.jsx)("h1",{children:"404 Page Not Found"}),Object(k.jsx)("h1",{children:Object(k.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},se=n(13),oe=n(9),le=n(15),de=n(90),je=Object(Q.a)(ne||(ne=Object(U.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ue=(Object(Q.a)(ce||(ce=Object(U.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(Q.a)(ae||(ae=Object(U.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));var be=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(de.a)(je),l=Object(h.a)(i,2),d=l[0],j=l[1].error,u=function(){var e=Object(le.a)(Object(oe.a)().mark((function e(t){var n,c;return Object(oe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,X.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(se.a)({},n,c)))};return Object(k.jsxs)("div",{className:"container my-1",children:[Object(k.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(k.jsx)("h2",{children:"Login"}),Object(k.jsxs)("form",{onSubmit:u,children:[Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(k.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(k.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(k.jsx)("div",{children:Object(k.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(k.jsx)("div",{className:"flex-row flex-end",children:Object(k.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Oe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(de.a)(ue),l=Object(h.a)(i,1)[0],d=function(){var e=Object(le.a)(Object(oe.a)().mark((function e(t){var n,c;return Object(oe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,X.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(se.a)({},n,c)))};return Object(k.jsxs)("div",{className:"container my-1",children:[Object(k.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(k.jsx)("h2",{children:"Signup"}),Object(k.jsxs)("form",{onSubmit:d,children:[Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(k.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(k.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(k.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(k.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(k.jsx)("div",{className:"flex-row flex-end",children:Object(k.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var he=function(){return Object(k.jsxs)("header",{className:"flex-row px-1",children:[Object(k.jsx)("h1",{children:Object(k.jsxs)(o.b,{to:"/",children:[Object(k.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(k.jsx)("nav",{children:X.loggedIn()?Object(k.jsxs)("ul",{className:"flex-row",children:[Object(k.jsx)("li",{className:"mx-1",children:Object(k.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(k.jsx)("li",{className:"mx-1",children:Object(k.jsx)("a",{href:"/",onClick:function(){return X.logout()},children:"Logout"})})]}):Object(k.jsxs)("ul",{className:"flex-row",children:[Object(k.jsx)("li",{className:"mx-1",children:Object(k.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(k.jsx)("li",{className:"mx-1",children:Object(k.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var pe=function(){var e,t=Object($.a)(G).data;return t&&(e=t.user),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"container my-1",children:[Object(k.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(k.jsxs)("div",{className:"my-2",children:[Object(k.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(k.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(k.jsxs)("div",{className:"card px-1 py-1",children:[Object(k.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(k.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(k.jsx)("p",{children:a})]}),Object(k.jsx)("div",{children:Object(k.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},me=Object(d.a)({uri:"/graphql"}),xe=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),ge=new j.a({link:xe.concat(me),cache:new u.a});var fe=function(){return Object(k.jsx)(b.a,{client:ge,children:Object(k.jsx)(o.a,{children:Object(k.jsx)("div",{children:Object(k.jsxs)(E,{children:[Object(k.jsx)(he,{}),Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/",element:ee}),Object(k.jsx)(l.a,{path:"/login",element:be}),Object(k.jsx)(l.a,{path:"/signup",element:Oe}),Object(k.jsx)(l.a,{path:"/orderHistory",element:pe}),Object(k.jsx)(l.a,{path:"/products/:id",element:te}),Object(k.jsx)(l.a,{path:"*",element:ie})]})]})})})})},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(fe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[82,1,2]]]);
//# sourceMappingURL=main.13e98710.chunk.js.map