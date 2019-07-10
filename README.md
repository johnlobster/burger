## burger - a burger eating log
Stores burgers you want to eat and burgers you have eaten in a mysql database. Uses handlebars templating engine to deliver web pages to user

#### Technologies and node modules
* javascript
* jQuery
* GitHub
* node.js
* express
* handlebars
* html
* bootstrap
* Heroku

#### Deployed

<https://still-refuge-63688.herokuapp.com/>

Note - heroku apps are paused if not in use, will take 10-15 seconds for it to restart

#### Github repository
<https://github.com/johnlobster/burger.git>

#### Running locally

clone the master repo, cd to burger directory

`npm install` will install all the node modules

create a `.env` file (not tracked by git) and add the following

`MYSQL_PASSWORD=<your password to mysql server for user "root">`

`node server` will start the server

Browse to `http://localhost:8080/` There is only a single page

Static files are served from app/public.

#### API

There are two endpoints

PUT to `/api/devour` - sets devour boolean for burger listed in body

POST to `/api/newBurger` - adds a new burger to the "burgers I want to eat" list

#### Results
Results can be found in the results sub-directory.
`results/README.txt` has details

#### Design notes

ORM and burger model are promise based




