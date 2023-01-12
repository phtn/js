function randomRange(min, max){
    console.log(Math.floor(Math.random() * (max-min + 1)) + min)
}

// randomRange(4,9)

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray.sort((a,b) => b-a);
    }
  }
//   console.log(countup(5));

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0){
      return [startNum]
    } else {
      const arr = rangeOfNumbers(startNum, endNum-1)
      arr.push(endNum)
      return arr
    }
    // return [];
  };
  console.log(rangeOfNumbers(4,9))