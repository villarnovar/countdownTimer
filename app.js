

var countdownTime = new Date("December 31, 2020 24:00:00").getTime();


var countDown = setInterval(function() {
    var currentTime = new Date().getTime();

    var subResult = countdownTime - currentTime;

    var days = Math.floor(subResult/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((subResult % (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
    var minutes = Math.floor((subResult % (1000 * 60 * 60)) / (1000 *60));
    var seconds = Math.floor((subResult % (1000 * 60)) / 1000);
  //  console.log(subResult);
   // console.log(days);
   // console.log(hours);
   // console.log(minutes);
   // console.log(seconds);

   if(subResult < 0){
       clearInterval(countDown);
       days = 0, hours = 0, minutes = 0, seconds = 0;
       alert("HAPPY NEW YEAR!!!!!")
   }
   document.getElementById("days").children[0].innerText = days;
   document.getElementById("hours").children[0].innerText = hours;
   document.getElementById("minutes").children[0].innerText = minutes;
   document.getElementById("seconds").children[0].innerText = seconds;

}, 1000);