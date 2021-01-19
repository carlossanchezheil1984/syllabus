(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(249)),c={id:"javascript-classes",title:"JavaScript Classes",sidebar_label:"JavaScript Classes"},s={unversionedId:"js-core-3/other/javascript-classes",id:"js-core-3/other/javascript-classes",isDocsHomePage:!1,title:"JavaScript Classes",description:"Variables can be used to hold information about the state your code is in, e.g. how many times someone has clicked on a button:",source:"@site/docs/js-core-3/other/javascript-classes.md",slug:"/js-core-3/other/javascript-classes",permalink:"/js-core-3/other/javascript-classes",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/other/javascript-classes.md",version:"current",sidebar_label:"JavaScript Classes",sidebar:"JavaScriptCore3",previous:{title:"Level 999",permalink:"/js-core-3/tv-show-dom-project/level-999"},next:{title:"The 'this' Keyword",permalink:"/js-core-3/other/this-keyword"}},i=[{value:"Exercises",id:"exercises",children:[]}],l={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Variables can be used to hold information about the state your code is in, e.g. how many times someone has clicked on a button:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let timesClicked = 0;\n\nlet whenButtonClicked = () => {\n  timesClicked++;\n  console.log(`Button has been clicked ${timesClicked} times`);\n};\n\ndocument\n  .querySelector("#myButton")\n  .addEventListener("click", whenButtonClicked);\n')),Object(r.b)("p",null,"However, you may end up being in a situation where you'll have to keep track of the click state of multiple buttons, or even a dynamic number of buttons:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let timesClicked1 = 0;\nlet timesClicked2 = 0;\n\nlet whenButtonClicked1 = () => {\n  timesClicked1++;\n  console.log(`Button has been clicked ${timesClicked1} times`);\n};\n\nlet whenButtonClicked2 = () => {\n  timesClicked2++;\n  console.log(`Button has been clicked ${timesClicked2} times`);\n};\n\ndocument\n  .querySelector("#myButton1")\n  .addEventListener("click", whenButtonClicked1);\ndocument\n  .querySelector("#myButton2")\n  .addEventListener("click", whenButtonClicked2);\n')),Object(r.b)("p",null,"We can reduce this code duplication by using a JavaScript ",Object(r.b)("inlineCode",{parentName:"p"},"class")," (not the same as a class in CSS). Classes are templates which are used to create objects containing methods and properties of the class. For example here the class ",Object(r.b)("inlineCode",{parentName:"p"},"Counter")," ties together the state, ",Object(r.b)("inlineCode",{parentName:"p"},"timesClicked"),", and the functions that reference it like ",Object(r.b)("inlineCode",{parentName:"p"},"whenButtonClicked"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class Counter {\n  constructor() {\n    this.timesClicked = 0;\n  }\n\n  whenClicked() {\n    this.timesClicked++;\n    console.log(`Button has been clicked ${this.timesClicked} times`);\n  }\n}\n\nlet counter1 = new Counter();\nlet counter2 = new Counter();\n\ndocument\n  .querySelector("#myButton1")\n  .addEventListener("click", () => counter1.whenClicked());\ndocument\n  .querySelector("#myButton2")\n  .addEventListener("click", () => counter2.whenClicked());\n')),Object(r.b)("p",null,"We can create instances of a class using the ",Object(r.b)("inlineCode",{parentName:"p"},"new")," operator, followed by the class name. When a class instance is created, its ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," function is called automatically. We can pass the constructor arguments to use during initialisation."),Object(r.b)("p",null,"For example, here is a ",Object(r.b)("inlineCode",{parentName:"p"},"CounterFromN")," class that starts counting from a number that's passed in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class CounterFromN {\n  constructor(n) {\n    this.timesClicked = n;\n  }\n\n  whenClicked() {\n    this.timesClicked++;\n    console.log(`Button has been clicked ${this.timesClicked} times`);\n  }\n}\n\nlet counterFromTen = new CounterFromN(10);\n\ncounterFromTen.whenClicked();\n// Button has been clicked 11 times\n")),Object(r.b)("p",null,"As shown above, a class' functions can be called by referring to the name of the object's function followed by brackets. If the function expects any arguments then these can be passed into it inside the brackets as per normal. Functions defined within classes are also be known as ",Object(r.b)("strong",{parentName:"p"},"methods"),"."),Object(r.b)("p",null,"Variables specific to a particular instance of a class are defined and referenced using the ",Object(r.b)("inlineCode",{parentName:"p"},"this")," keyword (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"this.timesClicked"),") within that instance. ",Object(r.b)("inlineCode",{parentName:"p"},"this")," refers to the object which is created by the class when it instantiated."),Object(r.b)("h3",{id:"exercises"},"Exercises"),Object(r.b)("p",null,"Try these exercises in your breakout groups."),Object(r.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(r.b)("p",null,"Implement the ",Object(r.b)("inlineCode",{parentName:"p"},"add")," and ",Object(r.b)("inlineCode",{parentName:"p"},"getTotal")," methods of the ",Object(r.b)("inlineCode",{parentName:"p"},"RunningTotal")," class below."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class RunningTotal {\n  constructor() {\n    this.currentTotal = 0;\n  }\n\n  add(n) {\n    // Implement this method\n  }\n  getTotal() {\n    // Implement this method\n  }\n}\n\nconst runningTotal = new RunningTotal();\n\nrunningTotal.add(3);\nrunningTotal.add(7);\nrunningTotal.add(7);\nrunningTotal.getTotal();\n// 17\n")),Object(r.b)("h4",{id:"exercise-2"},"Exercise 2"),Object(r.b)("p",null,"Implement the ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"StopWatch")," class below."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class StopWatch {\n  constructor() {\n    this.secondsElapsed = 0;\n\n    //Finish implementing the rest of the constructor so that secondsElapsed is updated\n  }\n\n  getTime() {\n    return `Seconds elapsed: ${this.secondsElapsed}`;\n  }\n}\n\nconst stopWatch = new StopWatch();\n\n// Wait a few seconds...\n\nstopWatch.getTime();\n// 'Seconds elapsed: 3'\n\n// Wait a few more seconds...\n\nstopWatch.getTime();\n// 'Seconds elapsed: 7'\n")),Object(r.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(r.b)("p",null,"Implement the ",Object(r.b)("inlineCode",{parentName:"p"},"constructor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"store")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"lookup")," methods of the ",Object(r.b)("inlineCode",{parentName:"p"},"AddressBook")," class below."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class AddressBook {\n  // Implement the constructor method\n  // Implement the store method\n  // Implement the lookup method\n}\n\nconst myAddresBook = new AddressBook();\n\nmyAddressBook.store("bart", "bart@simpsons.com");\nmyAddressBook.store("maggie", "maggie@simpsons.com");\n\nmyAddressBook.lookup("bart");\n// \'bart@simpsons.com\'\n\nmyAddressBook.lookup("homer");\n// \'address not found\'\n')),Object(r.b)("p",null,"Notice that when you come to using a class instance, you are only interacting with it through its methods, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"store")," and ",Object(r.b)("inlineCode",{parentName:"p"},"lookup")," for ",Object(r.b)("inlineCode",{parentName:"p"},"AddressBook"),". Similar to functions, classes provide a way of creating abstractions over lower-level implementations, which can help us better organise and maintain our code."))}d.isMDXComponent=!0}}]);