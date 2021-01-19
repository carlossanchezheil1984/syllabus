(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(249)),r={id:"code-style-guide",title:"Code Style Guide",sidebar_label:"Code Style Guide"},l={unversionedId:"guides/code-style-guide",id:"guides/code-style-guide",isDocsHomePage:!1,title:"Code Style Guide",description:"Why should I read this?",source:"@site/docs/guides/code-style-guide.md",slug:"/guides/code-style-guide",permalink:"/guides/code-style-guide",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/guides/code-style-guide.md",version:"current",sidebar_label:"Code Style Guide"},s=[{value:"Why should I read this?",id:"why-should-i-read-this",children:[]},{value:"Before you start",id:"before-you-start",children:[{value:"Using Prettier to format code automatically",id:"using-prettier-to-format-code-automatically",children:[]}]},{value:"Essential",id:"essential",children:[{value:"Indent your code",id:"indent-your-code",children:[]},{value:"Don&#39;t leave lots of commented out code",id:"dont-leave-lots-of-commented-out-code",children:[]},{value:"Saving old versions with Git",id:"saving-old-versions-with-git",children:[]},{value:"Don&#39;t leave unused variables",id:"dont-leave-unused-variables",children:[]},{value:"Think of good names for your variables",id:"think-of-good-names-for-your-variables",children:[]},{value:"Use <code>camelCase</code>",id:"use-camelcase",children:[]},{value:"Avoid short names",id:"avoid-short-names",children:[]},{value:"Describe what the variable is/does",id:"describe-what-the-variable-isdoes",children:[]},{value:"Using <code>let</code>, <code>const</code> and <code>var</code>",id:"using-let-const-and-var",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Remember your audience",id:"remember-your-audience",children:[]},{value:"Good scoping of your variables",id:"good-scoping-of-your-variables",children:[]}]}],c={toc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-should-i-read-this"},"Why should I read this?"),Object(i.b)("p",null,"There are many different ways of writing code that achieve the same goal. However, programmers generally agree that there are some ways of writing code that are more understandable and ",Object(i.b)("em",{parentName:"p"},"readable")," than other ways."),Object(i.b)("p",null,"To help write more understandable code, programmers follow a ",Object(i.b)("em",{parentName:"p"},"style guide"),". It provides guidelines for how to write code, how to structure it, common problems to avoid, etc."),Object(i.b)("h2",{id:"before-you-start"},"Before you start"),Object(i.b)("h3",{id:"using-prettier-to-format-code-automatically"},"Using Prettier to format code automatically"),Object(i.b)("p",null,"Some of the guidelines are so common that there are automatic tools to do it for you! One of these tools is called Prettier. You should have installed this tool when you ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.codeyourfuture.io/course-processes/before-the-course/getting-setup#extensions"}),"set up your VS Code extensions"),"."),Object(i.b)("p",null,"Prettier is a tool that rearranges your code (called ",Object(i.b)("em",{parentName:"p"},"formatting"),"). It follows a set of rules that programmers have agreed make your code easier to read and understand."),Object(i.b)("p",null,"You might have a common problem when running Prettier. If you see something like this:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Invalid code with red highlight",src:n(423).default})),Object(i.b)("p",null,"Then you have written some code that is invalid and Prettier can't format it. A common issue is a missing bracket, so try looking for that first."),Object(i.b)("h2",{id:"essential"},"Essential"),Object(i.b)("p",null,"From when you begin programming it is essential that you follow the guidelines below - a good habit is much easier to get in to when you start!"),Object(i.b)("h3",{id:"indent-your-code"},"Indent your code"),Object(i.b)("p",null,"You may have noticed that programmers tend to ",Object(i.b)("em",{parentName:"p"},"indent")," their code by starting a line of code with some space."),Object(i.b)("p",null,"Here's an example in HTML:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<div>\n  <p>Hello world!</p>\n</div>\n")),Object(i.b)("p",null,"And JavaScript:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'if (isVegetarian) {\n  return "Macaroni and Cheese";\n} else {\n  return "Steak and Chips";\n}\n')),Object(i.b)("p",null,"Indentation helps us to read our code by visually marking how the code is going to run. Programmers rely on this extra information to quickly read and understand code."),Object(i.b)("p",null,"There are some guidelines about where to add indentation. For example, lines of code are indented when they are inside a function, an ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement or a ",Object(i.b)("inlineCode",{parentName:"p"},"for")," loop. Additionally, if any of those structures are inside another structure, then they are indented further."),Object(i.b)("p",null,"The guidelines about where to add indentation can be complex, but the good news is that ",Object(i.b)("strong",{parentName:"p"},"Prettier adds indentation automatically")," for us! However it is good to pay attention to where indentation is added, as you may find yourself writing code in an environment where Prettier is not installed."),Object(i.b)("h3",{id:"dont-leave-lots-of-commented-out-code"},"Don't leave lots of commented out code"),Object(i.b)("p",null,"When you are debugging a problem, you might comment out some sections of your code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \ud83d\uded1 Don\'t do this!\nfunction addToShoppingList(item) {\n  // console.log("Shopping list before", shoppingList);\n  // console.log("Adding item", item);\n  shoppingList.add(item);\n  // console.log("Shopping list after", shoppingList);\n}\n')),Object(i.b)("p",null,"In this example, there is some extra debugging information that is commented out."),Object(i.b)("p",null,"Once you have solved the problem, you should remove large sections of commented out code. When you (or someone else) are reading your code, you want to know only the important pieces. Removing commented out code helps find the relevant code faster and easier."),Object(i.b)("h3",{id:"saving-old-versions-with-git"},"Saving old versions with Git"),Object(i.b)("p",null,'You might be worried about "losing" some experimental code that you want to "save" by commenting it out. However, this can cause confusion about which bits of code still work.'),Object(i.b)("p",null,"If you want to save some code, remember that you can commit it using Git. It will then be saved it forever. If you decide to remove the code later you can delete it and make another commit. And if you want it back again, you can always look at the deleted code in the git history."),Object(i.b)("h3",{id:"dont-leave-unused-variables"},"Don't leave unused variables"),Object(i.b)("p",null,"As you write code, you may make changes to the variables that you are using. You may rename some variables, make some new variables or change how the variables are used. This may leave some variables that are ",Object(i.b)("em",{parentName:"p"},"unused"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function orderTaxi(pickUpTime) {\n  let driverName = getDriverName();\n  let customerName = getCustomerName(); // \ud83d\uded1 Don't do this!\n\n  return `${driverName} will pick you up at ${pickUpTime}`;\n}\n")),Object(i.b)("p",null,"In this example, the ",Object(i.b)("inlineCode",{parentName:"p"},"customerName")," variable isn't used anywhere."),Object(i.b)("p",null,"You should remove any variables that are unused. This is because if you (or someone else) is reading your code, it can be confusing if you see a variable and then find out later that it isn't used. It could make you think that there's a bug, because the variable must have been put there for a reason!"),Object(i.b)("h3",{id:"think-of-good-names-for-your-variables"},"Think of good names for your variables"),Object(i.b)("p",null,"Making our code understandable by others is critical to being a programmer. One of the main tools in our toolbox is good naming for our variables and function names."),Object(i.b)("p",null,"There are no strict rules to follow when thinking of variable names, but there are some general guidelines."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When thinking about whether a variable name is good, try to imagine that you are reading the code again in the future and you have forgotten exactly how it works."),Object(i.b)("p",{parentName:"div"},"Do the variable names help explain what the code is supposed to do?"))),Object(i.b)("h3",{id:"use-camelcase"},"Use ",Object(i.b)("inlineCode",{parentName:"h3"},"camelCase")),Object(i.b)("p",null,"When writing JavaScript, programmers tend to use a convention called ",Object(i.b)("em",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"em"},"camelCase")),'. This means starting your variable name with a lower case letter, and then every "word" after that starts with an upper case letter.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startingLocation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeToDestination")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"trafficOnRoute"))),Object(i.b)("p",null,'By doing this it makes it easier to read variable name that have multiple "words".'),Object(i.b)("h3",{id:"avoid-short-names"},"Avoid short names"),Object(i.b)("p",null,"Very short variable names can be difficult to understand since the purpose of the variable can be unclear. They are also difficult remember, especially if there are many similarly named variables. Try to avoid short names or abbreviations."),Object(i.b)("p",null,"Here are some examples of ",Object(i.b)("strong",{parentName:"p"},"bad")," names that you should avoid:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single letters like ",Object(i.b)("inlineCode",{parentName:"li"},"x")," or ",Object(i.b)("inlineCode",{parentName:"li"},"y")),Object(i.b)("li",{parentName:"ul"},"Abbreviations like ",Object(i.b)("inlineCode",{parentName:"li"},"evt")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"event")),Object(i.b)("li",{parentName:"ul"},"Generic names like ",Object(i.b)("inlineCode",{parentName:"li"},"array")," or ",Object(i.b)("inlineCode",{parentName:"li"},"string"))),Object(i.b)("h3",{id:"describe-what-the-variable-isdoes"},"Describe what the variable is/does"),Object(i.b)("p",null,"A good variable name quickly explains what it represents to anyone reading the code. Try to describe what the variable is or what it does within in code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \ud83d\uded1 Try to avoid this\nlet song = true;\n\n// \u2705 This is better\nlet isPlaying = true;\n")),Object(i.b)("p",null,"In this example, the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"song")," doesn't tell us what it is used for. The ",Object(i.b)("inlineCode",{parentName:"p"},"isPlaying")," variable name is better since it tells us whether a song is playing or not."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \ud83d\uded1 Try to avoid this\nfunction percentage() {\n  // ...\n}\n\n// \u2705 This is better\nfunction getPercentage() {\n  // ...\n}\n")),Object(i.b)("p",null,'In this example, the function calculates a percentage and returns it. Therefore it is good to name it using the "get" verb to show that it returns something.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \ud83d\uded1 Try to avoid this\nfunction isOldEnough(number) {\n  // ...\n}\n\n// \u2705 This is better\nfunction isOldEnough(yearOfBirth) {\n  // ...\n}\n")),Object(i.b)("p",null,"Finally, parameters of functions should also have names that properly represent what is going to be received into the function."),Object(i.b)("h3",{id:"using-let-const-and-var"},"Using ",Object(i.b)("inlineCode",{parentName:"h3"},"let"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"const")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"var")),Object(i.b)("p",null,"In JavaScript there are three ways to define a variable - ",Object(i.b)("inlineCode",{parentName:"p"},"let"),", ",Object(i.b)("inlineCode",{parentName:"p"},"const")," and ",Object(i.b)("inlineCode",{parentName:"p"},"var"),". The rules on using them at CodeYourFuture are as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var myAge = 21; // \ud83d\uded1 Do not use\nlet yourAge = 21; // \u2705 Use for values that change\nconst secondsInMinute = 60; // \u2705 Use for values that never change\n")),Object(i.b)("h4",{id:"using-var"},"Using ",Object(i.b)("inlineCode",{parentName:"h4"},"var")),Object(i.b)("p",null,"You should ",Object(i.b)("strong",{parentName:"p"},"never")," use ",Object(i.b)("inlineCode",{parentName:"p"},"var"),". This is an outdated way of writing JavaScript code and it is always better to use ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const"),"."),Object(i.b)("p",null,"The reason it still exists is because lots of code already uses it and so it can't be removed from JavaScript safely."),Object(i.b)("h4",{id:"using-let"},"Using ",Object(i.b)("inlineCode",{parentName:"h4"},"let")),Object(i.b)("p",null,"You should use ",Object(i.b)("inlineCode",{parentName:"p"},"let")," for a variable that will change, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let buttonClickedCount = 0;\nbuttonClickedCount = buttonClickedCount + 1;\n")),Object(i.b)("h4",{id:"using-const"},"Using ",Object(i.b)("inlineCode",{parentName:"h4"},"const")),Object(i.b)("p",null,"For other variables that will never change you should use ",Object(i.b)("inlineCode",{parentName:"p"},"const"),", for example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const centimetersInMeter = 100;\n")),Object(i.b)("h2",{id:"advanced"},"Advanced"),Object(i.b)("p",null,"These additional rules may be harder for you to understand at the start of your programming journey however they are important concepts as your develop."),Object(i.b)("h3",{id:"remember-your-audience"},"Remember your audience"),Object(i.b)("p",null,"Remember that you are communicating with another programmer!"),Object(i.b)("p",null,"Don't forget that the person reading your code probably has some understanding of the ",Object(i.b)("em",{parentName:"p"},"context"),". If your function is named ",Object(i.b)("inlineCode",{parentName:"p"},"getCustomer"),", it's probably fine to name variables ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"age"),", etc instead of ",Object(i.b)("inlineCode",{parentName:"p"},"customerName"),", ",Object(i.b)("inlineCode",{parentName:"p"},"customerAge"),". You don't need to explain ",Object(i.b)("em",{parentName:"p"},"everything"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Naming variables is more of an art than a science"),". Often you need some experience reading other people's code before you get really good at it."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When reading other people's code, think about the variable names. If the names are not clear, make sure you understand the code first, then think about what names you would use instead."))),Object(i.b)("h3",{id:"good-scoping-of-your-variables"},"Good scoping of your variables"),Object(i.b)("p",null,"Define your variables with the narrowest scope they can have. This is easiest to explain with an example..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{3,5}","{3,5}":!0}),'function findLongestFirstName(fullNames) {\n  let longest;\n  let firstName;\n  for (let i = 0; i < fullNames.length; i++) {\n    firstName = fullNames[i].split(" ")[0];\n    if (!longest || firstName.length > longest.length) {\n      longest = firstName;\n    }\n  }\n  return longest;\n}\n')),Object(i.b)("p",null,"It is considered better code to combine the two highlighted lines into one like this..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4}","{4}":!0}),'function findLongestFirstName(fullNames) {\n  let longest;\n  for (let i = 0; i < fullNames.length; i++) {\n    let firstName = fullNames[i].split(" ")[0];\n    if (!longest || firstName.length > longest.length) {\n      longest = firstName;\n    }\n  }\n  return longest;\n}\n')),Object(i.b)("p",null,"This is important as when a function (or your code more generally) becomes more complex it will be harder to keep track of what variable is used where."))}d.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,h=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},423:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prettier-error-dc799e008422aadc8087f716695b9ee5.png"}}]);