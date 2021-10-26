(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(8),a=c.n(n),r=c(3),j=(c(18),c(45)),l=c(46),o=c(0);function d(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(o.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("a",{href:"#intro",className:"logo",children:" GreatHub "}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(j.a,{className:"icon"}),Object(o.jsx)("span",{children:" +1 587-435-2746"})]}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(l.a,{className:"icon"}),Object(o.jsx)("span",{children:" francisryan.pasicolan@yahoo.com"})]})]}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(o.jsx)("span",{className:"line 1"}),Object(o.jsx)("span",{className:"line 2"}),Object(o.jsx)("span",{className:"line 3"})]})})]})})}c(24);var b=c(10);function O(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Designer","Content Creator"]})}),[]),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hi There, I'm"}),Object(o.jsx)("h1",{children:"Francis Pasicolan"}),Object(o.jsxs)("h3",{children:["Freelance ",Object(o.jsx)("span",{ref:e})]})]}),Object(o.jsx)("a",{href:"#portfolio",children:Object(o.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}c(25);function u(e){var t=e.id,c=e.title,s=e.active,i=e.setSelected;return Object(o.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:c})}c(26);var h=[{id:1,title:"About Me",img:"assets/AboutMe.png"}],x=[{id:1,title:"Skills",img:"assets/Skills.png"}],m=[{id:1,title:"Experience ",img:"assets/Experience.png"}],p=[{id:1,title:"Education ",img:"assets/Education.png"}],f=[{id:1,title:"Projects ",img:"assets/Projects.png"}];function v(){var e=Object(s.useState)("about"),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),a=Object(r.a)(n,2),j=a[0],l=a[1];return Object(s.useEffect)((function(){switch(c){default:l(h);break;case"skills":l(x);break;case"experience":l(m);break;case"education":l(p);break;case"projects":l(f)}}),[c]),Object(o.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(o.jsx)("h1",{children:"Portfolio"}),Object(o.jsx)("ul",{children:[{id:"about",title:"About Me"},{id:"skills",title:"Skills"},{id:"experience",title:"Experience"},{id:"education",title:"Education"},{id:"projects",title:"Projects"}].map((function(e){return Object(o.jsx)(u,{title:e.title,active:c===e.id,setSelected:i,id:e.id})}))}),Object(o.jsx)("div",{className:"container",children:j.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h3",{children:e.title})]})}))})]})}c(27);function g(){return Object(o.jsxs)("div",{className:"works",id:"works",children:[Object(o.jsx)("a",{href:"https://github.com/FrancisPasicolan",children:"Link to my Github Projects"}),Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"https://pngimg.com/uploads/github/github_PNG28.png",alt:""})})]})}c(28);function N(){return Object(o.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(o.jsx)("h1",{children:"Testimonials"}),Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"assets/testimonials.png",alt:""})})]})}c(29);function k(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:"assets/shake-hand.png",alt:""})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:"Contact"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0)},children:[Object(o.jsx)("input",{type:"text",placeholder:"Email"}),Object(o.jsx)("textarea",{placeholder:"Message"}),Object(o.jsx)("button",{type:"submit",children:"Send"}),c&&Object(o.jsx)("span",{children:" Thanks, I'll reply to you soon."})]})]})]})}c(30),c(31);function C(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(o.jsx)("div",{className:"menu "+(t&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#intro",children:"Home"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#works",children:"Works"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var S=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(d,{menuOpen:c,setMenuOpen:i}),Object(o.jsx)(C,{menuOpen:c,setMenuOpen:i}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)(O,{}),Object(o.jsx)(v,{}),Object(o.jsx)(g,{}),Object(o.jsx)(N,{}),Object(o.jsx)(k,{})]})]})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f1335a8f.chunk.js.map