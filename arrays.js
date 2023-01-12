////    Arrrays
array = [], n = 0
while(n < 10){
    array.push(Math.random() * 128)
    n++
}
array.sort((a,b) => a-b)

result = {
    sortedArray: array,
    length: array.length
}

let fifty = Array.from({length: 50}).map((_,i,a) => a.length - i)


console.log(fifty)
// console.log(result)
