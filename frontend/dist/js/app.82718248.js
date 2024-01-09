(function(){"use strict";var e={9287:function(e,t,a){var n=a(9242),r=a(3396),o=(a(560),a(4870)),u=a.p+"img/logo-hexagon.d2768201.svg",s=a(4690),l=a(2483),c=a(1076),i=a(7139),d={__name:"ProductsList",props:{products:{type:Array,required:!0}},setup(e){const t=e;return(e,a)=>{const n=(0,r.up)("v-img"),o=(0,r.up)("v-card-title"),u=(0,r.up)("v-card-subtitle"),s=(0,r.up)("v-btn"),l=(0,r.up)("v-card"),c=(0,r.up)("v-col"),d=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(d,{class:"mt-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(e=>((0,r.wg)(),(0,r.j4)(c,{cols:"12",md:"4",key:e.id},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{src:e.imageUrl},null,8,["src"]),(0,r.Wm)(o,{class:"product-name"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.name),1)])),_:2},1024),(0,r.Wm)(u,{class:"product-price"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.price),1)])),_:2},1024),(0,r.Wm)(s,{to:"products/"+e.id,class:"mb-4 btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)(" View Details ")])),_:2},1032,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}},p=a(89);const v=(0,p.Z)(d,[["__scopeId","data-v-619108ce"]]);var f=v;const m=(0,r._)("h1",null,"Products",-1);var w={__name:"ProductsPage",setup(e){const t=(0,o.iH)([]);return(0,r.bv)((async()=>{try{const e=await c.Z.get("/api/products");t.value=e.data}catch(e){}})),(e,a)=>{const n=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(n,null,{default:(0,r.w5)((()=>[m,(0,r.Wm)(f,{products:t.value},null,8,["products"])])),_:1})}}};const g=w;var _=g;function y(e,t){return(0,r.wg)(),(0,r.iD)("h1",null,"404: Page Not Found")}const b={},h=(0,p.Z)(b,[["render",y]]);var k=h;const W={key:0},j={class:"d-flex flex-no-wrap justify-space-between"},x={key:1};var I={__name:"ProductDetailPage",props:{user:{type:Object,default:null}},setup(e){const t=e,a=(0,o.iH)(),n=(0,o.iH)([]),u=(0,r.Fl)((()=>{const e=a.value.id;return n.value.some((t=>t.id===e))})),d=(0,l.yj)(),p=async()=>{const e=prompt("Please input your email");if(null===e)return;const t=(0,s.v0)(),n={url:`https://vue-ecommerce-fullstack.onrender.com/products/${a.value.id}`,handleCodeInApp:!0};await(0,s.oo)(t,e,n),alert("A login link is sent to the email you provided."),window.localStorage.setItem("emailForSignIn",e)},v=async()=>{try{console.log("add to cart, uid",t.user.uid);const e=await c.Z.post(`/api/users/${t.user.uid}/cart`,{id:a.value.id});console.log("add to cart, response",e.data),E.push({path:"/cart"})}catch(e){}};return(0,r.YP)((async()=>{if(t.user){const e=await c.Z.get(`/api/users/${t.user.uid}/cart`);n.value=e.data}})),(0,r.bv)((async()=>{console.log("On mounted",t.user);const e=(0,s.v0)();if((0,s.JB)(e,window.location.href)){let t=window.localStorage.getItem("emailForSignIn");t||(t=window.prompt("Please provide your email for confirmation")),(0,s.P6)(e,t,window.location.href).then((e=>{alert(`${e.user.uid},You have successfully signed in`),window.localStorage.removeItem("emailForSignIn")})).catch((e=>{console.log(e.message)}))}const r=d.params.productId;let o=await c.Z.get(`/api/products/${r}`);if(a.value=o.data,t.user){console.log("get carts of",t.user.uid);const e=await c.Z.get(`/api/users/${t.user.uid}/cart`);n.value=e.data}})),(e,n)=>{const o=(0,r.up)("v-img"),s=(0,r.up)("v-col"),l=(0,r.up)("v-text"),c=(0,r.up)("v-btn"),d=(0,r.up)("v-row"),f=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[a.value?((0,r.wg)(),(0,r.iD)("div",W,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{src:a.value.imageUrl,alt:"Product Image",class:"detail-img"},null,8,["src"])])),_:1}),(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[(0,r._)("div",j,[(0,r.Wm)(l,{class:"text-h3"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.value.name),1)])),_:1}),(0,r.Wm)(l,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.value.price),1)])),_:1})])])),_:1}),(0,r.Wm)(s,{cols:"12",md:"10","offset-md":"1"},{default:(0,r.w5)((()=>[t.user&&!u.value?((0,r.wg)(),(0,r.j4)(c,{key:0,onClick:v,block:"true",class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Add to Cart ")])),_:1})):(0,r.kq)("",!0),t.user&&u.value?((0,r.wg)(),(0,r.j4)(c,{key:1,disabled:"",class:"btn-style",block:"true"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Items Already Exist ")])),_:1})):(0,r.kq)("",!0),t.user?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(c,{key:2,onClick:p,class:"btn-style",block:"true"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Sign in to add to Cart ")])),_:1}))])),_:1})])),_:1})])):((0,r.wg)(),(0,r.iD)("div",x,[(0,r.Wm)(k)]))])),_:1})}}};const P=(0,p.Z)(I,[["__scopeId","data-v-e92aa078"]]);var S=P,C=a(1373);const O=(0,C.Z)();var U=O;const Z={class:"d-flex flex-no-wrap justify-space-between"},z={class:"d-flex flex-no-wrap align-center"};var D={__name:"ShoppingCartList",props:["products"],setup(e){const t=e=>{U.emit("removeFrom-Cart",e)};return(a,n)=>{const o=(0,r.up)("v-img"),u=(0,r.up)("v-avatar"),s=(0,r.up)("v-card-title"),l=(0,r.up)("v-card-subtitle"),c=(0,r.up)("v-btn"),d=(0,r.up)("v-card-actions"),p=(0,r.up)("v-col"),v=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(v,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.products,(e=>((0,r.wg)(),(0,r.j4)(p,{cols:"12",key:e.id},{default:(0,r.w5)((()=>[(0,r._)("div",Z,[(0,r._)("div",z,[(0,r.Wm)(u,{class:"ma-3",size:"125",rounded:"0"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{src:e.imageUrl},null,8,["src"])])),_:2},1024),(0,r._)("div",null,[(0,r.Wm)(s,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.name),1)])),_:2},1024),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.price),1)])),_:2},1024)])]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"ms-2 btn-style",variant:"outlined",size:"small",onClick:a=>t(e.id)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Remove from Cart ")])),_:2},1032,["onClick"])])),_:2},1024)])])),_:2},1024)))),128))])),_:1})}}};const F=(0,p.Z)(D,[["__scopeId","data-v-6b2e57f4"]]);var $=F;const A=e=>((0,r.dD)("data-v-3a90c022"),e=e(),(0,r.Cn)(),e),Y=A((()=>(0,r._)("h1",null,"Shopping Cart",-1))),H=A((()=>(0,r._)("p",null,"You have no items in your cart yet.",-1)));var q={__name:"ShoppingCartPage",props:{user:{type:Object,default:null}},setup(e){const t=(0,o.iH)([]),a=e;return U.on("removeFrom-Cart",(async e=>{try{const n=await c.Z.delete(`/api/users/${a.user.uid}/cart/${e}`);t.value=n.data}catch(n){}})),(0,r.YP)((async()=>{if(a.user){const e=await c.Z.get(`/api/users/${a.user.uid}/cart`);t.value=e.data}})),(0,r.bv)((async()=>{if(a.user){const e=await c.Z.get(`/api/users/${a.user.uid}/cart`);t.value=e.data,console.log("mounted cartItem is",t.value)}})),(e,a)=>{const n=(0,r.up)("v-col"),o=(0,r.up)("v-row"),u=(0,r.up)("v-btn"),s=(0,r.up)("v-container");return(0,r.wg)(),(0,r.j4)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{cols:"12"},{default:(0,r.w5)((()=>[Y])),_:1})])),_:1}),t.value.length>0?((0,r.wg)(),(0,r.j4)(o,{key:0},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)($,{products:t.value},null,8,["products"]),(0,r.Wm)(u,{block:"true",class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)("Proceed to Checkout")])),_:1})])),_:1})])),_:1})):((0,r.wg)(),(0,r.j4)(o,{key:1},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{class:"text-center"},{default:(0,r.w5)((()=>[H])),_:1})])),_:1}))])),_:1})}}};const K=(0,p.Z)(q,[["__scopeId","data-v-3a90c022"]]);var M=K;const T=[{path:"/products",component:_},{path:"/products/:productId",component:S},{path:"/cart",component:M},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:k}],B=(0,l.p7)({history:(0,l.PO)(),routes:T});var E=B;const L={class:"d-flex flex-no-wrap justify-space-between nav-bar"},N={class:"d-flex align-center mr-4"};var R={__name:"NavBar",props:{user:{type:Object,default:null}},setup(e){const t=e,a=async()=>{const e=(0,s.v0)();(0,s.w7)(e),E.push({path:"/products"})};return(e,n)=>{const s=(0,r.up)("v-img"),l=(0,r.up)("router-link"),c=(0,r.up)("v-btn"),i=(0,r.up)("v-col"),d=(0,r.up)("v-row");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{cols:"12"},{default:(0,r.w5)((()=>[(0,r._)("div",L,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/products",class:"products-link"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{class:"logo-img",src:(0,o.SU)(u)},null,8,["src"])])),_:1})]),(0,r._)("div",N,[t.user?((0,r.wg)(),(0,r.j4)(c,{key:0,onClick:a,class:"signout-btn"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Out")])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(l,{to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"btn-style"},{default:(0,r.w5)((()=>[(0,r.Uk)("Shopping Cart")])),_:1})])),_:1})])])])),_:1})])),_:1})}}};const J=(0,p.Z)(R,[["__scopeId","data-v-074e7ef4"]]);var V=J;const G={class:"page-wrap"};var Q={__name:"App",setup(e){const t=(0,o.iH)(null);return(0,r.bv)((()=>{const e=(0,s.v0)();(0,s.Aj)(e,(e=>{t.value=e}))})),(e,a)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(V,{user:t.value},null,8,["user"]),(0,r._)("div",G,[(0,r.Wm)(n,{user:t.value},null,8,["user"])])],64)}}};const X=Q;var ee=X,te=(a(9773),a(8957)),ae=a(4926),ne=a(8600),re=a(7795);const oe=(0,te.Rd)({components:ae,directives:ne}),ue={apiKey:"AIzaSyDzFKuh7aWmj5h0AckP3_WYbeoxIzyEb5Y",authDomain:"ecommerceapp-ddb6a.firebaseapp.com",projectId:"ecommerceapp-ddb6a",storageBucket:"ecommerceapp-ddb6a.appspot.com",messagingSenderId:"466213292373",appId:"1:466213292373:web:f64c6bfa45fed619eb87dc"};(0,re.ZF)(ue),(0,n.ri)(ee).use(E).use(oe).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var u=1/0;for(i=0;i<e.length;i++){n=e[i][0],r=e[i][1],o=e[i][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||u>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<u&&(u=o));if(s){e.splice(i--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],s=n[1],l=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var i=l(a)}for(t&&t(n);c<u.length;c++)o=u[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(i)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9287)}));n=a.O(n)})();
//# sourceMappingURL=app.82718248.js.map