(this.webpackJsonptournemnt=this.webpackJsonptournemnt||[]).push([[0],{265:function(e,t,s){},266:function(e,t,s){"use strict";s.r(t);s(177),s(204),s(206),s(207),s(209),s(210),s(211),s(212),s(213),s(214),s(215),s(216),s(218),s(219),s(220),s(221),s(222),s(223),s(224),s(225),s(226),s(227),s(229),s(230),s(231),s(232),s(233),s(234),s(235),s(236),s(237),s(238),s(239),s(240),s(241),s(242),s(243),s(244),s(245),s(246);var a=s(1),n=s.n(a),i=s(59),c=s.n(i),r=s(47),l=s.n(r),d=(s(254),s(24)),o=s(25),j=s(27),m=s(26),b=s(4),h=s(39),x=s(36),O=s.n(x),u=s(35),p=s.n(u),f=s(29),_=s.n(f),v=s(21),y=s.n(v),g=s(28),T=s.n(g),C=s(38),N=s.n(C),I=s(37),M=s.n(I),k=s(0);var w=function(e){var t=new Date(1e3*e.timestamp),s=t.getHours(),a=t.getMinutes(),n=t.getDate(),i=t.getMonth()+1,c=t.getFullYear(),r=i;switch(a<10&&(a="0"+a),i<10&&(r="0"+i),n<10&&(n="0"+n),e.mode){case"day":return Object(k.jsx)("span",{children:n+" "+["default","\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][i]+" "+c});case"time":return Object(k.jsx)("span",{children:s+":"+a});case"dayAndTime":return Object(k.jsx)("span",{children:n+"."+r+", "+s+":"+a});default:return Object(k.jsx)("span",{children:n+"."+r+"."+c+", "+s+":"+a})}},S=new XMLHttpRequest;S.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=upcoming",!1),S.send();var H=JSON.parse(S.responseText),B=H.data.reduce((function(e,t){var s=new XMLHttpRequest;return s.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),s.send(),e[t.tournament_id]=JSON.parse(s.responseText).data[t.tournament_id].teams,e}),{}),L=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(o.a)(s,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(h.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==H.data.length)var t=Object(k.jsx)(b.m,{activeModal:this.state.activeModal,onClose:this.modalBack,children:H.data.map((function(t){return Object(k.jsx)(b.k,{id:t.title,onClose:e.modalBack,header:Object(k.jsx)(b.l,{left:Object(k.jsx)(b.p,{onClick:e.modalBack,children:Object(k.jsx)(p.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(k.jsxs)("div",{className:"ModalPage__Content Turnament-Information__Group",children:[Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("h4",{children:t.title})}),Object(k.jsxs)(b.i,{className:"vkuiGroup--custom-separator",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"green"}}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),Object(k.jsx)(w,{timestamp:t.end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(k.jsx)("div",{style:{marginLeft:5},children:Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",B[t.tournament_id].max]})})]}),Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("p",{className:"Pre",children:t.description})})]})})}))}),s=Object(k.jsx)(b.r,{modal:t,children:H.data.map((function(t){return Object(k.jsx)(b.h,{size:"l",children:Object(k.jsxs)(b.g,{mode:"outline",children:[Object(k.jsx)("div",{className:t.status+" border"}),Object(k.jsxs)("div",{className:"TournamentCard",children:[Object(k.jsx)("div",{className:"TournamentCard__Header",children:t.title}),Object(k.jsxs)("div",{className:"TornamentCard__Info",children:[Object(k.jsxs)("div",{className:"TornamentCard__Info-Start",children:[Object(k.jsx)(O.a,{width:25,height:25}),Object(k.jsx)("div",{className:"TornamentCard__Info-Start-Text",children:Object(k.jsx)(w,{timestamp:t.start_at,mode:"day"})})]}),Object(k.jsxs)("div",{className:"TournamentCard__Info-Main",children:[Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Registration",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]})]}),Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Start",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041d\u0430\u0447\u0430\u043b\u043e \u0431\u043e\u0451\u0432"}),Object(k.jsx)("div",{style:{marginLeft:5},children:Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.start_at,mode:"dayAndTime"})]})})]})]})]}),Object(k.jsxs)("div",{className:"TornamentCard__Footer",children:[Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button",mode:"outline",before:Object(k.jsx)(M.a,{}),onClick:function(){return e.setActiveModal(t.title)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline",children:Object(k.jsx)(N.a,{})})]})]})]})})}))});else if("none"==this.props.mode)s=Object(k.jsx)("span",{});else s=Object(k.jsx)(b.q,{children:"\u041d\u0435\u0442 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432"});return s}}]),s}(n.a.Component),A=new XMLHttpRequest;A.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=registration_started",!1),A.send();var P=JSON.parse(A.responseText),F=P.data.reduce((function(e,t){var s=new XMLHttpRequest;return s.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),s.send(),e[t.tournament_id]=JSON.parse(s.responseText).data[t.tournament_id].teams,e}),{}),W=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(o.a)(s,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(h.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==P.data.length)var t=Object(k.jsx)(b.m,{activeModal:this.state.activeModal,onClose:this.modalBack,children:P.data.map((function(t){return Object(k.jsx)(b.k,{id:t.title,onClose:e.modalBack,header:Object(k.jsx)(b.l,{left:Object(k.jsx)(b.p,{onClick:e.modalBack,children:Object(k.jsx)(p.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(k.jsxs)("div",{className:"ModalPage__Content Turnament-Information__Group",children:[Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("h4",{children:t.title})}),Object(k.jsxs)(b.i,{className:"vkuiGroup--custom-separator",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"green"}}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),Object(k.jsx)(w,{timestamp:t.end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",F[t.tournament_id].max]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",F[t.tournament_id].total]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0"})," ",F[t.tournament_id].confirmed]})]})]}),Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("p",{className:"Pre",children:t.description})})]})})}))}),s=Object(k.jsx)(b.r,{modal:t,children:P.data.map((function(t){return Object(k.jsx)(b.h,{size:"l",children:Object(k.jsxs)(b.g,{mode:"outline",children:[Object(k.jsx)("div",{className:t.status+" border"}),Object(k.jsxs)("div",{className:"TournamentCard",children:[Object(k.jsx)("div",{className:"TournamentCard__Header",children:t.title}),Object(k.jsxs)("div",{className:"TornamentCard__Info",children:[Object(k.jsxs)("div",{className:"TornamentCard__Info-Start",children:[Object(k.jsx)(O.a,{width:25,height:25}),Object(k.jsx)("div",{className:"TornamentCard__Info-Start-Text",children:Object(k.jsx)(w,{timestamp:t.start_at,mode:"day"})})]}),Object(k.jsxs)("div",{className:"TournamentCard__Info-Main",children:[Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Registration",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]})]}),Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Start",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041d\u0430\u0447\u0430\u043b\u043e \u0431\u043e\u0451\u0432"}),Object(k.jsx)("div",{style:{marginLeft:5},children:Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.start_at,mode:"dayAndTime"})]})})]})]})]}),Object(k.jsxs)("div",{className:"TornamentCard__Footer",children:[Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button",mode:"outline",before:Object(k.jsx)(M.a,{}),onClick:function(){return e.setActiveModal(t.title)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline",children:Object(k.jsx)(N.a,{})})]})]})]})})}))});else if("none"==this.props.mode)s=Object(k.jsx)("span",{});else s=Object(k.jsx)(b.q,{children:"\u041d\u0435\u0442 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432 \u0441 \u043d\u0430\u0447\u0430\u0432\u0448\u0435\u0439\u0441\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439"});return s}}]),s}(n.a.Component),G=new XMLHttpRequest;G.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=registration_finished",!1),G.send();var R=JSON.parse(G.responseText),z=R.data.reduce((function(e,t){var s=new XMLHttpRequest;return s.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),s.send(),e[t.tournament_id]=JSON.parse(s.responseText).data[t.tournament_id].teams,e}),{}),q=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(o.a)(s,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(h.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==R.data.length)var t=Object(k.jsx)(b.m,{activeModal:this.state.activeModal,onClose:this.modalBack,children:R.data.map((function(t){return Object(k.jsx)(b.k,{id:t.title,onClose:e.modalBack,header:Object(k.jsx)(b.l,{left:Object(k.jsx)(b.p,{onClick:e.modalBack,children:Object(k.jsx)(p.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(k.jsxs)("div",{className:"ModalPage__Content Turnament-Information__Group",children:[Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("h4",{children:t.title})}),Object(k.jsxs)(b.i,{className:"vkuiGroup--custom-separator",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsx)("div",{style:{marginLeft:5},children:Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"green"}}),Object(k.jsx)(w,{timestamp:t.start_at})]})}),Object(k.jsx)("div",{style:{marginLeft:5},children:Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),Object(k.jsx)(w,{timestamp:t.end_at})]})}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",z[t.tournament_id].max]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",z[t.tournament_id].total]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0"})," ",z[t.tournament_id].confirmed]})]})]}),Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("p",{className:"Pre",children:t.description})})]})})}))}),s=Object(k.jsx)(b.r,{modal:t,children:R.data.map((function(t){return Object(k.jsx)(b.h,{size:"l",children:Object(k.jsxs)(b.g,{mode:"outline",children:[Object(k.jsx)("div",{className:t.status+" border"}),Object(k.jsxs)("div",{className:"TournamentCard",children:[Object(k.jsx)("div",{className:"TournamentCard__Header",children:t.title}),Object(k.jsxs)("div",{className:"TornamentCard__Info",children:[Object(k.jsxs)("div",{className:"TornamentCard__Info-Start",children:[Object(k.jsx)(O.a,{width:25,height:25}),Object(k.jsx)("div",{className:"TornamentCard__Info-Start-Text",children:Object(k.jsx)(w,{timestamp:t.start_at,mode:"day"})})]}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main TournamentCard__Info-Main-OneItem",children:Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Start",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.end_at})]})]})]})})]}),Object(k.jsxs)("div",{className:"TornamentCard__Footer",children:[Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button",mode:"outline",before:Object(k.jsx)(M.a,{}),onClick:function(){return e.setActiveModal(t.title)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline",children:Object(k.jsx)(N.a,{})})]})]})]})})}))});else if("none"==this.props.mode)s=Object(k.jsx)("span",{});else s=Object(k.jsx)(b.q,{children:"\u041d\u0435\u0442 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432 \u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439"});return s}}]),s}(n.a.Component),J=new XMLHttpRequest;J.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=running",!1),J.send();var X=JSON.parse(J.responseText),K=X.data.reduce((function(e,t){var s=new XMLHttpRequest;return s.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),s.send(),e[t.tournament_id]=JSON.parse(s.responseText).data[t.tournament_id].teams,e}),{}),V=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(o.a)(s,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(h.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==X.data.length)var t=Object(k.jsx)(b.m,{activeModal:this.state.activeModal,onClose:this.modalBack,children:X.data.map((function(t){return Object(k.jsx)(b.k,{id:t.title,onClose:e.modalBack,header:Object(k.jsx)(b.l,{left:Object(k.jsx)(b.p,{onClick:e.modalBack,children:Object(k.jsx)(p.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(k.jsxs)("div",{className:"ModalPage__Content Turnament-Information__Group",children:[Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("h4",{children:t.title})}),Object(k.jsxs)(b.i,{className:"vkuiGroup--custom-separator",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"green"}}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),Object(k.jsx)(w,{timestamp:t.end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",K[t.tournament_id].max]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",K[t.tournament_id].total]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0"})," ",K[t.tournament_id].confirmed]})]})]}),Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("p",{className:"Pre",children:t.description})})]})})}))}),s=Object(k.jsx)(b.r,{modal:t,children:X.data.map((function(t){return Object(k.jsx)(b.h,{size:"l",children:Object(k.jsxs)(b.g,{mode:"outline",children:[Object(k.jsx)("div",{className:t.status+" border"}),Object(k.jsxs)("div",{className:"TournamentCard",children:[Object(k.jsx)("div",{className:"TournamentCard__Header",children:t.title}),Object(k.jsxs)("div",{className:"TornamentCard__Info",children:[Object(k.jsxs)("div",{className:"TornamentCard__Info-Start",children:[Object(k.jsx)(O.a,{width:25,height:25}),Object(k.jsx)("div",{className:"TornamentCard__Info-Start-Text",children:Object(k.jsx)(w,{timestamp:t.start_at,mode:"day"})})]}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main TournamentCard__Info-Main-OneItem",children:Object(k.jsxs)("div",{className:"TournamentCard__Info-Main-Start",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.end_at})]})]})]})})]}),Object(k.jsxs)("div",{className:"TornamentCard__Footer",children:[Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button",mode:"outline",before:Object(k.jsx)(M.a,{}),onClick:function(){return e.setActiveModal(t.title)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline",children:Object(k.jsx)(N.a,{})})]})]})]})})}))});else if("none"==this.props.mode)s=Object(k.jsx)("span",{});else s=Object(k.jsx)(b.q,{children:"\u041d\u0435\u0442 \u043d\u0430\u0447\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432"});return s}}]),s}(n.a.Component),D=s(55),E=s(106),U=s.n(E),Y=s(267),Q=new XMLHttpRequest;Q.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=finished",!1),Q.send();var Z,$,ee=JSON.parse(Q.responseText),te=ee.data.reduce((function(e,t){var s=new XMLHttpRequest;return s.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),s.send(),e[t.tournament_id]=JSON.parse(s.responseText).data[t.tournament_id].teams,e}),{}),se=!1,ae=[],ne=!0;ee.data.map((function(e){ae.push(e.tournament_id)}));var ie=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={activeModal:null,modalHistory:[],popout:null,snackbar:null},a.openShare=a.openShare.bind(Object(D.a)(a)),a.shareTargetRef=n.a.createRef(),a.send=a.send.bind(Object(D.a)(a)),a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(o.a)(s,[{key:"send",value:function(){var e=this;new Promise((function(e){l.a.send("VKWebAppShowWallPostBox",{message:"\u0442\u0435\u0441\u0442\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",attachments:"https://vk.com/app7446072"}),e()})).then((function(){l.a.subscribe((function(t){"VKWebAppShowWallPostBoxResult"===t.detail.type&&e.setState({snackbar:Object(k.jsx)(b.t,{onClose:function(){return e.setState({snackbar:null})},duration:"2000",before:Object(k.jsx)(b.e,{size:24,style:{background:"var(--green)"},children:Object(k.jsx)(U.a,{fill:"#fff",width:14,height:14})}),children:"\u0417\u0430\u043f\u0438\u0441\u044c \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430"})}),"VKWebAppShowWallPostBoxFailed"===t.detail.type&&e.setState({snackbar:Object(k.jsx)(b.t,{onClose:function(){return e.setState({snackbar:null})},duration:"2000",before:Object(k.jsx)(b.e,{size:24,style:{background:"var(--red)"},children:Object(k.jsx)(Y.a,{fill:"#fff",width:14,height:14})}),children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438"})})}))}))}},{key:"openShare",value:function(){var e=this;ne=!0,Z=event.clientY-150,$=event.clientX+20,this.setState({popout:Object(k.jsxs)(b.a,{onClose:function(){return e.setState({popout:null})},iosCloseItem:Object(k.jsx)(b.b,{autoclose:!0,mode:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),header:"\u0413\u0434\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u043c?",toggleRef:this.shareTargetRef.current,children:[Object(k.jsx)(b.b,{autoclose:!0,onClick:this.send,children:"\u041d\u0430 \u0441\u0442\u0435\u043d\u0435"}),Object(k.jsx)(b.b,{autoclose:!0,children:"\u0412 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"})]})})}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(h.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"componentDidMount",value:function(){""==window.location.hash||se||-1==ae.indexOf(Number(window.location.hash.slice(1)))||(this.setActiveModal(Number(window.location.hash.slice(1))),se=!0)}},{key:"componentDidUpdate",value:function(){var e=document.getElementsByClassName("vkuiActionSheet--desktop");e[0]&&new MutationObserver((function(t){t&&ne&&(e[0].style.top=Z+"px",e[0].style.left=$+"px",ne=!1)})).observe(e[0],{attributes:!0,attributeFilter:["style"]})}},{key:"render",value:function(){var e=this;if(0!==ee.data.length)var t=Object(k.jsx)(b.m,{activeModal:this.state.activeModal,onClose:this.modalBack,children:ee.data.map((function(t){return Object(k.jsx)(b.k,{id:t.tournament_id,onClose:e.modalBack,header:Object(k.jsx)(b.l,{left:Object(k.jsx)(b.p,{onClick:e.modalBack,children:Object(k.jsx)(p.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(k.jsxs)("div",{className:"ModalPage__Content Turnament-Information__Group",children:[Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("h4",{children:t.title})}),Object(k.jsxs)(b.i,{className:"vkuiGroup--custom-separator",children:[Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(T.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(_.a,{width:17,height:17}),Object(k.jsx)(w,{timestamp:t.registration_end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"green"}}),Object(k.jsx)(w,{timestamp:t.start_at})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)(y.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),Object(k.jsx)(w,{timestamp:t.end_at})]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main-Title",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(k.jsxs)("div",{style:{marginLeft:5},children:[Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0"})," ",te[t.tournament_id].max]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[Object(k.jsx)("span",{style:{fontWeight:"450"},children:"\u041f\u0440\u0438\u043d\u044f\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0"})," ",te[t.tournament_id].total]})]})]}),Object(k.jsx)(b.i,{className:"vkuiGroup--custom-separator",children:Object(k.jsx)("p",{className:"Pre",children:t.description})})]})})}))}),s=Object(k.jsxs)(b.w,{modal:t,popout:this.state.popout,children:[ee.data.map((function(t){return Object(k.jsx)(b.h,{size:"l",children:Object(k.jsxs)(b.g,{mode:"outline",children:[Object(k.jsx)("div",{className:t.status+" border"}),Object(k.jsxs)("div",{className:"TournamentCard",children:[Object(k.jsx)("div",{className:"TournamentCard__Header",children:t.title}),Object(k.jsxs)("div",{className:"TornamentCard__Info",children:[Object(k.jsxs)("div",{className:"TornamentCard__Info-Start",children:[Object(k.jsx)(O.a,{width:25,height:25}),Object(k.jsx)("div",{className:"TornamentCard__Info-Start-Text",children:Object(k.jsx)(w,{timestamp:t.start_at,mode:"day"})})]}),Object(k.jsx)("div",{className:"TournamentCard__Info-Main",children:"\u0422\u0443\u0440\u043d\u0438\u0440 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d"})]}),Object(k.jsxs)("div",{className:"TornamentCard__Footer",children:[Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button",mode:"outline",before:Object(k.jsx)(M.a,{}),onClick:function(){return e.setActiveModal(t.tournament_id)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(k.jsx)(b.f,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline",getRootRef:e.shareTargetRef,onClick:e.openShare,children:Object(k.jsx)(N.a,{})})]})]})]})})})),this.state.snackbar]});else s=Object(k.jsx)(b.q,{children:"\u041d\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432"});return s}}]),s}(n.a.Component),ce=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={content:Object(k.jsx)(b.s,{})},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(W,{mode:"none"}),Object(k.jsx)(q,{mode:"none"}),Object(k.jsx)(V,{mode:"none"}),Object(k.jsx)(L,{mode:"none"}),Object(k.jsx)(ie,{mode:"none"})]})}}]),s}(n.a.Component),re=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={contextOpened:!1,mode:"all",activeTab:"all"},a}return Object(o.a)(s,[{key:"render",value:function(){var e,t=this;return"all"===this.state.activeTab&&(e=Object(k.jsx)(ce,{})),"upcoming"===this.state.activeTab&&(e=Object(k.jsx)(L,{})),"registration_started"===this.state.activeTab&&(e=Object(k.jsx)(W,{})),"registration_finished"===this.state.activeTab&&(e=Object(k.jsx)(q,{})),"running"===this.state.activeTab&&(e=Object(k.jsx)(V,{})),"finish"===this.state.activeTab&&(e=Object(k.jsx)(ie,{})),Object(k.jsx)(b.w,{children:Object(k.jsxs)(b.n,{children:[Object(k.jsx)(b.o,{children:"T\u0443\u0440\u043d\u0438\u0440\u044b WoT Blitz"}),Object(k.jsx)(b.i,{children:Object(k.jsx)(b.u,{mode:"buttons",children:Object(k.jsxs)(b.j,{children:[Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"all"})},selected:"all"===this.state.activeTab,children:"\u0412\u0441\u0435"}),Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"registration_started"})},selected:"registration_started"===this.state.activeTab,children:"\u0418\u0434\u0451\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"upcoming"})},selected:"upcoming"===this.state.activeTab,children:"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"}),Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"registration_finished"})},selected:"registration_finished"===this.state.activeTab,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"}),Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"running"})},selected:"running"===this.state.activeTab,children:"\u0418\u0434\u0443\u0442 \u0431\u043e\u0438"}),Object(k.jsx)(b.v,{onClick:function(){return t.setState({activeTab:"finish"})},selected:"finish"===this.state.activeTab,children:"\u0411\u043e\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u044b"})]})})}),Object(k.jsx)(b.i,{children:e})]})})}}]),s}(n.a.Component),le=function(){return Object(k.jsx)(b.c,{children:Object(k.jsx)(b.d,{children:Object(k.jsx)(re,{})})})};s(265);l.a.send("VKWebAppInit"),l.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&(document.body.setAttribute("scheme",e.detail.data.scheme),document.html.setAttribute("scheme",e.detail.data.scheme))})),c.a.render(Object(k.jsx)(le,{}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.0e768057.chunk.js.map