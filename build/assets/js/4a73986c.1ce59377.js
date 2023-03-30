"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8234],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),w=u(t),f=o,b=w["".concat(l,".").concat(f)]||w[f]||p[f]||s;return t?n.createElement(b,a(a({ref:r},c),{},{components:t})):n.createElement(b,a({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[w]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4468:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const s={},a=void 0,i={unversionedId:"API/Browser/is.browser",id:"API/Browser/is.browser",title:"is.browser",description:"is.browser(target: unknown)",source:"@site/docs/API/Browser/is.browser.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.browser",permalink:"/thiis/docs/API/Browser/is.browser",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.browser.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.truthy",permalink:"/thiis/docs/API/Boolean/is.truthy"},next:{title:"is.chrome",permalink:"/thiis/docs/API/Browser/is.chrome"}},l={},u=[{value:"is.browser(target: unknown)",id:"isbrowsertarget-unknown",level:3}],c={toc:u},w="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(w,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"isbrowsertarget-unknown"},"is.browser(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.browser() // true if the command is executed in the browser\nis.browser(window.navigator) // Returns true if the navigator is not empty\n\n// Alternative\nIsConfig.state.navigator = window.navigator;\nis.browser() // Returns true if the navigator is not empty\n\nis.browser(false) // false\nis.browser(new Boolean(0)) // false\nis.browser(new Boolean()) // false\nis.browser(0) // false\nis.browser('') // false\nis.browser({}) // false\nis.browser([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.browser() // false if the command is executed in the browser\nis.not.browser(window.navigator) // Returns false if the navigator is not empty\n\n// Alternative\nIsConfig.state.navigator = window.navigator;\nis.not.browser() // Returns false if the navigator is not empty\n\nis.not.browser(false) // true\nis.not.browser(new Boolean(0)) // true\nis.not.browser(new Boolean()) // true\nis.not.browser(0) // true\nis.not.browser('') // true\nis.not.browser({}) // true\nis.not.browser([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);