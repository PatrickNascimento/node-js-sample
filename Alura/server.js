var express = require('express');

var app = express();

app.get('/produtos',function(req,res){
 res.send("<h1> Hello World</h1>");
});


app.listen(3000,function(){
	console.log("Server running");
})
