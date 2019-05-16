// TYPE: Objects Review
//
// PROMPT: review dotting into objects

const home = {
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
  // TODO: return the total cost of the house
}

const shoes = () => {
  // TODO: return the cost of the shoes
}

const increaseCost = (house, room) => {
  // TODO: increase the cost for an item by 500
}

const replaceCost = (house, room, cost) => {
  // TODO: replace item's cost with new cost
}

module.exports = {
  home,
  total,
  shoes,
  increaseCost,
  replaceCost
}
