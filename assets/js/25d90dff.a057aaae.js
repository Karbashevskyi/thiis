"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>p});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},I=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),g=u(t),I=r,p=g["".concat(l,".").concat(I)]||g[I]||c[I]||s;return t?i.createElement(p,a(a({ref:n},b),{},{components:t})):i.createElement(p,a({ref:n},b))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=I;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}I.displayName="MDXCreateElement"},7618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const s={},a=void 0,o={unversionedId:"API/Number/is.bigInt",id:"API/Number/is.bigInt",title:"is.bigInt",description:"is.bigInt(target: unknown)",source:"@site/docs/API/Number/is.bigInt.md",sourceDirName:"API/Number",slug:"/API/Number/is.bigInt",permalink:"/thiis/docs/next/API/Number/is.bigInt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.bigInt.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.windowsPhone",permalink:"/thiis/docs/next/API/Hardware/is.windowsPhone"},next:{title:"is.even",permalink:"/thiis/docs/next/API/Number/is.even"}},l={},u=[{value:"is.bigInt(target: unknown)",id:"isbiginttarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],b={toc:u},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,i.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isbiginttarget-unknown"},"is.bigInt(target: unknown)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"is.bigInt")," is a method that checks whether a value is of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt")," type or not."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},'Checks if the given "',(0,r.kt)("strong",{parentName:"li"},"target"),'" type is BigInt.')),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.bigInt(BigInt(1)) // true\n\nis.bigInt(0) // false\nis.bigInt(1) // false\nis.bigInt(-1) // false\nis.bigInt('undefined') // false\nis.bigInt('null') // false\nis.bigInt(Symbol()) // false\nis.bigInt(null) // false\nis.bigInt(true) // false\nis.bigInt([]) // false\nis.bigInt(false) // false\nis.bigInt(\"\") // false\nis.bigInt('') // false\nis.bigInt(``) // false\nis.bigInt({}) // false\nis.bigInt(undefined) // false\nis.bigInt(Function) // false\nis.bigInt(() => {}) // false\nis.bigInt(BigInt) // false\nis.bigInt(Symbol) // false\nis.bigInt(NaN) // false\nis.bigInt(Infinity) // false\nis.bigInt(-Infinity) // false\nis.bigInt(Number.POSITIVE_INFINITY) // false\nis.bigInt(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\nis.not.bigInt(BigInt(1)) // false\n\nis.not.bigInt(0) // true\nis.not.bigInt(1) // true\nis.not.bigInt(-1) // true\nis.not.bigInt('undefined') // true\nis.not.bigInt('null') // true\nis.not.bigInt(Symbol()) // true\nis.not.bigInt(null) // true\nis.not.bigInt(true) // true\nis.not.bigInt([]) // true\nis.not.bigInt(false) // true\nis.not.bigInt(\"\") // true\nis.not.bigInt('') // true\nis.not.bigInt(``) // true\nis.not.bigInt({}) // true\nis.not.bigInt(undefined) // true\nis.not.bigInt(Function) // true\nis.not.bigInt(() => {}) // true\nis.not.bigInt(BigInt) // true\nis.not.bigInt(Symbol) // true\nis.not.bigInt(NaN) // true\nis.not.bigInt(Infinity) // true\nis.not.bigInt(-Infinity) // true\nis.not.bigInt(Number.POSITIVE_INFINITY) // true\nis.not.bigInt(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);