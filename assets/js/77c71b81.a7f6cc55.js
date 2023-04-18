"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="\ud83d\udca1 Introduction",l={unversionedId:"Introduction",id:"version-1.0.0/Introduction",title:"\ud83d\udca1 Introduction",description:"NPM Latest Version",source:"@site/versioned_docs/version-1.0.0/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/thiis/docs/1.0.0/Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/Introduction.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83d\udd17 CDN",permalink:"/thiis/docs/1.0.0/CDN"},next:{title:"\ud83d\ude4c Import",permalink:"/thiis/docs/1.0.0/import"}},s={},p=[{value:"Why you should use and support the package:",id:"why-you-should-use-and-support-the-package",level:2},{value:"\ud83d\udc64 Contributing",id:"-contributing",level:2},{value:"\u270d\ufe0f Authors",id:"\ufe0f-authors",level:2},{value:"\ud83d\udcdc License",id:"-license",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-introduction"},"\ud83d\udca1 Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/thiis",alt:"NPM Latest Version"})),(0,a.kt)("h2",{id:"why-you-should-use-and-support-the-package"},"Why you should use and support the package:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u2705 Typification."),(0,a.kt)("li",{parentName:"ol"},"\u2705 Reducing the code in the project."),(0,a.kt)("li",{parentName:"ol"},"\u2705 Easier to read and understand the code."),(0,a.kt)("li",{parentName:"ol"},"\u2705 CDN support."),(0,a.kt)("li",{parentName:"ol"},"\u2705 Compatible with ECMAScript 2015."),(0,a.kt)("li",{parentName:"ol"},"\u2705 Compatible with the oldest version of TypeScript (0.8.0)."),(0,a.kt)("li",{parentName:"ol"},"\u2705 Maintenance of global contexts: globalThis, window, self, global."),(0,a.kt)("li",{parentName:"ol"},"\u2705 No dependencies"),(0,a.kt)("li",{parentName:"ol"},"\u2705 AMD, Node & browser ready"),(0,a.kt)("li",{parentName:"ol"},"\u2705 Small size: ~8KB.")),(0,a.kt)("h1",{id:"idea"},"Idea"),(0,a.kt)("p",null,'this package was created in order to simplify writing in typescript / javascript, it often happens that you need to have\nchecks for different types of data, these checks can be "huge", but if you could simply describe in words what we want\nto check?'),(0,a.kt)("p",null,"For example, why write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"if (typeof variable === 'object' && variable !== null && !Array.isArray(variable) && Object.keys(variable)?.length) {\n}\n")),(0,a.kt)("p",null,"if you can write something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"if (is.object.not.empty(variable)) {\n}\n")),(0,a.kt)("h2",{id:"-contributing"},"\ud83d\udc64 Contributing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork it!"),(0,a.kt)("li",{parentName:"ol"},"Create your feature branch: ",(0,a.kt)("inlineCode",{parentName:"li"},"git checkout -b my-new-feature")),(0,a.kt)("li",{parentName:"ol"},"Add your changes: ",(0,a.kt)("inlineCode",{parentName:"li"},"git add .")),(0,a.kt)("li",{parentName:"ol"},"Commit your changes: ",(0,a.kt)("inlineCode",{parentName:"li"},"git commit -am 'Add some feature'")),(0,a.kt)("li",{parentName:"ol"},"Push to the branch: ",(0,a.kt)("inlineCode",{parentName:"li"},"git push origin my-new-feature")),(0,a.kt)("li",{parentName:"ol"},"Submit a pull request \ud83d\ude0e")),(0,a.kt)("h2",{id:"\ufe0f-authors"},"\u270d\ufe0f Authors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ivan Karbashevskyi")," - ",(0,a.kt)("em",{parentName:"li"},"Initial work")," - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Karbashevskyi"},"Karbashevskyi"))),(0,a.kt)("p",null,"See also the list of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Karbashevskyi/thiis/contributors"},"contributors")," who participated in this project."),(0,a.kt)("h2",{id:"-license"},"\ud83d\udcdc License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://andreasonny.mit-license.org/2019"},"MIT License")," \xa9 Karbashevskyi"))}d.isMDXComponent=!0}}]);