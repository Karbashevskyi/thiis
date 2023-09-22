"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},l="\ud83e\uddde is.len_",o={unversionedId:"is.len_",id:"version-1.0.2/is.len_",title:"\ud83e\uddde is.len_",description:"\ud83d\udcdd Description",source:"@site/versioned_docs/version-1.0.2/is.len_.md",sourceDirName:".",slug:"/is.len_",permalink:"/thiis/docs/is.len_",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.2/is.len_.md",tags:[],version:"1.0.2",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83d\udcbf Installation",permalink:"/thiis/docs/install"},next:{title:"\ud83e\uddea\ufe0f Unit tests (Jest)",permalink:"/thiis/docs/unit-tests"}},s={},p=[{value:"\ud83d\udcdd Description",id:"-description",level:2},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-islen_"},"\ud83e\uddde is.len_"),(0,i.kt)("h2",{id:"-description"},"\ud83d\udcdd Description"),(0,i.kt)("p",null,"the ",(0,i.kt)("inlineCode",{parentName:"p"},"is.len_"),' magic method is good because it has more variations and will help to read the code more easily and build various validations in a simpler way. This method is actually a template, but it has several templates, it first of all checks the length of the string, that is, let\'s say there is a text "some text" that has 9 characters (including the space) and we want to check it, how do we do it in classic way?'),(0,i.kt)("p",null,"Answer: ",(0,i.kt)("inlineCode",{parentName:"p"},'if("some text".length === 9) {}')),(0,i.kt)("p",null,"What if with a magic method?"),(0,i.kt)("p",null,"Answer: ",(0,i.kt)("inlineCode",{parentName:"p"},'if(is.len_9("some text")) {}')),(0,i.kt)("p",null,"Not bad, right?"),(0,i.kt)("p",null,"In addition, there are 7 methods besides this one (i.e. there are 8 in total):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N_lt_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_lt_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N_lt_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N_lte_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_lte_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gte_N"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"len_gt_N_lte_N"),";")),(0,i.kt)("p",null,"Explanation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The letter N is taken from math - ",(0,i.kt)("a",{parentName:"li",href:"https://simple.wikipedia.org/wiki/Natural_number"},"Natural_number"),". That is, you need to replace it with what you need."),(0,i.kt)("li",{parentName:"ol"},"gt - More than."),(0,i.kt)("li",{parentName:"ol"},"lt - Less than"),(0,i.kt)("li",{parentName:"ol"},"lte - Less than or equal to"),(0,i.kt)("li",{parentName:"ol"},"gte - Greater than or equal to")),(0,i.kt)("p",null,"Remember that this method can be combined with other methods, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"is.string.len_gt_60_lte_120($variable)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\ninput$.pipe(filter(is.len_gte_3_lte_10))\ninput$.pipe(filter(is.string.len_gte_3_lte_10))\ninput$.pipe(filter(is.len_gte_900))\n\nif (is.len_lt_10($text)) {\n    // ...\n}\n\n")))}m.isMDXComponent=!0}}]);