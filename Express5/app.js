var express=require('express');
var app=express();

app.set('view engine','ejs');
app.use('/assets',express.static('stuff'));
app.get('/',function(req,res){
res.render('index');
});

app.get('/contact',function(req,res){


res.render('contact',{qs:req.query});
});
app.get('/profile',function(req,res){
	
    res.render('profile',{qs:req.query});

});
app.listen(3000);
console.log("server is runing");

// var express=require('express');
// var app=express();

// app.set('view engine','ejs');
// app.get('/',function(req,res){
// res.sendFile(__dirname + '/index.html');
// });
// app.get('/contact',function(req,res){
// res.sendFile(__dirname + '/contact.html');

// });
// app.get('/profile:name',function(req,res){
// 	var data={age:31,job:'IT'};
//     res.render('profile',{person:req.params.name,data:data});

// });
// app.listen(3000);
// console.log("server is runing");