"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[1568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={id:"pr-description",title:"PR Description",sidebar_label:"PR Description",keywords:["ai","pr descriptions","pull request overview","pr details","pr review description","Description Guidelines","Contribution etiquette","Pull Request Insight","PR Context","pull request description"]},a=void 0,s={unversionedId:"tools/chrome-extension/pr-description",id:"tools/chrome-extension/pr-description",title:"PR Description",description:"The OpenSauced Chrome extension will help you create a PR based on the configuration you have in the extension. It will enable you to create the summary based on either commit messages, the difference between the files, or both. You can even set the message's length and tone using the same settings.",source:"@site/docs/tools/chrome-extension/pr-description.md",sourceDirName:"tools/chrome-extension",slug:"/tools/chrome-extension/pr-description",permalink:"/tools/chrome-extension/pr-description",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/tools/chrome-extension/pr-description.md",tags:[],version:"current",lastUpdatedBy:"Christine Belzie",lastUpdatedAt:1708367294,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"pr-description",title:"PR Description",sidebar_label:"PR Description",keywords:["ai","pr descriptions","pull request overview","pr details","pr review description","Description Guidelines","Contribution etiquette","Pull Request Insight","PR Context","pull request description"]},sidebar:"docs",previous:{title:"Code Explanation",permalink:"/tools/chrome-extension/code-explanation"},next:{title:"Highlight",permalink:"/tools/chrome-extension/highlights"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OpenSauced Chrome extension will help you create a PR based on the configuration you have in the extension. It will enable you to create the summary based on either commit messages, the difference between the files, or both. You can even set the message's length and tone using the same settings."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note"),": This feature is not available on private repositories.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"generate pr description",src:n(3706).Z,width:"954",height:"405"})),(0,i.kt)("p",null,"You can use these settings to set the strictness and the tone of the generated AI. Below is the explanation of the settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description Length"),": The output length."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Temperature"),": The similarity between the input text and the output, higher temperature mean more randomness, lower temperature means more strict to the input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max Input Length.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description Language:")," Right now, this feature supports: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Korean."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description Tone:")," The tone of the output: Exciting, Persuasive, Informative, Humorous, Formal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description Source:")," The source of the description that our AI will use to get the output it can be the next: ",(0,i.kt)("strong",{parentName:"li"},"Commit Messages")," or ",(0,i.kt)("strong",{parentName:"li"},"The diff between the files")," or ",(0,i.kt)("strong",{parentName:"li"},"both"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/18273833/241760972-aa10eabe-3c01-4921-956a-ab85bada1575.png",alt:"Setting screenshot"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/open-sauced/docs.opensauced.pizza/assets/18273833/fa19fa8e-e652-461c-8df4-6e959c9b9943",alt:"ezgif-3-43e056fc1f"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/insights/pull/1197"},"Example PR"),", using the next options: both in the description source, 500 for output length and 3900 max input length, temperature 0.7."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exciting:")," This PR fixes the follow call and adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function to the ",(0,i.kt)("inlineCode",{parentName:"p"},"contributor-highlight-card"),". The code has been linted and merged from the ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," branch. ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function allows users to follow/unfollow contributors. Copy link and follow/unfollow options are now available in the dropdown menu."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Persuasive:")," This PR fixes the follow call and linting issues in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContributorHighlightCard")," component. It also merges the ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," branch into ",(0,i.kt)("inlineCode",{parentName:"p"},"fix-follow-check"),". A new ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function has been added to handle follow/unfollow functionality. This PR ensures a smoother user experience."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Informative:")," This PR fixes the follow call and linting issues in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContributorHighlightCard")," component. A new function ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," has been added to handle the follow/unfollow functionality. The ",(0,i.kt)("inlineCode",{parentName:"p"},"useFollowUser")," hook has been moved inside this function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function is now used in place of the previous follow/unfollow code block. The code has been tested and reviewed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Humorous:")," This PR fixes the follow call and also lints the file. We've also added a new ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function to make the code more readable. Now you can follow/unfollow contributors with ease. We've also merged the ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," branch into ",(0,i.kt)("inlineCode",{parentName:"p"},"fix-follow-check"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Formal:")," This PR fixes the follow call and linting issues in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContributorHighlightCard")," component. A new function ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," has been added to handle the follow/unfollow functionality. The ",(0,i.kt)("inlineCode",{parentName:"p"},"useFollowUser")," hook has been moved inside this function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FollowUser")," function is now used in place of the previous follow/unfollow code block. This PR also merges the ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," branch into ",(0,i.kt)("inlineCode",{parentName:"p"},"fix-follow-check"),"."))}d.isMDXComponent=!0},3706:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pr-description-e9b163f4d321927a53dd90d340fec85f.gif"}}]);