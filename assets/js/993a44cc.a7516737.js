"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84571],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(r),p=i,d=m["".concat(o,".").concat(p)]||m[p]||f[p]||u;return r?t.createElement(d,s(s({ref:n},l),{},{components:r})):t.createElement(d,s({ref:n},l))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=r.length,s=new Array(u);s[0]=p;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<u;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>c});var t=r(87462),i=(r(67294),r(3905));const u={},s=void 0,a={unversionedId:"API/Number/is.numeric",id:"version-2.0.3/API/Number/is.numeric",title:"is.numeric",description:"is.numeric(target: unknown)",source:"@site/versioned_docs/version-2.0.3/API/Number/is.numeric.md",sourceDirName:"API/Number",slug:"/API/Number/is.numeric",permalink:"/thiis/docs/API/Number/is.numeric",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.3/API/Number/is.numeric.md",tags:[],version:"2.0.3",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.number",permalink:"/thiis/docs/API/Number/is.number"},next:{title:"is.odd",permalink:"/thiis/docs/API/Number/is.odd"}},o={},c=[{value:"is.numeric(target: unknown)",id:"isnumerictarget-unknown",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],l={toc:c},m="wrapper";function f(e){let{components:n,...r}=e;return(0,i.kt)(m,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"isnumerictarget-unknown"},"is.numeric(target: unknown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},'Checks if the given "',(0,i.kt)("strong",{parentName:"li"},"target"),'" type is numeric.')),(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.numeric(0) // true\nis.numeric('0') // true\nis.numeric('-0') // true\nis.numeric('+0') // true\nis.numeric('-2') // true\nis.numeric('+2') // true\nis.numeric('2') // true\nis.numeric(4n) // true\nis.numeric(-3n) // true\nis.numeric('2n') // true\nis.numeric('-5n') // true\nis.numeric('+4n') // true\nis.numeric(BigInt(1)) // true\n\nis.numeric('undefined') // false\nis.numeric('null') // false\nis.numeric(Symbol()) // false\nis.numeric(null) // false\nis.numeric(true) // false\nis.numeric([]) // false\nis.numeric(false) // false\nis.numeric(\"\") // false\nis.numeric('') // false\nis.numeric(``) // false\nis.numeric({}) // false\nis.numeric(undefined) // false\nis.numeric(Function) // false\nis.numeric(() => {}) // false\nis.numeric(BigInt) // false\nis.numeric(Symbol) // false\nis.numeric(NaN) // false\nis.numeric(Infinity) // false\nis.numeric(-Infinity) // false\nis.numeric(Number.POSITIVE_INFINITY) // false\nis.numeric(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not_numeric(0) // false\nis.not_numeric('0') // false\nis.not_numeric('-0') // false\nis.not_numeric('+0') // false\nis.not_numeric('-2') // false\nis.not_numeric('+2') // false\nis.not_numeric('2') // false\nis.not_numeric(4n) // false\nis.not_numeric(-3n) // false\nis.not_numeric('2n') // false\nis.not_numeric('-5n') // false\nis.not_numeric('+4n') // false\nis.not_numeric(BigInt(1)) // false\n\nis.not_numeric('undefined') // true\nis.not_numeric('null') // true\nis.not_numeric(Symbol()) // true\nis.not_numeric(null) // true\nis.not_numeric(true) // true\nis.not_numeric([]) // true\nis.not_numeric(false) // true\nis.not_numeric(\"\") // true\nis.not_numeric('') // true\nis.not_numeric(``) // true\nis.not_numeric({}) // true\nis.not_numeric(undefined) // true\nis.not_numeric(Function) // true\nis.not_numeric(() => {}) // true\nis.not_numeric(BigInt) // true\nis.not_numeric(Symbol) // true\nis.not_numeric(NaN) // true\nis.not_numeric(Infinity) // true\nis.not_numeric(-Infinity) // true\nis.not_numeric(Number.POSITIVE_INFINITY) // true\nis.not_numeric(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);