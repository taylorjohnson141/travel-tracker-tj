class Traveler {
  constructor(userData, UserTripData) {
    this.id = userData.id;
    this.name = userData.name;
    this.type = userData.travelerType;
    this.trips = UserTripData
  }
  calculateAmountSpentInAYear() {
    let tripsInAYear = this.findTripsThisYear()
    return tripsInAYear.reduce ((acc, curr) =>{
      acc += curr.destination.estimatedLodgingCostPerDay
      acc += (curr.travelers * curr.destination.estimatedFlightCostPerPerson)
      return acc
    }, 0)
  }
  findTripsThisYear (year = '2020') {
    return this.trips.filter(trip => {
      return  trip.date.includes(year)
    })
  }
}
export default Traveler