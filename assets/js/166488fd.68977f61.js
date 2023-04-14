"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2580],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return t?n.createElement(f,s(s({ref:r},m),{},{components:t})):n.createElement(f,s({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9025:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={},s=void 0,a={unversionedId:"API/Browser/is.chrome",id:"version-1.0.1/API/Browser/is.chrome",title:"is.chrome",description:"is.chrome(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Browser/is.chrome.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.chrome",permalink:"/thiis/docs/1.0.1/API/Browser/is.chrome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Browser/is.chrome.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.browser",permalink:"/thiis/docs/1.0.1/API/Browser/is.browser"},next:{title:"is.edge",permalink:"/thiis/docs/1.0.1/API/Browser/is.edge"}},l={},c=[{value:"is.chrome(target: unknown)",id:"ischrometarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],m={toc:c},u="wrapper";function h(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ischrometarget-unknown"},"is.chrome(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.chrome")," method is a utility function in JavaScript that is used to determine whether the current browser is a version of Google Chrome. It returns a boolean value indicating whether the browser is Chrome or not."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.chrome"),' method works by examining the user agent string of the browser, which includes information about the browser\'s name, version, and other details. It checks for the presence of the string "Chrome" in the user agent string to determine whether the browser is Chrome.'),(0,o.kt)("p",null,"It's worth noting that the user agent string can be spoofed or modified, so relying solely on this method to determine the browser's identity is not foolproof. However, it can be a useful tool in many cases where the user agent string is not tampered with."),(0,o.kt)("p",null,"In summary, ",(0,o.kt)("inlineCode",{parentName:"p"},"is.chrome")," is a simple and straightforward method for detecting whether the current browser is a version of Google Chrome."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.chrome() // true if the command is executed in the chrome browser\nis.chrome('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36', 'Google Inc.') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';\nisConfig.state.vendor = 'Google Inc.';\nis.chrome() // true\n\n// Recomendation\nis.browser.chrome();\n\nis.chrome(false) // false\nis.chrome(new Boolean(0)) // false\nis.chrome(new Boolean()) // false\nis.chrome(0) // false\nis.chrome('') // false\nis.chrome({}) // false\nis.chrome([]) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.chrome() // false if the command is executed in the chrome browser\nis.not.chrome('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38', 'Google Inc.') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';\nisConfig.state.vendor = 'Google Inc.';\nis.not.chrome() // false\n\n// Recomendation\nis.not.browser.chrome();\n\nis.not.chrome(false) // false\nis.not.chrome(new Boolean(0)) // false\nis.not.chrome(new Boolean()) // false\nis.not.chrome(0) // false\nis.not.chrome('') // false\nis.not.chrome({}) // false\nis.not.chrome([]) // false\n// And all other known types will return true\n")))}h.isMDXComponent=!0}}]);