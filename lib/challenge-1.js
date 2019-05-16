// TYPE: Objects Review

// methods: map, filter, sort, reduce

// PROMPT: review dotting into objects

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

const total = () => {
  // return the total cost of the house
}

const shoes = () => {
  // return the cost of the shoes
}

const increaseCost = item => {
  // increase the cost for an item by 500
}

const replaceCost = (item, cost) => {
  // replace item's cost with new cost
}

module.exports = {
  house,
  total,
  shoes,
  increaseCost,
  replaceCost
}
