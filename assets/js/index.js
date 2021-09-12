var todaysDate = (moment().format("dddd, MMMM D"));

var currentTime = moment().format("LT");

$("#currentDay").text(todaysDate + " ~ " + currentTime);

$(".saveBtn").on("click", function() {
  var time = $(this).siblings(".hour").text();
  var task = $(this).siblings(".description").val();
  localStorage.setItem(time, task);
})

function colorCode() {
  var hour = moment().hour();

  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("h")[1]);

    if (timeBlock < hour) {
      $(this).addClass("past");
    }
    else if (timeBlock === hour) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("future");
    }
  })
}

function displayTask () {
  $(".hour").each(function() {
    var dHour = $(this).text();
    var dTask = localStorage.getItem(dHour);

    if (dTask != null) {
      $(this).siblings(".description").val(dTask);
    }
  });
}

colorCode();

displayTask();




