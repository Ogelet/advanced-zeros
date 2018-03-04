module.exports = function getZerosCount(number, base) {
  let factor = -1;
  let factors = [];
  let checkNumber = base;
  while(checkNumber%2 === 0){
    checkNumber = checkNumber/2;
  };
  for(let i = 3; i <= checkNumber; i = i + 2){
    if (checkNumber % i === 0){
      factors.push(i);
    }
  };
  console.log('factors', factors);
  const lengthFactors = factors.length;
  if(lengthFactors === 1){
    factor = checkNumber;
  };
  if(lengthFactors === 0){
    factor = 2;
  };
  if(lengthFactors > 1){
    console.log('Yes', factors);
      for(let i = lengthFactors - 1; i > 0; i--){
      let checkFactor = 0;
      for(let j = i - 1; j > -1; j--){
        if(factors[i] % factors[j] === 0){
          checkFactor++;
        }
      };
      if (checkFactor === 0){
        factor = factors[i];
        break
      };
    }
  };
  if(lengthFactors > 1 && factor === -1 ){
    factor = factors[0];
  }
/*
  let count = number / factor;
  for(let i = factor; i <= number; i = i + factor){
    if ((i / factor) % factor === 0){
      count++;
      let a = i / factor;
      while((a/factor) % factor === 0){
        count++;
        a = a / factor;
      };
    };
  };
  */
 console.log('factor', factor);
 let count = 0;
 let x = factor;
 while(number/x >= 1){
   count = count + Math.floor(number / x);
   x = factor * x;
 }
 console.log('count', count);
  return count;
}