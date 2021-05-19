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
var event17 = JSON.parse(localStorage.getItem("hour17"));

//Insert the above events into the local storage 

$.each(hours, function(index,value){
    events = [event8, event9, event10, event11, event12, event13, event14, event15, event16, event17]
    $(".container").append("<div class='row><div class='col-2 hour text-right' id='hour'"+
    (index + 9)+ "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='text-block'"+
    (index + 9)+ "'><textarea class='events col-12' id='event-block'" + (index + 9) + "'>" + events[index] + "</textarea></div>" + 
    "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});


//Check time to determine past, present and future 

var checkTime = function(){
    presentTime = moment().format("hh:mm:ss"); 

    if (moment().isBetween(hour8, hour9)){
        $("#time-block8").addClass("present");
    }
    else if(moment().isAfter(hour9)){
        $("time-block8").addClass("past");
    }
    else{
        $("#time-block8").addClass("future");
    }
///////////////////////////////////////////////////
    if (moment().isBetween(hour9, hour10)){
        $("#time-block9").addClass("present");
    }
    else if(moment().isAfter(hour10)){
        $("time-block9").addClass("past");
    }
    else {
        $("#time-block9").addClass("future");
    }
////////////////////////////////////////////////////
    if (moment().isBetween(hour10, hour11)){
        $("#time-block10").addClass("present");
    }
    else if(momen11().isAfter(hour11)){
        $("time-block10").addClass("past");
    }
    else {
       $("#time-block10").addClass("future");
    }
///////////////////////////////////////////////////
    if (moment().isBetween(hour11, hour12)){
        $("#time-block11").addClass("present");
    }
    else if(moment().isAfter(hour12)){
        $("time-block11").addClass("past");
    }
    else {
        $("#time-block11").addClass("future");
    }
///////////////////////////////////////////////////
    if (moment().isBetween(hour12, hour13)){
        $("#time-block12").addClass("present");
    }
    else if(moment().isAfter(hour13)){
        $("time-block12").addClass("past");
    }
    else {
        $("#time-block12").addClass("future");
    }
///////////////////////////////////////////////////
    if (moment().isBetween(hour13, hour14)){
        $("#time-block13").addClass("present");
    }
    else if(moment().isAfter(hour14)){
        $("time-block13").addClass("past");
    }
    else {
        $("#time-block13").addClass("future");
    }
///////////////////////////////////////////////////
    if (moment().isBetween(hour14, hour15)){
        $("#time-block14").addClass("present");
    }
    else if(moment().isAfter(hour15)){
        $("time-block14").addClass("past");
    }
    else {
        $("#time-block14").addClass("future");
    }

    ////////////////////////////////////////////////////
    if (moment().isBetween(hour15, hour16)){
        $("#time-block15").addClass("present");
    }
    else if(moment().isAfter(hour16)){
        $("time-block15").addClass("past");
    }
    else {
        $("#time-block15").addClass("future");
    }

    ////////////////////////////////////////////////////
    if (moment().isBetween(hour16, hour17)){
        $("#time-block16").addClass("present");
    }
    else if(moment().isAfter(hour17)){
        $("time-block16").addClass("past");
    }
    else {
        $("#time-block16").addClass("future");
    };

}





