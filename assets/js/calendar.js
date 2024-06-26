// script.js



// letiables to store event input fields and reminder list
let eventDateInput =
	document.getElementById("eventDate");
let eventTitleInput =
	document.getElementById("eventTitle");
let eventDescriptionInput =
	document.getElementById("eventDescription");
let reminderList =
	document.getElementById("reminderList");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Function to add events
function addEvent() {
	let date = eventDateInput.value;
	let title = eventTitleInput.value;
	let description = eventDescriptionInput.value;

	if (date && title) {
		// Create a unique event ID
		let eventId = eventIdCounter++;

		events.push(
			{
				id: eventId, date: date,
				title: title,
				description: description
			}
		);
		showCalendar2(currentMonth, currentYear);
		eventDateInput.value = "";
		eventTitleInput.value = "";
		eventDescriptionInput.value = "";
		displayReminders();
	}
}

// Function to delete an event by ID
function deleteEvent(eventId) {
	// Find the index of the event with the given ID
	let eventIndex =
		events.findIndex((event) =>
			event.id === eventId);

	if (eventIndex !== -1) {
		// Remove the event from the events array
		events.splice(eventIndex, 1);
		showCalendar2(currentMonth, currentYear);
		displayReminders();
	}
}

// Function to display reminders
function displayReminders() {
	reminderList.innerHTML = "";
	events = events.sort((a, b) => (a.date > b.date) ? 1 : -1)
	for (let i = 0; i < events.length; i++) {
		let event = events[i];
		let eventDate = new Date(event.date);
		if (eventDate.getMonth() === currentMonth &&
			eventDate.getFullYear() === currentYear) {
			let listItem = document.createElement("li");
			listItem.innerHTML =
				`<strong>${event.title}</strong> - 
			${event.description} on <strong>
			${eventDate.toISOString().split('T')[0]}</strong>`;

			// Add a delete button for each reminder item
			let deleteButton =
				document.createElement("button");
			deleteButton.className = "delete-event";
			deleteButton.textContent = "Delete";
			deleteButton.onclick = function () {
				deleteEvent(event.id);
			};

			listItem.appendChild(deleteButton);
			reminderList.appendChild(listItem);
		}
	}
}

// Function to generate a range of 
// years for the year select input
function generate_year_range(start, end) {
	let years = "";
	for (let year = start; year <= end; year++) {
		years += "<option value='" +
			year + "'>" + year + "</option>";
	}
	return years;
}

// Initialize date-related letiables
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");
let calendar2 = document.getElementById("calendar2");

let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let days = [
	"Sun", "Mon", "Tue", "Wed",
	"Thu", "Fri", "Sat"];

$dataHead = "<tr>";
for (dhead in days) {
	$dataHead += "<th data-days='" +
		days[dhead] + "'>" +
		days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;
document.getElementById("thead-month2").innerHTML = $dataHead;

monthAndYear =
	document.getElementById("monthAndYear");
showCalendar2(currentMonth, currentYear);

// Function to navigate to the next month
function next() {
	currentYear = currentMonth === 11 ?
		currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar2(currentMonth, currentYear);
}

// Function to navigate to the previous month
function previous() {
	currentYear = currentMonth === 0 ?
		currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ?
		11 : currentMonth - 1;
	showCalendar2(currentMonth, currentYear);
}

// Function to jump to a specific month and year
function jump() {
	currentYear = parseInt(selectYear.value);
	currentMonth = parseInt(selectMonth.value);
	showCalendar2(currentMonth, currentYear);
}

// Function to display the calendar
function showCalendar(str_id,month, year) {
	let firstDay = new Date(year, month, 1).getDay();
	tbl = document.getElementById(str_id);
	tbl.innerHTML = "";
	monthAndYear.innerHTML = months[month] + " " + year;
	selectYear.value = year;
	selectMonth.value = month;

	let date = 1;
	for (let i = 0; i < 6; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				cell = document.createElement("td");
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth(month, year)) {
				break;
			} else {
				cell = document.createElement("td");
				cell.setAttribute("data-date", date);
				cell.setAttribute("data-month", month + 1);
				cell.setAttribute("data-year", year);
				cell.setAttribute("data-month_name", months[month]);
				cell.className = "date-picker";
				cell.innerHTML = "<span>" + date + "</span";

				if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					cell.className = "date-picker selected";
				}

				// Check if there are events on this date
				if (hasEventOnDate(date, month, year)) {
					cell.classList.add("event-marker");
					cell.appendChild(
						createEventTooltip(date, month, year)
				);
				}

				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}

	displayReminders();
}

// Function to create an event tooltip
function createEventTooltip(date, month, year) {
	let tooltip = document.createElement("div");
	tooltip.className = "event-tooltip";
	l_entries=[]
	
	l_evs = getEventsOnDate(date, month, year,'exx')
	if(l_evs.length){
		l_entries.push('<b><FONT COLOR="black">X:</FONT></b><br>')
		i=0;
		l_evs.forEach((element) => {
			l_entries.push(`<a target="_blank" href="https://jj-hub.github.io/mike/stk/${element.title}.stk">${element.description}</a><b>(<FONT COLOR="crimson">${element.title}/${element.sector}</FONT>)</b>`)
			i++;
			if( 0 === (i%2)){l_entries.push('<br>')}
		});
	}
	l_entries.push('<br>')
	l_evs = getEventsOnDate(date, month, year,'rec')
	if(l_evs.length){
		l_entries.push('<b><FONT COLOR="black">REC:</FONT></b><br>')
		i=0;
		l_evs.forEach((element) => {
			l_entries.push(`<a target="_blank" href="https://jj-hub.github.io/mike/stk/${element.title}.stk">${element.description}</a><b>(<FONT COLOR="dodgerblue">${element.title}/${element.sector}</FONT>)</b>`)
			i++;
			if( 0 === (i%2)){l_entries.push('<br>')}
		});
	}
	l_entries.push('<br>')
	l_evs = getEventsOnDate(date, month, year,'pay')
	if(l_evs.length){
		l_entries.push('<b><FONT COLOR="black">PAY:</FONT></b><br>')
		i=0;
		l_evs.forEach((element) => {
			l_entries.push(`<a target="_blank" href="https://jj-hub.github.io/mike/stk/${element.title}.stk">${element.description}</a><b>(<FONT COLOR="darkgreen">${element.title}/${element.sector}</FONT>)</b>`)
			i++;
			if( 0 === (i%2)){l_entries.push('<br>')}
		});
	}
	
	let eventElement = document.createElement("p");
		eventElement.innerHTML = l_entries.join('');
	tooltip.appendChild(eventElement);
	return tooltip;
}

// Function to get events on a specific date
function getEventsOnDate(date, month, year, str_type) {
	return events.filter(function (event) {
		let eventDate = new Date(event.date);
		return (
			eventDate.getDate() === date &&
			eventDate.getMonth() === month &&
			eventDate.getFullYear() === year &&
			event.description === str_type
		);
	});
}

// Function to check if there are events on a specific date
function hasEventOnDate(date, month, year) {
	num_sum = getEventsOnDate(date, month, year,'exx').length + getEventsOnDate(date, month, year,'rec').length + getEventsOnDate(date, month, year,'pay').length
	return num_sum > 0;
}

// Function to get the number of days in a month
function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Call the showCalendar function initially to display the calendar
function showCalendar2(month, year) {
	showCalendar("calendar-body2",month+1, year);
	showCalendar("calendar-body",month, year);
}

showCalendar2(currentMonth, currentYear);
