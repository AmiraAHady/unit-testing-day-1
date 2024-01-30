
//problem 1
//input: "hamada" ===> output: HAMADA. expect
//input: 12 ===> output: "".   expect
//jasmin
const capitalizeText = (input) => {
  if (typeof input !== "string"){
    throw new TypeError("parameter should be string")
  };
  return input.toUpperCase();
};




//test that the function takes a string  it will return a string 

//test that the function takes a string and return it after capitalize it

//test if the function takes number it will throw type error says parameter should be string




//problem 2
//mocha,chai
// input number 3 ==> output should be [0,1,2]
//4-->[0,1,2,3]
//7=>[0,1,2,--->6]
const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};



//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//try to use different styles (expect , should , assert)
//make pending test case
