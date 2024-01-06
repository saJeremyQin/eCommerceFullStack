(function(){"use strict";var t={8252:function(t,e,r){var o=r(9242),n=r(3396),a=r(4870),u=r.p+"img/logo-hexagon.d2768201.svg",s=r(4690);const c={class:"nav-bar"},i={class:"logo-wrap"},l=["src"],d={class:"nav-buttons-wrap"},p=(0,n._)("button",null,"Shopping Cart",-1);var v={__name:"NavBar",props:{user:{type:Object,default:null}},setup(t){const e=t,r=async()=>{const t=(0,s.v0)();(0,s.w7)(t)};return(t,o)=>{const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(s,{to:"/products",class:"products-link"},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("img",{src:(0,a.SU)(u)},null,8,l)])])),_:1}),(0,n._)("div",d,[e.user?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:r},"Sign Out")):(0,n.kq)("",!0),(0,n.Wm)(s,{to:"/cart"},{default:(0,n.w5)((()=>[p])),_:1})])])}}};const g=v;var m=g;const f={class:"page-wrap"};var w={__name:"App",setup(t){const e=(0,a.iH)(null);return(0,n.bv)((()=>{const t=(0,s.v0)();(0,s.Aj)(t,(t=>{e.value=t}))})),(t,r)=>{const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{user:e.value},null,8,["user"]),(0,n._)("div",f,[(0,n.Wm)(o,{user:e.value},null,8,["user"])])],64)}}};const h=w;var y=h,b=r(2483),_=r(1076),k=r(7139);const D={class:"grid-wrap"},P=["src"],S={class:"product-name"},O={class:"product-price"},C=(0,n._)("button",null,"View Details",-1);var I={__name:"ProductsList",props:{products:{type:Array,required:!0}},setup(t){const e=t;return(t,r)=>{const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product-item",key:t.id},[(0,n._)("img",{src:t.imageUrl},null,8,P),(0,n._)("h3",S,(0,k.zw)(t.name),1),(0,n._)("p",O,(0,k.zw)(t.price),1),(0,n.Wm)(o,{to:"products/"+t.id},{default:(0,n.w5)((()=>[C])),_:2},1032,["to"])])))),128))])}}};const j=I;var Y=j;const Z=(0,n._)("h1",null,"Products",-1);var F={__name:"ProductsPage",setup(t){const e=(0,a.iH)([]);return(0,n.bv)((async()=>{try{const t=await _.Z.get("/api/products");e.value=t.data}catch(t){}})),(t,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[Z,(0,n.Wm)(Y,{products:e.value},null,8,["products"])],64))}};const H=F;var W=H;r(560);function $(t,e){return(0,n.wg)(),(0,n.iD)("h1",null,"404: Page Not Found")}var z=r(89);const A={},x=(0,z.Z)(A,[["render",$]]);var q=x;const K={key:0},M={class:"img-wrap"},T=["src"],U={class:"product-details"},B={class:"price"},E={key:1,class:"grey-button"},L={key:1};var N={__name:"ProductDetailPage",props:{user:{type:Object,default:null}},setup(t){const e=t,r=(0,a.iH)(),o=(0,a.iH)([]),u=(0,n.Fl)((()=>{const t=r.value.id;return o.value.some((e=>e.id===t))})),c=(0,b.yj)(),i=async()=>{const t=prompt("Please input your email");if(null===t)return;const e=(0,s.v0)(),o={url:`https://vue-ecommerce-fullstack.onrender.com/products/${r.value.id}`,handleCodeInApp:!0};await(0,s.oo)(e,t,o),alert("A login link is sent to the email you provided."),window.localStorage.setItem("emailForSignIn",t)},l=async()=>{try{console.log("add to cart, uid",e.user.uid);const t=await _.Z.post(`/api/users/${e.user.uid}/cart`,{id:r.value.id});console.log("add to cart, response",t.data),gt.push({path:"/cart"})}catch(t){}};return(0,n.YP)((async()=>{if(e.user){const t=await _.Z.get(`/api/users/${e.user.uid}/cart`);o.value=t.data}})),(0,n.bv)((async()=>{console.log("On mounted",e.user);const t=(0,s.v0)();if((0,s.JB)(t,window.location.href)){let e=window.localStorage.getItem("emailForSignIn");e||(e=window.prompt("Please provide your email for confirmation")),(0,s.P6)(t,e,window.location.href).then((t=>{alert(`${t.user.uid},You have successfully signed in`),window.localStorage.removeItem("emailForSignIn")})).catch((t=>{console.log(t.message)}))}const n=c.params.productId;let a=await _.Z.get(`/api/products/${n}`);if(r.value=a.data,e.user){console.log("get carts of",e.user.uid);const t=await _.Z.get(`/api/users/${e.user.uid}/cart`);o.value=t.data}})),(t,o)=>r.value?((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("div",M,[(0,n._)("img",{src:r.value.imageUrl},null,8,T)]),(0,n._)("div",U,[(0,n._)("h1",null,(0,k.zw)(r.value.name),1),(0,n._)("h3",B,(0,k.zw)(r.value.price),1),e.user&&!u.value?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"add-to-cart",onClick:l},"Add to Cart")):(0,n.kq)("",!0),e.user&&u.value?((0,n.wg)(),(0,n.iD)("button",E,"Items Already exist")):(0,n.kq)("",!0),e.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:2,class:"sign-in",onClick:i},"Sign in to add to Cart"))])])):((0,n.wg)(),(0,n.iD)("div",L,[(0,n.Wm)(q)]))}};const J=N;var R=J,V=r(1373);const G=(0,V.Z)();var Q=G;const X=["src"],tt={class:"details-wrap"},et=["onClick"];var rt={__name:"ShoppingCartList",props:["products"],setup(t){const e=t=>{Q.emit("removeFrom-Cart",t)};return(r,o)=>((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product-container",key:t.id},[(0,n._)("img",{class:"product-image",src:t.imageUrl},null,8,X),(0,n._)("div",tt,[(0,n._)("h3",null,(0,k.zw)(t.name),1),(0,n._)("p",null,(0,k.zw)(t.price),1)]),(0,n._)("button",{class:"remove-button",onClick:r=>e(t.id)},"Remove from Cart",8,et)])))),128))}};const ot=rt;var nt=ot;const at=(0,n._)("h1",null,"Shopping Cart",-1),ut={key:0},st=(0,n._)("button",{class:"checkout-button"},"Proceed to Checkout",-1),ct={key:1};var it={__name:"ShoppingCartPage",props:{user:{type:Object,default:null}},setup(t){const e=(0,a.iH)([]),r=t;return Q.on("removeFrom-Cart",(async t=>{try{const o=await _.Z.delete(`/api/users/${r.user.uid}/cart/${t}`);e.value=o.data}catch(o){}})),(0,n.YP)((async()=>{if(r.user){const t=await _.Z.get(`/api/users/${r.user.uid}/cart`);e.value=t.data}})),(0,n.bv)((async()=>{if(r.user){const t=await _.Z.get(`/api/users/${r.user.uid}/cart`);e.value=t.data,console.log("mounted cartItem is",e.value)}})),(t,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[at,e.value.length>0?((0,n.wg)(),(0,n.iD)("div",ut,[(0,n.Wm)(nt,{products:e.value},null,8,["products"]),st])):((0,n.wg)(),(0,n.iD)("div",ct," You have no items in your cart yet. "))],64))}};const lt=it;var dt=lt;const pt=[{path:"/products",component:W},{path:"/products/:productId",component:R},{path:"/cart",component:dt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:q}],vt=(0,b.p7)({history:(0,b.PO)(),routes:pt});var gt=vt,mt=r(7795);const ft={apiKey:"AIzaSyDzFKuh7aWmj5h0AckP3_WYbeoxIzyEb5Y",authDomain:"ecommerceapp-ddb6a.firebaseapp.com",projectId:"ecommerceapp-ddb6a",storageBucket:"ecommerceapp-ddb6a.appspot.com",messagingSenderId:"466213292373",appId:"1:466213292373:web:f64c6bfa45fed619eb87dc"};(0,mt.ZF)(ft),(0,o.ri)(y).use(gt).mount("#app")}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,a){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<u&&(u=a));if(s){t.splice(l--,1);var i=n();void 0!==i&&(e=i)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,n,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,a,u=o[0],s=o[1],c=o[2],i=0;if(u.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r)}for(e&&e(o);i<u.length;i++)a=u[i],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(8252)}));o=r.O(o)})();
//# sourceMappingURL=app.38003c07.js.map