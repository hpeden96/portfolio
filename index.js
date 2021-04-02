import express from 'express';
import yes from 'yes-https';
import nodemailer from 'nodemailer';

const app = express();
const path = __dirname + '/PortfolioWebsite/';

app.use(yes());

app.get('/', function(req,res){
    res.sendFile(path + '/index.html');

});

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json());


app.use(express.static(path));

app.listen(3000, function(){
    console.log('Live at port 3000')
});