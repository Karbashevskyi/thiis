"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89407],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>d});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=n.createContext({}),c=function(e){var r=n.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(a),y=t,d=b["".concat(o,".").concat(y)]||b[y]||p[y]||l;return a?n.createElement(d,i(i({ref:r},u),{},{components:a})):n.createElement(d,i({ref:r},u))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[b]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},41376:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),t=(a(67294),a(3905));const l={},i=void 0,s={unversionedId:"API/Hardware/is.blackbarry",id:"version-1.0.1/API/Hardware/is.blackbarry",title:"is.blackbarry",description:"is.blackbarry(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Hardware/is.blackbarry.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.blackbarry",permalink:"/thiis/docs/1.0.1/API/Hardware/is.blackbarry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Hardware/is.blackbarry.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.android-phone",permalink:"/thiis/docs/1.0.1/API/Hardware/is.android-phone"},next:{title:"is.ipad",permalink:"/thiis/docs/1.0.1/API/Hardware/is.ipad"}},o={},c=[{value:"is.blackbarry(target: unknown)",id:"isblackbarrytarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:c},b="wrapper";function p(e){let{components:r,...a}=e;return(0,t.kt)(b,(0,n.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"isblackbarrytarget-unknown"},"is.blackbarry(target: unknown)"),(0,t.kt)("h3",{id:"specification"},"Specification"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Target argument: ",(0,t.kt)("strong",{parentName:"li"},"optional"),"."),(0,t.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,t.kt)("p",null,"Data used for examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"const userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.342 Mobile Safari/534.11+';\n")),(0,t.kt)("h3",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"is.blackbarry() // true if the command is executed in a browser running on the blackbarry\nis.blackbarry(userAgent) // true\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.blackbarry() // true\n\nis.blackbarry(769) // false\nis.blackbarry(false) // false\nis.blackbarry(new Boolean(0)) // false\nis.blackbarry(new Boolean()) // false\nis.blackbarry(0) // false\nis.blackbarry('') // false\nis.blackbarry({}) // false\nis.blackbarry([]) // false\n// And all other known types will return false\n")),(0,t.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.blackbarry() // false if the command is executed in a browser running on the blackbarry\nis.not.blackbarry(userAgent) // false\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.not.blackbarry() // false\n\nis.blackbarry(769) // true\nis.blackbarry(false) // true\nis.blackbarry(new Boolean(0)) // true\nis.blackbarry(new Boolean()) // true\nis.blackbarry(0) // true\nis.blackbarry('') // true\nis.blackbarry({}) // true\nis.blackbarry([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);