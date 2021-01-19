(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(249)),o={id:"mongodb-101",title:"MongoDB 101",sidebar_label:"MongoDB 101"},i={unversionedId:"workshops/mongodb-101",id:"workshops/mongodb-101",isDocsHomePage:!1,title:"MongoDB 101",description:"What we will learn today?",source:"@site/docs/workshops/mongodb-101.md",slug:"/workshops/mongodb-101",permalink:"/workshops/mongodb-101",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/mongodb-101.md",version:"current",sidebar_label:"MongoDB 101"},c=[{value:"Before we start",id:"before-we-start",children:[]},{value:"Lesson 1 - SQL and NoSQL",id:"lesson-1---sql-and-nosql",children:[]},{value:"Lesson 2 - Why MongoDB",id:"lesson-2---why-mongodb",children:[]},{value:"Lesson 3 - Basic Commands",id:"lesson-3---basic-commands",children:[]},{value:"Databases",id:"databases",children:[]},{value:"Collections and Documents",id:"collections-and-documents",children:[{value:"Exercise 1",id:"exercise-1",children:[]},{value:"Exercise 2",id:"exercise-2",children:[]},{value:"Exercise 3",id:"exercise-3",children:[]},{value:"Finding Documents",id:"finding-documents",children:[]},{value:"Exercise 4a",id:"exercise-4a",children:[]},{value:"Exercise 4b",id:"exercise-4b",children:[]},{value:"Updating Documents",id:"updating-documents",children:[]},{value:"Exercise 5",id:"exercise-5",children:[]},{value:"Exercise 6",id:"exercise-6",children:[]}]},{value:"Deleting documents",id:"deleting-documents",children:[{value:"Exercise 7",id:"exercise-7",children:[]},{value:"Exercise 8",id:"exercise-8",children:[]}]},{value:"Lesson 4 - Administration",id:"lesson-4---administration",children:[]},{value:"Scripting the shell",id:"scripting-the-shell",children:[{value:"Exercise 9",id:"exercise-9",children:[]}]},{value:"Aggregation",id:"aggregation",children:[{value:"Exercise 10",id:"exercise-10",children:[]}]},{value:"Replication",id:"replication",children:[]},{value:"Sharding",id:"sharding",children:[]},{value:"What&#39;s next",id:"whats-next",children:[{value:"Shameless plug",id:"shameless-plug",children:[]}]}],s={toc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"What we will learn today?")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SQL vs NoSQL"),Object(l.b)("li",{parentName:"ul"},"Why MongoDB?"),Object(l.b)("li",{parentName:"ul"},"Mongo Shell Basic Commands"),Object(l.b)("li",{parentName:"ul"},"MongoDB administration",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Aggregation"),Object(l.b)("li",{parentName:"ul"},"Replication"),Object(l.b)("li",{parentName:"ul"},"Sharding"))),Object(l.b)("li",{parentName:"ul"},"What's next?")),Object(l.b)("h2",{id:"before-we-start"},"Before we start"),Object(l.b)("p",null,"Download and install MongoDB from\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mongodb.com/download-center#community"}),"https://www.mongodb.com/download-center#community"),".\nFollow the instructions for your platform (Windows, Linux or OS X)."),Object(l.b)("p",null,"Open two instances of terminal.\nRun ",Object(l.b)("inlineCode",{parentName:"p"},"mongod")," in the first instance - this will start MongoDB."),Object(l.b)("p",null,"In the second instance, first download the sample data script:\n",Object(l.b)("inlineCode",{parentName:"p"},"curl https://gist.githubusercontent.com/agiamas/35b2b954cc942f95709273d3cb9d2cf3/raw/b1bb399942dab287832d41b3b75f6b54c6f00bb1/mongodb_data.js > mongo_data.js")),Object(l.b)("p",null,"then import the data we just downloaded using"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mongo < mongo_data.js\n")),Object(l.b)("p",null,"Finally, run ",Object(l.b)("inlineCode",{parentName:"p"},"mongo")," in the second terminal instance."),Object(l.b)("h2",{id:"lesson-1---sql-and-nosql"},"Lesson 1 - SQL and NoSQL"),Object(l.b)("p",null,"SQL is a well known paradigm in data storage and retrieval, serving us for decades.\nOur data was living in mainframes and being stored and processed in isolation.\nThe nature of Web and mobile has created a paradigm shift in the past decade.\nData has exploded in volume, veracity and velocity.\nWe have many times semi-structured data of varying quality\nand unpredictable volumes of them."),Object(l.b)("p",null,"This has led to a new breed of databases, the NoSQL ones."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Document databases, e.g. MongoDB"),Object(l.b)("li",{parentName:"ul"},"Graph stores, e.g. Neo4J"),Object(l.b)("li",{parentName:"ul"},"key-value stores, e.g. Redis"),Object(l.b)("li",{parentName:"ul"},"Wide-column stores , e.g. Cassandra")),Object(l.b)("p",null,"In this class we will examine Document databases and its most popular one, MongoDB."),Object(l.b)("p",null,"First of all, how does MongoDB compare with traditional SQL queries\nthat we have learned in the past?"),Object(l.b)("p",null,Object(l.b)("a",{target:"_blank",href:a(334).default},"MongoDB to SQL Mapping")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://s3.amazonaws.com/info-mongodb-com/sql_to_mongo.pdf"}),"https://s3.amazonaws.com/info-mongodb-com/sql_to_mongo.pdf")),Object(l.b)("h2",{id:"lesson-2---why-mongodb"},"Lesson 2 - Why MongoDB"),Object(l.b)("p",null,"MongoDB is a leader in NoSQL database space."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"de facto leader in NoSQL database space."),Object(l.b)("li",{parentName:"ul"},"uses JSON, you are familiar with json in FE/Node, you can use it in DB layer too!"),Object(l.b)("li",{parentName:"ul"},"one language to rule them all, part of MEAN stack"),Object(l.b)("li",{parentName:"ul"},"mongodb data types as compared to JSON",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/bson-types/"}),"https://docs.mongodb.com/manual/reference/bson-types/")),Object(l.b)("li",{parentName:"ul"},"We can even query by type!\n",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/operator/query/type/"}),"https://docs.mongodb.com/manual/reference/operator/query/type/"))))),Object(l.b)("h2",{id:"lesson-3---basic-commands"},"Lesson 3 - Basic Commands"),Object(l.b)("p",null,"Open the terminal that you ran ",Object(l.b)("inlineCode",{parentName:"p"},"mongo"),".\nFirst type ",Object(l.b)("inlineCode",{parentName:"p"},"show dbs")),Object(l.b)("p",null,"You should see something similar to:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"admin          0.000GB\nlocal          0.000GB\n")),Object(l.b)("p",null,"Then type ",Object(l.b)("inlineCode",{parentName:"p"},"use cyf")),Object(l.b)("p",null,"You should now get:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"switched to db cyf\n")),Object(l.b)("p",null,"That's it! You have created a new database."),Object(l.b)("p",null,"Now type again ",Object(l.b)("inlineCode",{parentName:"p"},"show dbs")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"admin          0.000GB\nlocal          0.000GB\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"??? Where is our new database? ???")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Lazy initialisation.")),Object(l.b)("h2",{id:"databases"},"Databases"),Object(l.b)("h2",{id:"collections-and-documents"},"Collections and Documents"),Object(l.b)("p",null,"Collections are like tables in SQL databases.\nInitialising a collection is also happening lazily like this:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"> db.Student.insert({name: 'alex'})")),Object(l.b)("p",null,"Now if we run again ",Object(l.b)("inlineCode",{parentName:"p"},"show dbs")," after we create a collection with a document\nwe will see that the database appears in the list.\nThis is because at the moment that we inserted this document,\nthe document was created, which in turn created the collection\nwhich in turn created the database."),Object(l.b)("h3",{id:"exercise-1"},"Exercise 1"),Object(l.b)("p",null,"Insert a new student with name: Mary"),Object(l.b)("h3",{id:"exercise-2"},"Exercise 2"),Object(l.b)("p",null,"Insert a new student with name: Madeline and id=2 (integer)"),Object(l.b)("h3",{id:"exercise-3"},"Exercise 3"),Object(l.b)("p",null,"Insert a new student with name: Steve, midterm score of 80 and final score of 100"),Object(l.b)("p",null,"Scores should be embedded in a sub-document like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"scores:\n{\n  midterm: 0,\n  final: 0\n}\n")),Object(l.b)("h3",{id:"finding-documents"},"Finding Documents"),Object(l.b)("p",null,"Finding a document by a single attribute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> db.Student.find({name: 'alex'})\n")),Object(l.b)("p",null,"Querying embedded attributes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> db.Student.find({"scores.midterm": {$gte: 40}} )\n')),Object(l.b)("p",null,"AND / OR queries:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> db.Student.find({"$or": [{"scores.midterm": {$gt: 60}}, {"scores.final": {$lte: 75}}]} )\n')),Object(l.b)("h3",{id:"exercise-4a"},"Exercise 4a"),Object(l.b)("p",null,"Find the user Mary that you inserted in exercise 1"),Object(l.b)("h3",{id:"exercise-4b"},"Exercise 4b"),Object(l.b)("p",null,"Search for students that have scored between [50,80)\nin midterm AND ","[80,100]"," in final exam"),Object(l.b)("p",null,"In these two examples above we can see the operators\nGreaterThanEquals >=, GreaterThan > and LessThanEquals <= in action."),Object(l.b)("p",null,"All operators in MongoDB:\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/reference/operator/query/"}),"https://docs.mongodb.com/manual/reference/operator/query/")),Object(l.b)("h3",{id:"updating-documents"},"Updating Documents"),Object(l.b)("p",null,"Updating documents has 2 parts.\nThe first one is finding the document(s) we want to update\nand the second one is modifying their values."),Object(l.b)("p",null,"(!)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"db.Student.update({name: 'alex'}, {name: 'alexander'})\n")),Object(l.b)("p",null,"What will this command do?"),Object(l.b)("p",null,"REPLACE the first instance of document matching {name:'alex'}\nwith the new {name:'alexander'} !!!!"),Object(l.b)("p",null,"Definitely not what we want..."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> db.Student.update({name: 'alex'}, {$set: {name: 'alexander'}})\n")),Object(l.b)("p",null,"We can also use other operators like $inc, $mul, $min, $max"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/reference/operator/update/#fields"}),"https://docs.mongodb.com/manual/reference/operator/update/#fields")),Object(l.b)("p",null,"(!) Update by default will update only the first instance it matches.\nmulti:true"),Object(l.b)("p",null,"(!) We can get update to update or ",Object(l.b)("em",{parentName:"p"},"create")," the document by using upsert:true"),Object(l.b)("h3",{id:"exercise-5"},"Exercise 5"),Object(l.b)("p",null,"Update the student madeline that you created back in exercise 2\nto have midterm score of 50 and final score of 100 respectively."),Object(l.b)("h3",{id:"exercise-6"},"Exercise 6"),Object(l.b)("p",null,"Update the grades of all students to be 90"),Object(l.b)("p",null,"(!) How could we boost the grades of all students by 10%? (!)"),Object(l.b)("h2",{id:"deleting-documents"},"Deleting documents"),Object(l.b)("p",null,"Deleting a single or more documents is as simple as:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> db.Student.remove({"_id":ObjectId("5a99e1209056c9e237d071d9")})\nWriteResult({ "nRemoved" : 1 })\n')),Object(l.b)("p",null,"Deleting a whole collection:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"db.Student.drop()\n")),Object(l.b)("p",null,"Deleting a database:\n",Object(l.b)("inlineCode",{parentName:"p"},"db.dropDatabase()")," to delete the current database"),Object(l.b)("h3",{id:"exercise-7"},"Exercise 7"),Object(l.b)("p",null,"Delete user steve that you created back in exercise 3"),Object(l.b)("h3",{id:"exercise-8"},"Exercise 8"),Object(l.b)("p",null,"Delete all users with midterm score less than 80"),Object(l.b)("h2",{id:"lesson-4---administration"},"Lesson 4 - Administration"),Object(l.b)("h2",{id:"scripting-the-shell"},"Scripting the shell"),Object(l.b)("p",null,"There are several ways to write scripts for MongoDB shell:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"use ",Object(l.b)("inlineCode",{parentName:"li"},"mongo < mongo_script.sh")),Object(l.b)("li",{parentName:"ul"},"use ",Object(l.b)("inlineCode",{parentName:"li"},"mongo mongo_script.js"))),Object(l.b)("p",null,"What's the difference?"),Object(l.b)("p",null,"The first one will pipe in our script and execute its lines one by one\nas if we were typing them in Mongo shell."),Object(l.b)("p",null,"The second one will evaluate our javascript and attempt to run it with Mongo shell."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Always")," test scripts locally in MongoDB (and in general)."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Always")," test in staging before production."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Always")," keep backups in production.\nAnd test that you can restore from these backups regualarly."),Object(l.b)("p",null,"All of these are important for every database system\nbut even more important in MongoDB as..."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"THERE IS NO ROLLBACK!")," There are no transactions.\nOnce you delete something, it's gone."),Object(l.b)("h3",{id:"exercise-9"},"Exercise 9"),Object(l.b)("p",null,"Using MongoDB shell, create a script to output in a new collection\nnamed BoostedStudents one document for every document in Student collection\nwith their final grade being boosted by 10%."),Object(l.b)("h2",{id:"aggregation"},"Aggregation"),Object(l.b)("p",null,"Why aggregation framework?"),Object(l.b)("p",null,"Aggregation framework in MongoDB is modelled\nafter the familiar concept of data processing pipelines.\nDocuments enter the pipeline with the MongoDB structure\nand exit the other end transformed into BSON documents with calculated fields.\nCommands in a pipeline are executed sequentially\nand in the order that they appear in the array []."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SQL"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Aggregation framework"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WHERE / HAVING"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$match")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GROUP BY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$group")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SELECT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$project")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ORDER BY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$sort")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LIMIT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$limit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sum() / count()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$sum")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"average()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$avg")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"join"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$lookup")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'db.students.aggregate([\n                   1.  { $match: { name: {$regex: /^aA/} } },\n                   2.  { $group: { _id: "$name", average: { $avg: "$scores.final" } } },\n                   3.  { $sort: { average: -1 } },\n                   4.  { $project: { name: 1, average: 1 } }\n                   ])\n')),Object(l.b)("p",null,"What does the pipeline above do?"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"matches all documents with a name starting from aA"),Object(l.b)("li",{parentName:"ol"},"groups them by average final score"),Object(l.b)("li",{parentName:"ol"},"sorts them by average score"),Object(l.b)("li",{parentName:"ol"},"projects(selects) name and average score in the output")),Object(l.b)("p",null,"What's the output like?"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"{_id: .., name: .., average: ..}\n")),Object(l.b)("p",null,"More information: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/aggregation/"}),"https://docs.mongodb.com/manual/aggregation/")),Object(l.b)("h3",{id:"exercise-10"},"Exercise 10"),Object(l.b)("p",null,"Now let's redo Exercise 9 using the aggregation framework."),Object(l.b)("h2",{id:"replication"},"Replication"),Object(l.b)("p",null,"Replication in MongoDB is used to increase redundancy and data availability.\nIn its essence it's a way for 3 or more (or even 2 with some caveats..)\nservers to keep the same copy of data."),Object(l.b)("p",null,Object(l.b)("img",{alt:"replication diagram",src:a(335).default})),Object(l.b)("p",null,"Writes always go to the primary and get propagated ",Object(l.b)("em",{parentName:"p"},"asynchronously")," to the secondaries."),Object(l.b)("p",null,"Reads can go to the primary or any of the secondaries."),Object(l.b)("p",null,"Election process:"),Object(l.b)("p",null,'Replica sets implement by default automatic failover.\nIf a primary server fails, the remaining secondaries will elect the new primary.\nThis will by default be the secondary that is most "up to date" with the primary\nbut we can affect (rig) the election process\nby assigning different votes to each server.'),Object(l.b)("p",null,"More information:\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/core/replica-set-elections/"}),"https://docs.mongodb.com/manual/core/replica-set-elections/")),Object(l.b)("p",null,"Using replication we can perform a few interesting tasks:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"delayed replica for backup.\nDelay backups by an hour, enabling us to recover from dropping a database in production"),Object(l.b)("li",{parentName:"ul"},"hidden replicas for reporting.\nThese replicas will never become primaries\nso we can safely apply read load to them for reporting purposes"),Object(l.b)("li",{parentName:"ul"},"replicas in different location for disaster recovery"),Object(l.b)("li",{parentName:"ul"},"replicas in different location to be closer to our users")),Object(l.b)("h2",{id:"sharding"},"Sharding"),Object(l.b)("p",null,"Sharding is a method for horizontal scaling that MongoDB uses.\nIt essentially partitions data across the shard key in different servers\nthereby distributing the read and write load."),Object(l.b)("p",null,"What is horizontal scaling?"),Object(l.b)("p",null,"When our data exceeds the disk space, I/O capacity and/or memory available\nin a single server we have two options:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Buy/Rent a bigger server. This is vertical scaling.\nIt's of course the easiest way to scale\nbut does not scale linearly in terms of cost and capacity."),Object(l.b)("li",{parentName:"ol"},"Distribute our data across different servers of the same initial capacity.\nThis is called horizontal scaling, is more difficult to achieve\nbut theoretically if we achieve linear scaling\nthen our system can be ",Object(l.b)("strong",{parentName:"li"},"infinitely scaleable"),".")),Object(l.b)("p",null,"With MongoDB it's important to understand that we will start with #1\nfor as long as it makes financial sense.\nIf we are on AWS it will probably be easier to tweak our replica set\nfrom S to M to L sized servers rether than implement sharding.\nAt some point though, we should start planning for sharding,\ndefinitely sooner rather than later."),Object(l.b)("p",null,Object(l.b)("img",{alt:"sharded architecture",src:a(336).default})),Object(l.b)("p",null,"Sharding as we can see from the diagram above is not a trivial task.\nWe need router(s) config servers and shards."),Object(l.b)("p",null,"Router:"),Object(l.b)("p",null,"The router is essentially our query server.\nQueries no longer go to individual servers\nbut must go to the router which will decide which server(s) hold our data."),Object(l.b)("p",null,"Config Servers:"),Object(l.b)("p",null,"Config servers are holding configuration information for the whole cluster.\nThey must be deployed as a replica set in order to achieve high availability."),Object(l.b)("p",null,"Shards:"),Object(l.b)("p",null,"Each shard is essentially a replica set.\nEach shard holds a cut of our data\nand all the shards together hold the total of our data."),Object(l.b)("p",null,"More information:\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/sharding/"}),"https://docs.mongodb.com/manual/sharding/")),Object(l.b)("h2",{id:"whats-next"},"What's next"),Object(l.b)("p",null,"If you have time and interest,\nplease register to this class or any other class in MongoDB university."),Object(l.b)("p",null,"All classes are ",Object(l.b)("strong",{parentName:"p"},"free")," and on average require 6-10 hours of time per week."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://university.mongodb.com/courses/M001/about"}),"https://university.mongodb.com/courses/M001/about")),Object(l.b)("h3",{id:"shameless-plug"},"Shameless plug"),Object(l.b)("p",null,"I am also the author of the Mastering MongoDB 3.X book by Packt publishing,\navailable ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.packtpub.com/big-data-and-business-intelligence/mastering-mongodb-3x"}),"here"),"."))}b.isMDXComponent=!0},249:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},334:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/sql_to_mongo_mapping-26d8f53d2edf919b591aa7969e3e5e29.pdf"},335:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/replica-set-read-write-operations-primary.bakedsvg-b0636f564771ff7599c18ad45c579f74.svg"},336:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sharded-cluster-production-architecture.bakedsvg-e73a63fbf0ad53e251a1747a52138f59.svg"}}]);