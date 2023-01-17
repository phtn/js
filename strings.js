function print(payload) {
  console.log(payload);
}

function spinalCase(str) {
  const capsRegex = /(?=[A-Z])/;
  const specialRegex = /[-_\s]{1,}/i;
  const dashed = str.split(capsRegex).join("-").toLowerCase();
  const normalized = dashed.split(specialRegex).join("-");
  return normalized;
}
// print(spinalCase("test-Able_app-OfApps"));

function pigLatin(str) {
  // * if str begins with consonant or consonant cluster
  // * move it to the end and add 'ay'
  // * if str begins with a vowel just add 'way' 
  // * to the end of the word 
  let count = 0
  const chars = str.split("");
  const consonants = [];
  const isConsonant = /[^aeiou]/;
  let shift;

  if (!chars[0].match(isConsonant)) {
    chars.push('w', 'a', 'y')
    return chars.join("")
  }

  for (let item of chars) {
    const result = typeof item === 'string' ? item.match(isConsonant) : null
    if (result) {
      consonants.push(item)
      console.log(consonants)
      count++
    } else {
      shift = chars.shift(count)
      // chars.push(consonants)
    }
  }

  if (count === chars.length) {
    chars.push('a', 'y')
    // console.log(chars)
  } else {
    for (let item of consonants) {
      chars.push(item)
    }
    chars.push('a', 'y')
  }

  return chars.join("");
}
// print(pigLatin("paragraph"));

function newPigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// console.log(newPigLatin("paragraphs"))

function searchAndReplace(str, before, after) {
  let normalizedBefore = before.toLowerCase()
  let newAfter = after
  if (normalizedBefore !== before) {
    return str.replace(before, after[0].toUpperCase().concat(after.substring(1, after.length)))
  }
  return str.replace(before, newAfter.toLowerCase())
}
// console.log(searchAndReplace('Tesla + spacex and Boring Company up', 'up', 'Down'))

function dnaPairing(str) {
  const pairs = {
    a: ['A', 'T'],
    t: ['T', 'A'],
    c: ['C', 'G'],
    g: ['G', 'C']
  }
  let result = []
  const normalized = str.toLowerCase()

  for (let i of normalized) {
    result.push(pairs[i])
  }
  return result
}
// console.log(dnaPairing('ATCGA'))

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const splitAlphabet = alphabet.split("")
  const start = splitAlphabet.findIndex(value => value == str[0])
  const end = splitAlphabet.findIndex(value => value == str[str.length - 1])
  const slicedLetters = alphabet.slice(start, end)
  const splitSlicedLetters = slicedLetters.split("")
  for (let i of splitSlicedLetters) {
    if (!str.split("").includes(i)) {
      return i
    }
  }
  return undefined;
}
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

function uniteUnique(arr) {
  const args = Array.from(arguments)
  let compare = []
  let final = args[0].filter((elem, idx) => args[0].indexOf(elem) == idx)

  for (let i in args) {
    compare.push(args[args.length - i])
  }

  compare.reverse().pop()

  for (let j in compare) {
    for (let k of compare[j]) {
      if (!args[0].includes(k) && !final.includes(k)) {
        final.push(k)
      }
    }
  }
  // console.log(compare)
  return final;
}

// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))

function convertHTML(str) {
  const entities = ['&', '<', '>', "'", '"']
  const html = { "&": "amp", "<": "lt", ">": "gt", "'": "apos", '"': "quot" }
  let final = str
  for (let i of str) {
    if (entities.includes(i)) {
      final = final.replace(i, "&" + html[i] + ";")
    }
  }
  return final

}
// console.log(convertHTML("Elon's < Kimbal"))

function sumOddFibs(num) {
  function fib(num) {
    let arr = [1, 1]
    for (let i = 1; i < num; i++) {
      if (i == 0 || null || undefined) {
        return undefined
      } else if (num == 1) {
        return 1
      } else if (num == 2) {
        return arr
      } else {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
      }
    }
    const sumOfOdds = arr.reduce((acc, elem) => {
      if (elem % 2 != 0 && elem <= num) {
        return acc + elem
      }
      return acc
    }, 0)

    return sumOfOdds
  }

  return fib(num);
}

// console.log(sumOddFibs(1000))

function sumPrimes(num) {

  let arr = []

  function isPrime(n) {
    if (n > 1) {
      for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false
      }
      return true
    }
  }

  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) arr.push(j)
  }
  const total = arr.reduce((acc, cur) => acc + cur, 0)

  return total
}

// console.log(sumPrimes(1))

module.exports = sumPrimes