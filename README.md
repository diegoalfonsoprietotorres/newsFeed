
**News Feed**
---------

This proyect is the answer for the Rappi Inc test for UI Web Developer, this code is running in  [this heroku instance](https://new-feed.herokuapp.com/). For run the app download this repository and run the next commands:

 - npm install
 - bower install
 - gulp serve



For create the project I used a scaffolding tool called yeoman, with the webapp generator. In that way this tool set up:

* sass
* bootstrap
* gulp
* bower
* mocha
* browsersync

Whit bower I installed angular and with it I coded a Service and a Controller:

 - FeedService: Its responsability is load the data from the .json file, use $http angular dependency for make a HTTP request to the file. To change the source where the data is loaded only is necesary to change the URL in the service.

> $http.get(url');

 - NewsController: Its responsability is manage the front events for select/unselect a new or reload all news.
 - For include the animations I used the Animation.css library
 - I did not include tests.
