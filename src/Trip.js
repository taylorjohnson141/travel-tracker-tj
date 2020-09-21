
class Trip {
  constructor(currentUserId,id dataForTrip, destinationData) {
    this.currentUserId = currentUserId
    this.id;
    this.dataForTrip = dataForTrip;
    this.destinationData = destinationData;
    this.estimatedCost;
  }
  calculateEstimatedCost(){
    currectDestination = destinationData.find(destination =>{
      this.destinationData.name === destination.destination
    })
    this.estimatedCost += curr.destination.estimatedLodgingCostPerDay
    this.estimatedCost += (curr.travelers * curr.destination.estimatedFlightCostPerPerson)
    return this.estimatedCost
  }
   
}