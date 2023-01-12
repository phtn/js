// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const arr = [{ x: 1 }, { y: 2 }];

function lookUpProfile(name, prop) {

  for (let key in contacts) {
    if (contacts[key].firstName == name) {
        for (let j in contacts[key]){
            // if (contacts[key])
            if(contacts[key].hasOwnProperty(prop)){
                return contacts[key][prop]
            } else {
                return "No such property"
            }
        }
    }
  }
  return "No such contact"
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "number"));

