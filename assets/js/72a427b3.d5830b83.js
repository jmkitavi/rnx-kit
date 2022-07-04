"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[5360],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(5773),r=(n(7378),n(5318));const o={},i="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"",source:"@site/docs/contributing.mdx",sourceDirName:".",slug:"/contributing",permalink:"/rnx-kit/docs/contributing",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/contributing.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Optional",id:"optional",level:3},{value:"Build",id:"build",level:2},{value:"Adding a New Package",id:"adding-a-new-package",level:2},{value:"Change Logs",id:"change-logs",level:2},{value:"Releases",id:"releases",level:2},{value:"Style Guide",id:"style-guide",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Thank you for your interest in this project! We welcome all contributions and\nsuggestions!"),(0,r.kt)("p",null,"You can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/issues/new/choose"},"open a new issue")," to\nreport a bug, share an idea, or request a feature. If you're more hands-on, you\ncan ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/pulls"},"submit a pull-request"),"."),(0,r.kt)("p",null,"As a contributor, you're expected to follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/blob/main/CODE_OF_CONDUCT.md"},"code of conduct"),"."),(0,r.kt)("h2",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,r.kt)("p",null,"Most contributions require you to agree to a Contributor License Agreement (CLA)\ndeclaring that you have the right to, and actually do, grant us the rights to\nuse your contribution. For details, visit ",(0,r.kt)("a",{parentName:"p",href:"https://cla.opensource.microsoft.com"},"https://cla.opensource.microsoft.com"),"."),(0,r.kt)("p",null,"When you submit a pull request, a CLA bot will automatically determine whether\nyou need to provide a CLA and decorate the PR appropriately (e.g., status check,\ncomment). Simply follow the instructions provided by the bot. You will only need\nto do this once across all repos using our CLA."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node LTS (see ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/about/releases/"},"releases")," for specific\nversions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/"},"Yarn Classic"))),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Android"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")," 4.2 or later",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Android SDK Platform 29"),(0,r.kt)("li",{parentName:"ul"},"Android SDK Build-Tools 30.0.3"),(0,r.kt)("li",{parentName:"ul"},"To install the required SDKs, go into ",(0,r.kt)("strong",{parentName:"li"},"Preferences")," \u276d ",(0,r.kt)("strong",{parentName:"li"},"Appearance &\nBehavior")," \u276d ",(0,r.kt)("strong",{parentName:"li"},"System Settings")," \u276d ",(0,r.kt)("strong",{parentName:"li"},"Android SDK"),"."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iOS/macOS"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/app/xcode/id497799835?mt=12"},"Xcode")," 12 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cocoapods.org/"},"CocoaPods")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure that\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development"},"Developer Mode"),"\nis turned on in Windows Settings app"),(0,r.kt)("li",{parentName:"ul"},"Install development dependencies as described in the\n",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/react-native-windows/docs/rnw-dependencies"},"React Native for Windows documentation"))))),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"We use Yarn to install npm dependencies. From the repo root, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn\n")),(0,r.kt)("p",null,"This will also take care of building any tools that you might need. Once it's\ndone, you can choose to build all packages or just the packages you're\ninterested in."),(0,r.kt)("p",null,"If you want to build all packages, you should run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn build\n")),(0,r.kt)("p",null,"Otherwise, you can specify which package to build, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@rnx-kit/cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn build-scope @rnx-kit/cli\n")),(0,r.kt)("p",null,"Alternatively, you can navigate to the package folder and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd packages/cli\nyarn build --dependencies\n")),(0,r.kt)("p",null,"Both the repository level ",(0,r.kt)("inlineCode",{parentName:"p"},"build-scope")," and the package local\n",(0,r.kt)("inlineCode",{parentName:"p"},"build --dependencies")," ensure all dependencies are built before the target\npackage."),(0,r.kt)("p",null,"Below is a table of commonly used commands and what they do depending on your\ncurrent working directory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Repository Level"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Package Level"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn build")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Builds ",(0,r.kt)("strong",{parentName:"td"},"all")," packages in the repository"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Builds the ",(0,r.kt)("strong",{parentName:"td"},"current")," package only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn build --dependencies")),(0,r.kt)("td",{parentName:"tr",align:"left"},"--"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Builds the ",(0,r.kt)("strong",{parentName:"td"},"current")," package and its dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn build-scope")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Builds the ",(0,r.kt)("strong",{parentName:"td"},"specified")," package and its dependencies"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn format")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Formats ",(0,r.kt)("strong",{parentName:"td"},"all")," packages in the repository"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Formats the ",(0,r.kt)("strong",{parentName:"td"},"current")," package only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn lint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lints ",(0,r.kt)("strong",{parentName:"td"},"all")," packages in the repository"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lints the ",(0,r.kt)("strong",{parentName:"td"},"current")," package only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yarn test")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tests ",(0,r.kt)("strong",{parentName:"td"},"all")," packages in the repository"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tests the ",(0,r.kt)("strong",{parentName:"td"},"current")," package only")))),(0,r.kt)("h2",{id:"adding-a-new-package"},"Adding a New Package"),(0,r.kt)("p",null,"To ensure that there is consistency and shared practices across the monorepo, we\nhave introduced a small script to easily allow for new packages generation."),(0,r.kt)("p",null,"Simply run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn new-package --name TEST\n")),(0,r.kt)("p",null,"To generate a sample project for you to use; this is based on\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/template"),". You can pass the extra flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental")," to send the\npackage in the ",(0,r.kt)("inlineCode",{parentName:"p"},"incubator")," folder - files will be tweaked as necessary."),(0,r.kt)("h2",{id:"change-logs"},"Change Logs"),(0,r.kt)("p",null,"Each package in this monorepo contains a change log. The log is built from\nchange descriptions submitted with each PR."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ yarn change\n")),(0,r.kt)("p",null,"This launches ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets#readme"},"Changesets"),",\nwhich collects and records information about your change."),(0,r.kt)("p",null,"Follow the prompts and describe the changes you are making to each package. This\ninformation is written in files under ",(0,r.kt)("inlineCode",{parentName:"p"},"/.changeset"),". Our CI loop uses these\nfiles to bump package versions and update package change logs."),(0,r.kt)("h2",{id:"releases"},"Releases"),(0,r.kt)("p",null,"Our release process is fully automated by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets#readme"},"Changesets"),"."),(0,r.kt)("p",null,"When a PR is merged, our CI loop uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Changesets")," to version-bump each changed\npackage and publish it to ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,r.kt)("h2",{id:"style-guide"},"Style Guide"),(0,r.kt)("p",null,"Most files are formatted with ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),". We also use\n",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to lint all JavaScript code."),(0,r.kt)("p",null,"You can trigger formatting by running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn format"),", and linting with\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn lint"),"."))}d.isMDXComponent=!0}}]);