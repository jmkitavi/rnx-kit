"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[3971],{5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(5773),a=(r(7378),r(5318));const o={},i="metro-plugin-duplicates-checker",l={unversionedId:"tools/metro-plugin-duplicates-checker",id:"tools/metro-plugin-duplicates-checker",title:"metro-plugin-duplicates-checker",description:"",source:"@site/docs/tools/metro-plugin-duplicates-checker.mdx",sourceDirName:"tools",slug:"/tools/metro-plugin-duplicates-checker",permalink:"/rnx-kit/docs/tools/metro-plugin-duplicates-checker",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-plugin-duplicates-checker.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-plugin-cyclic-dependencies-detector",permalink:"/rnx-kit/docs/tools/metro-plugin-cyclic-dependencies-detector"},next:{title:"metro-resolver-symlinks",permalink:"/rnx-kit/docs/tools/metro-resolver-symlinks"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metro-plugin-duplicates-checker"},"metro-plugin-duplicates-checker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/metro-plugin-duplicates-checker")," checks for duplicate packages in your\nbundle."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"There are several ways to use this package."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"recommended")," way is to add it as a plugin in your ",(0,a.kt)("inlineCode",{parentName:"p"},"metro.config.js")," using\n",(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/metro-serializer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { makeMetroConfig } = require("@rnx-kit/metro-config");\nconst {\n  DuplicateDependencies,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\nconst { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\nmodule.exports = makeMetroConfig({\n  projectRoot: __dirname,\n  serializer: {\n    customSerializer: MetroSerializer([DuplicateDependencies()]),\n  },\n});\n')),(0,a.kt)("p",null,"You can also check for duplicate packages after a bundle is created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  checkForDuplicatePackagesInFile,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackagesInFile(pathToSourceMapFile, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n')),(0,a.kt)("p",null,"If you have a source map object, you can pass that directly to\n",(0,a.kt)("inlineCode",{parentName:"p"},"checkForDuplicatePackages()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  checkForDuplicatePackages,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackages(mySourceMap, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bannedModules"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of modules that are banned.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ignoredModules"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of modules that can be ignored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"throwOnError"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to throw when duplicates are found.")))))}u.isMDXComponent=!0}}]);