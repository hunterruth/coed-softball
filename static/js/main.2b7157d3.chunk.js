(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(70),c=t.n(l),i=(t(94),t(13)),o=t(132),s=(t(96),t(207)),m=t(198),u=t(208),d=t(205),p=t(185),f=t(17),b=t(209),E=t(203),v=t(206),g=t(197),h=t(204),x=t(212),k=t(214),w=t(211),y=t(201),O=t(213),j=t(129),F=t.n(j);function C(e){console.log("props: ",e);var a=e,t=[];Object(n.useEffect)(function(){console.log("lineup changed!"),o()},[a.state.men,a.state.women]);var l=function(e){if("Enter"===e.code){console.log(e);var a=e.target;c(e,a)}},c=function(e,t){var n=e.target.name;if(t=document.querySelector('input[name="'+n+'"]'),"Men"==n){var r=[].concat(Object(f.a)(a.state.men),[t.value]);a.setState(function(e,t){return{men:r,women:a.state.women,lineup:a.state.lineup}})}else{var l=[].concat(Object(f.a)(a.state.women),[t.value]);a.setState(function(e,t){return{women:l,men:a.state.men,lineup:a.state.lineup}})}t.value=""},i=function(e,t,n){if("Men"==n){console.log("role = men"),console.log(t);var r=a.state.men;r.splice(t,1),a.setState(function(e,t){return{men:r,women:a.state.women,lineup:a.state.lineup}})}else{var l=a.state.women;l.splice(t,1),a.setState(function(e,t){return{women:l,men:a.state.men,lineup:a.state.lineup}})}},o=function(e){for(var n=0,r=0,l=0,c=a.state.men,i=a.state.women,o=function(e){var n={name:a.state.men[r]};t.push(n),++r==c.length&&(r=0)},s=function(e){var n={name:a.state.women[l]};t.push(n),++l==i.length&&(l=0)},m=0;m<71;m++){switch(n){case 0:o();break;case 1:s();break;case 2:o();break;case 3:s();break;case 4:case 5:o();break;case 6:s();break;case 7:o();break;case 8:s();break;case 9:o()}++n>9&&(n=0)}a.setState(function(e,n){return{women:a.state.women,men:a.state.men,lineup:t}})};return r.a.createElement(E.a,null,r.a.createElement(p.a,{sx:{bgcolor:"background.paper",p:0}},r.a.createElement(v.a,{variant:"overline",component:"h2"},"Masc"),r.a.createElement(p.a,{sx:{display:"flex",borderRadius:0}},r.a.createElement(b.a,{sx:{flexGrow:1}},r.a.createElement(g.a,{type:"text",name:"Men",onKeyUp:function(e){return l(e)},label:"Name",id:"filled-basic",variant:"filled"})),r.a.createElement(h.a,{disableElevation:!0,sx:{borderRadius:0},name:"Men",variant:"contained",onClick:function(e){return c(e)}},"Add Player")),r.a.createElement(w.a,{dense:!0,sx:{textTransform:"capitalize"}},a.state.men.map(function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(y.a,{secondaryAction:r.a.createElement(x.a,{edge:"end","aria-label":"delete",name:"Men",onClick:function(e){return i(0,a,"Men")}},r.a.createElement(F.a,{edge:"start",tabIndex:-1}))},r.a.createElement(O.a,{primary:e})),r.a.createElement(k.a,null))}))),r.a.createElement(p.a,{sx:{bgcolor:"background.paper",p:0}},r.a.createElement(v.a,{variant:"overline",component:"h2",mt:4},"Fem"),r.a.createElement(p.a,{sx:{display:"flex",borderRadius:0}},r.a.createElement(b.a,{sx:{flexGrow:1}},r.a.createElement(g.a,{type:"text",name:"Women",onKeyUp:function(e){return l(e)},label:"Name",id:"filled-basic",variant:"filled"})),r.a.createElement(h.a,{disableElevation:!0,sx:{borderRadius:0},name:"Women",variant:"contained",onClick:function(e){return c(e)}},"Add Player")),r.a.createElement(w.a,{dense:!0,sx:{textTransform:"capitalize"}},a.state.women.map(function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(y.a,{secondaryAction:r.a.createElement(x.a,{edge:"end","aria-label":"delete",name:"Women",onClick:function(e){return i(0,a,"Women")}},r.a.createElement(F.a,{edge:"start",tabIndex:-1}))},r.a.createElement(O.a,{primary:e})),r.a.createElement(k.a,null))}))))}var S=t(195),M=t(215),P=t(200),z=t(194);function I(e){var a=e,t=function(e){return function(){console.log(e);var t=a.checked,n=t.indexOf(e),r=Object(f.a)(t);-1===n?r.push(e):r.splice(n,1),a.setChecked(r)}};return console.log("batting props:",e),r.a.createElement(z.a,{sx:{bgcolor:"background.paper"}},r.a.createElement(w.a,{sx:{width:"100%",bgcolor:"background.paper",textTransform:"capitalize"}},a.state.lineup.map(function(e,n){console.log(a.checked.indexOf(n));var l="checkbox-list-label-".concat(n),c=e;return r.a.createElement(z.a,{key:n},r.a.createElement(y.a,{disablePadding:!0},r.a.createElement(S.a,{role:void 0,onClick:t(n),dense:!0},r.a.createElement(O.a,{id:l,primary:c.name}),r.a.createElement(M.a,null,r.a.createElement(P.a,{sx:{justifyContent:"flex-end"},edge:"end",checked:-1!==a.checked.indexOf(n),tabIndex:-1,inputProps:{"aria-labelledby":l}})))),r.a.createElement(k.a,null))})))}var L,R,T,W,A=t(131),B=t(121);function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var J=function(e){return r.a.createElement("svg",G({version:1.1,id:"Layer_1",width:50,x:0,y:0,viewBox:"0 0 50 49.2",style:{enableBackground:"new 0 0 50 49.2"},xmlSpace:"preserve"},e),L||(L=r.a.createElement("path",{fill:"#FFF",d:"M45.7 41c-1 .7-2.2 1.2-3.3 1-.9-.2-2.1-.8-2.8-3.1 0 0-7.4-30.5-7.4-30.6-.6-3.7-2.5-5.8-4.1-6.8-2-1.4-4.5-1.9-6.7-1.4-3.4.8-4.7 2.6-5.1 3.9 1.4-.7 2.9-.4 3.9.2.6.4 2 1.2 1.1 3.8L20 11.6l-.7-.2c-.8-.2-1.6-.3-2.4-.1-1.4.2-2.4.8-3 1.7-.3.5-.5 1.1-.5 1.7 1.2-.7 2.4-.5 3.3.1.6.4 1.2.9 1.2 2 0 .3-.1.8-.2 1.2L9.8 44.1l-.4.1c-4 1.3-5.1 3.6-5.3 5 1.2-.7 3.2-1.6 5.9-1.9 1.1-.1 2.5.2 3.9.6 1.1.3 2.2.6 3 .5 1 0 1.8-.3 2.3-.9.5-.6.7-1.3.7-2-.5-.3-1.3-.7-2-1.1-.2.3-.4.5-.7.6-.4.2-1.2.4-2.3 0l-.7-.3 3.1-10.8h12l2 8c1.4 5.6 5.4 6.9 8.5 6.4 2.9-.4 5-3.2 5.9-7.3M18.8 29.7l4.4-15.1.9-3 4.1 18h-9.4z"})),R||(R=r.a.createElement("path",{fill:"#FFF",d:"M38.4 12.9c.4 0 .9-.1 1.2.4.1.2.2.4.2.6 0 .3-.1.6-.2.8-.2.5-.4.8-.6 1.1.2-.1.5-.3.6-.4.6-.5 1.1-1.4 1.1-2.4 0-.4-.1-.8-.3-1.3-.3-.6-.8-.8-1.1-.8-.5-.1-1.1.1-1.4.4-.4.5-.4 1-.2 1.3.2.2.4.3.7.3"})),T||(T=r.a.createElement("path",{fill:"#FFF",d:"M8.9 24.3H6.6v-1.8c-.8 1.3-2 2-3.5 2-1.9 0-3.2-1.2-3.2-3.2v-7.7h2.2v7c0 1.3.6 2 1.7 2 .7 0 1.4-.4 1.9-1.2.6-.8.8-2 .8-3.4v-4.4h2.2v10.7z"})),W||(W=r.a.createElement("path",{fill:"#FFF",d:"M49.4 15.1 48 16.4c-.5-.7-1.1-1-1.9-1-.6 0-1.1.4-1.1 1.1 0 .2.1.5.3.7.4.4.7.5 1.6.9.7.3 1.1.4 1.7.8.9.5 1.3 1.2 1.3 2.3 0 1-.3 1.8-1 2.4-.7.7-1.6 1-2.7 1-2 0-3.5-1.3-4.2-2.9l1.9-1c.6 1.3 1.4 1.9 2.4 1.9s1.5-.5 1.5-1.4c0-.4-.1-.6-.6-.9l-.6-.3c-.3-.1-1.1-.4-1.5-.6-1.5-.6-2.3-1.6-2.3-2.9 0-.9.3-1.6.9-2.2.6-.6 1.4-.9 2.4-.9 1.4 0 2.6.7 3.3 1.7z"})))},K=(t.p,Object(A.a)({palette:{primary:{main:"#1b5e20"},secondary:{main:"#fdd835"}}}));function N(e){var a=e.children,t=e.value,n=e.index,l=Object(o.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),t===n&&r.a.createElement(p.a,{sx:{p:3}},a))}function U(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function q(){var e=r.a.useState(0),a=Object(i.a)(e,2),t=a[0],n=a[1],l=r.a.useState(1),c=Object(i.a)(l,2),o=c[0],f=c[1],b=r.a.useState([-1]),E=Object(i.a)(b,2),v=E[0],g=E[1],h=r.a.useState(),x=Object(i.a)(h,2),k=x[0],w=void 0===k?{lineup:[],men:[],women:[]}:k,y=x[1];return r.a.createElement(d.a,{theme:K},r.a.createElement(p.a,{sx:{bgcolor:"background.paper"}},r.a.createElement(s.a,{position:"sticky"},r.a.createElement(p.a,{sx:{padding:"10px"},display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(J,null)),r.a.createElement(m.a,{value:t,onChange:function(e,a){n(a)},color:B.a[700],indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(u.a,Object.assign({label:"Roster"},U(0))),r.a.createElement(u.a,Object.assign({label:"Lineup"},U(1))),r.a.createElement(u.a,Object.assign({label:"Fielding"},U(2))))),r.a.createElement(N,{value:t,index:0,dir:K.direction},r.a.createElement(C,{state:w,setState:y,count:o,handleClick:function(){f(o+1)}})),r.a.createElement(N,{value:t,index:1,dir:K.direction},r.a.createElement(I,{state:w,setState:y,checked:v,setChecked:g})),r.a.createElement(N,{value:t,index:2,dir:K.direction})))}var D=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,196)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null))),D()},86:function(e,a,t){e.exports=t(135)},94:function(e,a,t){}},[[86,3,2]]]);
//# sourceMappingURL=main.2b7157d3.chunk.js.map