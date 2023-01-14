let countryall = {
    fetchcountry: function (country_name) {
        fetch(
          "https://restcountries.com/v3.1/name/" +
            country_name
            )
            .then((Response)=>Response.json())
            .then ((data) => this.displaycountry(data));
        },

    displaycountry: function (data) {
        var country=data[0].altSpellings[1];
        var capital=data[0].capital[0];
        let region=data[0].region;         
        var flags=data[0].flags.png;
        var currency=Object.keys(data[0].currencies)[0];
        console.log(data);
        console.log(document.querySelector(".country_name").value);
        document.querySelector (".capital").innerText="Capital of "+country+" : "+capital;            
        document.querySelector (".flag").src =flags;
        document.querySelector (".region").innerText="Region:"+region;
        document.querySelector (".currencies").innerText="Currency: "+currency;
    },
    search:function(){
        this.fetchcountry(document.querySelector(".country_name").value);}    
}
document.
    querySelector(".input-country button").
    addEventListener("click", function() {
    countryall.search();}
    );
document.
    querySelector(".country_name").
    addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            countryall.search();
        }
    }
        );
