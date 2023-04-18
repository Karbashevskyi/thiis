"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8538],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return t?r.createElement(m,s(s({ref:n},f),{},{components:t})):r.createElement(m,s({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},s=void 0,l={unversionedId:"API/Boolean/is.false",id:"version-1.0.0/API/Boolean/is.false",title:"is.false",description:"is.false(target: unknown)",source:"@site/versioned_docs/version-1.0.0/API/Boolean/is.false.md",sourceDirName:"API/Boolean",slug:"/API/Boolean/is.false",permalink:"/thiis/docs/1.0.0/API/Boolean/is.false",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/API/Boolean/is.false.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.boolean",permalink:"/thiis/docs/1.0.0/API/Boolean/is.boolean"},next:{title:"is.falsy",permalink:"/thiis/docs/1.0.0/API/Boolean/is.falsy"}},i={},u=[{value:"is.false(target: unknown)",id:"isfalsetarget-unknown",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],f={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"isfalsetarget-unknown"},"is.false(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is false.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.false(false) // true\nis.false(new Boolean(0)) // true\nis.false(new Boolean()) // true\n\nis.false(true) // false\nis.false(new Boolean(1)) // false\nis.false(new Boolean(-1)) // false\nis.false(0) // false\nis.false('') // false\nis.false({}) // false\nis.false([]) // false\n// And all other known types will return false\n")),(0,a.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.false(false) // false\nis.not.false(new Boolean(0)) // false\nis.not.false(new Boolean()) // false\n\nis.not.false(true) // true\nis.not.false(new Boolean(1)) // true\nis.not.false(new Boolean(-1)) // true\nis.not.false(0) // true\nis.not.false('') // true\nis.not.false({}) // true\nis.not.false([]) // true\n// And all other known types will return true\n")))}p.isMDXComponent=!0}}]);