(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/.jest-test-results.json":function(module){module.exports=JSON.parse('{"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":2,"numPassedTests":2,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":2,"numTotalTests":2,"openHandles":[],"snapshot":{"added":0,"didUpdate":false,"failure":false,"filesAdded":0,"filesRemoved":0,"filesRemovedList":[],"filesUnmatched":0,"filesUpdated":0,"matched":0,"total":0,"unchecked":0,"uncheckedKeysByFile":[],"unmatched":0,"updated":0},"startTime":1639763427983,"success":true,"testResults":[{"assertionResults":[{"ancestorTitles":["PageBackground"],"failureMessages":[],"fullName":"PageBackground renders the provided content","location":null,"status":"passed","title":"renders the provided content"}],"endTime":1639763431232,"message":"","name":"/Users/radoslavpopov/workspace/arcane/ui-lib/src/components/PageBackground/index.test.js","startTime":1639763429158,"status":"passed","summary":""},{"assertionResults":[{"ancestorTitles":["Button"],"failureMessages":[],"fullName":"Button renders the button and clicks on it","location":null,"status":"passed","title":"renders the button and clicks on it"}],"endTime":1639763431246,"message":"","name":"/Users/radoslavpopov/workspace/arcane/ui-lib/src/components/Button/index.test.js","startTime":1639763429158,"status":"passed","summary":""}],"wasInterrupted":false}')},"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),client=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-jest/dist/esm/index.js"),_jest_test_results=(__webpack_require__("./src/global.scss"),__webpack_require__("./.storybook/.jest-test-results.json"));Object(client.addDecorator)(Object(dist_esm.a)({results:_jest_test_results}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/Button/index.stories.tsx":"./src/components/Button/index.stories.tsx","./components/PageBackground/index.stories.tsx":"./src/components/PageBackground/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Button/index.module.scss":function(module,exports,__webpack_require__){module.exports={button:"Button_button__3GgJ3",small:"Button_small__4DYQu",primary:"Button_primary__3U5oy",onLight:"Button_onLight__3mOdo",onDark:"Button_onDark__XH4-x",secondary:"Button_secondary__2LIZ5",iconRight:"Button_iconRight__9fdST"}},"./src/components/Button/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"DarkBackground",(function(){return DarkBackground})),__webpack_require__.d(__webpack_exports__,"Clickable",(function(){return Clickable}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module=__webpack_require__("./src/components/Button/index.module.scss"),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ArrowRight(){return Object(jsx_runtime.jsx)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("path",{d:"M17.3145 7.13379C17.3145 6.86133 17.2002 6.59766 16.998 6.4043L11.2236 0.629883C10.9951 0.410156 10.7578 0.313477 10.5117 0.313477C9.94922 0.313477 9.54492 0.708984 9.54492 1.24512C9.54492 1.52637 9.65918 1.76367 9.83496 1.93945L11.8125 3.94336L14.3613 6.27246L12.3223 6.14941H1.66992C1.08105 6.14941 0.676758 6.55371 0.676758 7.13379C0.676758 7.70508 1.08105 8.10938 1.66992 8.10938H12.3223L14.3613 7.98633L11.8125 10.3154L9.83496 12.3193C9.65918 12.4951 9.54492 12.7324 9.54492 13.0137C9.54492 13.5498 9.94922 13.9453 10.5117 13.9453C10.7578 13.9453 10.9951 13.8486 11.2061 13.6465L16.998 7.85449C17.2002 7.66113 17.3145 7.39746 17.3145 7.13379Z"})})}var _excluded=["children","className","small","secondary","onDark","arrowRight","iconRight"];function Button(_ref){var _cn,children=_ref.children,className=_ref.className,_ref$small=_ref.small,small=void 0!==_ref$small&&_ref$small,_ref$secondary=_ref.secondary,secondary=void 0!==_ref$secondary&&_ref$secondary,_ref$onDark=_ref.onDark,onDark=void 0!==_ref$onDark&&_ref$onDark,_ref$arrowRight=_ref.arrowRight,arrowRight=void 0!==_ref$arrowRight&&_ref$arrowRight,iconRight=_ref.iconRight,props=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:"button",className:classnames_default()(index_module_default.a.button,(_cn={},Object(defineProperty.a)(_cn,className,!!className),Object(defineProperty.a)(_cn,index_module_default.a.small,small),Object(defineProperty.a)(_cn,index_module_default.a.primary,!secondary),Object(defineProperty.a)(_cn,index_module_default.a.secondary,secondary),Object(defineProperty.a)(_cn,index_module_default.a.onLight,!onDark),Object(defineProperty.a)(_cn,index_module_default.a.onDark,onDark),_cn))},props),{},{children:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,arrowRight&&Object(jsx_runtime.jsx)(ArrowRight,{}),iconRight&&Object(jsx_runtime.jsx)("div",{className:index_module_default.a.iconRight,children:iconRight})]})}))}try{Button.displayName="Button",Button.__docgenInfo={description:"Arcane brand button.",displayName:"Button",props:{children:{defaultValue:null,description:"Button content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class for additional styling",name:"className",required:!1,type:{name:"string"}},small:{defaultValue:{value:"false"},description:"Sets a small version of the button",name:"small",required:!1,type:{name:"boolean"}},secondary:{defaultValue:{value:"false"},description:"Sets the secondary UI of the button",name:"secondary",required:!1,type:{name:"boolean"}},onDark:{defaultValue:{value:"false"},description:"Indicates that the button is displayed on top of a dark background",name:"onDark",required:!1,type:{name:"boolean"}},arrowRight:{defaultValue:{value:"false"},description:"Displays an arrow to the right of the button content",name:"arrowRight",required:!1,type:{name:"boolean"}},iconRight:{defaultValue:null,description:"An icon to the right of the button content",name:"iconRight",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:Button,argTypes:{onDark:{control:"boolean",defaultValue:!1},small:{control:"boolean",defaultValue:!1},secondary:{control:"boolean",defaultValue:!1},arrowRight:{control:"boolean",defaultValue:!1}}};var index_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button,Object(objectSpread2.a)({},args))},Default=index_stories_Template.bind({});Default.args={children:"My Button",onDark:!1};var DarkBackground=function DarkBackgroundTemplate(args){return Object(jsx_runtime.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"black",width:"90vw",height:"90vh"},children:Object(jsx_runtime.jsx)(Button,Object(objectSpread2.a)({},args))})}.bind({});DarkBackground.args={children:"Button on dark",onDark:!0};var Clickable=index_stories_Template.bind({});Clickable.args={children:"Click me!",onDark:!1,onClick:function onClick(){alert("Button is clicked!")}},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),DarkBackground.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '90vw', height: '90vh' }}>\n    <Button {...args} />\n  </div>\n)"}},DarkBackground.parameters),Clickable.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Clickable.parameters)},"./src/components/PageBackground/index.module.scss":function(module,exports,__webpack_require__){module.exports={pageBackground:"PageBackground_pageBackground__3Sk5K"}},"./src/components/PageBackground/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LongPage",(function(){return LongPage}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module=__webpack_require__("./src/components/PageBackground/index.module.scss"),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PageBackground(_ref){var children=_ref.children,className=_ref.className;return Object(jsx_runtime.jsx)("div",{className:classnames_default()(index_module_default.a.pageBackground,Object(defineProperty.a)({},className,!!className)),children:children})}try{PageBackground.displayName="PageBackground",PageBackground.__docgenInfo={description:"A wrapper component for pages that displays backgrounds.",displayName:"PageBackground",props:{children:{defaultValue:null,description:"Page content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class for additional styling",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageBackground/index.tsx#PageBackground"]={docgenInfo:PageBackground.__docgenInfo,name:"PageBackground",path:"src/components/PageBackground/index.tsx#PageBackground"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/PageBackground",component:PageBackground};var LongPage=function Template(args){return Object(jsx_runtime.jsx)(PageBackground,Object(objectSpread2.a)({},args))}.bind({});LongPage.args={children:Object(jsx_runtime.jsx)("div",{style:{width:"90vw",height:"3000px",border:"1px dashed black"},children:"page content"})},LongPage.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PageBackground {...args} />"}},LongPage.parameters)},"./src/global.scss":function(module,exports,__webpack_require__){},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);