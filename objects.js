////    Object.values
obj = {name: "Adam", age: 23, likes: ["vr", "code"]}

values = Object.values(obj.likes)

result = {
    objectType: typeof(values),
    values,
    firstValue: values[0],
    firstValueType: typeof(values[0]),
    lastValue: values[values.length-1],
    length: values.length
}
console.log(result)

////    constants
const π = Math.PI
const τ = π * 2
debugger(τ * π)

