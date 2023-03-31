"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,u={unversionedId:"API/Boolean/is.true",id:"version-1.0.0/API/Boolean/is.true",title:"is.true",description:"is.true(target: unknown)",source:"@site/versioned_docs/version-1.0.0/API/Boolean/is.true.md",sourceDirName:"API/Boolean",slug:"/API/Boolean/is.true",permalink:"/thiis/docs/1.0.0/API/Boolean/is.true",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/API/Boolean/is.true.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.falsy",permalink:"/thiis/docs/1.0.0/API/Boolean/is.falsy"},next:{title:"is.truthy",permalink:"/thiis/docs/1.0.0/API/Boolean/is.truthy"}},i={},l=[{value:"is.true(target: unknown)",id:"istruetarget-unknown",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"istruetarget-unknown"},"is.true(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"required"),"."),(0,o.kt)("li",{parentName:"ul"},'Checks if the given "',(0,o.kt)("strong",{parentName:"li"},"target"),'" type is true.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.true(true) // true\nis.true(new Boolean(1)) // true\nis.true(new Boolean(-1)) // true\n\nis.true(false) // false\nis.true(new Boolean(0)) // false\nis.true(new Boolean()) // false\nis.true(0) // false\nis.true('') // false\nis.true({}) // false\nis.true([]) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.true(true) // false\nis.not.true(new Boolean(1)) // false\nis.not.true(new Boolean(-1)) // false\n\nis.not.true(false) // true\nis.not.true(new Boolean(0)) // true\nis.not.true(new Boolean()) // true\nis.not.true(0) // true\nis.not.true('') // true\nis.not.true({}) // true\nis.not.true([]) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);