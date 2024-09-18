"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34604],{58860:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>g});var t=a(37953);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?t.createElement(g,o(o({ref:n},d),{},{components:a})):t.createElement(g,o({ref:n},d))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45778:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});a(37953);var t=a(58860);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","Refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/refine-pixels-4",source:"@site/blog/2023-02-17-refine-pixels-4.md",title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"Refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"}],readingTime:10.17,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","Refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Creating an Admin Dashboard with Refine",permalink:"/blog/refine-pixels-5"},nextItem:{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3"},relatedPosts:[{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"August 20, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:15.12,date:"2024-08-20T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.18,date:"2022-11-17T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"}],authorPosts:[{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"August 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.115,date:"2024-08-19T00:00:00.000Z"},{title:"React useReducer Hook - The Basics",description:"This post is about the useReducer() hook in React. We demonstrate with examples how to use it for action based state updates and discuss some safe practices.",permalink:"/blog/react-usereducer",formattedDate:"May 28, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:23.655,date:"2024-05-28T00:00:00.000Z"},{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.175,date:"2023-06-16T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"RefineWeek series",id:"refineweek-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Setting Up Supabase Realtime",id:"setting-up-supabase-realtime",level:2},{value:"<code>&lt;Refine /&gt;</code>&#39;s <code>liveProvider</code> Prop",id:"refine-s-liveprovider-prop",level:2},{value:"Refine&#39;s Supabase <code>liveProvider</code> Object",id:"refines-supabase-liveprovider-object",level:3},{value:"Broadcasting",id:"broadcasting",level:2},{value:"Refine <code>usePublish()</code> Hook",id:"refine-usepublish-hook",level:3},{value:"Subscription",id:"subscription",level:2},{value:"Refine <code>useResourceSubscription()</code> Hook",id:"refine-useresourcesubscription-hook",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c},m="wrapper";function g(e){var{components:n}=e,a=o(e,["components"]);return(0,t.yg)(m,r(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){i(e,n,a[n])}))}return e}({},u,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"In this post, we implement realtime broadcast and subscription of ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," updates in our ",(0,t.yg)("strong",{parentName:"p"},"Refine")," based ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," app. We do this with the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider"))," prop on ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," and ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,t.yg)("strong",{parentName:"a"},"Supabase"),"'s ",(0,t.yg)("strong",{parentName:"a"},"Realtime servers")),". Applying a PubSub feature allows us to receive instant updates in one part of our app for database changes triggered from another part or by a different client."),(0,t.yg)("p",null,"Here's a quick rundown of the features we'll work on:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Allow multiple users to draw pixels on a canvas."),(0,t.yg)("li",{parentName:"ol"},"All contributors can see realtime updates on the canvas.")),(0,t.yg)("p",null,"This is Day 4 in the series titled ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},(0,t.yg)("strong",{parentName:"a"},"RefineWeek")),". ",(0,t.yg)("strong",{parentName:"p"},"RefineWeek")," is a quickfire tutorial guide that aims to help developers learn the ins-and-outs of ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s powerful capabilities and get going with ",(0,t.yg)("strong",{parentName:"p"},"Refine")," within a week."),(0,t.yg)("h3",{id:"refineweek-series"},"RefineWeek series"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Day 1 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & Refine architecture")),(0,t.yg)("li",{parentName:"ul"},"Day 2 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,t.yg)("li",{parentName:"ul"},"Day 3 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication")),(0,t.yg)("li",{parentName:"ul"},"Day 4 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-4/"},"Adding Realtime Collaboration")),(0,t.yg)("li",{parentName:"ul"},"Day 5 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-5/"},"Creating an Admin Dashboard with Refine")),(0,t.yg)("li",{parentName:"ul"},"Day 6 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-6/"},"Implementing Role Based Access Control")),(0,t.yg)("li",{parentName:"ul"},"Day 7 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-7/"},"Audit Log With Refine"))),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("p",null,"On Day Three, we implemented CRUD operations using ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider")," methods and the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," prop, which leveraged RESTful routes in the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"routerProvider"))," object under the hood."),(0,t.yg)("p",null,"Today, we are going to explore the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider"))," prop as we implement realtime collaboration on a ",(0,t.yg)("inlineCode",{parentName:"p"},"canvas")," so that ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," drawn on a ",(0,t.yg)("inlineCode",{parentName:"p"},"canvas")," by one user is instantly seen by anyone else viewing it from another client."),(0,t.yg)("p",null,"There are two parts to our endeavor in this post, one in the ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," backend and one in our ",(0,t.yg)("strong",{parentName:"p"},"Refine")," app:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Spin up Realtime servers from ",(0,t.yg)("strong",{parentName:"li"},"Supabase")," dashboard for the resource we want to publish changes for and subscribe to."),(0,t.yg)("li",{parentName:"ol"},"Registering the ",(0,t.yg)("inlineCode",{parentName:"li"},"liveProvider")," prop inside ",(0,t.yg)("inlineCode",{parentName:"li"},"<Refine />")," component and enabling subscription with ",(0,t.yg)("inlineCode",{parentName:"li"},"liveMode: auto"),".")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine")," has already added the implementation code for ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," provider in the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," object it created for us during project initialization. We will mostly play the laymen role here as we tour around the underlying principles and the magic at work behind the scenes."),(0,t.yg)("p",null,"Let's start by first making sure ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," servers are set up for the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table in the ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," backend."),(0,t.yg)("h2",{id:"setting-up-supabase-realtime"},"Setting Up Supabase Realtime"),(0,t.yg)("p",null,"In order to make drawing collaborative between our users, we have to run ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,t.yg)("strong",{parentName:"a"},"Supabase")," ",(0,t.yg)("strong",{parentName:"a"},"Realtime"))," servers and create channels for our ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,t.yg)("p",null,"We can do this from the ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," dashboard for the database we created. If you haven't already, please go ahead and select ",(0,t.yg)("inlineCode",{parentName:"p"},"Enable Realtime")," for the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table from its editor:"),(0,t.yg)("div",{className:"centered-image"},(0,t.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Frealtime.png",alt:"supabase realtime"})),(0,t.yg)("br",null),(0,t.yg)("p",null,"Behind the scenes, ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," spins up globally distributed ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," servers that facilitate low latency communication between our app and ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," database tables. ",(0,t.yg)("strong",{parentName:"p"},"Supabase"),"'s ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," feature spares a ",(0,t.yg)("strong",{parentName:"p"},"channel")," for each resource to be broadcasted. Any change in the resource is published in the channel, and clients that subscribe to the channel receive updates as soon as the change is made."),(0,t.yg)("p",null,"We are using ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," ",(0,t.yg)("strong",{parentName:"p"},"Realtime"),"'s ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime#postgres-cdc"},(0,t.yg)("strong",{parentName:"a"},"PostgreSQL Change Data Capture"))," feature which will now allow our app to publish mutation events to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," channel and also listen to those changes from a subscriber component."),(0,t.yg)("p",null,"This means mutation hooks such as ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useCreate/"},(0,t.yg)("inlineCode",{parentName:"a"},"useCreate()"))," can now publish events to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," channel and consumer hooks like ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,t.yg)("inlineCode",{parentName:"a"},"useList()"))," are able to get instant updates for any change to ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels"),"."),(0,t.yg)("h2",{id:"refine-s-liveprovider-prop"},(0,t.yg)("inlineCode",{parentName:"h2"},"<Refine />"),"'s ",(0,t.yg)("inlineCode",{parentName:"h2"},"liveProvider")," Prop"),(0,t.yg)("p",null,"Now, it's time to move our attention back to the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," component in our app."),(0,t.yg)("p",null,"We already have the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," prop passed in with the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider()")," function from ",(0,t.yg)("inlineCode",{parentName:"p"},"@refinedev/supabase"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { liveProvider } from "@refinedev/supabase";\nimport { supabaseClient } from "./utility";\n\nfunction App() {\n  return (\n    <Refine\n      // ...\n      liveProvider={liveProvider(supabaseClient)}\n    />\n  );\n}\n')),(0,t.yg)("p",null,"And that's it! The channel for ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," resource that was specified above in ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," will broadcast all mutations on the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table. And any subscriber will be able to receive real time updates about the changes."),(0,t.yg)("p",null,"Now, let's try opening the app in two browsers, one with Google account and one with GitHub. Navigate to a canvas page, the same one in both and try adding some ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," from each. We'll see that ",(0,t.yg)("inlineCode",{parentName:"p"},"pixel"),"s created in one are displayed in the other in real time:"),(0,t.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-18-refine-pixels-5/live-provider.gif",alt:"supabase realtime"}),(0,t.yg)("br",null),(0,t.yg)("p",null,"This looks like a magic, because we don't know how this is happening. And very pleasant because ",(0,t.yg)("inlineCode",{parentName:"p"},"create refine-app")," already generated the code that handles the PubSub logic for ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," ",(0,t.yg)("strong",{parentName:"p"},"PostregSQL CDC"),". Let's have a look to see what's happening in the ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," object."),(0,t.yg)("h3",{id:"refines-supabase-liveprovider-object"},"Refine's Supabase ",(0,t.yg)("inlineCode",{parentName:"h3"},"liveProvider")," Object"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," object has the following signature:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"const liveProvider = {\n    subscribe: ({ channel, params: { ids }, types, callback }) => any,\n    unsubscribe: (subscription) => void,\n    publish?: (event) => void,\n};\n")),(0,t.yg)("p",null,"In ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/liveProvider/index.ts"},(0,t.yg)("inlineCode",{parentName:"a"},"@refinedev/supabase"))," ",(0,t.yg)("inlineCode",{parentName:"p"},"version 5.0.0"),", at the time of publishing this article, the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," consists of only the ",(0,t.yg)("inlineCode",{parentName:"p"},"subscribe")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"unsubscribe")," methods. Its implementation looks like this:"),(0,t.yg)("p",null,"Let's have a look."),(0,t.yg)("details",null,(0,t.yg)("summary",null,"Show `liveProvider` code"),(0,t.yg)("p",null,(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="@refinedev/supabase liveProvider"',title:'"@refinedev/supabase','liveProvider"':!0},'import { LiveProvider, CrudFilter, CrudFilters } from "@refinedev/core";\nimport {\n  RealtimeChannel,\n  RealtimePostgresChangesPayload,\n  SupabaseClient,\n} from "@supabase/supabase-js";\nimport { liveTypes, supabaseTypes } from "../types";\nimport { mapOperator } from "../utils";\n\nexport const liveProvider = (supabaseClient: SupabaseClient): LiveProvider => {\n  return {\n    subscribe: ({ channel, types, params, callback }): RealtimeChannel => {\n      const resource = channel.replace("resources/", "");\n\n      const listener = (payload: RealtimePostgresChangesPayload<any>) => {\n        if (\n          types.includes("*") ||\n          types.includes(liveTypes[payload.eventType])\n        ) {\n          if (\n            liveTypes[payload.eventType] !== "created" &&\n            params?.ids !== undefined &&\n            payload.new?.id !== undefined\n          ) {\n            if (params.ids.map(String).includes(payload.new.id.toString())) {\n              callback({\n                channel,\n                type: liveTypes[payload.eventType],\n                date: new Date(payload.commit_timestamp),\n                payload: payload.new,\n              });\n            }\n          } else {\n            callback({\n              channel,\n              type: liveTypes[payload.eventType],\n              date: new Date(payload.commit_timestamp),\n              payload: payload.new,\n            });\n          }\n        }\n      };\n\n      const mapFilter = (filters?: CrudFilters): string | undefined => {\n        if (!filters || filters?.length === 0) {\n          return;\n        }\n\n        return filters\n          .map((filter: CrudFilter): string | undefined => {\n            if ("field" in filter) {\n              return `${filter.field}=${mapOperator(filter.operator)}.${\n                filter.value\n              }`;\n            }\n            return;\n          })\n          .filter(Boolean)\n          .join(",");\n      };\n\n      const client = supabaseClient.channel("any").on(\n        "postgres_changes",\n        {\n          event: supabaseTypes[types[0]] as any,\n          schema: "public",\n          table: resource,\n          filter: mapFilter(params?.filters),\n        },\n        listener,\n      );\n\n      return client.subscribe();\n    },\n\n    unsubscribe: async (channel: RealtimeChannel) => {\n      supabaseClient.removeChannel(channel);\n    },\n  };\n};\n')))),(0,t.yg)("p",null,"Both methods are concerned with subscription to the changes. That's because the publishing the event is done by mutation methods. In our case, it is done from the ",(0,t.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},(0,t.yg)("inlineCode",{parentName:"a"},"useCreate()"))," hook we invoke to create a pixel."),(0,t.yg)("h2",{id:"broadcasting"},"Broadcasting"),(0,t.yg)("p",null,"If we look inside our ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasShow />")," component that is rendered at ",(0,t.yg)("inlineCode",{parentName:"p"},"/canvases/:id"),", we have a ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasItem />")," component which basically displays all ",(0,t.yg)("inlineCode",{parentName:"p"},"pixel"),"s that belong to the ",(0,t.yg)("inlineCode",{parentName:"p"},"canvas")," item being visited. ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasItem />")," is also the component from where a ",(0,t.yg)("inlineCode",{parentName:"p"},"pixel")," is created, so let's look at that now:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/components/canvas/item.tsx"',title:'"src/pages/components/canvas/item.tsx"'},'import React from "react";\nimport { Typography } from "antd";\n\nimport { Pixel, Canvas } from "../../types";\nimport { DEFAULT_SCALE, PIXEL_SIZE } from "../../utility/constants";\n\nconst { Text } = Typography;\n\ntype CanvasItemProps = {\n  canvas: Canvas;\n  pixels: Pixel[] | undefined;\n  scale?: number;\n  border?: boolean;\n  active?: boolean;\n  onPixelClick?: (x: number, y: number) => void;\n};\n\nexport const CanvasItem: React.FC<CanvasItemProps> = ({\n  canvas: { id, name, width, height },\n  pixels,\n  scale = DEFAULT_SCALE,\n  border = true,\n  active = true,\n  onPixelClick,\n}) => {\n  return (\n    <div>\n      {Array.from({ length: height }).map((_, i) => (\n        <div key={`row-${i}`} style={{ display: "flex" }}>\n          {Array.from({ length: width }).map((_, j) => (\n            <div key={`row-${i}-col-${j}`}>\n              <div\n                onClick={() => {\n                  if (onPixelClick && active) {\n                    onPixelClick(j, i);\n                  }\n                }}\n                style={{\n                  cursor: active ? "pointer" : undefined,\n                  width: PIXEL_SIZE * scale,\n                  height: PIXEL_SIZE * scale,\n                  border: border ? "0.5px solid rgba(0,0,0,0.05)" : undefined,\n                  background:\n                    pixels?.find((el) => el.x === j && el.y === i)?.color ??\n                    "transparent",\n                }}\n              />\n            </div>\n          ))}\n        </div>\n      ))}\n      {!active && <Text className="canvas-name-text">{name ?? id}</Text>}\n    </div>\n  );\n};\n')),(0,t.yg)("p",null,"The most relevant thing to look in the component above is the ",(0,t.yg)("inlineCode",{parentName:"p"},"onPixelClick")," click event handler. It is a prop received by the ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasItem />")," from the ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasShow />")," component. It's original value is the ",(0,t.yg)("inlineCode",{parentName:"p"},"onSubmit()")," function defined inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasShow />")," component."),(0,t.yg)("p",null,"We'd like to focus on this ",(0,t.yg)("inlineCode",{parentName:"p"},"onSubmit")," event handler, because it is what facilitates the creation of a ",(0,t.yg)("inlineCode",{parentName:"p"},"pixel"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/canvases/show.tsx"',title:'"src/pages/canvases/show.tsx"'},'import { useCreate, useNavigation } from "@refinedev/core";\n\nexport const CanvasShow: React.FC = () => {\n  // ...\n\n  const { push } = useNavigation();\n  const { mutate } = useCreate();\n\n  const onSubmit = (x: number, y: number) => {\n    if (!authenticated) {\n      if (pathname) {\n        return push(`/login?to=${encodeURIComponent(pathname)}`);\n      }\n\n      return push(`/login`);\n    }\n\n    if (typeof x === "number" && typeof y === "number" && canvas?.id) {\n      mutate({\n        resource: "pixels",\n        values: {\n          x,\n          y,\n          color,\n          canvas_id: canvas?.id,\n          user_id: identity.id,\n        },\n        meta: {\n          canvas,\n        },\n        successNotification: false,\n      });\n    }\n  };\n\n  return /* ... */;\n};\n')),(0,t.yg)("p",null,"As we can see, with the call to ",(0,t.yg)("inlineCode",{parentName:"p"},"mutate")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"useCreate()")," hook, a new entry is being added to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table upon every click on the canvas."),(0,t.yg)("p",null,"And since we enabled realtime for the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table, each successful ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," action broadcasts the change to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," channel for subscribers to pick."),(0,t.yg)("br",null),(0,t.yg)("h3",{id:"refine-usepublish-hook"},"Refine ",(0,t.yg)("a",{parentName:"h3",href:"https://refine.dev/docs/api-reference/core/hooks/live/usePublish/"},(0,t.yg)("inlineCode",{parentName:"a"},"usePublish()"))," Hook"),(0,t.yg)("p",null,"The exact way it happens looks like this:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"useCreate()")," hook is called from the consumer component."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"useCreate()"),", behind the scenes, uses the live ",(0,t.yg)("inlineCode",{parentName:"li"},"usePublish()")," hook to publish the ",(0,t.yg)("inlineCode",{parentName:"li"},"created")," event to the ",(0,t.yg)("inlineCode",{parentName:"li"},"pixels")," channel on ",(0,t.yg)("strong",{parentName:"li"},"Supabase")," ",(0,t.yg)("strong",{parentName:"li"},"Realtime")," servers.")),(0,t.yg)("p",null,"The published event for ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," action produces an object with the following signature:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    channel: `resources/pixels`,\n    type: "created",\n    payload: {\n            ids: ["id-of-created-pixel"]\n    },\n    date: new Date(),\n}\n')),(0,t.yg)("p",null,"Feel free to go through the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"live hooks docs")," for details about how live publishing is supported by ",(0,t.yg)("inlineCode",{parentName:"p"},"useCreate()")," and other mutation hooks."),(0,t.yg)("h2",{id:"subscription"},"Subscription"),(0,t.yg)("p",null,"The changes to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," table can be subscribed by consumer components with the ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," hook. We are showing the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"<CanvasShow />")," component itself, but they are fetched inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," render-props component."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," hook inside ",(0,t.yg)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," looks like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/canvas/display.tsx"',title:'"src/components/canvas/display.tsx"'},'import React, { ReactElement } from "react";\nimport { useList } from "@refinedev/core";\n\nimport { Canvas } from "../../types/canvas";\nimport { Pixel } from "../../types/pixel";\n\ntype DisplayCanvasProps = {\n  canvas: Canvas;\n  children: (pixels: Pixel[] | undefined) => ReactElement;\n};\n\nexport const DisplayCanvas: React.FC<DisplayCanvasProps> = ({\n  canvas: { id },\n  children,\n}) => {\n  const { data } = useList<Pixel>({\n    resource: "pixels",\n    liveMode: "auto",\n    meta: {\n      select: "*, users(id, full_name, avatar_url)",\n    },\n    filters: [\n      {\n        field: "canvas_id",\n        operator: "eq",\n        value: id,\n      },\n    ],\n    sorters: [\n      {\n        field: "created_at",\n        order: "desc",\n      },\n    ],\n    pagination: {\n      mode: "off",\n    },\n  });\n\n  const pixels = data?.data;\n\n  return <>{children(pixels)}</>;\n};\n')),(0,t.yg)("p",null,"Among the loads of arguments and options passed to the ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," hook, we have used the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveMode: auto")," property which allows us to subscribe to the ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," channel for the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," disabled in the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," component, ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," acts as a normal ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider")," hook."),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," activated, under the hood, ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," banks on ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s ",(0,t.yg)("inlineCode",{parentName:"p"},"useResourceSubscription()")," live hook to communicate with the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,t.yg)("h3",{id:"refine-useresourcesubscription-hook"},"Refine ",(0,t.yg)("inlineCode",{parentName:"h3"},"useResourceSubscription()")," Hook"),(0,t.yg)("p",null,"The actual subscription is done by the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider.subscribe()")," method."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"subscribe()")," method is called from inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook in order to subscribe to the ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,t.yg)("p",null,"If you want to dive into the details, please feel free to do so in the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider")," docs here"),"."),(0,t.yg)("h2",{id:"summary"},"Summary"),(0,t.yg)("p",null,"In today's part, we implemented real time collaboration for drawing ",(0,t.yg)("inlineCode",{parentName:"p"},"pixels")," on ",(0,t.yg)("inlineCode",{parentName:"p"},"canvas")," items using ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," prop and its supporting hooks for publishing and subscribing to ",(0,t.yg)("strong",{parentName:"p"},"Supabase"),"'s ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," servers."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"subscribe()")," method on ",(0,t.yg)("strong",{parentName:"p"},"Supabase"),"'s ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," object allows us to subscribe to a channel created for a resource. Subscription for the resource is triggered by the ",(0,t.yg)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook called from data hooks that support live subscription - the ",(0,t.yg)("inlineCode",{parentName:"p"},"useList()")," hook in our example."),(0,t.yg)("p",null,"Broadcasting, in turn, is initiated by the ",(0,t.yg)("inlineCode",{parentName:"p"},"usePublish()")," hook called from a supported mutation hook for our resource - the ",(0,t.yg)("inlineCode",{parentName:"p"},"useCreate()")," hook in this case."),(0,t.yg)("p",null,"We implemented real time collaboration very effortlessly due to the out-of-box solutions provided by ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s ",(0,t.yg)("inlineCode",{parentName:"p"},"@refinedev/supabase")," package."),(0,t.yg)("p",null,"With this now, we have enabled multiple users to draw on a canvas at the same time and receive updates instantly."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-5/"},'Click here to read "Creating an Admin Dashboard with Refine" article. ',"\u2192")))}g.isMDXComponent=!0}}]);