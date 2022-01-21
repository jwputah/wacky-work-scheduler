// jquery function for current date and time with moment
$(document).ready(function () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');

    $("#currentDay").append(currentTime);

    // jquery event listener
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // saved data from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    console.log(localStorage);

    // function for current time to display colors in css for past, present and future
    function timeBlocks () {
        var currentHour = moment().hours();
        console.log("current time",  currentHour);
        $(".time-block").each(function () {
            var time = parseInt($(this).attr("id").split("hour")[1]);
            console.log(time);

            if (time < currentHour) {
                $(this).addClass("past")
            
            } else if (time === currentHour) {
                $(this).addClass("present")

            } else {
                $(this).addClass("future")
            }
        })
    }
    timeBlocks()
})



