(this.webpackJsonptournemnt=this.webpackJsonptournemnt||[]).push([[0],{152:function(e,t,a){e.exports=a(249)},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);a(153),a(179),a(181),a(182),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221);var n=a(0),l=a.n(n),r=a(46),i=a.n(r),m=a(47),s=a.n(m),c=(a(229),a(19)),o=a(20),d=a(22),u=a(21),E=a(1),p=a(38),f=a(34),_=a.n(f),h=a(35),v=a.n(h),g=a(23),y=a.n(g),T=a(17),b=a.n(T),C=a(24),N=a.n(C),I=a(36),M=a.n(I),x=a(37),w=a.n(x);var O=function(e){var t=new Date(1e3*e.timestamp),a=t.getHours(),n=t.getMinutes(),r=t.getDate(),i=t.getMonth()+1,m=t.getFullYear(),s=i;switch(n<10&&(n="0"+n),i<10&&(s="0"+i),r<10&&(r="0"+r),e.mode){case"day":return l.a.createElement("span",null,r+" "+["default","\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][i]+" "+m);case"time":return l.a.createElement("span",null,a+":"+n);case"dayAndTime":return l.a.createElement("span",null,r+"."+s+", "+a+":"+n);default:return l.a.createElement("span",null,r+"."+s+"."+m+", "+a+":"+n)}},S=new XMLHttpRequest;S.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=upcoming",!1),S.send();var k=JSON.parse(S.responseText),H=k.data.reduce((function(e,t){var a=new XMLHttpRequest;return a.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),a.send(),e[t.tournament_id]=JSON.parse(a.responseText).data[t.tournament_id].teams,e}),{}),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(o.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(p.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==k.data.length)var t=l.a.createElement(E.h,{activeModal:this.state.activeModal,onClose:this.modalBack},k.data.map((function(t){return l.a.createElement(E.f,{id:t.title,onClose:e.modalBack,header:l.a.createElement(E.g,{left:l.a.createElement(E.k,{onClick:e.modalBack},l.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},l.a.createElement("div",{className:"ModalPage__Content Turnament-Information__Group"},l.a.createElement(E.d,null,l.a.createElement("h4",null,t.title)),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"green"}}),l.a.createElement(O,{timestamp:t.start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),l.a.createElement(O,{timestamp:t.end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",H[t.tournament_id].max))),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("p",{className:"Pre"},t.description))))}))),a=l.a.createElement(E.m,{modal:t},k.data.map((function(t){return l.a.createElement(E.c,null,l.a.createElement(E.b,{size:"l",mode:"outline"},l.a.createElement("div",{className:t.status+" border"}),l.a.createElement("div",{className:"TournamentCard"},l.a.createElement("div",{className:"TournamentCard__Header"},t.title),l.a.createElement("div",{className:"TornamentCard__Info"},l.a.createElement("div",{className:"TornamentCard__Info-Start"},l.a.createElement(_.a,{width:25,height:25}),l.a.createElement("div",{className:"TornamentCard__Info-Start-Text"},l.a.createElement(O,{timestamp:t.start_at,mode:"day"}))),l.a.createElement("div",{className:"TournamentCard__Info-Main"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Registration"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at})))),l.a.createElement("div",{className:"TournamentCard__Info-Main-Start"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.start_at,mode:"dayAndTime"})))))),l.a.createElement("div",{className:"TornamentCard__Footer"},l.a.createElement(E.a,{className:"TornamentCard__Footer-Button",mode:"outline",before:l.a.createElement(w.a,null),onClick:function(){return e.setActiveModal(t.title)}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),l.a.createElement(E.a,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline"},l.a.createElement(M.a,null))))))})));else if("none"==this.props.mode)a=l.a.createElement("span",null);else a=l.a.createElement(E.l,null,"\u041d\u0435\u0442 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432");return a}}]),a}(l.a.Component),j=new XMLHttpRequest;j.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=registration_started",!1),j.send();var L=JSON.parse(j.responseText),A=L.data.reduce((function(e,t){var a=new XMLHttpRequest;return a.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),a.send(),e[t.tournament_id]=JSON.parse(a.responseText).data[t.tournament_id].teams,e}),{}),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(o.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(p.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==L.data.length)var t=l.a.createElement(E.h,{activeModal:this.state.activeModal,onClose:this.modalBack},L.data.map((function(t){return l.a.createElement(E.f,{id:t.title,onClose:e.modalBack,header:l.a.createElement(E.g,{left:l.a.createElement(E.k,{onClick:e.modalBack},l.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},l.a.createElement("div",{className:"ModalPage__Content Turnament-Information__Group"},l.a.createElement(E.d,null,l.a.createElement("h4",null,t.title)),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"green"}}),l.a.createElement(O,{timestamp:t.start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),l.a.createElement(O,{timestamp:t.end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",A[t.tournament_id].max),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",A[t.tournament_id].total),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0")," ",A[t.tournament_id].confirmed))),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("p",{className:"Pre"},t.description))))}))),a=l.a.createElement(E.m,{modal:t},L.data.map((function(t){return l.a.createElement(E.c,null,l.a.createElement(E.b,{size:"l",mode:"outline"},l.a.createElement("div",{className:t.status+" border"}),l.a.createElement("div",{className:"TournamentCard"},l.a.createElement("div",{className:"TournamentCard__Header"},t.title),l.a.createElement("div",{className:"TornamentCard__Info"},l.a.createElement("div",{className:"TornamentCard__Info-Start"},l.a.createElement(_.a,{width:25,height:25}),l.a.createElement("div",{className:"TornamentCard__Info-Start-Text"},l.a.createElement(O,{timestamp:t.start_at,mode:"day"}))),l.a.createElement("div",{className:"TournamentCard__Info-Main"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Registration"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at})))),l.a.createElement("div",{className:"TournamentCard__Info-Main-Start"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.start_at,mode:"time"})))))),l.a.createElement("div",{className:"TornamentCard__Footer"},l.a.createElement(E.a,{className:"TornamentCard__Footer-Button",mode:"outline",before:l.a.createElement(w.a,null),onClick:function(){return e.setActiveModal(t.title)}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),l.a.createElement(E.a,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline"},l.a.createElement(M.a,null))))))})));else if("none"==this.props.mode)a=l.a.createElement("span",null);else a=l.a.createElement(E.l,null,"\u041d\u0435\u0442 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432 \u0441 \u043d\u0430\u0447\u0430\u0432\u0448\u0435\u0439\u0441\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439");return a}}]),a}(l.a.Component),P=new XMLHttpRequest;P.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=registration_finished",!1),P.send();var q=JSON.parse(P.responseText),z=q.data.reduce((function(e,t){var a=new XMLHttpRequest;return a.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),a.send(),e[t.tournament_id]=JSON.parse(a.responseText).data[t.tournament_id].teams,e}),{}),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(o.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(p.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==q.data.length)var t=l.a.createElement(E.h,{activeModal:this.state.activeModal,onClose:this.modalBack},q.data.map((function(t){return l.a.createElement(E.f,{id:t.title,onClose:e.modalBack,header:l.a.createElement(E.g,{left:l.a.createElement(E.k,{onClick:e.modalBack},l.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},l.a.createElement("div",{className:"ModalPage__Content Turnament-Information__Group"},l.a.createElement(E.d,null,l.a.createElement("h4",null,t.title)),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"green"}}),l.a.createElement(O,{timestamp:t.start_at}))),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),l.a.createElement(O,{timestamp:t.end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",z[t.tournament_id].max),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",z[t.tournament_id].total),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0")," ",z[t.tournament_id].confirmed))),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("p",{className:"Pre"},t.description))))}))),a=l.a.createElement(E.m,{modal:t},q.data.map((function(t){return l.a.createElement(E.c,null,l.a.createElement(E.b,{size:"l",mode:"outline"},l.a.createElement("div",{className:t.status+" border"}),l.a.createElement("div",{className:"TournamentCard"},l.a.createElement("div",{className:"TournamentCard__Header"},t.title),l.a.createElement("div",{className:"TornamentCard__Info"},l.a.createElement("div",{className:"TornamentCard__Info-Start"},l.a.createElement(_.a,{width:25,height:25}),l.a.createElement("div",{className:"TornamentCard__Info-Start-Text"},l.a.createElement(O,{timestamp:t.start_at,mode:"day"}))),l.a.createElement("div",{className:"TournamentCard__Info-Main"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Registration"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at})))),l.a.createElement("div",{className:"TournamentCard__Info-Main-Start"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.start_at,mode:"time"})))))),l.a.createElement("div",{className:"TornamentCard__Footer"},l.a.createElement(E.a,{className:"TornamentCard__Footer-Button",mode:"outline",before:l.a.createElement(w.a,null),onClick:function(){return e.setActiveModal(t.title)}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),l.a.createElement(E.a,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline"},l.a.createElement(M.a,null))))))})));else if("none"==this.props.mode)a=l.a.createElement("span",null);else a=l.a.createElement(E.l,null,"\u041d\u0435\u0442 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432 \u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439");return a}}]),a}(l.a.Component),R=new XMLHttpRequest;R.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=running",!1),R.send();var J=JSON.parse(R.responseText),X=J.data.reduce((function(e,t){var a=new XMLHttpRequest;return a.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),a.send(),e[t.tournament_id]=JSON.parse(a.responseText).data[t.tournament_id].teams,e}),{}),G=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(o.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(p.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==J.data.length)var t=l.a.createElement(E.h,{activeModal:this.state.activeModal,onClose:this.modalBack},J.data.map((function(t){return l.a.createElement(E.f,{id:t.title,onClose:e.modalBack,header:l.a.createElement(E.g,{left:l.a.createElement(E.k,{onClick:e.modalBack},l.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},l.a.createElement("div",{className:"ModalPage__Content Turnament-Information__Group"},l.a.createElement(E.d,null,l.a.createElement("h4",null,t.title)),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"green"}}),l.a.createElement(O,{timestamp:t.start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),l.a.createElement(O,{timestamp:t.end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",X[t.tournament_id].max),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",X[t.tournament_id].total),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0")," ",X[t.tournament_id].confirmed))),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("p",{className:"Pre"},t.description))))}))),a=l.a.createElement(E.m,{modal:t},J.data.map((function(t){return l.a.createElement(E.c,null,l.a.createElement(E.b,{size:"l",mode:"outline"},l.a.createElement("div",{className:t.status+" border"}),l.a.createElement("div",{className:"TournamentCard"},l.a.createElement("div",{className:"TournamentCard__Header"},t.title),l.a.createElement("div",{className:"TornamentCard__Info"},l.a.createElement("div",{className:"TornamentCard__Info-Start"},l.a.createElement(_.a,{width:25,height:25}),l.a.createElement("div",{className:"TornamentCard__Info-Start-Text"},l.a.createElement(O,{timestamp:t.start_at,mode:"day"}))),l.a.createElement("div",{className:"TournamentCard__Info-Main"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Registration"},l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.end_at})))))),l.a.createElement("div",{className:"TornamentCard__Footer"},l.a.createElement(E.a,{className:"TornamentCard__Footer-Button",mode:"outline",before:l.a.createElement(w.a,null),onClick:function(){return e.setActiveModal(t.title)}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),l.a.createElement(E.a,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline"},l.a.createElement(M.a,null))))))})));else if("none"==this.props.mode)a=l.a.createElement("span",null);else a=l.a.createElement(E.l,null,"\u041d\u0435\u0442 \u043d\u0430\u0447\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432");return a}}]),a}(l.a.Component),D=new XMLHttpRequest;D.open("POST","https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=finished",!1),D.send();var K=JSON.parse(D.responseText),V=K.data.reduce((function(e,t){var a=new XMLHttpRequest;return a.open("POST","https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id="+t.tournament_id+"&fields=teams",!1),a.send(),e[t.tournament_id]=JSON.parse(a.responseText).data[t.tournament_id].teams,e}),{}),U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(o.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(p.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this;if(0!==K.data.length)var t=l.a.createElement(E.h,{activeModal:this.state.activeModal,onClose:this.modalBack},K.data.map((function(t){return l.a.createElement(E.f,{id:t.title,onClose:e.modalBack,header:l.a.createElement(E.g,{left:l.a.createElement(E.k,{onClick:e.modalBack},l.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},l.a.createElement("div",{className:"ModalPage__Content Turnament-Information__Group"},l.a.createElement(E.d,null,l.a.createElement("h4",null,t.title)),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(N.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(y.a,{width:17,height:17}),l.a.createElement(O,{timestamp:t.registration_end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u0451\u0432"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"green"}}),l.a.createElement(O,{timestamp:t.start_at})),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement(b.a,{width:17,height:17,style:{color:"rgb(200, 0, 0)"}}),l.a.createElement(O,{timestamp:t.end_at}))),l.a.createElement("br",null),l.a.createElement("div",{className:"TournamentCard__Info-Main-Title"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),l.a.createElement("div",{style:{marginLeft:5}},l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u043e\u043c\u0430\u043d\u0434:\xa0")," ",V[t.tournament_id].max),l.a.createElement("br",null),l.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"450"}},"\u041f\u0440\u0438\u043d\u044f\u043b\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u0435:\xa0")," ",V[t.tournament_id].total))),l.a.createElement(E.o,{className:"CastomSeparator",style:{margin:"12px 0"}}),l.a.createElement(E.d,null,l.a.createElement("p",{className:"Pre"},t.description))))}))),a=l.a.createElement(E.m,{modal:t},K.data.map((function(t){return l.a.createElement(E.c,null,l.a.createElement(E.b,{size:"l",mode:"outline"},l.a.createElement("div",{className:t.status+" border"}),l.a.createElement("div",{className:"TournamentCard"},l.a.createElement("div",{className:"TournamentCard__Header"},t.title),l.a.createElement("div",{className:"TornamentCard__Info"},l.a.createElement("div",{className:"TornamentCard__Info-Start"},l.a.createElement(_.a,{width:25,height:25}),l.a.createElement("div",{className:"TornamentCard__Info-Start-Text"},l.a.createElement(O,{timestamp:t.start_at,mode:"day"}))),l.a.createElement("div",{className:"TournamentCard__Info-Main"},"\u0422\u0443\u0440\u043d\u0438\u0440 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d")),l.a.createElement("div",{className:"TornamentCard__Footer"},l.a.createElement(E.a,{className:"TornamentCard__Footer-Button",mode:"outline",before:l.a.createElement(w.a,null),onClick:function(){return e.setActiveModal(t.title)}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),l.a.createElement(E.a,{className:"TornamentCard__Footer-Button TornamentCard__Footer-SmallButton",mode:"outline"},l.a.createElement(M.a,null))))))})));else a=l.a.createElement(E.l,null,"\u041d\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432");return a}}]),a}(l.a.Component),Y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:l.a.createElement(E.n,null)},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(E.d,null,l.a.createElement(F,{mode:"none"}),l.a.createElement(W,{mode:"none"}),l.a.createElement(G,{mode:"none"}),l.a.createElement(B,{mode:"none"}),l.a.createElement(U,{mode:"none"}))}}]),a}(l.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={contextOpened:!1,mode:"all",activeTab:"all"},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;return"all"===this.state.activeTab&&(e=l.a.createElement(Y,null)),"upcoming"===this.state.activeTab&&(e=l.a.createElement(B,null)),"registration_started"===this.state.activeTab&&(e=l.a.createElement(F,null)),"registration_finished"===this.state.activeTab&&(e=l.a.createElement(W,null)),"running"===this.state.activeTab&&(e=l.a.createElement(G,null)),"finish"===this.state.activeTab&&(e=l.a.createElement(U,null)),l.a.createElement(E.r,null,l.a.createElement(E.i,null,l.a.createElement(E.j,null,"T\u0443\u0440\u043d\u0438\u0440\u044b WoT Blitz"),l.a.createElement(E.d,null,l.a.createElement(E.p,{mode:"buttons"},l.a.createElement(E.e,null,l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"all"})},selected:"all"===this.state.activeTab},"\u0412\u0441\u0435"),l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"registration_started"})},selected:"registration_started"===this.state.activeTab},"\u0418\u0434\u0451\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"upcoming"})},selected:"upcoming"===this.state.activeTab},"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"),l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"registration_finished"})},selected:"registration_finished"===this.state.activeTab},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"),l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"running"})},selected:"running"===this.state.activeTab},"\u0418\u0434\u0443\u0442 \u0431\u043e\u0438"),l.a.createElement(E.q,{onClick:function(){return t.setState({activeTab:"finish"})},selected:"finish"===this.state.activeTab},"\u0411\u043e\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u044b")))),l.a.createElement(E.d,null,e)))}}]),a}(l.a.Component),Z=function(){return l.a.createElement(Q,null)};a(248);s.a.send("VKWebAppInit"),s.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&(document.body.setAttribute("scheme",e.detail.data.scheme),document.html.setAttribute("scheme",e.detail.data.scheme))})),i.a.render(l.a.createElement(Z,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.5d87f86b.chunk.js.map