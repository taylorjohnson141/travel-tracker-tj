import moment from 'moment'

class Trips {
  constructor(id, travelData, destinationData) {
    this.currentUserId = id;
    this.travelData = travelData
    this.destinationData = destinationData
    this.currentUserTrips;
  }
  findUserTrips() {
    this.currentUserTrips = this.travelData.filter(trip =>{
      return trip.userID === this.currentUserId
    })
    this.formatTripsAndDestination()
    this.findStatus()
  }
  formatTripsAndDestination() {
    this.currentUserTrips.forEach(trip => { 
      let correctDestination =  this.destinationData.find(destination =>{
        return destination.id === trip.destinationID
      })
      trip.destination = correctDestination
    })
  }
  findStatus () {
    let today = new Date()
    this.currentUserTrips.forEach(trip =>{
      let array = trip.date.split('/')
      let correctDate = array.join('-')
      let tripDay = moment(correctDate);
      console.log('day', tripDay)
      if (trip.status === 'pending' &&  !(tripDay < today)) {
        trip.status = 'pending'
      } else if (tripDay > today ) {
        trip.status = 'future'
      } else if (tripDay.add(trip.duration, 'days').toDate() < today) {
        trip.status = 'past'
      } else {
        trip.status = 'current trip'
      }
    })

  }
  // findCost(trip) {
  //   trip.
  // }
}
export default Trips

