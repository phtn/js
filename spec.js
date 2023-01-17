const sumOfPrimes = require('./strings')

test('sum of primes', () => {
    expect(sumOfPrimes(10)).toBe(17)
})