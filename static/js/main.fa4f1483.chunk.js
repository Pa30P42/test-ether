(this.webpackJsonpether_test=this.webpackJsonpether_test||[]).push([[0],{1:function(e,t,a){e.exports={table:"TransactionItem_table__2oiL3",hash:"TransactionItem_hash__3danS",block:"TransactionItem_block__2X5u9",age:"TransactionItem_age__3s1eR",from:"TransactionItem_from__9GN1N",to:"TransactionItem_to__3pLWM",value:"TransactionItem_value__vyA7Y"}},10:function(e,t,a){e.exports={title:"Balance_title__3uHOn",titleContainer:"Balance_titleContainer__2mwTD",balanceNum:"Balance_balanceNum__Fgf-I"}},23:function(e,t,a){e.exports={title:"Header_title__3Jm01"}},27:function(e,t,a){e.exports=a(52)},32:function(e,t,a){},4:function(e,t,a){e.exports={container:"Transactions_container__17BO-",button:"Transactions_button__26Mru",tableContainer:"Transactions_tableContainer__3HtQK"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(32),a(23)),s=a.n(o);var u=function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:s.a.title},"Etherscan"))},m=a(6),i=a(3),E=a.n(i),p=a(7),f=a(8),b=a.n(f),h="BPWQ3DP4NUAZNXIG1BVRXWXK22ICX2GXMZ",d="0xa145ac099e3d2e9781c9c848249e2e6b256b030d",_=function(){return Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b.a.get("https://api.etherscan.io/api?module=account&action=balance&address=".concat(d,"&tag=latest&apikey=").concat(h,"\n")),e.abrupt("return",t);case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},v=function(){return Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b.a.get("https://api.etherscan.io/api?module=account&action=txlist&address=".concat(d,"&startblock=0&endblock=99999999&page=1000&offset=10&sort=asc&apikey=").concat(h)),e.abrupt("return",t);case 5:throw e.prev=5,e.t0=e.catch(0),new Error;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},N=function(){return Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b.a.get("\n      https://api.etherscan.io/api?module=account&action=txlistinternal&address=".concat(d,"&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=").concat(h)),e.abrupt("return",t);case 5:throw e.prev=5,e.t0=e.catch(0),new Error;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},k=function(){return Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b.a.get("https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=".concat(d,"&page=1&offset=100&sort=asc&apikey=").concat(h)),e.abrupt("return",t);case 5:throw e.prev=5,e.t0=e.catch(0),new Error;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},T=a(10),w=a.n(T);var g=function(){var e=Object(n.useState)("0"),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){_().then((function(e){c(e.data.result/1e18)}))}),[]),r.a.createElement("div",{className:w.a.titleContainer},r.a.createElement("h2",{className:w.a.title},"Ether Balance: ",r.a.createElement("p",{className:w.a.balanceNum},a)))},O=a(11),x=a(24),j=a.n(x),I=a(26),C=(a(21),a(1)),B=a.n(C);var y=function(e){var t=e.transactions,a=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:B.a.table,minimal:"sm",striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{className:B.a.hash},"Txn Hash"),r.a.createElement("th",{className:B.a.block},"Block"),r.a.createElement("th",{className:B.a.age},"Age"),r.a.createElement("th",{className:B.a.from},"From"),r.a.createElement("th",{className:B.a.to},"To"),r.a.createElement("th",{className:B.a.value},"Value"))),r.a.createElement("tbody",null,t.length>0?t.map((function(e){return a+=1,r.a.createElement("tr",{key:e.value},r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.hash},e.blockHash)),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.block},e.blockNumber)),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.age},function(e){var t=1e3*e;return j()(t).startOf("minutes").fromNow()}(e.timeStamp))),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.from},e.from)),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.to},e.to)),r.a.createElement("td",null,r.a.createElement("p",{className:B.a.value},e.value/1e18)))})):r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"No Info"),r.a.createElement("td",null,"---"),r.a.createElement("td",null,"---"),r.a.createElement("td",null,"---"),r.a.createElement("td",null,"---"),r.a.createElement("td",null,"---")))))},S=a(4),X=a.n(S);var F=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){"Transactions"===s&&v().then((function(e){c(Object(O.a)(e.data.result))})),"Internal"===s&&N().then((function(e){c(Object(O.a)(e.data.result))})),"Token"===s&&k().then((function(e){c(Object(O.a)(e.data.result))}))}),[s]),r.a.createElement("div",null,r.a.createElement("ul",{className:X.a.container},r.a.createElement("li",null,r.a.createElement("button",{className:X.a.button,onClick:function(){u("Transactions")}},"Transactions")),r.a.createElement("li",null,r.a.createElement("button",{className:X.a.button,onClick:function(){u("Internal")}},"Internal Txns")),r.a.createElement("li",null,r.a.createElement("button",{className:X.a.button,onClick:function(){u("Token")}},"ERC20 Token Txns"))),r.a.createElement("div",{className:X.a.tableContainer},r.a.createElement(y,{transactions:a})))};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(F,null))};var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(H,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fa4f1483.chunk.js.map