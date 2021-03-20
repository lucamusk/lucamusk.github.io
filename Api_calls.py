import time

#input from website
zip_input = None

keys = ["e06b39e88f79eda8cb7b94ea96ea1655","6cb276dc63f94bada117258366a136ba","9f29f05380690833534c53146e484162","3762f8e9ff7edb97b0045290d7d8dbd4","2c690a86493c2456173822c52d790434"]

def zip_call(zip_code):
    api_key = keys[0]
    api_key.append(api_key.pop(0))
    import urllib.request, json
    with urllib.request.urlopen("http://api.openweathermap.org/data/2.5/weather?zip=" + str(zip_code) + "&appid=" + str(api_key) + "&units=imperial") as url:
        data = json.loads(url.read().decode())
        return(data)


def useful(zip_code):
    api_info = zip_call(zip_code)

    return {"temp":str(api_info["main"]["temp"]) + " " u"\N{DEGREE SIGN}" + "F" ,"feels like":str(api_info["main"]["feels_like"]) + " " u"\N{DEGREE SIGN}" + "F",
            "range":str(api_info["main"]["temp_min"]) + " " u"\N{DEGREE SIGN}" + "F" + " to " + str(api_info["main"]["temp_max"]) + " " u"\N{DEGREE SIGN}" + "F",
            "humidity":str(api_info["main"]["humidity"]) + "%" ,"windspeed":str(api_info["wind"]["speed"]) + "mph","sunrise time":str(time.strftime("%D %H:%M", time.localtime(int(api_info["sys"]["sunrise"]))))[-4:],
            "sunset time":str(time.strftime("%D %H:%M", time.localtime(int(api_info["sys"]["sunset"]))))[-4:],"precipitation": str(api_info["weather"][0]["description"])}


#Luca, this function call takes zip_input (however you want to get that from the website to the file) from above and an 
#api key and prints the useful info from the api with that zip code
#whatever this code prints is sent to calls_from_python.js

print(useful(zip_input))
