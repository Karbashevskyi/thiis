"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7740],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,d=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=o,m=c["".concat(a,".").concat(p)]||c[p]||f[p]||d;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var d=t.length,i=new Array(d);i[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<d;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const d={},i=void 0,s={unversionedId:"API/Number/is.odd",id:"API/Number/is.odd",title:"is.odd",description:"is.odd(target: unknown)",source:"@site/docs/API/Number/is.odd.md",sourceDirName:"API/Number",slug:"/API/Number/is.odd",permalink:"/thiis/docs/API/Number/is.odd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Number/is.odd.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.numeric",permalink:"/thiis/docs/API/Number/is.numeric"},next:{title:"is.positive",permalink:"/thiis/docs/API/Number/is.positive"}},a={},u=[{value:"is.odd(target: unknown)",id:"isoddtarget-unknown",level:3}],l={toc:u},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"isoddtarget-unknown"},"is.odd(target: unknown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target argument: ",(0,o.kt)("strong",{parentName:"li"},"required"),"."),(0,o.kt)("li",{parentName:"ul"},'Checks if the given "',(0,o.kt)("strong",{parentName:"li"},"target"),'" type is odd.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"is.odd(1) // true\nis.odd(-1) // true\nis.odd(BigInt(1)) // true\nis.odd(1n) // true\nis.odd(-31n) // true\n\nis.odd(BigInt(2)) // true\nis.odd(0) // false\nis.odd('undefined') // false\nis.odd('null') // false\nis.odd(Symbol()) // false\nis.odd(null) // false\nis.odd(true) // false\nis.odd([]) // false\nis.odd(false) // false\nis.odd(\"\") // false\nis.odd('') // false\nis.odd(``) // false\nis.odd({}) // false\nis.odd(undefined) // false\nis.odd(Function) // false\nis.odd(() => {}) // false\nis.odd(BigInt) // false\nis.odd(Symbol) // false\nis.odd(NaN) // false\nis.odd(Infinity) // false\nis.odd(-Infinity) // false\nis.odd(Number.POSITIVE_INFINITY) // false\nis.odd(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n\n// Reversal boolean result\nis.not.odd(1) // false\nis.not.odd(-1) // false\nis.not.odd(BigInt(1)) // false\nis.not.odd(1n) // false\nis.not.odd(-31n) // false\n\nis.not.odd(BigInt(2)) // true\nis.not.odd(0) // true\nis.not.odd('undefined') // true\nis.not.odd('null') // true\nis.not.odd(Symbol()) // true\nis.not.odd(null) // true\nis.not.odd(true) // true\nis.not.odd([]) // true\nis.not.odd(false) // true\nis.not.odd(\"\") // true\nis.not.odd('') // true\nis.not.odd(``) // true\nis.not.odd({}) // true\nis.not.odd(undefined) // true\nis.not.odd(Function) // true\nis.not.odd(() => {}) // true\nis.not.odd(BigInt) // true\nis.not.odd(Symbol) // true\nis.not.odd(NaN) // true\nis.not.odd(Infinity) // true\nis.not.odd(-Infinity) // true\nis.not.odd(Number.POSITIVE_INFINITY) // true\nis.not.odd(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);