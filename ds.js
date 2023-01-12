function largestOfFour(arr) {
  let bigFour = [];
  for (let i in arr) {
    let largest = -100;
    for (let j in arr[i]) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    bigFour.push(largest);
  }
  return bigFour;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

const str = "Elon";
const target = "on";
// console.log(str.substring(str.length - target.length, str.length))

// * Repeat a string
function repeatString(s, n) {
  if (n > 0) {
    let stringArr = [];
    for (let i = 0; i < n; i++) {
      stringArr.push(s);
    }
    return stringArr.join("");
  }
  return "";
}
// console.log(repeatString("*", 3));

function truncateString(str, num) {
  return str.substring(0, num) + "...";
}

//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

const chief = "Elon Musk";
let lowerCased = chief.toLowerCase();
let words = lowerCased.split(" ");
let capsArr = [];
for (let i in words) {
  let word = words[i].replace(
    words[i].substring(0, 1),
    words[i].substring(0, 1).toUpperCase()
  );
  capsArr.push(word);
}
// console.log(capsArr.join(" "))

// * Splice

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  // console.log(arr2)
  console.log(arr2);
  arr2.slice(n, 3);
  console.log(arr2);
  return newArr;
}

//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  let newArr = arr.slice();
  let filtered = newArr.filter(Boolean);
  return filtered;
}

// bouncer([7, "ate", "", null, undefined, false, NaN, 9]);

function getIndexToIns(arr, num) {
  let newArr = arr.slice();
  newArr.sort((a, b) => a - b);
  if (arr.length) {
    let index = newArr.findIndex((item) => num <= item);
    if (index == -1) {
      return newArr.length;
    }
    return index;
  }
  return 0;
}

//   console.log(getIndexToIns([2, 5, 10], 15));

function wrapping(gifts) {
  function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }
  let newArr = gifts.slice();
  for (let i in newArr) {
    const wrapperLength = newArr[i].length + 2;
    let wrapper = "";
    for (let j = 0; j < wrapperLength * 2; j++) {
      wrapper += "*";
    }
    newArr[i] = insert(wrapper, wrapperLength, `\n*${newArr[i]}*\n`);
  }
  return newArr;
}
// console.log(wrapping(["cat", "game", "socks"]));

function countHours(year, holidays) {
  let totalHours = 0
  let month = "";
  let holidayArr = []
  for (let i in holidays) {
    let day = holidays[i].substring(holidays[i].length - 2, holidays[i].length);
    if (holidays[i].substring(0, 1) == 0) {
      month = holidays[i].substring(1, 2);
    } else {
      month = holidays[i].substring(0, 2);
    }
    let date = new Date(`${year}-${month}-${day}`)
    holidayArr.push(date.getDay());
  }
  for (let j in holidayArr){
    if (holidayArr[j] >= 1 && holidayArr[j] < 6){
        totalHours += 2
    }
  }
  return totalHours
}
// console.log(countHours(2022, ["01/06", "04/01", "12/25"]));

const polls = [
    {
        data: {
            url_a: "url a",
            url_b: "url b"
        }
        
    }
]
let pollObj = {}
polls.map(poll => Object.assign(pollObj, {data: poll.data}))
// polls.forEach(poll => console.log(poll.data))
console.log(pollObj.data.url_a)
