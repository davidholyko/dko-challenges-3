// TYPE: Array Iteration Methods Review
//
// PROMPT:
// Review array iteration methods map, sort, filter, reduce
// programmers is an array of Objects
// each object has the keys: person, language, experience, isInBoston
//
// TODO:
// Create functions that satisfy the tests

const programmers = [
  { alias: 'noobmaster69', languages: ['JavaScript'], experience: 5, isInBoston: true },
  { alias: 'thor', languages: ['JavaScript', 'Ruby'], experience: 10, isInBoston: false },
  { alias: 'iron man', languages: ['Ruby', 'VBA'], experience: 3, isInBoston: false },
  { alias: 'captain america', languages: ['Python', 'Go', 'Java'], experience: 1, isInBoston: false },
  { alias: 'spiderman', languages: ['Java', 'C', 'C++', 'SQL'], experience: 5, isInBoston: true }
]

const mapping = objects => {
  // return an array of just the aliases of the programmers
}

const sorting = objects => {
  // return an array of the programmers sorted
  // by most experience first and alias alphabetically second
}

const filtering = objects => {
  // return an array of the programmers who are in Boston
}

const reducing = objects => {
  // return an array with the keys of all languages
  // sorted alphabetically
  // note: this function is significantly harder than the rest
  const output = Object.keys(objects.reduce((acc, next) => {
    next.languages.forEach(language => {
      acc[language] = true
    })
    return acc
  }, {})).sort()

  console.log(output)
  return output
}

module.exports = {
  programmers,
  mapping,
  sorting,
  filtering,
  reducing
}
