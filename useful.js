

function fix_time(stamp){
    let milliseconds = stamp *1000;
    let dateObject = new Date(milliseconds);
    let humanDateFormat = dateObject.toLocaleString()
    return humanDateFormat.slice(-10);
};


function Get(zip_input){
    api_key = keys[0];
    keys.push(key.shift())
    return jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + String(zip_input) + "&appid=" + String(api_key) + "&units=imperial")
}

function useful(zip_input){
    let api_info = Get(zip_input)
    let min = api_info["main"]["temp_min"];
    let max = api_info["main"]["temp_max"];
    let offset = api_info["main"]["temp"] - api_info["main"]["feels_like"];
    let effective_min = String(min-offset)
    let effective_max = String(max-offset)
    return [[["temp",String(api_info["main"]["temp"]) + "\u00B0" + "F"],["feels like", String(api_info["main"]["feels_like"]),
    ["effective range", effective_min + "\u00B0" + "F to " + effective_max + + "\u00B0" + "F"], ["humidity",String(api_info["main"]["humidity"]) + "%"], 
    ["windspeed",String(api_info["main"]["windspeed"]) + "mph"],["precipitation",String(api_info["weather"][0]["description"])],
    ["sunrise",fix_time(api_info["sys"]["sunrise"])],["sunset",fix_time(api_info["sys"]["sunset"])]]]]

};


let keys = ["e06b39e88f79eda8cb7b94ea96ea1655","6cb276dc63f94bada117258366a136ba","9f29f05380690833534c53146e484162","3762f8e9ff7edb97b0045290d7d8dbd4","2c690a86493c2456173822c52d790434"];

