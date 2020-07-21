(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(9),r=(n(0),n(277)),s={id:"lesson",title:"Database 3 - More integration with NodeJS",sidebar_label:"Lesson"},l={id:"db/week-3/lesson",title:"Database 3 - More integration with NodeJS",description:"What will we learn today?",source:"@site/docs/db/week-3/lesson.md",permalink:"/db/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/db/week-3/lesson.md",sidebar_label:"Lesson",sidebar:"SQL",previous:{title:"Instructor Notes",permalink:"/db/week-2/instructors"},next:{title:"Instructor Notes",permalink:"/db/week-3/instructors"}},i=[{value:"What will we learn today?",id:"what-will-we-learn-today",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Recap integration of cyf_hotels DB with NodeJS",id:"recap-integration-of-cyf_hotels-db-with-nodejs",children:[]},{value:"CRUD operations with NodeJS and PostgreSQL",id:"crud-operations-with-nodejs-and-postgresql",children:[{value:"Creating data",id:"creating-data",children:[]},{value:"Reading data",id:"reading-data",children:[]},{value:"Updating data",id:"updating-data",children:[]},{value:"Deleting data",id:"deleting-data",children:[]}]},{value:"Homework",id:"homework",children:[{value:"Submission",id:"submission",children:[]},{value:"Tasks",id:"tasks",children:[]}]}],c={rightToc:i};function d(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-will-we-learn-today"},"What will we learn today?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Revision from last week"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#recap-integration-of-cyf_hotels-db-with-nodejs"}),"Recap integration of cyf_hotels DB with NodeJS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#crud-operations-with-nodejs-and-postgresql"}),"CRUD operations with NodeJS and PostgreSQL"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#creating-data"}),"Creating data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#reading-data"}),"Reading data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#updating-data"}),"Updating data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#deleting-data"}),"Deleting data")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#homework"}),"Homework"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("p",null,"By the end of this lesson students should be able to"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an API endpoint that can add data to a database"),Object(r.b)("li",{parentName:"ul"},"Write code that effectively validates data before adding it to a database"),Object(r.b)("li",{parentName:"ul"},"Be aware of the dangers of SQL injection attacks, and how to avoid them"),Object(r.b)("li",{parentName:"ul"},"Create an API endpoint that can retrieve data from a datamongodbbase with multiple parameters"),Object(r.b)("li",{parentName:"ul"},"Create an API endpoint that can update data in a database"),Object(r.b)("li",{parentName:"ul"},"Create an API endpoint that can delete data in a database")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"recap-integration-of-cyf_hotels-db-with-nodejs"},"Recap integration of cyf_hotels DB with NodeJS"),Object(r.b)("p",null,"For this class, we will use the tables and data from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../week-1/cyf_hotels_exercise5.sql"}),Object(r.b)("inlineCode",{parentName:"a"},"cyf_hotels_exercise5.sql")),". To start from a clean state for your ",Object(r.b)("inlineCode",{parentName:"p"},"cyf_hotels")," database, run ",Object(r.b)("inlineCode",{parentName:"p"},"psql -d cyf_hotels -f cyf_hotels_exercise5.sql"),"."),Object(r.b)("p",null,"During the last class, we created a new NodeJS project called ",Object(r.b)("inlineCode",{parentName:"p"},"cyf-hotels-api")," with a single API endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"/hotels")," to get the list of all hotels. In this class, we will add other endpoints with more functionalities to interact with the ",Object(r.b)("inlineCode",{parentName:"p"},"cyf_hotels")," database."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst app = express();\nconst { Pool } = require("pg");\n\nconst pool = new Pool({\n  user: "postgres",\n  host: "localhost",\n  database: "cyf_hotels",\n  password: "",\n  port: 5432,\n});\n\napp.get("/hotels", function (req, res) {\n  pool\n    .query("SELECT * FROM hotels")\n    .then((result) => res.json(result.rows))\n    .catch((e) => console.error(e));\n});\n\napp.listen(3000, function () {\n  console.log("Server is listening on port 3000. Ready to accept requests!");\n});\n')),Object(r.b)("h2",{id:"crud-operations-with-nodejs-and-postgresql"},"CRUD operations with NodeJS and PostgreSQL"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'"The acronym CRUD refers to all of the major functions that are implemented in relational database applications. Each letter in the acronym can map to a standard Structured Query Language (SQL) statement and Hypertext Transfer Protocol (HTTP) method ',"[...]",'."')," - ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"}),"Wikipedia")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:n(358).default})),Object(r.b)("h3",{id:"creating-data"},"Creating data"),Object(r.b)("p",null,"In the following, we will add a new API endpoint to create a new hotel in the table ",Object(r.b)("inlineCode",{parentName:"p"},"hotels")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"cyf_hotels")," database. As a reminder, here is an example of a SQL insert statement to add a new hotel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO hotels (name, rooms, postcode) VALUES ('New Hotel', 5, 'ABC001');\n")),Object(r.b)("p",null,"As we create a new record in the database, we will add a new POST endpoint in the ",Object(r.b)("inlineCode",{parentName:"p"},"cyf-hotels-api")," project from last class. Moreover, we need to be able to pass some parameters to this API endpoint such as the hotel name, the number of rooms and the postcode, so we can use this API to create different hotel. These parameters can be sent in the body of the request. To access the parameters in the body of the request with Express.JS, we need to add the module ",Object(r.b)("inlineCode",{parentName:"p"},"body-parser")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"cyf-hotels-api")," project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save body-parser\n")),Object(r.b)("p",null,"Then include it in the ",Object(r.b)("inlineCode",{parentName:"p"},"server.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bodyParser = require("body-parser");\napp.use(bodyParser.json());\n')),Object(r.b)("p",null,"We can finally add our new endpoint to create a new hotel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.post("/hotels", function (req, res) {\n  const newHotelName = req.body.name;\n  const newHotelRooms = req.body.rooms;\n  const newHotelPostcode = req.body.postcode;\n\n  const query =\n    "INSERT INTO hotels (name, rooms, postcode) VALUES ($1, $2, $3)";\n\n  pool\n    .query(query, [newHotelName, newHotelRooms, newHotelPostcode])\n    .then(() => res.send("Hotel created!"))\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("p",null,"What could go wrong with the code above? There is no validation of any user inputs which could result in errors, duplications or inconsistent data in the database! Here are few examples of things we can verify before creating the hotel in the database:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Check that the number of rooms is a positive number"),Object(r.b)("li",{parentName:"ol"},"Check that no hotel with the same name already exists in the database"),Object(r.b)("li",{parentName:"ol"},"...")),Object(r.b)("p",null,"Let's start by validating that the number of rooms is a positive number and if it doesn't, return an error."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'if (!Number.isInteger(newHotelRooms) || newHotelRooms <= 0) {\n  return res\n    .status(400)\n    .send("The number of rooms should be a positive integer.");\n}\n')),Object(r.b)("p",null,"Then we can validate the new hotel doesn't already exist in the database, thus preventing duplicate data."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.post("/hotels", function (req, res) {\n  const newHotelName = req.body.name;\n  const newHotelRooms = req.body.rooms;\n  const newHotelPostcode = req.body.postcode;\n\n  if (!Number.isInteger(newHotelRooms) || newHotelRooms <= 0) {\n    return res\n      .status(400)\n      .send("The number of rooms should be a positive integer.");\n  }\n\n  pool\n    .query("SELECT * FROM hotels WHERE name=$1", [newHotelName])\n    .then((result) => {\n      if (result.rows.length > 0) {\n        return res\n          .status(400)\n          .send("An hotel with the same name already exists!");\n      } else {\n        const query =\n          "INSERT INTO hotels (name, rooms, postcode) VALUES ($1, $2, $3)";\n        pool\n          .query(query, [newHotelName, newHotelRooms, newHotelPostcode])\n          .then(() => res.send("Hotel created!"))\n          .catch((e) => console.error(e));\n      }\n    });\n});\n')),Object(r.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow the above steps to create a new POST endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/hotels")," to create a new hotel. Make sure to add validation for the number of rooms and the hotel name. Test your new API endpoint with Postman and check that the new hotel has been correctly created in your database."),Object(r.b)("li",{parentName:"ul"},"Add a new POST API endpoint to create a new customer in the ",Object(r.b)("inlineCode",{parentName:"li"},"customers")," table."),Object(r.b)("li",{parentName:"ul"},"Add validation to check that there is no other customer with the same name in the customers table before creating a new customer.")),Object(r.b)("h3",{id:"reading-data"},"Reading data"),Object(r.b)("p",null,"We already have one GET endpoint to load all the hotels in the database. However, we can improve this endpoint and add a couple of extra functionalities. First, we may want to order the list of hotels by name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/hotels", function (req, res) {\n  pool\n    .query("SELECT * FROM hotels ORDER BY name")\n    .then((result) => res.json(result.rows))\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("p",null,"Another functionality which could be useful is to filter the hotel with a keyword to be able to search for a specific hotel name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.get(\"/hotels\", function (req, res) {\n  const hotelNameQuery = req.query.name;\n  let query = `SELECT * FROM hotels ORDER BY name`;\n\n  if (hotelNameQuery) {\n    query = `SELECT * FROM hotels WHERE name LIKE '%${hotelNameQuery}%' ORDER BY name`;\n  }\n\n  pool\n    .query(query)\n    .then((result) => res.json(result.rows))\n    .catch((e) => console.error(e));\n});\n")),Object(r.b)("p",null,"In some case, you would want to load only a specific hotel by id. Let's define a new GET endpoint to load one specific hotel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/hotels/:hotelId", function (req, res) {\n  const hotelId = req.params.hotelId;\n\n  pool\n    .query("SELECT * FROM hotels WHERE id=$1", [hotelId])\n    .then((result) => res.json(result.rows))\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("h4",{id:"exercise-2"},"Exercise 2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the GET endpoints ",Object(r.b)("inlineCode",{parentName:"li"},"/hotels")," and ",Object(r.b)("inlineCode",{parentName:"li"},"/hotels/:hotelId")," mentioned above and try to use these endpoints with Postman."),Object(r.b)("li",{parentName:"ul"},"Add a new GET endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/customers")," to load all customers ordered by name."),Object(r.b)("li",{parentName:"ul"},"Add a new GET endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/customers/:customerId")," to load one customer by ID."),Object(r.b)("li",{parentName:"ul"},"Add a new GET endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/customers/:customerId/bookings")," to load all the bookings of a specific customer. Returns the following information: check in date, number of nights, hotel name, hotel postcode.")),Object(r.b)("h3",{id:"updating-data"},"Updating data"),Object(r.b)("p",null,"We can now implement an endpoint to update a customer record in the database. For this, we will use a PUT endpoint."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.put("/customers/:customerId", function (req, res) {\n  const customerId = req.params.customerId;\n  const newEmail = req.body.email;\n\n  pool\n    .query("UPDATE customers SET email=$1 WHERE id=$2", [newEmail, customerId])\n    .then(() => res.send(`Customer ${customerId} updated!`))\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("p",null,"What can go wrong in the code above? Again, there is no validation! We could set an empty email or even a string which is not following the format of an email. ",Object(r.b)("strong",{parentName:"p"},"Remember, validating data is very important to make sure you don't end up with inconsistent data in your database!")),Object(r.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the PUT endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/customers/:customerId")," and verify you can update a customer email using Postman."),Object(r.b)("li",{parentName:"ul"},"Add validation for the email before updating the customer record in the database. If the email is empty, return an error message."),Object(r.b)("li",{parentName:"ul"},"Add the possibility to also update the address, the city, the postcode and the country of a customer. Be aware that if you want to update the city only for example, the other fields should not be changed!")),Object(r.b)("h3",{id:"deleting-data"},"Deleting data"),Object(r.b)("p",null,"To delete a record from the database, we will use a DELETE endpoint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.delete("/customers/:customerId", function (req, res) {\n  const customerId = req.params.customerId;\n\n  pool\n    .query("DELETE FROM customers WHERE id=$1", [customerId])\n    .then(() => res.send(`Customer ${customerId} deleted!`))\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("p",null,"However, if you try to delete a customer which already has some bookings, the previous endpoint will fail. Do you know why? You cannot delete a customer whose ID is used as a foreign key in another table (in this case, in the ",Object(r.b)("inlineCode",{parentName:"p"},"bookings")," table). Let's delete all the customer bookings first:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.delete("/customers/:customerId", function (req, res) {\n  const customerId = req.params.customerId;\n\n  pool\n    .query("DELETE FROM bookings WHERE customer_id=$1", [customerId])\n    .then(() => {\n      pool\n        .query("DELETE FROM customers WHERE id=$1", [customerId])\n        .then(() => res.send(`Customer ${customerId} deleted!`))\n        .catch((e) => console.error(e));\n    })\n    .catch((e) => console.error(e));\n});\n')),Object(r.b)("p",null,"####\xa0Exercise 4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the DELETE endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/customers/:customerId")," above and verify you can delete a customer along their bookings with Postman."),Object(r.b)("li",{parentName:"ul"},"Add a new DELETE endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/hotels/:hotelId")," to delete a specific hotel. ",Object(r.b)("strong",{parentName:"li"},"A hotel can only be deleted if it doesn't appear in any of the customers' bookings! Make sure you add the corresponding validation before you try to delete a hotel."))),Object(r.b)("h2",{id:"homework"},"Homework"),Object(r.b)("p",null,"All of the homework can be found in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/Databases-Homework"}),"this repository"),"."),Object(r.b)("h3",{id:"submission"},"Submission"),Object(r.b)("p",null,"Create a new branch from ",Object(r.b)("inlineCode",{parentName:"p"},"Master")," to start working on this weeks homework. It should be called ",Object(r.b)("inlineCode",{parentName:"p"},"[YOUR_NAME]/Week3"),"."),Object(r.b)("p",null,"When you have completed the homework create a pull request back to the ",Object(r.b)("inlineCode",{parentName:"p"},"CodeYourFuture/Databases-Homework")," repository so your teach can feedback on it."),Object(r.b)("h3",{id:"tasks"},"Tasks"),Object(r.b)("p",null,"You should complete all of the tasks in ",Object(r.b)("strong",{parentName:"p"},"Week 3")," of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/Databases-Homework"}),"Database Homework repository"),"."))}d.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(s,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},358:function(e,t,n){"use strict";n.r(t),t.default=n.p+"0414fa3827c06dcd3fcb4827c869b477.png"}}]);