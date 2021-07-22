const add = (numAry) => {
  numAry = numAry.map(Number);
  let total = numAry[0];
  for (let i = 0; i < numAry.length - 1; i++) {
    total += numAry[i + 1];
  }
  return total;
};

const sub = (numAry) => {
  let total = numAry[0];
  for (let i = 0; i < numAry.length - 1; i++) {
    total -= numAry[i + 1];
  }
  return total;
};

const mul = (numAry) => {
  let total = numAry[0];
  for (let i = 0; i < numAry.length - 1; i++) {
    total = total * numAry[i + 1];
  }
  return total;
};

const div = (numAry) => {
  let total = numAry[0];
  for (let i = 0; i < numAry.length - 1; i++) {
    total = total / numAry[i + 1];
  }
  return total;
};

const fac = (num) => {
  let total = 1;
  for (let i = 1; i <= num[0]; i++) {
    total *= i;
  }
  return total;
};

const prime = (num) => {
  let ans;
  for (let i = 1; i < num; i++) {
    let count = 0;
    ans = num - i;
    for (let j = 0; j <= ans; j++) {
      if (ans % j === 0) {
        count++;
        if (count > 2) break;
      }
    }
    if (count == 2) return ans;
  }
};

const fib = (num) => {
  if (num <= 1) return num;

  let pfib = 0;
  let cfib = 1;

  for (let i = 0; i <= num; i++) {
    let nfib = pfib + cfib;

    if (nfib > num) return cfib;

    pfib = cfib;
    cfib = nfib;
  }
};

const getDeepestSum = (string) => {
  if (string.includes('(')) {
    for (let i = 0; i < string.length; i++)
      if (string[i] == ')')
        for (let j = i; j != 0; j--)
          if (string[j] == '(')
            return [string.substring(0, j), string.substring(j + 1, i), string.substring(i + 1)];
  } else return string.includes(' ') ? ['', string] : ['', string];
};

const getOperator = (string) => {
  return string.split(' ')[0];
};

const stringToNumAry = (string) => {
  const numStr = string;
  const numAry = numStr.split(' ');
  numAry.shift();

  return numAry;
};

exports.calculate = (string) => {
  const numStr = getDeepestSum(string);
  const op = getOperator(numStr[1]);
  const numAry = stringToNumAry(numStr[1]);
  let sum = 0;

  if (op == '+') sum = add(numAry);
  else if (op == '-') sum = sub(numAry);
  else if (op == '*') sum = mul(numAry);
  else if (op == '/') sum = div(numAry);
  else if (op == 'factorial') sum = fac(numAry);
  else if (op == 'prime') sum = prime(numAry);
  else if (op == 'fibonacci') sum = fib(numAry);
  else {
    const roundNum = Math.round(Number(numStr[1]) * 100) / 100;
    return roundNum.toString();
  }

  const newSum = numStr[0] + sum + (numStr[2] ? numStr[2] : '');
  return this.calculate(newSum);
};
