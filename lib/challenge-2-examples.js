// TYPE: Array Iteration Methods Review Examples
//
// PROMPT:
// Review dotting into objects, modifying objects
//
// TODO:
// create functions that satisfy the tests

const teams = [
  { name: 'patriots', value: 5500 },
  { name: 'eagles', value: 15000 },
  { name: 'saints', value: 2500 },
  { name: 'giants', value: 1500 },
  { name: 'cardinals', value: 4000 },
  { name: 'rams', value: 3500 },
  { name: 'cowboys', value: 0 }
]

const mapping = inputArray => {
  // TODO: return an array of just the team's names

  // replace the object with the object's value of the key "name"
  return inputArray.map(team => team.name)
}

const sorting = inputArray => {
  // TODO: return an array of teams sorted by their value
  return inputArray.sort((a, b) => a.value - b.value)
}

const filtering = inputArray => {
  // TODO: return an array of teams with values over 3000
  return inputArray.filter(team => team.value >= 3000)
}

const reducing = inputArray => {
  // TODO: return the team with the greatest value
  return inputArray.reduce((acc, next) => acc.value <= next.value ? next : acc, { value: 0 })
}

// in the terminal run
// node lib/challenge-2-examples.js
// from this folder's root to see console logs

console.log(mapping(teams))
console.log(sorting(teams))
console.log(filtering(teams))
console.log(reducing(teams))
