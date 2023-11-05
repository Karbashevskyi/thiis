"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,s={unversionedId:"API/Browser/is.ie",id:"version-2.0.3/API/Browser/is.ie",title:"is.ie",description:"is.ie(target: unknown)",source:"@site/versioned_docs/version-2.0.3/API/Browser/is.ie.md",sourceDirName:"API/Browser",slug:"/API/Browser/is.ie",permalink:"/thiis/docs/API/Browser/is.ie",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.3/API/Browser/is.ie.md",tags:[],version:"2.0.3",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.firefox",permalink:"/thiis/docs/API/Browser/is.firefox"},next:{title:"is.opera",permalink:"/thiis/docs/API/Browser/is.opera"}},l={},u=[{value:"is.ie(target: unknown)",id:"isietarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"isietarget-unknown"},"is.ie(target: unknown)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"is.ie")," is a function that returns a boolean value indicating whether the current browser is Internet Explorer. It works by checking the user agent string of the browser, which contains information about the browser and its version."),(0,i.kt)("p",null,"Note that relying on the user agent string for browser detection can be unreliable, as the user agent string can be easily spoofed. It's generally better to use feature detection rather than browser detection whenever possible."),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"optional"),"."),(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ie() // true if the command is executed in the ie browser\nis.ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // true\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';\nis.ie() // true\n\n// Recomendation\nis.browser_ie();\n\nis.ie(false) // false\nis.ie(new Boolean(0)) // false\nis.ie(new Boolean()) // false\nis.ie(0) // false\nis.ie('') // false\nis.ie({}) // false\nis.ie([]) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not_ie() // false if the command is executed in the ie browser\nis.not_ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // false\n\n// Alternative\nisConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';\nis.not_ie() // false\n\n// Recomendation\nis.not_browser_ie();\n\nis.not_ie(false) // true\nis.not_ie(new Boolean(0)) // true\nis.not_ie(new Boolean()) // true\nis.not_ie(0) // true\nis.not_ie('') // true\nis.not_ie({}) // true\nis.not_ie([]) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);