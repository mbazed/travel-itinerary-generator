process.loadEnvFile();


const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname,'../frontend/')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit',async(req,res) =>{

    const {destination,startDate,endDate} = req.body;

    try{
        const placesApiKey = process.env.GOOGLE_PLACES_API_KEY;
        const placesResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`,{
            params:{
                query:destination,
                key:placesApiKey,
                type:'tourist_attraction'
            }
        });
        const places = placesResponse.data.results;
        console.log('Google Places API response:', placesResponse.data);
        // console.log('places: ',places);

        const weatherApiKey = process.env.OPENWEATHERMAP_API_KEY;
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${weatherApiKey}`);
        const weather = weatherResponse.data;
        // console.log(weather);

        const itinerary = [];
        const startdateObj = new Date(startDate);
        const enddateObj = new Date(endDate);
        let currentDate = startDate;

        while(currentDate <= enddateObj){
            const activities = [places[Math.floor(Math.randon()*places.lenght)].name];
            itinerary.push({
                date: currentDate.toDateString(),
                activities
            });
            currentDate.setDate(currentDate.getDate()+1);
        }

        res.json({
            destination,
            startDate,
            endDate,
            weather,
            itinerary
        });
    }catch(error){
        console.error(error);
        res.status(500).json({error:'Server error'});
    }
});

app.listen(port,() =>{
    console.log(`Server listening on port ${port}`);
});