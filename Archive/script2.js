$(document).ready(function () {
         setInterval(function refreshDarkSky() {
         
         var iframe = document.getElementById('spin-iframe');
         iframe.src = iframe.src;
         
         }, 20000);
         $('.carousel').carousel({
         interval: 4500
         })
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://wtbu.bu.edu:1800/listen');
        //audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.play();
        });

        $('.pause').click(function() {
            audioElement.pause();
        });
    });