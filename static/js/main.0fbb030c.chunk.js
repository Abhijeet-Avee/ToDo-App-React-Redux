(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(7),a=n.n(i),d=(n(21),n(22),n(15)),s=(n(23),n(8)),r=n(10),u=Object(r.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.push(t.payload)},setCheck:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(!0===e.done?e.done=!1:e.done=!0)}))}}}),j=u.actions,l=j.saveTodo,b=j.setCheck,h=function(e){return e.todos.todoList},p=u.reducer,m=n(2),O=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.b)();return Object(m.jsxs)("div",{className:"input",children:[Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){console.log("Adding ".concat(n)),i(l({item:n,done:!1,id:Date.now()}))},children:"Add"})]})},v=(n(30),n(47)),x=function(e){var t=e.name,n=e.done,o=e.id,c=Object(s.b)();return Object(m.jsxs)("div",{className:"todoItem",children:[Object(m.jsx)(v.a,{checked:n,color:"primary",onChange:function(){c(b(o))},inputProps:{"aria-label":"secondary checkbox"}}),Object(m.jsx)("p",{className:n&&"todoItem--done",children:t})]})};var f=function(){var e=Object(s.c)(h);return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"app_container",children:[Object(m.jsx)("div",{className:"app_todoContainer",children:e.map((function(e){return Object(m.jsx)(x,{name:e.item,done:e.done,id:e.id})}))}),Object(m.jsx)(O,{})]})})},g=Object(r.a)({reducer:{todos:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(s.a,{store:g,children:Object(m.jsx)(f,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.0fbb030c.chunk.js.map