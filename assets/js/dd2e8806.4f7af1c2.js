"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82390],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(t),y=a,d=h["".concat(s,".").concat(y)]||h[y]||g[y]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[h]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},92446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});t(37953);var r=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",slug:"javascript-try-catch-finally",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-22-js-try-catch/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/javascript-try-catch-finally",source:"@site/blog/2024-01-30-js-try-catch.md",title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",date:"2024-01-30T00:00:00.000Z",formattedDate:"January 30, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:11.415,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",slug:"javascript-try-catch-finally",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-22-js-try-catch/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice"},nextItem:{title:"A Guide to useContext and React Context API",permalink:"/blog/usecontext-and-react-context"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.335,date:"2023-06-04T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"July 2, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.295,date:"2024-07-02T00:00:00.000Z"}],authorPosts:[{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"December 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.11,date:"2023-12-13T00:00:00.000Z"},{title:"React Memo Guide with Examples",description:"Improve app performance with React.memo().",permalink:"/blog/react-memo-guide",formattedDate:"January 16, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.82,date:"2024-01-16T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"January 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.75,date:"2024-01-31T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"What are Errors?",id:"what-are-errors",level:2},{value:"What is Graceful Error Handling?",id:"what-is-graceful-error-handling",level:3},{value:"How <code>try/catch/finally</code> Blocks Work",id:"how-trycatchfinally-blocks-work",level:2},{value:"Running Usual Code In The <code>try</code> Block",id:"running-usual-code-in-the-try-block",level:3},{value:"The <code>catch</code> Block",id:"the-catch-block",level:2},{value:"The <code>finally</code> Block",id:"the-finally-block",level:3},{value:"When to use try-catch in JavaScript?",id:"when-to-use-try-catch-in-javascript",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:h},y="wrapper";function d(e){var{components:n}=e,t=l(e,["components"]);return(0,r.yg)(y,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"This article was last updated on January 30, 2024 to clarifying the explanations and add more section about JS try catch."))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"This post is about graceful error handling in JavaScript where we explore the use of ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," blocks."),(0,r.yg)("p",null,"Steps we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#what-are-errors"},"What are Errors?"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#what-is-graceful-error-handling"},"What is Graceful Error Handling?")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-trycatchfinally-blocks-work"},"How ",(0,r.yg)("inlineCode",{parentName:"a"},"try/catch/finally")," Blocks Work"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#running-usual-code-in-the-try-block"},"Running Usual Code In The ",(0,r.yg)("inlineCode",{parentName:"a"},"try")," Block")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#the-catch-block"},"The ",(0,r.yg)("inlineCode",{parentName:"a"},"catch")," Block"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#the-finally-block"},"The ",(0,r.yg)("inlineCode",{parentName:"a"},"finally")," Block"))))),(0,r.yg)("h2",{id:"what-are-errors"},"What are Errors?"),(0,r.yg)("p",null,"Errors are integral part of programming. Errors in JavaScript can arise while writing code due to syntax related issues like missing or mistyped variables, duplicate variables, wrong use of JavaScript constructs, etc. They can also happen at run time due to internal errors at an external server, unreachable resources at an API endpoint, broken or missing data structures - whose interfaces are usually manipulated by our program, etc."),(0,r.yg)("p",null,"Syntax errors are generally tracked by linters but are also pointed out when the buggy code is executed by JavaScript's engine, i.e. at run time. Errors thrown at run time are often referred to as ",(0,r.yg)("strong",{parentName:"p"},"exceptions"),". Exceptions throw an ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," object that - if unhandled proactively - instantly terminates the script and does not allow execution of the rest of the code."),(0,r.yg)("p",null,"So, when an error is expected, in order to avoid breaking our program, it is important to handle errors gracefully and direct the flow of the program to a safe avenue where further execution resumes unhindered."),(0,r.yg)("h3",{id:"what-is-graceful-error-handling"},"What is Graceful Error Handling?"),(0,r.yg)("p",null,"Graceful error handling refers to an approach in programming where we proactively consider the scenarios that might lead to an error, design our control flow to handle these possible errors and direct the control of the program in each case in such a way that execution continues unterminated."),(0,r.yg)("p",null,"In JavaScript, we do this with the ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," construct."),(0,r.yg)("p",null,"In this article, we get into the details of what the ",(0,r.yg)("inlineCode",{parentName:"p"},"try"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"finally")," blocks represent and how they work together with examples. And on the way, we will discuss about what nesting of these blocks bring to the table. We'll also spend some time delving into how the ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {...}")," block is used to guide the control of the script to carry out routine procedures, like closing down a write stream in a file."),(0,r.yg)("p",null,"Let's start with how ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," works first."),(0,r.yg)("h2",{id:"how-trycatchfinally-blocks-work"},"How ",(0,r.yg)("inlineCode",{parentName:"h2"},"try/catch/finally")," Blocks Work"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," construct, it's obvious, can have three possible blocks. A ",(0,r.yg)("inlineCode",{parentName:"p"},"try {...}")," block, a ",(0,r.yg)("inlineCode",{parentName:"p"},"catch {...}")," block and a ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {...}")," block. Of these three, ",(0,r.yg)("inlineCode",{parentName:"p"},"try {...}")," is always a must. And we need one more: either ",(0,r.yg)("inlineCode",{parentName:"p"},"catch {...}")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {...}")," to make the ",(0,r.yg)("inlineCode",{parentName:"p"},"try {...}")," block relevant. The possible scenarios covered by this are:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"// Possibility 1: try/catch statement\ntry {\n  // Things to be tried\n} catch (e) {\n  // Catch errors thrown in try and do something with it\n}\n\n// Possibility 2: try/finally statement\ntry {\n  // Things to be tried\n} finally {\n  // Standard procedures to be completed regardless of the output in try block\n}\n")),(0,r.yg)("p",null,"So at least two blocks make up a ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," control flow. We can also have another possibility that involves the ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {...}")," block as the third:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"try {\n  // Try stuff\n  // Throw graceful error\n} catch (e) {\n  // Catch error and do relevant stuff like log to console, retry, redirect, etc.\n} finally {\n  // Do standard stuff like cleanup, closing file, send log data, etc after try and catch\n}\n")),(0,r.yg)("p",null,"Below, we go through each block with examples for each possible scenario above."),(0,r.yg)("h3",{id:"running-usual-code-in-the-try-block"},"Running Usual Code In The ",(0,r.yg)("inlineCode",{parentName:"h3"},"try")," Block"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"try {...}")," block contains the code which we want to execute in our normal control flow but bears the risk of throwing an error. It could be just another part of the synchronous procedures we declare in our script, such as the first ",(0,r.yg)("inlineCode",{parentName:"p"},"console.log()")," statement below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"console.log(\"We are exploring error handling with try/catch/finally\");\n// 'We are exploring error handling with try/catch/finally'\n\nconsole.log(\"This is safe avenue.\");\n// 'This is safe avenue.'\n")),(0,r.yg)("p",null,"Here, the control makes it to the safe zone and logs both statements. But if we introduce an error, the program crashes entirely - not reaching the safe avenue:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'console.logd("We are exploring error handling with try/catch/finally");\nconsole.log("This is safe avenue.");\n\n// TypeError: console.logd is not a function\n')),(0,r.yg)("p",null,"Here, the intentional mistake in ",(0,r.yg)("inlineCode",{parentName:"p"},"console.logd")," throws a ",(0,r.yg)("inlineCode",{parentName:"p"},"TypeError"),". And strikingly, the execution is halted entirely. No dealing with the error, no redirection, just a bunch of stack information."),(0,r.yg)("p",null,"That's bad. We need to deal with this proactively."),(0,r.yg)("p",null,"Let's use a ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," block. We need to put the code of our interest inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.logd(\"We are exploring error handling with try/catch/finally\");\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n}\n\nconsole.log(\"This is safe avenue.\");\n\n// Hello, you erred'n we messed. We are thy m'ssinjas.\n// This is safe avenue.\n")),(0,r.yg)("p",null,"Now, we placed our ",(0,r.yg)("inlineCode",{parentName:"p"},"console.logd()")," statement inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block. It's still buggy and throws the same exception, but it did not lead to termination of execution. It instead diverted the control to the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block, executed the code there and eventually moved control to the safe zone."),(0,r.yg)("p",null,"Let's just fix the error so the control remains in the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block and the program makes it to the safe zone through our desired, error-free path:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'try {\n  console.log("We are exploring error handling with try/catch/finally");\n} catch {\n  console.log(`Hello, you erred\'n we messed. We are thy m\'ssinjas.`);\n}\n\nconsole.log("This is safe avenue.");\n\n// We are exploring error handling with try/catch/finally\n// This is safe avenue.\n')),(0,r.yg)("p",null,"And it does."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"try")," Block with Synchronous Functions")),(0,r.yg)("p",null,"We can invoke any function inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block. Let's refactor the first log statement into a function and use it inside ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'function sayWhatWeReDoing() {\n  console.log("We are exploring error handling with try/catch/finally");\n}\n\ntry {\n  sayWhatWeReDoing();\n} catch {\n  console.log(`Hello, you erred\'n we messed. We are thy m\'ssinjas.`);\n}\n\nconsole.log("This is safe avenue.");\n// We are exploring error handling with try/catch/finally\n// This is safe avenue.\n')),(0,r.yg)("p",null,"The result is the same."),(0,r.yg)("h2",{id:"the-catch-block"},"The ",(0,r.yg)("inlineCode",{parentName:"h2"},"catch")," Block"),(0,r.yg)("p",null,"Now, as we've seen in the buggy ",(0,r.yg)("inlineCode",{parentName:"p"},"console.logd()")," example, presence of the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block creates a fork when we have errors in our desired flow in the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block. Let's focus on the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block now."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block offers an alternate channel to transfer execution control in the case of an error raised in the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block. When an error is raised, the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block allows a way out from crashing the program. That is, the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block allows us to handle errors gracefully."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"catch")," Without the ",(0,r.yg)("inlineCode",{parentName:"strong"},"Error")," Object")),(0,r.yg)("p",null,"In the previous example, when we erred with ",(0,r.yg)("inlineCode",{parentName:"p"},"console.logd()"),", we were able to log another statement we provided in the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.logd(\"We are exploring error handling with try/catch/finally\");\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n}\n\nconsole.log(\"This is safe avenue.\");\n\n// Hello, you erred'n we messed. We are thy m'ssinjas.\n// This is safe avenue.\n")),(0,r.yg)("p",null,"Notice in the beginning of the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block, we don't have any argument passed. This is because, here we did not require access to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," object produced by our error."),(0,r.yg)("p",null,"So, we may choose to ignore the ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," object totally."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"catch")," With the ",(0,r.yg)("inlineCode",{parentName:"strong"},"Error")," Object")),(0,r.yg)("p",null,"However, we may also choose to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," object if we need to. And most often we do."),(0,r.yg)("p",null,"We can access the ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," object as an argument passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block, with ",(0,r.yg)("inlineCode",{parentName:"p"},"catch(e)")," or anything replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"e")," really. It's the only argument that's available from ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block. And it's not available to other blocks."),(0,r.yg)("p",null,"It consists of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the error and a ",(0,r.yg)("inlineCode",{parentName:"p"},"message"),". Let's see what the error was in our above case:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'try {\n  console.logd("We are exploring error handling with try/catch/finally");\n} catch (e) {\n  console.log(`${e.name}: ${e.message}`);\n}\n\nconsole.log("This is safe avenue.");\n\n// TypeError: console.logd is not a function\n// This is safe avenue.\n')),(0,r.yg)("p",null,"Clearly, it was our intentional typo."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"throw"),"ing Custom Errors")),(0,r.yg)("p",null,"It is important to note that exceptions thrown at the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block is caught by only the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block of the same construct. We'll come to this in the next two sections below. Exceptions thrown in the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block itself and in the ",(0,r.yg)("inlineCode",{parentName:"p"},"finally")," block are not accessible from the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block of the same construct."),(0,r.yg)("p",null,"We can throw custom errors with JavaScript's ",(0,r.yg)("inlineCode",{parentName:"p"},"throw")," method, and even if there is perfect code written after the ",(0,r.yg)("inlineCode",{parentName:"p"},"throw"),", the later code won't be run because the control has moved to the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block already:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'try {\n  console.log("We are exploring error handling with try/catch/finally");\n  throw Error("We wanted this Error just to make a point.");\n  console.log("Perfect code here. But does not run.");\n} catch (e) {\n  console.log(`${e.name}: ${e.message}`);\n}\n\nconsole.log("This is safe avenue.");\n\n// We are exploring error handling with try/catch/finally\n// Error: We wanted this Error just to make a point.\n// This is safe avenue.\n')),(0,r.yg)("p",null,'Here, the "perfect code" statement did not get logged to the console, because ',(0,r.yg)("inlineCode",{parentName:"p"},"try")," spewed ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")," before that and control already moved to ",(0,r.yg)("inlineCode",{parentName:"p"},"catch"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Nested ",(0,r.yg)("inlineCode",{parentName:"strong"},"try/catch")," Blocks")),(0,r.yg)("p",null,"We can nest ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," blocks. Let's see how errors interact between nesting levels:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'try {\n  console.log("We are exploring error handling with try/catch/finally");\n  try {\n    console.log("This is second level try/catch block.");\n    throw Error("Custom error thrown from second level.");\n  } catch (e) {\n    console.log(`${e.name}: ${e.message}`);\n  }\n} catch (e) {\n  console.log(`Error from first level:\\n"${e}"`);\n}\n\nconsole.log("This is safe avenue.");\n\n// We are exploring error handling with try/catch/finally\n// This is second level try/catch block.\n// Error: Custom error thrown from second level.\n// This is safe avenue.\n')),(0,r.yg)("p",null,"In the above snippet, the custom error thrown in the nested ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block is caught in the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block of the same construct. That is, it remains in the same level."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Rethrowing")),(0,r.yg)("p",null,"We can rethrow an error in a nested ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," block, and it will be picked by an ancestor ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," block:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'try {\n  console.log("We are exploring error handling with try/catch/finally");\n  try {\n    console.log("This is second level try/catch block.");\n    throw Error("Custom error thrown from second level.");\n  } catch (e) {\n    throw e;\n  }\n} catch (e) {\n  console.log(`Error from first level:\\n"${e}"`);\n}\n\nconsole.log("This is safe avenue.");\n/* We are exploring error handling with try/catch/finally\n   This is second level try/catch block.\n   Error from first level:\n   "Error: Custom error thrown from second level."\n   This is safe avenue.\n*/\n')),(0,r.yg)("p",null,"In the above chunk, we rethrew ",(0,r.yg)("inlineCode",{parentName:"p"},"e")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"throw(e)")," inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block of the child ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," block. It was picked up by the ",(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block of the parent ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," section:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'/* Error from first level:\n   "Error: Custom error thrown from second level."\n*/\n')),(0,r.yg)("p",null,'These are most of the "gotchas" of using the ',(0,r.yg)("inlineCode",{parentName:"p"},"catch")," block."),(0,r.yg)("h3",{id:"the-finally-block"},"The ",(0,r.yg)("inlineCode",{parentName:"h3"},"finally")," Block"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {...}")," block - if applied - is the block where the control flow moves before it exits the ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"try/finally")," construct. It contains code that is part of the standard set of procedures, such as closing the write stream of a file regardless of whether an attempted write operation throws an error or not:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const fs = require("fs");\nconst writeStream = fs.createWriteStream("nodeFsTest");\n\ntry {\n  console.log("Starting writing...");\n  writeStream.write("Hi,");\n  writeStream.write("\\nThis is finally in action.");\n} catch (e) {\n  console.log(e);\n} finally {\n  console.log("Closing file...");\n  writeStream.end();\n}\n\n/*\nStarting writing...\nClosing file...\n*/\n')),(0,r.yg)("p",null,"In the example above, we're writing to a file using ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," ",(0,r.yg)("inlineCode",{parentName:"p"},"fs")," module. After a successful write operation, we want to declare that we have ended writing by closing the write stream with ",(0,r.yg)("inlineCode",{parentName:"p"},"writeStream.end()"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"try/finally")," Only")),(0,r.yg)("p",null,"We could have only used a ",(0,r.yg)("inlineCode",{parentName:"p"},"try/finally")," block, only if we knew we won't run into errors:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const fs = require("fs");\nconst writeStream = fs.createWriteStream("nodeFsTest");\n\ntry {\n  console.log("Starting writing...");\n  writeStream.write("Hi,");\n  writeStream.write("\\nThis is finally in action.");\n} finally {\n  console.log("Closing file...");\n  writeStream.end();\n}\n\n/*\nStarting writing...\nClosing file...\n*/\n')),(0,r.yg)("h2",{id:"when-to-use-try-catch-in-javascript"},"When to use try-catch in JavaScript?"),(0,r.yg)("p",null,"Some common scenarios for using try-catch:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Dealing with External Data:")," When fetching data from external sources (like APIs), where there's a risk of network issues or bad data.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Handling JSON Operations:")," Parsing JSON with ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.parse()"),", since malformed JSON strings can throw errors.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Working with User Input:")," When processing user input that might be invalid or cause errors during processing.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Interacting with the DOM:")," Especially when dealing with elements that may not exist or properties that can\u2019t be read or set.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Using Third-Party Libraries:")," Where you don\u2019t have control over the internal functionality, and there might be unknown errors.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Complex Calculations or Operations:")," Where there\u2019s a possibility of runtime errors due to unexpected values.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Working with Files in Node.js:")," Like reading/writing files, where the file might not exist or you don't have permission."))),(0,r.yg)("p",null,"Using try-catch allows your program to handle errors gracefully and maintain functionality even when something goes wrong. It's generally not a good practice to use try-catch for controlling normal flow in your application; it should be reserved for exceptional, error-prone situations."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this article, we discussed in depth about graceful error handling in JavaScript using the ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch/finally")," construct. We found out that putting our error-prone code inside a ",(0,r.yg)("inlineCode",{parentName:"p"},"try {...}")," block allows us to catch any thrown exception. This prevents our program from crashing."),(0,r.yg)("p",null,"We also saw that ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," blocks can be nested, exceptions thrown in nested ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," blocks can be rethrown and picked from ancestor ",(0,r.yg)("inlineCode",{parentName:"p"},"try/catch")," blocks."),(0,r.yg)("p",null,"Later, we looked into the details of how the ",(0,r.yg)("inlineCode",{parentName:"p"},"finally {..}")," block is used to conduct routine procedures, regardless of whether the main operation in the ",(0,r.yg)("inlineCode",{parentName:"p"},"try")," block throws an error or not."))}d.isMDXComponent=!0}}]);