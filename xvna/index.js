var express = require('express');
var session = require('express-session');
var app = express();

app.use(express.static('public'));
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xvna";
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(session({
	secret: "Your secret key"
}));
var exec = require('child_process').exec;

var fs = require('fs');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var xml = require('xml');
var serialize = require('node-serialize');

// Login Start
app.post('/api/users', function (req, res) {
	var cope = req.body
	console.log(req.body.password.indexOf("{"))
	if ((req.body.password.indexOf("{")) >= 0) {
		var searchstring = {
			email: req.body.email
			, password: JSON.parse(req.body.password)
		}
	}
	else {
		var searchstring = {
			email: req.body.email
			, password: req.body.password
		}
	}
	console.log("searchstring", searchstring)
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbase = db.db("xvna");
		dbase.collection("login").find(searchstring).toArray(function (err, result) {
			if (err) throw err;
			else {
				console.log("result", result)
				if (result.length > 0) {
					req.session.user = cope;
					res.send('true')
				}
				else {
					res.send('false')
				}
			}
			db.close();
		});
	});
});
app.post('/service_login', function (req, res, next) {
	console.log(req.session.user)
	if (req.session.user) {
		next(); //If session exists, proceed to page
	}
	else {
		var err = new Error("Not logged in!");
		res.send('invalid')
			//next(err);  //Error, trying to access unauthorized page!
	}
});

app.post('/service_logout', function(req, res){
	console.log("destroy",req.session.user)
   req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/login');
});
// Login End

app.get('/getdata', function(req, res){
    var id = req.query['id'];
    id = JSON.parse(id);
    MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbase = db.db("xvna");        
		dbase.collection("users").find({ id: id}, {'name': true, 'id': true, 'age': true}).toArray(function (err, result) {
			if (err) throw err;
			else {
				res.json({cmd: result, search: id});
			}
			db.close();
		});
	});    
   
});

app.get('/a3sensitive', function(req, res){
    var id = req.query['id'];
    MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbase = db.db("xvna");
		dbase.collection("users").find({ id: parseInt(id)}).toArray(function (err, result) {
			if (err) throw err;
			else {
				res.json({cmd: result, search: id});
			}
			db.close();
		});
	});    
   
});

app.get('/a3sensitive_header', function (req,res) {
	
	res.send(JSON.stringify(req.headers));
});

app.get('/a4xxe', function(req, res){
    var id = req.query['id'];
//    res.set('Content-Type', 'text/xml');
//    var data = fs.readFileSync('public/users.xml', {encoding: 'utf-8'});
//var doc = new dom().parseFromString(data);
//var title = xpath.select("string(//users/user[@ID='"+id+"'])", doc);
//        res.send(title);
   const Dom = require('xmldom').DOMParser;
const select = require('xpath.js');
const xml = '<ns2:OrderList> <order order_id="123" item_name="123"/> <order order_id="234" item_name="1233"/> <order order_id="2357" item_name="1234"/> </ns2:OrderList>¬';
const doc = new Dom().parseFromString(xml);
const nodes = select(doc, '//order');

const orderIds = nodes.map((node) => node.getAttribute('order_id'));
console.log(orderIds);
    
});

app.post('/insecure_dor', function(req, res, next) {
    var accno = req.body.accountno;
    MongoClient.connect(url, function(err, db) {        
        if (err) throw err;
        var dbase = db.db("xvna");
        dbase.collection("a5_insecure_dor").find({ accountno: accno }).toArray(function(err, result) {
            if (err) throw err;
            else {
                res.json(result);
            }
            db.close();
        });
    });
});

app.get('/ping', function(req, res){
    var id = req.query['id'];
    
   exec('ping ' + id, function (err, stdout, stderr) {
		output = stdout + stderr;
    
       res.send(output);       
		
	})
});
app.get('/xss_r', function(req, res){
    var id = req.query['id'];    
    MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbase = db.db("xvna");
		dbase.collection("cart").find({ name: id}).toArray(function (err, result) {
			if (err) throw err;
			else {
				res.json({cmd: result, search: id});
			}
			db.close();
		});
	});
  
});

app.post('/a6_misconfig', function(req, res, next) {
    var accno = JSON.parse(req.body.accountno);
    console.log(typeof(accno));
    MongoClient.connect(url, function(err, db) {
        if (err){
        	res.json(err);
        }
        var dbase = db.db("xvna");
        dbase.collection("a5_insecure_dor").find({ accountno: accno }).toArray(function(err, result) {
            if (err){
            	res.json(err);
            }
            else {
                res.json(result);
            }
            db.close();
        });
    });
});

app.get('/eval', function(req, res){
    secret = "impraveensingh";
    var id = req.query['id'];
    var id2 = req.query['id2'];    
   result = eval(id + id2);    
    res.json({cmd: result});
  
});

app.post('/insecure_deserialization', function (req, res) {
	var id = req.body.userid.toString()
	console.log(id)
	var obj = {
		name: id
		, say: function () {
			return 'Searched Item ' + this.name;
		}
	};
	var objS = serialize.serialize(obj);
	typeof objS === 'string';
	serialize.unserialize(objS).say();
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbase = db.db("xvna");
		dbase.collection("cart").find({
			name: id
		}).toArray(function (err, result) {
			if (err) throw err;
			else {
				console.log(result)
				res.json({
					cmd: result
					, search: id
				});
			}
			db.close();
		});
	});
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);