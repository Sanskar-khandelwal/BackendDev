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