"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||g[k]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"API/common",id:"version-1.0.1/API/common",title:"common",description:"Rest",source:"@site/versioned_docs/version-1.0.1/API/common.md",sourceDirName:"API",slug:"/API/common",permalink:"/thiis/docs/API/common",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/common.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"is.windows",permalink:"/thiis/docs/API/System/is.windows"},next:{title:"global",permalink:"/thiis/docs/API/global"}},s={},u=[{value:"Rest",id:"rest",level:2},{value:"is.array(target: unknown)",id:"isarraytarget-unknown",level:3},{value:"is.compare(target: object Object, source: object Object)",id:"iscomparetarget-object-object-source-object-object",level:3},{value:"is.empty(target: Map | Array | String | Object | Set)",id:"isemptytarget-map--array--string--object--set",level:3},{value:"is.function(target: Function | AsyncFunction | GeneratorFunction)",id:"isfunctiontarget-function--asyncfunction--generatorfunction",level:3},{value:"is.instanceOf(target: unknown, classRef: Function)",id:"isinstanceoftarget-unknown-classref-function",level:3},{value:"is.len(target: String | Array, ...rest)",id:"islentarget-string--array-rest",level:3},{value:"is.null(target: unknown)",id:"isnulltarget-unknown",level:3},{value:"is.object(target: Object)",id:"isobjecttarget-object",level:3},{value:"is.primitive(target: unknown)",id:"isprimitivetarget-unknown",level:3},{value:"is.promise(target: unknown)",id:"ispromisetarget-unknown",level:3},{value:"is.symbol(target: unknown)",id:"issymboltarget-unknown",level:3},{value:"is.undefined(target: unknown)",id:"isundefinedtarget-unknown",level:3}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rest"},"Rest"),(0,a.kt)("h3",{id:"isarraytarget-unknown"},"is.array(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is array.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"iscomparetarget-object-object-source-object-object"},"is.compare(target: ","[object Object]",", source: ","[object Object]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target and source arguments: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" and "',(0,a.kt)("strong",{parentName:"li"},"source"),'" is compare.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isemptytarget-map--array--string--object--set"},"is.empty(target: Map | Array | String | Object | Set)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is empty.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isfunctiontarget-function--asyncfunction--generatorfunction"},"is.function(target: Function | AsyncFunction | GeneratorFunction)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is function.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isinstanceoftarget-unknown-classref-function"},"is.instanceOf(target: unknown, classRef: Function)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target and classRef arguments: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type instance of ',(0,a.kt)("strong",{parentName:"li"},"classRef"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"islentarget-string--array-rest"},"is.len(target: String | Array, ...rest)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" is true by rest, rest is "configList" you can configure manually or automatically through the method name as shown in the example.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isnulltarget-unknown"},"is.null(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is null.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isobjecttarget-object"},"is.object(target: Object)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is object.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isprimitivetarget-unknown"},"is.primitive(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is primitive.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"ispromisetarget-unknown"},"is.promise(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is promise.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"issymboltarget-unknown"},"is.symbol(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is symbol.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")),(0,a.kt)("h3",{id:"isundefinedtarget-unknown"},"is.undefined(target: unknown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is undefined.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// And all other known types will return false\n\n// Reversal boolean result\n\n// And all other known types will return true\n")))}g.isMDXComponent=!0}}]);