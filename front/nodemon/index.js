const con = require('./connection');
const port = 2020;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello world gujarat!")
});

// app.post('/signup', (req, res) => {
//     const data = [
//         {
//         name: req.body.name,
//         Email: req.body.Email,
//         password: req.body.password,  
//     }];
//     con.query('INSERT INTO signup SET ?', data, (err, result) => {
//         if(err) {
//             console.log("Error", err);
        
// }else {
//     return res.json({
//         success: 1,
//         message: "sing up successfully",
//         result
    
//     });
// }
//     }) 

// .EofPacket0321212


app.post("/register", (req, res) => {
    const data = [
        { 
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            phno: req.body.phno,
            password: req.body.password,
            cpassword: req.body.cpassword,
            
        },
    ];


    if (req.body.password == req.body.cpassword){

        
        con.query('INSERT INTO register SET ?', data, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                return res.json({
                    success: 1,
                    message: "sing registration successfully",
                    details: data,
                    result

                });
            }
        })
    }
    
        else{
return res.json({
    success: 0,
    message: "please enter the registration & c_password are same",
        });




}
});


// app.post('/register' , (req,res)=>{
//     const data = [{
//         name : req.body.name,
//         email : req.body.email,
//         gender : req.body.gender,
//         phno: req.body.phno,
//         password : req.body.password,
//         cpassword : req.body.cpassword,
//     }]


//     if(req.body.password === req.body.cpassword){
//         con.query("INSERT INTO register ")
//     }
// })


app.listen(port, () => {
    console.log(`port is running on ${port}`);
})