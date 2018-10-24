const express = require('express')
const path = require('path')
const csv = require('csvtojson')
const request = require('request')
const fetch = require('node-fetch')
const bodyparser = require('body-parser')
const fs = require('fs')
const readline = require('readline')
const PORT = process.env.PORT || 5000

// [IP Location Finder by KeyCDN] (https://tools.keycdn.com/geo)

var ip_array = [];

console.log("Loading data...");
const line_read = readline.createInterface({
	input: fs.createReadStream('blocklist-proxy_list.txt')
});
line_read.on('line', function(line) {
	var s = line.indexOf(':');
	var f = line.indexOf('-');
	var ip = line.slice(s+1, f);
	ip_array.push(ip);
});
console.log("Data loaded");

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyparser.json())
    .use(bodyparser.urlencoded({extended: true}))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/load_ip', function (req, res) {
    	var data = req.body.data;
    	var subarray = ip_array.slice(20*(data) + 1, (20*(data)) + 21);
    	res.send(subarray);
    })
    .post('/search', function (req, res) {
    	var data = req.body.data;
    	console.log(req.body);
    	var found = ip_array.find(function(element) {
    		return element == data;
    	});
		if (found == undefined) {
    		res.send("IP address not found");
    	} else {
    		const config = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			};
			fetch("https://tools.keycdn.com/geo.json?host="+found, config)
			.then(res => res.json())
			.then(response => {
				console.log(response);
				res.send(response);
			})
			.catch(error => console.log(error));

    	}
    })

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))