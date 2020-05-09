
const request = require('request')
const location = (latitude,longitude , callback)=>{
    // const url = 'http://api.weatherstack.com/current?access_key=673b035d3d5dcaa3723f33df8bada761&query=37.8267,-122.4233'
    const url = 'http://api.weatherstack.com/current?access_key=673b035d3d5dcaa3723f33df8bada761&query='+latitude+','+longitude
 
     request({url:url, json:true}, (error, response)=>{
 
         if (error){
             callback('Unable to connect',undefined)
         }
         else if(response.body.error)
         {
             callback('Unable to find location',undefined)
         }
         else
         {
             callback(undefined,{
                 decription: response.body.current.weather_descriptions
             })
         }
     
     })
 }
 module.exports= location;