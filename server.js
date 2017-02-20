//var http = require('http');
//var fs = require('fs');
//var module1 = require('./module1');
//var module2 = require('./module2');

//function onRequest(request, response)
//{
//    response.writeHead(200, { 'Content-Type': 'text/plain' });
//    response.write(module2.myString);
//    module2.myFunction();
//    response.end();
//}

//http.createServer(onRequest).listen(8000);


var admin = require("firebase-admin");
//h

var serviceAccount = require("./public/src/eyesinthebackdb-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://eyesinthebackdb.firebaseio.com"
});


// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});