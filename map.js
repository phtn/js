Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

// console.log(
//   ["naomi", "quincy", "camperbot"].myMap((item) => item.toUpperCase())
// );

const movies = [
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const arr = [];
const mapWatchList = movies.map((item) => {
  arr.push({ title: item.Title, rating: item.imdbRating });
});
const filteredList = arr.filter((item) => item.rating <= 8.0);

// console.log(arr);

Array.prototype.myFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const intArray = [1, 2, 3, 4];

// console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));

let nestedArrays = [[1, 2, 3], [4, 5], [6]];

let flat = nestedArrays.reduce((newArr, elem) => newArr.concat(elem));
// console.log(flat);

function every(array, test) {
  for (let i of array) {
    if (!array.length || !test(array[i])) {
      return false;
    }
    return true;
  }
  return true;
}

// console.log(every([], (n) => n < 10));

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  const filtered = collection.filter((item) => {
    return keys.every(
      (key) => item.hasOwnProperty(key) && item[key] === source[key]
    );
    // for (let index in keys) {
    //   if (item.hasOwnProperty(keys[index])) {
    //     // return true;
    //     return item[keys[index]] === source[keys[index]];
    //   }
    //   return false;
    // }
  });

  return filtered;
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
