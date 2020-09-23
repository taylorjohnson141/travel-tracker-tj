
class Trip {
  constructor(currentUserId, dataForRequestedTrip, allTripData, destinationData) {
    this.currentUserId = currentUserId
    this.tripData = allTripData
    this.id = this.findID()
    this.destinationData = destinationData;
    this.destination = dataForRequestedTrip.destination
    this.DestinationID = this.findDestinationID()
    this.dataForTrip = dataForRequestedTrip;
    this.travelers = dataForRequestedTrip.travelers
    this.status = 'pending'
    this.duration = dataForRequestedTrip.duration
    this.date = dataForRequestedTrip.startDate
    this.estimatedCost = this.calculateEstimatedCost()
  }
  calculateEstimatedCost() {
    let acc = 0
    let correctDestination = this.destinationData.find(destination => {
      return this.dataForTrip.destination === destination.destination
    })
    acc += correctDestination.estimatedLodgingCostPerDay * 4
    acc += (this.dataForTrip.travelers * correctDestination.estimatedFlightCostPerPerson)
    return acc
  }
  findID () {
    return this.tripData.reduce((acc, trip) => {
      if (acc === trip.id) {
        acc = this.findUniqueValue(trip.id, acc)
      } else {
        return acc
      }
      return acc
    }, 1)
  }
  findUniqueValue(trip, value) {
    value += 1
    if (trip === value) {
      return this.findUniqueValue(trip, value)
    } else {
      return value
    }
  }
  findDestinationID() {
    let correctDestination = this.destinationData.find(destination =>{
     
      return  destination.destination === this.destination

    })
    return correctDestination.id
  }
 
}

export default Trip