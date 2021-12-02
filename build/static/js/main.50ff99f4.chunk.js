(this["webpackJsonpreact-app-init"]=this["webpackJsonpreact-app-init"]||[]).push([[0],{174:function(e){e.exports=JSON.parse('[{"id":"1","name":"Basic sensor","description":"Use the basic sensor to supervise the basic filed conditions or conditions in halls. ","coordinates":[14.214275,50.381043]},{"id":"2","name":"Weatherstation","description":"Plan your agro acvities according to all meteorological conditions on one rod.","coordinates":[14.217792,50.371542]},{"id":"3","name":"Storage hall sensor","description":"Make sure your harvest is well stored inside your storage halls to avoid any pests and diseases threats.","coordinates":[14.221525,50.374929]},{"id":"4","name":"Soil sensor","description":"Check soil humidity and temperature to manage your irrigation effectively and save on cost.","coordinates":[14.205785,50.364011]}]')},176:function(e,n,t){"use strict";t.r(n);var a,i=t(92),s=t(33),c=t(26),r=t(0),o=t(37),l=t(46).a.div(a||(a=Object(o.a)(["\n  /* padding: 20px; */\n  /* margin-bottom: 25px; */\n  /* color: #333; */\n  /* font-size: 16px; */\n  /* font-weight: 700; */\n  text-align: center;\n"]))),d=t(110),b=t(141),u=t.n(b),j=(t(218),t(147)),p=(t(219),t(5)),x=t(287),h=t(273),m=t(281),O=t(285),g=t(291),v=t(286),f=t(270),w=t(290),I=t(282),C=t(278),y=t(1),A=[{value:"Mondey",label:"PO"},{value:"Tuesday",label:"\xdaT"},{value:"Wednesday",label:"ST"},{value:"Thurthday",label:"\u010cT"},{value:"Friday",label:"P\xc1"},{value:"Saturday",label:"SO"},{value:"Sunday",label:"NE"}];var E=function(e){var n=e.currentEvent,t=e.open,a=e.onClose,s=Object(r.useState)(n),o=Object(c.a)(s,2),l=o[0],d=o[1],b=Object(r.useState)(l.day),u=Object(c.a)(b,2),j=u[0],E=u[1],L=function(e){var n=e.target,t=n.name,a=n.value;if("checkbox"===n.type){var s=j,c=s.indexOf(a);-1===c?s.push(a):s.splice(c,1),E(s),d(Object(i.a)(Object(i.a)({},l),{},Object(p.a)({},t,j)))}else d(Object(i.a)(Object(i.a)({},l),{},Object(p.a)({},t,a)))},N=function(){a()};return Object(y.jsx)("div",{children:Object(y.jsxs)(m.a,{open:t,onClose:a,onSubmit:N,children:[Object(y.jsx)(O.a,{children:Object(y.jsxs)(v.a,{container:!0,spacing:3,children:[Object(y.jsxs)(v.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{component:"legend",children:"N\xe1zev z\xe1vlahy:"}),Object(y.jsx)(h.a,{autoFocus:!0,variant:"standard",name:"title",value:l.title,onChange:L})]}),Object(y.jsxs)(v.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{component:"legend",children:"Den spu\u0161t\u011bn\xed:"}),Object(y.jsx)(w.a,{row:!0,children:A.map((function(e){return Object(y.jsx)(I.a,{control:Object(y.jsx)(C.a,{onChange:function(e){return L(e)},checked:j.includes(e.value),value:e.value,name:"day",inputProps:{"aria-label":"controlled"}}),label:e.label,labelPlacement:"bottom"},e.value)}))})]}),Object(y.jsxs)(v.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{component:"legend",children:"Za\u010d\xe1tek spu\u0161t\u011bn\xed:"}),Object(y.jsx)(h.a,{variant:"standard",name:"startTime",value:l.startTime,onChange:L})]})]})}),Object(y.jsxs)(g.a,{children:[Object(y.jsx)(x.a,{onClick:function(e){a(l)},children:l.id?"EDIT":"ADD"}),l.title&&Object(y.jsx)(x.a,{onClick:function(e){a(l.id)},children:"DELETE"}),Object(y.jsx)(x.a,{onClick:N,children:"CANCEL"})]})]})})},L=[{id:1,title:"First Event",start:new Date(2021,10,29,15,30,0),end:new Date(2021,10,29,15,35,0),day:["Mondey"],startTime:"15:30"},{id:2,title:"Second Event",start:new Date(2021,10,30,11,0,0),end:new Date(2021,10,30,12,0,0),day:["Tuesday"],startTime:"11:00"},{id:3,title:"Today",start:new Date((new Date).setHours((new Date).getHours()+1)),end:new Date((new Date).setHours((new Date).getHours()+2)),day:["Tuesday"],startTime:"11:00"}],N=Object(d.c)(u.a),k={dayFormat:function(e,n,t){return t.format(e,"dddd",n)}},T={title:"",start:"",end:"",day:"",startTime:""};n.default=function(){var e=Object(j.useMediaQuery)({query:"(min-width: 768px)"}),n=Object(j.useMediaQuery)({query:"(max-width: 767px)"}),t=Object(r.useState)(!1),a=Object(c.a)(t,2),o=a[0],b=a[1],u=Object(r.useState)(L),p=Object(c.a)(u,2),x=p[0],h=p[1],m=Object(r.useState)(T),O=Object(c.a)(m,2),g=O[0],v=O[1],f=function(e){var n=e.id,t=void 0===n?"":n,a=e.title,i=void 0===a?"":a,s=e.start,c=e.end,r=e.day,o=void 0===r?[]:r,l=e.startTime;void 0===l&&(l=s.toTimeString().substr(0,5)),v({id:t,title:i,start:s,end:c,day:o,startTime:l}),b(!0)};return Object(y.jsxs)(l,{children:[e&&Object(y.jsx)(d.a,{localizer:N,events:x,startAccessor:"start",endAccessor:"end",selectable:!0,scrollToTime:new Date(1970,1,1,8),toolbar:!1,formats:k,defaultView:d.b.WEEK,style:{height:"80vh",margin:"30px"},onSelectEvent:f,onSelectSlot:f}),n&&Object(y.jsx)(d.a,{localizer:N,events:x,startAccessor:"start",endAccessor:"end",selectable:!0,scrollToTime:new Date(1970,1,1,8),toolbar:!1,formats:k,defaultView:d.b.DAY,style:{height:"80vh",margin:"30px"},onSelectEvent:f,onSelectSlot:f}),o&&Object(y.jsx)(E,{currentEvent:g,open:o,onClose:function(e){if(b(!1),console.log("value",typeof e),void 0!==e)if(""!==e.id)if("number"!==typeof e){var n=x.map((function(n){return n.id===e.id?e:n}));h(n)}else h(x.filter((function(n){return n.id!==e})));else h([].concat(Object(s.a)(x),[Object(i.a)(Object(i.a)({},e),{},{id:x[x.length-1].id+1})]))}})]})}},177:function(e,n,t){"use strict";t.r(n);var a,i=t(100),s=t(101),c=t(122),r=t(130),o=t(0),l=t(174),d=t(85),b=t(37),u=t(46).a.div(a||(a=Object(b.a)(["\n  padding: 20px;\n\n  .sensorTitle {\n    margin-bottom: 25px;\n    color: #333;\n    font-size: 46px;\n    font-weight: 700;\n    text-align: center;\n  }\n\n  .sensorList {\n    display: flex;\n    flex-wrap: wrap;\n    text-align: center;\n    margin-left: -15px;\n    margin-top: -15px;\n  }\n\n  .sensorItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 0 0 8px rgb(0 0 0 / 15%);\n    border-radius: 10px;\n    padding: 25px;\n\n    margin-left: 15px;\n    margin-top: 15px;\n    flex-basis: calc(100%);\n\n    @media screen and (min-width: 768px) {\n      flex-basis: calc((100% - 30px) / 2);\n    }\n\n    @media screen and (min-width: 1200px) {\n      flex-basis: calc((100% - 60px) / 4);\n    }\n  }\n\n  .sensorItemTitle {\n    margin-bottom: 15px;\n  }\n\n  .sensorItemDescription {\n    margin-bottom: 15px;\n  }\n\n  .sensorItemLink {\n    color: #00a179;\n    font-size: 18px;\n    font-weight: 700;\n    text-decoration: none;\n  }\n\n  .sensorItemLink:hover {\n    text-decoration: underline;\n  }\n"]))),j=t(1),p=function(e){Object(c.a)(t,e);var n=Object(r.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=n.call.apply(n,[this].concat(s))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(u,{children:[Object(j.jsx)("h2",{className:"sensorTitle",children:"Sensors overview"}),Object(j.jsx)("ul",{className:"sensorList",children:l.map((function(n){return Object(j.jsxs)("li",{className:"sensorItem",children:[Object(j.jsx)("h3",{className:"sensorItemTitle",children:n.name}),Object(j.jsx)("p",{className:"sensorItemDescription",children:n.description}),Object(j.jsx)(d.b,{className:"sensorItemLink",to:{pathname:"/details",state:{from:e.props.location.pathname,sensor:{name:n.name,coordinates:n.coordinates}}},type:"button",children:"Details"})]},n.id)}))})]})}}]),t}(o.Component);n.default=p},222:function(e,n,t){},223:function(e,n,t){"use strict";t.r(n);var a,i,s,c,r,o,l,d=t(0),b=t(36),u=t.n(b),j=t(85),p=t(37),x=t(46),h=x.a.div(a||(a=Object(p.a)(["\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),m=[{name:"Overview",path:"/",component:Object(d.lazy)((function(){return Promise.resolve().then(t.bind(null,177))})),exact:!0},{name:"BigCalendar",path:"/big-calendar",component:Object(d.lazy)((function(){return Promise.resolve().then(t.bind(null,176))})),exact:!0}],O=x.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: center;\n\n  .logoImg {\n    width: 60px;\n    height: 60px;\n  }\n"]))),g=t(1),v=function(){return Object(g.jsx)(O,{children:Object(g.jsx)(j.b,{className:"logoLink",to:"/",type:"button",children:Object(g.jsx)("img",{className:"logoImg",src:"data:image/png;base64,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",alt:"logo"})})})},f=x.a.nav(s||(s=Object(p.a)(["\n  .navList {\n    display: flex;\n  }\n  .navItem:not(:last-child) {\n    margin-right: 20px;\n  }\n  .navLink {\n    font-size: 15px;\n    font-weight: 700;\n    text-decoration: none;\n    color: #ffff;\n  }\n\n  .activeNavLink {\n    color: #eba607;\n  }\n"]))),w=function(e){var n=e.routes;return Object(g.jsx)(f,{children:Object(g.jsx)("ul",{className:"navList",children:n.map((function(e){return Object(g.jsx)("li",{className:"navItem",children:Object(g.jsx)(j.c,{className:"navLink",activeClassName:"activeNavLink",to:e.path,exact:e.exact,children:e.name})},e.path)}))})})},I=x.a.header(c||(c=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  box-shadow: 0 0 8px rgb(0 0 0 / 15%);\n  background: #00a179;\n  padding: 0 40px;\n"]))),C=function(){return Object(g.jsxs)(I,{children:[Object(g.jsx)(v,{}),Object(g.jsx)(w,{routes:m})]})},y=t(35),A=t(176),E=t(100),L=t(101),N=t(122),k=t(130),T=x.a.div(r||(r=Object(p.a)(["\n  button {\n    margin: 20px 0 20px 20px;\n    padding: 13px;\n    background-color: #eba607;\n    color: #333;\n    border: 0;\n    border-radius: 4px;\n    cursor: pointer;\n    min-width: 100px;\n    font-size: 15px;\n    font-weight: bold;\n    /* text-transform: uppercase; */\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  button:hover,\n  button:focus {\n    background-color: #d29506;\n  }\n\n  .sensorTitle {\n    margin-bottom: 25px;\n    color: #333;\n    font-size: 46px;\n    font-weight: 700;\n    text-align: center;\n  }\n"]))),S=(t(221),t(150)),W=t(152),z=t(135),P=t(274),D=t(175),Q=t(272),V=t(276),H=t(280),q=t(173),G=t(283),F=t(275),K=t(17),U=x.a.div(o||(o=Object(p.a)(["\n  .map {\n    height: 400px;\n    width: 100%;\n  }\n"]))),M=function(e){var n=e.coordinates;Object(K.n)();var t=new q.a(n);return Object(d.useEffect)((function(){new P.a({target:"map",view:new D.a({center:n,zoom:15}),layers:[new G.a({source:new V.a}),new F.a({source:new H.a({features:[new Q.a(t)]}),style:new S.b({image:new W.a({radius:5,fill:new z.a({color:"red"})})})})]})}),[]),Object(g.jsx)(U,{children:Object(g.jsx)("div",{id:"map",className:"map"})})},Y=function(e){Object(N.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(E.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).state={},e.goBack=function(){var n=e.props,t=n.location;n.history.push(t.state.from)},e}return Object(L.a)(t,[{key:"render",value:function(){var e=this.props.location.state.sensor,n=e.name,t=e.coordinates;return Object(g.jsxs)(T,{children:[Object(g.jsx)("h2",{className:"sensorTitle",children:n}),Object(g.jsx)(M,{coordinates:t}),Object(g.jsx)("button",{type:"button",onClick:this.goBack,children:"Go back"})]})}}]),t}(d.Component),X=t(177),J=x.a.div(l||(l=Object(p.a)([""]))),Z=function(){return Object(g.jsx)(J,{children:Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/",component:X.default,exact:!0}),Object(g.jsx)(y.a,{path:"/details",component:Y,exact:!0}),Object(g.jsx)(y.a,{path:"/big-calendar",component:A.default,exact:!0})]})})},B=function(){return Object(g.jsxs)(h,{children:[Object(g.jsx)(C,{}),Object(g.jsx)(Z,{})]})};t(222);u.a.render(Object(g.jsx)(j.a,{children:Object(g.jsx)(B,{})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.50ff99f4.chunk.js.map