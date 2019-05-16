'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-2.js')

const { programmers, mapping, sorting, filtering, reducing } = challenge

const mapped = ['noobmaster69', 'thor', 'captain america', 'iron man', 'spiderman']

const sorted = [
  { alias: 'thor', languages: ['JavaScript', 'Ruby'], experience: 10, isInBoston: false },
  { alias: 'noobmaster69', languages: ['JavaScript'], experience: 5, isInBoston: true },
  { alias: 'spiderman', languages: ['Java', 'C', 'C++', 'SQL'], experience: 5, isInBoston: true },
  { alias: 'iron man', languages: ['Ruby', 'VBA'], experience: 3, isInBoston: false },
  { alias: 'captain america', languages: ['Python', 'Go', 'Java'], experience: 1, isInBoston: false }
]

const filtered = [
  { alias: 'noobmaster69', languages: ['JavaScript'], experience: 5, isInBoston: true },
  { alias: 'spiderman', languages: ['Java', 'C', 'C++', 'SQL'], experience: 5, isInBoston: true }
]

const reduced = [ 'C', 'C++', 'Go', 'Java', 'JavaScript', 'Python', 'Ruby', 'SQL', 'VBA' ]

describe('challenge-2: map each programmer to alias', function () {
  it('returns the correct value', function () {
    expect(mapping(programmers)).to.equal(mapped)
  })
})

describe('challenge-2: sort programmers by experience', function () {
  it('returns the correct value', function () {
    expect(sorting(programmers)).to.equal(sorted)
  })
})

describe('challenge-2: filter out those outside of Boston', function () {
  it('returns the correct value', function () {
    expect(filtering(programmers)).to.equal(filtered)
  })
})

describe('challenge-2: reduce programmer to their languages', function () {
  it('returns the correct value', function () {
    expect(reducing(programmers)).to.equal(reduced)
  })
})
