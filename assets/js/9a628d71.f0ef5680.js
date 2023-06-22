"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[79],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5439:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={id:"introduction-to-storybook",title:"Introduction to storybook",sidebar_label:"Introduction to storybook",keywords:["Introduction to storybook"]},i=void 0,l={unversionedId:"technical/introduction-to-storybook",id:"technical/introduction-to-storybook",title:"Introduction to storybook",description:"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this URL.",source:"@site/docs/technical/introduction-to-storybook.md",sourceDirName:"technical",slug:"/technical/introduction-to-storybook",permalink:"/technical/introduction-to-storybook",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/technical/introduction-to-storybook.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1687460407,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{id:"introduction-to-storybook",title:"Introduction to storybook",sidebar_label:"Introduction to storybook",keywords:["Introduction to storybook"]},sidebar:"docs",previous:{title:"Set up Authentication",permalink:"/contributing/set-up-authentication"},next:{title:"Resolve merge conflicts",permalink:"/technical/resolve-merge-conflicts"}},s={},c=[{value:"UI categories",id:"ui-categories",level:2},{value:"Making changes to storybook",id:"making-changes-to-storybook",level:2},{value:"Adding a new category",id:"adding-a-new-category",level:2},{value:"Adding a new UI element",id:"adding-a-new-ui-element",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this ",(0,r.kt)("a",{parentName:"p",href:"https://sauced-components.netlify.app/"},"URL"),"."),(0,r.kt)("p",null,"To run storybook, use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run storybook\n")),(0,r.kt)("h2",{id:"ui-categories"},"UI categories"),(0,r.kt)("p",null,"Storybook is broken into several categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"Button:")," These are the button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Cards:")," These are the main container elements in the project. Each item represents a live component in their current form in the project."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Primitives: These are the basic styling of base HTML components.")),(0,r.kt)("li",null,(0,r.kt)("b",null,"Nav:")," This is the main navigation bar for the project. There are two states, when there is no user logged in and when a user is logged in."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Footer:")," This represents the various footers for the project."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Homepage:")," This is the main component for the project homepage and shows the home page in its current form."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Miscellaneous:")," These are components that currently don't fit neatly into the above categories.")),(0,r.kt)("h2",{id:"making-changes-to-storybook"},"Making changes to storybook"),(0,r.kt)("p",null,"This section details how to make changes to Storybook, mainly creating new categories or UI elements."),(0,r.kt)("h2",{id:"adding-a-new-category"},"Adding a new category"),(0,r.kt)("p",null,"To add a new category, a new file needs to be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"/stories"),". Please follow the naming convention of ",(0,r.kt)("inlineCode",{parentName:"p"},"*Previous File Number + 1*-*Name of Story Capitalized*-stories.js")," when creating a new file. In the file ensure you have this code in the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export default {\n    title: "*Name of category*"\n};\n')),(0,r.kt)("h2",{id:"adding-a-new-ui-element"},"Adding a new UI element"),(0,r.kt)("p",null,"To add a new UI element to to an existing category, add the following code to that category's file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export const *Name of UI Element* = () => (\n\n);\n")))}p.isMDXComponent=!0}}]);