let apiUrl = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM";

//variable that stories all the data fromt eh API

let apiData;

//this is where you 'call' your data

//async means asynchronous, the function will always be executed separately, 
//regardless of where it is placed in executable code
//the getData function gets ALL the data from the Airtable API
async function getData(url){
	let response = await fetch(url);
	let jsonData = await response.json();
	return jsonData;
}

async function main(){
	apiData = await getData(apiUrl);
	console.log(apiData);

	for (let i = 0; i < apiData.records.length; i++){
		let name = apiData.records[i].fields.bookName;
        console.log(name);
        
        let heading = document.createElement("h1");
        heading.innerHTML = name;
        document.body.appendChild(heading);
	}
}

main();