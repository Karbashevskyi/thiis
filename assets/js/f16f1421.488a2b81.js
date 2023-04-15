"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"API/Hardware/is.ipod",id:"API/Hardware/is.ipod",title:"is.ipod",description:"is.ipod(target: unknown)",source:"@site/docs/API/Hardware/is.ipod.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.ipod",permalink:"/thiis/docs/next/API/Hardware/is.ipod",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.ipod.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.iphone",permalink:"/thiis/docs/next/API/Hardware/is.iphone"},next:{title:"is.mobile",permalink:"/thiis/docs/next/API/Hardware/is.mobile"}},l={},p=[{value:"is.ipod(target: unknown)",id:"isipodtarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"isipodtarget-unknown"},"is.ipod(target: unknown)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is.ipod")," method is not part of the standard JavaScript library, so it's likely that it's a method from a third-party library or framework. Without more context, it's difficult to provide a specific answer."),(0,i.kt)("p",null,"However, if you're looking to check if the current device is an iPod using plain JavaScript, one way to do it is to check the user agent string. The user agent is a string that the browser sends along with every request, and it contains information about the browser and the device."),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target argument: ",(0,i.kt)("strong",{parentName:"li"},"optional"),"."),(0,i.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ipod() // true if the command is executed in a browser running on the iPod\nis.ipod('Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // true\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';\nis.ipod() // true\n\nis.ipod(769) // false\nis.ipod(false) // false\nis.ipod(new Boolean(0)) // false\nis.ipod(new Boolean()) // false\nis.ipod(0) // false\nis.ipod('') // false\nis.ipod({}) // false\nis.ipod([]) // false\n// And all other known types will return false\n")),(0,i.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"is.not.ipod() // false if the command is executed in a browser running on the iPod\nis.not.ipod('Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';\nis.not.ipod() // false\n\nis.not.ipod(769) // true\nis.not.ipod(false) // true\nis.not.ipod(new Boolean(0)) // true\nis.not.ipod(new Boolean()) // true\nis.not.ipod(0) // true\nis.not.ipod('') // true\nis.not.ipod({}) // true\nis.not.ipod([]) // true\n// And all other known types will return true\n")))}u.isMDXComponent=!0}}]);