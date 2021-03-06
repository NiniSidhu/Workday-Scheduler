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

var event8 = JSON.parse(localStorage.getItem("hour8")) || "";
var event9 = JSON.parse(localStorage.getItem("hour9")) || "";
var event10 = JSON.parse(localStorage.getItem("hour10")) || "";
var event11 = JSON.parse(localStorage.getItem("hour11")) || "";
var event12 = JSON.parse(localStorage.getItem("hour12")) || "";
var event13 = JSON.parse(localStorage.getItem("hour13")) || "";
var event14 = JSON.parse(localStorage.getItem("hour14")) || "";
var event15 = JSON.parse(localStorage.getItem("hour15")) || "";
var event16 = JSON.parse(localStorage.getItem("hour16")) || "";
var event17 = JSON.parse(localStorage.getItem("hour17")) || "";

//Insert the above events into the local storage 

$.each(hours, function(index,value){
    events = [event8, event9, event10, event11, event12, event13, event14, event15, event16, event17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
    (index + 8) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='time-block"+
    (index + 8) + "'><textarea class='events col-12' id='event-block" + (index + 8) + "'>" + events[index] + "</textarea></div>" + 
    "<div class='col-2 save-delete' id='save-delete" + (index + 8) + "'><i class='fas fa-save' title='Save Task'></i> <i class='fas fa-trash' title='Delete Task'></i></div></div></div>");
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
    else if(moment().isAfter(hour11)){
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

// Delete Event function  

$("#save-delete8").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour8");
    $("#event-block8").val("");
})

$("#save-delete9").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour9");
    $("#event-block9").val("");
})

$("#save-delete10").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour10");
    $("#event-block10").val("");
})

$("#save-delete11").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour11");
    $("#event-block11").val("");
})

$("#save-delete12").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour12");
    $("#event-block12").val("");
})

$("#save-delete13").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour13");
    $("#event-block13").val("");
})

$("#save-delete14").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour14");
    $("#event-block14").val("");
})

$("#save-delete15").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour15");
    $("#event-block15").val("");
})

$("#save-delete16").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour16");
    $("#event-block16").val("");
})

$("#save-delete17").on("click", "i.fa-trash", function(){
    localStorage.removeItem("hour17");
    $("#event-block17").val("");
})


//Save Event Function
$("#save-delete8").on("click", "i.fa-save", function(){
    var event8 = $("#eventblock8").val().trim();
    localStorage.setItem("hour8", JSON.stringify(event8));
})
$("#save-delete9").on("click", "i.fa-save", function(){
    var event9 = $("#event-block9").val().trim();
    localStorage.setItem("hour9", JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function(){
    var event10 = $("#event-block10").val().trim();
    localStorage.setItem("hour10", JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function(){
    var event11 = $("#event-block11").val().trim();
    localStorage.setItem("hour11", JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function(){
    var event12 = $("#event-block12").val().trim();
    localStorage.setItem("hour12", JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function(){
    var event13 = $("#event-block13").val().trim();
    localStorage.setItem("hour13", JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function(){
    var event14 = $("#event-block14").val().trim();
    localStorage.setItem("hour14", JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function(){
    var event15 = $("#event-block15").val().trim();
    localStorage.setItem("hour15", JSON.stringify(event15));
})
$("#save-delete16").on("click", "i.fa-save", function(){
    var event16 = $("#event-block16").val().trim();
    localStorage.setItem("hour16", JSON.stringify(event16));
})
setInterval(function(){
    $(".event-group.events").each(function(index,el){
        checkTime(el);
    });
}, (1000*60));
checkTime(); 