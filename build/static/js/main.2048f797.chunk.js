(this["webpackJsonpreact-app-init"]=this["webpackJsonpreact-app-init"]||[]).push([[0],{172:function(e){e.exports=JSON.parse('[{"num":1,"short":"Mon","value":"Mondey","label":"PO"},{"num":2,"short":"Tue","value":"Tuesday","label":"\xdaT"},{"num":3,"short":"Wed","value":"Wednesday","label":"ST"},{"num":4,"short":"Thu","value":"Thurthday","label":"\u010cT"},{"num":5,"short":"Fri","value":"Friday","label":"P\xc1"},{"num":6,"short":"Sat","value":"Saturday","label":"SO"},{"num":7,"short":"Sun","value":"Sunday","label":"NE"}]')},178:function(e){e.exports=JSON.parse('[{"id":"1","name":"Basic sensor","description":"Use the basic sensor to supervise the basic filed conditions or conditions in halls. ","coordinates":[14.214275,50.381043]},{"id":"2","name":"Weatherstation","description":"Plan your agro acvities according to all meteorological conditions on one rod.","coordinates":[14.217792,50.371542]},{"id":"3","name":"Storage hall sensor","description":"Make sure your harvest is well stored inside your storage halls to avoid any pests and diseases threats.","coordinates":[14.221525,50.374929]},{"id":"4","name":"Soil sensor","description":"Check soil humidity and temperature to manage your irrigation effectively and save on cost.","coordinates":[14.205785,50.364011]}]')},180:function(e,n,t){"use strict";t.r(n);var a,i=t(78),r=t(33),s=t(26),o=t(0),c=t(37),l=t(46).a.div(a||(a=Object(c.a)(["\n  /* padding: 20px; */\n  /* margin-bottom: 25px; */\n  /* color: #333; */\n  /* font-size: 16px; */\n  /* font-weight: 700; */\n  text-align: center;\n"]))),d=t(112),u=t(122),b=t.n(u),j=(t(221),t(149)),p=(t(222),t(6)),m=t(295),x=t(279),h=t(292),O=t(293),g=t(298),v=t(294),f=t(276),w=t(289),I=t(287),C=t(284),y=t(288),A=t(172),k=t(1);var D=function(e){var n=e.currentEvent,t=e.open,a=e.onClose,r=Object(o.useState)(n),c=Object(s.a)(r,2),l=c[0],d=c[1],u=function(e){var n=e.target,t=n.name,a=n.value;"radio"!==n.type?d(Object(i.a)(Object(i.a)({},l),{},Object(p.a)({},t,a))):d(Object(i.a)(Object(i.a)({},l),{},Object(p.a)({},t,parseInt(a))))},b=function(){a()};return Object(k.jsx)("div",{children:Object(k.jsxs)(h.a,{open:t,onClose:a,onSubmit:b,children:[Object(k.jsx)(O.a,{children:Object(k.jsxs)(v.a,{container:!0,spacing:3,children:[Object(k.jsxs)(v.a,{item:!0,xs:12,children:[Object(k.jsx)(f.a,{component:"legend",children:"N\xe1zev z\xe1vlahy:"}),Object(k.jsx)(x.a,{autoFocus:!0,variant:"standard",name:"title",value:l.title,onChange:u})]}),Object(k.jsx)(v.a,{item:!0,xs:12,children:Object(k.jsxs)(I.a,{component:"fieldset",children:[Object(k.jsx)(f.a,{component:"legend",children:"Den spu\u0161t\u011bn\xed:"}),Object(k.jsx)(y.a,{"aria-label":"gender",defaultValue:"",row:!0,children:A.map((function(e){return Object(k.jsx)(w.a,{value:e.num,control:Object(k.jsx)(C.a,{onChange:function(e){return u(e)},checked:l.weekDay===e.num,name:"weekDay"}),label:e.label,labelPlacement:"bottom"},e.value)}))})]})}),Object(k.jsxs)(v.a,{item:!0,xs:12,children:[Object(k.jsx)(f.a,{component:"legend",children:"Za\u010d\xe1tek spu\u0161t\u011bn\xed:"}),Object(k.jsx)(x.a,{variant:"standard",name:"startTime",value:l.startTime,onChange:u})]})]})}),Object(k.jsxs)(g.a,{children:[Object(k.jsx)(m.a,{onClick:function(e){a(l)},children:l.id?"EDIT":"ADD"}),l.title&&Object(k.jsx)(m.a,{onClick:function(e){a(l.id)},children:"DELETE"}),Object(k.jsx)(m.a,{onClick:b,children:"CANCEL"})]})]})})},E=[{id:1,title:"First Event",start:new Date(2021,10,29,15,30,0),end:new Date(2021,10,29,15,35,0),weekDay:1,startTime:"15:30"},{id:2,title:"Second Event",start:new Date(2021,10,30,11,0,0),end:new Date(2021,10,30,12,0,0),weekDay:2,startTime:"11:00"},{id:3,title:"Today",start:new Date((new Date).setHours((new Date).getHours()+1)),end:new Date((new Date).setHours((new Date).getHours()+2)),weekDay:new Date((new Date).setHours((new Date).getHours()+1)).getDay(),startTime:"11:00"}];b.a.locale("cs",{week:{dow:1,doy:1}});var L=Object(d.c)(b.a),T={dayFormat:function(e,n,t){return t.format(e,"dddd",n)},eventTimeRangeFormat:function(e){return L.format(e.start,"HH:mm")}};n.default=function(){var e=Object(j.useMediaQuery)({query:"(min-width: 768px)"}),n=Object(j.useMediaQuery)({query:"(max-width: 767px)"}),t=Object(o.useState)(!1),a=Object(s.a)(t,2),c=a[0],u=a[1],b=Object(o.useState)(E),p=Object(s.a)(b,2),m=p[0],x=p[1],h=Object(o.useState)({}),O=Object(s.a)(h,2),g=O[0],v=O[1],f=function(e){var n=e.id,t=void 0===n?"":n,a=e.title,i=void 0===a?"":a,r=e.start,s=e.end,o=e.weekDay,c=e.startTime;void 0===c&&(c=r.toTimeString().substr(0,5)),void 0===o&&(o=r.getDay()),v({id:t,title:i,start:r,end:s,weekDay:o,startTime:c}),u(!0)};return Object(k.jsxs)(l,{children:[e&&Object(k.jsx)(d.a,{localizer:L,events:m,startAccessor:"start",endAccessor:"end",scrollToTime:new Date(1970,1,1,8),formats:T,defaultView:d.b.WEEK,titleAccessor:"title",selectable:!0,toolbar:!1,style:{height:"80vh",margin:"30px"},onSelectEvent:f,onSelectSlot:f}),n&&Object(k.jsx)(d.a,{localizer:L,events:m,startAccessor:"start",endAccessor:"end",scrollToTime:new Date(1970,1,1,8),formats:T,defaultView:d.b.DAY,selectable:!0,toolbar:!0,style:{height:"80vh",margin:"30px"},onSelectEvent:f,onSelectSlot:f}),c&&Object(k.jsx)(D,{currentEvent:g,open:c,onClose:function(e){if(u(!1),void 0!==e)if(""!==e.id)if("number"!==typeof e){var n=m.filter((function(n){return n.id===e.id})),t=e.weekDay-n[0].weekDay,a=e.startTime.substr(0,2)-n[0].startTime.substr(0,2),s=e.startTime.substr(-2,2)-n[0].startTime.substr(-2,2);e=Object(i.a)(Object(i.a)({},e),{},{start:new Date(e.start.valueOf()+864e5*t+36e5*a+6e4*s),end:new Date(e.end.valueOf()+864e5*t+36e5*a+6e4*s)});var o=m.map((function(n){return n.id===e.id?e:n}));x(o)}else x(m.filter((function(n){return n.id!==e})));else x([].concat(Object(r.a)(m),[Object(i.a)(Object(i.a)({},e),{},{id:m[m.length-1].id+1})]))}})]})}},181:function(e,n,t){"use strict";t.r(n);var a,i=t(100),r=t(101),s=t(126),o=t(134),c=t(0),l=t(178),d=t(86),u=t(37),b=t(46).a.div(a||(a=Object(u.a)(["\n  padding: 20px;\n\n  .sensorTitle {\n    margin-bottom: 25px;\n    color: #333;\n    font-size: 46px;\n    font-weight: 700;\n    text-align: center;\n  }\n\n  .sensorList {\n    display: flex;\n    flex-wrap: wrap;\n    text-align: center;\n    margin-left: -15px;\n    margin-top: -15px;\n  }\n\n  .sensorItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 0 0 8px rgb(0 0 0 / 15%);\n    border-radius: 10px;\n    padding: 25px;\n\n    margin-left: 15px;\n    margin-top: 15px;\n    flex-basis: calc(100%);\n\n    @media screen and (min-width: 768px) {\n      flex-basis: calc((100% - 30px) / 2);\n    }\n\n    @media screen and (min-width: 1200px) {\n      flex-basis: calc((100% - 60px) / 4);\n    }\n  }\n\n  .sensorItemTitle {\n    margin-bottom: 15px;\n  }\n\n  .sensorItemDescription {\n    margin-bottom: 15px;\n  }\n\n  .sensorItemLink {\n    color: #00a179;\n    font-size: 18px;\n    font-weight: 700;\n    text-decoration: none;\n  }\n\n  .sensorItemLink:hover {\n    text-decoration: underline;\n  }\n"]))),j=t(1),p=function(e){Object(s.a)(t,e);var n=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{className:"sensorTitle",children:"Sensors overview"}),Object(j.jsx)("ul",{className:"sensorList",children:l.map((function(n){return Object(j.jsxs)("li",{className:"sensorItem",children:[Object(j.jsx)("h3",{className:"sensorItemTitle",children:n.name}),Object(j.jsx)("p",{className:"sensorItemDescription",children:n.description}),Object(j.jsx)(d.b,{className:"sensorItemLink",to:{pathname:"/details",state:{from:e.props.location.pathname,sensor:{name:n.name,coordinates:n.coordinates}}},type:"button",children:"Details"})]},n.id)}))})]})}}]),t}(c.Component);n.default=p},225:function(e,n,t){},226:function(e,n,t){"use strict";t.r(n);var a,i,r,s,o,c,l,d=t(0),u=t(36),b=t.n(u),j=t(86),p=t(37),m=t(46),x=m.a.div(a||(a=Object(p.a)(["\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),h=[{name:"Overview",path:"/",component:Object(d.lazy)((function(){return Promise.resolve().then(t.bind(null,181))})),exact:!0},{name:"BigCalendar",path:"/big-calendar",component:Object(d.lazy)((function(){return Promise.resolve().then(t.bind(null,180))})),exact:!0}],O=m.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: center;\n\n  .logoImg {\n    width: 60px;\n    height: 60px;\n  }\n"]))),g=t(1),v=function(){return Object(g.jsx)(O,{children:Object(g.jsx)(j.b,{className:"logoLink",to:"/",type:"button",children:Object(g.jsx)("img",{className:"logoImg",src:"data:image/png;base64,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",alt:"logo"})})})},f=m.a.nav(r||(r=Object(p.a)(["\n  .navList {\n    display: flex;\n  }\n  .navItem:not(:last-child) {\n    margin-right: 20px;\n  }\n  .navLink {\n    font-size: 15px;\n    font-weight: 700;\n    text-decoration: none;\n    color: #ffff;\n  }\n\n  .activeNavLink {\n    color: #eba607;\n  }\n"]))),w=function(e){var n=e.routes;return Object(g.jsx)(f,{children:Object(g.jsx)("ul",{className:"navList",children:n.map((function(e){return Object(g.jsx)("li",{className:"navItem",children:Object(g.jsx)(j.c,{className:"navLink",activeClassName:"activeNavLink",to:e.path,exact:e.exact,children:e.name})},e.path)}))})})},I=m.a.header(s||(s=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  box-shadow: 0 0 8px rgb(0 0 0 / 15%);\n  background: #00a179;\n  padding: 0 40px;\n"]))),C=function(){return Object(g.jsxs)(I,{children:[Object(g.jsx)(v,{}),Object(g.jsx)(w,{routes:h})]})},y=t(35),A=t(180),k=t(100),D=t(101),E=t(126),L=t(134),T=m.a.div(o||(o=Object(p.a)(["\n  button {\n    margin: 20px 0 20px 20px;\n    padding: 13px;\n    background-color: #eba607;\n    color: #333;\n    border: 0;\n    border-radius: 4px;\n    cursor: pointer;\n    min-width: 100px;\n    font-size: 15px;\n    font-weight: bold;\n    /* text-transform: uppercase; */\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  button:hover,\n  button:focus {\n    background-color: #d29506;\n  }\n\n  .sensorTitle {\n    margin-bottom: 25px;\n    color: #333;\n    font-size: 46px;\n    font-weight: 700;\n    text-align: center;\n  }\n"]))),N=(t(224),t(152)),S=t(154),W=t(138),H=t(280),z=t(179),P=t(278),Q=t(282),V=t(285),F=t(177),q=t(290),G=t(281),K=t(17),U=m.a.div(c||(c=Object(p.a)(["\n  .map {\n    height: 400px;\n    width: 100%;\n  }\n"]))),M=function(e){var n=e.coordinates;Object(K.n)();var t=new F.a(n);return Object(d.useEffect)((function(){new H.a({target:"map",view:new z.a({center:n,zoom:15}),layers:[new q.a({source:new Q.a}),new G.a({source:new V.a({features:[new P.a(t)]}),style:new N.b({image:new S.a({radius:5,fill:new W.a({color:"red"})})})})]})}),[]),Object(g.jsx)(U,{children:Object(g.jsx)("div",{id:"map",className:"map"})})},Y=function(e){Object(E.a)(t,e);var n=Object(L.a)(t);function t(){var e;Object(k.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={},e.goBack=function(){var n=e.props,t=n.location;n.history.push(t.state.from)},e}return Object(D.a)(t,[{key:"render",value:function(){var e=this.props.location.state.sensor,n=e.name,t=e.coordinates;return Object(g.jsxs)(T,{children:[Object(g.jsx)("h2",{className:"sensorTitle",children:n}),Object(g.jsx)(M,{coordinates:t}),Object(g.jsx)("button",{type:"button",onClick:this.goBack,children:"Go back"})]})}}]),t}(d.Component),J=t(181),X=m.a.div(l||(l=Object(p.a)([""]))),Z=function(){return Object(g.jsx)(X,{children:Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/",component:J.default,exact:!0}),Object(g.jsx)(y.a,{path:"/details",component:Y,exact:!0}),Object(g.jsx)(y.a,{path:"/big-calendar",component:A.default,exact:!0})]})})},B=function(){return Object(g.jsxs)(x,{children:[Object(g.jsx)(C,{}),Object(g.jsx)(Z,{})]})};t(225);b.a.render(Object(g.jsx)(j.a,{children:Object(g.jsx)(B,{})}),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.2048f797.chunk.js.map