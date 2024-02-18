// i want to create data structure

function addDataToObject(noun, adj) {
  obj[noun] = adj;
}

const obj = {};

addDataToObject("fire", ["hot", "pain"]);
addDataToObject("rock", ["hard", "black"]);
addDataToObject("man", ["handsome", "emotional"]);
addDataToObject("women", ["beautiful", "discipline"]);
addDataToObject("computer", ["technical", "good"]);

function printObj() {
  console.log(obj);
}

printObj();

console.log(`lets see water in there...`);

console.log(`water is available ${"water" in obj}`);

console.log(`deleting my least favorite key which is: 
 ${Object.keys(obj)[1]} ${delete obj[Object.keys(obj)[1]]}`);

printObj();

// dan mama keys tika array ekakata aragena 2nd key eka delete
// karanna ona

const arr = Object.keys(obj);

console.log(arr);

// hari dan 2nd eka delete karamu
//  e kiyanne 1st index eka

// get 1st index

const indexDelete = arr[1];

delete obj[indexDelete];

printObj();

console.log(Object.values(obj));

// edit karamu

obj.fire = ["test", "test"];

printObj();
