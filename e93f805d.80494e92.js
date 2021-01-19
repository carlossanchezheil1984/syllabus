(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return j})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return y}));var a=n(3),o=n(7),r=n(0),l=n.n(r),i=n(249),s=n(250),c=n(266),b=n(252),u=n(230),d=n.n(u),p=37,h=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,o=e.values,i=e.groupId,s=e.className,u=Object(c.a)(),m=u.tabGroupChoices,g=u.setTabGroupChoices,f=Object(r.useState)(a),j=f[0],O=f[1],w=r.Children.toArray(e.children);if(null!=i){var y=m[i];null!=y&&y!==j&&o.some((function(e){return e.value===y}))&&O(y)}var v=function(e){O(e),null!=i&&g(i,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},s)},o.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(b.a)("tabs__item",d.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case h:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))};var g=function(e){var t=e.children,n=e.hidden,o=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)},f={id:"lesson",title:"JavaScript Core III - 3",sidebar_label:"Lesson"},j={unversionedId:"js-core-3/week-3/lesson",id:"js-core-3/week-3/lesson",isDocsHomePage:!1,title:"JavaScript Core III - 3",description:"Learning Objectives",source:"@site/docs/js-core-3/week-3/lesson.md",slug:"/js-core-3/week-3/lesson",permalink:"/js-core-3/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-3/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"JavaScriptCore3",previous:{title:"Instructor Notes",permalink:"/js-core-3/week-2/instructors"},next:{title:"Homework",permalink:"/js-core-3/week-3/homework"}},O=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"1. Variable Scope",id:"1-variable-scope",children:[{value:"The Problem",id:"the-problem",children:[]},{value:"The Solution",id:"the-solution",children:[]},{value:"What is Scope?",id:"what-is-scope",children:[]},{value:"Global scope",id:"global-scope",children:[]},{value:"Local Variables",id:"local-variables",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Block scope",id:"block-scope",children:[]},{value:"Exercise",id:"exercise",children:[]}]},{value:"2. Array Destructuring",id:"2-array-destructuring",children:[{value:"The Problem",id:"the-problem-1",children:[]},{value:"Destructuring syntax",id:"destructuring-syntax",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"3. Project Work",id:"3-project-work",children:[{value:"Explanation",id:"explanation",children:[]}]},{value:"Homework",id:"homework",children:[]},{value:"Feedback",id:"feedback",children:[]}],w={toc:O};function y(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The learner should understand the concept of variable scope and be able to define them in global, local and block scope"),Object(i.b)("li",{parentName:"ul"},"The learner should be able to use destructuring to extract data from arrays"),Object(i.b)("li",{parentName:"ul"},"The learner can describe why you would want to use array destructuring")),Object(i.b)("h2",{id:"agenda"},"Agenda"),Object(i.b)("p",null,"The purpose of this class is to introduce to the student:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The scoping of variables, specifically in reference to:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Global"),Object(i.b)("li",{parentName:"ul"},"Local"),Object(i.b)("li",{parentName:"ul"},"Block"))),Object(i.b)("li",{parentName:"ol"},"Array Destructuring"),Object(i.b)("li",{parentName:"ol"},"Project Work")),Object(i.b)("h2",{id:"1-variable-scope"},"1. Variable Scope"),Object(i.b)("h3",{id:"the-problem"},"The Problem"),Object(i.b)("p",null,"Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing."),Object(i.b)("p",null,"As we know, after we declare or define a new variable we can refer to it later in our code using the variable name."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let name = "mo";\nlet age = 42;\nlet favouriteFoods = ["pizza", "apples", "tofu"];\n\n// lots of code here\n\n// later\nconsole.log("my name is " + name);\n')),Object(i.b)("p",null,"Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important."),Object(i.b)("p",null,"Imagine a banking app being built by two developers. Developer 1 uses the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank."),Object(i.b)("h3",{id:"the-solution"},"The Solution"),Object(i.b)("p",null,"One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money"),". We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not."),Object(i.b)("p",null,"Instead, we need to find a way to make variables ",Object(i.b)("strong",{parentName:"p"},"safer"),". We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase."),Object(i.b)("p",null,"We call this ",Object(i.b)("inlineCode",{parentName:"p"},"scope"),"."),Object(i.b)("h3",{id:"what-is-scope"},"What is Scope?"),Object(i.b)("p",null,"Think about the way that laws are set in different countries. Most laws are set by the government of that country and are ",Object(i.b)("inlineCode",{parentName:"p"},"local")," to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are ",Object(i.b)("inlineCode",{parentName:"p"},"global")," laws."),Object(i.b)("p",null,"In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1",alt:"Types of laws"}))),Object(i.b)("p",null,"In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law."),Object(i.b)("p",null,"But a pirate \ud83c\udff4\u200d\u2620\ufe0f in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship)."),Object(i.b)("p",null,"In the same way we think about which laws apply to which ",Object(i.b)("strong",{parentName:"p"},"parts of a country")," we must also think about which variables apply to which ",Object(i.b)("strong",{parentName:"p"},"parts of your code"),". Variables, like laws, only apply to a certain area."),Object(i.b)("p",null,"When we try to access a variable that does not exist or has gone out of scope, JavaScript will throw a ",Object(i.b)("inlineCode",{parentName:"p"},"ReferenceError")," telling us that a variable is not defined."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let globalLaw = "no slavery";\n// only 1 law applies here\n\nfunction usa() {\n  let nationalLaw = "drinking age is 21";\n  // 2 laws apply here\n\n  function massachusetts() {\n    let stateLaw = "bars closed at 2am";\n    // all 3 laws apply here\n  }\n}\n\nconsole.log(stateLaw); // Error: \'stateLaw\' is not defined\n')),Object(i.b)("p",null,"In the example above, the State Law only applies to Massachusetts. When we try to ",Object(i.b)("inlineCode",{parentName:"p"},"console.log")," the ",Object(i.b)("inlineCode",{parentName:"p"},"stateLaw")," variable at the end, it is not defined. This part of your code does not even know this variable exists!"),Object(i.b)("h3",{id:"global-scope"},"Global scope"),Object(i.b)("p",null,"Variables declared outside of any function or code block are available throughout an application. They are referred to as global variables and exist in global scope."),Object(i.b)("p",null,"We can see in the previous example that ",Object(i.b)("inlineCode",{parentName:"p"},"globalLaw")," is a global variable."),Object(i.b)("p",null,"Because global variables are visible by throughout the application, data stored in them can be read and updated by any part of your code. At first this might seem convenient, but in practice this is likely to cause problems in longer term as your code base grows."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It may not be obvious where in your code global variables are used, which can make refactoring hard"),Object(i.b)("li",{parentName:"ul"},"Other part of your code may accidentally overwrite values in global variables and lead to bugs.")),Object(i.b)("p",null,"Because of above ",Object(i.b)("strong",{parentName:"p"},"it is good engineering practice to only use global variables when absolutely necessary"),"."),Object(i.b)("p",null,"Note that you can also declare a global variable by assigning to a variable without declaring it with a ",Object(i.b)("inlineCode",{parentName:"p"},"var"),", ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function accidentallyGlobal() {\n  oops = "I am global";\n}\n\naccidentallyGlobal();\n\nconsole.log(oops);\n')),Object(i.b)("p",null,"Be sure to keep an eye out for above problem and avoid it."),Object(i.b)("h3",{id:"local-variables"},"Local Variables"),Object(i.b)("p",null,"Let's rewind and look at this in detail. We know that variables are declared using the ",Object(i.b)("inlineCode",{parentName:"p"},"var"),", ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let greeting = "Hi ";\n')),Object(i.b)("p",null,"If we define a variable inside a function, it becomes ",Object(i.b)("strong",{parentName:"p"},"local")," to that function. If we want to use a fancy word, we can also say it becomes ",Object(i.b)("strong",{parentName:"p"},"scoped")," to that function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetUser(name) {\n  let greeting = "Hi "; // This variable only exists here\n  console.log(greeting + name);\n}\n\ngreetUser("Naima");\nconsole.log(greeting); // It doesn\'t exist here\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"console.log(greeting)"),' on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable ',Object(i.b)("inlineCode",{parentName:"p"},"greeting")," was defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"greetUser")," function, it ",Object(i.b)("strong",{parentName:"p"},"does not exist")," outside the function."),Object(i.b)("p",null,"This lets us do new things with variables. You cannot usually create two variables with the same name. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetUser(name) {\n  let greeting = "Hi";\n  let greeting = "Shalom";\n  // Error: \'greeting\' has already been declared\n}\n')),Object(i.b)("p",null,"But in the same way countries have own laws, functions have own ",Object(i.b)("inlineCode",{parentName:"p"},"scopes"),"! And so it becomes possible to use the same variable name for different situations."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetOnce(name) {\n  let greeting = "Hi ";\n  console.log(greeting + name);\n}\n\nfunction greetAgain(name) {\n  let greeting = "Shalom ";\n  console.log(greeting + name);\n}\n')),Object(i.b)("p",null,"We have used the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"greeting")," twice but it's very important to remember that ",Object(i.b)("strong",{parentName:"p"},"these are not the same variable"),"! The two variables called 'greeting' do not even know each other exist."),Object(i.b)("h3",{id:"nesting"},"Nesting"),Object(i.b)("p",null,"It is important to note that scope is nested. That means when you have one function inside another function, you can access variables defined in outer function from the inner function. However you cannot access variables defined in inner function from outer function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function grandfather() {\n  let name = "Hammad";\n  // likes is not accessible here\n  function parent() {\n    // name is accessible here\n    // likes is not accessible here\n    function child() {\n      // Innermost level of the scope chain\n      // name is also accessible here\n      let likes = "Coding";\n    }\n\n    child();\n  }\n\n  parent();\n}\n\ngrandfather();\n')),Object(i.b)("h3",{id:"block-scope"},"Block scope"),Object(i.b)("h4",{id:"code-block"},"Code block"),Object(i.b)("p",null,"A block is piece of code inside by curly brackets, for example following ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements and ",Object(i.b)("inlineCode",{parentName:"p"},"for")," or ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loops."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (age > 18) {\n  // code block\n}\n")),Object(i.b)("h4",{id:"var-vs-let-and-const"},"var vs let and const"),Object(i.b)("p",null,"In addition to previous scope rules, JavaScript uses different scope methods for variables depending how they are defined."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Variables declared using ",Object(i.b)("inlineCode",{parentName:"li"},"var")," keyword use function scope. That means variables defined using ",Object(i.b)("inlineCode",{parentName:"li"},"var")," exist within function they are defined in."),Object(i.b)("li",{parentName:"ul"},"Variables declared using ",Object(i.b)("inlineCode",{parentName:"li"},"let")," or ",Object(i.b)("inlineCode",{parentName:"li"},"const")," keyword use block scope. Variables defined using ",Object(i.b)("inlineCode",{parentName:"li"},"let")," or ",Object(i.b)("inlineCode",{parentName:"li"},"const")," keywords exist within the block they are defined in.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function getBook() {\n  if (true) {\n    var bookOne = "JavaScript: The Good Parts";\n    let bookTwo = "Eloquent JavaScript";\n    const bookThree = "The JS Way";\n  }\n\n  console.log(bookOne); // JavaScript: The Good Parts\n  console.log(bookTwo); // ReferenceError: bookTwo is not defined\n  console.log(bookThree); // ReferenceError: bookThree is not defined\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Any time you define a variable inside a block, that variable cannot escape that block.")," We say the variable is ",Object(i.b)("inlineCode",{parentName:"p"},"scoped")," to that block."),Object(i.b)("p",null,"Scope allows us to control where our variables can be accessed from. We want to ensure that variables are available where they are needed and ideally as little as possible elsewhere to prevent naming collisions or accidental updates. As a result using ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," is preferrable to using ",Object(i.b)("inlineCode",{parentName:"p"},"var")," since they has stricter scope definition."),Object(i.b)("h3",{id:"exercise"},"Exercise"),Object(i.b)("p",null,"In small groups answer the following the questions. Try to solve each exercise before running code to verify answer. Try to explain your answer using what you learned above about scope. Think about the order JavaScript will execute each piece of code and what the values will be at each stage."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// 1.\nfunction one() {\n  var a = 10;\n}\none();\nconsole.log(a); // what is the value of a\n\n// 2.\nfunction two() {\n  let b = 10;\n  let b = 20;\n}\ntwo();\nconsole.log(b); // what is the value of b and why\n\n// 3.\nlet c;\nfunction three() {\n  c = 25;\n}\nthree();\nconsole.log(c); // what is the value of c and why\n\n// 4.\nfunction four() {\n  d = 25;\n}\nfour();\nconsole.log(d); // what is the value of d and why\n\n// 5.\nlet e;\nfunction five() {\n  const greeting = "Hello";\n\n  function greet() {\n    let name = "Eddie";\n    e = `${greeting} ${name}`;\n  }\n  greet();\n}\nfive();\nconsole.log(e); // what is the value of e and why\n\n// 6.\nfunction six() {\n  if (true) {\n    let f = 50;\n  }\n  console.log(f); // what is the value of f and why\n}\n\nsix();\n')),Object(i.b)("h2",{id:"2-array-destructuring"},"2. Array Destructuring"),Object(i.b)("h3",{id:"the-problem-1"},"The Problem"),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays"}),"Javascript 1 - Lesson 2"),", you learnt how to store multiple values in one variable using an ",Object(i.b)("strong",{parentName:"p"},"array"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let fruits = ["apple", "orange", "banana"];\n')),Object(i.b)("p",null,"You also learnt that you can retrieve a value from an Array by using the ",Object(i.b)("strong",{parentName:"p"},"index")," of the value to access it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let firstFruit = fruits[0];\nconsole.log(firstFruit); // This will print 'apple'\n\nlet secondFruit = fruits[1];\nconsole.log(secondFruit); // This will print 'orange'\n\nlet thirdFruit = fruits[2];\nconsole.log(thirdFruit); // This will print 'banana'\n\nconsole.log(\n  `My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`\n);\n")),Object(i.b)("h4",{id:"exercise-1"},"Exercise (1)"),Object(i.b)("p",null,"We have the names of the Simpsons family stored in an array called ",Object(i.b)("inlineCode",{parentName:"p"},"familyMembers"),". Create variables to store the names of the family members so that the ",Object(i.b)("inlineCode",{parentName:"p"},"console.log")," will print out the following message:\n",Object(i.b)("inlineCode",{parentName:"p"},"In the Simpsons family, Homer and Marge are the parents. Bart is the son, Lisa is the daughter, and Maggie is the baby.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];\n\n// Create variables to store the values here\n\nconsole.log(\n  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`\n);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Question"),": How many lines of code did you add?"),Object(i.b)("h3",{id:"destructuring-syntax"},"Destructuring syntax"),Object(i.b)("p",null,"There is a way to extract all the values of an array into variable in just ",Object(i.b)("strong",{parentName:"p"},"one line of code"),". This technique is called ",Object(i.b)("strong",{parentName:"p"},"destructuring")," and it has a special syntax."),Object(i.b)("p",null,"Here is the code we used in the last exercise with array destructuring."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];\n\nlet [dad, mum, son, daughter, baby] = familyMembers;\n\nconsole.log(\n  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`\n);\n')),Object(i.b)("p",null,"With array destructuring you were able to reduce this code down from 7 lines of code to just 3 lines of code. This means your code is shorter and there is less chance for you to have a bug in your code."),Object(i.b)("h4",{id:"exercise-2"},"Exercise (2)"),Object(i.b)("p",null,"Rewrite the code below to use array destructuring instead of assigning each value to a variable."),Object(i.b)(m,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},Object(i.b)(g,{value:"exercise",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let sentence = ["Hello", "Code", "Your", "Future"];\n\nlet firstWord = item[0];\nlet secondWord = item[1];\nlet thirdWord = item[2];\nlet fourthWord = item[3];\n\nconsole.log(\n  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`\n);\n'))),Object(i.b)(g,{value:"solution",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let sentence = ["Hello", "Code", "Your", "Future"];\n\nlet [firstWord, secondWord, thirdWord, fourthWord] = sentence;\n\nconsole.log(\n  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`\n);\n')))),Object(i.b)("h4",{id:"exercise-3"},"Exercise (3)"),Object(i.b)("p",null,"We have a function called ",Object(i.b)("inlineCode",{parentName:"p"},"sumAndMultiply"),". It will take two numbers and then return an array where the first number is the sum of the two numbers, and the second number is the multiplication of the two numbers."),Object(i.b)(m,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},Object(i.b)(g,{value:"exercise",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function sumAndMultiply(a, b) {\n  return [a + b, a * b];\n}\n\n// Assign variables using array destructuring on this line\n\nconsole.log(\n  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`\n);\n\n/*\nWhich of the following lines of code can be used above?\n\n- A) let sum, multiply = sumAndMultiply(2, 3);\n- B) let [sumAndMultiply] = sumAndMultiply(2, 3);\n- C) let [sum, multiply] = sumAndMultiply(a, b);\n- D) let [sum, multiply] = sumAndMultiply(2, 3);\n*/\n"))),Object(i.b)(g,{value:"solution",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Option D\nlet [sum, multiply] = sumAndMultiply(2, 3);\n")))),Object(i.b)("h4",{id:"exercise-4"},"Exercise (4)"),Object(i.b)("p",null,"When you do array destructuring, the array can be of any data type. Try destructuring with the next array, which contains objects."),Object(i.b)(m,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},Object(i.b)(g,{value:"exercise",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let citiesByPopulation = [\n  { name: "London", population: 8000000 },\n  { name: "Birmingham", population: 1000000 },\n  { name: "Glasgow", population: 600000 },\n  { name: "Manchester", population: 500000 },\n];\n\n// Assign variables using array destructuring on this line\n\nconsole.log(`${london.name} population is ${london.population}`);\nconsole.log(`${birmingham.name} population is ${birmingam.population}`);\nconsole.log(`${glasgow.name} population is ${glasgow.population}`);\nconsole.log(`${manchester.name} population is ${manchester.population}`);\n'))),Object(i.b)(g,{value:"solution",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let citiesByPopulation = [\n  { name: "London", population: 8000000 },\n  { name: "Birmingham", population: 1000000 },\n  { name: "Glasgow", population: 600000 },\n  { name: "Manchester", population: 500000 },\n];\n\nlet [london, birmingham, glasgow, manchester] = citiesByPopulation;\n\nconsole.log(`${london.name} population is ${london.population}`);\nconsole.log(`${birmingham.name} population is ${birmingham.population}`);\nconsole.log(`${glasgow.name} population is ${glasgow.population}`);\nconsole.log(`${manchester.name} population is ${manchester.population}`);\n')))),Object(i.b)("h4",{id:"exercise-5"},"Exercise (5)"),Object(i.b)("p",null,"Complete all of the exercises found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://repl.it/@codeyourfuture0/ArrayDestructuring"}),"here")),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("p",null,"Here are some useful resources to help you understand this material"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/"}),"FreeCodeCamp's Intro To Array Destructuring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=NIq3qLaHCIs"}),"Why Is Array/Object Destructuring So Useful And How To Use It (Video)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers"}),"The Most In-Depth Yet Understandable ES6 Destructuring Tutorial"))),Object(i.b)("h2",{id:"3-project-work"},"3. Project Work"),Object(i.b)("h3",{id:"explanation"},"Explanation"),Object(i.b)("p",null,"For the rest of the day we'll be working together on our group projects"),Object(i.b)("p",null,"You can find the project ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/readme"}),"here")),Object(i.b)("p",null,"Students should group into teams based on the Level that they are working on currently."),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."),Object(i.b)("h2",{id:"feedback"},"Feedback"),Object(i.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),Object(i.b)(s.a,{module:"JavaScript Core 3",week:"Week 3",mdxType:"Feedback"}))}y.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?o.a.createElement(h,i(i({ref:t},c),{},{components:n})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);n(56);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return o.a.createElement("div",{className:"feedback"},o.a.createElement("div",{className:"feedback__wrapper"},o.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),o.a.createElement("center",null,o.a.createElement("p",null,"Not loading? Form can be found"," ",o.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},252:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},266:function(e,t,n){"use strict";var a=n(0),o=n(267);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},267:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o}}]);