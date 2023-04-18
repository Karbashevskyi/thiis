"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[689],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=o,f=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"API/Browser/is.edge",id:"version-1.0.1/API/Browser/is.edge",title:"is.edge",description:"is.edge(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Browser/is.edge.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.edge",permalink:"/thiis/docs/1.0.1/API/Browser/is.edge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Browser/is.edge.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.chrome",permalink:"/thiis/docs/1.0.1/API/Browser/is.chrome"},next:{title:"is.firefox",permalink:"/thiis/docs/1.0.1/API/Browser/is.firefox"}},l={},d=[{value:"is.edge(target: unknown)",id:"isedgetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isedgetarget-unknown"},"is.edge(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.edge")," method is a function that takes a user agent string as input and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the user agent corresponds to the Microsoft Edge browser, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("p",null,"Determines whether the given user agent string corresponds to the Microsoft Edge browser. Returns true if the user agent string corresponds to Edge, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"userAgent")," parameter is optional; if not provided, the function will default to using ",(0,o.kt)("inlineCode",{parentName:"p"},"navigator.userAgent"),"."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.edge() // true if the command is executed in the edge browser\nis.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';\nis.edge() // true\n\n// Recomendation\nis.browser.edge();\n\nis.edge(false) // false\nis.edge(new Boolean(0)) // false\nis.edge(new Boolean()) // false\nis.edge(0) // false\nis.edge('') // false\nis.edge({}) // false\nis.edge([]) // false\n// And all other known types will return false\n\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.edge() // false if the command is executed in the edge browser\nis.not.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';\nis.not.edge() // false\n\n// Recomendation\nis.not.browser.edge();\n\nis.not.edge(false) // false\nis.not.edge(new Boolean(0)) // false\nis.not.edge(new Boolean()) // false\nis.not.edge(0) // false\nis.not.edge('') // false\nis.not.edge({}) // false\nis.not.edge([]) // false\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);