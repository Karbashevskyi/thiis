"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},s=void 0,o={unversionedId:"API/String/is.pascalCase",id:"version-1.0.2/API/String/is.pascalCase",title:"is.pascalCase",description:"is.pascalCase(target: unknown)",source:"@site/versioned_docs/version-1.0.2/API/String/is.pascalCase.md",sourceDirName:"API/String",slug:"/API/String/is.pascalCase",permalink:"/thiis/docs/API/String/is.pascalCase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/API/String/is.pascalCase.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.macAddress",permalink:"/thiis/docs/API/String/is.macAddress"},next:{title:"is.snakeCase",permalink:"/thiis/docs/API/String/is.snakeCase"}},c={},l=[{value:"is.pascalCase(target: unknown)",id:"ispascalcasetarget-unknown",level:3},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"ispascalcasetarget-unknown"},"is.pascalCase(target: unknown)"),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is pascalCase.')),(0,a.kt)("h3",{id:"information"},"Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")))}d.isMDXComponent=!0}}]);