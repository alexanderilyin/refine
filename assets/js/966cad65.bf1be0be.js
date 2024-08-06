"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50843],{6527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(37953);var r=a(58860),n=a(82433),i=a(47191);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of Refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["Refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},u=void 0,d={permalink:"/blog/refine-vs-react-admin",source:"@site/blog/2021-11-26-refine-vs-react-admin.md",title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of Refine and react-admin",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:14.425,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of Refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["Refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},nextItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},relatedPosts:[{title:"Setting Up the Invoicer App",description:"We start with setting up the Invoicer app by choosing Ant Design as a UI framework and Strapi as a dataprovider",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.145,date:"2023-04-11T00:00:00.000Z"},{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"July 31, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:18.35,date:"2024-07-31T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"July 10, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.835,date:"2024-07-10T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"},{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",description:"With the Refine being headless, we may use any UI we choose for our Admin Panel. In this tutorial, we'll create a Nostalgic-style admin panel using Refine and React95 UI.",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.485,date:"2022-03-22T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.565,date:"2022-02-21T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"React-Admin",id:"react-admin",level:2},{value:"Installation",id:"installation",level:3},{value:"Features",id:"features",level:3},{value:"SSR - Next.js Support",id:"ssr---nextjs-support",level:3},{value:"Routing",id:"routing",level:3},{value:"Data Provider Logic",id:"data-provider-logic",level:3},{value:"GraphQL Data Provider",id:"graphql-data-provider",level:4},{value:"React-Admin Available Providers",id:"react-admin-available-providers",level:3},{value:"Customization",id:"customization",level:3},{value:"UI/UX Customization:",id:"uiux-customization",level:4},{value:"Logic Customization:",id:"logic-customization",level:4},{value:"Pricing",id:"pricing",level:3},{value:"Refine",id:"refine",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Features",id:"features-1",level:3},{value:"SSR - Next.js Support",id:"ssr---nextjs-support-1",level:3},{value:"SSR-Next.js Setup",id:"ssr-nextjs-setup",level:4},{value:"SSR-Next.js Basic Usage",id:"ssr-nextjs-basic-usage",level:4},{value:"Routing",id:"routing-1",level:3},{value:"Data Provider Logic",id:"data-provider-logic-1",level:3},{value:"GraphQL Data Provider",id:"graphql-data-provider-1",level:4},{value:"Basic GraphQL Usage",id:"basic-graphql-usage",level:4},{value:"Refine Available Providers",id:"refine-available-providers",level:3},{value:"Customization",id:"customization-1",level:3},{value:"UI/UX Customization:",id:"uiux-customization-1",level:4},{value:"Logic Customization:",id:"logic-customization-1",level:4},{value:"Pricing",id:"pricing-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:c},h="wrapper";function y(e){var{components:t}=e,a=l(e,["components"]);return(0,r.yg)(h,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){o(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"You can read an updated and detailed version of this article ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/blog/react-admin-vs-refine/"},"here"),".")),(0,r.yg)("p",null,"If you are reading this, chances are you are a developer researching options for delivering an admin panel or another internal tool. Together with you, we will take a look at the best admin panel frameworks in response to this need."),(0,r.yg)("p",null,"Motivation is our most important resource when developing a project. If you lose your motivation as your project progresses, you will not be able to produce a successful product. The point where you will lose this feeling the most is the point where you cannot meet your Business needs. Different UI / UX solutions may be requested for many business models and it is very important that you can realize them regardless of the framework you use."),(0,r.yg)("p",null,"When you decide to use these types of frameworks, we need to know to what extent and how they solve your work. If we do not know what these frameworks do and how customizable they are, the problems we may encounter can reduce our motivation."),(0,r.yg)("p",null,"We will examine how the frameworks we will talk about solve our work and how customizable they are under the title of ",(0,r.yg)("inlineCode",{parentName:"p"},"Customization"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"This comparison table strives to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) contact ",(0,r.yg)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev")," or you can open a issue on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Github"),".")),(0,r.yg)("h2",{id:"react-admin"},"React-Admin"),(0,r.yg)("p",null,"React-Admin is an B2B application framework based on Material Design, using Material UI. It provides ready-to-fetch-data components, so you just compose them together to create an application."),(0,r.yg)("p",null,"It can fetch data from any API connected to the data source, like REST, GraphQL, RPC. It\u2019s powered by React, React Router, Redux, and Redux Saga, while Material UI is responsible for the visual."),(0,r.yg)("p",null,"React-admin uses Redux and redux-saga for state management. React-Admin creates actions and reducers automatically. Developer should only create data provider, which is used for running requests to the server side and parse server responses. But in some cases it is necessary to run non-typical request to the server side, or to change custom Store parameters. In this case React-Admin gives possibility to create custom actions, reducers and sagas."),(0,r.yg)("p",null,"React-admin is a framework that has been developed for a long time and has a wider community. Besides being stable, it works with old technologies."),(0,r.yg)("h3",{id:"installation"},"Installation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Can be included in another React app"),(0,r.yg)("li",{parentName:"ul"},"Installation is very simple")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install react-admin\n#or\nyarn add react-admin\n")),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It can be used with any backend(Rest, GraphQL, SOAP)"),(0,r.yg)("li",{parentName:"ul"},"API-based. The UI fetches the data from an API connected to the data source."),(0,r.yg)("li",{parentName:"ul"},"Powered by Material UI, Redux, Redux Saga, React-router."),(0,r.yg)("li",{parentName:"ul"},"Supports any authentication provider of your choice(REST API, OAuth, Basic Auth)"),(0,r.yg)("li",{parentName:"ul"},"Internationalization : Uses i18n"),(0,r.yg)("li",{parentName:"ul"},"Supports data validation")),(0,r.yg)("h3",{id:"ssr---nextjs-support"},"SSR - Next.js Support"),(0,r.yg)("p",null,"React-Admin does not support SSR-Next.js. Therefore, it only helps you develop B2B and admin panel applications."),(0,r.yg)("h3",{id:"routing"},"Routing"),(0,r.yg)("p",null,"React admin does it with react-router-dom to save routes. You need to create your own module and define it in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Route>")," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/customRoutes.js"',title:'"src/customRoutes.js"'},'import * as React from "react";\nimport { Route } from "react-router-dom";\nimport Foo from "./Foo";\nimport Bar from "./Bar";\n\nexport default [\n  <Route exact path="/foo" component={Foo} />,\n  <Route exact path="/bar" component={Bar} />,\n];\n')),(0,r.yg)("p",null,"Then, pass this array as customRoutes prop in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Admin>")," component:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import * as React from "react";\nimport { Admin } from "react-admin";\n\nimport customRoutes from "./customRoutes";\n\nconst App = () => (\n  <Admin\n    customRoutes={customRoutes}\n    dataProvider={simpleRestProvider("http://path.to.my.api")}\n  >\n    ...\n  </Admin>\n);\n\nexport default App;\n')),(0,r.yg)("p",null,"Now, when a user browses to /foo or /bar, the components you defined will appear in the main part of the screen."),(0,r.yg)("h3",{id:"data-provider-logic"},"Data Provider Logic"),(0,r.yg)("p",null,"When React-admin needs to communicate with API, it uses Data Provider."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-26-refine-vs-react-admin/admin_flow.png",alt:"admin"}),(0,r.yg)("p",null,"Here are the React-Admin data provider methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const dataProvider = {\n  getList: (resource, params) => Promise,\n  getOne: (resource, params) => Promise,\n  getMany: (resource, params) => Promise,\n  getManyReference: (resource, params) => Promise,\n  create: (resource, params) => Promise,\n  update: (resource, params) => Promise,\n  updateMany: (resource, params) => Promise,\n  delete: (resource, params) => Promise,\n  deleteMany: (resource, params) => Promise,\n};\n")),(0,r.yg)("h4",{id:"graphql-data-provider"},"GraphQL Data Provider"),(0,r.yg)("p",null,"We can say that React-Admin is a bit lacking in terms of both graphql provider and its documentation."),(0,r.yg)("p",null,"React-Admin calls the GraphQL endpoint by running an introspection query for GraphQL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\nimport { Component } from "react";\nimport buildGraphQLProvider from "ra-data-graphql-simple";\nimport { Admin, Resource } from "react-admin";\n\nimport { PostCreate, PostEdit, PostList } from "./posts";\n\nconst App = () => {\n  const [dataProvider, setDataProvider] = React.useState(null);\n  React.useEffect(() => {\n    buildGraphQLProvider({\n      clientOptions: { uri: "http://localhost:4000" },\n    }).then((graphQlDataProvider) =>\n      setDataProvider(() => graphQlDataProvider),\n    );\n  }, []);\n\n  if (!dataProvider) {\n    return <div>Loading</div>;\n  }\n\n  return (\n    <Admin dataProvider={dataProvider}>\n      <Resource\n        name="Post"\n        list={PostList}\n        edit={PostEdit}\n        create={PostCreate}\n      />\n    </Admin>\n  );\n};\n\nexport default App;\n')),(0,r.yg)("p",null,"When we want to see this data in a table, all GraphQL entities are queried requested by default(even if you don't add columns to the table). This is against GraphQL's approach and is a scenario we would not want."),(0,r.yg)("p",null,"The way to prevent this is to override all your queries."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/dataProvider.js"',title:'"src/dataProvider.js"'},'import buildGraphQLProvider, { buildQuery } from "ra-data-graphql-simple";\n\nconst myBuildQuery = (introspection) => (fetchType, resource, params) => {\n  const builtQuery = buildQuery(introspection)(fetchType, resource, params);\n\n  if (resource === "Command" && fetchType === "GET_ONE") {\n    return {\n      // Use the default query variables and parseResponse\n      ...builtQuery,\n      // Override the query\n      query: gql`\n        query Command($id: ID!) {\n          data: Command(id: $id) {\n            id\n            reference\n            customer {\n              id\n              firstName\n              lastName\n            }\n          }\n        }\n      `,\n    };\n  }\n\n  return builtQuery;\n};\n\nexport default buildGraphQLProvider({ buildQuery: myBuildQuery });\n')),(0,r.yg)("p",null,"Although this is a solution, it complicates your project in many ways (debugging, maintenance, etc...)."),(0,r.yg)("h3",{id:"react-admin-available-providers"},"React-Admin Available Providers"),(0,r.yg)("p",null,"The providers that React admin supports are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Simple Rest: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest"},"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest")),(0,r.yg)("li",{parentName:"ul"},"Json Server: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server"},"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server")),(0,r.yg)("li",{parentName:"ul"},"Simple GraphQL: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphql-simple"},"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphql-simple")),(0,r.yg)("li",{parentName:"ul"},"Local JSON: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-localstorage"},"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-localstorage")),(0,r.yg)("li",{parentName:"ul"},"Local Storage: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-localstorage"},"https://github.com/marmelab/react-admin/tree/master/packages/ra-data-localstorage")),(0,r.yg)("li",{parentName:"ul"},"Supabase: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/marmelab/ra-supabase"},"https://github.com/marmelab/ra-supabase"))),(0,r.yg)("h3",{id:"customization"},"Customization"),(0,r.yg)("p",null,"With React-Admin, you can develop effective B2B applications and admin panels in a very short time. Although most of the processes are handled with hooks, the general architecture is built on components. In general, we can say that it is customizable but not very flexible. In some cases or business models, you may need to think about this yourself and make some additions."),(0,r.yg)("h4",{id:"uiux-customization"},"UI/UX Customization:"),(0,r.yg)("p",null,"React-Admin offers solutions in component architecture. The disadvantage of this is that you will have difficulty meeting your customization needs or different business requests. These customizable, but they can be a bit of a hard for different business models."),(0,r.yg)("h4",{id:"logic-customization"},"Logic Customization:"),(0,r.yg)("p",null,"React-Admin uses redux and redux-saga for state management. You should know these two technologies well. In some cases you may need to create the actions and reducers yourself. This is also a disadvantage for many situations."),(0,r.yg)("h3",{id:"pricing"},"Pricing"),(0,r.yg)("p",null,"In addition to these features it provides, React-Admin offers some modules as Enterprise-Edition."),(0,r.yg)("p",null,"A few of these modules are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"RBAC"),(0,r.yg)("li",{parentName:"ul"},"Editable-Datagrid"),(0,r.yg)("li",{parentName:"ul"},"Realtime"),(0,r.yg)("li",{parentName:"ul"},"Search"),(0,r.yg)("li",{parentName:"ul"},"Navigation")),(0,r.yg)("h2",{id:"refine"},"Refine"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," is a React-based framework that helps you to develop admin panel, B2B and dashboard that can be fully customized with Ant Design."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," directly provides Ant Design components and some hooks to work with those components. These hooks give you the required props for those Ant Design components."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," is a collection of helper hooks, components and providers. They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," uses ",(0,r.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," for data processing, caching, and state management. In this respect, you do not need to define anything extra for every cases and model."),(0,r.yg)("p",null,"Although ",(0,r.yg)("strong",{parentName:"p"},"Refine")," is a newer framework, it is successful in identifying deficiencies in development and producing solutions accordingly. Using new technologies, it offers users more effective and simpler development options."),(0,r.yg)("h3",{id:"installation-1"},"Installation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Installation is very simple and customizable options can be added.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest demo-refine-project -- -b v3\n")),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-26-refine-vs-react-admin/project_setup.gif",alt:"setup"}),(0,r.yg)("h3",{id:"features-1"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Configuration: One-line setup with superplate. Project setup is very simple. Using superplate you can choose the content of your project and the features you want to add.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"UI: You have full control over the UI elements. Fully customizable, open to use. Works seamlessly with Ant Design.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Out-of-the-box: Routing, networking, authentication, state management, i18n and UI.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Next.js / SSR integration: refine can be used with Next.js to SSR your pages.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"React Location: React Location router provider support"))),(0,r.yg)("h3",{id:"ssr---nextjs-support-1"},"SSR - Next.js Support"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," has support for SSR - Next.js. This is an important feature that separates Refine from other frameworks. Thanks to this feature, Refine provides the opportunity to develop B2C applications in addition to B2B and admin panel."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,r.yg)("h4",{id:"ssr-nextjs-setup"},"SSR-Next.js Setup"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @refinedev/nextjs-router\n")),(0,r.yg)("h4",{id:"ssr-nextjs-basic-usage"},"SSR-Next.js Basic Usage"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," must wrap your pages in a custom App component. This way your pages are integrated to refine."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/_app.tsx",title:"pages/_app.tsx"},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n    >\n      <Component {...pageProps} />\n    </Refine>\n  );\n}\n\nexport default MyApp;\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/ssr/nextjs/"},"For more information on how to add SSR-Next.js to your Refine project ->")),(0,r.yg)("h3",{id:"routing-1"},"Routing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," uses a customized Router Provider to save routes and navigate between pages. ",(0,r.yg)("strong",{parentName:"p"},"Refine")," offers a much more flexible structure thanks to its routerProvider support."),(0,r.yg)("p",null,"A router provider must include the following methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const routerProvider = {\n    useHistory: () => {\n        push: (...args) => any,\n        replace: (...args) => any,\n        goBack: (...args) => any,\n    },\n    useLocation: () => {\n        pathname: string,\n        search: string,\n    },\n    useParams: <Params extends { [K in keyof Params]?: string } = {}>() => Params,\n    Prompt: React.FC<PromptProps*>,\n    Link: React.FC<any>,\n    RouterComponent?: React.FC<any>,\n};\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Refine")," includes many router providers to use in your projects like:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"React Router"),(0,r.yg)("li",{parentName:"ul"},"React Location"),(0,r.yg)("li",{parentName:"ul"},"Next.js Router"))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},"To take a look at how other router providers are defined and working")),(0,r.yg)("p",null,"To activate router provider in ",(0,r.yg)("strong",{parentName:"p"},"Refine"),", we have to pass the routerProvider to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,r.yg)(n.A,{defaultValue:"react-router",values:[{label:"React Router",value:"react-router"},{label:"React Location",value:"react-location"},{label:"Next.js Router",value:"nextjs"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"react-router",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,r.yg)(i.A,{value:"react-location",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-location";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,r.yg)(i.A,{value:"nextjs",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n')))),(0,r.yg)("p",null,"You just need to tell the route of your component to the routerProvider."),(0,r.yg)("h3",{id:"data-provider-logic-1"},"Data Provider Logic"),(0,r.yg)("p",null,"A data provider is the place where a ",(0,r.yg)("strong",{parentName:"p"},"Refine")," app communicates with an API."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-26-refine-vs-react-admin/refine_flow.png",alt:"refine"}),(0,r.yg)("p",null,"A data provider must include following methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const dataProvider = {\n  create: ({ resource, variables, meta }) => Promise,\n  createMany: ({ resource, variables, meta }) => Promise,\n  deleteOne: ({ resource, id, meta }) => Promise,\n  deleteMany: ({ resource, ids, meta }) => Promise,\n  getList: ({ resource, pagination, sorters, filters, meta }) => Promise,\n  getMany: ({ resource, ids, meta }) => Promise,\n  getOne: ({ resource, id, meta }) => Promise,\n  update: ({ resource, id, variables, meta }) => Promise,\n  updateMany: ({ resource, ids, variables, meta }) => Promise,\n  custom: ({ url, method, sorters, filters, payload, query, headers, meta }) =>\n    Promise,\n  getApiUrl: () => "",\n};\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Data hooks uses React Query to manage data fetching. React Query handles important concerns like caching, invalidation, loading states etc..")),(0,r.yg)("h4",{id:"graphql-data-provider-1"},"GraphQL Data Provider"),(0,r.yg)("p",null,"It is well covered by GraphQL data provider ",(0,r.yg)("strong",{parentName:"p"},"Refine")," and explained step by step in the documentation."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," GraphQL data provider is built with ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"qql-query-builder")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),". The purpose here is to send dynamic queries that we can do with qql-query-builder as requests with graphql-request."),(0,r.yg)("p",null,"Query builder helps us build queries and mutations. We can use these queries with the getList, getMany and getOne methods in our data provider. On the other hand, the create, createMany, update, updateMany, deleteOne and deleteMany methods generate a mutation to send a request."),(0,r.yg)("p",null,"In order to create a query, we need to specify the fields that we will use from our data provider. Thanks to the MetaDataQuery, we pass these fields to our data provider and start using them."),(0,r.yg)("h4",{id:"basic-graphql-usage"},"Basic GraphQL Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"src/App.tsx","src/App.tsx":!0},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider, { GraphQLClient } from "@refinedev/graphql";\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(client)}\n    />\n  );\n};\n')),(0,r.yg)("p",null,"When sending the request, we must specify which fields will come, so we send fields in ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," to hooks that we will fetch data from."),(0,r.yg)(n.A,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"usage",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'export const PostList = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    sorters: {\n      initial: [\n        {\n          field: "id",\n          order: "asc",\n        },\n      ],\n    },\n    // highlight-start\n    meta: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n      ],\n    },\n    // highlight-end\n  });\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    // highlight-start\n    meta: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          sorter={{ multiple: 2 }}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n        />\n        <Table.Column\n          key="title"\n          dataIndex="title"\n          title="Title"\n          sorter={{ multiple: 1 }}\n        />\n        <Table.Column<IPost>\n          dataIndex="category"\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n          render={(_, record) => record.category.title}\n        />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n'))),(0,r.yg)(i.A,{value:"output",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"query ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,r.yg)("p",null,"Here we only make requests for queries that are necessary. As you can see, all you have to do is specify the field you want to select with ",(0,r.yg)("inlineCode",{parentName:"p"},"meta"),"."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/graphql"},"Refer to the GraphQL for detailed usage. \u2192 ")),(0,r.yg)("h3",{id:"refine-available-providers"},"Refine Available Providers"),(0,r.yg)("p",null,"Connects to any REST or GraphQL custom backend."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NestJs CRUD: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud")),(0,r.yg)("li",{parentName:"ul"},"Airtable: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable")),(0,r.yg)("li",{parentName:"ul"},"Strapi: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi")),(0,r.yg)("li",{parentName:"ul"},"Strapi v4: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4")),(0,r.yg)("li",{parentName:"ul"},"Supabase: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase")),(0,r.yg)("li",{parentName:"ul"},"Hasura: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura")),(0,r.yg)("li",{parentName:"ul"},"Appwrite: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite"))),(0,r.yg)("h3",{id:"customization-1"},"Customization"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Refine's"),' motivation and main purpose are as follows: "Higher-level frontend frameworks can save you a lot time, but they typically offer you a trade-off between speed and flexibility."'),(0,r.yg)("li",{parentName:"ul"},"While the admin panel allows you to make dashboard, B2B and B2C applications quickly, we offer you flexibility in your UI or business model.")),(0,r.yg)("h4",{id:"uiux-customization-1"},"UI/UX Customization:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine"),", comes ready-made decoupled from the UI, and is used. ",(0,r.yg)("strong",{parentName:"p"},"Refine")," mostly touches UI components via hooks. The main advantage of this for you is that you can successfully perform any Business request or different case."),(0,r.yg)("h4",{id:"logic-customization-1"},"Logic Customization:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine"),", works flawless with react-query. You don't have to worry about state management in your business model or when you encounter a different situation."),(0,r.yg)("h3",{id:"pricing-1"},"Pricing"),(0,r.yg)("p",null,"All features of ",(0,r.yg)("strong",{parentName:"p"},"Refine")," are available as ",(0,r.yg)("strong",{parentName:"p"},"open source"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Access Control Provider (RBAC, ABAC, ACL, IP, LDAP, etc...)"),(0,r.yg)("li",{parentName:"ul"},"Realtime"),(0,r.yg)("li",{parentName:"ul"},"Search"),(0,r.yg)("li",{parentName:"ul"},"Navigation and more features are available")),(0,r.yg)("p",null,"If you want to get information about the Enterprise, Refine ready to help you for Support and Training.\n",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/enterprise/"},"For more info about Enterprise->")),(0,r.yg)("p",null,"Refine Docs & Demo: ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Documentation")," - ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/demo/"},"Live Demo")),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"With the pricing, customization and flexibility that ",(0,r.yg)("strong",{parentName:"p"},"Refine")," offers you, you will be able to meet all your business demands. In addition, you can easily develop both B2B and B2C applications using a single framework with the support of SSR - Next.js."),(0,r.yg)("p",null,"In general, these frameworks that we are comparing have appeared for the same purpose. All of them are successful in meeting business demands and offering you a solution. Here are the this solutions way that they offer, they may differ and there may be distinguishing features between them."),(0,r.yg)("p",null,"At this point, the questions you should ask when choosing these of framework may be as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"How flexible are they in offering solutions to the different business demands we may encounter?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"How difficult will it be to implement the providers and features we will be using?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If any problem arises, can I easily find a solution from the documentation?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"How dependent am I on this framework when using it in my project and does it offer customization possibilities?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"What does it offer me as an extra feature?"))),(0,r.yg)("p",null,"In this article, we tried to answer these questions. By reading this article, you can choose the appropriate framework for your project and use it."))}y.isMDXComponent=!0}}]);