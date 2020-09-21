
class Trip {
  constructor(currentUserId, id, dataForRequestedTrip, allTripData, destinationData) {
    this.currentUserId = currentUserId
    this.id = this.findID()
    this.trip.travelers = this.dataForTrip.travelers
    this.trip.status = 'pending'
    this.date = this.dataForTrip.startDate
    this.tripData = allTripData
    this.dataForTrip = dataForRequestedTrip;
    this.destinationData = destinationData;
    this.estimatedCost = this.calculateEstimatedCost()
  }
  calculateEstimatedCost() {
    let correctDestination = this.destinationData.find(destination => {
      this.destinationData.name === destination.destination
    })
    this.trip.destinationID = correctDestination.id
    this.estimatedCost += correctDestination.destination.estimatedLodgingCostPerDay 
    this.estimatedCost += (dataForTrip.travelers * correctDestination.destination.estimatedFlightCostPerPerson)
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
  // getTrip() {
  //   this.trip.id = this.id
  //   this.trip.userID = this.currentUserId
  //   this.trip.travelers = this.dataForTrip.travelers
  //   this.trip.status = 'pending'
  //   this.date = this.dataForTrip.startDate
  //   //this.duration = start date - end date

  // }
}