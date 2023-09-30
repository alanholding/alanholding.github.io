function startTime() {
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	var today = new Date();
	var year = today.getFullYear();
	var month = monthNames[today.getMonth()];
	var date = today.getDate();
	var suffix = getOrdinal(date);
	var day = dayNames[today.getDay()];
	var hour = today.getHours();
	var hourForDisplay = getHourForDisplay(hour);
	var ampm = (hour > 11 ? "pm" : "am");
	var minute = fixZeroes(today.getMinutes());
	document.getElementById('fyd-day').innerHTML = "<small>It is</small><br /><strong>" + day.toUpperCase() + "</strong>";
	document.getElementById('fyd-date').innerHTML = "<small>" + date + "<sup>" + suffix + "</sup> " + month + " " + year + "</small>";
	document.getElementById('fyd-time').innerHTML = hourForDisplay + ":" + minute + " " + ampm;
	setTimeout(startTime, 1000);
}

function fixZeroes(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

function getOrdinal(i) {
	if (i > 3 && i < 21) return "th";
	switch (i % 10) {
	  case 1:
	    return "st";
	  case 2:
	    return "nd";
	  case 3:
	    return "rd";
	  default:
	    return "th";
	}
}

function getHourForDisplay(i) {
	var h = i % 12;
	// changes the hour to show 12 instead of 0, as 0:23pm looks weird
	return (h == 0 ? 12 : h);
}
