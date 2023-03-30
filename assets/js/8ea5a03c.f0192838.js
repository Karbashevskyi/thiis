"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[758],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=t.createContext({}),l=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(f.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,m=c["".concat(f,".").concat(d)]||c[d]||p[d]||i;return n?t.createElement(m,s(s({ref:r},u),{},{components:n})):t.createElement(m,s({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var f in r)hasOwnProperty.call(r,f)&&(a[f]=r[f]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3983:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={},s=void 0,a={unversionedId:"API/Browser/is.firefox",id:"API/Browser/is.firefox",title:"is.firefox",description:"is.firefox(target: unknown)",source:"@site/docs/API/Browser/is.firefox.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.firefox",permalink:"/thiis/docs/API/Browser/is.firefox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.firefox.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.edge",permalink:"/thiis/docs/API/Browser/is.edge"},next:{title:"is.ie",permalink:"/thiis/docs/API/Browser/is.ie"}},f={},l=[{value:"is.firefox(target: unknown)",id:"isfirefoxtarget-unknown",level:3}],u={toc:l},c="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(c,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"isfirefoxtarget-unknown"},"is.firefox(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.firefox() // true if the command is executed in the firefox browser\nis.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';\nis.firefox() // true\n\n// Recomendation\nis.browser.firefox();\n\nis.firefox(false) // false\nis.firefox(new Boolean(0)) // false\nis.firefox(new Boolean()) // false\nis.firefox(0) // false\nis.firefox('') // false\nis.firefox({}) // false\nis.firefox([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.firefox() // false if the command is executed in the firefox browser\nis.not.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';\nis.not.firefox() // false\n\n// Recomendation\nis.not.browser.firefox();\n\nis.not.firefox(false) // true\nis.not.firefox(new Boolean(0)) // true\nis.not.firefox(new Boolean()) // true\nis.not.firefox(0) // true\nis.not.firefox('') // true\nis.not.firefox({}) // true\nis.not.firefox([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);