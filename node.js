let date = new Date();
    if(date.getDate() === 16 && date.getMonth() === 11)
                    {answer = "Yes of course"
                document.querySelector("h1").style.color = "#ff2d7566"}
            else
                {answer = "Nope , not yet"
                document.querySelector("h1").style.color = "#4fc3dc66"}
    document.querySelector("h1").append(answer)
    var countDownDate = new Date("Dec 12,2023 00:00:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var countdown = countDownDate - now;
    
    var days = Math.floor(countdown/(1000*60*60*24));
    var hours = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((countdown %(1000*60*60))/(1000*60));
    var seconds = Math.floor((countdown%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(countdown < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);