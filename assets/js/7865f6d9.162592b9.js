"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"API/String/is.snakeCase",id:"API/String/is.snakeCase",title:"is.snakeCase",description:"is.snakeCase(target: unknown)",source:"@site/docs/API/String/is.snakeCase.md",sourceDirName:"API/String",slug:"/API/String/is.snakeCase",permalink:"/thiis/docs/next/API/String/is.snakeCase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/String/is.snakeCase.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.pascalCase",permalink:"/thiis/docs/next/API/String/is.pascalCase"},next:{title:"is.string",permalink:"/thiis/docs/next/API/String/is.string"}},l={},c=[{value:"is.snakeCase(target: unknown)",id:"issnakecasetarget-unknown",level:3},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"issnakecasetarget-unknown"},"is.snakeCase(target: unknown)"),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is snakeCase.')),(0,a.kt)("h3",{id:"information"},"Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);