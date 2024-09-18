"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13347],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||h[m]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",slug:"css-hide-scrollbar",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-20-css-scroll-bar/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/css-hide-scrollbar",source:"@site/blog/2024-02-20-css-scroll-bar.md",title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",date:"2024-02-20T00:00:00.000Z",formattedDate:"February 20, 2024",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:4.805,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",slug:"css-hide-scrollbar",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-20-css-scroll-bar/social.png",hide_table_of_contents:!1},prevItem:{title:"Using Arguments in Bash Scripts",permalink:"/blog/bash-script-arguments"},nextItem:{title:"Synchronous vs. Asynchronous Programming",permalink:"/blog/synchronous-vs-asynchronous"},relatedPosts:[{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.4,date:"2022-10-07T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.825,date:"2022-10-21T00:00:00.000Z"},{title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",permalink:"/blog/rem-vs-em",formattedDate:"July 19, 2024",authors:[{name:"Fimber Elemuwa",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"fimber_elemuwa"}],readingTime:13.01,date:"2024-07-19T00:00:00.000Z"}],authorPosts:[{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"September 11, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:14.895,date:"2024-09-11T00:00:00.000Z"},{title:"CSS Rounded Corners Examples",description:"We'll examine CSS rounded corners in this article.",permalink:"/blog/css-rounded-corners",formattedDate:"February 15, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.015,date:"2024-02-15T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Refine",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.59,date:"2023-04-06T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"CSS properties to hide element scrollbars",id:"css-properties-to-hide-element-scrollbars",level:2},{value:"Hide scrollbars on specific elements",id:"hide-scrollbars-on-specific-elements",level:2},{value:"CSS properties to hide browser scrollbars",id:"css-properties-to-hide-browser-scrollbars",level:2},{value:"Hide scrollbars in Webkit browsers like Chrome, Safari, Edge, and Firefo",id:"hide-scrollbars-in-webkit-browsers-like-chrome-safari-edge-and-firefo",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d},m="wrapper";function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"A scrollbar is a GUI element that appears on the right side (or bottom corner) of a webpage or web application to let users navigate a page or an element up and down (and also left and right) without taking their hands off the keyboard or trackpad. However, the default scrollbar may appear bland and out of place, diminishing the overall aesthetics of the webpage or web application."),(0,n.yg)("p",null,"With the help of new ",(0,n.yg)("inlineCode",{parentName:"p"},"CSS")," attributes, scrollbars can now be styled and hidden without affecting the user's ability to scroll. In this article, we will demonstrate how to hide the scrollbar in most web browsers using ",(0,n.yg)("inlineCode",{parentName:"p"},"CSS"),"."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#css-properties-to-hide-element-scrollbars"},"CSS properties to hide element scrollbars.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#hide-scrollbars-on-specific-elements"},"Hide scrollbars on specific elements.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#css-properties-to-hide-browser-scrollbars"},"CSS properties to hide browser scrollbars.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#hide-scrollbars-in-webkit-browsers-like-chrome-safari-edge-and-firefox"},"Hide scrollbars in Webkit browsers like Chrome, Safari, Edge, and Firefox."))),(0,n.yg)("h2",{id:"css-properties-to-hide-element-scrollbars"},"CSS properties to hide element scrollbars"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"CSS")," property ",(0,n.yg)("inlineCode",{parentName:"li"},"overflow: hidden")," is used to hide the vertical and horizontal scrollbar on an element. However, This property also affects the element's ability to scroll on its vertical and horizontal axis."),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"CSS")," property ",(0,n.yg)("inlineCode",{parentName:"li"},"overflow-y: hidden")," is used to hide the vertical scrollbar on an element. This property also affects the element's ability to scroll on its vertical axis."),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"CSS")," property ",(0,n.yg)("inlineCode",{parentName:"li"},"overflow-x: hidden")," is used to hide the horizontal scrollbar on an element. This property also affects the element's ability to scroll on its horizontal axis."),(0,n.yg)("li",{parentName:"ul"},"You can hide a scrollbar on an element while being given the ability to scroll, through the following:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"A pseudo selector ",(0,n.yg)("inlineCode",{parentName:"li"},"::-webkit-scrollbar"),", which is only supported for webkit browsers. In the pseudo selector, you can define the ",(0,n.yg)("inlineCode",{parentName:"li"},"display: none")," property which would hide the scrollbar on the element but retain its scrolling function."),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"-ms-overflow-style: none")," property which is only supported for for Edge and other legacy browsers like IE."),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"scrollbar-width: none")," property which is supported by Firefox.")))),(0,n.yg)("h2",{id:"hide-scrollbars-on-specific-elements"},"Hide scrollbars on specific elements"),(0,n.yg)("p",null,"We will demonstrate how to hide scrollbars using the CSS attributes mentioned earlier."),(0,n.yg)("p",null,"Below is a codepen example that shows how to hide an element's scrollbar without affecting its ability to scroll."),(0,n.yg)("p",null,"In this example, we used the ",(0,n.yg)("inlineCode",{parentName:"p"},"::-webkit-scrollbar")," pseudo-selector to hide the scrollbar on the element with a class ",(0,n.yg)("inlineCode",{parentName:"p"},"scroll-container")," while maintaining its functionality."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-css"},".scroll-container::-webkit-scrollbar {\n  display: none;\n}\n")),(0,n.yg)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS HIDE SCROLLBAR USING WEBKIT-SCROLLBAR PSEUDO ELEMENT",src:"https://codepen.io/Necati-zmen/embed/VwRNmWO?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen/pen/VwRNmWO"},"CSS HIDE SCROLLBAR USING WEBKIT-SCROLLBAR PSEUDO ELEMENT")," by Necati \xd6zmen (",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,n.yg)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,n.yg)("p",null,"Another example is using the property ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow: hidden")," to hide the scrollbar. However, as shown on the codepen, it affects the element's ability to scroll."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow: hidden")," property is applied on the element with class ",(0,n.yg)("inlineCode",{parentName:"p"},"scroll-container")," with a ",(0,n.yg)("inlineCode",{parentName:"p"},"max-height: 350px"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-css"},".scroll-container {\n  background: white;\n  padding: 2em;\n  margin: auto;\n  max-width: 450px;\n  max-height: 350px;\n  /* This displays hides the scrollbar on the element, however, it affects its scrolling function */\n  overflow: hidden;\n}\n")),(0,n.yg)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS HIDE SCROLLBAR USING OVERFLOW:HIDDEN PROPERTY",src:"https://codepen.io/Necati-zmen/embed/abMxBpj?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen/pen/abMxBpj"},"CSS HIDE SCROLLBAR USING OVERFLOW:HIDDEN PROPERTY")," by Necati \xd6zmen (",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,n.yg)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,n.yg)("h2",{id:"css-properties-to-hide-browser-scrollbars"},"CSS properties to hide browser scrollbars"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The pseudo selector ",(0,n.yg)("inlineCode",{parentName:"p"},"-webkit-scrollbar")," can also be used to target browser scrollbars in all WebKit-based browsers. However, while this method has been around for a while, it has yet to be standardized and is likely to become outdated once the new ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling"},"scrollbar")," characteristics provided by ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"MDN")," are fully implemented and supported in all browsers.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The browser's scrollbar can be hidden when the ",(0,n.yg)("inlineCode",{parentName:"p"},"CSS")," properties ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow: hidden"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow-y: hidden"),", or ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow-x: hidden")," are added to the ",(0,n.yg)("inlineCode",{parentName:"p"},"body")," element (the root element). Nonetheless, it is not recommended to apply them to the base ",(0,n.yg)("inlineCode",{parentName:"p"},"body")," element since it may interfere with the browser's ability to scroll on that page."))),(0,n.yg)("h2",{id:"hide-scrollbars-in-webkit-browsers-like-chrome-safari-edge-and-firefo"},"Hide scrollbars in Webkit browsers like Chrome, Safari, Edge, and Firefo"),(0,n.yg)("p",null,"We will demonstrate how to hide browser scrollbars using the CSS properties mentioned earlier."),(0,n.yg)("p",null,"The codepen example that follows demonstrates how to conceal the browser's scrollbar without impairing its scrolling functionality."),(0,n.yg)("p",null,"In this example, we used the ",(0,n.yg)("inlineCode",{parentName:"p"},"::-webkit-scrollbar")," pseudo-selector to hide the scrollbar on the ",(0,n.yg)("inlineCode",{parentName:"p"},"body")," element while maintaining its functionality."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-css"},"body::-webkit-scrollbar {\n  display: none;\n}\n")),(0,n.yg)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS HIDE BROWSER SCROLLBAR USING WEBKIT-SCROLLBAR PSEUDO ELEMENT",src:"https://codepen.io/Necati-zmen/embed/oNVOYpO?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen/pen/oNVOYpO"},"CSS HIDE BROWSER SCROLLBAR USING WEBKIT-SCROLLBAR PSEUDO ELEMENT")," by Necati \xd6zmen (",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,n.yg)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,n.yg)("br",null)," ",(0,n.yg)("br",null),(0,n.yg)("p",null,"Another option is to conceal the scrollbar by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"CSS")," property: ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow: hidden"),". Nevertheless, it has an impact on the browser's scrolling capability (which is not advisable) on that page, as seen on the codepen."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"overflow: hidden")," property is applied to the ",(0,n.yg)("inlineCode",{parentName:"p"},"body")," element."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-css"},"body {\n  border: 10px solid orange;\n  margin: auto;\n  max-width: 600px;\n  font: 1em / 1.4 sans-serif;\n  padding: 2em;\n  display: grid;\n  place-items: center;\n  background: white;\n  /* This displays hides the scrollbar on the browser, however, it affects its scrolling function */\n  overflow: hidden;\n}\n")),(0,n.yg)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS HIDE BROWSER SCROLLBAR USING OVERFLOW ATTRIBUTES",src:"https://codepen.io/Necati-zmen/embed/rNRbWwd?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen/pen/rNRbWwd"},"CSS HIDE BROWSER SCROLLBAR USING OVERFLOW ATTRIBUTES")," by Necati \xd6zmen (",(0,n.yg)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,n.yg)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this article, we explained how to hide scrollbars at the element and page levels using CSS. Scrollbars should be hidden for certain UI and aesthetic reasons, but it's crucial to remember that accessibility is improved when scrollbars are displayed in scrollable sections because they make it easier for users to find and navigate content."))}g.isMDXComponent=!0}}]);