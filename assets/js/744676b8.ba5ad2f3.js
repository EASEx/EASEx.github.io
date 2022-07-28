"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7723],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Creating New Problems",u={unversionedId:"testing/questions",id:"testing/questions",title:"Creating New Problems",description:"Requirements",source:"@site/docs/testing/questions.md",sourceDirName:"testing",slug:"/testing/questions",permalink:"/docs/testing/questions",draft:!1,editUrl:"https://github.com/EASEx/EASEx.github.io/blob/master/docs/testing/questions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating New Problem-solving Sessions",permalink:"/docs/testing/create"},next:{title:"Monitoring Sessions",permalink:"/docs/testing/statistics"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Title",id:"title",level:3},{value:"Notebook URLs",id:"notebook-urls",level:3},{value:"Answers",id:"answers",level:3},{value:"Actions",id:"actions",level:3},{value:"Dialogue",id:"dialogue",level:4},{value:"Code (Optional)",id:"code-optional",level:4},{value:"Data (Optional)",id:"data-optional",level:4},{value:"Type",id:"type",level:4}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-new-problems"},"Creating New Problems"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To create a new problem, you must have the following content available:"),(0,o.kt)("h3",{id:"title"},"Title"),(0,o.kt)("p",null,"You must assign the problem a suitable title, which will be used as an identifier while creating problem-solving sessions. The name should always be unique, and cannot be changed later."),(0,o.kt)("h3",{id:"notebook-urls"},"Notebook URLs"),(0,o.kt)("p",null,"You can add multiple notebook URLs (via google colab) that can be used to connect to the problem-solving session. It is your responsibility to distribute the URLs to the students, and in case of multiple URLs, to distribute them correctly. EASEx will block any sessions from all other possible URLs."),(0,o.kt)("h3",{id:"answers"},"Answers"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Previously discussed in creating questions ",(0,o.kt)("a",{parentName:"em",href:"../testing/create"},"here"))),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("p",null,"You need to upload a zip file containing all the actions. The zip file must have the required structure as described below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"main.csv\ndata/\npython/\ndialogue\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"main.csv")," describes the structure of each action like this:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"dialogue"),(0,o.kt)("th",{parentName:"tr",align:null},"code"),(0,o.kt)("th",{parentName:"tr",align:null},"data"),(0,o.kt)("th",{parentName:"tr",align:null},"type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hey! How are you?"),(0,o.kt)("td",{parentName:"tr",align:null},"file:/python/a.py"),(0,o.kt)("td",{parentName:"tr",align:null},"file:/data/a.html"),(0,o.kt)("td",{parentName:"tr",align:null},"motivational")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"file:/dialogue/b.ssml"),(0,o.kt)("td",{parentName:"tr",align:null},"file:/python/b.py"),(0,o.kt)("td",{parentName:"tr",align:null},"file:/data/b.md"),(0,o.kt)("td",{parentName:"tr",align:null},"motivational")))),(0,o.kt)("h4",{id:"dialogue"},"Dialogue"),(0,o.kt)("p",null,"Dialogue is literally the dialogue spoken by the embodied agent. It can either be text, or the path to a SSML file."),(0,o.kt)("h4",{id:"code-optional"},"Code (Optional)"),(0,o.kt)("p",null,"It refers to any arbitrary code that should be run inside the students' notebook when the action is triggered. It must be a path to a python file.\nNote that you will need to import everything you are going to use in the file itself and not rely on modules already imported in the notebook. This is because the code is executed in a isolated context and has no access to notebook's python runtime."),(0,o.kt)("h4",{id:"data-optional"},"Data (Optional)"),(0,o.kt)("p",null,"Data is some textual information that can be presented to the student in the application (e.g., pandas documentation). It must be a file path to a markdown or HTML file."),(0,o.kt)("h4",{id:"type"},"Type"),(0,o.kt)("p",null,"It refers to the type of scaffolding being provided in the action. You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"../concepts/scaffoldtype"},"here")),(0,o.kt)("p",null,"You can download a sample zip file ",(0,o.kt)("a",{target:"_blank",href:n(2271).Z},"here"),"."))}m.isMDXComponent=!0},2271:function(e,t,n){t.Z=n.p+"assets/files/actions-d0e5293c5dab64921b94096032643394.zip"}}]);