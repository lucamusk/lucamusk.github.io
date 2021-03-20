
let reccomendation;

if (etemp){
    if (etemp<16.6){
        reccomendation = "At your current temperature, there is at least a medium risk of frostbite. It is highly recommended that your limit your exposure outdoors, as frostbite can develop in 10 to 30 minutes even with proper protection. That being said, if you do go outside, make sure to travel in pairs or groups to consistently check for signs of frostbite and keep moving to keep your blood flow going. In addition to three layers of clothing and a wind-resistant coat, you should buy "
        + "hand warmers ".link("https://www.amazon.com/HotHands-Hand-Warmers-Odorless-Activated/dp/B0007ZF4OA/ref=sr_1_5?dchild=1&keywords=hand+warmers&qid=1616264691&sr=8-5")
        + "if you are spending more than 10 minutes outdoors."
    }
    if ((etemp > 16.6) && (etemp>32)){
        reccomendation = "Although there is a low risk of frostbite above -16.6°, prolonged exposure to your current temperature without appropriate dressing can cause hypothermia. Try to warm up frequently (by entering a store or drinking a hot beverage) and bring multiple extra layers of clothing."
        + "\n Dress for the weather by properly layering your clothing and making sure your skin is fully covered by fabric. Consider at least three layers complete with a wind-resistant coat before venturing outdoors. You should also wear a hat, earmuffs, gloves, a scarf, and water-resistant boots so you can stay dry and protect your extremities from the cold."
    }
    if ((etemp > 32) && (etemp<45)){
        reccomendation = "Between 32° and 45°, the temperature can easily fluctuate. Be prepared by wearing and bringing layers, so you can shed a layer if you start to heat up and add one if you get cold. Make sure to have at least a light jacket and a sweater/sweatshirt to start with and an extra layer in a bag or wrapped around your waist. Also, take a hat and gloves with you in case the temperature drops later in the day. "
    }
    if ((etemp > 45) && (etemp<60)){
        reccomendation = "At your current temperature you will likely not need more than a light jacket or sweatshirt. Bring another couple of extra layers in case the temperature drops. Ensure that if you remove a layer, you are still fully covered (with long pants/leggings and long sleeves) to protect you from the elements and any possible tripping or falling."
    }
    if ((etemp > 60) && (etemp<80)){
        reccomendation = "At your current temperature you will likely not need a jacket or sweater, but bring a sweatshirt or any light layer in case it starts to get colder. The important thing is to wear long pants/leggings and long sleeves to protect you from the elements and any possible tripping or falling. "
    }
    if ((etemp > 80)){
        reccomendation = "At your current temperature, the biggest danger in terms of weather is heat exhaustion and dehydration. Wearing masks and a lack of bathrooms can cause people to not drink enough water during protests. To combat this, drink water before you go and bring water with you. It is important to know the symptoms of dehydration and heat exhaustion which include thirst, a lack of urination, dizziness, increased breathing, heavy sweating, and a rapid pulse. If you notice any of these symptoms, stop all activity, find a cooler area, and rehydrate. If symptoms worsen or don’t improve within an hour, seek medical help. In addition, even though it is warm, it is still important to wear long pants/leggings and long sleeves to protect you from the elements and any possible tripping or falling. "
    }

}