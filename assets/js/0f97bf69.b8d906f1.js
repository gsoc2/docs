"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[4158],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={id:"semantic-release",title:"@open-sauced/semantic-release-conventional-config",sidebar_label:"@open-sauced/semantic-release-conventional-config",keywords:["@open-sauced/semantic-release-conventional-config"]},s=void 0,r={unversionedId:"opensauced-packages/semantic-release",id:"opensauced-packages/semantic-release",title:"@open-sauced/semantic-release-conventional-config",description:"Description",source:"@site/docs/opensauced-packages/semantic-release.md",sourceDirName:"opensauced-packages",slug:"/opensauced-packages/semantic-release",permalink:"/opensauced-packages/semantic-release",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/opensauced-packages/semantic-release.md",tags:[],version:"current",lastUpdatedBy:"Jessica Wilkins",lastUpdatedAt:1702215118,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{id:"semantic-release",title:"@open-sauced/semantic-release-conventional-config",sidebar_label:"@open-sauced/semantic-release-conventional-config",keywords:["@open-sauced/semantic-release-conventional-config"]},sidebar:"docs",previous:{title:"@open-sauced/conventional-commit",permalink:"/opensauced-packages/conventional-commit"},next:{title:"Introduction",permalink:"/job-seekers-guide/job-seekers-guide-introduction"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"\ud83d\udda5\ufe0f Requirements",id:"\ufe0f-requirements",level:2},{value:"\ud83e\uddea GitHub Actions Usage",id:"-github-actions-usage",level:2},{value:"\ud83d\udce6 <code>npm</code> Usage",id:"-npm-usage",level:2},{value:"\ud83d\udd27 Configuration",id:"-configuration",level:2},{value:"<code>npm</code>",id:"npm",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Docker",id:"docker",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Workflow Examples",id:"workflow-examples",level:2},{value:"Node Application",id:"node-application",level:3},{value:"<code>npm</code> Library",id:"npm-library",level:3},{value:"Docker Image",id:"docker-image",level:3},{value:"Pre-Releases",id:"pre-releases",level:3},{value:"FAQs",id:"faqs",level:2},{value:"Which Assets are Pushed to Git?",id:"which-assets-are-pushed-to-git",level:3},{value:"What is the Commit Convention?",id:"what-is-the-commit-convention",level:3},{value:"How to Enrich the Static Distribution?",id:"how-to-enrich-the-static-distribution",level:3},{value:"How to Start Using Pre-Releases?",id:"how-to-start-using-pre-releases",level:3},{value:"Contributing",id:"contributing",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package ",(0,i.kt)("inlineCode",{parentName:"p"},"@open-sauced/semantic-release-conventional-config")," is designed to help ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," packages auto-release to ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("a",{parentName:"p",href:"https://ghcr.io"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr"))," registries while generating GitHub releases and changelog using conventional commit convention."),(0,i.kt)("p",null,"Version 2 supports alpha and beta pre-releases using corresponding branches."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"This package uses the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/commit-analyzer"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/commit-analyzer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/release-notes-generator"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/release-notes-generator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/conventional-changelog/conventional-changelog"},(0,i.kt)("inlineCode",{parentName:"a"},"@conventional-changelog/conventional-changelog"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/changelog"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/changelog"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/npm"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/npm"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/semantic-release-replace-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"@google/semantic-release-replace-plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cbhq/semantic-release-license"},(0,i.kt)("inlineCode",{parentName:"a"},"@cbhq/semantic-release-license"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/git"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/git"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/github"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/github"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclass/semantic-release-docker"},(0,i.kt)("inlineCode",{parentName:"a"},"@eclass/semantic-release-docker"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/exec"},(0,i.kt)("inlineCode",{parentName:"a"},"@semantic-release/exec"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/execa"},(0,i.kt)("inlineCode",{parentName:"a"},"execa")))),(0,i.kt)("h2",{id:"\ufe0f-requirements"},"\ud83d\udda5\ufe0f Requirements"),(0,i.kt)("p",null,"Most important limitations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," for everything"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NPM_TOKEN")," for public ",(0,i.kt)("inlineCode",{parentName:"li"},"npm")," library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker")," containers need to be built beforehand")),(0,i.kt)("p",null,"You can skip here if you are using an elevated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Private Access Token"),". However, we don't recommend going down that path."),(0,i.kt)("p",null,"No force push or admin cherries branch protections for the following branches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main")," - required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alpha")," - optional, pre-release branch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beta")," - optional, pre-release branch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," - optional, next channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next-major")," - optional, next major"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vX[.X.X]")," - maintenance releases")),(0,i.kt)("p",null,"If you use more than the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch, optionally create an environment that limits where pushes can come from and enable the merge strategy."),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," in our examples; if you copy-paste them, you will find this new environment generated in your settings! \ud83c\udf55"),(0,i.kt)("h2",{id:"-github-actions-usage"},"\ud83e\uddea GitHub Actions Usage"),(0,i.kt)("p",null,"Since version 3, it has been possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"semantic-release")," without any trace of it or the OpenSauced configuration anywhere in the dependency tree."),(0,i.kt)("p",null,"Docker containers are pushed as part of the release, so they mirror the availability of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," packages."),(0,i.kt)("p",null,"The simplest use case for a typical ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package is almost zero install downtime from ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr")," and no more local tooling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Release container"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n\n      - name: "\u267b\ufe0f cleanup"\n        run: |\n          echo ${{ env.RELEASE_TAG }}\n          echo ${{ env.RELEASE_VERSION }}\n')),(0,i.kt)("p",null,"Marketplace actions should default to the major tag and are essentially more stable as we have to curate every release."),(0,i.kt)("p",null,"A more traditional approach, the only thing really different here is a minor pull overhead and using set outputs instead of environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ steps.semantic-release.outputs.release-tag }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: open-sauced/semantic-release-conventional-config@v3\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n\n      - name: "\u267b\ufe0f cleanup"\n        run: |\n          echo ${{ steps.semantic-release.outputs.release-tag }}\n          echo ${{ steps.semantic-release.outputs.release-version }}\n')),(0,i.kt)("h2",{id:"-npm-usage"},"\ud83d\udce6 ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm")," Usage"),(0,i.kt)("p",null,"You can opt to use this package in your local tooling. Proceed as you would normally would, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," with your package manager of choice and install the package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @open-sauced/semantic-release-conventional-config\n")),(0,i.kt)("p",null,"The shareable config can then be configured in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration"}," ",(0,i.kt)("inlineCode",{parentName:"a"},"semantic-release")," configuration file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@open-sauced/semantic-release-conventional-config"\n}\n')),(0,i.kt)("p",null,"Now, all you need to do is create a release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx semantic-release\n")),(0,i.kt)("h2",{id:"-configuration"},"\ud83d\udd27 Configuration"),(0,i.kt)("p",null,"See each plugin official documentation for the required installation and configuration steps."),(0,i.kt)("h3",{id:"npm"},(0,i.kt)("inlineCode",{parentName:"h3"},"npm")),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," to true in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," if you want to disable ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or change the scope of package using ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,i.kt)("p",null,"Keep one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," keys in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," accurate, depending on whether you are building a library or an application."),(0,i.kt)("p",null,"If you publish, make sure to also provide a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"NPM_TOKEN"),", as ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," authentication is ignored in our config!"),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"Unless you have an ",(0,i.kt)("inlineCode",{parentName:"p"},"action.yml")," present in your root folder, this module is not added to the release config."),(0,i.kt)("p",null,"If you have an ",(0,i.kt)("inlineCode",{parentName:"p"},"action.yml")," present, our config will attempt to adjust the container version to the newly pushed ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," tags."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Unless you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," present in your root folder, this module is not added to the release config."),(0,i.kt)("p",null,"If you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," present, our config will attempt to push to ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io"),"."),(0,i.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Using our configuration comes with some sensible defaults:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOCKER_USERNAME=$GITHUB_REPOSITORY_OWNER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOCKER_PASSWORD=$GITHUB_TOKEN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'GIT_COMMITTER_NAME="open-sauced[bot]"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'GIT_COMMITTER_EMAIL="63161813+open-sauced[bot]@users.noreply.github.com"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GIT_AUTHOR_NAME")," - parsed from commit ",(0,i.kt)("inlineCode",{parentName:"li"},"$GITHUB_SHA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GIT_AUTHOR_EMAIL")," - parsed from commit ",(0,i.kt)("inlineCode",{parentName:"li"},"$GITHUB_SHA"))),(0,i.kt)("p",null,"Feel free to change any of the above to whatever suits your purpose. Our motivation is to keep ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"NPM_TOKEN")," the only necessary requirements."),(0,i.kt)("p",null,"We are actively investigating ways to drop the two remaining variables as well!"),(0,i.kt)("h2",{id:"workflow-examples"},"Workflow Examples"),(0,i.kt)("h3",{id:"node-application"},"Node Application"),(0,i.kt)("p",null,"This example requires ",(0,i.kt)("inlineCode",{parentName:"p"},'"private": true,')," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and simplifies the workflow to lightning-fast deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'release:\n  environment:\n    name: production\n    url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n  name: Semantic release\n  runs-on: ubuntu-latest\n  steps:\n    - name: "\u2601\ufe0f checkout repository"\n      uses: actions/checkout@v2\n      with:\n        fetch-depth: 0\n\n    - name: "\ud83d\udd27 setup node"\n      uses: actions/setup-node@v2.1.5\n      with:\n        node-version: 16\n\n    - name: "\ud83d\udd27 install npm@latest"\n      run: npm i -g npm@latest\n\n    - name: "\ud83d\udce6 install dependencies"\n      uses: bahmutov/npm-install@v1\n\n    - name: "\ud83d\ude80 static app"\n      run: npm run build\n\n    - name: "\ud83d\ude80 release"\n      id: semantic-release\n      uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n      env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,i.kt)("h3",{id:"npm-library"},(0,i.kt)("inlineCode",{parentName:"h3"},"npm")," Library"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," libraries, we need to set the environment URL manually and set a ",(0,i.kt)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable. This also disables ",(0,i.kt)("inlineCode",{parentName:"p"},"docker builds"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: npm\n      url: https://www.npmjs.com/package/@open-sauced/semantic-release-conventional-config/v/${{ env.RELEASE_VERSION }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\udd27 setup node"\n        uses: actions/setup-node@v2.1.5\n        with:\n          node-version: 16\n\n      - name: "\ud83d\udd27 install npm@latest"\n        run: npm i -g npm@latest\n\n      - name: "\ud83d\udce6 install dependencies"\n        uses: bahmutov/npm-install@v1\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n')),(0,i.kt)("p",null,"An up-to-date version of the example above is available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/semantic-release-conventional-config/blob/main/.github/workflows/release.yml"},"@open-sauced/semantic-release-conventional-config"),"."),(0,i.kt)("h3",{id:"docker-image"},"Docker Image"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"docker builds"),", it's best to build your node application in parallel with the container and re-use the artifact at a later stage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  docker:\n    name: Build container\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n\n      - name: "\ud83d\udd27 setup buildx"\n        uses: docker/setup-buildx-action@v1\n\n      - name: "\ud83d\udd27 cache docker layers"\n        uses: actions/cache@v2\n        with:\n          path: /tmp/.buildx-cache\n          key: ${{ runner.os }}-buildx-${{ github.sha }}\n          restore-keys: |\n            ${{ runner.os }}-buildx-\n\n      - name: "\ud83d\udd27 docker meta"\n        id: meta\n        uses: docker/metadata-action@v3\n        with:\n          images: ${{ github.repository }}\n          tags: latest\n\n      - name: "\ud83d\udce6 docker build"\n        uses: docker/build-push-action@v2\n        with:\n          context: .\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n          outputs: type=docker,dest=/tmp/docker.tar\n          push: false\n          cache-from: type=gha, scope=${{ github.workflow }}\n          cache-to: type=gha, scope=${{ github.workflow }}\n\n      - name: "\ud83d\udcc2 docker artifacts"\n        uses: actions/upload-artifact@v2\n        with:\n          name: docker\n          path: /tmp/docker.tar\n\n  build:\n    name: Build application\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n\n      - name: "\ud83d\udd27 setup node"\n        uses: actions/setup-node@v2.1.5\n        with:\n          node-version: 16\n\n      - name: "\ud83d\udd27 install npm@latest"\n        run: npm i -g npm@latest\n\n      - name: "\ud83d\udce6 install dependencies"\n        uses: bahmutov/npm-install@v1\n\n      - name: "\ud83d\udcca repository visualizer"\n        id: diagram\n        uses: githubocto/repo-visualizer@0.7.1\n        with:\n          excluded_paths: "node_modules,build,.storybook,.netlify,.github,npm-shrinkwap.json"\n          output_file: "public/diagram.svg"\n          should_push: false\n          artifact_name: "diagram"\n\n      - name: "\ud83d\ude80 static app"\n        run: npm run build\n\n      - name: "\ud83d\udcc2 production artifacts"\n        uses: actions/upload-artifact@v2\n        with:\n          name: build\n          path: build\n\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n    name: Semantic release\n    needs:\n      - docker\n      - build\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\udcc2 download docker artifacts"\n        uses: actions/download-artifact@v2\n        with:\n          name: docker\n          path: /tmp\n\n      - name: "\ud83d\udce6 load tag"\n        run: |\n          docker load --input /tmp/docker.tar\n          docker image ls -a\n\n      - name: "\ud83d\udcc2 download build artifacts"\n        uses: actions/download-artifact@v2\n        with:\n          name: build\n          path: /tmp/build\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n\n  cleanup:\n    name: Cleanup actions\n    needs:\n      - release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u267b\ufe0f remove build artifacts"\n        uses: geekyeggo/delete-artifact@v1\n        with:\n          name: |\n            build\n            docker\n')),(0,i.kt)("p",null,"An up-to-date version of the example above is available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml"},"open-sauced/open-sauced"),"."),(0,i.kt)("h3",{id:"pre-releases"},"Pre-Releases"),(0,i.kt)("p",null,"This workflow requires the creation of ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," protected branches while templating every commit to be conventional. It does not support squashing without creating extremely complex conflict resolution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n      - beta\n      - alpha\n\njobs:\n  release:\n    environment:\n      name: npm\n      url: https://www.npmjs.com/package/open-sauced-semantic-config-test/v/${{ steps.release.outputs.version }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n')),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("h3",{id:"which-assets-are-pushed-to-git"},"Which Assets are Pushed to Git?"),(0,i.kt)("p",null,"The following assets are added to git using ",(0,i.kt)("inlineCode",{parentName:"p"},"@semantic-release/git"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "assets": [\n    "LICENSE",\n    "LICENSE.md",\n    "COPYING",\n    "COPYING.md",\n    "CHANGELOG.md",\n    "package.json",\n    "package-lock.json",\n    "npm-shrinkwrap.json",\n    "public/diagram.svg",\n    "action.yml"\n  ]\n}\n')),(0,i.kt)("h3",{id:"what-is-the-commit-convention"},"What is the Commit Convention?"),(0,i.kt)("p",null,"The following commit rules are enforced by ",(0,i.kt)("inlineCode",{parentName:"p"},"@semantic-release/commit-analyzer"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "conventionalcommits",\n  "releaseRules": [\n    { "type": "build", "release": "minor" },\n    { "type": "ci", "release": "patch" },\n    { "type": "docs", "release": "minor" },\n    { "type": "style", "release": "patch" },\n    { "type": "refactor", "release": "patch" },\n    { "type": "test", "release": "patch" },\n    { "type": "revert", "release": "patch" },\n    { "type": "chore", "release": false }\n  ],\n  "parserOpts": {\n    "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]\n  }\n}\n')),(0,i.kt)("h3",{id:"how-to-enrich-the-static-distribution"},"How to Enrich the Static Distribution?"),(0,i.kt)("p",null,"The following assets are packed into the github release download using ",(0,i.kt)("inlineCode",{parentName:"p"},"@semantic-release/github"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "assets": [\n    {\n      "path": "pack/*.tgz",\n      "label": "Static distribution"\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"how-to-start-using-pre-releases"},"How to Start Using Pre-Releases?"),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," branches and protect them from being deleted or pushed directly by non-administrators."),(0,i.kt)("p",null,"Switch your branching strategy to ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," and enable conventional commits checking."),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release/tree/master/docs/recipes"},"semantic-releases recipes"),", you will have to resolve merge conflicts between ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beta"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branches."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We're always happy to onboard people into open source!"),(0,i.kt)("p",null,"Check out the repository at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/semantic-release-conventional-config"},"@open-sauced/semantic-release-conventional-config"),". \u2764\ufe0f"))}m.isMDXComponent=!0}}]);