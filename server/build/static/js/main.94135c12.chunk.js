(this.webpackJsonpprint_simulator=this.webpackJsonpprint_simulator||[]).push([[0],{131:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(10),r=c.n(a),l=(c(37),c(38),c(31)),i=c(5),o=c(0),j=n.a.createContext();function d(){var e=n.a.useContext(j);if(!e)throw new Error("useStates must be used within a ContentProvider");var t=Object(i.a)(e,24),c=t[0],s=t[1],a=t[2],r=t[3],l=t[4],o=t[5],d=t[6],b=t[7],u=t[8],m=t[9],O=t[10],h=t[11],x=t[12],p=t[13],g=t[14],f=t[15],v=t[16],N=t[17],k=t[18],T=t[19],_=t[20],S=t[21],w=t[22],y=t[23];function C(e){s("https://baconipsum.com/api/?type=all-meat&sentences="+e+"&format=json")}return{url:c,setUrl:s,loading:a,setLoading:r,checkedTypeText:l,setCheckedTypeText:o,sentenceNum:d,setSentenceNum:b,testTime:u,setTestTime:m,workoutType:O,setWorkoutType:h,ownText:x,setOwnText:p,text:g,setText:f,defaultText:v,setDefaultText:N,reload:k,setReload:T,modalMenu:_,setModalMenu:S,open:w,setOpen:y,handleChangeUrl:C,handleOwnText:function(e){p(e.target.value)},toggleCheckbox:function(){o(!l)},toggleCheckboxWorkout:function(){h(!O)},handleSelectNumberSentence:function(e){b(e.target.value),C(e.target.value)},handleSelectTime:function(e){m(e.target.value)}}}function b(e){var t=Object(s.useState)(["Chislic kielbasa ham pancetta, tenderloin kevin turducken sausage t-bone pork alcatra tri-tip swine. Tail biltong ribeye hamburger ball tip. Pork chop turkey turducken, chislic bacon burgdoggen rump cupim hamburger jowl flank frankfurter sausage ground round. Bresaola drumstick cupim porchetta beef kielbasa pastrami burgdoggen pork brisket ribeye short ribs. Short loin boudin shoulder biltong kevin pork belly pork chop."]),c=Object(i.a)(t,2),a=c[0],r=c[1],d=Object(s.useState)("https://baconipsum.com/api/?type=all-meat&sentences=5&format=json"),b=Object(i.a)(d,2),u=b[0],m=b[1],O=Object(s.useState)(!1),h=Object(i.a)(O,2),x=h[0],p=h[1],g=Object(s.useState)(!1),f=Object(i.a)(g,2),v=f[0],N=f[1],k=Object(s.useState)(5),T=Object(i.a)(k,2),_=T[0],S=T[1],w=Object(s.useState)(1),y=Object(i.a)(w,2),C=y[0],F=y[1],M=Object(s.useState)(!1),I=Object(i.a)(M,2),E=I[0],L=I[1],R=Object(s.useState)(""),B=Object(i.a)(R,2),D=B[0],P=B[1],W=Object(s.useState)(""),X=Object(i.a)(W,2),A=X[0],J=X[1],U=Object(s.useState)(!1),V=Object(i.a)(U,2),q=V[0],z=V[1],G=Object(s.useState)(!1),H=Object(i.a)(G,2),K=H[0],Q=H[1],Y=Object(s.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=n.a.useMemo((function(){return[u,m,x,p,v,N,_,S,C,F,E,L,D,P,A,J,a,r,q,z,K,Q,$,ee]}),[u,x,v,_,C,E,D,A,a,q,K,$]);return Object(o.jsx)(j.Provider,Object(l.a)({value:te},e))}var u,m,O,h,x=c(136),p=c(132),g=c(133),f=c(134),v=c(135),N=(c(40),function(e){var t=e.toggle,c=e.modalMenu,n=e.checkedTypeText,a=e.workoutType,r=e.ownText,l=e.testTime,j=e.sentenceNum,d=e.handleOwnText,b=e.toggleCheckbox,u=e.toggleCheckboxWorkout,m=e.handleSelectNumberSentence,O=e.handleSelectTime,h=Object(s.useState)("static"),N=Object(i.a)(h,2),k=N[0],T=(N[1],Object(s.useState)(!0)),_=Object(i.a)(T,2),S=_[0];_[1];return Object(o.jsxs)(x.a,{isOpen:c,toggle:t,backdrop:k,keyboard:S,children:[Object(o.jsx)(p.a,{toggle:t,children:Object(o.jsx)("p",{className:"modal_header",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(o.jsx)(g.a,{children:Object(o.jsx)("div",{className:"row justify-content-center modal_body",children:Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsxs)("div",{className:"modal_group",children:[Object(o.jsx)("p",{className:"menu_label",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("input",{type:"checkbox",id:"checkbox_text",onChange:b,checked:n}),Object(o.jsx)("label",{className:"label_checkbox_text",htmlFor:"checkbox_text"})]})]}),n?Object(o.jsxs)("div",{className:"modal_group mt-3",children:[Object(o.jsx)("p",{className:"menu_label",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043a\u0441\u0442"}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("textarea",{className:"form-control textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c!",onChange:d,value:r})})]}):Object(o.jsx)("div",{className:"modal_group mt-3",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("p",{className:"menu_label",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),Object(o.jsxs)("select",{className:"form-control",onChange:m,defaultValue:j,children:[Object(o.jsx)("option",{children:"1"}),Object(o.jsx)("option",{children:"2"}),Object(o.jsx)("option",{children:"3"}),Object(o.jsx)("option",{children:"4"}),Object(o.jsx)("option",{children:"5"}),Object(o.jsx)("option",{children:"6"}),Object(o.jsx)("option",{children:"7"}),Object(o.jsx)("option",{children:"8"}),Object(o.jsx)("option",{children:"9"}),Object(o.jsx)("option",{children:"10"})]})]})}),Object(o.jsxs)("div",{className:"modal_group mt-3 mb-3",children:[Object(o.jsx)("p",{className:"menu_label",children:"\u0422\u0438\u043f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("input",{type:"checkbox",id:"checkbox_workout",onChange:u,checked:a}),Object(o.jsx)("label",{className:"label_checkbox_workout",htmlFor:"checkbox_workout"})]})]}),a?Object(o.jsx)("div",{className:"modal_group mb-3",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("p",{className:"menu_label",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0442"}),Object(o.jsxs)("select",{className:"form-control",onChange:O,defaultValue:l,children:[Object(o.jsx)("option",{children:"1"}),Object(o.jsx)("option",{children:"2"}),Object(o.jsx)("option",{children:"3"}),Object(o.jsx)("option",{children:"4"}),Object(o.jsx)("option",{children:"5"})]})]})}):Object(o.jsx)(o.Fragment,{})]})})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(v.a,{color:"primary",onClick:t,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),k=function(){var e=d(),t=e.loading,c=e.checkedTypeText,s=e.sentenceNum,n=e.testTime,a=e.workoutType,r=e.ownText,l=e.modalMenu,i=e.setModalMenu,j=e.handleOwnText,b=e.toggleCheckbox,u=e.toggleCheckboxWorkout,m=e.handleSelectNumberSentence,O=e.handleSelectTime,h=e.setReload,x=e.open,p=function(){i(!l),x&&h(!0)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"menu height",children:[t?Object(o.jsx)("div",{className:"loading_outer"}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("button",{className:"cta",onClick:p,children:"\u041c\u0435\u043d\u044e"})]}),Object(o.jsx)(N,{toggle:p,modalMenu:l,checkedTypeText:c,workoutType:a,ownText:r,testTime:n,sentenceNum:s,handleOwnText:j,toggleCheckbox:b,toggleCheckboxWorkout:u,handleSelectNumberSentence:m,handleSelectTime:O,setModalMenu:i})]})},T=c(13),_=(c(50),c(30)),S=c(16),w=function(e){var t=e.typed,c=e.curr,n=e.letter,a=e.showErr,r=e.setShowErr,l=Object(s.useState)("letter"),j=Object(i.a)(l,2),d=j[0],b=j[1];return Object(s.useEffect)((function(){c&&(b("letter curr_letter"),a&&b("letter curr_letter error_letter")),t&&b("letter hidden_letter")})),Object(S.a)("webkitAnimationEnd",(function(){r(!1)})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("span",{className:d,children:n})})},y=c.p+"static/media/error_icon.b44c0d7a.svg",C=c.p+"static/media/velocity.319e0032.svg",F=c.p+"static/media/chronometer.82bea8f7.svg",M=function(e){var t=e.time,c=e.started,n=e.resTime,a=e.setResTime,r=e.currLetterIndex,l=e.setSpeed,i=e.handleStop,j=e.errors,d=e.workoutType,b=e.testTime,u=e.setTimeLimitStatus;function m(){var e=Date.now()-t,c=function(e){var t=Math.floor(e/1e3/60),c=Math.floor(e/1e3)%60;return"0".concat(t,":").concat(c<10?"0"+c:c)}(e);a(c);var s=function(e,t){var c=e/1e3/60;return Math.floor(t/c)}(e,r+1);l(s),(d&&e>=6e4*b||e>=42e4)&&(u(!1),i(r+2,j))}return Object(s.useEffect)((function(){var e=setInterval((function(){c&&m()}),10);return function(){clearInterval(e)}})),Object(s.useEffect)((function(){c&&m()}),[r]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:F,className:"chronometer_icon"})," ",Object(o.jsxs)("span",{children:[" ",n]})]})},I=c.p+"static/media/accuracy.8faaaea3.svg",E=c.p+"static/media/gold.5b79fcaf.svg",L=c.p+"static/media/silver.94f0006e.svg",R=c.p+"static/media/copper.0140d7e1.svg",B=function(e){var t=e.accuracy,c=e.wpm;return Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col-auto accuracy_info",children:[Object(o.jsx)("p",{children:"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c / \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"}),Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(o.jsxs)("span",{children:[t,"%"]})}),Object(o.jsx)("div",{className:"col-12 col-sm-4 align-self-center mt-2 mt-sm-0",children:Object(o.jsx)("img",{src:I,className:"accuracy_icon"})}),Object(o.jsx)("div",{className:"col-12 col-sm-4 align-self-center mt-3 mt-sm-0",children:c>=40?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:E,className:"medal_icon"})}):c>=35?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:L,className:"medal_icon"})}):c>=23?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:R,className:"medal_icon"})}):Object(o.jsx)("span",{className:"bad_medal",children:"\u041d\u0435\u043f\u043b\u043e\u0445\u043e, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438 \u043b\u0443\u0447\u0448\u0435"})})]})]})})},D=function(e){var t=e.text,c=e.loaded,n=(e.handleClickTestBtn,e.setReload,e.FlipInX),a=e.testTime,r=e.workoutType,l=e.handleReload,j=Object(s.useState)([]),d=Object(i.a)(j,2),b=d[0],u=d[1],m=Object(s.useState)(0),O=Object(i.a)(m,2),h=O[0],x=O[1],p=Object(s.useState)(!1),g=Object(i.a)(p,2),f=g[0],v=g[1],N=Object(s.useState)(-1),k=Object(i.a)(N,2),T=k[0],F=k[1],I=Object(s.useState)(!1),E=Object(i.a)(I,2),L=E[0],R=E[1],D=Object(s.useState)(0),P=Object(i.a)(D,2),W=P[0],X=P[1],A=Object(s.useState)(0),J=Object(i.a)(A,2),U=J[0],V=J[1],q=Object(s.useState)("00:00"),z=Object(i.a)(q,2),G=z[0],H=z[1],K=Object(s.useState)(!1),Q=Object(i.a)(K,2),Y=Q[0],Z=Q[1],$=Object(s.useState)(!0),ee=Object(i.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(!1),ne=Object(i.a)(se,2),ae=ne[0],re=ne[1],le=Object(s.useState)(0),ie=Object(i.a)(le,2),oe=ie[0],je=ie[1],de=Object(s.useState)(0),be=Object(i.a)(de,2),ue=be[0],me=be[1];function Oe(e,t){Z(!1),function(e,t){var c=Math.floor(1e4*(1-t/(e+t)))/100;je(c)}(e,t),function(e){var t=(Date.now()-U)/1e3/60,c=Math.floor(e/5/t);me(c)}(e),re(!0)}return Object(s.useEffect)((function(){c&&!L&&(u(Object(_.a)(t[0])),R(!0))})),Object(S.a)("keydown",(function(e){var t=e.key;T+1!==b.length&&te&&"CapsLock"!==t&&"Shift"!==t&&"Enter"!==t&&"Backspace"!==t&&"Alt"!==t&&(t===b[T+1]?(-1===T?(V(Date.now()),Z(!0)):T+2===b.length&&Oe(T+2,h),v(!1),F(T+1)):-1!==T&&(v(!0),x(h+1)))})),Object(o.jsx)("div",{className:"outer_testing",children:Object(o.jsxs)("div",{className:"inner_testing",children:[Object(o.jsxs)("div",{className:"row menu_res justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto col-md",children:Object(o.jsxs)("div",{className:"row justify-content-center justify-content-md-start",children:[Object(o.jsx)("div",{className:"col-auto align-self-center mt-1 mt-sm-0",children:Object(o.jsx)(M,{time:U,started:Y,resTime:G,setResTime:H,currLetterIndex:T,setSpeed:X,handleStop:Oe,errors:h,workoutType:r,testTime:a,setTimeLimitStatus:ce})}),Object(o.jsxs)("div",{className:"col-auto align-self-center mt-2 mt-sm-0",children:[Object(o.jsx)("img",{src:C,className:"velocity_icon"})," ",W," \u0437\u043d/\u043c\u0438\u043d"]}),Object(o.jsx)("div",{className:"col-auto mt-2 mt-sm-0 err_col",children:h>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:y,className:"err_icon"})," ",Object(o.jsx)("span",{className:"err_span",children:h})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:y,className:"err_icon"})," ",Object(o.jsx)("span",{children:h})]})})]})}),Object(o.jsx)("div",{className:"col-auto align-self-center btn_reload order-first order-md-last mt-2 mt-md-0",children:Object(o.jsx)("button",{className:"corner-button",onClick:l,children:Object(o.jsx)("span",{children:"\u0417\u0430\u043d\u043e\u0432\u043e"})})})]}),ae?Object(o.jsx)(n,{children:Object(o.jsx)(B,{accuracy:oe,wpm:ue})}):Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"input_test",children:b.map((function(e,t){return Object(o.jsx)(w,{typed:t===T,curr:t-1===T,letter:e,showErr:f,setShowErr:v},t)}))})})})]})})},P=c(20),W=c(14),X=function(){return Object(o.jsx)("div",{className:"loading_outer",children:Object(o.jsxs)("div",{className:"lds-ellipsis",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})})},A=function(e){var t=e.handleClickTestBtn;return Object(o.jsx)("div",{className:"col-md-12 col-xl-8",children:Object(o.jsxs)("div",{className:"start_simulation",children:[Object(o.jsx)("p",{children:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 c\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438"}),Object(o.jsxs)("button",{className:"btn_test",onClick:t,children:[Object(o.jsx)("span",{className:"circle","aria-hidden":"true",children:Object(o.jsx)("span",{className:"icon arrow"})}),Object(o.jsx)("span",{className:"button-text",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]})]})})},J=function(){var e=d(),t=e.url,c=e.loading,n=e.setLoading,a=e.text,r=e.setText,l=e.checkedTypeText,j=e.ownText,b=e.defaultText,x=e.testTime,p=e.workoutType,g=e.reload,f=e.setReload,v=e.modalMenu,N=e.open,k=e.setOpen;Object(s.useEffect)((function(){!v&&g&&E()}),[v]);var _=Object(s.useState)(!1),S=Object(i.a)(_,2),w=S[0],y=S[1],C=W.a.div(u||(u=Object(T.a)(["animation: 1s ",""])),Object(W.b)(m||(m=Object(T.a)(["",""])),P.fadeInLeft)),F=W.a.div(O||(O=Object(T.a)(["animation: 4s ",""])),Object(W.b)(h||(h=Object(T.a)(["",""])),P.flipInX));function M(e){r(e),y(!0),n(!1),k(!0),f(!1)}function I(){n(!0),function(e){l?M([j]):fetch(e).then((function(e){return e.json()})).then((function(e){M(e)})).catch((function(e){M(b)}))}(t)}function E(){f(!0),I()}return Object(o.jsx)("div",{className:"outer_simulator",children:Object(o.jsxs)("div",{className:"simulator height",children:[c?Object(o.jsx)(X,{}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row height justify-content-start align-items-center",children:N?g?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C,{children:Object(o.jsx)("div",{className:"col-md-12 col-xl-10 offset-xl-1",children:Object(o.jsx)(D,{text:a,loaded:w,handleClickTestBtn:I,setReload:f,FlipInX:F,testTime:x,workoutType:p,handleReload:E})})})}):Object(o.jsx)(A,{handleClickTestBtn:I})})})]})})},U=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=function(){return n(!c)};return Object(o.jsxs)(x.a,{isOpen:c,toggle:a,children:[Object(o.jsx)(p.a,{toggle:a,children:Object(o.jsx)("p",{className:"modal_header",children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"})}),Object(o.jsx)(g.a,{children:Object(o.jsxs)("div",{className:"modalInstructions_body",children:[Object(o.jsxs)("div",{className:"mt-1",children:[Object(o.jsx)("p",{className:"menu_label modalInstructions_bold",children:"\u0421\u0442\u0430\u0440\u0442"}),Object(o.jsxs)("p",{children:["\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u0439 ",Object(o.jsx)("span",{className:"modalInstructions_bold",children:"\u041d\u0410\u0427\u0410\u0422\u042c \u0422\u0415\u0421\u0422"}),Object(o.jsx)("br",{}),"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u0430\u043c \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0433\u0434\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0438 \u0432\u0430\u0448\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b."]}),Object(o.jsxs)("p",{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0442\u0441\u0447\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0441\u0430\u043c \u0442\u0435\u0441\u0442, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b.",Object(o.jsx)("br",{}),"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u043e\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0432\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438, \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:",Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0431\u044b\u043b \u043d\u0430\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e;"}),Object(o.jsx)("li",{children:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f;"}),Object(o.jsx)("li",{children:"\u0411\u044b\u043b \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043b\u0438\u043c\u0438\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."})]})]})]}),Object(o.jsxs)("div",{className:"mt-3",children:[Object(o.jsx)("p",{className:"menu_label modalInstructions_bold",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(o.jsxs)("p",{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u043e\u0441\u043e\u0431\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u0439 ",Object(o.jsx)("span",{className:"modalInstructions_bold",children:"\u041c\u0435\u043d\u044e"})]}),Object(o.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0442\u0435\u043a\u0441\u0442\u0430, \u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0444\u043e\u0440\u043c\u0430\u0442 \u0441\u0430\u043c\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0441\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u044f\u0432\u0438\u0442\u044c \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e \u043f\u0440\u0438 \u043d\u0430\u0431\u043e\u0440\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u0432\u0440\u0435\u043c\u044f."})]})]})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(v.a,{color:"secondary",onClick:a,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})};var V=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)(b,{children:[Object(o.jsx)(U,{}),Object(o.jsx)(k,{}),Object(o.jsx)(J,{})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,137)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root")),q()},37:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){}},[[131,1,2]]]);
//# sourceMappingURL=main.94135c12.chunk.js.map