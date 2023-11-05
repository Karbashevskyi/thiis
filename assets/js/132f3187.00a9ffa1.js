"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(m,s(s({ref:t},f),{},{components:r})):n.createElement(m,s({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},s=void 0,o={unversionedId:"API/Browser/is.safari",id:"API/Browser/is.safari",title:"is.safari",description:"is.safari(target: unknown)",source:"@site/docs/API/Browser/is.safari.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.safari",permalink:"/thiis/docs/next/API/Browser/is.safari",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.safari.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.opera",permalink:"/thiis/docs/next/API/Browser/is.opera"},next:{title:"is.array",permalink:"/thiis/docs/next/API/Common/is.array"}},l={},c=[{value:"is.safari(target: unknown)",id:"issafaritarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],f={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"issafaritarget-unknown"},"is.safari(target: unknown)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"is.safari")," method is used to determine if the current browser is Safari."),(0,a.kt)("p",null,"It's worth noting that this method does not differentiate between mobile and desktop versions of Safari. To check specifically for mobile Safari, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"is.ios")," method."),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"optional"),"."),(0,a.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,a.kt)("h3",{id:"information"},"Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.safari() // true if the command is executed in the safari browser\nis.safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';\nis.safari() // true\n\n\n// Recomendation\nis.browser_safari();\n\nis.safari(false) // false\nis.safari(new Boolean(0)) // false\nis.safari(new Boolean()) // false\nis.safari(0) // false\nis.safari('') // false\nis.safari({}) // false\nis.safari([]) // false\n// And all other known types will return false\n")),(0,a.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not_safari() // false if the command is executed in the safari browser\nis.not_safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';\nis.not_safari() // false\n\n\n// Recomendation\nis.not_browser_safari();\n\nis.not_safari(false) // true\nis.not_safari(new Boolean(0)) // true\nis.not_safari(new Boolean()) // true\nis.not_safari(0) // true\nis.not_safari('') // true\nis.not_safari({}) // true\nis.not_safari([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);