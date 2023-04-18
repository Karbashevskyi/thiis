"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"API/Hardware/is.ipad",id:"version-1.0.2/API/Hardware/is.ipad",title:"is.ipad",description:"is.ipad(target: unknown)",source:"@site/versioned_docs/version-1.0.2/API/Hardware/is.ipad.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.ipad",permalink:"/thiis/docs/API/Hardware/is.ipad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/API/Hardware/is.ipad.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.blackbarry",permalink:"/thiis/docs/API/Hardware/is.blackbarry"},next:{title:"is.iphone",permalink:"/thiis/docs/API/Hardware/is.iphone"}},s={},p=[{value:"is.ipad(target: unknown)",id:"isipadtarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isipadtarget-unknown"},"is.ipad(target: unknown)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is.ipad")," method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the current device is an iPad, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise. It works by checking the user agent string of the current device and matching it against a predefined set of patterns that are associated with the iPad."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"optional"),"."),(0,r.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ipad() // true if the command is executed in a browser running on the iPad\nis.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // true\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';\nis.ipad() // true\n\nis.ipad(769) // false\nis.ipad(false) // false\nis.ipad(new Boolean(0)) // false\nis.ipad(new Boolean()) // false\nis.ipad(0) // false\nis.ipad('') // false\nis.ipad({}) // false\nis.ipad([]) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.ipad() // false if the command is executed in a browser running on the iPad\nis.not.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // false\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';\nis.not.ipad() // false\n\nis.ipad(769) // true\nis.ipad(false) // true\nis.ipad(new Boolean(0)) // true\nis.ipad(new Boolean()) // true\nis.ipad(0) // true\nis.ipad('') // true\nis.ipad({}) // true\nis.ipad([]) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);