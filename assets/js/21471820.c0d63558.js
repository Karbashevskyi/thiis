"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2647],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8005:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={},o=void 0,l={unversionedId:"API/Hardware/is.ipad",id:"version-1.0.1/API/Hardware/is.ipad",title:"is.ipad",description:"is.ipad(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Hardware/is.ipad.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.ipad",permalink:"/thiis/docs/1.0.1/API/Hardware/is.ipad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Hardware/is.ipad.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.blackbarry",permalink:"/thiis/docs/1.0.1/API/Hardware/is.blackbarry"},next:{title:"is.iphone",permalink:"/thiis/docs/1.0.1/API/Hardware/is.iphone"}},s={},p=[{value:"is.ipad(target: unknown)",id:"isipadtarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"isipadtarget-unknown"},"is.ipad(target: unknown)"),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"optional"),"."),(0,a.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ipad() // true if the command is executed in a browser running on the iPad\nis.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // true\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';\nis.ipad() // true\n\nis.ipad(769) // false\nis.ipad(false) // false\nis.ipad(new Boolean(0)) // false\nis.ipad(new Boolean()) // false\nis.ipad(0) // false\nis.ipad('') // false\nis.ipad({}) // false\nis.ipad([]) // false\n// And all other known types will return false\n")),(0,a.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.ipad() // false if the command is executed in a browser running on the iPad\nis.not.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // false\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';\nis.not.ipad() // false\n\nis.ipad(769) // true\nis.ipad(false) // true\nis.ipad(new Boolean(0)) // true\nis.ipad(new Boolean()) // true\nis.ipad(0) // true\nis.ipad('') // true\nis.ipad({}) // true\nis.ipad([]) // true\n// And all other known types will return true\n")))}d.isMDXComponent=!0}}]);