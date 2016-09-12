$(document).ready(function () {
        $("#sports").hide();
         setInterval(function refreshDarkSky() {
         
         var iframe = document.getElementById('spin-iframe');
         iframe.src = iframe.src;
         
         }, 20000);
         $('.carousel').carousel({
         interval: 4500
         })
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://wtbu.bu.edu:1800/listen');
    
        //audioElement.load()

        $.get();

      

        $('.play').click(function() {
            audioElement.play();
        });

        $('.pause').click(function() {
            audioElement.pause();
        });
    

    var day = new Date();
    if (day.getDay() ==1 ) {
        if (18< day.getHours()){
            if (day.getHours() < 20  ){
             $("#frame").hide();
             $("#sports").show();
            }
        }
    } 

    });