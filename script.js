document.querySelector(".submit").addEventListener("click", hourClock);

function hourClock() {
  var month = document.querySelector(".month").value;
  var monthName = "";
  if (month === "0") {
    monthName = "Jan";
  } else if (month === "1") {
    monthName = "Feb";
  } else if (month === "2") {
    monthName = "Mar";
  } else if (month === "3") {
    monthName = "Apr";
  } else if (month === "4") {
    monthName = "May";
  } else if (month === "5") {
    monthName = "Jun";
  } else if (month === "6") {
    monthName = "Jul";
  } else if (month === "7") {
    monthName = "Aug";
  } else if (month === "8") {
    monthName = "Sep";
  } else if (month === "9") {
    monthName = "Oct";
  } else if (month === "10") {
    monthName = "Nov";
  } else if (month === "10") {
    monthName = "Dec";
  }
  console.log(monthName);
  var date = document.querySelector(".date").value;
  var year = document.querySelector(".year").value;
  var countDownDate = new Date(`${monthName} ${date}, ${year}`).getTime();
  console.log(countDownDate);
  //   updating every second
  var x = setInterval(function () {
    // getting today's date
    var now = new Date().getTime();

    // finding time between count and now date
    var trueDate = countDownDate - now;

    // calculations
    var days = Math.floor(trueDate / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (trueDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((trueDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((trueDate % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (trueDate < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  });
}
