# Proxy IP Search

This is a basic app that sources IP addresses of proxies from [I-Blocklist](https://www.iblocklist.com) and allows you to search details of each through [KeyCDN](https://tools.keycdn.com/geo)

This project was created to make it more convenient to look up details of proxy addresses, gathered from a consistently updated database such as I-Blocklist. 

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

Once you have those installed, clone the repository to your working directory. 
Install required node packages through npm install. Set up a Heroku app by following this [guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

Local server:
$ heroku local web

Deploy to Heroku:
$ heroku ps:scale web=1

File descriptions:

views/index.ejs: 			 Front-end

server.js: 					 Back-end

blocklist-proxy_list.txt:  	 Contains the text data for proxy IP addresses

Procfile: 					 Launched by Heroku on deploy


This project is maintained by [Patrick Gao](https://github.com/patrick-gao)
