"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[5116],{9737:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=i(4848),n=i(8453);const r={id:"setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",sidebar_label:"Setting Up a Repository with Git and GitHub",keywords:["setting up a repository with Git and GitHub","working with git and github","GitHub repository creation","GitHub repository workflow","GitHub repository initialization","GitHub repository hosting","GitHub repository collaboration","GitHub repository version control","GitHub repository deployment","GitHub repository setup"]},s=void 0,a={id:"contributing/technical/setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",description:"Using the GitHub CLI",source:"@site/docs/contributing/technical/setup-repo-with-git.md",sourceDirName:"contributing/technical",slug:"/contributing/technical/setup-repo-with-git",permalink:"/contributing/technical/setup-repo-with-git",draft:!1,unlisted:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/technical/setup-repo-with-git.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1717170876e3,frontMatter:{id:"setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",sidebar_label:"Setting Up a Repository with Git and GitHub",keywords:["setting up a repository with Git and GitHub","working with git and github","GitHub repository creation","GitHub repository workflow","GitHub repository initialization","GitHub repository hosting","GitHub repository collaboration","GitHub repository version control","GitHub repository deployment","GitHub repository setup"]},sidebar:"docs",previous:{title:"Set Up Authentication",permalink:"/contributing/set-up-authentication"},next:{title:"Resolve Merge Conflicts",permalink:"/contributing/technical/resolve-merge-conflicts"}},l={},h=[{value:"Using the GitHub CLI",id:"using-the-github-cli",level:2},{value:"How to Install the GitHub CLI",id:"how-to-install-the-github-cli",level:3},{value:"How to Authenticate with the GitHub CLI",id:"how-to-authenticate-with-the-github-cli",level:3},{value:"How to Fork and Clone a Repository with the GitHub CLI",id:"how-to-fork-and-clone-a-repository-with-the-github-cli",level:3},{value:"How to Add a Remote Repository",id:"how-to-add-a-remote-repository",level:3},{value:"How to View the Remote Repositories Locally",id:"how-to-view-the-remote-repositories-locally",level:3},{value:"Using the GitHub Website and the Command Line",id:"using-the-github-website-and-the-command-line",level:2}];function c(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"using-the-github-cli",children:"Using the GitHub CLI"}),"\n",(0,o.jsx)(e.h3,{id:"how-to-install-the-github-cli",children:"How to Install the GitHub CLI"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.a,{href:"https://cli.github.com/",children:"GitHub CLI"})," allows you to fork repositories, create issues, pull requests, and more from the command line."]}),"\n",(0,o.jsxs)(e.p,{children:["Follow these ",(0,o.jsx)(e.a,{href:"https://github.com/cli/cli#installation",children:"instructions to install GitHub CLI"})," on Mac, Windows, or Linux."]}),"\n",(0,o.jsx)(e.h3,{id:"how-to-authenticate-with-the-github-cli",children:"How to Authenticate with the GitHub CLI"}),"\n",(0,o.jsx)(e.p,{children:"From the terminal, you will need to authenticate with the GitHub CLI. You can do this by running the following command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"gh auth login\n"})}),"\n",(0,o.jsx)(e.p,{children:"Then, follow the prompts to authenticate with the GitHub CLI."}),"\n",(0,o.jsx)(e.h3,{id:"how-to-fork-and-clone-a-repository-with-the-github-cli",children:"How to Fork and Clone a Repository with the GitHub CLI"}),"\n",(0,o.jsx)(e.p,{children:"A fork is a remote copy of a repository, allowing you to experiment freely with changes without affecting the original project."}),"\n",(0,o.jsx)(e.p,{children:"A clone is a local copy of a repository that includes all the files, branches and commits."}),"\n",(0,o.jsx)(e.p,{children:"To fork and clone a repository with the GitHub CLI, run the following command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"gh repo fork open-sauced/<REPO_NAME>\n"})}),"\n",(0,o.jsx)(e.p,{children:"The GitHub CLI will fork the project in your GitHub account and will ask you if you want to clone the repository on your local machine."}),"\n",(0,o.jsx)(e.h3,{id:"how-to-add-a-remote-repository",children:"How to Add a Remote Repository"}),"\n",(0,o.jsx)(e.p,{children:"Adding a remote repository allows you to pull in changes from the original repository and keep your forked copy of the repository up to date."}),"\n",(0,o.jsx)(e.p,{children:"To add a remote repository, run the following command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"git remote add upstream https://github.com/open-sauced/app.git\n"})}),"\n",(0,o.jsx)(e.h3,{id:"how-to-view-the-remote-repositories-locally",children:"How to View the Remote Repositories Locally"}),"\n",(0,o.jsx)(e.p,{children:"To view the remote repositories that your local repository is connected to, run the following command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"git remote -v\n"})}),"\n",(0,o.jsx)(e.p,{children:"You should see the following output:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"origin git@github.com:YOUR_GITHUB_USERNAME/app.git (fetch)\norigin git@github.com:YOUR_GITHUB_USERNAME/app.git (push)\nupstream git@github.com:open-sauced/app.git (fetch)\nupstream git@github.com:open-sauced/app.git (push)\n"})}),"\n",(0,o.jsx)(e.h2,{id:"using-the-github-website-and-the-command-line",children:"Using the GitHub Website and the Command Line"}),"\n",(0,o.jsxs)(e.p,{children:["If you prefer to set up your repository using the GitHub website and the command line, follow this detailed guide from the ",(0,o.jsx)(e.a,{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",children:"official GitHub documentation"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var o=i(6540);const n={},r=o.createContext(n);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);