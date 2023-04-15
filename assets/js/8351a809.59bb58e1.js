"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={},a=void 0,s={unversionedId:"API/Hardware/is.iphone",id:"API/Hardware/is.iphone",title:"is.iphone",description:"is.iphone(target: unknown)",source:"@site/docs/API/Hardware/is.iphone.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.iphone",permalink:"/thiis/docs/next/API/Hardware/is.iphone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.iphone.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.ipad",permalink:"/thiis/docs/next/API/Hardware/is.ipad"},next:{title:"is.ipod",permalink:"/thiis/docs/next/API/Hardware/is.ipod"}},l={},p=[{value:"is.iphone(target: unknown)",id:"isiphonetarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:p},c="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isiphonetarget-unknown"},"is.iphone(target: unknown)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is.iphone")," method is used to check if the current device is an iPhone or not. It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the device is an iPhone and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The method uses the user agent string of the browser to determine if the device is an iPhone."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"optional"),"."),(0,r.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.iphone() // true if the command is executed in a browser running on the iPhone\nis.iphone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // true\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';\nis.iphone() // true\n\nis.iphone(769) // false\nis.iphone(false) // false\nis.iphone(new Boolean(0)) // false\nis.iphone(new Boolean()) // false\nis.iphone(0) // false\nis.iphone('') // false\nis.iphone({}) // false\nis.iphone([]) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.iphone() // false if the command is executed in a browser running on the iPhone\nis.not.iphone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';\nis.not.iphone() // false\n\nis.not.iphone(769) // true\nis.not.iphone(false) // true\nis.not.iphone(new Boolean(0)) // true\nis.not.iphone(new Boolean()) // true\nis.not.iphone(0) // true\nis.not.iphone('') // true\nis.not.iphone({}) // true\nis.not.iphone([]) // true\n// And all other known types will return true\n")))}h.isMDXComponent=!0}}]);