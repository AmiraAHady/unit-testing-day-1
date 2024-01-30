
export function stringReverse (input) {
    let result = "";
    input = input.toString();
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return result;
}
//[1,2,2,3,4,4]
//[1,2,3,4]
export function removeDuplicate (array) {
    let exists = {};
    let result = [];
    let element = null;

    for (let i = 0; i < array.length; i++) {
        element = array[i];
        if (!exists[element]) {
            result.push(element);
            exists[element] = true;
        }
    }
    return result;
}


// n = 0 => 1 
// n = 1 => 1 
// n = 3 => 6
 function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}
// exports.factorial = factorial

// number = 0 => 0 
// number = 1 or 2 => 1 
// number = 6 => 8
//fibonacci series: [ 0, 1,  1,  2,  3,5, 8, 13, ...]

export function fibonacci (number) {
    if (!isFinite(number) || number < 0) return null;
    if (number == 0) return 0;
    if (number <= 2) return 1;

    let lastElements = [0, 1];
    let result = 0;
    for (let i = 0; i < number - 1; i++) {
        result = lastElements[0] + lastElements[1];
        lastElements[0] = lastElements[1];
        lastElements[1] = result;
    }
    return result;
}


// export function sum  (a, b)  {
//    return a + b
// }


export function sum (a, b) {
    if(typeof a =="string" || typeof b=="string"){
        throw new Error("parameters should be a number")
    }
    else return a + b
}






