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

}