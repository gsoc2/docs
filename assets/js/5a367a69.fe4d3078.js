"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[8373],{9468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=t(4848),o=t(8453);const s={id:"resolve-merge-conflicts",title:"Resolve Merge Conflicts",sidebar_label:"Resolve Merge Conflicts",keywords:["resolve merge conflicts","solve merge conflicts","Git merge conflict","Merge conflict resolution","Merge conflict prevention","Merge conflict handling","Merge conflict management","Merge conflict avoidance","Merge conflict workflow","Merge conflict strategies","Merge conflict best practices","Merge conflict tools"]},c=void 0,r={id:"contributing/technical/resolve-merge-conflicts",title:"Resolve Merge Conflicts",description:"When you are working on any of the OpenSauced repositories, you might run into a merge conflict. A merge conflict occurs when multiple conflicting changes are made to the same line in a file. Merge conflicts happen the most when you open a pull request, as the release process generally updates npm-shrinkwrap.json.",source:"@site/docs/contributing/technical/resolve-merge-conflicts.md",sourceDirName:"contributing/technical",slug:"/contributing/technical/resolve-merge-conflicts",permalink:"/contributing/technical/resolve-merge-conflicts",draft:!1,unlisted:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/technical/resolve-merge-conflicts.md",tags:[],version:"current",lastUpdatedBy:"Shubham Tiwari",lastUpdatedAt:1716815651e3,frontMatter:{id:"resolve-merge-conflicts",title:"Resolve Merge Conflicts",sidebar_label:"Resolve Merge Conflicts",keywords:["resolve merge conflicts","solve merge conflicts","Git merge conflict","Merge conflict resolution","Merge conflict prevention","Merge conflict handling","Merge conflict management","Merge conflict avoidance","Merge conflict workflow","Merge conflict strategies","Merge conflict best practices","Merge conflict tools"]},sidebar:"docs",previous:{title:"Setting Up a Repository with Git and GitHub",permalink:"/contributing/technical/setup-repo-with-git"},next:{title:"@open-sauced/check-engines",permalink:"/opensauced-packages/check-engines"}},l={},a=[{value:"How to Keep Your Branch Updated",id:"how-to-keep-your-branch-updated",level:2},{value:"Using GitHub",id:"using-github",level:3},{value:"Using Git",id:"using-git",level:3},{value:"How to Check for Merge Conflicts Locally",id:"how-to-check-for-merge-conflicts-locally",level:2},{value:"How to Resolve Merge Conflicts",id:"how-to-resolve-merge-conflicts",level:2},{value:"Reviewing Your Pull Request",id:"reviewing-your-pull-request",level:2},{value:"Dependency Updates",id:"dependency-updates",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["When you are working on any of the OpenSauced repositories, you might run into a merge conflict. A merge conflict occurs when multiple conflicting changes are made to the same line in a file. Merge conflicts happen the most when you open a pull request, as the release process generally updates ",(0,i.jsx)(n.code,{children:"npm-shrinkwrap.json"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will talk about how to resolve merge conflicts and how to keep your branch up to date."}),"\n",(0,i.jsx)(n.h2,{id:"how-to-keep-your-branch-updated",children:"How to Keep Your Branch Updated"}),"\n",(0,i.jsx)(n.p,{children:"It is common for your branch to fall behind the main repository's branch. So it is important to keep it up to date as you are contributing."}),"\n",(0,i.jsx)(n.h3,{id:"using-github",children:"Using GitHub"}),"\n",(0,i.jsxs)(n.p,{children:["To update your branch on GitHub, you can go to your forked copy of the project and click on ",(0,i.jsx)(n.code,{children:"Sync fork"})," and then the ",(0,i.jsx)(n.code,{children:"Update branch"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"syncing your branch on GitHub",src:t(4935).A+"",width:"2056",height:"1090"})}),"\n",(0,i.jsx)(n.h3,{id:"using-git",children:"Using Git"}),"\n",(0,i.jsx)(n.p,{children:"To update your branch using Git and the terminal, you can use the following commands:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Change directories to the correct project."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd project-name\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"upstream"})," remote."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git remote add upstream https://github.com/upstream-username/upstream-repository.git\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Pull the latest changes from the ",(0,i.jsx)(n.code,{children:"upstream"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git pull upstream main-branch-name\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": Some of the OpenSauced repositories will use ",(0,i.jsx)(n.code,{children:"main"})," for the main branch while others like the ",(0,i.jsx)(n.a,{href:"https://github.com/open-sauced/app",children:"app repository"}),", will use ",(0,i.jsx)(n.code,{children:"beta"})," for the main branch name."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-check-for-merge-conflicts-locally",children:"How to Check for Merge Conflicts Locally"}),"\n",(0,i.jsx)(n.p,{children:"If you are actively working on a change to an OpenSauced repository, you can check for potential merge conflicts by running a few commands in the terminal."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure you are on the correct branch where the changes are being made."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd app\ngit checkout <your-branch>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Fetch the latest changes from the OpenSauced main repository."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git fetch upstream\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"See the differences between your branch and the OpenSauced main branch."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git diff <your-branch> upstream/main\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": Some of the OpenSauced repositories will use ",(0,i.jsx)(n.code,{children:"main"})," for the main branch while others, like the ",(0,i.jsx)(n.a,{href:"https://github.com/open-sauced/app",children:"app repository"}),", will use ",(0,i.jsx)(n.code,{children:"beta"})," for the main branch name."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"git diff output review conflicts",src:t(2024).A+"",width:"1236",height:"766"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": If you have already opened up a pull request, then you can see if there is a conflict at the bottom of the PR. Even though it is possible to resolve conflicts through GitHub, it is best practice to resolve them locally."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"merge conflicts git message",src:t(9193).A+"",width:"1690",height:"1144"})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-resolve-merge-conflicts",children:"How to Resolve Merge Conflicts"}),"\n",(0,i.jsxs)(n.p,{children:["If you have merge conflicts, it is best to use a text editor to resolve them. Identify the conflicting files and open them up in your editor of choice. For the conflicting sections, you have an option to either keep the incoming changes, keep your changes or keep both sets of changes. The conflicting sections will be marked with ",(0,i.jsx)(n.code,{children:"<<<<<<<"}),", ",(0,i.jsx)(n.code,{children:"======="}),", and ",(0,i.jsx)(n.code,{children:">>>>>>>"})," symbols."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is a ",(0,i.jsx)(n.a,{href:"https://dev.to/opensauced/keeping-your-branch-up-to-date-and-handling-merge-conflicts-while-waiting-for-pr-reviews-3b3h",children:"guide"})," for an in depth walkthrough of the process. Once you have resolved all of the conflicts, then you can stage, commit and push your changes to your branch."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git status\ngit add .\ngit commit -m "fix: resolving merge conflicts"\ngit push\n'})}),"\n",(0,i.jsx)(n.h2,{id:"reviewing-your-pull-request",children:"Reviewing Your Pull Request"}),"\n",(0,i.jsx)(n.p,{children:"Once you have pushed up your changes, you can review them in your pull request. Under the files changed tab, you will see all of the recent changes including all conflicts resolved."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"files changed tab on GitHub",src:t(9813).A+"",width:"1794",height:"942"})}),"\n",(0,i.jsx)(n.h2,{id:"dependency-updates",children:"Dependency Updates"}),"\n",(0,i.jsx)(n.p,{children:"When dealing with dependency and lock file updates, there are multiple use cases to consider; however, as a baseline, the OpenSauced triage team will not prioritize parallel main features as seen in the roadmap."}),"\n",(0,i.jsx)(n.p,{children:"However when that happens, it is advised to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fast-forward ",(0,i.jsx)(n.code,{children:"npm-shrinkwrap.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["fast-forward deleted and modified ",(0,i.jsx)(n.code,{children:"upstream/beta"})," changes to ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["fast-forward your added lines to ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["run ",(0,i.jsx)(n.code,{children:"npm ci"})," to delete local modules and create dependency resolution from ",(0,i.jsx)(n.code,{children:"upstream/beta"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Visual diffing is advised; however, not following the git commit history procedure will result in a rogue pull request that creeps into dependency updates."}),"\n",(0,i.jsx)(n.p,{children:"Generally speaking, just adding things to a lock file will not be troublesome, and since this is a licensed project, we should be careful when adding dependencies."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9193:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/contributing-resolve-merge-conflicts-dont-do-9703e3dffc76ef8c046f2fd7b506676f.png"},2024:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/contributing-resolve-merge-conflicts-review-conflicts-5df5a5e4934e39d9e07bcd96e53d7c3f.png"},9813:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/files-changed-tab-867f60b1281f09ba23cea7234e7703b5.png"},4935:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sync-branch-GH-36c4d46d1782388d799fee76fe10398b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);