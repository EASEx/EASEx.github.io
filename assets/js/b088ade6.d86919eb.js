"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3979],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5739:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:3},c="R3D",u={unversionedId:"architecture/r3d",id:"architecture/r3d",title:"R3D",description:"The R3D (3D Rendering Unit) is responsible for rendering the embodied agent. It comprises:",source:"@site/docs/architecture/r3d.md",sourceDirName:"architecture",slug:"/architecture/r3d",permalink:"/docs/architecture/r3d",draft:!1,editUrl:"https://github.com/EASEx/EASEx.github.io/blob/master/docs/architecture/r3d.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NLU",permalink:"/docs/architecture/nlu"},next:{title:"Scheduler",permalink:"/docs/architecture/scheduler"}},l={},p=[{value:"Text-to-Speech (TTS)",id:"text-to-speech-tts",level:2},{value:"Forced Alignment",id:"forced-alignment",level:2},{value:"3D Mesh",id:"3d-mesh",level:2},{value:"VOCA",id:"voca",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"r3d"},"R3D"),(0,o.kt)("p",null,"The R3D (3D Rendering Unit) is responsible for rendering the embodied agent. It comprises:"),(0,o.kt)("h2",{id:"text-to-speech-tts"},"Text-to-Speech (TTS)"),(0,o.kt)("p",null,"We use the commercially available Microsoft Neural Text to Speech Engine for all tasks. The choice has been made keeping in mind the extensive support for SSML (speech synthesis markup language). You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/"},"here"),"."),(0,o.kt)("h2",{id:"forced-alignment"},"Forced Alignment"),(0,o.kt)("p",null,"Although TTS provides us with speech, we still need timestamps for each word to sync the video with audio. This is done using forced alignment, which is a machine learning algorithm that determines timestamps of words in an audio, given both the audio and its transcript. We use the open source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flashlight/flashlight"},"FlashLight ASR ")," for the task. We did not see any significant erros in our test runs."),(0,o.kt)("h2",{id:"3d-mesh"},"3D Mesh"),(0,o.kt)("p",null,"Before we move on to rendering, we first discuss the meshes (i.e., agent skins) available to use. Unlike most competing systems, we offer the ability to customize the skin. All the meshes are standard RPM skins. You can create your own skin ",(0,o.kt)("a",{parentName:"p",href:"https://readyplayer.me/"},"here")," and upload them while creating a problem-solving session to use it. We also offer some prebuilt skins (male/female/gender ambiguous) if you do not have the resources to design your own skin."),(0,o.kt)("h2",{id:"voca"},"VOCA"),(0,o.kt)("p",null,"We use the open source framework ",(0,o.kt)("a",{parentName:"p",href:"https://voca.is.tue.mpg.de"},"VOCA")," to generate body movements for running speech. This is rendered using Blender's Python API, merged with the audio stream, overlayed with subtitles and finally presented as a video stream."))}h.isMDXComponent=!0}}]);