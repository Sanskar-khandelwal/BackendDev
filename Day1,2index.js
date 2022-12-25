// Global - No window !!
/*In node there is no window coz there is not any browser */
// but still there exist some global variable there are many few among them are

//1) __dirname - path to current directory
//2) __filename - filename
// 3) require - function to use modules (Common js)
//4) module - into about current moudle (file)
//5) process - info about env where the program is begin executed

// Modules
// question: all my code need to be in one file the answer is yes but no we can split it using modules.
// Node uses commonJs under the hood, so every file we create is by default a module.

// when you import a module you will invoke it
// for example require(./kuchbhi) // this will run the function written in "kuchbhi" file.
require("./kuchbhi");

// some very smart people created some very usefull module that we can use in our code, It means that node has it's own module that we can use while creating a server.
//1) OS = OS MODULE PROVIDES MANY METHOD TO INTERACT WITH THE OS OR THE SERVER
//2) PATH
//3) FS
//4) HTTP

//////////////////OS
const os = require("os");

const user = os.userInfo(); //info about the current user
console.log(`The system uptime is ${os.uptime()} seconds`); // this is the uptime of the computer

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);

///////////////////PATH

const path = require("path");
console.log(path.sep); //seperator as /

const filePath = path.join("/content/", "subfolder", "text.txt");
console.log(filePath);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

//////////////////////////////FS Module
// fs module has two versions

// Using readfile sync
const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// Using writeFilesync
// if the file is not there node will create one but if the will is there node will overwrite all the content present there and change it in the new file
//if you don't want to overwrite: they write another object {flag: 'a'} at last
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flags: "a" } // this will append the content
);

// Using async functions
const { readFile, writeFile } = require("fs");

readFile("./content/result-sync.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  writeFile(
    "./content/result-async.txt",
    `Here is the result: ${first}, and ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
// if we don't provide the utf-8 encoding in between then it will give the buffer



