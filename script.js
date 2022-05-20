var todaysdate = moment().format("MMMM DO, YYYY");
var currentDay = $("#currentDay");
var timeblocks = $("#time-blocks");

console.log (todaysDate);

function setCurrentDay(){
    currentDay.html(todaysDate);

    //textContent =
    //innerHTML
}

setCurrentDay();

