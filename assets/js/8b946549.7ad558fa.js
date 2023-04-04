"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=o,f=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"API/Browser/is.edge",id:"API/Browser/is.edge",title:"is.edge",description:"is.edge(target: unknown)",source:"@site/docs/API/Browser/is.edge.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.edge",permalink:"/thiis/docs/next/API/Browser/is.edge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.edge.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.chrome",permalink:"/thiis/docs/next/API/Browser/is.chrome"},next:{title:"is.firefox",permalink:"/thiis/docs/next/API/Browser/is.firefox"}},l={},d=[{value:"is.edge(target: unknown)",id:"isedgetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isedgetarget-unknown"},"is.edge(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.edge")," method is a function that takes a user agent string as input and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the user agent corresponds to the Microsoft Edge browser, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("p",null,"Determines whether the given user agent string corresponds to the Microsoft Edge browser. Returns true if the user agent string corresponds to Edge, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"userAgent")," parameter is optional; if not provided, the function will default to using ",(0,o.kt)("inlineCode",{parentName:"p"},"navigator.userAgent"),"."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.edge() // true if the command is executed in the edge browser\nis.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';\nis.edge() // true\n\n// Recomendation\nis.browser.edge();\n\nis.edge(false) // false\nis.edge(new Boolean(0)) // false\nis.edge(new Boolean()) // false\nis.edge(0) // false\nis.edge('') // false\nis.edge({}) // false\nis.edge([]) // false\n// And all other known types will return false\n\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.edge() // false if the command is executed in the edge browser\nis.not.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';\nis.not.edge() // false\n\n// Recomendation\nis.not.browser.edge();\n\nis.not.edge(false) // false\nis.not.edge(new Boolean(0)) // false\nis.not.edge(new Boolean()) // false\nis.not.edge(0) // false\nis.not.edge('') // false\nis.not.edge({}) // false\nis.not.edge([]) // false\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);