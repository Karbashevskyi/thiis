"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="\ud83d\udca1 Introduction",l={unversionedId:"Introduction",id:"version-1.0.2/Introduction",title:"\ud83d\udca1 Introduction",description:"NPM Latest Version",source:"@site/versioned_docs/version-1.0.2/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/thiis/docs/Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/Introduction.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83d\udd17 CDN",permalink:"/thiis/docs/CDN"},next:{title:"\ud83e\ude88 RegExp",permalink:"/thiis/docs/RegExp"}},s={},p=[{value:"Why you should use and support the package:",id:"why-you-should-use-and-support-the-package",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Combination",id:"combination",level:3},{value:"Combinations with global",id:"combinations-with-global",level:2},{value:"\ud83d\udc64 Contributing",id:"-contributing",level:2},{value:"\u270d\ufe0f Authors",id:"\ufe0f-authors",level:2},{value:"\ud83d\udcdc License",id:"-license",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introduction"},"\ud83d\udca1 Introduction"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/thiis",alt:"NPM Latest Version"})),(0,i.kt)("h1",{id:"idea"},"Idea"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"thiis"),' package was created in order to simplify writing in typescript / javascript, it often happens that you need to have\nchecks for different types of data, these checks can be "huge", but if you could simply describe in words what we want\nto check?'),(0,i.kt)("p",null,"For example, why write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Without thiis package"',title:'"Without',thiis:!0,'package"':!0},"if (typeof variable === 'object' && variable !== null && !Array.isArray(variable) && Object.keys(variable)?.length) {\n}\n")),(0,i.kt)("p",null,"if you can write something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="With thiis package"',title:'"With',thiis:!0,'package"':!0},"if (is.object.not.empty(variable)) {\n}\n")),(0,i.kt)("h2",{id:"why-you-should-use-and-support-the-package"},"Why you should use and support the package:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u2705 60+ prepared methods, prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},".not.")," more than 120 and with ",(0,i.kt)("inlineCode",{parentName:"li"},".or.")," more than 14,000 and with a global state\nof more than 2,000,000 combined methods."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Typification."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Reducing the code in the project."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Easier to read and understand the code."),(0,i.kt)("li",{parentName:"ol"},"\u2705 CDN support."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Compatible with ECMAScript 2015."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Compatible with the oldest version of TypeScript (0.8.0)."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Maintenance of global contexts: globalThis, window, self, global."),(0,i.kt)("li",{parentName:"ol"},"\u2705 No dependencies"),(0,i.kt)("li",{parentName:"ol"},"\u2705 AMD, Node & browser ready"),(0,i.kt)("li",{parentName:"ol"},"\u2705 Small size: ~8KB."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Collection of RegExp patterns (26 items)."),(0,i.kt)("li",{parentName:"ol"},"\u2705 Magic methods: ",(0,i.kt)("inlineCode",{parentName:"li"},"is.len_"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N_lt_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_lt_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N_lt_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N_lte_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_lte_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N_lte_N"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Methods"),(0,i.kt)("th",{parentName:"tr",align:null},"Prefix ",(0,i.kt)("inlineCode",{parentName:"th"},".not.")),(0,i.kt)("th",{parentName:"tr",align:null},"Unifier ",(0,i.kt)("inlineCode",{parentName:"th"},".or.")),(0,i.kt)("th",{parentName:"tr",align:null},"Combinations"),(0,i.kt)("th",{parentName:"tr",align:null},"Combinations with global"),(0,i.kt)("th",{parentName:"tr",align:null},"Compatibility"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"~8KB"),(0,i.kt)("td",{parentName:"tr",align:null},"60+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"14,000+"),(0,i.kt)("td",{parentName:"tr",align:null},"2,000,000+"),(0,i.kt)("td",{parentName:"tr",align:null},"Web + Node")))),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("h3",{id:"combination"},"Combination"),(0,i.kt)("p",null,"It means that you can combine between the declared commands more than 14k times, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"is.string.not.empty()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"is.string.or.number()")," and so on. You can use non-combined commands, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"is.string()"),", which will increase the performance of your code, or combine between commands, but then this effect will affect the productivity of the code, which indicates that you should not use combined commands in the most important parts of the code, for example, on the server , but for user-side applications will not lead to noticeable effects."),(0,i.kt)("h2",{id:"combinations-with-global"},"Combinations with global"),(0,i.kt)("p",null,"Also, by default, the package has access to globally declared commands, this possibility can be blocked via ",(0,i.kt)("inlineCode",{parentName:"p"},"IsConfig"),". This option allows you to write your own checking commands, for example, if you want to check whether $variable is a Map, you just need to write is.Map($variable) and you will get a result depending on whether $variable is of type Map or not (true, false). To explain, the Map method is not declared, it is generic, that is, by entering the name of the type, the package will look for this type in the global scope, and if it finds it, it will take it and use it for this: ",(0,i.kt)("inlineCode",{parentName:"p"},"$variable instanceof Map"),"."),(0,i.kt)("p",null,"Such possibilities in the package are limited only by the available types in the global scope, some of them are already declared in the interface (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Karbashevskyi/thiis/blob/main/src/interfaces/methods/external.methods.interface.ts"},"here is the link: Global Command"),") and for HTML types (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Karbashevskyi/thiis/blob/main/src/interfaces/methods/HTML-elements.methods.interface.ts"},"here is the link HTML types"),"). That is, in this way, if you know that there is some type declared globally, but it is not declared in the package, then there is nothing wrong, feel free to use it, the package will find it :)"),(0,i.kt)("h2",{id:"-contributing"},"\ud83d\udc64 Contributing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork it!"),(0,i.kt)("li",{parentName:"ol"},"Create your feature branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git checkout -b my-new-feature")),(0,i.kt)("li",{parentName:"ol"},"Add your changes: ",(0,i.kt)("inlineCode",{parentName:"li"},"git add .")),(0,i.kt)("li",{parentName:"ol"},"Commit your changes: ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit -am 'Add some feature'")),(0,i.kt)("li",{parentName:"ol"},"Push to the branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git push origin my-new-feature")),(0,i.kt)("li",{parentName:"ol"},"Submit a pull request \ud83d\ude0e")),(0,i.kt)("h2",{id:"\ufe0f-authors"},"\u270d\ufe0f Authors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ivan Karbashevskyi")," - ",(0,i.kt)("em",{parentName:"li"},"Initial work")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Karbashevskyi"},"Karbashevskyi"))),(0,i.kt)("p",null,"See also the list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Karbashevskyi/thiis/contributors"},"contributors")," who participated in this\nproject."),(0,i.kt)("h2",{id:"-license"},"\ud83d\udcdc License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://andreasonny.mit-license.org/2019"},"MIT License")," \xa9 Karbashevskyi"))}m.isMDXComponent=!0}}]);