"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4454],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},v=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=i,m=c["".concat(l,".").concat(p)]||c[p]||f[p]||s;return t?r.createElement(m,a(a({ref:n},v),{},{components:t})):r.createElement(m,a({ref:n},v))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const s={},a=void 0,o={unversionedId:"API/Number/is.even",id:"API/Number/is.even",title:"is.even",description:"is.even(target: unknown)",source:"@site/docs/API/Number/is.even.md",sourceDirName:"API/Number",slug:"/API/Number/is.even",permalink:"/thiis/docs/next/API/Number/is.even",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.even.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.bigInt",permalink:"/thiis/docs/next/API/Number/is.bigInt"},next:{title:"is.infinity",permalink:"/thiis/docs/next/API/Number/is.infinity"}},l={},u=[{value:"is.even(target: unknown)",id:"iseventarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],v={toc:u},c="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iseventarget-unknown"},"is.even(target: unknown)"),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},'Checks if the given "',(0,i.kt)("strong",{parentName:"li"},"target"),'" type is even.')),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.even(0) // true\nis.even(2) // true\nis.even(-2) // true\nis.even(BigInt(2)) // true\nis.even(2n) // true\nis.even(-32n) // true\n\nis.even(BigInt(1)) // true\nis.even(1) // false\nis.even(-1) // false\nis.even('undefined') // false\nis.even('null') // false\nis.even(Symbol()) // false\nis.even(null) // false\nis.even(true) // false\nis.even([]) // false\nis.even(false) // false\nis.even(\"\") // false\nis.even('') // false\nis.even(``) // false\nis.even({}) // false\nis.even(undefined) // false\nis.even(Function) // false\nis.even(() => {}) // false\nis.even(BigInt) // false\nis.even(Symbol) // false\nis.even(NaN) // false\nis.even(Infinity) // false\nis.even(-Infinity) // false\nis.even(Number.POSITIVE_INFINITY) // false\nis.even(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.even(0) // false\nis.not.even(2) // false\nis.not.even(-2) // false\nis.not.even(BigInt(2)) // false\nis.not.even(2n) // false\nis.not.even(-32n) // false\n\nis.not.even(BigInt(1)) // true\nis.not.even(1) // true\nis.not.even(-1) // true\nis.not.even('undefined') // true\nis.not.even('null') // true\nis.not.even(Symbol()) // true\nis.not.even(null) // true\nis.not.even(true) // true\nis.not.even([]) // true\nis.not.even(false) // true\nis.not.even(\"\") // true\nis.not.even('') // true\nis.not.even(``) // true\nis.not.even({}) // true\nis.not.even(undefined) // true\nis.not.even(Function) // true\nis.not.even(() => {}) // true\nis.not.even(BigInt) // true\nis.not.even(Symbol) // true\nis.not.even(NaN) // true\nis.not.even(Infinity) // true\nis.not.even(-Infinity) // true\nis.not.even(Number.POSITIVE_INFINITY) // true\nis.not.even(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);