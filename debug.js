const print = (payload) => console.log(payload) 
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        let row = [];
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
//   console.log(matrix);


function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line

    for (let i in arr){
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }

    // arr.map(item => {
    //     if (item.indexOf(elem) == -1) {
    //         newArr.push(item)
    //     }
    // })

    // Only change code above this line
    return newArr;
  }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));