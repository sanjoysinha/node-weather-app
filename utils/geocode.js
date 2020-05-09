const request = require('request')

const geocode = (address, callback)=>{
    const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia29rb2gxMDEwIiwiYSI6ImNrOXR0dnp4bDAwemczbG51MjM0MTAwMDIifQ.9PRGnMjDsb2rbX9xVWRN3A&limit=1'
request({url:urlLocation , json:true}, (error, response)=>{

    if (error){
        callback('Location services not available');
    }
    else if (response.body.features.length === 0){
        callback('Try another location');
    }
    else{
        callback(undefined,{
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        });
    }
})

}

module.exports = geocode