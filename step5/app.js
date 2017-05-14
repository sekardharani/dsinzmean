var express = require('express');
var app =express();


app.get('/',function(req,res){

	res.send('Express Hello');

});

app.listen(5000, function(){ console.log('http server created') });
console.log('server open using express')
