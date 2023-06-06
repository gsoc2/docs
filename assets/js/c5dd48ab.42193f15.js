"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"resolve-merge-conflicts",title:"Resolve merge conflicts",sidebar_label:"Resolve merge conflicts",keywords:["Resolve merge conflicts"]},l=void 0,o={unversionedId:"technical/resolve-merge-conflicts",id:"technical/resolve-merge-conflicts",title:"Resolve merge conflicts",description:"Pretty often when opening a pull request it is very likely to run into merge conflicts as the release process is generally updating npm-shriknwrap.json.",source:"@site/docs/technical/resolve-merge-conflicts.md",sourceDirName:"technical",slug:"/technical/resolve-merge-conflicts",permalink:"/technical/resolve-merge-conflicts",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/technical/resolve-merge-conflicts.md",tags:[],version:"current",lastUpdatedBy:"Abdurrahman Rajab",lastUpdatedAt:1686017904,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"resolve-merge-conflicts",title:"Resolve merge conflicts",sidebar_label:"Resolve merge conflicts",keywords:["Resolve merge conflicts"]},sidebar:"docs",previous:{title:"Introduction to storybook",permalink:"/technical/introduction-to-storybook"},next:{title:"Setting up a new repository",permalink:"/maintainers/setting-up-a-new-repository"}},s={},c=[{value:"Repository setup",id:"repository-setup",level:2},{value:"Update",id:"update",level:2},{value:"Merge with upstream",id:"merge-with-upstream",level:2},{value:"Review changes",id:"review-changes",level:2},{value:"Resolve conflicts",id:"resolve-conflicts",level:2},{value:"Commit changes",id:"commit-changes",level:2},{value:"Push updated pull request",id:"push-updated-pull-request",level:2},{value:"Review your pull request",id:"review-your-pull-request",level:2},{value:"Dependency updates",id:"dependency-updates",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pretty often when opening a pull request it is very likely to run into merge conflicts as the release process is generally updating ",(0,r.kt)("inlineCode",{parentName:"p"},"npm-shriknwrap.json"),"."),(0,r.kt)("p",null,"To better illustrate the commands listed here at will use commits and screenshots from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/pull/1078"},"open-sauced#1078"),"."),(0,r.kt)("p",null,"In literally every case it is advised ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"not"))," to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolve conflicts")," button as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"don&#39;t resolve conflicts like this",src:n(1445).Z,width:"1690",height:"1144"})),(0,r.kt)("p",null,"The above will at best achieve a ready to merge pull request with visible inconsistencies."),(0,r.kt)("h2",{id:"repository-setup"},"Repository setup"),(0,r.kt)("p",null,"Fork and clone the project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gh")," command line interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo clone 0-vortex/open-sauced\n")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote -v")," will output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"origin git@github.com:0-vortex/open-sauced.git (fetch)\norigin git@github.com:0-vortex/open-sauced.git (push)\nupstream git@github.com:open-sauced/open-sauced.git (fetch)\nupstream git@github.com:open-sauced/open-sauced.git (push)\n")),(0,r.kt)("p",null,"Fork and clone the project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," command line interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:0-vortex/open-sauced.git\n")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote -v")," will output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"origin git@github.com:0-vortex/open-sauced.git (fetch)\norigin git@github.com:0-vortex/open-sauced.git (push)\n")),(0,r.kt)("p",null,"As an additional step for this tutorial we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," remote:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream git@github.com:open-sauced/open-sauced.git\n")),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"First get the default branch changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch origin --recurse-submodules=no --progress --prune\ngit checkout main --\ngit fetch upstream --recurse-submodules=no --progress --prune\ngit merge upstream/main --no-stat -v\n")),(0,r.kt)("h2",{id:"merge-with-upstream"},"Merge with upstream"),(0,r.kt)("p",null,"Then merge with the forked up-to-date ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," (default branch):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git merge origin/main --no-ff -v\n")),(0,r.kt)("p",null,"You will see something similar to:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proper merge but results in conflicts",src:n(1229).Z,width:"1154",height:"958"})),(0,r.kt)("h2",{id:"review-changes"},"Review changes"),(0,r.kt)("p",null,"To see what the changes are do a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git diff package.json\n")),(0,r.kt)("p",null,"It will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"review merge conflicts",src:n(4863).Z,width:"1236",height:"766"})),(0,r.kt)("h2",{id:"resolve-conflicts"},"Resolve conflicts"),(0,r.kt)("p",null,"Since this pull request does not modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file it is safe to fast forward the changes from ",(0,r.kt)("inlineCode",{parentName:"p"},"origin/main"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# overwrite with origin/main changes\ngit show :3:package.json > package.json\n")),(0,r.kt)("p",null,"A more traditional way of doing the same thing is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# make a local copy of all changes and use --theirs\n# --theirs strategy overwrite with origin/main changes\ngit show :1:package.json > base.package.json\ngit show :2:package.json > branch.package.json\ngit show :3:package.json > head.package.json\ngit merge-file -p --theirs \\\n    branch.package.json base.package.json head.package.json > package.json\n")),(0,r.kt)("h2",{id:"commit-changes"},"Commit changes"),(0,r.kt)("p",null,"Not making any assumptions about editor preferences running this will open the configured editor with a default commit message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git commit\n")),(0,r.kt)("p",null,"That should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"commit merge message",src:n(9965).Z,width:"1286",height:"1734"})),(0,r.kt)("h2",{id:"push-updated-pull-request"},"Push updated pull request"),(0,r.kt)("p",null,"One more security check to make sure your branch has not diverged and push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git status\ngit push\n")),(0,r.kt)("p",null,"It should look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"push updated pr",src:n(6788).Z,width:"1350",height:"980"})),(0,r.kt)("h2",{id:"review-your-pull-request"},"Review your pull request"),(0,r.kt)("p",null,"The result of the above commands can be viewed at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/pull/1078/commits/283ff8cd788c550309ff0d1d5a9a5a97ec0731b2"},"283ff8cd788c550309ff0d1d5a9a5a97ec0731b2")),(0,r.kt)("p",null,"GitHub will conveniently display only you merge conflict changes:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view merge commit",src:n(914).Z,width:"2436",height:"1150"})),(0,r.kt)("p",null,"And it's ready to merge:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ready to merge",src:n(2825).Z,width:"1696",height:"884"})),(0,r.kt)("h2",{id:"dependency-updates"},"Dependency updates"),(0,r.kt)("p",null,"When dealing with dependency and lock file updates there are multiple use cases to consider, however as a baseline, the OpenSauced triage team will not prioritize parallel main features as seen in the roadmap."),(0,r.kt)("p",null,"However when that happens, it is advised to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fast-forward ",(0,r.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," "),(0,r.kt)("li",{parentName:"ul"},"fast-forward deleted and modified ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream/beta")," changes to ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," "),(0,r.kt)("li",{parentName:"ul"},"fast-forward your added lines to ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm ci")," to delete local modules and create dependency resolution from ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream/beta"))),(0,r.kt)("p",null,"Visual diffing is advised however not following the git commit history procedure will result in a rogue pull request that scope creeps into dependency updates."),(0,r.kt)("p",null,"Generally speaking, just adding things to a lockfile will not be troublesome and since this is a licensed project, we should be careful when adding dependencies."))}d.isMDXComponent=!0},9965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-commit-message-2b517ccf8811b09d5091cb9c300c4993.png"},1445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-dont-do-9703e3dffc76ef8c046f2fd7b506676f.png"},1229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-merge-conflicts-41673d73e41a1d513254f5274231c03a.png"},6788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-merge-success-4ba32cb94dddea19d9691bccbef974b9.png"},2825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-ready-to-merge-c0f138669dee46efafb0d584c170020e.png"},4863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-review-conflicts-5df5a5e4934e39d9e07bcd96e53d7c3f.png"},914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contributing-resolve-merge-conflicts-view-merge-commit-1c4055497fd56038e1ba46a6ae1886ab.png"}}]);