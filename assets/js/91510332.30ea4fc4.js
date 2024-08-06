"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36039],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"useeffect-cleanup",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-22-useeffect-cleanup/social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/useeffect-cleanup",source:"@site/blog/2024-03-22-useeffect-cleanup.md",title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",date:"2024-03-22T00:00:00.000Z",formattedDate:"March 22, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.865,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"useeffect-cleanup",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-22-useeffect-cleanup/social.png",hide_table_of_contents:!1},prevItem:{title:"Tailwind Animations with Examples",permalink:"/blog/tailwind-animations"},nextItem:{title:"Building a CRUD app with Shadcn UI and Refine",permalink:"/blog/shadcn-ui"},relatedPosts:[{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.04,date:"2021-11-12T00:00:00.000Z"},{title:"Building a React Admin Panel with PrimeReact and Refine",description:"We'll build a simple React admin Panel using Refine and PrimeReact.",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine",formattedDate:"July 26, 2023",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:42.665,date:"2023-07-26T00:00:00.000Z"},{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",permalink:"/blog/react-websocket-tutorial-nodejs",formattedDate:"August 16, 2023",authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],readingTime:12.475,date:"2023-08-16T00:00:00.000Z"}],authorPosts:[{title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",permalink:"/blog/css-vertical-align",formattedDate:"February 13, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.41,date:"2024-02-13T00:00:00.000Z"},{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"April 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.375,date:"2024-04-04T00:00:00.000Z"},{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",permalink:"/blog/tailwind-animations",formattedDate:"March 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:5.035,date:"2024-03-25T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What are \u201cside-effects\u201d?",id:"what-are-side-effects",level:2},{value:"Why cleanup \u201cside-effects\u201d?",id:"why-cleanup-side-effects",level:2},{value:"What is the <code>useEffect</code> cleanup function?",id:"what-is-the-useeffect-cleanup-function",level:2},{value:"What does <code>useEffect</code> function do?",id:"what-does-useeffect-function-do",level:2},{value:"When to use the <code>useEffect</code> cleanup function",id:"when-to-use-the-useeffect-cleanup-function",level:2},{value:"Fetch requests",id:"fetch-requests",level:3},{value:"Timeouts",id:"timeouts",level:3},{value:"Intervals",id:"intervals",level:3},{value:"Event Listeners",id:"event-listeners",level:3},{value:"Web sockets",id:"web-sockets",level:3},{value:"Conclusion.",id:"conclusion",level:2}],m={toc:p},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook is a popular hook that combines the functionality of ",(0,o.yg)("inlineCode",{parentName:"p"},"componentDidMount"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"componentDidUpdate"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"componentWillUnmount")," lifecycle methods of ",(0,o.yg)("inlineCode",{parentName:"p"},"React")," class components. The hook helps developers handle side effects in their programmes. Side effects may involve receiving data from an ",(0,o.yg)("strong",{parentName:"p"},"API"),", configuring ",(0,o.yg)("strong",{parentName:"p"},"event listeners"),", or subscribing to a ",(0,o.yg)("strong",{parentName:"p"},"WebSocket"),". All of these activities might influence the state of your application and may cause memory leaks if not taken care of."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook comes with a cleanup function that cleans up effects to prevent memory leaks, which in turn improves the performance of the application. In this article, we will explain the cleanup function of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.yg)("h2",{id:"what-are-side-effects"},"What are \u201cside-effects\u201d?"),(0,o.yg)("p",null,'A "',(0,o.yg)("strong",{parentName:"p"},"side effect"),'" is an operation that impacts something other than the function being executed.\nIn React, a side effect occurs when we impact something outside the scope of React in our ',(0,o.yg)("inlineCode",{parentName:"p"},"React")," components.\nA ",(0,o.yg)("strong",{parentName:"p"},"side effect")," could be retrieving data from a remote server, reading or writing to local storage, configuring event listeners, or creating a subscription. These side effects could also occur when a button is clicked, a form is submitted, or a component is mounted and unmounted."),(0,o.yg)("h2",{id:"why-cleanup-side-effects"},"Why cleanup \u201cside-effects\u201d?"),(0,o.yg)("p",null,"Cleaning up side effects in ",(0,o.yg)("inlineCode",{parentName:"p"},"React")," is a method of removing side effects that are no longer required. This, in turn, avoids ",(0,o.yg)("strong",{parentName:"p"},"memory leaks"),", which occur when your program or application attempts to perform an unnecessary operation or update a state memory location that no longer exists."),(0,o.yg)("h2",{id:"what-is-the-useeffect-cleanup-function"},"What is the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect")," cleanup function?"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function is a return function within the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect } from "React";\n\nuseEffect(() => {\n  // Your effect\n  return () => {\n    // Cleanup\n  };\n}, []);\n')),(0,o.yg)("h2",{id:"what-does-useeffect-function-do"},"What does ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect")," function do?"),(0,o.yg)("p",null,"The function allows React developers to stop side effects that do not need to be executed before our component is unmounted."),(0,o.yg)("p",null,"For example, you have a ",(0,o.yg)("inlineCode",{parentName:"p"},"React")," component that performs a certain action in a ",(0,o.yg)("inlineCode",{parentName:"p"},"setTimeout"),". Every time the component is shown, it runs the ",(0,o.yg)("inlineCode",{parentName:"p"},"setTimeout")," function and performs the action in the timeout on that component.\nAssuming You decided to navigate away from this component and into another portion of the app. The component is no longer being rendered, thus there is no need to leave the ",(0,o.yg)("inlineCode",{parentName:"p"},"setTimeout")," function running in the background. However, the setTimeout function is still running in the background."),(0,o.yg)("p",null,"This is where the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleaning function comes in. In the cleanup function, we can simply add a ",(0,o.yg)("inlineCode",{parentName:"p"},"clearTimeout")," which clears the timeout when the component is unmounted (i.e., no longer rendered)."),(0,o.yg)("h2",{id:"when-to-use-the-useeffect-cleanup-function"},"When to use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect")," cleanup function"),(0,o.yg)("p",null,"There are various scenarios which will prompt the use of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function. Thery are as follows:"),(0,o.yg)("h3",{id:"fetch-requests"},"Fetch requests"),(0,o.yg)("p",null,"When initiating an ",(0,o.yg)("strong",{parentName:"p"},"API")," request in a component, it is important that we also account for a way to abort the request when the component is unmounted or re-rendered.\nThere are several methods for canceling fetch request calls; we can use the native ",(0,o.yg)("inlineCode",{parentName:"p"},"fetch")," ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Axios's")," ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController")," (If you are utilizing ",(0,o.yg)("inlineCode",{parentName:"p"},"Axios")," as our API Client)."),(0,o.yg)("p",null,"To utilize ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController"),", first, create a controller with the ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController()")," constructor. When our fetch request is initiated, we pass ",(0,o.yg)("inlineCode",{parentName:"p"},"signal")," as an option in the request's options object."),(0,o.yg)("p",null,"This associates the controller and signals with the fetch request, allowing us to cancel the request call at any time using the ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController.abort()")," method.\nWe will then add the ",(0,o.yg)("inlineCode",{parentName:"p"},"AbortController.abort()")," method to our ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function to ensure that the request is aborted when the component is unmounted or re-rendered."),(0,o.yg)("p",null,"Examples of the useCases are displayed below:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Fetch example:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  //create the abort controller\n  let controller = new AbortController();\n\n  (async () => {\n    try {\n      const response = await fetch(APIEndpoint, {\n        // attach the controller to the request\n        signal: controller.signal,\n      });\n      // add the success response to a state value\n    } catch (e) {\n      // Handle the error\n    }\n  })();\n  //abort the request when the component umounts\n  return () => controller?.abort();\n}, []);\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Axios example:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  // create a controller\n  let controller = new AbortController();\n\n  (async () => {\n    try {\n      const response = await axios.get(APIEndpoint, {\n        // attach the controller to the request\n        signal: controller.signal,\n      });\n\n      // add the success response to a state value\n    } catch (e) {\n      // Handle the error\n    }\n  })();\n  //abort the request when the component umounts\n  return () => controller?.abort();\n}, []);\n")),(0,o.yg)("h3",{id:"timeouts"},"Timeouts"),(0,o.yg)("p",null,"For timeouts, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"setTimeout(callback, timeInMs)")," timer function in the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, followed by the ",(0,o.yg)("inlineCode",{parentName:"p"},"clearTimeout(timerId)")," function in the cleanup function. This guarantees that the timer is cleared when the component is unmounted."),(0,o.yg)("p",null,"An example of this is displayed below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  let timerId = setTimeout(() => {\n    // perform an action like state update\n    timerId = null;\n  }, 5000);\n\n  // clear the timer when component unmouts\n  return () => clearTimeout(timerId);\n}, []);\n")),(0,o.yg)("h3",{id:"intervals"},"Intervals"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"setInterval(callback, timeInMs)")," function can be declared in the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, and the ",(0,o.yg)("inlineCode",{parentName:"p"},"clearInterval(intervalId)")," function can be added to the cleanup function to handle intervals. By doing this, you can be sure that the timer will stop when the part is unmounted."),(0,o.yg)("p",null,"An example of this is displayed below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  let intervalId = setInterval(() => {\n    // perform an action like state update\n    intervalId = null;\n  }, 5000);\n\n  // cleanup the interval when component unmounts\n  return () => clearInterval(interval);\n}, []);\n")),(0,o.yg)("h3",{id:"event-listeners"},"Event Listeners"),(0,o.yg)("p",null,"For event listeners, you can define them in the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," callback by attaching the ",(0,o.yg)("inlineCode",{parentName:"p"},"addEventListener")," function to the element, and then cleanup the listeners by attaching the ",(0,o.yg)("inlineCode",{parentName:"p"},"removeEventListener")," function to the element on the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function. This guarantees that the listener is removed from the element when the component is mounted."),(0,o.yg)("p",null,"A simple usage of this is displayed in the example below, which is a custom hook for handling click events that occur outside of a certain ",(0,o.yg)("inlineCode",{parentName:"p"},"DOM")," element, such as a ",(0,o.yg)("inlineCode",{parentName:"p"},"div"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const useOutsideClick = (callback: () => void) => {\n  const ref = useRef<HTMLElement>();\n\n  useEffect(() => {\n    const handleClick = (event: Event) => {\n      if (ref.current && !ref.current.contains(event.target as Node)) {\n        callback();\n      }\n    };\n\n    document.addEventListener("click", handleClick, true);\n\n    return () => {\n      document.removeEventListener("click", handleClick, true);\n    };\n  }, [callback, ref]);\n\n  return ref;\n};\n')),(0,o.yg)("h3",{id:"web-sockets"},"Web sockets"),(0,o.yg)("p",null,"For ",(0,o.yg)("strong",{parentName:"p"},"WebSockets"),", When you create a ",(0,o.yg)("strong",{parentName:"p"},"WebSocket")," connection in a component, you can close it when the component unmounts by including the ",(0,o.yg)("inlineCode",{parentName:"p"},"socket.close()")," method in the cleanup function."),(0,o.yg)("p",null,"An example of this is displayed below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  const ws = new WebSocket(url, protocols);\n  // perform socket related actions\n\n  // cleanup web socket when component unmounts\n  return () => ws.close();\n}, []);\n")),(0,o.yg)("h2",{id:"conclusion"},"Conclusion."),(0,o.yg)("p",null,"In this article, we learned about side effects and how they create memory leaks and unwanted behaviors in ",(0,o.yg)("inlineCode",{parentName:"p"},"React")," components. We also looked at how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function to fix memory leaks.\nUnderstanding how and when to repair memory leaks with the cleanup function is a significant step toward becoming a better React developer."))}h.isMDXComponent=!0}}]);