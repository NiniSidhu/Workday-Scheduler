//Fetching Present day

var currentDay = moment().format("LL");
$("#currentDay").text(currentDay);

// Timeblocks for the scheduler 
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);

//Array of all the variables 

var hours = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16];

//Fetches local Stoage 

var event8 = JSON.parse(localStorage.getItem("hour8"));
var event9 = JSON.parse(localStorage.getItem("hour9"));
var event10 = JSON.parse(localStorage.getItem("hour10"));
var event11 = JSON.parse(localStorage.getItem("hour11"));
var event12 = JSON.parse(localStorage.getItem("hour12"));
var event13 = JSON.parse(localStorage.getItem("hour13"));
var event14 = JSON.parse(localStorage.getItem("hour14"));
var event15 = JSON.parse(localStorage.getItem("hour15"));
var event16 = JSON.parse(localStorage.getItem("hour16"));

