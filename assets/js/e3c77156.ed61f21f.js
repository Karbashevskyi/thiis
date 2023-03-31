"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6108],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},z=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),z=o,m=f["".concat(u,".").concat(z)]||f[z]||p[z]||i;return n?t.createElement(m,s(s({ref:r},c),{},{components:n})):t.createElement(m,s({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=z;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[f]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}z.displayName="MDXCreateElement"},6857:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={},s=void 0,a={unversionedId:"API/Number/is.zero",id:"version-1.0.0/API/Number/is.zero",title:"is.zero",description:"is.zero(target: unknown)",source:"@site/versioned_docs/version-1.0.0/API/Number/is.zero.md",sourceDirName:"API/Number",slug:"/API/Number/is.zero",permalink:"/thiis/docs/1.0.0/API/Number/is.zero",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/API/Number/is.zero.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.positive",permalink:"/thiis/docs/1.0.0/API/Number/is.positive"},next:{title:"is.camelCase",permalink:"/thiis/docs/1.0.0/API/String/is.camelCase"}},u={},l=[{value:"is.zero(target: unknown)",id:"iszerotarget-unknown",level:3}],c={toc:l},f="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(f,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"iszerotarget-unknown"},"is.zero(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"required"),"."),(0,o.kt)("li",{parentName:"ul"},'Checks if the given "',(0,o.kt)("strong",{parentName:"li"},"target"),'" type is 0.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.zero(0) // true\n\nis.zero(1) // false\nis.zero(-1) // false\nis.zero(BigInt(1)) // false\nis.zero(BigInt(0)) // false\nis.zero(1n) // false\nis.zero(-31n) // false\nis.zero(BigInt(2)) // false\nis.zero('undefined') // false\nis.zero('null') // false\nis.zero(Symbol()) // false\nis.zero(null) // false\nis.zero(true) // false\nis.zero([]) // false\nis.zero(false) // false\nis.zero(\"\") // false\nis.zero('') // false\nis.zero(``) // false\nis.zero({}) // false\nis.zero(undefined) // false\nis.zero(Function) // false\nis.zero(() => {}) // false\nis.zero(BigInt) // false\nis.zero(Symbol) // false\nis.zero(NaN) // false\nis.zero(Infinity) // false\nis.zero(-Infinity) // false\nis.zero(Number.POSITIVE_INFINITY) // false\nis.zero(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.zero(0) // false\n\nis.not.zero(1) // true\nis.not.zero(-1) // true\nis.not.zero(BigInt(1)) // true\nis.not.zero(BigInt(0)) // true\nis.not.zero(1n) // true\nis.not.zero(-31n) // true\nis.not.zero(BigInt(2)) // true\nis.not.zero('undefined') // true\nis.not.zero('null') // true\nis.not.zero(Symbol()) // true\nis.not.zero(null) // true\nis.not.zero(true) // true\nis.not.zero([]) // true\nis.not.zero(false) // true\nis.not.zero(\"\") // true\nis.not.zero('') // true\nis.not.zero(``) // true\nis.not.zero({}) // true\nis.not.zero(undefined) // true\nis.not.zero(Function) // true\nis.not.zero(() => {}) // true\nis.not.zero(BigInt) // true\nis.not.zero(Symbol) // true\nis.not.zero(NaN) // true\nis.not.zero(Infinity) // true\nis.not.zero(-Infinity) // true\nis.not.zero(Number.POSITIVE_INFINITY) // true\nis.not.zero(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);