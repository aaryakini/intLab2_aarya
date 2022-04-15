let apiUrl1 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM";
let apiUrl2 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrpWbwOHfb1EDEMY/recJ4SeyquPLtgw0r";
let apiUrl3 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrAY1UPzEt6IJCCG/recJ4SeyquPLtgw0r";
let apiUrl4 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itrZVcwyWq05dS9iX/recJ4SeyquPLtgw0r";

let apiData=[];

let countries=[];

const selectMenu = document.getElementById("country");
console.log(selectMenu);

const bookContainer = document.getElementById("allBooks");

async function fetchData(url){
	let response = await fetch(url);
	let jsonData = await response.json();
	return jsonData;
}

async function getData(){
	let data1 = await fetchData(apiUrl1);
	console.log(data1);
	let data2 = await fetchData(apiUrl2);
	console.log(data2);
	let data3 = await fetchData(apiUrl3);
	console.log(data3);
	let data4 = await fetchData(apiUrl4);
	console.log(data4);

	for (let i = 0; i < data1.records.length; i++){
		let record1 = data1.records[i].fields;
		apiData.push(record1);
	}

	for (let i = 0; i < data2.records.length; i++){
		let record2 = data2.records[i].fields;
		apiData.push(record2);
	}

	for (let i = 0; i < data3.records.length; i++){
		let record3 = data3.records[i].fields;
		apiData.push(record3);
	}

	for (let i = 0; i < data4.records.length; i++){
		let record4 = data4.records[i].fields;
		apiData.push(record4);
	}

	console.log(apiData);

	makeDropdown();

	

	
}

getData();

console.log()

function makeDropdown(){
	for (let i=0; i < apiData.length; i++){
		let country = apiData[i].country;
		countries.push(country);
	}

	countries = removeDuplicates(countries);
	console.log(countries);

	countries.forEach(element => {
		let newOption = document.createElement("option");
		newOption.className = "option";
		newOption.innerHTML = element;
		newOption.value = element;
		selectMenu.appendChild(newOption);
	})
}

function removeDuplicates(arr){
	return arr.filter((item, index) => arr.indexOf(item) === index);
}

function countrySearch(){
	console.log(selectMenu.value);

	//filter
	const results = apiData.filter((entry) => {
		const countryMatch = entry.country.includes(selectMenu.value);
		return countryMatch;
	})

	renderSortedImages(countryMatch);
}

function renderSortedImages(countryMatch, bookContainer){
	bookContainer.innerHTML="";

	data.forEach((entry, index) => {
		const name = document.createElement("p");
		name.src = entry.bookName;

		bookContainer.appendChild(name);
	})

}

















