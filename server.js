const path=require('path');
const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var publicpath= path.join(__dirname,"Public")
app.use(express.static(path.join(publicpath)));


var routeentreprise=require('./Routes/entreprise');
var routeajoutentreprise=require('./Routes/ajoutentreprise')
var routeajoutdepartement=require('./Routes/ajoutdepartement')
app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 

//  app.use(express.static('Public'))
 app.use(routeentreprise);
 app.use(routeajoutentreprise);
 app.use(routeajoutdepartement);
                     
                                      app.post('/login',(req,res)=>{
                                        console.log(req.body); 
                                        res.send('succefuly posted data');
                                      });

app.use('/static', express.static('public'));
                                      app.get('/', function(req,res){
                                        res.sendFile(path.join(__dirname ,'index.html'));
                                      });
                     
                                      // app.post('/login',(req,res)=>{
                                      //   console.log(req.body); 
                                      //   res.send('succefuly posted data');
                                      // });
                                      

                                                                    // Send Data to file json 







app.listen(3000,()=>{
    console.log("app is listning");
})





