class Trips {
  constructor(id,travelData,destinationData) {
    this.currentUserId = id;
    this.travelData = travelData
    this.destinationData = destinationData
    this.currentUserTrips;
  }
  findUserTrips() {
    this.currentUserTrips = this.travelData.filter(trip =>{
      return trip.userID === this.currentUserId
    })
  }
    formatTripsAndDestination() {
      this.currentUserTrips.forEach(trip => { 
       correctDestination =  destinationData.find(destination =>{
        return destination.id === trip.destinationID
       })
       trip.destination = correctDestination
      })
    }
  }

}