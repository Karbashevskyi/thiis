"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"API/Hardware/is.phone",id:"API/Hardware/is.phone",title:"is.phone",description:"is.phone(target: unknown)",source:"@site/docs/API/Hardware/is.phone.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.phone",permalink:"/thiis/docs/next/API/Hardware/is.phone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.phone.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.mobile",permalink:"/thiis/docs/next/API/Hardware/is.mobile"},next:{title:"is.windowsPhone",permalink:"/thiis/docs/next/API/Hardware/is.windowsPhone"}},l={},p=[{value:"is.phone(target: unknown)",id:"isphonetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isphonetarget-unknown"},"is.phone(target: unknown)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is.phone")," method is not a built-in method in JavaScript or any popular libraries like Lodash or Underscore. However, you can create your own custom function to determine if a device is a phone or not based on certain criteria."),(0,o.kt)("p",null,"One possible approach is to use the user agent string provided by the browser and check if it contains any phone-related keywords."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"optional"),"."),(0,o.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,o.kt)("h3",{id:"information"},"Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.phone() // true if the command is executed in the browser with screenWidth <= 768\nis.phone(768) // true\n\n// Alternative\nIsConfig.state.screen.width = 768;\nis.phone() // true\n\nis.phone(769) // false\nis.phone(false) // false\nis.phone(new Boolean(0)) // false\nis.phone(new Boolean()) // false\nis.phone(0) // false\nis.phone('') // false\nis.phone({}) // false\nis.phone([]) // false\n// And all other known types will return false\n")),(0,o.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.phone() // false if the command is executed in the browser with screenWidth <= 768\nis.not.phone(768) // false\n\n// Alternative\nIsConfig.state.screen.width = 768;\nis.not.phone() // false\n\nis.not.phone(769) // true\nis.not.phone(false) // true\nis.not.phone(new Boolean(0)) // true\nis.not.phone(new Boolean()) // true\nis.not.phone(0) // true\nis.not.phone('') // true\nis.not.phone({}) // true\nis.not.phone([]) // true\n// And all other known types will return true\n")))}d.isMDXComponent=!0}}]);