"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return t?o.createElement(f,l(l({ref:n},c),{},{components:t})):o.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},78069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={},l=void 0,i={unversionedId:"API/Boolean/is.boolean",id:"version-1.0.1/API/Boolean/is.boolean",title:"is.boolean",description:"is.boolean(target: unknown)",source:"@site/versioned_docs/version-1.0.1/API/Boolean/is.boolean.md",sourceDirName:"API/Boolean",slug:"/API/Boolean/is.boolean",permalink:"/thiis/docs/1.0.1/API/Boolean/is.boolean",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/API/Boolean/is.boolean.md",tags:[],version:"1.0.1",frontMatter:{},sidebar:"documentationSidebar",next:{title:"is.false",permalink:"/thiis/docs/1.0.1/API/Boolean/is.false"}},s={},u=[{value:"is.boolean(target: unknown)",id:"isbooleantarget-unknown",level:2},{value:"Specification",id:"specification",level:3},{value:"Examples",id:"examples",level:3},{value:"Reversal boolean result",id:"reversal-boolean-result",level:4}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"isbooleantarget-unknown"},"is.boolean(target: unknown)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"is.boolean")," method checks whether a given value is a boolean or not. It returns true if the value is either true or false, and false otherwise."),(0,a.kt)("p",null,"This method can be useful when you need to ensure that a particular variable or parameter in your code is a boolean, and you want to avoid unexpected behaviors that could result from passing a non-boolean value to a function or method that requires a boolean."),(0,a.kt)("p",null,"Instead of writing your own implementation of this method, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"is.boolean")," method provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"thiis")," package, which has been thoroughly tested and is a reliable solution for checking boolean values."),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"is.boolean")," method, simply import it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"thiis")," package and pass the value you want to check as an argument:"),(0,a.kt)("p",null,"By using the ",(0,a.kt)("inlineCode",{parentName:"p"},"is.boolean")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"thiis")," package, you can ensure that your code is more reliable and easier to maintain, since you're relying on a well-tested and widely-used implementation of this functionality."),(0,a.kt)("h3",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target argument: ",(0,a.kt)("strong",{parentName:"li"},"required"),"."),(0,a.kt)("li",{parentName:"ul"},'Checks if the given "',(0,a.kt)("strong",{parentName:"li"},"target"),'" type is boolean.')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"is.boolean(true) // true\nis.boolean(false) // true\nis.boolean(new Boolean()) // true\nis.boolean(new Boolean(0)) // true\nis.boolean(new Boolean(1)) // true\n\nis.boolean(0) // false\nis.boolean('') // false\nis.boolean({}) // false\nis.boolean([]) // false\n// And all other known types will return false\n")),(0,a.kt)("h4",{id:"reversal-boolean-result"},"Reversal boolean result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// \nis.not.boolean(true) // false\nis.not.boolean(false) // false\nis.not.boolean(new Boolean()) // false\nis.not.boolean(new Boolean(0)) // false\nis.not.boolean(new Boolean(1)) // false\n\nis.not.boolean(0) // true\nis.not.boolean('') // true\nis.not.boolean({}) // true\nis.not.boolean([]) // true\n// And all other known types will return true\n")))}d.isMDXComponent=!0}}]);