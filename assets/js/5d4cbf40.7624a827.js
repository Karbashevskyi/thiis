"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,d=h["".concat(s,".").concat(p)]||h[p]||y[p]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[h]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,u={unversionedId:"API/Boolean/is.truthy",id:"version-1.0.1/API/Boolean/is.truthy",title:"is.truthy",description:"is.truthy(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Boolean/is.truthy.md",sourceDirName:"API/Boolean",slug:"/API/Boolean/is.truthy",permalink:"/thiis/docs/1.0.1/API/Boolean/is.truthy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Boolean/is.truthy.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.true",permalink:"/thiis/docs/1.0.1/API/Boolean/is.true"},next:{title:"is.browser",permalink:"/thiis/docs/1.0.1/API/Browser/is.browser"}},s={},l=[{value:"is.truthy(target: unknown)",id:"istruthytarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:l},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"istruthytarget-unknown"},"is.truthy(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.truthy")," method is a utility function in JavaScript that checks whether a value is truthy or not. A truthy value is any value that is considered to be ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when encountered in a Boolean context. This includes not only the true Boolean value, but also values like non-empty strings, numbers other than 0, and objects."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.truthy")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the value passed to it is truthy, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise. It can be useful in many situations where you need to check whether a value is valid or not, or when you need to ensure that a certain condition is met before proceeding with a particular piece of code."),(0,o.kt)("p",null,"Overall, the ",(0,o.kt)("inlineCode",{parentName:"p"},"is.truthy")," method is a handy tool to have in your JavaScript toolbox, and can help you write more robust and reliable code."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"required"),"."),(0,o.kt)("li",{parentName:"ul"},'Checks if the given "',(0,o.kt)("strong",{parentName:"li"},"target"),'" type is true.')),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.truthy([]) // true\nis.truthy('undefined') // true\nis.truthy('null') // true\nis.truthy(Symbol()) // true\nis.truthy(true) // true\nis.truthy(BigInt(1)) // true\nis.truthy({}) // true\nis.truthy(Function) // true\nis.truthy(() => {}) // true\nis.truthy(Bigint) // true\nis.truthy(Symbol) // true\nis.truthy(new Boolean(1)) // true\nis.truthy(new Boolean(-1)) // true\n\nis.truthy(false) // false\nis.truthy(new Boolean(0)) // false\nis.truthy(new Boolean()) // false\nis.truthy(0) // false\nis.truthy('') // false\nis.truthy({}) // false\nis.truthy([]) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.truthy([]) // false\nis.not.truthy('undefined') // false\nis.not.truthy('null') // false\nis.not.truthy(Symbol()) // false\nis.not.truthy(true) // false\nis.not.truthy(BigInt(1)) // false\nis.not.truthy({}) // false\nis.not.truthy(Function) // false\nis.not.truthy(() => {}) // false\nis.not.truthy(Bigint) // false\nis.not.truthy(Symbol) // false\nis.not.truthy(new Boolean(1)) // false\nis.not.truthy(new Boolean(-1)) // false\n\nis.not.truthy(false) // true\nis.not.truthy(new Boolean(0)) // true\nis.not.truthy(new Boolean()) // true\nis.not.truthy(0) // true\nis.not.truthy('') // true\nis.not.truthy({}) // true\nis.not.truthy([]) // true\n// And all other known types will return true\n")))}y.isMDXComponent=!0}}]);