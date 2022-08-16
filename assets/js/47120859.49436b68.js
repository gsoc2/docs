"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[657],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,r(r({ref:n},s),{},{components:t})):a.createElement(h,r({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8389:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],c={},l="@open-sauced/conventional-commit",p={unversionedId:"maintainers/conventional-commit",id:"maintainers/conventional-commit",isDocsHomePage:!1,title:"@open-sauced/conventional-commit",description:"Description",source:"@site/docs/maintainers/conventional-commit.md",sourceDirName:"maintainers",slug:"/maintainers/conventional-commit",permalink:"/maintainers/conventional-commit",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/maintainers/conventional-commit.md",tags:[],version:"current",lastUpdatedBy:"teachjenntech",lastUpdatedAt:1660691507,formattedLastUpdatedAt:"8/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"@open-sauced/check-engines",permalink:"/maintainers/check-engines"},next:{title:"@open-sauced/semantic-release-conventional-config",permalink:"/maintainers/semantic-release"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Advanced usage",id:"advanced-usage",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2},{value:"Contributing",id:"contributing",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"open-saucedconventional-commit"},"@open-sauced/conventional-commit"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package ",(0,i.kt)("inlineCode",{parentName:"p"},"@open-sauced/conventional-commit")," is designed to help users ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"commitizen")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits"),"."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"This package uses the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-cli"},"cz-cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-conventional-changelog"},"cz-conventional-changelog"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @open-sauced/conventional-commit\n")),(0,i.kt)("p",null,"Add the verification scripts to your ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,i.kt)("p",null,"The reason why we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section is for the people using this as a development enhancement, interactive configurations or trimmed dependency trees, where using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," is preferred over installing all the dependencies at once. "),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"All you have to do is run the script next to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @open-sauced/conventional-commit\n# or\nnpx conventional-commit\n")),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("p",null,"The most common use case for this package is to run it instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," command inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx conventional-commit"\n  }\n}\n')),(0,i.kt)("p",null,"If you want to ensure local-only usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "conventional-commit"\n  }\n}\n')),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We're always happy to onboard people into open source!"),(0,i.kt)("p",null,"Check out the repository at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/conventional-commit"},"@open-sauced/conventional-commit")," \u2764\ufe0f"))}m.isMDXComponent=!0}}]);