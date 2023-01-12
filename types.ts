interface User {
    id: number
    firstName: string
    lastName: string
    role: string
    fn: Function
    married: boolean
}

function updateUser(id: number, update: Omit<User, 'id' | 'fn' | 'married'>): object {
    const newData = { id, ...update }
    return newData
}

const update: Omit<User, 'id' | 'fn' | 'married'> = { firstName: 'Elon', lastName: 'Musk', role: 'Chief' }

// console.log(updateUser(1, update))

// const t = "Bonjour le monde"

const arr: number[] = [5, 2, 7, 8, 9, 3, 4, 1]

// arr.sort((a, b) => a - b)
console.log(arr)

function ascending(arr: Array<number>) {
    return arr.sort((a, b): any => a - b)
}
function descending(arr: Array<number>) {
    return arr.sort((a, b) => b - a)
}

// console.log(ascending(arr))
// console.log(descending(arr))

const oneHundred: bigint = 100n

console.log(oneHundred * 2n)