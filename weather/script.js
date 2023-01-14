let weather ={
    "apiKey": "5e4caface96b5ef824bd936b0d271bbc",
    fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        + "&appid="
        +this.apiKey+
        "&units=metric"
        )
        .then((response) => response.json())
        .then ((data) => this.displayWeather(data));
        

        
    },
    

    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather [0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {pressure} = data.main;
        console.log (name, icon, description,temp, humidity, speed, pressure);
        document.querySelector (".city").innerText="Weather in "+name;
        document.querySelector (".icon").src = "http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector (".description").innerText = description;
        document.querySelector (".temp").innerText=temp+"°C";
        document.querySelector (".humidity").innerText="Humidity "+humidity+"%";
        document.querySelector (".wind").innerText="Wind speed "+speed+"km/sek";
        document.querySelector (".pressure").innerText="Atmospheric pressure "+pressure+" hPa";
    

         },

    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);

         }
}
document.
    querySelector(".search button").
    addEventListener("click", function() {
    weather.search();}
    );
    document.
    querySelector(".search-bar").
    addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    }
    );