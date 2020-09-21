import Traveler from "./Traveler";

class FetchRequests {
  constructor(id) {
    this.currentUserId = id
    this.currentUserData;
    this.tripData;
    this.destinationData;
  }
  userFetch() {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${this.currentUserId}`)
      .then(travelerResponse =>{
        return travelerResponse.json()
      })
      .then(travelerData =>{
        return travelerData
      })
  }
  tripFetch() {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`)
      .then(tripResponse =>{
        return tripResponse.json()
      })
      .then(tripData =>{
        return tripData
      })
  }
  destinationFetch() {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
      .then(destinationResponse =>{
        destinationResponse.json()
      })
      .then(destinationData =>{
        return destinationData
      })
  }
  getData() {
    return Promise.all([
      this.userFetch(),
      this.tripFetch(),
      this.destinationFetch()
    ]).then(data =>{
      this.currentUserData = data[0]
      this.tripData = data[1]
      this.destinationData = data[3]
    })
      .catch(err =>{
        console.log(err)
        alert('The server can not be reached right now, please try again later')
      })
  }
}
export default FetchRequests