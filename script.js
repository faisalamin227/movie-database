var http;

function movie(){
    http = new XMLHttpRequest();
	console.log('state', http.readystate);
	console.log('status', http.status);
	http.onreadystatechange = function() {
		if(http.readystate == 4 && http.status == 200){
			document.getElementById('container').innerHTML =
			this.responseText;
		}
	};
	http.open("GET", "data.json", true);
	http.send();
}