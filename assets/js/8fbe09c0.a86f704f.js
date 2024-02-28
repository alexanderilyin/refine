"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30457],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=o.createContext({}),i=function(e){var r=o.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return o.createElement(m.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),f=n,d=p["".concat(m,".").concat(f)]||p[f]||u[f]||a;return t?o.createElement(d,c(c({ref:r},s),{},{components:t})):o.createElement(d,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92812:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});t(67294);var o=t(3905);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"useModalForm",title:"useModalForm","example-tags":["form","headless","react-hook-form"]},m=void 0,i={unversionedId:"examples/form/react-hook-form/useModalForm",id:"examples/form/react-hook-form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. For more information, you can view the live example or review the source code.",source:"@site/docs/examples/form/react-hook-form/useModalForm.md",sourceDirName:"examples/form/react-hook-form",slug:"/examples/form/react-hook-form/useModalForm",permalink:"/docs/examples/form/react-hook-form/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/form/react-hook-form/useModalForm.md",tags:[],version:"current",lastUpdatedBy:"Mahmoud Mousa Hamad",lastUpdatedAt:1709103110,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{id:"useModalForm",title:"useModalForm","example-tags":["form","headless","react-hook-form"]},sidebar:"mainSidebar",previous:{title:"useForm",permalink:"/docs/examples/form/react-hook-form/useForm"},next:{title:"useStepsForm",permalink:"/docs/examples/form/react-hook-form/useStepsForm"}},s={},u=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const d={toc:u};function y(e){var{components:r}=e,t=c(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. For more information, you can view the live example or review the source code."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the useModalForm documentation for more information. \u2192")),(0,o.kt)(p,{path:"form-react-hook-form-use-modal-form",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);