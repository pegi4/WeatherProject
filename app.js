const express = require('express');
const https = require('https');

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Maribor&units=metric&lang=sl&appid=fe3f4adfab786bae3c4dac4635567807";

    https.get(url, function(response){
        console.log('statusCode:', response.statusCode);

        response.on("data", function(data) {
            //That's command put weather data into json format
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const feels_like = weatherData.main.feels_like;
            const weather_description = weatherData.weather[0].description;
            
            console.log("Temp. in MB is: " + temp);
            console.log("But it's feels like: " + feels_like);
            console.log(weather_description);
        });
    });

    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log('Server is running');
});