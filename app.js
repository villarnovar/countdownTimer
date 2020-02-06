let number = document.querySelector("input");
let button = document.getElementById("button");
let display = document.getElementById("container");
let body = document.getElementById("body");

function start(e){
    let read = Math.round(number.value);

    let countdown = setInterval(() => { 
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
        display.style.fontSize = "200px";
         
        display.innerHTML = read;
        read -=1;
        if(read < 0){    
            clearInterval(countdown);
            document.getElementById("button").disabled = false; 
            display.innerHTML = "FINISHED";
            display.style.fontSize = "95px";
        }else {
            read.value  = '';
            document.getElementById("button").disabled = true;

        }
    }
    ,1000);
    if(document.querySelector("input").value.trim()=== " "){
    
        display.innerHTML = " ";
        display.style.fontSize = "50px";
        body.style.backgroundColor = "white";
        alert("Enter a Number");
    }
    
if(number.value > 1000){
    alert("Enter 1000 or below");
    clearInterval(countdown)
}
    
    e.preventDefault();
};


button.addEventListener("click", start);








