"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"API/Number/is.positive",id:"API/Number/is.positive",title:"is.positive",description:"is.positive(target: unknown)",source:"@site/docs/API/Number/is.positive.md",sourceDirName:"API/Number",slug:"/API/Number/is.positive",permalink:"/thiis/docs/API/Number/is.positive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.positive.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.odd",permalink:"/thiis/docs/API/Number/is.odd"},next:{title:"is.zero",permalink:"/thiis/docs/API/Number/is.zero"}},u={},c=[{value:"is.positive(target: unknown)",id:"ispositivetarget-unknown",level:3}],l={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ispositivetarget-unknown"},"is.positive(target: unknown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},'Checks if the given "',(0,i.kt)("strong",{parentName:"li"},"target"),'" type is positive number.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")))}m.isMDXComponent=!0}}]);