const location = require('./utils/forecast')
const geocode = require('./utils/geocode')
const express = require('express')
const app = express()

// geocode('Philadelphia',(error ,data)=>{
// console.log('Error', error)    
// console.log(data);
    
//     location(data.latitude, data.longitude,(error,data)=>{
//     console.log(error);
//     console.log(data)
// })


// })

app.get('/weather',(req,res)=>{

if (!req.query.address){
    return res.send({
        error : 'Address is mandatory'
    })
}
geocode(req.query.address,(error,data)=>{
    //res.send(data);

    location(data.latitude,data.longitude, (error, data)=>{

    res.send(data);


    })

})


})











var server = app.listen(3000,()=>{
var host = server.address().address;
var port = server.address().port
console.log(`Server is listening on host ${host} and port ${port}`)
}) 


