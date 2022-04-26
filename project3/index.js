let apiUrl = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM";
let apiUrl2 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrWkjv5YUWlknl4i/recJ4SeyquPLtgw0r";
let apiUrl3 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrWkjv5YUWlknl4i/recc6Md7EcWFnUaY5";
let apiUrl4 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrWkjv5YUWlknl4i/recvoonhgAeyLL0pc";

//variable that stories all the data fromt eh API

let apiData;
let apiData2;
let apiData3;
let apiData4;

let allCounter = 0;
let all = new Array();

//this is where you 'call' your data

//async means asynchronous, the function will always be executed separately, 
//regardless of where it is placed in executable code
//the getData function gets ALL the data from the Airtable API
async function getData(url){
	let response = await fetch(url);
	let jsonData = await response.json();
	return jsonData;
}

//the await in this main function is paired with the async of the getData function
//but await can only exist in async functions
async function main(){
	apiData = await getData(apiUrl);
	apiData2 = await getData(apiUrl2);
	apiData3 = await getData(apiUrl3);
	apiData4 = await getData(apiUrl4);

	console.log(apiData);
	console.log(apiData2);
	console.log(apiData3);
	console.log(apiData4);

	let counter = 0;

	for (let i = 0; i < apiData.records.length; i++){
		let name = apiData.records[i].fields.bookName;

		all[allCounter] = apiData.records[i];
		allCounter++;
	}

	for (let i = 0; i < apiData2.records.length; i++){
		let name = apiData2.records[i].fields.bookName;

		all[allCounter] = apiData2.records[i];
		allCounter++;
	}

	for (let i = 0; i < apiData3.records.length; i++){
		let name = apiData3.records[i].fields.bookName;
        
        all[allCounter] = apiData3.records[i];
		allCounter++;
	}

	for (let i = 0; i < apiData4.records.length; i++){
		let name = apiData4.records[i].fields.bookName;
       
      	all[allCounter] = apiData4.records[i];
		allCounter++;
	}

	// console.log(all);

	display();
	
}


main();

let click = false;
let clickCounter = 1;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
	clickCounter++;

	if (clickCounter%2 == 0){
		click = true;
	}
	else{
		click = false;
	}

	if (click == true){
		document.getElementById("container").style.filter = "grayscale(1)";
	}
	else{
		document.getElementById("container").style.filter = "grayscale(0)";
	}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  	click = false;
  	clickCounter++;
  	document.getElementById("container").style.filter = "grayscale(0)";
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function sortByCountry(){
	
}


function display(){
	let genCount = 0;
	for(let i = 0; i < all.length; i++){

		let template = document.getElementsByClassName("book")[0];
		let container = document.getElementById("allBooks");

		let templateCopy = template.cloneNode(true);
		console.log(templateCopy);
		genCount++;
		console.log(genCount);
		container.appendChild(templateCopy);

		templateCopy.querySelector(".bookCover").src = all[i].fields.bookCover[0].url;
		templateCopy.querySelector(".title").append(all[i].fields.bookName);
		templateCopy.querySelector(".type").append(all[i].fields.type);
		templateCopy.querySelector(".author").append(all[i].fields.author);
		
		if (all[i].fields.yearPublished === 0){
			templateCopy.querySelector(".yearPublished").append("Unknown");
		}
		else{
			templateCopy.querySelector(".yearPublished").append(all[i].fields.yearPublished);
		}

		templateCopy.querySelector(".country").append(all[i].fields.country);

		if (all[i].fields.yearBanned === 0){
			templateCopy.querySelector(".yearBanned").append("Unknown");
		}
		else{
			templateCopy.querySelector(".yearBanned").append(all[i].fields.yearBanned);
		}

		if (all[i].fields.yearUnbanned === 0){
			templateCopy.querySelector(".yearUnbanned").append("Unknown");
		}
		else{
			templateCopy.querySelector(".yearUnbanned").append(all[i].fields.yearUnbanned);
		}

		templateCopy.querySelector(".reason").append(all[i].fields.reason);
	}
}