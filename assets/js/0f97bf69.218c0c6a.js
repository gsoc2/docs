"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[5234],{6658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=s(4848),i=s(8453);const t={id:"semantic-release",title:"@open-sauced/semantic-release-conventional-config",sidebar_label:"@open-sauced/semantic-release-conventional-config",keywords:["semantic release"]},c=void 0,o={id:"opensauced-packages/semantic-release",title:"@open-sauced/semantic-release-conventional-config",description:"Description",source:"@site/docs/opensauced-packages/semantic-release.md",sourceDirName:"opensauced-packages",slug:"/opensauced-packages/semantic-release",permalink:"/opensauced-packages/semantic-release",draft:!1,unlisted:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/opensauced-packages/semantic-release.md",tags:[],version:"current",lastUpdatedBy:"Shubham Tiwari",lastUpdatedAt:1716815651e3,frontMatter:{id:"semantic-release",title:"@open-sauced/semantic-release-conventional-config",sidebar_label:"@open-sauced/semantic-release-conventional-config",keywords:["semantic release"]},sidebar:"docs",previous:{title:"@open-sauced/conventional-commit",permalink:"/opensauced-packages/conventional-commit"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"\ud83d\udda5\ufe0f Requirements",id:"\ufe0f-requirements",level:2},{value:"\ud83e\uddea GitHub Actions Usage",id:"-github-actions-usage",level:2},{value:"\ud83d\udce6 <code>npm</code> Usage",id:"-npm-usage",level:2},{value:"\ud83d\udd27 Configuration",id:"-configuration",level:2},{value:"<code>npm</code>",id:"npm",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Docker",id:"docker",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Workflow Examples",id:"workflow-examples",level:2},{value:"Node Application",id:"node-application",level:3},{value:"<code>npm</code> Library",id:"npm-library",level:3},{value:"Docker Image",id:"docker-image",level:3},{value:"Pre-Releases",id:"pre-releases",level:3},{value:"FAQs",id:"faqs",level:2},{value:"Which Assets are Pushed to Git?",id:"which-assets-are-pushed-to-git",level:3},{value:"What is the Commit Convention?",id:"what-is-the-commit-convention",level:3},{value:"How to Enrich the Static Distribution?",id:"how-to-enrich-the-static-distribution",level:3},{value:"How to Start Using Pre-Releases?",id:"how-to-start-using-pre-releases",level:3},{value:"Contributing",id:"contributing",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"npm"})," package ",(0,a.jsx)(n.code,{children:"@open-sauced/semantic-release-conventional-config"})," is designed to help ",(0,a.jsx)(n.code,{children:"npm"})," packages auto-release to ",(0,a.jsx)(n.code,{children:"npm"})," or ",(0,a.jsx)(n.a,{href:"https://ghcr.io",children:(0,a.jsx)(n.code,{children:"ghcr"})})," registries while generating GitHub releases and changelog using conventional commit convention."]}),"\n",(0,a.jsx)(n.p,{children:"Version 2 supports alpha and beta pre-releases using corresponding branches."}),"\n",(0,a.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"This package uses the following modules:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/commit-analyzer",children:(0,a.jsx)(n.code,{children:"@semantic-release/commit-analyzer"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/release-notes-generator",children:(0,a.jsx)(n.code,{children:"@semantic-release/release-notes-generator"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/conventional-changelog/conventional-changelog",children:(0,a.jsx)(n.code,{children:"@conventional-changelog/conventional-changelog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/changelog",children:(0,a.jsx)(n.code,{children:"@semantic-release/changelog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/npm",children:(0,a.jsx)(n.code,{children:"@semantic-release/npm"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/google/semantic-release-replace-plugin",children:(0,a.jsx)(n.code,{children:"@google/semantic-release-replace-plugin"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/cbhq/semantic-release-license",children:(0,a.jsx)(n.code,{children:"@cbhq/semantic-release-license"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/git",children:(0,a.jsx)(n.code,{children:"@semantic-release/git"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/github",children:(0,a.jsx)(n.code,{children:"@semantic-release/github"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/eclass/semantic-release-docker",children:(0,a.jsx)(n.code,{children:"@eclass/semantic-release-docker"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/exec",children:(0,a.jsx)(n.code,{children:"@semantic-release/exec"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/sindresorhus/execa",children:(0,a.jsx)(n.code,{children:"execa"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\ufe0f-requirements",children:"\ud83d\udda5\ufe0f Requirements"}),"\n",(0,a.jsx)(n.p,{children:"Most important limitations are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GITHUB_TOKEN"})," for everything"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NPM_TOKEN"})," for public ",(0,a.jsx)(n.code,{children:"npm"})," library"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"docker"})," containers need to be built beforehand"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can skip here if you are using an elevated ",(0,a.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",children:"Private Access Token"}),". However, we don't recommend going down that path."]}),"\n",(0,a.jsx)(n.p,{children:"No force push or admin cherries branch protections for the following branches:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"main"})," - required"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alpha"})," - optional, pre-release branch"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"beta"})," - optional, pre-release branch"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"next"})," - optional, next channel"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"next-major"})," - optional, next major"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"vX[.X.X]"})," - maintenance releases"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you use more than the ",(0,a.jsx)(n.code,{children:"main"})," branch, optionally create an environment that limits where pushes can come from and enable the merge strategy."]}),"\n",(0,a.jsxs)(n.p,{children:["We use ",(0,a.jsx)(n.code,{children:"production"})," in our examples; if you copy-paste them, you will find this new environment generated in your settings! \ud83c\udf55"]}),"\n",(0,a.jsx)(n.h2,{id:"-github-actions-usage",children:"\ud83e\uddea GitHub Actions Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Since version 3, it has been possible to use ",(0,a.jsx)(n.code,{children:"semantic-release"})," without any trace of it or the OpenSauced configuration anywhere in the dependency tree."]}),"\n",(0,a.jsxs)(n.p,{children:["Docker containers are pushed as part of the release, so they mirror the availability of ",(0,a.jsx)(n.code,{children:"npm"})," packages."]}),"\n",(0,a.jsxs)(n.p,{children:["The simplest use case for a typical ",(0,a.jsx)(n.code,{children:"npm"})," package is almost zero install downtime from ",(0,a.jsx)(n.code,{children:"ghcr"})," and no more local tooling:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Release container"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n\n      - name: "\u267b\ufe0f cleanup"\n        run: |\n          echo ${{ env.RELEASE_TAG }}\n          echo ${{ env.RELEASE_VERSION }}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Marketplace actions should default to the major tag and are essentially more stable as we have to curate every release."}),"\n",(0,a.jsx)(n.p,{children:"A more traditional approach, the only thing really different here is a minor pull overhead and using set outputs instead of environment variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ steps.semantic-release.outputs.release-tag }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: open-sauced/semantic-release-conventional-config@v3\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n\n      - name: "\u267b\ufe0f cleanup"\n        run: |\n          echo ${{ steps.semantic-release.outputs.release-tag }}\n          echo ${{ steps.semantic-release.outputs.release-version }}\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"-npm-usage",children:["\ud83d\udce6 ",(0,a.jsx)(n.code,{children:"npm"})," Usage"]}),"\n",(0,a.jsxs)(n.p,{children:["You can opt to use this package in your local tooling. Proceed as you would normally would, replacing ",(0,a.jsx)(n.code,{children:"npm"})," with your package manager of choice and install the package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @open-sauced/semantic-release-conventional-config\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The shareable config can then be configured in the ",(0,a.jsxs)(n.a,{href:"https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration",children:[" ",(0,a.jsx)(n.code,{children:"semantic-release"})," configuration file"]}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "@open-sauced/semantic-release-conventional-config"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now, all you need to do is create a release:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npx semantic-release\n"})}),"\n",(0,a.jsx)(n.h2,{id:"-configuration",children:"\ud83d\udd27 Configuration"}),"\n",(0,a.jsx)(n.p,{children:"See each plugin official documentation for the required installation and configuration steps."}),"\n",(0,a.jsx)(n.h3,{id:"npm",children:(0,a.jsx)(n.code,{children:"npm"})}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"private"})," to true in ",(0,a.jsx)(n.code,{children:"package.json"})," if you want to disable ",(0,a.jsx)(n.code,{children:"npm"})," or change the scope of package using ",(0,a.jsx)(n.code,{children:"publishConfig"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Keep one of the ",(0,a.jsx)(n.code,{children:"files"})," or ",(0,a.jsx)(n.code,{children:"main"})," keys in your ",(0,a.jsx)(n.code,{children:"package.json"})," accurate, depending on whether you are building a library or an application."]}),"\n",(0,a.jsxs)(n.p,{children:["If you publish, make sure to also provide a valid ",(0,a.jsx)(n.code,{children:"NPM_TOKEN"}),", as ",(0,a.jsx)(n.code,{children:".npmrc"})," authentication is ignored in our config!"]}),"\n",(0,a.jsx)(n.h3,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,a.jsxs)(n.p,{children:["Unless you have an ",(0,a.jsx)(n.code,{children:"action.yml"})," present in your root folder, this module is not added to the release config."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have an ",(0,a.jsx)(n.code,{children:"action.yml"})," present, our config will attempt to adjust the container version to the newly pushed ",(0,a.jsx)(n.code,{children:"npm"})," and ",(0,a.jsx)(n.code,{children:"docker"})," tags."]}),"\n",(0,a.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,a.jsxs)(n.p,{children:["Unless you have a ",(0,a.jsx)(n.code,{children:"Dockerfile"})," present in your root folder, this module is not added to the release config."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have a ",(0,a.jsx)(n.code,{children:"Dockerfile"})," present, our config will attempt to push to ",(0,a.jsx)(n.code,{children:"ghcr.io"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,a.jsx)(n.p,{children:"Using our configuration comes with some sensible defaults:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DOCKER_USERNAME=$GITHUB_REPOSITORY_OWNER"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DOCKER_PASSWORD=$GITHUB_TOKEN"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'GIT_COMMITTER_NAME="open-sauced[bot]"'})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'GIT_COMMITTER_EMAIL="63161813+open-sauced[bot]@users.noreply.github.com"'})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GIT_AUTHOR_NAME"})," - parsed from commit ",(0,a.jsx)(n.code,{children:"$GITHUB_SHA"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GIT_AUTHOR_EMAIL"})," - parsed from commit ",(0,a.jsx)(n.code,{children:"$GITHUB_SHA"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Feel free to change any of the above to whatever suits your purpose. Our motivation is to keep ",(0,a.jsx)(n.code,{children:"GITHUB_TOKEN"})," and/or ",(0,a.jsx)(n.code,{children:"NPM_TOKEN"})," the only necessary requirements."]}),"\n",(0,a.jsx)(n.p,{children:"We are actively investigating ways to drop the two remaining variables as well!"}),"\n",(0,a.jsx)(n.h2,{id:"workflow-examples",children:"Workflow Examples"}),"\n",(0,a.jsx)(n.h3,{id:"node-application",children:"Node Application"}),"\n",(0,a.jsxs)(n.p,{children:["This example requires ",(0,a.jsx)(n.code,{children:'"private": true,'})," in your ",(0,a.jsx)(n.code,{children:"package.json"})," and simplifies the workflow to lightning-fast deployment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'release:\n  environment:\n    name: production\n    url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n  name: Semantic release\n  runs-on: ubuntu-latest\n  steps:\n    - name: "\u2601\ufe0f checkout repository"\n      uses: actions/checkout@v2\n      with:\n        fetch-depth: 0\n\n    - name: "\ud83d\udd27 setup node"\n      uses: actions/setup-node@v2.1.5\n      with:\n        node-version: 16\n\n    - name: "\ud83d\udd27 install npm@latest"\n      run: npm i -g npm@latest\n\n    - name: "\ud83d\udce6 install dependencies"\n      uses: bahmutov/npm-install@v1\n\n    - name: "\ud83d\ude80 static app"\n      run: npm run build\n\n    - name: "\ud83d\ude80 release"\n      id: semantic-release\n      uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n      env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"npm-library",children:[(0,a.jsx)(n.code,{children:"npm"})," Library"]}),"\n",(0,a.jsxs)(n.p,{children:["For ",(0,a.jsx)(n.code,{children:"npm"})," libraries, we need to set the environment URL manually and set a ",(0,a.jsx)(n.code,{children:"NPM_TOKEN"})," environment variable. This also disables ",(0,a.jsx)(n.code,{children:"docker builds"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release:\n    environment:\n      name: npm\n      url: https://www.npmjs.com/package/@open-sauced/semantic-release-conventional-config/v/${{ env.RELEASE_VERSION }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\udd27 setup node"\n        uses: actions/setup-node@v2.1.5\n        with:\n          node-version: 16\n\n      - name: "\ud83d\udd27 install npm@latest"\n        run: npm i -g npm@latest\n\n      - name: "\ud83d\udce6 install dependencies"\n        uses: bahmutov/npm-install@v1\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["An up-to-date version of the example above is available at ",(0,a.jsx)(n.a,{href:"https://github.com/open-sauced/semantic-release-conventional-config/blob/main/.github/workflows/release.yml",children:"@open-sauced/semantic-release-conventional-config"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"docker-image",children:"Docker Image"}),"\n",(0,a.jsxs)(n.p,{children:["For ",(0,a.jsx)(n.code,{children:"docker builds"}),", it's best to build your node application in parallel with the container and re-use the artifact at a later stage:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  docker:\n    name: Build container\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n\n      - name: "\ud83d\udd27 setup buildx"\n        uses: docker/setup-buildx-action@v1\n\n      - name: "\ud83d\udd27 cache docker layers"\n        uses: actions/cache@v2\n        with:\n          path: /tmp/.buildx-cache\n          key: ${{ runner.os }}-buildx-${{ github.sha }}\n          restore-keys: |\n            ${{ runner.os }}-buildx-\n\n      - name: "\ud83d\udd27 docker meta"\n        id: meta\n        uses: docker/metadata-action@v3\n        with:\n          images: ${{ github.repository }}\n          tags: latest\n\n      - name: "\ud83d\udce6 docker build"\n        uses: docker/build-push-action@v2\n        with:\n          context: .\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n          outputs: type=docker,dest=/tmp/docker.tar\n          push: false\n          cache-from: type=gha, scope=${{ github.workflow }}\n          cache-to: type=gha, scope=${{ github.workflow }}\n\n      - name: "\ud83d\udcc2 docker artifacts"\n        uses: actions/upload-artifact@v2\n        with:\n          name: docker\n          path: /tmp/docker.tar\n\n  build:\n    name: Build application\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n\n      - name: "\ud83d\udd27 setup node"\n        uses: actions/setup-node@v2.1.5\n        with:\n          node-version: 16\n\n      - name: "\ud83d\udd27 install npm@latest"\n        run: npm i -g npm@latest\n\n      - name: "\ud83d\udce6 install dependencies"\n        uses: bahmutov/npm-install@v1\n\n      - name: "\ud83d\udcca repository visualizer"\n        id: diagram\n        uses: githubocto/repo-visualizer@0.7.1\n        with:\n          excluded_paths: "node_modules,build,.storybook,.netlify,.github,npm-shrinkwap.json"\n          output_file: "public/diagram.svg"\n          should_push: false\n          artifact_name: "diagram"\n\n      - name: "\ud83d\ude80 static app"\n        run: npm run build\n\n      - name: "\ud83d\udcc2 production artifacts"\n        uses: actions/upload-artifact@v2\n        with:\n          name: build\n          path: build\n\n  release:\n    environment:\n      name: production\n      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}\n    name: Semantic release\n    needs:\n      - docker\n      - build\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\udcc2 download docker artifacts"\n        uses: actions/download-artifact@v2\n        with:\n          name: docker\n          path: /tmp\n\n      - name: "\ud83d\udce6 load tag"\n        run: |\n          docker load --input /tmp/docker.tar\n          docker image ls -a\n\n      - name: "\ud83d\udcc2 download build artifacts"\n        uses: actions/download-artifact@v2\n        with:\n          name: build\n          path: /tmp/build\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n\n  cleanup:\n    name: Cleanup actions\n    needs:\n      - release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u267b\ufe0f remove build artifacts"\n        uses: geekyeggo/delete-artifact@v1\n        with:\n          name: |\n            build\n            docker\n'})}),"\n",(0,a.jsxs)(n.p,{children:["An up-to-date version of the example above is available at ",(0,a.jsx)(n.a,{href:"https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml",children:"open-sauced/open-sauced"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"pre-releases",children:"Pre-Releases"}),"\n",(0,a.jsxs)(n.p,{children:["This workflow requires the creation of ",(0,a.jsx)(n.code,{children:"alpha"})," and ",(0,a.jsx)(n.code,{children:"beta"})," protected branches while templating every commit to be conventional. It does not support squashing without creating extremely complex conflict resolution:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Release"\n\non:\n  push:\n    branches:\n      - main\n      - beta\n      - alpha\n\njobs:\n  release:\n    environment:\n      name: npm\n      url: https://www.npmjs.com/package/open-sauced-semantic-config-test/v/${{ steps.release.outputs.version }}\n    name: Semantic release\n    runs-on: ubuntu-latest\n    steps:\n      - name: "\u2601\ufe0f checkout repository"\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: "\ud83d\ude80 release"\n        id: semantic-release\n        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,a.jsx)(n.h3,{id:"which-assets-are-pushed-to-git",children:"Which Assets are Pushed to Git?"}),"\n",(0,a.jsxs)(n.p,{children:["The following assets are added to git using ",(0,a.jsx)(n.code,{children:"@semantic-release/git"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "assets": [\n    "LICENSE",\n    "LICENSE.md",\n    "COPYING",\n    "COPYING.md",\n    "CHANGELOG.md",\n    "package.json",\n    "package-lock.json",\n    "npm-shrinkwrap.json",\n    "public/diagram.svg",\n    "action.yml"\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-commit-convention",children:"What is the Commit Convention?"}),"\n",(0,a.jsxs)(n.p,{children:["The following commit rules are enforced by ",(0,a.jsx)(n.code,{children:"@semantic-release/commit-analyzer"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "conventionalcommits",\n  "releaseRules": [\n    { "type": "build", "release": "minor" },\n    { "type": "ci", "release": "patch" },\n    { "type": "docs", "release": "minor" },\n    { "type": "style", "release": "patch" },\n    { "type": "refactor", "release": "patch" },\n    { "type": "test", "release": "patch" },\n    { "type": "revert", "release": "patch" },\n    { "type": "chore", "release": false }\n  ],\n  "parserOpts": {\n    "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"how-to-enrich-the-static-distribution",children:"How to Enrich the Static Distribution?"}),"\n",(0,a.jsxs)(n.p,{children:["The following assets are packed into the github release download using ",(0,a.jsx)(n.code,{children:"@semantic-release/github"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "assets": [\n    {\n      "path": "pack/*.tgz",\n      "label": "Static distribution"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"how-to-start-using-pre-releases",children:"How to Start Using Pre-Releases?"}),"\n",(0,a.jsxs)(n.p,{children:["Create the ",(0,a.jsx)(n.code,{children:"alpha"})," and/or ",(0,a.jsx)(n.code,{children:"beta"})," branches and protect them from being deleted or pushed directly by non-administrators."]}),"\n",(0,a.jsxs)(n.p,{children:["Switch your branching strategy to ",(0,a.jsx)(n.code,{children:"merge"})," and enable conventional commits checking."]}),"\n",(0,a.jsxs)(n.p,{children:["As described in the ",(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/semantic-release/tree/master/docs/recipes",children:"semantic-releases recipes"}),", you will have to resolve merge conflicts between ",(0,a.jsx)(n.code,{children:"alpha"}),", ",(0,a.jsx)(n.code,{children:"beta"}),", and ",(0,a.jsx)(n.code,{children:"main"})," branches."]}),"\n",(0,a.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,a.jsx)(n.p,{children:"We're always happy to onboard people into open source!"}),"\n",(0,a.jsxs)(n.p,{children:["Check out the repository at ",(0,a.jsx)(n.a,{href:"https://github.com/open-sauced/semantic-release-conventional-config",children:"@open-sauced/semantic-release-conventional-config"}),". \u2764\ufe0f"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var a=s(6540);const i={},t=a.createContext(i);function c(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);