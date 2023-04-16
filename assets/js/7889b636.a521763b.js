"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8439],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=f(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var f=2;f<i;f++)s[f]=t[f];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7117:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>f});var n=t(7462),a=(t(7294),t(3905));const i={},s=void 0,o={unversionedId:"API/Browser/is.safari",id:"version-1.0.2/API/Browser/is.safari",title:"is.safari",description:"is.safari(target: unknown)",source:"@site/versioned_docs/version-1.0.2/API/Browser/is.safari.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.safari",permalink:"/thiis/docs/API/Browser/is.safari",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/API/Browser/is.safari.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.opera",permalink:"/thiis/docs/API/Browser/is.opera"},next:{title:"is.array",permalink:"/thiis/docs/API/Common/is.array"}},l={},f=[{value:"is.safari(target: unknown)",id:"issafaritarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:f},u="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"issafaritarget-unknown"},"is.safari(target: unknown)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"is.safari")," method is used to determine if the current browser is Safari."),(0,a.kt)("p",null,"It's worth noting that this method does not differentiate between mobile and desktop versions of Safari. To check specifically for mobile Safari, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"is.ios")," method."),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"optional"),"."),(0,a.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,a.kt)("h3",{id:"information"},"Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.safari() // true if the command is executed in the safari browser\nis.safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';\nis.safari() // true\n\n\n// Recomendation\nis.browser.safari();\n\nis.safari(false) // false\nis.safari(new Boolean(0)) // false\nis.safari(new Boolean()) // false\nis.safari(0) // false\nis.safari('') // false\nis.safari({}) // false\nis.safari([]) // false\n// And all other known types will return false\n")),(0,a.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.safari() // false if the command is executed in the safari browser\nis.not.safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';\nis.not.safari() // false\n\n\n// Recomendation\nis.not.browser.safari();\n\nis.not.safari(false) // true\nis.not.safari(new Boolean(0)) // true\nis.not.safari(new Boolean()) // true\nis.not.safari(0) // true\nis.not.safari('') // true\nis.not.safari({}) // true\nis.not.safari([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);