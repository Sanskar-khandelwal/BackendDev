//To continue in the node course I have to learn first about async and await and promises I am using Jonas course to learn about it.

const request = fetch("https://restcountries.com/v3.1/all");
// It will return a promise
console.log(request);

const getCountryData = function () {
  fetch("https://restcountries.com/v3.1/name/peru")
    .then(function (response) {
      return response.json();
    })
    .then((data) => console.log(data));
};

getCountryData();



//Error handling in promises
//use catch at end to handle promise

const fs = require('fs').promises;

// const util = require('util')
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
 
// const getText = function(path){
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//     })
//   })
// }

const start = async function(){
  try{
  const first = await readFile('./content/first.txt', 'utf8');
  const second = await readFile('./content/second.txt', 'utf8');
  console.log(first, second)
  }
  catch(err){
    console.log(err)
  }
}


