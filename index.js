"use strict";
var currentYear = new Date().getFullYear();
var newYears = "1 Jan ".concat(currentYear + 1);
var newYearsDate = new Date(newYears);
var daysElement = null;
var hoursElement = null;
var minutesElement = null;
var secondsElement = null;
var initialElement = function () {
    daysElement = document.getElementById("days");
    hoursElement = document.getElementById("hours");
    minutesElement = document.getElementById("minutes");
    secondsElement = document.getElementById("seconds");
};
var countdown = function () {
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error("要素が見つかりませんでした");
        return;
    }
    var currentDate = new Date();
    var totalSeconds = (newYearsDate.getTime() - currentDate.getTime()) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;
    daysElement.innerText = formatTime(days);
    hoursElement.innerText = formatTime(hours);
    minutesElement.innerText = formatTime(minutes);
    secondsElement.innerText = formatTime(seconds);
};
var formatTime = function (time) {
    return time < 10 ? "0".concat(time) : String(time);
};
document.addEventListener("DOMContentLoaded", function () {
    initialElement();
    countdown();
    setInterval(countdown, 1000);
});
//# sourceMappingURL=index.js.map