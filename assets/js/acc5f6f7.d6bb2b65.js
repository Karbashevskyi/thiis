"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),b=i,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={},l=void 0,a={unversionedId:"API/Hardware/is.mobile",id:"API/Hardware/is.mobile",title:"is.mobile",description:"is.mobile()",source:"@site/docs/API/Hardware/is.mobile.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.mobile",permalink:"/thiis/docs/next/API/Hardware/is.mobile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.mobile.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.ipod",permalink:"/thiis/docs/next/API/Hardware/is.ipod"},next:{title:"is.phone",permalink:"/thiis/docs/next/API/Hardware/is.phone"}},s={},u=[{value:"is.mobile()",id:"ismobile",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ismobile"},"is.mobile()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is.mobile")," method is typically used to determine whether the current device is a mobile device or not."),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("p",null,"Data used for examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.342 Mobile Safari/534.11+';\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.mobile() // true if the command is executed in a browser running on the mobile\nis.mobile(userAgent) // true\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.mobile() // true\n\nis.mobile(769) // false\nis.mobile(false) // false\nis.mobile(new Boolean(0)) // false\nis.mobile(new Boolean()) // false\nis.mobile(0) // false\nis.mobile('') // false\nis.mobile({}) // false\nis.mobile([]) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.mobile() // false if the command is executed in a browser running on the mobile\nis.not.mobile(userAgent) // false\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.not.mobile() // false\n\nis.mobile(769) // true\nis.mobile(false) // true\nis.mobile(new Boolean(0)) // true\nis.mobile(new Boolean()) // true\nis.mobile(0) // true\nis.mobile('') // true\nis.mobile({}) // true\nis.mobile([]) // true\n// And all other known types will return true\n")))}m.isMDXComponent=!0}}]);