
//  MINIMUM

function min(num1,num2) {
    if (num1 > num2) return num2;
    return num1;
  }

//test
writeTitle("MINIMUM");
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(500, -500));
// → -500


//  RECURSION

function isEven(num) {
  if (num < 0) return isEven(num * -1) //if negative, multiply num by -1 and start again (not necessary but it is a recursion exercise so why not)
  if (num === 0) return true; //if 0 must be even
  if (num === 1) return false; //if 1 must be odd
  return isEven(num-2) //minus num by two, and start again. repeat until num equals 0 or 1!
}

//test
writeTitle("RECURSION");
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-1000));
// → true


//  BEAN COUNTING

function countChar(str,char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++
  }
  return count;
}

//test
writeTitle("BEAN COUNTING")
console.log(countChar("BBC", "B"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



function writeTitle(title)
{
    console.log("\n\n****\n"+title+"\n****\n\n")
}
