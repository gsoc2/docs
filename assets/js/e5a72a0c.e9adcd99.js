"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[1429],{3252:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var c=o(4848),i=o(8453);const s={id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["commitizen conventional commit","open source commit standards","how to use @open-sauced/conventional-commit","npm package for conventional commit","open sauced commit guide","conventional commit best practices","Commit Message Standards","Semantic Versioning","Git Commit Conventions","Standardized Commit Messages","Version Control Best Practices"]},t=void 0,a={id:"opensauced-packages/conventional-commit",title:"@open-sauced/conventional-commit",description:"Description",source:"@site/docs/opensauced-packages/conventional-commit.md",sourceDirName:"opensauced-packages",slug:"/opensauced-packages/conventional-commit",permalink:"/opensauced-packages/conventional-commit",draft:!1,unlisted:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/opensauced-packages/conventional-commit.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1717170876e3,frontMatter:{id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["commitizen conventional commit","open source commit standards","how to use @open-sauced/conventional-commit","npm package for conventional commit","open sauced commit guide","conventional commit best practices","Commit Message Standards","Semantic Versioning","Git Commit Conventions","Standardized Commit Messages","Version Control Best Practices"]},sidebar:"docs",previous:{title:"@open-sauced/check-engines",permalink:"/opensauced-packages/check-engines"},next:{title:"@open-sauced/semantic-release-conventional-config",permalink:"/opensauced-packages/semantic-release"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Contributing",id:"contributing",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"npm"})," package ",(0,c.jsx)(n.code,{children:"@open-sauced/conventional-commit"})," is designed to help users ",(0,c.jsx)(n.code,{children:"git commit"})," using ",(0,c.jsx)(n.a,{href:"https://github.com/commitizen/cz-cli",children:"commitizen"})," and ",(0,c.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"conventional commits"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,c.jsx)(n.p,{children:"This package uses the following modules:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/commitizen/cz-cli",children:"cz-cli"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/commitizen/cz-conventional-changelog",children:"cz-conventional-changelog"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @open-sauced/conventional-commit\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Add the verification scripts to your ",(0,c.jsx)(n.code,{children:"scripts"})," section in the ",(0,c.jsx)(n.code,{children:"package.json"})," file:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "scripts" {\n    "push" "npx @open-sauced/conventional-commit"\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["The reason why we provide ",(0,c.jsx)(n.code,{children:"npx"})," in the ",(0,c.jsx)(n.code,{children:"scripts"})," section is for the people using this as a development enhancement, interactive configurations, or trimmed dependency trees, where using ",(0,c.jsx)(n.code,{children:"npx"})," is preferred over installing all the dependencies at once."]}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsxs)(n.p,{children:["All you have to do is run the script next to your ",(0,c.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npx @open-sauced/conventional-commit\n# or\nnpx conventional-commit\n"})}),"\n",(0,c.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,c.jsxs)(n.p,{children:["The most common use case for this package is to run it instead of the ",(0,c.jsx)(n.code,{children:"git commit"})," command inside your ",(0,c.jsx)(n.code,{children:"npm"})," scripts:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "scripts" {\n    "push" "npx @open-sauced/conventional-commit"\n  }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"or"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "scripts" {\n    "push" "npx conventional-commit"\n  }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"If you want to ensure local-only usage:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "scripts" {\n    "push" "conventional-commit"\n  }\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,c.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,c.jsx)(n.p,{children:"We're always happy to onboard people into open source!"}),"\n",(0,c.jsxs)(n.p,{children:["Check out the repository at ",(0,c.jsx)(n.a,{href:"https://github.com/open-sauced/conventional-commit",children:"@open-sauced/conventional-commit"}),". \u2764\ufe0f"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var c=o(6540);const i={},s=c.createContext(i);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);