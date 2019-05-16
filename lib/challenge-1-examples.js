// TYPE: Objects Review Examples
//
// PROMPT:
// Review dotting into objects, modifying objects
//
// TODO:
// create functions that satisfy the tests

const teams = {
  patriots: 1500,
  eagles: 1000,
  titans: 2000,
  rams: 2000
}

const total = inputObject => {
  // TODO: return the total value of teams
  // one line answer: return Object.values(teams).reduce((a, b) => a + b)

  // converts Object to an array of values
  // values is [1500, 1000, 2000, 2000]
  const values = Object.values(inputObject)

  // start totalValue counter at 0
  let totalValue = 0

  // iterate through array of values
  for (let i = 0; i < values.length; i++) {
    // add values at index i to the totalValue
    totalValue += values[i]
  }

  return totalValue
}

const findValue = (inputObject, team) => {
  // TODO: return the value of the a team
  return inputObject[team]
}

const increaseValue = (inputObject, team) => {
  // TODO: increase the cost for an team by 500 and return the object
  inputObject[team] += 500
  return inputObject
}

const replaceValue = (inputObject, team, value) => {
  // TODO: replace team's value with new value
  inputObject[team] += value
  return inputObject
}

module.exports = {
  teams,
  total,
  findValue,
  increaseValue,
  replaceValue
}
