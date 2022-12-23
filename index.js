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
