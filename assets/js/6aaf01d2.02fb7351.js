"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,w=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(w,a(a({ref:t},u),{},{components:n})):r.createElement(w,a({ref:t},u))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"API/System/is.windows",id:"API/System/is.windows",title:"is.windows",description:"is.windows(target: unknown)",source:"@site/docs/API/System/is.windows.md",sourceDirName:"API/System",slug:"/API/System/is.windows",permalink:"/thiis/docs/next/API/System/is.windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/System/is.windows.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.mac",permalink:"/thiis/docs/next/API/System/is.mac"},next:{title:"common",permalink:"/thiis/docs/next/API/common"}},c={},l=[{value:"is.windows(target: unknown)",id:"iswindowstarget-unknown",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"iswindowstarget-unknown"},"is.windows(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Checks if current system is windows.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")))}m.isMDXComponent=!0}}]);