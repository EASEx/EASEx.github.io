"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[438],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7792:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c="Rules",l={unversionedId:"concepts/rules",id:"concepts/rules",title:"Rules",description:"Having gone through actions, you must be wondering how we actually find how to trigger actions?",source:"@site/docs/concepts/rules.md",sourceDirName:"concepts",slug:"/concepts/rules",permalink:"/docs/concepts/rules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/rules.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/docs/concepts/actions"},next:{title:"types",permalink:"/docs/concepts/types"}},u={},p=[{value:"Data Streams",id:"data-streams",level:2},{value:"Responsiveness",id:"responsiveness",level:3},{value:"YAML Schema Definition",id:"yaml-schema-definition",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rules"},"Rules"),(0,a.kt)("p",null,"Having gone through actions, you must be wondering how we actually find how to trigger actions?"),(0,a.kt)("p",null,"We use a set of rules to trigger these actions, which can be easily configured by you. Rules are simple binary equations that operate on a set of data streams, which is explained below."),(0,a.kt)("h2",{id:"data-streams"},"Data Streams"),(0,a.kt)("h3",{id:"responsiveness"},"Responsiveness"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mouse Movement: "),(0,a.kt)("li",{parentName:"ul"},"Keyboard Activity:"),(0,a.kt)("li",{parentName:"ul"},"No Cell Execution:")),(0,a.kt)("h3",{id:"yaml-schema-definition"},"YAML Schema Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'responsiveness:\n  frequency: 60\n  indicators:\n    no_mouse_movement:\n      enabled: true\n      threshold: 180\n    no_keyboard_activity:\n      enabled: true\n      threshold: 180\n    no_cell_execution:\n      enabled: true\n      threshold: "10m"\n  expr: "(mouse && keyboard) || cell_execution"\n  actions:\n    - 0x00\n\n\nstuck:\n  frequency: 10\n  indicators:\n    high_error_frequency:\n      enabled: true\n      min_normalized_frequency: 10\n      time: 180\n      early_trigger: 0\n    last_execution_is_an_error:\n      enabled: true\n      threshold: 600\n      reset_threshold:\n  expr: "high_error_frequency || time_elapsed_since_last_execution_was_an_error"\n  actions:\n    - 0x00\n\n\nerror:\n  indicators:\n    jupyter_output:\n      enabled: true\n      threshold: 420\n    syntax_checker:\n      threshold: 420\n      enabled: false\n  expr: "jupyter_output or syntax_checker"\n  actions:\n    - 0x01\n    - 0x02\n\nmodule_usage:\n  modules:\n    - name: matplotlib\n      threshold: 1800\n      actions:\n        - 0x00\n    - name: numpy\n      threshold: 900\n      actions:\n        - 0x00\n  expr: matplotlib and numpy\n\n\nfunction_usage:\n  functions:\n    - name: barplot\n      module: matplotlib.pyplot\n      threshold: 600\n      actions:\n        - 0x01\n    - name: barplot\n      module: seaborn\n      threshold: 600\n      actions:\n        - 0x01\n  expr: "seaborn.barplot or matplotlib.pyplot.barplot"\n\n\npassive:\n  - action: 0x00\n    threshold: 600\n')))}m.isMDXComponent=!0}}]);