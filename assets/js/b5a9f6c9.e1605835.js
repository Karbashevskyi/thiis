"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1936],{3905:(n,t,e)=>{e.d(t,{Zo:()=>f,kt:()=>d});var i=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},s=Object.keys(n);for(i=0;i<s.length;i++)e=s[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)e=s[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l=i.createContext({}),u=function(n){var t=i.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},f=function(n){var t=u(n.components);return i.createElement(l.Provider,{value:t},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,f=o(n,["components","mdxType","originalType","parentName"]),c=u(e),m=r,d=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return e?i.createElement(d,a(a({ref:t},f),{},{components:e})):i.createElement(d,a({ref:t},f))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var s=e.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=n,o[c]="string"==typeof n?n:r,a[1]=o;for(var u=2;u<s;u++)a[u]=e[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},61178:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=e(87462),r=(e(67294),e(3905));const s={},a=void 0,o={unversionedId:"API/Number/is.int",id:"API/Number/is.int",title:"is.int",description:"is.int(target: unknown)",source:"@site/docs/API/Number/is.int.md",sourceDirName:"API/Number",slug:"/API/Number/is.int",permalink:"/thiis/docs/next/API/Number/is.int",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.int.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.infinity",permalink:"/thiis/docs/next/API/Number/is.infinity"},next:{title:"is.negative",permalink:"/thiis/docs/next/API/Number/is.negative"}},l={},u=[{value:"is.int(target: unknown)",id:"isinttarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],f={toc:u},c="wrapper";function p(n){let{components:t,...e}=n;return(0,r.kt)(c,(0,i.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isinttarget-unknown"},"is.int(target: unknown)"),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},'Checks if the given "',(0,r.kt)("strong",{parentName:"li"},"target"),'" type is integer.')),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.int(123) // true\nis.int(0) // true\n\nis.int(123.123) // false\nis.int('0') // false\nis.int('-0') // false\nis.int('+0') // false\nis.int('-2') // false\nis.int('+2') // false\nis.int('2') // false\nis.int(4n) // false\nis.int(-3n) // false\nis.int('2n') // false\nis.int('-5n') // false\nis.int(BigInt(1)) // false\nis.int('undefined') // false\nis.int('null') // false\nis.int(Symbol()) // false\nis.int(null) // false\nis.int(true) // false\nis.int([]) // false\nis.int(false) // false\nis.int(\"\") // false\nis.int('') // false\nis.int(``) // false\nis.int({}) // false\nis.int(undefined) // false\nis.int(Function) // false\nis.int(() => {}) // false\nis.int(BigInt) // false\nis.int(Symbol) // false\nis.int(NaN) // false\nis.int(Infinity) // false\nis.int(-Infinity) // false\nis.int(Number.POSITIVE_INFINITY) // false\nis.int(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.int(123) // false\nis.not.int(0) // false\n\nis.not.int(123.123) // true\nis.not.int('0') // true\nis.not.int('-0') // true\nis.not.int('+0') // true\nis.not.int('-2') // true\nis.not.int('+2') // true\nis.not.int('2') // true\nis.not.int(4n) // true\nis.not.int(-3n) // true\nis.not.int('2n') // true\nis.not.int('-5n') // true\nis.not.int(BigInt(1)) // true\nis.not.int('undefined') // true\nis.not.int('null') // true\nis.not.int(Symbol()) // true\nis.not.int(null) // true\nis.not.int(true) // true\nis.not.int([]) // true\nis.not.int(false) // true\nis.not.int(\"\") // true\nis.not.int('') // true\nis.not.int(``) // true\nis.not.int({}) // true\nis.not.int(undefined) // true\nis.not.int(Function) // true\nis.not.int(() => {}) // true\nis.not.int(BigInt) // true\nis.not.int(Symbol) // true\nis.not.int(NaN) // true\nis.not.int(Infinity) // true\nis.not.int(-Infinity) // true\nis.not.int(Number.POSITIVE_INFINITY) // true\nis.not.int(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);