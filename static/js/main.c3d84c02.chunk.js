(this["webpackJsonpbasket-app-ts"]=this["webpackJsonpbasket-app-ts"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"categories":[{"id":1,"name":"Fruit"},{"id":2,"name":"Vegetable"},{"id":3,"name":"Dairy"},{"id":4,"name":"Meat"},{"id":5,"name":"Grain"}],"products":[{"id":1,"name":"Strawberry","categoryId":1},{"id":2,"name":"Blueberry","categoryId":1},{"id":3,"name":"Orange","categoryId":1},{"id":4,"name":"Banana","categoryId":1},{"id":5,"name":"Apple","categoryId":1},{"id":6,"name":"Carrot","categoryId":2},{"id":7,"name":"Celery","categoryId":2},{"id":8,"name":"Mushroom","categoryId":2},{"id":9,"name":"Green Pepper","categoryId":2},{"id":10,"name":"Eggs","categoryId":3},{"id":11,"name":"Cheese","categoryId":3},{"id":12,"name":"Butter","categoryId":3},{"id":13,"name":"Chicken","categoryId":4},{"id":14,"name":"Beef","categoryId":4},{"id":15,"name":"Pork","categoryId":4},{"id":16,"name":"Fish","categoryId":4},{"id":17,"name":"Rice","categoryId":5},{"id":18,"name":"Pasta","categoryId":5},{"id":19,"name":"Bread","categoryId":5}]}')},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(8),s=t.n(r),i=t(5),o=t(10),d=t(3),u=t(16),l=t(4),j=t(14),b=t.n(j),m=t(17),O=t(7);function p(e){return new Promise((function(n){setTimeout((function(){return n(e)}),210)}))}var h=Object(O.b)("basket/delete",function(){var e=Object(m.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f=Object(O.c)({name:"basket",initialState:{pendings:[],purchased:[],isClear:!1,status:"idle"},reducers:{addItem:function(e,n){e.pendings.some((function(e){return e.name===n.payload.name}))?e.pendings.map((function(e){return e.id===n.payload.id?Object(l.a)(Object(l.a)({},e),{},{count:e.count++}):e})):e.pendings=[].concat(Object(u.a)(e.pendings),[Object(l.a)(Object(l.a)({},n.payload),{},{count:1})])},removeItem:function(e,n){e.pendings=e.pendings.filter((function(e){return e.name!==n.payload.name}))},incrementQuantity:function(e,n){e.pendings.map((function(e){return e.id===n.payload.id?Object(l.a)(Object(l.a)({},e),{},{count:e.count++}):e}))},reduceQuantity:function(e,n){e.pendings.map((function(e){return e.id===n.payload.id&&e.count>1?Object(l.a)(Object(l.a)({},e),{},{count:e.count--}):e}))},buyProduct:function(e,n){console.log(n.payload);var t={date:(new Date).toISOString(),products:n.payload};e.pendings=[],e.purchased.length>0?e.purchased=[t].concat(Object(u.a)(e.purchased)):e.purchased=[t]},clearPendings:function(e){e.pendings=[]},toggleClear:function(e){e.isClear=!e.isClear}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,n){e.status="idle",e.pendings=e.pendings.filter((function(e){return e.name!==n.payload.name}))}))}}),g=f.actions,x=g.addItem,v=(g.removeItem,g.incrementQuantity),y=g.reduceQuantity,k=g.buyProduct,N=g.clearPendings,C=g.toggleClear,I=function(e){return e.basket.pendings},w=function(e){return e.basket.purchased},S=function(e){return e.basket.isClear},B=f.reducer,L=t(15),P=t(1),E=Object(c.memo)((function(){var e=Object(d.b)(),n=Object(d.c)(S),t=Object(d.c)(I);return Object(P.jsx)("div",{className:"lower-button",children:n?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{className:"clear-btn",onClick:function(){var n=document.querySelector(".basket-list");null===n||void 0===n||n.classList.add("clear-all"),setTimeout((function(){n.classList.remove("clear-all"),e(N()),e(C())}),200)},children:"All"}),Object(P.jsx)("span",{className:"done-btn",onClick:function(){return e(C())},children:"Done"})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{className:"clear-btn",onClick:function(){return e(C())},children:"Clear"}),Object(P.jsx)("span",{className:"done-btn",onClick:function(){return e(k(t))},children:"Buy"})]})})})),F=Object(c.memo)((function(e){var n=e.item,t=Object(d.b)();function c(e){e.count>1?t(y(e)):function(e){var n=document.querySelector(".".concat(e.name.replace(/ /g,"")));null===n||void 0===n||n.classList.add("remove-item"),t(h(e))}(e)}return Object(P.jsxs)("div",{className:"li-buttons",children:[Object(P.jsx)("span",{className:"plus",onClick:function(){return t(v(n))},children:Object(P.jsx)(L.b,{})}),Object(P.jsx)("span",{className:"minus",onClick:function(){return c(n)},children:Object(P.jsx)(L.a,{})})]})})),T=Object(c.memo)((function(e){var n=e.item,t=Object(d.b)();return Object(P.jsx)("div",{className:"li-buttons",children:Object(P.jsx)("span",{className:"trash",onClick:function(){return function(e){var n=document.querySelector(".".concat(e.name.replace(/ /g,"")));null===n||void 0===n||n.classList.add("remove-item"),t(h(e))}(n)},children:Object(P.jsx)(o.b,{})})})})),Q=function(e){var n=e.toggle_list,t=Object(d.b)(),a=Object(d.c)(I),r=Object(d.c)(S),s=Object(c.useRef)(null),i=Object(c.useCallback)((function(){r&&t(C())}),[t,r]),u=Object(c.useCallback)((function(e){var t=null===s||void 0===s?void 0:s.current;if(t&&!t.contains(e.target))return i(),n()}),[n,i]);return Object(c.useEffect)((function(){return document.addEventListener("click",u),document.addEventListener("touchmove",u),function(){document.removeEventListener("click",u),document.removeEventListener("touchmove",u)}}),[i,u]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("ul",{className:"basket-list",ref:s,children:[Object(P.jsxs)("div",{className:"basket-head",children:[Object(P.jsxs)("span",{className:"total",children:["Total amount: ",Object(P.jsx)("strong",{children:a.reduce((function(e,n){return e+=n.count}),0)})]}),Object(P.jsx)("span",{className:"close-btn",onClick:n,children:Object(P.jsx)(o.a,{})})]}),0===a.length&&Object(P.jsx)("span",{className:"list-empty-message",children:"Your basket is empty..."}),Object(P.jsx)("div",{className:"scroll-wrapper",children:a.map((function(e,n){return Object(P.jsxs)("li",{className:e.name.replace(/ /g,""),children:[Object(P.jsxs)("div",{className:"info-box",children:[Object(P.jsx)("strong",{children:e.name}),Object(P.jsx)("span",{children:"Quantity: ".concat(e.count)})]}),r?Object(P.jsx)(T,{item:e}):Object(P.jsx)(F,{item:e})]},e.name+n)}))}),a.length>0&&Object(P.jsx)(E,{})]})})},A=Object(c.memo)(Q),D=t(18),q=function(){var e=Object(c.useState)(!1),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(d.c)(I),s=Object(c.useCallback)((function(){a((function(e){return!e}))}),[]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"basket-btn",onClick:s,children:[Object(P.jsx)(D.a,{}),Object(P.jsx)("div",{className:"count",children:Object(P.jsx)("span",{children:r.length})})]}),t&&Object(P.jsx)(A,{toggle_list:s})]})},G=Object(c.memo)(q),J=function(){return Object(P.jsxs)("header",{children:[Object(P.jsx)("h1",{children:"Basket App"}),Object(P.jsx)(G,{})]})},M=t(19),R=function(e){var n=e.product,t=Object(d.b)(),a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1];return Object(P.jsxs)("div",{className:"product",children:[Object(P.jsx)("span",{className:"add-btn ".concat(s?"animate":""),onClick:function(){t(x(n)),o(!0)},onAnimationEnd:function(){return o(!1)},children:Object(P.jsx)(M.a,{})}),Object(P.jsx)("span",{children:n.name})]})},W=t(20),_=function(){return Object(P.jsx)("div",{className:"grocery",children:W.products.map((function(e){return Object(P.jsx)(R,{product:e},e.id)}))})},V=function(e){var n=e.list,t=void 0===n?[]:n;return Object(P.jsxs)("ul",{children:[t.map((function(e){return Object(P.jsx)("li",{children:"".concat(e.count," x ").concat(e.name)},e.name)})),Object(P.jsx)("span",{children:"Total: ".concat(t.reduce((function(e,n){return e+=n.count}),0))})]})},Y=function(){var e=Object(d.c)(w);return Object(P.jsxs)("div",{className:"purchased",children:[0===e.length&&Object(P.jsx)("span",{className:"message",children:"There is nothing here..."}),e.map((function(e){return Object(P.jsxs)("div",{className:"purchased-list",children:[Object(P.jsx)("strong",{children:(n=e.date,new Date(n).toLocaleString("it-IT",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))}),Object(P.jsx)(V,{list:e.products})]},e.date);var n}))]})},$=function(){var e=Object(c.useState)(!0),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(P.jsxs)("main",{children:[Object(P.jsxs)("div",{className:"nav-btns",children:[Object(P.jsx)("span",{className:t?"active":"",onClick:function(){return a(!0)},children:"Grocery"}),Object(P.jsx)("span",{className:t?"":"active",onClick:function(){return a(!1)},children:"Purchased"}),Object(P.jsx)("span",{className:"slideblock ".concat(t?"":"moved")})]}),t?Object(P.jsx)(_,{}):Object(P.jsx)(Y,{})]})};t(31),t(32),t(33);var z=function(){return Object(P.jsxs)("div",{className:"app",children:[Object(P.jsx)(J,{}),Object(P.jsx)($,{})]})},H=Object(O.a)({reducer:{basket:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(d.a,{store:H,children:Object(P.jsx)(z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c3d84c02.chunk.js.map