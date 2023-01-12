function print(payload) {
  console.log(payload);
}

const array = [23, 65, 98, 5, 13];
arr2 = [1, 1, 2, 5, 2];

// print(array.map((item) => item));

// custom map function
Array.prototype.myMap = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  //   this.forEach((item) => {
  //     const elem = callback(item);
  //     newArr.push(elem);
  //   });
  return newArr;
};

// print(arr2.myMap((element, index, array) => array[index + 1] || array[0]));

const packOfGifts = ["book", "doll", "ball", "guitar", "football"];
const reindeers = ["dasher", "dancer", "skippy", "mortem", "prancer"];

function distributeGifts(packOfGifts, reindeers) {
  let totalGiftWeight = 0;
  let totalReideerLimit = 0;

  packOfGifts.forEach((item) => {
    let gift = 0;
    for (i in item) {
      gift += 1;
    }
    totalGiftWeight += gift;
  });
  reindeers.forEach((reindeer) => {
    let capacity = 0;
    for (i in reindeer) {
      capacity += 1;
    }
    totalReideerLimit += capacity;
  });
  let load = (totalReideerLimit * 2) / totalGiftWeight;
  if (load < 1) {
    return 0;
  } else {
    return Math.floor(load);
  }
}
print(distributeGifts(packOfGifts, reindeers));
