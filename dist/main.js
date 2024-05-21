(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(601),r=n.n(a),o=n(314),i=n.n(o)()(r());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    background: ivory;\n    box-sizing: border-box;\n}\n\n/*\n    HEADER CSS - PRESENT IN ALL PAGES\n*/\n\nheader {\n    display: flex;\n    height: 10vh;\n    border-bottom: 2px solid maroon;\n}\n\n#title {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    flex: 1;\n}\n\n#buttons {\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    flex: 1;\n}\n\n#buttons button {\n    margin: 15px;\n    padding: 5px;\n    border: 1px solid maroon;\n    border-radius: 3px;\n}\n\n#header-img {\n    height: 100%;\n    margin: 10px;\n}\n\n#header-text {\n    font-size: 2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n/*\n    FLEX CSS\n*/\n\n.flex {\n    display: flex;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.main-center {\n    justify-content: center;\n}\n\n.cross-center {\n    align-items: center;\n}\n\n.single {\n    flex: 1;\n}\n\n.double {\n    flex: 2;\n}\n\n/*\n    GRID CSS\n*/\n\n.grid {\n    display: grid;\n}\n\n#menu-grid {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    border: 1px solid maroon;\n    height: 90vh;\n    width: 100vw;\n}\n\n/*\n    MENU CSS\n*/\n\n.contain {\n    height: 50%;\n    width: 50%;\n    object-fit: contain;\n    margin: 10px;\n}\n\n.menu-border {\n    border: 2px solid maroon;\n}\n\n/*\n    ABOUT CSS\n*/\n\n.founder-img {\n    object-fit: contain;\n    width: 100%;\n    height: auto;\n}\n\n.about-icon {\n    object-fit: contain;\n    width: 10%;\n    height: auto;\n}",""]);const d=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],l=a.base?c[0]+a.base:c[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=n(o[i]);t[d].references--}for(var c=a(e,r),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),r=n.n(a),o=n(659),i=n.n(o),d=n(56),c=n.n(d),l=n(540),s=n.n(l),p=n(113),u=n.n(p),m=n(208),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=n.p+"008218ac0ebe5f091fe7.jpeg",g=n.p+"8aaab2b513452c92b007.png",b=n.p+"5db6a8ecf04f7ec84b6c.png",v=n.p+"ee6225878d854875cb71.png",C=n.p+"1bb934848b2d92f31498.png",x=n.p+"5107147b5d23f2955cba.png",y=n.p+"ea305ffbd69fe75b3d09.png",E=n.p+"bb508718fb99e4bfa393.png",w=n.p+"ea84ff76dc60bde6c79b.png",L=n.p+"db246dab9906b39aab41.png",S=n.p+"8ef45d37944c291f382c.png",z=n.p+"c0b8fc7f1cafcb5941a6.png",k=n.p+"78a9c0edcafb2cdf12d8.png";let T=document.getElementById("content"),A=document.getElementById("header"),I=document.createElement("div");I.id="title";let P=new Image;P.src=h,P.id="header-img";let M=document.createElement("h4");M.id="header-text",M.textContent="The Hot Spot",I.appendChild(P),I.appendChild(M);let j=document.createElement("nav");j.id="buttons";let H=document.createElement("button");H.id="home",H.textContent="Home";let N=document.createElement("button");N.id="menu",N.textContent="Menu";let O=document.createElement("button");function B(){for(;T.lastChild;)T.removeChild(T.lastChild)}function F(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");t.classList.add("flex","single");let a=new Image;a.src=h,t.appendChild(a),n.classList.add("flex","column","main-center","cross-center","double");let r=document.createElement("h1");r.textContent="Welcome to The Hot Spot!",n.appendChild(r);let o=document.createElement("p");o.textContent="This is a brief overview of the history of the Hot Spot, from our founder's fight in the War of 1812 to our revolutionary discovery of ancient dough-kneading techniques recovered from a pharoah's tomb by my Great-Aunt Birget.",n.appendChild(o),e.classList.add("flex"),e.appendChild(t),e.appendChild(n),T.appendChild(e)}O.id="about",O.textContent="About",j.appendChild(H),j.appendChild(N),j.appendChild(O),A.appendChild(I),A.appendChild(j),F(),H.addEventListener("click",(()=>{B(),F()})),N.addEventListener("click",(()=>{B(),function(){let e=document.createElement("div");e.classList.add("grid");for(let t=0;t<8;t++){let n=document.createElement("div");n.classList.add("flex","column","cross-center","menu-border");let a=new Image;a.classList.add("contain");let r=document.createElement("div"),o=document.createElement("h4"),i=document.createElement("p");switch(t){case 0:a.src=g,o.textContent="Pepperoni Pizza",i.textContent="You know it, you love it!";break;case 1:a.src=b,o.textContent="Cheese Pizza",i.textContent="Who can go wrong with the classic?";break;case 2:a.src=v,o.textContent="Meat Lover's Pizza",i.textContent="For the carnivore in you.";break;case 3:a.src=C,o.textContent="Veggie Pizza",i.textContent="When you want to be healthy, but still order pizza.";break;case 4:a.src=x,o.textContent="Ultimate Pizza",i.textContent="Ultimate meat and ultimate veg. The best of both.";break;case 5:a.src=y,o.textContent="Hawaiian Pizza",i.textContent="You know what you like, and I respect that!";break;case 6:a.src=E,o.textContent="Neapolitan Pizza",i.textContent="You're either classy or like ice cream!";break;case 7:a.src=w,o.textContent="BBQ Chicken Pizza",i.textContent="So fresh, it might walk off the plate!";break;default:alert("Error! Something went wrong!")}n.appendChild(a),r.appendChild(o),r.appendChild(i),n.appendChild(r),e.appendChild(n)}e.id="menu-grid",T.appendChild(e)}()})),O.addEventListener("click",(()=>{B(),function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");e.classList.add("flex"),t.classList.add("flex","column","single");let r=document.createElement("h2");r.textContent="Our History";let o=document.createElement("p");o.textContent="A long time ago, in a galaxy far, far away, a man was born. Born without arms at the tender age of 62, Mario Mario knew he was destined for pizzas.",t.appendChild(r),t.appendChild(o),n.classList.add("flex","column","single");let i=new Image;i.classList.add("founder-img"),i.src=L;let d=document.createElement("h2");d.textContent="The Doughfather, Cabanela Mario",n.appendChild(i),n.appendChild(d),a.classList.add("flex","column","single");let c=document.createElement("div");c.classList.add("flex");let l=new Image;l.classList.add("about-icon"),l.src=S;let s=document.createElement("p");s.textContent="Our number: (760) 717-3521",c.appendChild(l),c.appendChild(s);let p=document.createElement("div");p.classList.add("flex");let u=new Image;u.classList.add("about-icon"),u.src=z;let m=document.createElement("p");m.textContent="Our e-mail address: pizzagirl223@nasa.gov",p.appendChild(u),p.appendChild(m);let f=document.createElement("div");f.classList.add("flex");let h=new Image;h.classList.add("about-icon"),h.src=k;let g=document.createElement("p");g.textContent="Our address: 1026 Monique Court, Fallbrook, CA, 92084",f.appendChild(h),f.appendChild(g),a.appendChild(c),a.appendChild(p),a.appendChild(f),e.appendChild(t),e.appendChild(n),e.appendChild(a),T.appendChild(e)}()}))})()})();