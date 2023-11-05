"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63448],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80743:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"API/Hardware/is.android-phone",id:"version-1.0.2/API/Hardware/is.android-phone",title:"is.android-phone",description:"is.androidPhone(target: unknown)",source:"@site/versioned_docs/version-1.0.2/API/Hardware/is.android-phone.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.android-phone",permalink:"/thiis/docs/1.0.2/API/Hardware/is.android-phone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/API/Hardware/is.android-phone.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.HTMLVideoElement",permalink:"/thiis/docs/1.0.2/API/HTML/is.HTMLVideoElement"},next:{title:"is.blackbarry",permalink:"/thiis/docs/1.0.2/API/Hardware/is.blackbarry"}},l={},d=[{value:"is.androidPhone(target: unknown)",id:"isandroidphonetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:d},p="wrapper";function c(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isandroidphonetarget-unknown"},"is.androidPhone(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.androidPhone")," method returns a boolean value of ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the device accessing the application is an Android phone and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise. This method uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigator.userAgent")," property to check the user agent string of the device and determine whether it is an Android phone."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("h3",{id:"information"},"Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,o.kt)("p",null,"Data used for examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const userAgent = 'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36';\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.androidPhone() // true if the command is executed in a browser running on the androidPhone\nis.androidPhone(userAgent) // true\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.androidPhone() // true\n\nis.androidPhone(769) // false\nis.androidPhone(false) // false\nis.androidPhone(new Boolean(0)) // false\nis.androidPhone(new Boolean()) // false\nis.androidPhone(0) // false\nis.androidPhone('') // false\nis.androidPhone({}) // false\nis.androidPhone([]) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.androidPhone() // false if the command is executed in a browser running on the androidPhone\nis.not.androidPhone(userAgent) // false\n\n// Alternative\nIsConfig.state.userAgent = userAgent;\nis.not.androidPhone() // false\n\nis.androidPhone(769) // true\nis.androidPhone(false) // true\nis.androidPhone(new Boolean(0)) // true\nis.androidPhone(new Boolean()) // true\nis.androidPhone(0) // true\nis.androidPhone('') // true\nis.androidPhone({}) // true\nis.androidPhone([]) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);