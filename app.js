const express = require('express');
const app = express();



app.set('view engine', 'ejs')

app.use(express.static("./public"));

app.get('/', function(request,response){
    response.render('about')
    response.render('contact.ejs')

});

app.listen(3000,
    console.log("Server is live and looking good"));
