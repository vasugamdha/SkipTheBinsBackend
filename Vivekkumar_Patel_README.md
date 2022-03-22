# Tutorial 7

The project contains code for a simple RESTful API built with NodeJS and ExpressJS. This api provides a way to connect the back-end with the NoSQL database MongoDB and  interact with a data stored in MongoDB by using HTTP methods such as GET, POST, PUT, DELETE, etc. The GET api provides a way to fetch all the users or to fetch a specific user with provided id. The POST api deals with creation of new user. The PUT api allows update operation for the specific user with provided id. The DELETE api allows deletion of the user. All these APIs also handles errors that occurs while dealing with http requests and responses. For the live demo, the code is deployed on Heroku.

* *Date Created*: 21 MAR 2022
* *Last Modification Date*: 22 MAR 2022
* *Individual Gitlab URL*: https://git.cs.dal.ca/aabhaas/group_14_backend_csci5709/-/tree/tutorial7
* *Application URL*: https://tutorial7-5709.herokuapp.com/
* *Group Gitlab URL*: https://git.cs.dal.ca/aabhaas/group_14_csci5709

## Author

* [Aabhaas Jain](aabhaas.jain@dal.ca) (B00899378) - *(Developer)*
* [Jaimi Maheshbhai Sheta](jm504814@dal.ca) (B00886563) - *(Developer)*
* [Lokansh Gupta](lokansh.gupta@dal.ca) (B00899355) - *(Developer)*
* [Prashit Patel](pr718986@dal.ca) (B00896717) - *(Developer)*
* [Vasu Gamdha](vs527199@dal.ca) (B00902737) - *(Developer)*
* [Vivekkumar Patel](vv411034@dal.ca) (B00896765) - *(Developer)*

## Getting Started

Visit deployment notes to deploy the API in live environment

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins:

* [Visual Studio (Code Editor)](https://code.visualstudio.com/download)
* [NodeJS (Web Framework)](https://nodejs.org/en/download/)
* [NPM (Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Web Browser](https://www.google.com/chrome/)
* [Postman](https://www.postman.com/)
* [Express.js](https://www.npmjs.com/package/express)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [Compass](https://www.mongodb.com/products/compass)

### Installing

Follow the steps mentioned below to install and run this API in local environment:

```    
Step-1: Open command prompt 
Step-2: Run git clone https://git.cs.dal.ca/aabhaas/group_14_backend_csci5709.git
Step-3: Run cd group_14_backend_csci5709
Step-4: Run npm install express
Step-5: Run npm install body-parser
Step-6: Run npm install mongoose
Step-7: Run node index.js
Step-8: Open browser and visit http://localhost:8080/ for demo
```
## Deployment

Please follow below steps:

```
Step-1: Log in to Heroku
Step-2: Create a new app
Step-3: Connect to GitHub
Step-4: Find the repository tutorial7
Step-5: Connect to the repository tutorial7
Step-6: Deploy the API
```
## Built With

* [Express.js](https://expressjs.com/) - Web Application Framework
* [NPM](https://www.npmjs.com/) - Package Manager
* [Heroku](https://www.heroku.com/) - Web Application Deployment
* [Gitlab](https://about.gitlab.com/) - Version Control
* [Postman](https://www.postman.com/) - Web API Testing
* [MongoDB](https://www.mongodb.com/)- NoSQL Database

## Sources Used

- I have referred https://dal.brightspace.com/d2l/le/content/203602/viewContent/2836350/View for creating simple REST API and connecting it with MongoDB. I have modified the files mentioned below:

### index.js

```
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Application running on "+PORT);
});

```
### app.js

```
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

const userRoute = require('./api/routes/userRoute');

const mongoUrl = "mongodb+srv://admin:admin@tutorial7.ut32x.mongodb.net/tutorial7DB?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {useNewUrlParser: true})
.then (() => {
    console.log("Database connection successful");
})
.catch(() => {
    console.log("Error connecting to database");
})

app.use("/", userRoute);

module.exports = app;

```
### user.js

```
const mongoose = require('mongoose');

const userSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
}

module.exports = mongoose.model("User", userSchema);

```

## Acknowledgments

- For tutorial on creating simple REST API with Node.js & Express.js and connecting it with MongoDB: https://dal.brightspace.com/d2l/le/content/203602/viewContent/2836350/View

- For tutorial on performing CRUD operations using MongoDB: https://coursework.vschool.io/mongoose-crud/

- For tutorial on how to deploy web application in heroku: https://medium.com/featurepreneur/how-to-connect-github-to-heroku-be6ff27419d3

- For Gitlab setup: https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html

- For understanding different HTTP response codes: https://restfulapi.net/http-status-codes/


 