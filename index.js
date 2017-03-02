var xhr, wundergroundURL, key, zip, features, data;
key = "f5bedb4d1404b7d6";
features = "/forecast/geolookup/conditions/";
zip = "60637";
wundergroundURL = "http://api.wunderground.com/api/" + key + features + "q/" + zip + ".json";

$(() => {
	$.ajax({
		url: wundergroundURL,
		dataType: 'jsonp',
		data: data,
		success: function(data) {
			onload(data);
		}
	});
});

function onload(res) {
	var container, divider;
	container = document.getElementsByClassName('container')[0];
	divider = document.createElement('div').setAttribute('class', 'divider');
	res.forecast.txt_forecast.forecastday.forEach((day) => {
		var dayDiv = document.createElement('div');
		dayDiv.setAttribute('id', day.title);
		dayDiv.setAttribute('class', 'day');
		dayDiv.innerHTML = day.fcttext;
		container.append(dayDiv);
		container.append(document.createElement('br'));
	});
}