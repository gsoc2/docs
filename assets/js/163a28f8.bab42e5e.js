"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[2610],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>p});var n=i(7294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},h="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=u(i),d=o,p=h["".concat(l,".").concat(d)]||h[d]||g[d]||r;return i?n.createElement(p,a(a({ref:e},c),{},{components:i})):n.createElement(p,a({ref:e},c))}));function p(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,a=new Array(r);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[h]="string"==typeof t?t:o,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7888:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=i(7462),o=(i(7294),i(3905));const r={id:"maintainers-guide-to-open-sauced",title:"Maintainers Guide to OpenSauced",sidebar_label:"Maintainers Guide to OpenSauced",keywords:["maintainers","guides"]},a=void 0,s={unversionedId:"maintainers/maintainers-guide-to-open-sauced",id:"maintainers/maintainers-guide-to-open-sauced",title:"Maintainers Guide to OpenSauced",description:"Introduction to OpenSauced for Maintainers",source:"@site/docs/maintainers/maintainers-guide.md",sourceDirName:"maintainers",slug:"/maintainers/maintainers-guide-to-open-sauced",permalink:"/maintainers/maintainers-guide-to-open-sauced",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/maintainers/maintainers-guide.md",tags:[],version:"current",lastUpdatedBy:"Ayu Adiati",lastUpdatedAt:1701980082,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"maintainers-guide-to-open-sauced",title:"Maintainers Guide to OpenSauced",sidebar_label:"Maintainers Guide to OpenSauced",keywords:["maintainers","guides"]},sidebar:"docs",previous:{title:"Connections",permalink:"/features/connections"},next:{title:"Understanding Insights Data",permalink:"/maintainers/understanding-insights"}},l={},u=[{value:"Introduction to OpenSauced for Maintainers",id:"introduction-to-opensauced-for-maintainers",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Insights: Connecting Your Repositories",id:"insights-connecting-your-repositories",level:2},{value:"Creating a New Insight Page",id:"creating-a-new-insight-page",level:3},{value:"Using Your Insights Page",id:"using-your-insights-page",level:3},{value:"Reports",id:"reports",level:4},{value:"Repositories",id:"repositories",level:4},{value:"Contributors",id:"contributors",level:4},{value:"Lists: Connecting with Contributors",id:"lists-connecting-with-contributors",level:2},{value:"Why Create a List?",id:"why-create-a-list",level:3},{value:"Creating a New List",id:"creating-a-new-list",level:3},{value:"Using Your List",id:"using-your-list",level:2},{value:"Overview",id:"overview",level:3},{value:"Activity",id:"activity",level:3},{value:"Contributors",id:"contributors-1",level:3},{value:"Highlights: Connecting and Recognizing Contributions",id:"highlights-connecting-and-recognizing-contributions",level:2},{value:"Creating a New Highlight",id:"creating-a-new-highlight",level:3},{value:"Writing an Effective Highlight",id:"writing-an-effective-highlight",level:3},{value:"Highlighting Issues",id:"highlighting-issues",level:4},{value:"Highlighting PRs",id:"highlighting-prs",level:4},{value:"Highlighting Dev.to Blog Posts",id:"highlighting-devto-blog-posts",level:4}],c={toc:u},h="wrapper";function g(t){let{components:e,...r}=t;return(0,o.kt)(h,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-opensauced-for-maintainers"},"Introduction to OpenSauced for Maintainers"),(0,o.kt)("p",null,"OpenSauced is a platform dedicated to empowering maintainers and redefining open source contributions. We offer a GitHub-powered dashboard for tracking contributions and gaining insights into your open source projects. You can customize your Insights Pages and Lists with the repositories you choose and the contributors you want to see."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To get started, you will need to create an account on OpenSauced. You can do this by visiting the ",(0,o.kt)("a",{parentName:"p",href:"https://app.opensauced.pizza"},"app.opensauced.pizza"),' and clicking the "Connect with GitHub" button. You will be prompted to sign in with your GitHub account. Once you have signed in, you will be redirected to the OpenSauced dashboard.'),(0,o.kt)("h2",{id:"insights-connecting-your-repositories"},"Insights: Connecting Your Repositories"),(0,o.kt)("p",null,"OpenSauced Insights provides maintainers with a visual representation of their project's health and contributor engagement. It offers real-time data and analytics to understand contribution patterns, identify key contributors, and measure the project's growth. Insights can help you assess team activity, understand when bottlenecks occur, identify where resource allocation is needed, plan and identify key contributors, understand alumni contributors, or spot emerging trends."),(0,o.kt)("p",null,"Insights features allow you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"track the contributions of a specific team, a specific repository, or a group of repositories,"),(0,o.kt)("li",{parentName:"ul"},"view the number of pull requests that are open, closed, in draft, and merged,"),(0,o.kt)("li",{parentName:"ul"},"view the average number of days it takes for a pull request to be merged (PR velocity),"),(0,o.kt)("li",{parentName:"ul"},"identify the top contributors to your project,"),(0,o.kt)("li",{parentName:"ul"},"identify the current activity level and trends in activity of your contributors.")),(0,o.kt)("h3",{id:"creating-a-new-insight-page"},"Creating a New Insight Page"),(0,o.kt)("p",null,'To connect your repositories, click the "Insights" tab on the dashboard. You will be redirected to a page where you can create your new Insight Page.'),(0,o.kt)("p",null,"There are two ways to add repositories to your Insight Page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sync GitHub organization"),". Syncing your GitHub organization is a good idea for someone who seeks a comprehensive, unified view of your organization's open source project activities and trends, enabling streamlined management, strategic decision-making, and efficient allocation of resources across multiple repositories."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Connect individual repositories"),". Connecting individual repositories is a good idea for someone who wants to track the contributions of a specific repository or group of repositories. For example, you might want to track projects you maintain that are not under the same organization, or you may want to track projects that align with your team's objectives.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sync team gif",src:i(2615).Z,width:"1174",height:"948"})),(0,o.kt)("h3",{id:"using-your-insights-page"},"Using Your Insights Page"),(0,o.kt)("p",null,"Once you have connected your repositories, you will be redirected to your Insight Page. Here, you will see a dashboard with an overview of the repositories and the contributors who have contributed to them."),(0,o.kt)("p",null,"There are three tabs that provide you with more information on these repositories:"),(0,o.kt)("h4",{id:"reports"},"Reports"),(0,o.kt)("p",null,"The Reports tab allows paid users to filter for more information about their repositories over the last 30 days and to generate a Downloadable CSV. Filters include: Top 100 Repos, Minimum 5 Contributors, Recent, Most Active, and Spammed."),(0,o.kt)("h4",{id:"repositories"},"Repositories"),(0,o.kt)("p",null,"The Repositories tab allows you to view more detailed information on each repository, including Activity, PR Overview, PR Velocity, Spam, Contributors, and activity over the last 30 days. To learn more about these features, see ",(0,o.kt)("a",{parentName:"p",href:"/maintainers/understanding-insights"},"Understanding Insights Data"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repositories tab",src:i(7224).Z,width:"1148",height:"796"})),(0,o.kt)("h4",{id:"contributors"},"Contributors"),(0,o.kt)("p",null,"The Contributors tab allows you to view more detailed information on each contributor, including Activity, Repositories, the date of their last contribution, Time Zone, and the number of contributions."),(0,o.kt)("p",null,"To learn more about your contributors, you can select them and add them to a list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"contributors insight list",src:i(8967).Z,width:"1212",height:"628"})),(0,o.kt)("p",null,"There are two ways to add contributors to a list:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new list with selected contributors."),(0,o.kt)("li",{parentName:"ol"},"Add selected contributors to an existing list.")),(0,o.kt)("h2",{id:"lists-connecting-with-contributors"},"Lists: Connecting with Contributors"),(0,o.kt)("p",null,"OpenSauced Lists feature allows you to categorize, monitor, and analyze various groups of contributors. You can use Lists to track the contributions of a specific team, a specific repository, or a group of repositories. This feature offers granular insights into each contributor's activities and contributions, helping maintainers to track individual contribution histories, identify active engagement, recognize new or alumni contributors, and compare the performance of different contributors."),(0,o.kt)("p",null,"The Lists features allow you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"track the commits and PRs of the contributors on your list,"),(0,o.kt)("li",{parentName:"ul"},"filter your contributors by their activity level, including most active, new, and alumni,"),(0,o.kt)("li",{parentName:"ul"},"view the repositories that your contributors have contributed to, the top programming languages they've used, and their time zones.")),(0,o.kt)("h3",{id:"why-create-a-list"},"Why Create a List?"),(0,o.kt)("p",null,"There are many reasons to create a list, but here's some inspiration to get you started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interacting contributors"),": Keep tabs on contributors actively interacting with your repository."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Organization's developers"),": Monitor the contributions and performance of your internal team."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VIP contributors"),": Highlight and track at least five developers who are key maintainers or significant contributors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sales leads"),": Identify contributors whose engagement could potentially be turned into sales opportunities."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Potential hires"),": Observe contributors who exhibit skill and commitment, making them prime candidates for hiring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Alumni contributors"),": Keep an eye on contributors who have decreased their engagement or left the project.")),(0,o.kt)("h3",{id:"creating-a-new-list"},"Creating a New List"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click the "Lists" tab on the Insights hub to create a new list. You will be redirected to a page where you can create your new list.'),(0,o.kt)("li",{parentName:"ol"},'Click on the "New List" button to start a new list.'),(0,o.kt)("li",{parentName:"ol"},"Give your list a name."),(0,o.kt)("li",{parentName:"ol"},"Choose your page visibility. You can choose to make your list public or private. By default, it is set to private."),(0,o.kt)("li",{parentName:"ol"},"Add contributors to your list by searching for their GitHub username, syncing your GitHub Team, or importing your GitHub Following.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"team sync gif",src:i(3267).Z,width:"1218",height:"1006"})),(0,o.kt)("h2",{id:"using-your-list"},"Using Your List"),(0,o.kt)("p",null,"Once you have created your list, you will be redirected to your List Page. Here, you will see a dashboard with an overview of the contributors."),(0,o.kt)("p",null,"There are three tabs that provide you with more information on these repositories:"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Overview tab gives you a high-level view of the contributors in your list, including the total number of commits in the last 30 days and the types of contributors on your list: Active, New, and Alumni."),(0,o.kt)("h3",{id:"activity"},"Activity"),(0,o.kt)("p",null,"The Activity tab gives you a graph view with more detailed information on each contributor, including the type of activity, repositories they've contributed to, and how they compare to each other."),(0,o.kt)("p",null,"You can filter your list by All Contributors, Active Contributors, New Contributors, and Alumni Contributors."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"list graph",src:i(7392).Z,width:"1147",height:"731"})),(0,o.kt)("h3",{id:"contributors-1"},"Contributors"),(0,o.kt)("p",null,"The Contributors tab gives you the list of the contributors and includes information like activity level, last repository contributed to, the date of their last contribution, time zone, programming languages used, and number of contributions."),(0,o.kt)("p",null,"To learn more about these features, see ",(0,o.kt)("a",{parentName:"p",href:"/maintainers/understanding-lists"},"Understanding Lists Data"),"."),(0,o.kt)("h2",{id:"highlights-connecting-and-recognizing-contributions"},"Highlights: Connecting and Recognizing Contributions"),(0,o.kt)("p",null,"Leveraging OpenSauced's Highlights feature is a great way for maintainers to recognize and showcase the valuable contributions made to your open source projects, to curate and share key achievements, contributions, and milestones, and bring visibility to the hard work of your community."),(0,o.kt)("p",null,"Highlights can be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"publicize issues on your repository that you'd like to match with contributors,"),(0,o.kt)("li",{parentName:"ul"},"share Dev.to blog posts you've written,"),(0,o.kt)("li",{parentName:"ul"},"celebrate PRs for your project.")),(0,o.kt)("h3",{id:"creating-a-new-highlight"},"Creating a New Highlight"),(0,o.kt)("p",null,"There are two ways to create a new highlight:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After clicking the ",(0,o.kt)("a",{parentName:"p",href:"https://app.opensauced.pizza/feed"},"Highlights tab"),' in the top navigation, click the input that says "Post a highlight to show your work!"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'From your profile, click the input that says "Post a highlight to show your work!"'))),(0,o.kt)("p",null,"After you've clicked the input, you'll see a form that allows you to create a new highlight."),(0,o.kt)("p",null,"There are two ways to create a highlight:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Paste the URL to your PR, Issue, or Dev.to blog post (shown in blue below)."),(0,o.kt)("li",{parentName:"ol"},"Choose from a list of suggestions (shown in orange below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"highlight suggestions",src:i(4173).Z,width:"626",height:"633"})),(0,o.kt)("p",null,"If you're adding a blog post, you'll need to associate it to a repository by clicking the \"Add a repo\" button."),(0,o.kt)("p",null,"Finally, it's time to add the details of your highlight. You can add a description yourself or use the auto-summarize function to generate a description."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif of creating a highlight",src:i(7352).Z,width:"2294",height:"1066"})),(0,o.kt)("h3",{id:"writing-an-effective-highlight"},"Writing an Effective Highlight"),(0,o.kt)("p",null,"Writing an effective highlight is key to attracting contributors to your project. Here are some tips to help you write an effective highlight:"),(0,o.kt)("h4",{id:"highlighting-issues"},"Highlighting Issues"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Focus on the problem solved"),": Begin by briefly describing the problem or challenge the issue addresses. This sets the context for why it was important."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Acknowledge contributor(s)"),": Mention the contributor(s) who reported or worked on the issue, recognizing their effort."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Impact statement"),": Explain how resolving this issue benefits the project, such as improving functionality, user experience, or security.")),(0,o.kt)("h4",{id:"highlighting-prs"},"Highlighting PRs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Summarize the changes"),": Start with a clear summary of what the PR achieves. This could be a new feature, bug fix, or enhancement."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Credit the contributors"),": Acknowledge everyone who contributed to the PR, including reviewers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Highlight the value"),": Explain the value of these changes to the project or its users. For instance, how it improves performance, adds a requested feature, or simplifies the codebase.")),(0,o.kt)("h4",{id:"highlighting-devto-blog-posts"},"Highlighting Dev.to Blog Posts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Capture the essence"),": Begin with an interesting blog post summary, capturing the main theme or message."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Discuss the relevance"),": Explain why this blog post is important for your open source project or community. Is it about a major update, a community event, or sharing best practices?"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Engage with a call-to-action"),": Encourage readers to engage with the post, whether by reading, commenting, or sharing their thoughts on the topic.")))}g.isMDXComponent=!0},7352:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/highlight-e3a2da2446fe91467a31d225755bf40a.gif"},2615:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/team-sync-insights-d4d7794d5e28b72ffb375595c988cd37.gif"},3267:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/team-sync-09e7e2ab7b54fae335f5b4c40cce94b1.gif"},8967:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/contributors-insights-1bc09dd6a32c3a16eba8b63ec351157f.png"},4173:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/highlights-fcc750f036bb2ea7c11166c8338d7f6c.png"},7392:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/list-graph-a730e101fea2e18df0d76faed967f4e6.png"},7224:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/repos-insights-2db5d8c668cee2f528f47ae986d664c7.png"}}]);