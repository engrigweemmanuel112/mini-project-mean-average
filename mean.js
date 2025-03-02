//EXAMPLE 1:
//sample data from the experiment
let samples = [4.2, 5.1, 3.8, 4.7, 5.3]; //toxin samples stored in array

//function to calculatee  the mean of an array
function calculateMean(samples) {
  var sum = 0; //shows where the counting will start or onitialise 

  for (i = 0; i < samples.length; i++) {
    sum += samples[i]; // adding the sum of the array: sum = sum + samples
  }
  return sum/samples.length; // divide the sum by the no of the array/samples
}

//let cameanlcute the mean
var mean = calculateMean(samples);
var roundedMean  = Math.round(mean * 100)/100;
var resultMessage   =  "Mean:" + roundedMean;
console.log(resultMessage); // ressult = 4.62





//EXAMPLE 2:
//create an array and store the values in a variable

let scores = [3.0, 4.6, 5.9, 4.8, 7.9, 9.8, 3.2];


//define the named function which takes the array as parameter
function checkMean(scores){
  var total = 0; // we initialise the sumtotal
  for(i = 0; i < scores.length; i++){
    total += scores[i]; // or total = total + scores
  }
  return total/scores.length;
}
var mean = checkMean(scores);
var roundedMean = Math.round(mean *100)/100;
var resultMessage = "Mean:" + roundedMean;
console.log(resultMessage); // outputs Mean:5.6
