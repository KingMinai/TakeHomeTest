const strCalc = require('./stringCalc');
let testNum = 0;
function Test(ans, test) {
  testNum++;
  if (test === ans) {
    console.log('\x1b[32m', '✔ [---SUCCESS---]');
  } else {
    console.log('\x1b[31m', '❌ [---FAILED---]');
    console.log('Test:', testNum);
    console.log('Expected: ', ans);
    console.log('Got:  ', test);
  }
}

Test('4', strCalc.calculate('4.0'));
Test('3.2', strCalc.calculate('3.2'));
Test('120', strCalc.calculate('factorial 5'));
Test('3181', strCalc.calculate('prime 3186'));
Test('8', strCalc.calculate('fibonacci 12'));
Test('25', strCalc.calculate('+ 12.5 12.5'));
Test('-6.3', strCalc.calculate('- 43.7 50'));
Test('-72', strCalc.calculate('* 6 -12'));
Test('2', strCalc.calculate('/ 20 10'));
Test('19', strCalc.calculate('+ 2 3 4 10'));
Test('4054836680294400', strCalc.calculate('/ (factorial (* 2 2 5)) 600'));
Test('3.22', strCalc.calculate('\t 3.22             '));
