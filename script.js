var start = document.getElementById('start');//taking start button element id
var stop = document.getElementById('stop'); // stop button element id
var reset = document.getElementById('reset'); // reset button id
var millCounter = document.getElementById('milsec');// id of millisecond to show millisecond 
var secCounter = document.getElementById('second');// id of second to show second
var minCounter = document.getElementById('minute'); // id of minute to show minute


// default value of timer.
var mill = 0;
var sec = 0;
var min = 0;

var interval;
// on clicking start it will call startClock function
start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(clock,10); // calling clock function on each 10 millisecond
}
// function to stop the timer.
stop.onclick = function(){
    clearInterval(interval);
}

// function to reset the timer to zero
reset.onclick = function(){
    clearInterval(interval);
    mill = '00';
    sec = '00';
    min = '00';
    millCounter.innerHTML = mill;
    secCounter.innerHTML = sec;
    minCounter.innerHTML = min;
}
// clock main function 
function clock(){
    mill++;
    if(mill<=9){
        millCounter.innerHTML = '0'+mill;
    }
    if(mill>9 && mill < 99){
        millCounter.innerHTML = mill;
    }
    if(mill>99){
        sec++;
        mill = 0;
        if(sec<=9){
            secCounter.innerHTML = '0'+sec;
        }
        if(sec>9 && sec < 60){
            secCounter.innerHTML = sec;
        }
        if(sec>59){
            sec = 0;
            min++;
            if(min<=9){
                minCounter.innerHTML = '0'+min;
            }
            if(min>9){
                minCounter.innerHTML = min;
            }
        }
        
    }
}

// changing background of home page
var theme = document.getElementById('change-theme');
var imageCount = 2;
// function to change background image.
theme.onclick = function(){
    var img = `url('./assets/${imageCount}.jpg')`
    var background = document.getElementById('background');
    background.style.backgroundImage = img;
    imageCount++;
    if(imageCount==11){
        imageCount=1;
    }
    
}