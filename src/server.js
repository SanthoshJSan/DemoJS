var express=require("express");
var app=express();

app.use(express.json());

var dataSet=[
    {name:"a",age:1},
    {name:"c",age:3},
    {name:"d",age:4},
    {name:"e",age:5},
    {name:"b",age:6}
]

app.route("/")

.get(function(req,res){
    console.log("get request received");
    console.log(dataSet)
    res.send(dataSet);
    res.end();
})


.post(function(req,res){
    console.log("post request received");
        console.log("success");
    console.log(req.body.name);
    dataSet.push(req.body);
    for(var i = 0; i < dataSet. length ; i++){
        console.log("success");
        console. log(dataSet[i])
        }
    
}).put(function(req,res){
    console.log("put request received");
    console.log(req.body);
    for(var i=0;i<dataSet.length;i++)
    {
       if(dataSet[i].name===req.body.name)
       dataSet[i].age=req.body.age;
    }
    console.log("Updated");
}).delete(function(req,res){
    for(var i=0;i<dataSet.length;i++)
    {
       if(dataSet[i].name===req.body.name||dataSet[i].age===req.body.age)
       dataSet.splice(i,1);
    }
    for(var i = 0; i < dataSet. length ; i++){
        console. log(dataSet[i])
        }
    console.log(req.body);
});
app.listen("3000",()=>{console.log("listening on port 3000")});


