(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),a=(n(0),n(277)),c={},o={id:"html-css/compile-scss-instructions",title:"compile-scss-instructions",description:"Building SCSS with VS Code",source:"@site/docs/html-css/compile-scss-instructions.md",permalink:"/html-css/compile-scss-instructions",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/html-css/compile-scss-instructions.md"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"building-scss-with-vs-code"},"Building SCSS with VS Code"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a file with a ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," extension. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"skin.scss"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open the VS Code Extension manager, on the left."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/compile-sass/vscode-extensions.png",alt:"Extension Manager icon in Visual Studio Code"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Search for the ",Object(a.b)("inlineCode",{parentName:"p"},"Easy SASS"),' extension and install it. Click the "Reload" button.'),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/compile-sass/vscode-easy-sass.png",alt:"Search for easy sass"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Edit your ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," file and save it.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After saving your file, ",Object(a.b)("inlineCode",{parentName:"p"},"Easy Sass")," will create another file next to it, with a ",Object(a.b)("inlineCode",{parentName:"p"},".min.css")," extension. This is the compiled code, ready to include in index.html."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/compile-sass/vscode-generated-skin.png",alt:"The compiled CSS file"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In your html, include the compiled code using a ",Object(a.b)("inlineCode",{parentName:"p"},"link")," tag. In the case of ",Object(a.b)("inlineCode",{parentName:"p"},"css-skin"),", replace ",Object(a.b)("inlineCode",{parentName:"p"},"skin.css")," with ",Object(a.b)("inlineCode",{parentName:"p"},"skin.min.css")," and remove the ",Object(a.b)("inlineCode",{parentName:"p"},"skin.css")," file, in order to avoid confusion."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/compile-sass/vscode-import.png",alt:"Incliuding the compiled CSS file in your HTML"}))))))}l.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||a;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);