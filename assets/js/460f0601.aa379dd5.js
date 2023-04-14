"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5483],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>p});var t=r(7294);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){u(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,u=function(e,n){if(null==e)return{};var r,t,u={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(u[r]=e[r]);return u}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var o=t.createContext({}),l=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=l(e.components);return t.createElement(o.Provider,{value:n},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,u=e.mdxType,i=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),b=l(r),f=u,p=b["".concat(o,".").concat(f)]||b[f]||c[f]||i;return r?t.createElement(p,s(s({ref:n},m),{},{components:r})):t.createElement(p,s({ref:n},m))}));function p(e,n){var r=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[b]="string"==typeof e?e:u,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(7462),u=(r(7294),r(3905));const i={},s=void 0,a={unversionedId:"API/Number/is.number",id:"version-1.0.1/API/Number/is.number",title:"is.number",description:"is.number(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Number/is.number.md",sourceDirName:"API/Number",slug:"/API/Number/is.number",permalink:"/thiis/docs/1.0.1/API/Number/is.number",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Number/is.number.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.negative",permalink:"/thiis/docs/1.0.1/API/Number/is.negative"},next:{title:"is.numeric",permalink:"/thiis/docs/1.0.1/API/Number/is.numeric"}},o={},l=[{value:"is.number(target: unknown)",id:"isnumbertarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],m={toc:l},b="wrapper";function c(e){let{components:n,...r}=e;return(0,u.kt)(b,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"isnumbertarget-unknown"},"is.number(target: unknown)"),(0,u.kt)("h3",{id:"specification"},"Specification"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Target argument: ",(0,u.kt)("strong",{parentName:"li"},"required"),"."),(0,u.kt)("li",{parentName:"ul"},'Checks if the given "',(0,u.kt)("strong",{parentName:"li"},"target"),'" type is number.')),(0,u.kt)("h3",{id:"examples"},"Examples"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"is.number(0) // true\nis.number(1) // true\nis.number(-1) // true\n\nis.number('undefined') // false\nis.number('null') // false\nis.number(Symbol()) // false\nis.number(null) // false\nis.number(true) // false\nis.number(BigInt(1)) // false\nis.number([]) // false\nis.number(false) // false\nis.number(\"\") // false\nis.number('') // false\nis.number(``) // false\nis.number({}) // false\nis.number(undefined) // false\nis.number(Function) // false\nis.number(() => {}) // false\nis.number(BigInt) // false\nis.number(Symbol) // false\nis.number(NaN) // false\nis.number(Infinity) // false\nis.number(-Infinity) // false\nis.number(Number.POSITIVE_INFINITY) // false\nis.number(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,u.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.number(0) // false\nis.not.number(1) // false\nis.not.number(-1) // false\n\nis.not.number('undefined') // true\nis.not.number('null') // true\nis.not.number(Symbol()) // true\nis.not.number(null) // true\nis.not.number(true) // true\nis.not.number(BigInt(1)) // true\nis.not.number([]) // true\nis.not.number(false) // true\nis.not.number(\"\") // true\nis.not.number('') // true\nis.not.number(``) // true\nis.not.number({}) // true\nis.not.number(undefined) // true\nis.not.number(Function) // true\nis.not.number(() => {}) // true\nis.not.number(BigInt) // true\nis.not.number(Symbol) // true\nis.not.number(NaN) // true\nis.not.number(Infinity) // true\nis.not.number(-Infinity) // true\nis.not.number(Number.POSITIVE_INFINITY) // true\nis.not.number(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);