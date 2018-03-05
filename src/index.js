module.exports = function getZerosCount(number, base) {
  let factor = -1;
  let factors = [];
  let checkNumber = base;
  let exp = 1;
  while(checkNumber%2 === 0){
    checkNumber = checkNumber/2;
  };
  for(let i = 3; i <= checkNumber; i = i + 2){
    if (checkNumber % i === 0){
      factors.push(i);
    }
  };
  const lengthFactors = factors.length;
  if(lengthFactors === 1){
    factor = checkNumber;
  };
  if(lengthFactors === 0){
    factor = 2;
  };
  if(lengthFactors > 1){
      for(let i = lengthFactors - 1; i > 0; i--){
      let checkFactor = 0;
      for(let j = i - 1; j > -1; j--){
        if(factors[i] % factors[j] === 0){
          checkFactor++;
        }
      };
      if (checkFactor === 0){
        factor = factors[i];
        break;
      } else {
        for (let x = 0; x < lengthFactors; x++){
          for (let n = 2; n < 5; n++ )
          if (Math.pow(factors[x],n) === factors[i] && exp===1){
            factor = factors[x];
            exp = n;            
          }
        }
      }
    }
  };
  if(lengthFactors > 1 && factor === -1 ){
    factor = factors[0];
  }
 let count = 0;
 let x = factor;
 while(number/x >= 1){
   count = count + Math.floor(number / x);
   x = factor * x;
 }
 count = Math.floor(count/exp);
  return count;
}