"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4045],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>h});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),w=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},u=function(e){var n=w(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=w(o),p=r,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return o?t.createElement(h,s(s({ref:n},u),{},{components:o})):t.createElement(h,s({ref:n},u))}));function h(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var w=2;w<i;w++)s[w]=o[w];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9564:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>w});var t=o(7462),r=(o(7294),o(3905));const i={},s=void 0,a={unversionedId:"API/Hardware/is.windowsPhone",id:"API/Hardware/is.windowsPhone",title:"is.windowsPhone",description:"is.windowsPhone(target: unknown)",source:"@site/docs/API/Hardware/is.windowsPhone.md",sourceDirName:"API/Hardware",slug:"/API/Hardware/is.windowsPhone",permalink:"/thiis/docs/API/Hardware/is.windowsPhone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Hardware/is.windowsPhone.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.phone",permalink:"/thiis/docs/API/Hardware/is.phone"},next:{title:"is.bigInt",permalink:"/thiis/docs/API/Number/is.bigInt"}},l={},w=[{value:"is.windowsPhone(target: unknown)",id:"iswindowsphonetarget-unknown",level:3}],u={toc:w},d="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"iswindowsphonetarget-unknown"},"is.windowsPhone(target: unknown)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"optional"),"."),(0,r.kt)("li",{parentName:"ul"},"Return: boolean.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.windowsPhone() // true if the command is executed in a browser running on the windows phone\nis.windowsPhone('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537') // true\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537';\nis.windowsPhone() // true\n\nis.windowsPhone(769) // false\nis.windowsPhone(false) // false\nis.windowsPhone(new Boolean(0)) // false\nis.windowsPhone(new Boolean()) // false\nis.windowsPhone(0) // false\nis.windowsPhone('') // false\nis.windowsPhone({}) // false\nis.windowsPhone([]) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.windowsPhone() // false if the command is executed in a browser running on the iPhone\nis.not.windowsPhone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false\n\n// Alternative\nIsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';\nis.not.windowsPhone() // false\n\nis.not.windowsPhone(769) // true\nis.not.windowsPhone(false) // true\nis.not.windowsPhone(new Boolean(0)) // true\nis.not.windowsPhone(new Boolean()) // true\nis.not.windowsPhone(0) // true\nis.not.windowsPhone('') // true\nis.not.windowsPhone({}) // true\nis.not.windowsPhone([]) // true\n// And all other known types will return true\n")))}c.isMDXComponent=!0}}]);