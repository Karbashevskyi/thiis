"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9649],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=c(t),d=n,k=b["".concat(s,".").concat(d)]||b[d]||p[d]||l;return t?a.createElement(k,i(i({ref:r},u),{},{components:t})):a.createElement(k,i({ref:r},u))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[b]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const l={},i=void 0,o={unversionedId:"API/Hardware/is.blackbarry",id:"API/Hardware/is.blackbarry",title:"is.blackbarry",description:"is.blackbarry(target: unknown)",source:"@site/docs/API/Hardware/is.blackbarry.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.blackbarry",permalink:"/thiis/docs/next/API/Hardware/is.blackbarry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.blackbarry.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.android-phone",permalink:"/thiis/docs/next/API/Hardware/is.android-phone"},next:{title:"is.ipad",permalink:"/thiis/docs/next/API/Hardware/is.ipad"}},s={},c=[{value:"is.blackbarry(target: unknown)",id:"isblackbarrytarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:c},b="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(b,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"isblackbarrytarget-unknown"},"is.blackbarry(target: unknown)"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"is.blackberry")," method is used to determine if the current device is a BlackBerry mobile device."),(0,n.kt)("p",null,"The method works by checking the user agent string of the current device against known patterns associated with BlackBerry devices. If a match is found, the method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", otherwise it returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"specification"},"Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Target argument: ",(0,n.kt)("strong",{parentName:"li"},"optional"),"."),(0,n.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,n.kt)("h3",{id:"information"},"Information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,n.kt)("p",null,"Data used for examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.342 Mobile Safari/534.11+';\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"is.blackbarry() // true if the command is executed in a browser running on the blackbarry\nis.blackbarry(userAgent) // true\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.blackbarry() // true\n\nis.blackbarry(769) // false\nis.blackbarry(false) // false\nis.blackbarry(new Boolean(0)) // false\nis.blackbarry(new Boolean()) // false\nis.blackbarry(0) // false\nis.blackbarry('') // false\nis.blackbarry({}) // false\nis.blackbarry([]) // false\n// And all other known types will return false\n")),(0,n.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.blackbarry() // false if the command is executed in a browser running on the blackbarry\nis.not.blackbarry(userAgent) // false\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.not.blackbarry() // false\n\nis.blackbarry(769) // true\nis.blackbarry(false) // true\nis.blackbarry(new Boolean(0)) // true\nis.blackbarry(new Boolean()) // true\nis.blackbarry(0) // true\nis.blackbarry('') // true\nis.blackbarry({}) // true\nis.blackbarry([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);