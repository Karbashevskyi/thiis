"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5148],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5096:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const o={},a=void 0,l={unversionedId:"API/Hardware/is.mobile",id:"version-1.0.1/API/Hardware/is.mobile",title:"is.mobile",description:"is.mobile()",source:"@site/versioned_docs/version-1.0.1/API/Hardware/is.mobile.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.mobile",permalink:"/thiis/docs/1.0.1/API/Hardware/is.mobile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Hardware/is.mobile.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.ipod",permalink:"/thiis/docs/1.0.1/API/Hardware/is.ipod"},next:{title:"is.phone",permalink:"/thiis/docs/1.0.1/API/Hardware/is.phone"}},s={},u=[{value:"is.mobile()",id:"ismobile",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:u},p="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ismobile"},"is.mobile()"),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("p",null,"Data used for examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.342 Mobile Safari/534.11+';\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.mobile() // true if the command is executed in a browser running on the mobile\nis.mobile(userAgent) // true\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.mobile() // true\n\nis.mobile(769) // false\nis.mobile(false) // false\nis.mobile(new Boolean(0)) // false\nis.mobile(new Boolean()) // false\nis.mobile(0) // false\nis.mobile('') // false\nis.mobile({}) // false\nis.mobile([]) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.mobile() // false if the command is executed in a browser running on the mobile\nis.not.mobile(userAgent) // false\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.not.mobile() // false\n\nis.mobile(769) // true\nis.mobile(false) // true\nis.mobile(new Boolean(0)) // true\nis.mobile(new Boolean()) // true\nis.mobile(0) // true\nis.mobile('') // true\nis.mobile({}) // true\nis.mobile([]) // true\n// And all other known types will return true\n")))}m.isMDXComponent=!0}}]);