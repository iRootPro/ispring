(this.webpackJsonpispring=this.webpackJsonpispring||[]).push([[0],{12:function(e,t,n){e.exports={rightSide:"styles_rightSide__5AGF0",canvas:"styles_canvas__3k_rj"}},13:function(e,t,n){e.exports={leftSide:"styles_leftSide__1Xhvy"}},14:function(e,t,n){e.exports={title:"styles_title__2H5zd"}},16:function(e,t,n){e.exports={container:"style_container__137Qd"}},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),i=n.n(r),s=(n(22),n(13)),l=n.n(s),o=n(14),u=n.n(o),f=n(1),d=function(e){var t=e.title;return Object(f.jsx)("span",{className:u.a.title,children:t})},h=n(5),j=n.n(h),b=function(e){var t=e.createElement,n=function(e){t(e)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d,{title:"Shapes"}),Object(f.jsx)("div",{className:j.a.wrap,children:Object(f.jsxs)("div",{className:j.a.figuresBlock,children:[Object(f.jsx)("div",{className:j.a.triangle,onClick:function(){return n("triangle")}}),Object(f.jsx)("div",{className:j.a.rectangle,onClick:function(){return n("rectangle")}})]})})]})},p=n(9),O=n.n(p),v=n(3),g=n(17),x=n(2),y={currentColor:"#000000",selectShapeID:null,ctx:null,shapes:[]},S=function(e){return{type:"DRAW/ADD-SHAPE",shape:e}},E=function(e){return{type:"DRAW/SET-SELECT-SHAPE-ID",id:e}},_=function(){var e=Object(v.c)((function(e){return e.draw.selectShapeID})),t=Object(v.c)((function(e){return e.draw.shapes})),n=Object(v.b)(),c="black",a=t.filter((function(t){return t.id===e}));1===a.length&&(c=a[0].color);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d,{title:"Style"}),Object(f.jsxs)("div",{className:O.a.wrap,children:[Object(f.jsx)("span",{className:O.a.title,children:"Fill"}),Object(f.jsx)("input",{disabled:!e,type:"color",value:c,onChange:function(t){return c=t.target.value,void n({type:"DRAW/SET-COLOR-SHAPE",payload:{id:e,color:c}});var c}})]})]})},A=function(){var e=Object(v.c)((function(e){return e.draw})),t=e.ctx,n=e.currentColor,c=Object(v.b)();return Object(f.jsxs)("div",{className:l.a.leftSide,children:[Object(f.jsx)(b,{createElement:function(e){var a,r;if(t)switch(e){case"triangle":var i=t.canvas.width/2,s=t.canvas.height/2;c(S({x:i,y:s,color:n,type:"triangle",select:!1,id:Date.now()}));break;case"rectangle":var l=(r=150,(a=100)+Math.random()*(r+1-a)),o=t.canvas.width/2-l/2,u=t.canvas.height/2-25;c(S({x:o,y:u,h:50,w:l,type:"rectangle",color:n,select:!1,id:Date.now()}))}}}),Object(f.jsx)(_,{})]})},w=n(12),T=n.n(w),R=function(){var e,t=Object(v.b)(),n=Object(v.c)((function(e){return e.draw.ctx})),a=Object(v.c)((function(e){return e.draw.shapes})),r=Object(c.useRef)(null),i=null,s=null,l=null,o=function(){if(n){n.clearRect(0,0,n.canvas.width,n.canvas.height);a.map((function(e){switch(e.type){case"rectangle":var t;n.beginPath(),n.fillStyle=e.color,n.fillRect(e.x,e.y,e.w,e.h),n.stroke(),(null===(t=i)||void 0===t?void 0:t.id)===e.id&&(n.setLineDash([10]),n.strokeStyle="blue",n.rect(e.x-2,e.y-2,e.w+4,e.h+4),n.stroke()),n.closePath(),n.save();break;case"triangle":var c;n.beginPath(),n.moveTo(e.x,e.y-50),n.lineTo(e.x-50,e.y+50),n.lineTo(e.x+50,e.y+50),n.fillStyle=e.color,n.fill(),n.closePath(),n.save(),(null===(c=i)||void 0===c?void 0:c.id)===e.id&&(n.setLineDash([10]),n.strokeStyle="blue",n.strokeRect(e.x-50-2,e.y-50-2,104,104));break;default:return}}))}};Object(c.useEffect)((function(){if(r.current){var e=r.current;e.width=e.clientWidth,e.height=e.clientHeight;var n=e.getContext("2d");n&&t(function(e){return{type:"DRAW/SET-CONTEXT",ctx:e}}(n))}}),[]),Object(c.useEffect)((function(){o()}),[a]);var u=function(){i=null};return Object(f.jsx)("div",{className:T.a.rightSide,children:Object(f.jsx)("canvas",{tabIndex:0,onKeyDown:function(n){return function(n){e&&"Delete"===n.key&&t({type:"DRAW/REMOVE-SELECT-SHAPE",id:e})}(n)},className:T.a.canvas,ref:r,onMouseDown:function(c){n&&(s=c.nativeEvent.offsetX-n.canvas.clientLeft,l=c.nativeEvent.offsetY-n.canvas.clientTop,function(e,t){var n=!1;a.map((function(c){switch(c.type){case"triangle":if(!e||!t)return;var a=c.x,r=c.y-50,s=c.x-50,l=c.y+50,o=[c.x+50-a,c.y+50-r],u=[s-a,l-r],f=[e-a,t-r],d=o[0]*o[0]+o[1]*o[1],h=o[0]*u[0]+o[1]*u[1],j=o[0]*f[0]+o[1]*f[1],b=u[0]*u[0]+u[1]*u[1],p=u[0]*f[0]+u[1]*f[1],O=1/(d*b-h*h),v=(b*j-h*p)*O,g=(d*p-h*j)*O;v>=0&&g>=0&&v+g<1&&(i=c,n=!0);break;case"rectangle":if(!e||!t)return;if(e>=c.x&&e<=c.x+c.w&&t>=c.y&&t<=c.y+c.h){i=c,n=!0;break}}}))}(s,l),i?(e=i.id,t(E(i.id)),o()):(e=null,t(E(null)),o()))},onMouseMove:function(e){if(n&&i){var t=e.nativeEvent.offsetX-n.canvas.clientLeft,c=e.nativeEvent.offsetY-n.canvas.clientTop;if(s&&l){var a=t-s,r=c-l;s=t,l=c,i.x+=a,i.y+=r,o()}}},onMouseUp:u,onMouseOut:function(){u()}})})},D=n(16),m=n.n(D),P={isInit:!1};var C=function(){var e=Object(v.c)((function(e){return e.draw.ctx})),t=Object(v.c)((function(e){return e.app.isInit})),n=Object(v.b)();if(e&&!t){var c=function(){try{var e=localStorage.getItem("shapes");if(null===e)return;return JSON.parse(e)}catch(t){return}}();c&&n({type:"DRAW/RESTORE_SHAPE_LOCAL_STORAGE",shapes:c}),n({type:"APP/SET-INIT-APP"})}return Object(f.jsxs)("section",{className:m.a.container,children:[Object(f.jsx)(A,{}),Object(f.jsx)(R,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},I=n(4),N=Object(I.b)({draw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAW/SET-CONTEXT":return Object(x.a)(Object(x.a)({},e),{},{ctx:t.ctx});case"DRAW/SET-CURRENT-COLOR":return Object(x.a)(Object(x.a)({},e),{},{currentColor:t.color});case"DRAW/ADD-SHAPE":return Object(x.a)(Object(x.a)({},e),{},{shapes:[].concat(Object(g.a)(e.shapes),[t.shape])});case"DRAW/REMOVE-SELECT-SHAPE":return Object(x.a)(Object(x.a)({},e),{},{shapes:e.shapes.filter((function(e){return e.id!==t.id}))});case"DRAW/SET-COLOR-SHAPE":var n=e.shapes.map((function(e){return e.id===t.payload.id?(e.color=t.payload.color,e):e}));return Object(x.a)(Object(x.a)({},e),{},{shapes:n});case"DRAW/SET-SELECT-SHAPE-ID":return Object(x.a)(Object(x.a)({},e),{},{selectShapeID:t.id});case"DRAW/RESTORE_SHAPE_LOCAL_STORAGE":return t.shapes?Object(x.a)(Object(x.a)({},e),{},{shapes:t.shapes}):e;default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-INIT-APP":return Object(x.a)(Object(x.a)({},e),{},{isInit:!0});default:return e}}}),L=Object(I.c)(N);L.subscribe((function(){L.getState().app.isInit&&function(e){try{var t=JSON.stringify(e);localStorage.setItem("shapes",t)}catch(n){}}(L.getState().draw.shapes)})),i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v.a,{store:L,children:Object(f.jsx)(C,{})})}),document.getElementById("root")),k()},5:function(e,t,n){e.exports={wrap:"styles_wrap__2pGlT",figuresBlock:"styles_figuresBlock__3o4Kt",triangle:"styles_triangle__1kgHR",rectangle:"styles_rectangle__2Sxhr"}},9:function(e,t,n){e.exports={wrap:"styles_wrap__1xajc",title:"styles_title__14cUj"}}},[[30,1,2]]]);
//# sourceMappingURL=main.bce42770.chunk.js.map