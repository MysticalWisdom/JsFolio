const express = require('express');
const app = express();



app.set('view engine', 'ejs')

app.use(express.static("./public"));

app.get('/', function(request,response){
    response.render('about')
});

app.get('/project', function(request,response){
    response.render('project')
});

app.get('/xp', function(request,response){
    response.render('xp')
});

app.get('/contact', function(request,response){
    response.render('contact')
});

app.listen(3000,
    console.log("Server is live and looking good"));
