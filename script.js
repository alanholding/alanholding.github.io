function startTime() {
	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];
	let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let today = new Date();
	let year = today.getFullYear();
	let month = monthNames[today.getMonth()];
	let date = today.getDate();
	let suffix = getOrdinal(date);
	let day = dayNames[today.getDay()];
	let hour = today.getHours();
	let hourTwelve = hour % 12
	let ampm = getAMPMPhrase(hour);
	let minute = fixZeroes(today.getMinutes());
	document.getElementById('fyd-day').innerHTML = "It is<br /><strong>" + day.toUpperCase() + "<br /><i>" + ampm + "</i></strong>";
	document.getElementById('fyd-date').innerHTML = "<small>" + date + suffix + " " + month + " " + year + "</small>";
	// document.getElementById('fyd-time').innerHTML = hour + ":" + minute;
	setTimeout(startTime, 60000);
}

function fixZeroes(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
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

function getAMPMPhrase(i) {
	if ((i >= 0 && i < 5) || (i >= 22 && i < 24)) {return "night time"};
	if (i >= 5 && i < 8) {return "early morning"};
	if (i >= 8 && i < 12) {return "morning"};
	if (i >= 12 && i < 13) {return "noon"};
	if (i >= 13 && i < 17) {return "afternoon"};
	if (i >= 17 && i < 20) {return "evening"};
	if (i >= 20 && i < 22) {return "late evening"};
}
