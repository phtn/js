// * Regular Expressions
const str = "The quick brown Fox jumped over the lazy dog at the back of the river"
const print = (payload) => console.log(payload)
// * flags: i -> ignorecase & g -> global
const regex0 = /the/ig
// * test() is a function of regex which accepts str
print(regex0.test(str))

// * Range character set [from-to]
const words = "cat bat mat hat pat fat rat"
const regex1 = /[a-e]at/ig
// * match() is a function of str that accepts regex
print(words.match(regex1))
// * We can also use numbers in range [0-9] with &9 inclusive
const regex2 = /[a-e0-9]at/ig

// * Matching negated character set using caret (^) after the bracket
const regex3 = /[^at ]/ig
print(words.match(regex3))

let quoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
let alphabetRegexV2 = /\w/ig; // Change this line
let result0 = quoteSample.match(alphabetRegexV2).length;
print(result0)

// * Alphanumeric with some rules
const username = "tesla69"
userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result1 = userCheck.test(username);
print(result1)

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|^\s+$/g;// Change this line
let result2 = hello.replaceAll(wsRegex, "");
print(result2.length)