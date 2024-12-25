// function to convert Numbers to Accounting Format

function numToAccounting(num) {
  let sign = null;
  let mod = 0;
  let res = "";
  const arr = [];

  sign = Math.sign(num);

  if(sign === -1) num = -num;

  while(true) {
    mod = num % 1000;
    num = parseInt(num / 1000);
    if(mod > 100) {
      arr.push(mod);
    } else {
      if(mod !== 0) arr.push(mod);
      break;
    }
  }

  while(true) {
    if(arr.length === 1) {
      res += arr.pop();
      break;
    } else {
      res += arr.pop() + ",";
    }
  }

  if(sign === -1) res = "(" + res + ")";

  return res;
}


console.log(numToAccounting(12345678));
console.log(numToAccounting(-12345678));


