(this.webpackJsonpyoutube_search=this.webpackJsonpyoutube_search||[]).push([[0],{19:function(e,n,t){e.exports=t(41)},24:function(e,n,t){},25:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},26:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(12),a=t.n(o),c=(t(24),t(25),t(26),t(4)),s=t(13),u=(t(6),t(14),t(1)),d=[{id:"123-s2-546",name:"John Jacobs",items:["bucket","bottle"],address:"1st Cross, 9th Main, abc Apartment",pincode:"5xx012"},{id:"123-s3-146",name:"David Mire",items:["Bedroom Set"],address:"2nd Cross, BTI Apartment",pincode:"4xx012"},{id:"223-a1-234",name:"Soloman Marshall",items:["bottle"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"121-s2-111",name:"Ricky Beno",items:["Mobile Set"],address:"Sunshine City",pincode:"5xx072"},{id:"123-p2-246",name:"Sikander Singh",items:["Air Conditioner"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"b23-s2-321",name:"Ross Wheeler",items:["Mobile"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"113-n2-563",name:"Ben Bish",items:["Kitchen Set","Chair"],address:"Sunshine City",pincode:"5xx072"},{id:"323-s2-112",name:"John Michael",items:["Refrigerator"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"abc-34-122",name:"Jason Jordan",items:["Mobile"],address:"Riverbed Apartment",pincode:"4xx032"}],l=["id","name","items","address","pincode"],f=t(2),m=t(3),b=t(15),p=t.n(b);function h(){var e=Object(f.a)(["\n  text-align: center;\n  padding: 2rem;\n"]);return h=function(){return e},e}function v(){var e=Object(f.a)(["\n    background-color: #eee;\n  "]);return v=function(){return e},e}function x(){var e=Object(f.a)(["\n  list-style: none;\n  padding: 1rem;\n  border-bottom: 1px solid #adadad;\n  width: 100%;\n  height: 135px;\n  box-sizing: border-box;\n  text-align: left;\n  :last-child {\n    border: none;\n  }\n  ","\n"]);return x=function(){return e},e}function g(){var e=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border: 1px solid #adadad;\n  border-top: 0;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n  max-height: 350px;\n  overflow: auto;\n  .id {\n    font-weight: 900;\n  }\n  .name {\n    font-weight: 600;\n    margin-top: 0.3rem;\n  }\n  .items {\n    font-size: 0.9rem;\n    margin-top: 0.4rem;\n  }\n  .address {\n    font-size: 0.9rem;\n    font-style: italic;\n    margin-top: 0.4rem;\n  }\n  .pincode {\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n"]);return g=function(){return e},e}function O(){var e=Object(f.a)(["\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #adadad;\n  margin: 0;\n  padding: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n"]);return O=function(){return e},e}function j(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 60%;\n  margin: auto;\n  span {\n    color: #0a77ea;\n  }\n"]);return j=function(){return e},e}var y=m.b.div(j()),S=m.b.input(O()),w=m.b.ul(g()),M=m.b.li(x(),(function(e){return e.isActive&&Object(m.a)(v())})),k=m.b.div(h()),E=function(e){var n=e.activeIndex,t=e.checkMouseIndex,r=e.checkMouseOver,o=e.filteredList,a=e.filterList,c=e.isResultListVisible,s=e.setResultsVisibility;return i.a.createElement(y,null,i.a.createElement(S,{placeholder:"Search for users and their details",onBlur:function(){return s(!1)},onChange:a,onFocus:function(){return s(!0)}}),c&&i.a.createElement(w,{id:"userlist"},o.map((function(e,o){return i.a.createElement(M,{id:"index_".concat(o+1),isActive:o+1===n,key:o+1,onMouseMove:function(){return t(o+1)},onMouseOver:function(){return r(o+1)}},p()(e))})),!o.length&&i.a.createElement(k,null,"No User Found")))},C=function(){var e=Object(r.useState)(d),n=Object(u.a)(e,2),t=n[0],o=(n[1],Object(r.useState)([])),a=Object(u.a)(o,2),f=a[0],m=a[1],b=Object(r.useState)(null),p=Object(u.a)(b,2),h=p[0],v=p[1],x=Object(r.useState)({}),g=Object(u.a)(x,2),O=g[0],j=g[1],y=Object(r.useState)(0),S=Object(u.a)(y,2),w=S[0],M=S[1],k=Object(r.useState)(!1),C=Object(u.a)(k,2),A=C[0],R=C[1],T=Object(r.useState)(0),L=Object(u.a)(T,2),B=L[0],I=L[1],q=Object(r.useState)(""),J=Object(u.a)(q,2),z=J[0],_=J[1],V=Object(r.useState)(!1),H=Object(u.a)(V,2),W=H[0],F=H[1],N=Object(r.useRef)(w),D=function(e){N.current=e,M(e)},K=Object(r.useRef)(f),U=function(e){K.current=e,m(e)},$=function(e){if([38,40].includes(e.keyCode)){F(!0);var n=document.querySelector("#userlist"),t=w;if(40===e.keyCode){var r=(t=(N.current>=K.current.length?0:1)+N.current)*document.querySelector("#index_".concat(t)).offsetHeight-n.offsetHeight;r-n.scrollTop>0&&n.scrollTo(0,r)}else{var i=((t=(N.current<=1?0:-1)+N.current)-1)*document.querySelector("#index_".concat(t)).offsetHeight;n.scrollTop-i>0&&n.scrollTo(0,i)}D(t),setTimeout((function(){F(!1)}),150)}};Object(r.useEffect)((function(){document.addEventListener("keyup",$)}),[]);var G=function(e){if(z)if(e)R(e),setTimeout((function(){var e=document.querySelector("#userlist");e&&e.scrollTo(0,B)}),0);else{var n=document.querySelector("#userlist");n&&I(n.scrollTop),R(e)}else R(!1)};return i.a.createElement(E,{activeIndex:w,checkMouseIndex:function(e){D(parseInt(e))},checkMouseOver:function(e){W||D(parseInt(e))},filteredList:f,filterList:function(e){clearTimeout(h);var n=e.target.value;if(_(n),n)if(O[n])U(O[n]),G(!0),D(1);else{var r=[],i=setTimeout((function(){t.forEach((function(e){var t=function(e){var n=e.user,t=e.query,r="",i=t.toLowerCase(),o=!1;return l.forEach((function(e){var a=n[e];if(a){if(Array.isArray(a)){var c=a.some((function(e){return e.toLowerCase().includes(i)}));o=o||c,a=c?"<span class='highlight'>".concat(t,"</span> is present in ").concat(e):""}else{var s=a.toLowerCase().indexOf(i);if(~s){o=!0;var u=a.split(""),d=u.splice(s,i.length).join("");u.splice(s,0,"<span class='highlight'>".concat(d,"</span>")),a=u.join("")}}r+="<div class=".concat(e,">").concat(a,"</div>")}})),o&&r}({user:e,query:n});t&&r.push(t)})),U(r),j((function(e){return Object(s.a)({},e,Object(c.a)({},n,r))})),G(!0),D(1)}),800);v(i)}else G(!1)},isResultListVisible:A,setResultsVisibility:G})};var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.41156446.chunk.js.map