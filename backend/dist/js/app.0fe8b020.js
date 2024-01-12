(function(){"use strict";var t={5436:function(t,e,a){var n=a(9242),r=a(3396),o=(a(560),a(4870)),u=a.p+"img/logo-hexagon.d2768201.svg",s=a(4690),l=a(2483),c=a(1076),i=a(7139),d={__name:"ProductsList",props:{products:{type:Array,required:!0}},setup(t){const e=t;return(t,a)=>{const n=(0,r.up)("v-img"),o=(0,r.up)("v-card-title"),u=(0,r.up)("v-card-subtitle"),s=(0,r.up)("v-btn"),l=(0,r.up)("v-card"),c=(0,r.up)("v-col"),d=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(d,{class:"mt-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.products,(t=>((0,r.wg)(),(0,r.j4)(c,{cols:"12",md:"4",key:t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{src:t.imageUrl},null,8,["src"]),(0,r.Wm)(o,{class:"product-name"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1024),(0,r.Wm)(u,{class:"product-price"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.price),1)])),_:2},1024),(0,r.Wm)(s,{to:"products/"+t.id,class:"mb-4 btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)(" View Details ")])),_:2},1032,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}},p=a(89);const f=(0,p.Z)(d,[["__scopeId","data-v-6f14963b"]]);var v=f;const m=(0,r._)("h1",null,"Products",-1);var w={__name:"ProductsPage",setup(t){const e=(0,o.iH)([]);return(0,r.bv)((async()=>{try{const t=await c.Z.get("/api/products");e.value=t.data}catch(t){}})),(t,a)=>{const n=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(n,null,{default:(0,r.w5)((()=>[m,(0,r.Wm)(v,{products:e.value},null,8,["products"])])),_:1})}}};const g=w;var _=g;function y(t,e){return(0,r.wg)(),(0,r.iD)("h1",null,"404: Page Not Found")}const b={},h=(0,p.Z)(b,[["render",y]]);var k=h;const W={key:0},j={class:"d-flex flex-no-wrap justify-space-between"},x={key:1};var I={__name:"ProductDetailPage",props:{user:{type:Object,default:null}},setup(t){const e=t,a=(0,o.iH)(),n=(0,o.iH)([]),u=(0,r.Fl)((()=>{const t=a.value.id;return n.value.some((e=>e.id===t))})),d=(0,l.yj)(),p=async()=>{const t=prompt("Please input your email");if(null===t)return;const e=(0,s.v0)(),n={url:`https://vue-ecommerce-fullstack.onrender.com/products/${a.value.id}`,handleCodeInApp:!0};await(0,s.oo)(e,t,n),alert("A login link is sent to the email you provided."),window.localStorage.setItem("emailForSignIn",t)},f=async()=>{try{console.log("add to cart, uid",e.user.uid);const t=await c.Z.post(`/api/users/${e.user.uid}/cart`,{id:a.value.id});console.log("add to cart, response",t.data),E.push({path:"/cart"})}catch(t){}};return(0,r.YP)((async()=>{if(e.user){const t=await c.Z.get(`/api/users/${e.user.uid}/cart`);n.value=t.data}})),(0,r.bv)((async()=>{console.log("On mounted",e.user);const t=(0,s.v0)();if((0,s.JB)(t,window.location.href)){let e=window.localStorage.getItem("emailForSignIn");e||(e=window.prompt("Please provide your email for confirmation")),(0,s.P6)(t,e,window.location.href).then((t=>{alert(`${t.user.uid},You have successfully signed in`),window.localStorage.removeItem("emailForSignIn")})).catch((t=>{console.log(t.message)}))}const r=d.params.productId;let o=await c.Z.get(`/api/products/${r}`);if(a.value=o.data,e.user){console.log("get carts of",e.user.uid);const t=await c.Z.get(`/api/users/${e.user.uid}/cart`);n.value=t.data}})),(t,n)=>{const o=(0,r.up)("v-img"),s=(0,r.up)("v-col"),l=(0,r.up)("v-text"),c=(0,r.up)("v-btn"),d=(0,r.up)("v-row"),v=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(v,null,{default:(0,r.w5)((()=>[a.value?((0,r.wg)(),(0,r.iD)("div",W,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{src:a.value.imageUrl,alt:"Product Image",class:"detail-img"},null,8,["src"])])),_:1}),(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[(0,r._)("div",j,[(0,r.Wm)(l,{class:"text-h3"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.value.name),1)])),_:1}),(0,r.Wm)(l,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.value.price),1)])),_:1})])])),_:1}),(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[e.user&&!u.value?((0,r.wg)(),(0,r.j4)(c,{key:0,onClick:f,block:"true",class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Add to Cart ")])),_:1})):(0,r.kq)("",!0),e.user&&u.value?((0,r.wg)(),(0,r.j4)(c,{key:1,disabled:"",class:"btn-style",block:"true"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Items Already Exist ")])),_:1})):(0,r.kq)("",!0),e.user?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(c,{key:2,onClick:p,class:"btn-style",block:"true"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Sign in to add to Cart ")])),_:1}))])),_:1})])),_:1})])):((0,r.wg)(),(0,r.iD)("div",x,[(0,r.Wm)(k)]))])),_:1})}}};const P=(0,p.Z)(I,[["__scopeId","data-v-7fd57ef4"]]);var S=P,C=a(1373);const O=(0,C.Z)();var U=O;const Z={class:"d-flex flex-no-wrap justify-space-between"},z={class:"d-flex flex-no-wrap align-center"};var D={__name:"ShoppingCartList",props:["products"],setup(t){const e=t=>{U.emit("removeFrom-Cart",t)};return(a,n)=>{const o=(0,r.up)("v-img"),u=(0,r.up)("v-avatar"),s=(0,r.up)("v-card-title"),l=(0,r.up)("v-card-subtitle"),c=(0,r.up)("v-btn"),d=(0,r.up)("v-card-actions"),p=(0,r.up)("v-col"),f=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(t=>((0,r.wg)(),(0,r.j4)(p,{cols:"12",key:t.id},{default:(0,r.w5)((()=>[(0,r._)("div",Z,[(0,r._)("div",z,[(0,r.Wm)(u,{class:"ma-3",size:"125",rounded:"0"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{src:t.imageUrl},null,8,["src"])])),_:2},1024),(0,r._)("div",null,[(0,r.Wm)(s,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1024),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.price),1)])),_:2},1024)])]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"ms-2 btn-style",variant:"outlined",size:"small",onClick:a=>e(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Remove from Cart ")])),_:2},1032,["onClick"])])),_:2},1024)])])),_:2},1024)))),128))])),_:1})}}};const F=(0,p.Z)(D,[["__scopeId","data-v-61384a42"]]);var $=F;const A=t=>((0,r.dD)("data-v-290f8a41"),t=t(),(0,r.Cn)(),t),Y=A((()=>(0,r._)("h1",null,"Shopping Cart",-1))),H=A((()=>(0,r._)("p",null,"You have no items in your cart yet.",-1)));var q={__name:"ShoppingCartPage",props:{user:{type:Object,default:null}},setup(t){const e=(0,o.iH)([]),a=t;return U.on("removeFrom-Cart",(async t=>{try{const n=await c.Z.delete(`/api/users/${a.user.uid}/cart/${t}`);e.value=n.data}catch(n){}})),(0,r.YP)((async()=>{if(a.user){const t=await c.Z.get(`/api/users/${a.user.uid}/cart`);e.value=t.data}})),(0,r.bv)((async()=>{if(a.user){const t=await c.Z.get(`/api/users/${a.user.uid}/cart`);e.value=t.data,console.log("mounted cartItem is",e.value)}})),(t,a)=>{const n=(0,r.up)("v-col"),o=(0,r.up)("v-row"),u=(0,r.up)("v-btn"),s=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{cols:"12"},{default:(0,r.w5)((()=>[Y])),_:1})])),_:1}),e.value.length>0?((0,r.wg)(),(0,r.j4)(o,{key:0},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)($,{products:e.value},null,8,["products"]),(0,r.Wm)(u,{block:"true",class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)("Proceed to Checkout")])),_:1})])),_:1})])),_:1})):((0,r.wg)(),(0,r.j4)(o,{key:1},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{class:"text-center"},{default:(0,r.w5)((()=>[H])),_:1})])),_:1}))])),_:1})}}};const K=(0,p.Z)(q,[["__scopeId","data-v-290f8a41"]]);var M=K;const T=[{path:"/products",component:_},{path:"/products/:productId",component:S},{path:"/cart",component:M},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:k}],B=(0,l.p7)({history:(0,l.PO)(),routes:T});var E=B;const L={class:"d-flex flex-no-wrap justify-space-between nav-bar"},N={class:"d-flex align-center mr-4"};var R={__name:"NavBar",props:{user:{type:Object,default:null}},setup(t){const e=t,a=async()=>{const t=(0,s.v0)();(0,s.w7)(t),E.push({path:"/products"})};return(t,n)=>{const s=(0,r.up)("v-img"),l=(0,r.up)("router-link"),c=(0,r.up)("v-btn"),i=(0,r.up)("v-col"),d=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{cols:"12"},{default:(0,r.w5)((()=>[(0,r._)("div",L,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/products",class:"products-link"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{class:"logo-img",src:(0,o.SU)(u)},null,8,["src"])])),_:1})]),(0,r._)("div",N,[e.user?((0,r.wg)(),(0,r.j4)(c,{key:0,onClick:a,class:"signout-btn"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Out")])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(l,{to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)("Shopping Cart")])),_:1})])),_:1})])])])),_:1})])),_:1})}}};const J=(0,p.Z)(R,[["__scopeId","data-v-78cf1779"]]);var V=J;const G={class:"page-wrap"};var Q={__name:"App",setup(t){const e=(0,o.iH)(null);return(0,r.bv)((()=>{const t=(0,s.v0)();(0,s.Aj)(t,(t=>{e.value=t}))})),(t,a)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(V,{user:e.value},null,8,["user"]),(0,r._)("div",G,[(0,r.Wm)(n,{user:e.value},null,8,["user"])])],64)}}};const X=Q;var tt=X,et=(a(9773),a(8957)),at=a(4926),nt=a(8600),rt=a(7795);const ot=(0,et.Rd)({components:at,directives:nt}),ut={apiKey:"AIzaSyDzFKuh7aWmj5h0AckP3_WYbeoxIzyEb5Y",authDomain:"ecommerceapp-ddb6a.firebaseapp.com",projectId:"ecommerceapp-ddb6a",storageBucket:"ecommerceapp-ddb6a.appspot.com",messagingSenderId:"466213292373",appId:"1:466213292373:web:f64c6bfa45fed619eb87dc"};(0,rt.ZF)(ut),(0,n.ri)(tt).use(E).use(ot).mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var u=1/0;for(i=0;i<t.length;i++){n=t[i][0],r=t[i][1],o=t[i][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||u>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(s=!1,o<u&&(u=o));if(s){t.splice(i--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var i=t.length;i>0&&t[i-1][2]>o;i--)t[i]=t[i-1];t[i]=[n,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,u=n[0],s=n[1],l=n[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var i=l(a)}for(e&&e(n);c<u.length;c++)o=u[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(i)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5436)}));n=a.O(n)})();
//# sourceMappingURL=app.0fe8b020.js.map