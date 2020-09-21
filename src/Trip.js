
class Trip {
  constructor(currentUserId, id, dataForTrip, tripData, destinationData) {
    this.currentUserId = currentUserId
    this.id= this.findID()
    this.tripData = tripData
    this.dataForTrip = dataForTrip;
    this.destinationData = destinationData;
    this.estimatedCost = this.calculateEstimatedCost()
  }
  calculateEstimatedCost() {
    let currectDestination = this.destinationData.find(destination => {
      this.destinationData.name === destination.destination
    })
    this.estimatedCost += curr.destination.estimatedLodgingCostPerDay 
    this.estimatedCost += (dataForTrip.travelers * curr.destination.estimatedFlightCostPerPerson)
    return this.estimatedCost
  }
  findID () {
    return this.tripData.reduce((acc, trip) => {
      if (acc === trip.id) {
        acc += this.findUniqueValue(trip.id,acc)
      } else {
        return acc
      }
    }, 0)
  }
  findUniqueValue(trip, value) {
    value += 1
    if (trip === value) {
      return this.findUniqueValue(trip, value)
    } else {
      return value
    }
  }
}