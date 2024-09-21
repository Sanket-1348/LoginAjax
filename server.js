const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
app.use(express.static('.'))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/login.html"))
})

app.post('/login',(req,res)=>{
    fs.readFile('users.json','utf-8',(err,data)=>{
        data=JSON.parse(data)
        // console.log(data)
       
        let user = data.filter((ele)=>{
    
            return ele.username == req.body.username
        })
        console.log(user)
        console.log(req.body.password)
        
        if(user.length == 0) res.send({status:"User Not found"})
        else {if(req.body.password != user[0].password) res.send({status:"Password Not Matched"})
    else res.send({status:"Login Successful"})
    }
    })

})

app.listen(3003,()=>{console.log("Server Started.....")})
