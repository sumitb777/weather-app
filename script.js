const apiKey="24387ba69a6f52309605463e445c75a2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".inputd");
const sinput=document.querySelector(".search-input");
const state=document.querySelector(".info");
const state2=document.querySelector("body");
let time= new Date();
let h=time.getHours();
let m=time.getMinutes();
async function weather(cityname){

    const response =await fetch(apiUrl+cityname+`&appid=${apiKey}`);
    // const response =await fetch
    // (" https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=24387ba69a6f52309605463e445c75a2&q=mumbai");    
    console.log(state)
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".info").style.display="none"
    }
    else{
        let data=await response.json();
        console.log(data);
        console.log(data.weather[0].main);       
    document.querySelector(".info").style.display="block"
    document.querySelector(".city2").innerHTML=data.name;
    // document.querySelector(".ctime").innerHTML=`${h}:${m}`
    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".feel").innerHTML=Math.round(data.main.feels_like)+"°C";
    document.querySelector(".condition").innerHTML=data.weather[0].main;
    document.querySelector(".airi").innerHTML=Math.round(data.main.temp_min)+"°C";
    document.querySelector(".airi2").innerHTML=Math.round(data.main.temp_min)+"°C";
    document.querySelector(".airm").innerHTML=Math.round(data.main.temp_max)+"°C";
    document.querySelector(".airm2").innerHTML=Math.round(data.main.temp_max)+"°C";
    document.querySelector(".humper").innerHTML=data.main.humidity+"%";
    document.querySelector(".humper2").innerHTML=data.main.humidity+"%";
    document.querySelector(".visid").innerHTML=Math.round(data.visibility)+"mt";
    document.querySelector(".pressm").innerHTML=Math.round(data.main.pressure)+"mb";
    document.querySelector(".wins").innerHTML=Math.round(data.wind.speed)+"Km";
    document.querySelector(".wins2").innerHTML=Math.round(data.wind.speed)+"Km";
    document.querySelector(".descrip").innerHTML=data.weather[0].description;
    document.querySelector(".error").style.display="none";
    if(data.weather[0].main=="Clouds"){
        state.style.backgroundImage= "url('./images/cloud dark.jpg')";
        state2.style.backgroundImage= "url('./images/cloud dark.jpg')";
    }
    else if(data.weather[0].main=="Smoke"){
        state.style.backgroundImage= "url('./images/Smoke_Clouds.jpg')";
        state2.style.backgroundImage= "url('./images/Smoke_Clouds.jpg')";
    }
    else if(data.weather[0].main=="Rain"){
        state.style.backgroundImage= "url('./images/rainy.jpg')";
        state2.style.backgroundImage= "url('./images/rainy.jpg')";
    }  else if(data.weather[0].main=="Haze"){
        state.style.backgroundImage= "url('./images/Hazy Night.webp')";
        state2.style.backgroundImage= "url('./images/Hazy Night.webp')";
    }  else if(data.weather[0].main=="Drizzle"){
        state.style.backgroundImage= "url('./images/rainy.jpg')";
        state2.style.backgroundImage= "url('./images/rainy.jpg')";
    }  else if(data.weather[0].main=="Mist"){
        state.style.backgroundImage= "url('./images/Hazy Night.webp')";
        state2.style.backgroundImage= "url('./images/Hazy Night.webp')";
    }else if(data.weather[0].main=="Clear"){
        state.style.backgroundImage= "url('./images/clear.jpg')";
        state2.style.backgroundImage= "url('./images/clear.jpg')";
        if(h>19){
            state.style.backgroundImage= "url('./images/night-sky.jpg')";
            state2.style.backgroundImage= "url('./images/night-sky.jpg')";
        }
    }   
    else {
        state.style.backgroundImage= "url('./images/forest.jpg')";
        // state2.style.backgroundImage= "url('./images/forest.webp')";
    }
    }
}
    search.addEventListener("click",()=>{
    weather(sinput.value); 
    })
    // 
    addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        weather(sinput.value); 
    }
    })
