(self.webpackChunknextauthenticationtesting=self.webpackChunknextauthenticationtesting||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}}},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Headers.stories":["./stories/Headers.stories.ts",709],"./Headers.stories.ts":["./stories/Headers.stories.ts",709]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.4.0_@swc+core@1.3.82_@types+react-dom@18.2.7_@types+react@18.2.21_esbuild_2swtkmw357hpbbf63rix5r3x4q/node_modules/@storybook/nextjs/dist/preview.js"),__webpack_require__("./node_modules/.pnpm/@tomfreudenberg+next-auth-mock@0.5.6_next-auth@4.23.1_react@18.2.0/node_modules/@tomfreudenberg/next-auth-mock/dist/storybook/preset/preview.js"),__webpack_require__("./node_modules/.pnpm/@storybook+react@7.4.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-links@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-essentials@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-interactions@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-styling@1.3.7_@types+react-dom@18.2.7_@types+react@18.2.21_less@4.2.0_postcs_4aqygypwg5krxe66hzijtbbfca/node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[57],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);