"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77131],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,m=u["".concat(l,".").concat(k)]||u[k]||h[k]||s;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},29729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},i="\ud83c\udfce\ufe0f Benchmark",o={unversionedId:"benchmark",id:"version-2.0.3/benchmark",title:"\ud83c\udfce\ufe0f Benchmark",description:"Link to benchmark",source:"@site/versioned_docs/version-2.0.3/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/thiis/docs/benchmark",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.3/benchmark.md",tags:[],version:"2.0.3",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83e\ude88 RegExp",permalink:"/thiis/docs/RegExp"},next:{title:"\ud83d\ude4c Import",permalink:"/thiis/docs/import"}},l={},c=[{value:"Link to benchmark",id:"link-to-benchmark",level:2},{value:"thiis",id:"thiis",level:2},{value:"Case",id:"case",level:3},{value:"vanilla",id:"vanilla",level:2},{value:"Case",id:"case-1",level:3},{value:"is",id:"is",level:2},{value:"Case",id:"case-2",level:3},{value:"is_js",id:"is_js",level:2},{value:"Case",id:"case-3",level:3},{value:"chai",id:"chai",level:2},{value:"Case",id:"case-4",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-benchmark"},"\ud83c\udfce\ufe0f Benchmark"),(0,r.kt)("h2",{id:"link-to-benchmark"},"Link to benchmark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://runkit.com/karbashevskyi/benchmark-is-is-js-thiis"},"https://runkit.com/karbashevskyi/benchmark-is-is-js-thiis")),(0,r.kt)("h2",{id:"thiis"},"thiis"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/thiis"},"https://www.npmjs.com/package/thiis")),(0,r.kt)("h3",{id:"case"},"Case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    if (thiis.is.object_not_empty(data)) {\n        // ...\n    }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Result: thiis x 1,530,187 ops/sec \xb10.55% (92 runs sampled)")),(0,r.kt)("h2",{id:"vanilla"},"vanilla"),(0,r.kt)("h3",{id:"case-1"},"Case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    if (typeof data === 'object' && data !== null && !Array.isArray(data) && Object.keys(data).length > 0) {\n        // ...\n    }\n")),(0,r.kt)("h2",{id:"is"},"is"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/is"},"https://www.npmjs.com/package/is")),(0,r.kt)("h3",{id:"case-2"},"Case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    if (is.object(data) && !is.empty(data)) {\n        // ...\n    }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Result: is x 1,378,823 ops/sec \xb13.83% (88 runs sampled)")),(0,r.kt)("h2",{id:"is_js"},"is_js"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/is_js"},"https://www.npmjs.com/package/is_js")),(0,r.kt)("h3",{id:"case-3"},"Case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    if (is_js.object(data) && is_js.not.empty(data)) {\n        // ...\n    }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Result: is_js x 1,058,483 ops/sec \xb11.78% (90 runs sampled)")),(0,r.kt)("h2",{id:"chai"},"chai"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chai"},"https://www.npmjs.com/package/chai")),(0,r.kt)("h3",{id:"case-4"},"Case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    chai.should();\n    if (data.should.not.be.empty) {\n        // ...\n    }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Result: chai x 148,122 ops/sec \xb11.96% (94 runs sampled)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Result: vanilla x 1,489,214 ops/sec \xb10.60% (92 runs sampled)")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As you can see, now the package is faster (>400%), it is not clear how, but for some reason this test shows that the package works even faster than vanilla javascript, which is practically impossible, since the proxy adds resistance to performance, but other various local tests show that the package is already at least in the top 3. Please, if there is an opportunity to test this package additionally, I will be grateful if you share the result."),(0,r.kt)("p",null,"As it was said in the previous version that a new version is being prepared that will get used to the work of the teams and as you can see it has been done."))}h.isMDXComponent=!0}}]);