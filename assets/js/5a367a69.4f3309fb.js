"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={id:"resolve-merge-conflicts",title:"Resolve Merge Conflicts",sidebar_label:"Resolve Merge Conflicts",keywords:["resolve merge conflicts","solve merge conflicts","Git merge conflict","Merge conflict resolution","Merge conflict prevention","Merge conflict handling","Merge conflict management","Merge conflict avoidance","Merge conflict workflow","Merge conflict strategies","Merge conflict best practices","Merge conflict tools"]},i=void 0,l={unversionedId:"contributing/technical/resolve-merge-conflicts",id:"contributing/technical/resolve-merge-conflicts",title:"Resolve Merge Conflicts",description:"When you are working on any of the OpenSauced repositories, you might run into a merge conflict. A merge conflict occurs when multiple conflicting changes are made to the same line in a file. Merge conflicts happen the most when you open a pull request, as the release process generally updates npm-shrinkwrap.json.",source:"@site/docs/contributing/technical/resolve-merge-conflicts.md",sourceDirName:"contributing/technical",slug:"/contributing/technical/resolve-merge-conflicts",permalink:"/contributing/technical/resolve-merge-conflicts",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/technical/resolve-merge-conflicts.md",tags:[],version:"current",lastUpdatedBy:"Christine Belzie",lastUpdatedAt:1708367294,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"resolve-merge-conflicts",title:"Resolve Merge Conflicts",sidebar_label:"Resolve Merge Conflicts",keywords:["resolve merge conflicts","solve merge conflicts","Git merge conflict","Merge conflict resolution","Merge conflict prevention","Merge conflict handling","Merge conflict management","Merge conflict avoidance","Merge conflict workflow","Merge conflict strategies","Merge conflict best practices","Merge conflict tools"]},sidebar:"docs",previous:{title:"Setting Up a Repository with Git and GitHub",permalink:"/contributing/technical/setup-repo-with-git"},next:{title:"@open-sauced/check-engines",permalink:"/opensauced-packages/check-engines"}},c={},s=[{value:"How to Keep Your Branch Updated",id:"how-to-keep-your-branch-updated",level:2},{value:"Using GitHub",id:"using-github",level:3},{value:"Using Git",id:"using-git",level:3},{value:"How to Check for Merge Conflicts Locally",id:"how-to-check-for-merge-conflicts-locally",level:2},{value:"How to Resolve Merge Conflicts",id:"how-to-resolve-merge-conflicts",level:2},{value:"Reviewing Your Pull Request",id:"reviewing-your-pull-request",level:2},{value:"Dependency Updates",id:"dependency-updates",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you are working on any of the OpenSauced repositories, you might run into a merge conflict. A merge conflict occurs when multiple conflicting changes are made to the same line in a file. Merge conflicts happen the most when you open a pull request, as the release process generally updates ",(0,r.kt)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),"."),(0,r.kt)("p",null,"In this guide, we will talk about how to resolve merge conflicts and how to keep your branch up to date."),(0,r.kt)("h2",{id:"how-to-keep-your-branch-updated"},"How to Keep Your Branch Updated"),(0,r.kt)("p",null,"It is common for your branch to fall behind the main repository's branch. So it is important to keep it up to date as you are contributing."),(0,r.kt)("h3",{id:"using-github"},"Using GitHub"),(0,r.kt)("p",null,"To update your branch on GitHub, you can go to your forked copy of the project and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Sync fork")," and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Update branch")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"syncing your branch on GitHub",src:n(7471).Z,width:"2056",height:"1090"})),(0,r.kt)("h3",{id:"using-git"},"Using Git"),(0,r.kt)("p",null,"To update your branch using Git and the terminal, you can use the following commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change directories to the correct project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd project-name\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream")," remote.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add upstream https://github.com/upstream-username/upstream-repository.git\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Pull the latest changes from the ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git pull upstream main-branch-name\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Some of the OpenSauced repositories will use ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," for the main branch while others like the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/app"},"app repository"),", will use ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," for the main branch name."),(0,r.kt)("h2",{id:"how-to-check-for-merge-conflicts-locally"},"How to Check for Merge Conflicts Locally"),(0,r.kt)("p",null,"If you are actively working on a change to an OpenSauced repository, you can check for potential merge conflicts by running a few commands in the terminal."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you are on the correct branch where the changes are being made.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd app\ngit checkout <your-branch>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Fetch the latest changes from the OpenSauced main repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"See the differences between your branch and the OpenSauced main branch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git diff <your-branch> upstream/main\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Some of the OpenSauced repositories will use ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," for the main branch while others, like the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/app"},"app repository"),", will use ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," for the main branch name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"git diff output review conflicts",src:n(3032).Z,width:"1236",height:"766"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you have already opened up a pull request, then you can see if there is a conflict at the bottom of the PR. Even though it is possible to resolve conflicts through GitHub, it is best practice to resolve them locally."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"merge conflicts git message",src:n(340).Z,width:"1690",height:"1144"})),(0,r.kt)("h2",{id:"how-to-resolve-merge-conflicts"},"How to Resolve Merge Conflicts"),(0,r.kt)("p",null,"If you have merge conflicts, it is best to use a text editor to resolve them. Identify the conflicting files and open them up in your editor of choice. For the conflicting sections, you have an option to either keep the incoming changes, keep your changes or keep both sets of changes. The conflicting sections will be marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<<<<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"======="),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">>>>>>>")," symbols."),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/opensauced/keeping-your-branch-up-to-date-and-handling-merge-conflicts-while-waiting-for-pr-reviews-3b3h"},"guide")," for an in depth walkthrough of the process. Once you have resolved all of the conflicts, then you can stage, commit and push your changes to your branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git status\ngit add .\ngit commit -m "fix: resolving merge conflicts"\ngit push\n')),(0,r.kt)("h2",{id:"reviewing-your-pull-request"},"Reviewing Your Pull Request"),(0,r.kt)("p",null,"Once you have pushed up your changes, you can review them in your pull request. Under the files changed tab, you will see all of the recent changes including all conflicts resolved."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"files changed tab on GitHub",src:n(4912).Z,width:"1794",height:"942"})),(0,r.kt)("h2",{id:"dependency-updates"},"Dependency Updates"),(0,r.kt)("p",null,"When dealing with dependency and lock file updates, there are multiple use cases to consider; however, as a baseline, the OpenSauced triage team will not prioritize parallel main features as seen in the roadmap."),(0,r.kt)("p",null,"However when that happens, it is advised to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fast-forward ",(0,r.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,r.kt)("li",{parentName:"ul"},"fast-forward deleted and modified ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream/beta")," changes to ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},"fast-forward your added lines to ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm ci")," to delete local modules and create dependency resolution from ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream/beta"))),(0,r.kt)("p",null,"Visual diffing is advised; however, not following the git commit history procedure will result in a rogue pull request that creeps into dependency updates."),(0,r.kt)("p",null,"Generally speaking, just adding things to a lock file will not be troublesome, and since this is a licensed project, we should be careful when adding dependencies."))}d.isMDXComponent=!0},340:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/contributing-resolve-merge-conflicts-dont-do-9703e3dffc76ef8c046f2fd7b506676f.png"},3032:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/contributing-resolve-merge-conflicts-review-conflicts-5df5a5e4934e39d9e07bcd96e53d7c3f.png"},4912:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/files-changed-tab-867f60b1281f09ba23cea7234e7703b5.png"},7471:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sync-branch-GH-36c4d46d1782388d799fee76fe10398b.png"}}]);