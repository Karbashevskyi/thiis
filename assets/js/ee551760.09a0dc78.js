"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(m,s(s({ref:t},f),{},{components:n})):a.createElement(m,s({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},s=void 0,o={unversionedId:"API/Boolean/is.false",id:"version-1.0.1/API/Boolean/is.false",title:"is.false",description:"is.false(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Boolean/is.false.md",sourceDirName:"API/Boolean",slug:"/API/Boolean/is.false",permalink:"/thiis/docs/1.0.1/API/Boolean/is.false",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Boolean/is.false.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.boolean",permalink:"/thiis/docs/1.0.1/API/Boolean/is.boolean"},next:{title:"is.falsy",permalink:"/thiis/docs/1.0.1/API/Boolean/is.falsy"}},i={},u=[{value:"is.false(target: unknown)",id:"isfalsetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],f={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isfalsetarget-unknown"},"is.false(target: unknown)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"is.false")," is a method that takes a single argument and returns a boolean value indicating whether the argument is false or not. If the argument is exactly equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the method returns true. Otherwise, it returns false."),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"is.false")," is used to check whether various values are equal to false. The method returns true only for the first argument, which is exactly equal to false."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"is.false")," only checks for strict equality with false. It will return false for any other value, including ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),", and the empty string ",(0,r.kt)("inlineCode",{parentName:"p"},"''"),"."),(0,r.kt)("p",null,"Overall, ",(0,r.kt)("inlineCode",{parentName:"p"},"is.false")," is a simple and useful method for checking whether a value is false."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},'Checks if the given "',(0,r.kt)("strong",{parentName:"li"},"target"),'" type is false.')),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.false(false) // true\nis.false(new Boolean(0)) // true\nis.false(new Boolean()) // true\n\nis.false(true) // false\nis.false(new Boolean(1)) // false\nis.false(new Boolean(-1)) // false\nis.false(0) // false\nis.false('') // false\nis.false({}) // false\nis.false([]) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.false(false) // false\nis.not.false(new Boolean(0)) // false\nis.not.false(new Boolean()) // false\n\nis.not.false(true) // true\nis.not.false(new Boolean(1)) // true\nis.not.false(new Boolean(-1)) // true\nis.not.false(0) // true\nis.not.false('') // true\nis.not.false({}) // true\nis.not.false([]) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);