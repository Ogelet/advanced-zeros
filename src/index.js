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
        break
      };
    }
  };
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
  return Math.floor(count);
}