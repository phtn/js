// * types and such and closure plus currying


// * Closures 
const outer = () => {
	let counter = 0
	function inner() {
		counter++
		console.log(counter)
	}
	return inner
}
const fn = outer()
// fn() // * -> 1
// fn() // * -> 2

// * In JavaScript, when we return a function from another function, 
// * we are effectively returning a combination of the function definition
// * along with the function's scope. This would let the function definition
// * have an associated persistent memory which could hold on to live data between 
// * executions. That combination of the function and its scope chain is what is called
// a closure in JavaScript.  

// * <---------------------------------------------------------------------------------->

// * Prototype and 'this' keyword
function Person(this: any, first: string, last: string) {
	this.firstName = first
	this.lastName = last
}

const person1 = new (Person as any)('Elon', 'Musk')
const person2 = new (Person as any)('Kimbal', 'Musk')

Person.prototype.getFullName = function () {
	return this.firstName + ' ' + this.lastName
}
Person.prototype.getSkills = function () {
	return this.skills = "raygun"
}

function Superhero(this: any, first: string, last: string) {
	Person.call(this, first, last)
	this.isSuper = true
}

Superhero.prototype = Object.create(Person.prototype)

const ChiefTwit = new (Superhero as any)('Elon', 'Musk')


// console.log(ChiefTwit.getFullName())
// console.log(ChiefTwit.getSkills())
// console.log(ChiefTwit.isSuper)
// console.log(ChiefTwit.firstName)

// * <---------------------------------------------------------------------------------->
// * Currying or Function Currying
// -> definition <-
// * a process in functional programming in which we transform a function
// * with multiple arguments into a sequence of nesting functions that take 
// * one argument at a time.

function sum(a: number, b: number, c: number) {
	return a + b + c
}
// console.log(sum(2, 3, 5)) -> 10

function curry(fn: Function) {
	return function (a: number) {
		return function (b: number) {
			return function (c: number) {
				return fn(a, b, c)
			}
		}
	}
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5) // * -> 10

// * <------------------------------------------------>

