// Packages
var swearjar = require('swearjar-extended');
var fs = require('file-system');


var text = fs.readFileSync('demo_man.srt');

console.log("Detailed Profanity");
console.log("------------------------------");
console.log(swearjar.detailedProfane(text.toString()));
console.log("------------------------------");

console.log("Scorecard");
console.log("------------------------------");
console.log(swearjar.scorecard(text.toString()));
console.log("------------------------------");