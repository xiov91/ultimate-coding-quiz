
// ask Ben about this function--shows minutes and seconds like I want, but not sure how it works.
//      -also, click function won't work? Without it, timer starts when page loads, not when the button's clicked
//      -with it, button does nothing and timer does nothing, but there's no error code!

$("#start-btn").click(function () {
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };
});

