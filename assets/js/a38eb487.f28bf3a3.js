"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[9166],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,o=new Array(p);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var n=r(5773),i=(r(7378),r(5318));const p={},o="esbuild-plugin-import-path-remapper",a={unversionedId:"tools/esbuild-plugin-import-path-remapper",id:"tools/esbuild-plugin-import-path-remapper",title:"esbuild-plugin-import-path-remapper",description:"",source:"@site/docs/tools/esbuild-plugin-import-path-remapper.mdx",sourceDirName:"tools",slug:"/tools/esbuild-plugin-import-path-remapper",permalink:"/rnx-kit/docs/tools/esbuild-plugin-import-path-remapper",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/esbuild-plugin-import-path-remapper.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"dep-check",permalink:"/rnx-kit/docs/tools/dep-check"},next:{title:"eslint-plugin",permalink:"/rnx-kit/docs/tools/eslint-plugin"}},l={},s=[{value:"Usage",id:"usage",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"esbuild-plugin-import-path-remapper"},"esbuild-plugin-import-path-remapper"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@rnx-kit/esbuild-plugin-import-path-remapper")," remaps ",(0,i.kt)("inlineCode",{parentName:"p"},"**/lib/**")," imports to\n",(0,i.kt)("inlineCode",{parentName:"p"},"**/src/**"),". This is useful for packages that are not correctly exporting\neverything via their ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),", but you still want to consume the TypeScript\nfiles rather than the transpiled JavaScript."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"@rnx-kit/esbuild-plugin-import-path-remapper")," to your build script plugins.\nThe package name filter argument to the plugin is an esbuild compatible regular\nexpression to match the packages to transform."),(0,i.kt)("p",null,"For example, to remap all paths under the ",(0,i.kt)("inlineCode",{parentName:"p"},"@rnx-kit")," scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// esbuild.js\nconst ImportPathRemapperPlugin = require("@rnx-kit/esbuild-plugin-import-path-remapper");\n\nrequire("esbuild")\n  .build({\n    entryPoints: ["app.tsx"],\n    bundle: true,\n    outfile: "out.js",\n    plugins: [ImportPathRemapperPlugin("@rnx-kit")],\n  })\n  .catch(() => process.exit(1));\n')))}c.isMDXComponent=!0}}]);