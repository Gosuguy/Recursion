
// easy mode:
// var parseJSON = JSON.parse;

// hard mode:
var parseJSON = function(json) { // note: have to account for white space
  // loop thru string 'json'
    // check if character is digit
      // continue to see how many following characters are digits, if non digit character shows up, return error
    // check if character is 'quotation'
      // return what is inside quotes as string
    // check if next four characters spell 'true'
      // return true
    // check if next five characters spell 'false'
      // return false
    // check if next nine characters spell 'undefined'
      // return undefined
    // check if next four characters spell 'null' or 'NaN'
      // return null
    // check if character is '['
      // find the ']' character and assign the middle to a variable
      // set result to empty array
      // create 'inside brackets' variable, default to false
      // divide everything in middle by ',', but not inside [] or {}
      // loop thru values of new array
        // call parseJSON on the inside. parseJSON(array[0]) and push that into result
    // check if character is '{'
      // find '}' character and assign middle to a variable
      // set result to empty object
      // divide everything in middle by ',' but not inside [] or {}, this will create key value pairs;
      // loop through every key value pair 
        // insert key into result object and call parseJSON on value
      // return result
      
  return result
};
