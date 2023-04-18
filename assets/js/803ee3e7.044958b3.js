"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7758],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>z});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,z=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?t.createElement(z,s(s({ref:n},c),{},{components:r})):t.createElement(z,s({ref:n},c))}));function z(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[f]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97663:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const i={},s=void 0,a={unversionedId:"API/Number/is.zero",id:"API/Number/is.zero",title:"is.zero",description:"is.zero(target: unknown)",source:"@site/docs/API/Number/is.zero.md",sourceDirName:"API/Number",slug:"/API/Number/is.zero",permalink:"/thiis/docs/next/API/Number/is.zero",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.zero.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.positive",permalink:"/thiis/docs/next/API/Number/is.positive"},next:{title:"is.camelCase",permalink:"/thiis/docs/next/API/String/is.camelCase"}},l={},u=[{value:"is.zero(target: unknown)",id:"iszerotarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:u},f="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(f,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"iszerotarget-unknown"},"is.zero(target: unknown)"),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"required"),"."),(0,o.kt)("li",{parentName:"ul"},'Checks if the given "',(0,o.kt)("strong",{parentName:"li"},"target"),'" type is 0.')),(0,o.kt)("h3",{id:"information"},"Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.zero(0) // true\n\nis.zero(1) // false\nis.zero(-1) // false\nis.zero(BigInt(1)) // false\nis.zero(BigInt(0)) // false\nis.zero(1n) // false\nis.zero(-31n) // false\nis.zero(BigInt(2)) // false\nis.zero('undefined') // false\nis.zero('null') // false\nis.zero(Symbol()) // false\nis.zero(null) // false\nis.zero(true) // false\nis.zero([]) // false\nis.zero(false) // false\nis.zero(\"\") // false\nis.zero('') // false\nis.zero(``) // false\nis.zero({}) // false\nis.zero(undefined) // false\nis.zero(Function) // false\nis.zero(() => {}) // false\nis.zero(BigInt) // false\nis.zero(Symbol) // false\nis.zero(NaN) // false\nis.zero(Infinity) // false\nis.zero(-Infinity) // false\nis.zero(Number.POSITIVE_INFINITY) // false\nis.zero(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.zero(0) // false\n\nis.not.zero(1) // true\nis.not.zero(-1) // true\nis.not.zero(BigInt(1)) // true\nis.not.zero(BigInt(0)) // true\nis.not.zero(1n) // true\nis.not.zero(-31n) // true\nis.not.zero(BigInt(2)) // true\nis.not.zero('undefined') // true\nis.not.zero('null') // true\nis.not.zero(Symbol()) // true\nis.not.zero(null) // true\nis.not.zero(true) // true\nis.not.zero([]) // true\nis.not.zero(false) // true\nis.not.zero(\"\") // true\nis.not.zero('') // true\nis.not.zero(``) // true\nis.not.zero({}) // true\nis.not.zero(undefined) // true\nis.not.zero(Function) // true\nis.not.zero(() => {}) // true\nis.not.zero(BigInt) // true\nis.not.zero(Symbol) // true\nis.not.zero(NaN) // true\nis.not.zero(Infinity) // true\nis.not.zero(-Infinity) // true\nis.not.zero(Number.POSITIVE_INFINITY) // true\nis.not.zero(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);