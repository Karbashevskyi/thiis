"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81531],{3905:(n,i,e)=>{e.d(i,{Zo:()=>u,kt:()=>m});var t=e(67294);function r(n,i,e){return i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function s(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),e.push.apply(e,t)}return e}function a(n){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(Object(e),!0).forEach((function(i){r(n,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))}))}return n}function o(n,i){if(null==n)return{};var e,t,r=function(n,i){if(null==n)return{};var e,t,r={},s=Object.keys(n);for(t=0;t<s.length;t++)e=s[t],i.indexOf(e)>=0||(r[e]=n[e]);return r}(n,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)e=s[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l=t.createContext({}),f=function(n){var i=t.useContext(l),e=i;return n&&(e="function"==typeof n?n(i):a(a({},i),n)),e},u=function(n){var i=f(n.components);return t.createElement(l.Provider,{value:i},n.children)},y="mdxType",c={inlineCode:"code",wrapper:function(n){var i=n.children;return t.createElement(t.Fragment,{},i)}},p=t.forwardRef((function(n,i){var e=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),y=f(e),p=r,m=y["".concat(l,".").concat(p)]||y[p]||c[p]||s;return e?t.createElement(m,a(a({ref:i},u),{},{components:e})):t.createElement(m,a({ref:i},u))}));function m(n,i){var e=arguments,r=i&&i.mdxType;if("string"==typeof n||r){var s=e.length,a=new Array(s);a[0]=p;var o={};for(var l in i)hasOwnProperty.call(i,l)&&(o[l]=i[l]);o.originalType=n,o[y]="string"==typeof n?n:r,a[1]=o;for(var f=2;f<s;f++)a[f]=e[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,e)}p.displayName="MDXCreateElement"},15709:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var t=e(87462),r=(e(67294),e(3905));const s={},a=void 0,o={unversionedId:"API/Number/is.infinity",id:"API/Number/is.infinity",title:"is.infinity",description:"is.infinity(target: unknown)",source:"@site/docs/API/Number/is.infinity.md",sourceDirName:"API/Number",slug:"/API/Number/is.infinity",permalink:"/thiis/docs/next/API/Number/is.infinity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.infinity.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.even",permalink:"/thiis/docs/next/API/Number/is.even"},next:{title:"is.int",permalink:"/thiis/docs/next/API/Number/is.int"}},l={},f=[{value:"is.infinity(target: unknown)",id:"isinfinitytarget-unknown",level:3},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:f},y="wrapper";function c(n){let{components:i,...e}=n;return(0,r.kt)(y,(0,t.Z)({},u,e,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"isinfinitytarget-unknown"},"is.infinity(target: unknown)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is.infinity")," method takes one argument, which is the value to be checked for infinity. If the value is positive infinity or negative infinity, the method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},'Checks if the given "',(0,r.kt)("strong",{parentName:"li"},"target"),'" type is infinity.')),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.infinity(Number.POSITIVE_INFINITY) // true\nis.infinity(Number.NEGATIVE_INFINITY) // true\nis.infinity(Infinity) // true\n\nis.infinity(0) // false\nis.infinity(2) // false\nis.infinity(-2) // false\nis.infinity(BigInt(2)) // false\nis.infinity(2n) // false\nis.infinity(-32n) // false\nis.infinity(BigInt(1)) // false\nis.infinity(1) // false\nis.infinity(-1) // false\nis.infinity('undefined') // false\nis.infinity('null') // false\nis.infinity(Symbol()) // false\nis.infinity(null) // false\nis.infinity(true) // false\nis.infinity([]) // false\nis.infinity(false) // false\nis.infinity(\"\") // false\nis.infinity('') // false\nis.infinity(``) // false\nis.infinity({}) // false\nis.infinity(undefined) // false\nis.infinity(Function) // false\nis.infinity(() => {}) // false\nis.infinity(BigInt) // false\nis.infinity(Symbol) // false\nis.infinity(NaN) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not_infinity(Number.POSITIVE_INFINITY) // false\nis.not_infinity(Number.NEGATIVE_INFINITY) // false\nis.notinfinity(Infinity) // false\n\nis.not_infinity(0) // true\nis.not_infinity(2) // true\nis.not_infinity(-2) // true\nis.not_infinity(BigInt(2)) // true\nis.not_infinity(2n) // true\nis.not_infinity(-32n) // true\nis.not_infinity(BigInt(1)) // true\nis.not_infinity(1) // true\nis.not_infinity(-1) // true\nis.not_infinity('undefined') // true\nis.not_infinity('null') // true\nis.not_infinity(Symbol()) // true\nis.not_infinity(null) // true\nis.not_infinity(true) // true\nis.not_infinity([]) // true\nis.not_infinity(false) // true\nis.not_infinity(\"\") // true\nis.not_infinity('') // true\nis.not_infinity(``) // true\nis.not_infinity({}) // true\nis.not_infinity(undefined) // true\nis.not_infinity(Function) // true\nis.not_infinity(() => {}) // true\nis.not_infinity(BigInt) // true\nis.not_infinity(Symbol) // true\nis.not_infinity(NaN) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);