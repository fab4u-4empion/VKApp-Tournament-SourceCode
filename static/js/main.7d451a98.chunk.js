(this.webpackJsonptournemnt=this.webpackJsonptournemnt||[]).push([[0],{248:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);n(170),n(197),n(199),n(200),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239);var r,c=n(0),i=n.n(c),s=n(42),o=n.n(s),a=n(39),d=n.n(a),l=(n(247),n(248),n(23)),u=n(63),j=n(64),b=n(66),h=n(65),p=n(266),f=n(12),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1,networkError:!1},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return window.addEventListener("offline",(function(){e.setState({networkError:!0})})),this.state.hasError?Object(f.jsxs)(l.u,{stretched:!0,icon:Object(f.jsx)(p.a,{fill:"var(--red)"}),children:["\u041d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 ",Object(f.jsx)("br",{})," \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043e\u0447\u0438\u0441\u0442\u043a\u043e\u0439 \u043a\u044d\u0448\u0430"]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(i.a.Component),w=n(267);var m=function(){var e=new XMLHttpRequest;e.open("GET","https://wotbtournamentvkapp.ru/vkapp/activeSubscriptions".concat(window.location.search),!0),e.send(),e.onload=function(){try{r=JSON.parse(e.responseText),sessionStorage.setItem("activeSubscriptions",JSON.stringify(r))}catch(t){console.log(t)}}};d.a.send("VKWebAppInit");var v,x=!1,E=0,g=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,288))})),y=Object(f.jsx)(l.d,{children:Object(f.jsx)(l.e,{children:Object(f.jsx)(l.B,{children:Object(f.jsx)(l.q,{children:Object(f.jsxs)(l.u,{Placeholder:!0,stretched:!0,icon:Object(f.jsx)(w.a,{fill:"var(--red)"}),children:["\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 Cookie ",Object(f.jsx)("br",{})," \u0438\u043b\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0438\u043d\u043a\u043e\u0433\u043d\u0438\u0442\u043e"]})})})})});function k(){return Object(f.jsx)(l.d,{children:Object(f.jsx)(l.e,{children:Object(f.jsx)(l.B,{children:Object(f.jsx)(l.q,{children:Object(f.jsx)(O,{children:Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(l.w,{}),children:Object(f.jsx)(g,{})})})})})})})}window.history.pushState(null,null),d.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&document.body.setAttribute("scheme",e.detail.data.scheme)}));try{localStorage.setItem("test","test"),m(),o.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}catch(S){o.a.render(y,document.getElementById("root"))}Promise.all([n.e(4),n.e(6)]).then(n.bind(null,287)).then((function(e){e.default})),window.addEventListener("load",(function(){v=(new Date).getTime()})),window.addEventListener("focus",(function(){!x&&E<6&&(m(),x=!0,E+=1,(new Date).getTime()-v>2500&&(E=0,v=(new Date).getTime()),6==E&&setTimeout((function(){E=0}),3e4))})),window.addEventListener("blur",(function(){x&&(x=!1)}))}},[[265,1,2]]]);
//# sourceMappingURL=main.7d451a98.chunk.js.map