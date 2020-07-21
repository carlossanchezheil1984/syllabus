(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),i=(n(0),n(277)),a={id:"instructors",title:"Instructor Notes",sidebar_label:"Instructor Notes"},s={id:"js-core-3/week-2/instructors",title:"Instructor Notes",description:"Lesson Aims",source:"@site/docs/js-core-3/week-2/mentors.md",permalink:"/js-core-3/week-2/instructors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-2/mentors.md",sidebar_label:"Instructor Notes",sidebar:"JavaScriptCore3",previous:{title:"Homework",permalink:"/js-core-3/week-2/homework"},next:{title:"JavaScript Core III - 3",permalink:"/js-core-3/week-3/lesson"}},c=[{value:"Lesson Aims",id:"lesson-aims",children:[]},{value:"Lesson Overview",id:"lesson-overview",children:[{value:"How the web works",id:"how-the-web-works",children:[]},{value:"What are APIs and how to interact with them",id:"what-are-apis-and-how-to-interact-with-them",children:[]},{value:"Fetch",id:"fetch",children:[]}]},{value:"To Be Improved",id:"to-be-improved",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"lesson-aims"},"Lesson Aims"),Object(i.b)("p",null,"This is the first time that students have been introduced to network programming and so can be a hard lesson since we fit a lot in"),Object(i.b)("p",null,"We made a very conscious decision to not include the teaching of ",Object(i.b)("inlineCode",{parentName:"p"},"Promises")," in this lesson and simply teach ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," as a recipe. The aim is to have the students creating interesting projects to keep them engaged rather than overload them with theory."),Object(i.b)("p",null,"The overarching plan for this lesson is repetition. By the end of the week they should be getting very used to the flow of"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use fetch to get some data"),Object(i.b)("li",{parentName:"ol"},"Parse the result"),Object(i.b)("li",{parentName:"ol"},"Use DOM manipulation to do something on the screen with the data")),Object(i.b)("h2",{id:"lesson-overview"},"Lesson Overview"),Object(i.b)("h3",{id:"how-the-web-works"},"How the web works"),Object(i.b)("p",null,"We felt it was important to give a recap of how the internet works in particular ",Object(i.b)("inlineCode",{parentName:"p"},"Status Codes")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Methods")," since they will be using them in the lesson."),Object(i.b)("p",null,"We tried to keep it to the most minimal selection of codes and methods so that we don't overload the students with too much new information."),Object(i.b)("h3",{id:"what-are-apis-and-how-to-interact-with-them"},"What are APIs and how to interact with them"),Object(i.b)("p",null,"A short overview of what an API is and how it works."),Object(i.b)("p",null,"When showing examples of APIs it's important to show it working in a browser so the students can see the JSON response. They should be fairly good at reading JSON at this point since it's very similar to a JavaScript Object."),Object(i.b)("h3",{id:"fetch"},"Fetch"),Object(i.b)("p",null,"The most important points to impart when teaching this section are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The general flow of a ",Object(i.b)("inlineCode",{parentName:"li"},"Promise"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"i.e. first you use ",Object(i.b)("inlineCode",{parentName:"li"},"fetch().")," and then ",Object(i.b)("inlineCode",{parentName:"li"},".then()")))),Object(i.b)("li",{parentName:"ul"},"Whatever is returned from a ",Object(i.b)("inlineCode",{parentName:"li"},".then()")," is returned in the next section"),Object(i.b)("li",{parentName:"ul"},"How to use ",Object(i.b)("inlineCode",{parentName:"li"},".json()")," to get the JSON from the request")),Object(i.b)("p",null,"Live Coding from scratch is really important here since the students will be doing an exercise later on to"),Object(i.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(i.b)("p",null,"A completed example of this exercise can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://codeyourfuture.github.io/syllabus-london/js-core-3/week-2/js-core-3/week-1/completed_country_website"}),"here")),Object(i.b)("h2",{id:"to-be-improved"},"To Be Improved"))}b.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=b(n),u=r,d=h["".concat(a,".").concat(u)]||h[u]||p[u]||i;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);