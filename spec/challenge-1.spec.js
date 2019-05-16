'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-1.js')

const { total, shoes, increaseCost, replaceCost } = challenge

const house = {
  kitchen: 1500,
  bathroom: 1000,
  livingroom: 2000,
  bedroom: {
    bed: 500,
    lights: 100,
    drawer: {
      clothes: 100,
      shoes: 200
    }
  }
}

describe('challenge-1: total cost of house', function () {
  it('returns the correct value', function () {
    expect(total()).to.equal(5500)
  })
})

describe('challenge-1: cost of shoes', function () {
  it('returns the correct value', function () {
    expect(shoes()).to.equal(200)
  })
})

describe('challenge-1: increaseCost of kitchen', function () {
  it('returns the correct value', function () {
    expect(increaseCost(house, 'kitchen')).to.equal(2000)
  })
})

describe('challenge-1: replaceCost of bathroom', function () {
  it('returns the correct value', function () {
    expect(replaceCost(house, 'kitchen', 10000)).to.equal(10000)
  })
})
