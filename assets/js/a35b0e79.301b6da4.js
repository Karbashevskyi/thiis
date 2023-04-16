"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7317],{3905:(e,i,n)=>{n.d(i,{Zo:()=>u,kt:()=>d});var t=n(7294);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function s(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?s(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),p=function(e){var i=t.useContext(o),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},u=function(e){var i=p(e.components);return t.createElement(o.Provider,{value:i},e.children)},v="mdxType",f={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},c=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=p(n),c=r,d=v["".concat(o,".").concat(c)]||v[c]||f[c]||s;return n?t.createElement(d,a(a({ref:i},u),{},{components:n})):t.createElement(d,a({ref:i},u))}));function d(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var l={};for(var o in i)hasOwnProperty.call(i,o)&&(l[o]=i[o]);l.originalType=e,l[v]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<s;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1325:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const s={},a=void 0,l={unversionedId:"API/String/is.ipv4",id:"version-1.0.2/API/String/is.ipv4",title:"is.ipv4",description:"is.ipv4(target: unknown)",source:"@site/versioned_docs/version-1.0.2/API/String/is.ipv4.md",sourceDirName:"API/String",slug:"/API/String/is.ipv4",permalink:"/thiis/docs/API/String/is.ipv4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/API/String/is.ipv4.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.char",permalink:"/thiis/docs/API/String/is.char"},next:{title:"is.ipv6",permalink:"/thiis/docs/API/String/is.ipv6"}},o={},p=[{value:"is.ipv4(target: unknown)",id:"isipv4target-unknown",level:3},{value:"Specification",id:"specification",level:3},{value:"Information",id:"information",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],u={toc:p},v="wrapper";function f(e){let{components:i,...n}=e;return(0,r.kt)(v,(0,t.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"isipv4target-unknown"},"is.ipv4(target: unknown)"),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target argument: ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},'Checks if the given "',(0,r.kt)("strong",{parentName:"li"},"target"),'" type is ipv4.')),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests: \u2705")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ipv4('192.168.1.1'); // true\nis.ipv4('255.255.255.0'); // true\nis.ipv4('10.0.0.1'); // true\nis.ipv4('172.16.0.1'); // true\n\nis.ipv4(`a`); // false\nis.ipv4(\"r\"); // false\nis.ipv4('t'); // false\nis.ipv4(`3`); // false\nis.ipv4(`1`); // false\nis.ipv4(`2`); // false\nis.ipv4('hello'); // false\nis.ipv4('hello123'); // false\nis.ipv4('helloWorld'); // false\nis.ipv4('a1B2c3d4e5f6g'); // false\nis.ipv4('a1B2c3d4e5f6'); // false\nis.ipv4('inCamelCase'); // false\nis.ipv4('undefined'); // false\nis.ipv4('null'); // false\nis.ipv4(BigInt(1)) // false\nis.ipv4(0) // false\nis.ipv4(1) // false\nis.ipv4(-1) // false\nis.ipv4(Symbol()) // false\nis.ipv4(null) // false\nis.ipv4(true) // false\nis.ipv4([]) // false\nis.ipv4(false) // false\nis.ipv4(\"\") // false\nis.ipv4('') // false\nis.ipv4(``) // false\nis.ipv4({}) // false\nis.ipv4(undefined) // false\nis.ipv4(Function) // false\nis.ipv4(() => {}) // false\nis.ipv4(BigInt) // false\nis.ipv4(Symbol) // false\nis.ipv4(NaN) // false\nis.ipv4(Infinity) // false\nis.ipv4(-Infinity) // false\nis.ipv4(Number.POSITIVE_INFINITY) // false\nis.ipv4(Number.NEGATIVE_INFINITY) // false\n// And all other known types will return false\n")),(0,r.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"is.ipv4('192.168.1.1'); // false\nis.ipv4('255.255.255.0'); // false\nis.ipv4('10.0.0.1'); // false\nis.ipv4('172.16.0.1'); // false\n\nis.ipv4(`a`); // true\nis.ipv4(\"r\"); // true\nis.ipv4('t'); // true\nis.ipv4(`3`); // true\nis.ipv4(`1`); // true\nis.ipv4(`2`); // true\nis.not.ipv4('hello'); // true\nis.not.ipv4('hello123'); // true\nis.not.ipv4('helloWorld'); // true\nis.not.ipv4('a1B2c3d4e5f6g'); // true\nis.not.ipv4('a1B2c3d4e5f6'); // true\nis.not.ipv4('inCamelCase'); // true\nis.not.ipv4('undefined'); // true\nis.not.ipv4('null'); // true\nis.not.ipv4(BigInt(1)) // true\nis.not.ipv4(0) // true\nis.not.ipv4(1) // true\nis.not.ipv4(-1) // true\nis.not.ipv4(Symbol()) // true\nis.not.ipv4(null) // true\nis.not.ipv4(true) // true\nis.not.ipv4([]) // true\nis.not.ipv4(false) // true\nis.not.ipv4(\"\") // true\nis.not.ipv4('') // true\nis.not.ipv4(``) // true\nis.not.ipv4({}) // true\nis.not.ipv4(undefined) // true\nis.not.ipv4(Function) // true\nis.not.ipv4(() => {}) // true\nis.not.ipv4(BigInt) // true\nis.not.ipv4(Symbol) // true\nis.not.ipv4(NaN) // true\nis.not.ipv4(Infinity) // true\nis.not.ipv4(-Infinity) // true\nis.not.ipv4(Number.POSITIVE_INFINITY) // true\nis.not.ipv4(Number.NEGATIVE_INFINITY) // true\n// And all other known types will return true\n")))}f.isMDXComponent=!0}}]);