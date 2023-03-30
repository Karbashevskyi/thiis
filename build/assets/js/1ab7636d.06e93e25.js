"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6459],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||f[d]||a;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7514:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"API/Browser/is.opera",id:"API/Browser/is.opera",title:"is.opera",description:"is.opera(target: unknown)",source:"@site/docs/API/Browser/is.opera.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.opera",permalink:"/thiis/docs/API/Browser/is.opera",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.opera.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.ie",permalink:"/thiis/docs/API/Browser/is.ie"},next:{title:"is.safari",permalink:"/thiis/docs/API/Browser/is.safari"}},l={},p=[{value:"is.opera(target: unknown)",id:"isoperatarget-unknown",level:3}],u={toc:p},c="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(c,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"isoperatarget-unknown"},"is.opera(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.opera() // true if the command is executed in the opera browser\nis.opera('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218';\nis.opera() // true\n\n// Recomendation\nis.browser.opera();\n\nis.opera(false) // false\nis.opera(new Boolean(0)) // false\nis.opera(new Boolean()) // false\nis.opera(0) // false\nis.opera('') // false\nis.opera({}) // false\nis.opera([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.opera() // false if the command is executed in the opera browser\nis.not.opera('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218';\nis.not.opera() // false\n\n// Recomendation\nis.not.browser.opera();\n\nis.not.opera(false) // true\nis.not.opera(new Boolean(0)) // true\nis.not.opera(new Boolean()) // true\nis.not.opera(0) // true\nis.not.opera('') // true\nis.not.opera({}) // true\nis.not.opera([]) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);