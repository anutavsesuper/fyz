var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 28); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var start = new Date('2016-02-12 15:12:12');
  var end   = new Date('2016-02-22 18:16:42');
  /* This gives us an integer value of the difference in seconds */
  var diff  = Math.round((end.getTime() - start.getTime()) / 1000);

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);

  } else {

    var date1="2016-02-12 15:12:12";
    var date2="2016-02-22 18:16:42";
    var d1= date1.split(" ");
    d1=d1[1];
    var d2= date2.split(" ");
    d2=d2[1];
    d1=d1.split(":");
    d2=d2.split(":");
    var hours=d2[0]-d1[0];
    var mins=d2[1]-d1[1];
    var sec=d2[2]-d1[2];
    var countdown=hours+":"+mins+":"+sec;
    console.log(countdown);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}
