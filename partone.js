// #1 Data Structure and Algorithms
function frequencyOfEachWord(str) {
  let strArray = str.split(" ");
  //if string is "" then return undefined
  if (strArray.length === 0) return undefined;

  //we are going to put the key value pairs that present multiple times in the string
  let dictionary = {};
  //loop into the array of strings
  for (let i = 0; i < strArray.length; i++) {
    //assign a word element for each iteration to the word variable
    let word = strArray[i];
    //if the word is not present in the dictionary object, then add the word as key and a value of 1
    //else if the word is present in the dictionary object then add a one to already existing key's value
    if (dictionary[word] === undefined) {
      dictionary[word] = 1;
    } else {
      dictionary[word] += 1;
    }
  }
  //return the object with key values showing the word and its frequencies time in the string
  return dictionary
}