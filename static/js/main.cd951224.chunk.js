(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={form:"ContactForm_form__a8Zi2",label:"ContactForm_label__DiW-x",input:"ContactForm_input__kYikd",btn:"ContactForm_btn__Jw6SC"}},24:function(t,e,n){t.exports={list:"ContactList_list__2329c",item:"ContactList_item__2cXf4",btn:"ContactList_btn__NTgE8"}},30:function(t,e,n){t.exports={label:"Filter_label__19TLB",input:"Filter_input__LFrp-"}},31:function(t,e,n){t.exports={wrapper:"ErrorView_wrapper__3cV-c",img:"ErrorView_img__3eBtM",text:"ErrorView_text__3NEu6"}},42:function(t,e,n){t.exports={container:"Container_container__1DPWO"}},45:function(t,e,n){t.exports={overlay:"LoaderComponent_overlay__1S07C"}},46:function(t,e,n){t.exports={title:"App_title__mnMs3"}},95:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContactsRequest",(function(){return m})),n.d(c,"fetchContactsSuccess",(function(){return p})),n.d(c,"fetchContactsError",(function(){return x})),n.d(c,"addContactRequest",(function(){return g})),n.d(c,"addContactSuccess",(function(){return C})),n.d(c,"addContactError",(function(){return v})),n.d(c,"deleteContactRequest",(function(){return _})),n.d(c,"deleteContactSuccess",(function(){return y})),n.d(c,"deleteContactError",(function(){return w})),n.d(c,"filterContact",(function(){return E}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return S})),n.d(r,"addContact",(function(){return F})),n.d(r,"deleteContact",(function(){return k}));var a={};n.r(a),n.d(a,"getContacts",(function(){return P})),n.d(a,"getLoading",(function(){return V})),n.d(a,"getError",(function(){return q})),n.d(a,"getFilter",(function(){return B})),n.d(a,"getVisibleContacts",(function(){return D}));var o=n(1),i=n.n(o),u=n(25),s=n.n(u),l=n(42),b=n.n(l),j=n(2);var f=function(t){var e=t.children;return Object(j.jsx)("div",{className:b.a.container,children:e})},d=n(32),O=n(8),h=n(7),m=Object(h.b)("contacts/fetchContactsRequest"),p=Object(h.b)("contacts/fetchContactsSuccess"),x=Object(h.b)("contacts/fetchContactsError"),g=Object(h.b)("contacts/addContactRequest"),C=Object(h.b)("contacts/addContactSuccess"),v=Object(h.b)("contacts/addContactError"),_=Object(h.b)("contacts/deleteContactRequest"),y=Object(h.b)("contacts/deleteContactSuccess"),w=Object(h.b)("contacts/deleteContactError"),E=Object(h.b)("contacts/filter"),N=n(23),L=n.n(N);L.a.defaults.baseURL="http://localhost:3000";var S=function(){return function(t){t(m()),L.a.get("/contacts").then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(x(e))}))}},F=function(t,e){return function(n){var c={name:t,number:e};n(g()),function(t){return L.a.post("/contacts",t)}(c).then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(v(t))}))}},k=function(t){return function(e){e(_()),function(t){return L.a.delete("/contacts/".concat(t))}(t).then((function(){return e(y(t))})).catch((function(t){return e(w(t))}))}},R=n(26),P=function(t){return t.contacts.items},V=function(t){return t.contacts.isLoading},q=function(t){return t.contacts.error},B=function(t){return t.contacts.filter},D=Object(R.a)([P,B],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),I=n(44),J=n.n(I),M=(n(94),n(45)),A=n.n(M);var T=function(){return Object(j.jsx)("div",{className:A.a.overlay,children:Object(j.jsx)(J.a,{type:"ThreeDots",color:"#00BFFF",height:"32"})})},z=n(19),W=n.n(z);var Y=function(){var t=Object(O.b)(),e=Object(O.c)(a.getContacts),n=Object(O.c)(a.getLoading),c=Object(o.useState)(""),i=Object(d.a)(c,2),u=i[0],s=i[1],l=Object(o.useState)(""),b=Object(d.a)(l,2),f=b[0],h=b[1],m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":s(c);break;case"number":h(c);break;default:return}},p=function(){s(""),h("")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:W.a.form,onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(u)?!function(t){return e.find((function(e){return e.number===t}))}(f)?!function(t,e){return""===t.trim()||""===e.trim()}(u,f)?!function(t){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(t)}(f)?t(r.addContact(u,f)):alert("\ud83d\udca9 Enter the correct number phone!"):alert("\ud83d\ude31 Enter the contact's name and number phone!"):alert("\ud83e\udd14 ".concat(f," is already in the phonebook.")):alert("\ud83e\udd14 ".concat(u," is already in the phonebook.")),p()},children:[Object(j.jsxs)("label",{className:W.a.label,children:["Name",Object(j.jsx)("input",{className:W.a.input,type:"text",name:"name",value:u,onChange:m,placeholder:"Jason Statham"})]}),Object(j.jsxs)("label",{className:W.a.label,children:["Number",Object(j.jsx)("input",{placeholder:"123-45-67",type:"tel",name:"number",value:f,onChange:m,className:W.a.input})]}),!n&&Object(j.jsx)("button",{className:W.a.btn,type:"submit",children:"Add contact"}),n&&Object(j.jsx)(T,{})]})})},H=n(100),U=n(99),X={initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3}},Z=n(30),G=n.n(Z);var K=function(){var t=Object(O.b)(),e=Object(O.c)(a.getFilter),n=Object(O.c)(a.getContacts),r=Object(O.c)(a.getError);return Object(j.jsx)(j.Fragment,{children:n.length>0&&!r&&Object(j.jsx)(H.a,{children:Object(j.jsx)("label",{className:G.a.label,children:Object(j.jsx)(U.a.input,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:X,className:G.a.input,type:"text",value:e,onChange:function(e){return t(c.filterContact(e.target.value))}})})})})},Q=n.p+"static/media/error.82375f53.jpg",$=n(31),tt=n.n($);var et,nt=function(t){var e=t.message;return Object(j.jsx)(H.a,{children:Object(j.jsxs)(U.a.div,{role:"alert",className:tt.a.wrapper,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3},children:[Object(j.jsx)("img",{src:Q,width:"300",alt:"Sad PC"}),Object(j.jsx)("p",{text:e,className:tt.a.text,children:e})]})})},ct=["title","titleId"];function rt(){return(rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function at(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function ot(t,e){var n=t.title,c=t.titleId,r=at(t,ct);return o.createElement("svg",rt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",ref:e,"aria-labelledby":c},r),n?o.createElement("title",{id:c},n):null,et||(et=o.createElement("path",{fill:"#3A4047",d:"M13 0H3C1.3 0 0 1.3 0 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-.3 11.3l-1.4 1.4L8 9.4l-3.3 3.3-1.4-1.4L6.6 8 3.3 4.7l1.4-1.4L8 6.6l3.3-3.3 1.4 1.4L9.4 8l3.3 3.3z"})))}var it=o.forwardRef(ot),ut=(n.p,n(24)),st=n.n(ut);var lt=function(){var t=Object(O.b)(),e=Object(O.c)(a.getVisibleContacts),n=Object(O.c)(a.getContacts),c=Object(O.c)(a.getLoading),i=Object(O.c)(a.getError);return Object(o.useEffect)((function(){return t(r.fetchContacts())}),[t]),Object(j.jsxs)(j.Fragment,{children:[n.length>0&&!i&&Object(j.jsx)(U.a.ul,{className:st.a.list,children:Object(j.jsx)(H.a,{children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(j.jsxs)(U.a.li,{className:st.a.item,initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:X,children:[Object(j.jsxs)("p",{className:st.a.text,children:[c,": ",a]}),Object(j.jsx)("button",{className:st.a.btn,type:"button",onClick:function(){return t(r.deleteContact(n))},children:Object(j.jsx)(it,{width:"26",height:"26"})})]},n)}))})}),!n.length&&!i&&!c&&Object(j.jsx)(H.a,{children:Object(j.jsx)(U.a.p,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:X,children:"Your phonebook is empty. Please add contact."})}),i&&Object(j.jsx)(nt,{message:i.message})]})},bt=n(46),jt=n.n(bt);var ft,dt,Ot,ht=function(){return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(Y,{}),Object(j.jsx)("h2",{className:jt.a.title,children:"Contacts"}),Object(j.jsx)(K,{}),Object(j.jsx)(lt,{})]})},mt=n(4),pt=n(47),xt=n(15),gt=Object(h.c)([],(ft={},Object(mt.a)(ft,p,(function(t,e){return e.payload})),Object(mt.a)(ft,C,(function(t,e){var n=e.payload;return[].concat(Object(pt.a)(t),[n])})),Object(mt.a)(ft,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),ft)),Ct=Object(h.c)(!1,(dt={},Object(mt.a)(dt,m,(function(){return!0})),Object(mt.a)(dt,p,(function(){return!1})),Object(mt.a)(dt,x,(function(){return!1})),Object(mt.a)(dt,g,(function(){return!0})),Object(mt.a)(dt,C,(function(){return!1})),Object(mt.a)(dt,v,(function(){return!1})),Object(mt.a)(dt,_,(function(){return!0})),Object(mt.a)(dt,y,(function(){return!1})),Object(mt.a)(dt,w,(function(){return!1})),dt)),vt=Object(h.c)("",Object(mt.a)({},E,(function(t,e){return e.payload}))),_t=Object(h.c)(null,(Ot={},Object(mt.a)(Ot,x,(function(t,e){return e.payload})),Object(mt.a)(Ot,v,(function(t,e){return e.payload})),Object(mt.a)(Ot,w,(function(t,e){return e.payload})),Object(mt.a)(Ot,m,(function(){return null})),Object(mt.a)(Ot,g,(function(){return null})),Object(mt.a)(Ot,_,(function(){return null})),Ot)),yt=Object(xt.b)({items:gt,filter:vt,isLoading:Ct,error:_t}),wt=Object(h.a)({reducer:{contacts:yt}});n(95),n(96);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O.a,{store:wt,children:Object(j.jsx)(ht,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.cd951224.chunk.js.map