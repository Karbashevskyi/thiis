"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={},s=void 0,a={unversionedId:"API/Browser/is.ie",id:"API/Browser/is.ie",title:"is.ie",description:"is.ie(target: unknown)",source:"@site/docs/API/Browser/is.ie.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.ie",permalink:"/thiis/docs/API/Browser/is.ie",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Browser/is.ie.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.firefox",permalink:"/thiis/docs/API/Browser/is.firefox"},next:{title:"is.opera",permalink:"/thiis/docs/API/Browser/is.opera"}},l={},u=[{value:"is.ie(target: unknown)",id:"isietarget-unknown",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"isietarget-unknown"},"is.ie(target: unknown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"optional"),"."),(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ie() // true if the command is executed in the ie browser\nis.ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';\nis.ie() // true\n\n// Recomendation\nis.browser.ie();\n\nis.ie(false) // false\nis.ie(new Boolean(0)) // false\nis.ie(new Boolean()) // false\nis.ie(0) // false\nis.ie('') // false\nis.ie({}) // false\nis.ie([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.ie() // false if the command is executed in the ie browser\nis.not.ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';\nis.not.ie() // false\n\n// Recomendation\nis.not.browser.ie();\n\nis.not.ie(false) // true\nis.not.ie(new Boolean(0)) // true\nis.not.ie(new Boolean()) // true\nis.not.ie(0) // true\nis.not.ie('') // true\nis.not.ie({}) // true\nis.not.ie([]) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);