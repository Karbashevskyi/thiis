"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=f(r),d=i,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var f=2;f<o;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"API/Browser/is.firefox",id:"API/Browser/is.firefox",title:"is.firefox",description:"is.firefox(target: unknown)",source:"@site/docs/API/Browser/is.firefox.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.firefox",permalink:"/thiis/docs/next/API/Browser/is.firefox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.firefox.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.edge",permalink:"/thiis/docs/next/API/Browser/is.edge"},next:{title:"is.ie",permalink:"/thiis/docs/next/API/Browser/is.ie"}},l={},f=[{value:"is.firefox(target: unknown)",id:"isfirefoxtarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:f},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"isfirefoxtarget-unknown"},"is.firefox(target: unknown)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is.firefox")," method is a function that takes an argument and returns a boolean indicating whether the argument is an instance of the Firefox browser. This method can be useful in determining the browser being used, and can be used for browser-specific feature detection."),(0,i.kt)("p",null,"The implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"is.firefox")," typically involves checking the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigator.userAgent"),' property for the string "Firefox". If the string is found, the method returns true; otherwise, it returns false.'),(0,i.kt)("p",null,"This implementation takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"userAgent"),' argument, which is a string representing the user agent of the browser. It checks whether the string "Firefox" is present in the user agent string using the ',(0,i.kt)("inlineCode",{parentName:"p"},"indexOf")," method, and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if it is, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,"In some cases, it may be necessary to use a more robust implementation of browser detection that takes into account browser version numbers, as well as platform-specific differences. However, for simple cases where only a few specific browser types need to be detected, a method like is.firefox can be sufficient."),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"optional"),"."),(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.firefox() // true if the command is executed in the firefox browser\nis.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';\nis.firefox() // true\n\n// Recomendation\nis.browser.firefox();\n\nis.firefox(false) // false\nis.firefox(new Boolean(0)) // false\nis.firefox(new Boolean()) // false\nis.firefox(0) // false\nis.firefox('') // false\nis.firefox({}) // false\nis.firefox([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.firefox() // false if the command is executed in the firefox browser\nis.not.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';\nis.not.firefox() // false\n\n// Recomendation\nis.not.browser.firefox();\n\nis.not.firefox(false) // true\nis.not.firefox(new Boolean(0)) // true\nis.not.firefox(new Boolean()) // true\nis.not.firefox(0) // true\nis.not.firefox('') // true\nis.not.firefox({}) // true\nis.not.firefox([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);