function count () {
	var today = new Date();

	var month = today.getMonth()+1;
	var day = today.getDate();
	var hours = today.getHours();
	if(hours < 10) hours = "0" +hours;

	var minute = today.getMinutes();
	if(minute < 10) minute = "0" + minute;

	var second = today.getSeconds();
	if(second < 10) second = "0" + second;

	document.getElementById("js-month").innerHTML = month;
	document.getElementById("js-day").innerHTML = day;
	document.getElementById("js-hours").innerHTML = hours;
	document.getElementById("js-minutes").innerHTML = minute;
	document.getElementById("js-seconds").innerHTML = second;

	setTimeout("count()", 1000);
}

count();