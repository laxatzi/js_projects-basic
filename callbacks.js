// WHAT ARE CALLBACKS?

// Callbacks (call me back later) is just the name of a convention for using js functions 
//There is not a special thing in javascript language syntactically, it is just a convention

// The work asynchronous - async means "take some time" "something will take place not now but in the future"
// asynchronous functions use callbacks to take some time to produce their results

// usually this happens when we are doing I/O e.g talking to databases, downloading things, reading files etc

// example of a normal function
var result = multiplyTwoNumbs(5,10);
console.log(result); // 50

// However, async functions use callbacks and dont return anything right away

var photo = downloadPhoto('http//site.com/cat.gif');
console.log(photo); // undefined

// in the above senario the gif makes long time to download and pause your programme while downloading
// instead, you store the code that should run AFTER the download is completed into a callback function.

var photo = downloadPhoto('http//site.com/cat.gif', handlePhoto);
function handlePhoto(error, photo){
   if(error) console.log('Download not possible', error)
   else console.log('Download finished', photo)
}
console.log('Download started');


// NOTE:
// explaining order of executions as the code runs

// #1 the handlePhoto function is declared
// #2 the downloadPhoto function is invoked and at the same time handlePhoto function is passed as a callback
// #3 "Download started" is printed out to the log

// Things to bare in mind: 
// The handlePhoto is not invoked yet, it is just created and passed as a callback into the downloadPhoto function. It wont run UNTIL downloadPhoto finishes its task. (in that case downloading a photo)

// So it is important to understand that the order things happening does not read top-to-bottom. 
// It is task completion that defines the order of execution

