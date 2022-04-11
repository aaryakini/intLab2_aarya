let apiUrl = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM";
let apiUrl2 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itr7ThTJiavVnebrn/recJ4SeyquPLtgw0r";
let apiUrl3 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itr7ThTJiavVnebrn/recc6Md7EcWFnUaY5";
let apiUrl4 = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM&offset=itr7ThTJiavVnebrn/recvoonhgAeyLL0pc";

//variable that stories all the data fromt eh API

let apiData;

//this is where you 'call' your data

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
        // console.log(counter + name);
        counter++;

        let heading = document.createElement("h1");
        heading.innerHTML = name;
        document.body.appendChild(heading);
	}

	for (let i = 0; i < apiData2.records.length; i++){
		let name = apiData2.records[i].fields.bookName;
        // console.log(counter + name);
        counter++;

        let heading = document.createElement("h1");
        heading.innerHTML = name;
        document.body.appendChild(heading);
	}

	for (let i = 0; i < apiData3.records.length; i++){
		let name = apiData.records[i].fields.bookName;
        // console.log(counter + name);
        counter++;

        let heading = document.createElement("h1");
        heading.innerHTML = name;
        document.body.appendChild(heading);
	}

	for (let i = 0; i < apiData4.records.length; i++){
		let name = apiData.records[i].fields.bookName;
        // console.log(counter + name);
        counter++;

        let heading = document.createElement("h1");
        heading.innerHTML = name;
        document.body.appendChild(heading);
	}
}

main();