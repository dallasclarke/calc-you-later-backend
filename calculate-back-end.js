/******************
 * YOUR CODE HERE *
 ******************/

 function calculate (strOne, strTwo, strThree) {
   if (strThree === "+" ) {
     return parseInt(strOne) + parseInt(strTwo);
   } else if (strThree === "-") {
     return parseInt(strOne) - parseInt(strTwo);
   } else if (strThree === "x") {
     return parseInt(strOne) * parseInt(strTwo);
   } else if (strThree === "/") {
     return parseInt(strOne) / parseInt(strTwo);
   } else if (strThree === "%") {
     return parseInt(strOne) % parseInt(strTwo)
   } else if (strThree === "plus") {
     return parseInt(strOne) + parseInt(strTwo);
   } else if (strThree === "minus") {
     return parseInt(strOne) - parseInt(strTwo);
   } else if (strThree === "X" || strThree === "times") {
     return parseInt(strOne) * parseInt(strTwo)
   } else if (strThree === "modulus" || strThree === "mod") {
     return parseInt(strOne) % parseInt(strTwo);
   } else if (strThree === "added to") {
     return parseInt(strOne) + parseInt(strTwo);
   } else if (strThree === "subtracted from") {
     return parseInt(strOne) - parseInt(strTwo);
   } else if (strThree === "multiplied by") {
     return parseInt(strOne) * parseInt(strTwo);
   } else if (strThree === "divided by") {
     return parseInt(strOne) / parseInt(strTwo);
   } else {
     return "Sorry, that's not a mathematical operation!"
   }
   }

 

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;