
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
      }).catch(err =>{
        alert(err)
      })
  }
  tripFetch() {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`)
      .then(tripResponse =>{
        return tripResponse.json()
      })
      .then(tripData =>{
        return tripData
      }).catch(err =>{
        alert(err)
      })
  }
  destinationFetch() {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
      .then(destinationResponse =>{
        return destinationResponse.json()
      })
      .then(destinationData =>{
        console.log(destinationData)
        return destinationData
      }).catch(err =>{
        alert(err)
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
      this.destinationData = data[2]
    })
      .catch(err =>{
        console.log(err)
        alert('The server can not be reached right now, please try again later')
      })
  }
  postRequest(dataToPost) {
    let data = this.createData(dataToPost)
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(data), 
      }).then(Response => {
      console.log(Response)
    }).catch(err =>{
      alert(err)
    })
  } 
  createData(dataToPost) {
    let date = dataToPost.dataForTrip.startDate.split('-')
    let correctDate = date.join('/')
    let data = { 
      id: dataToPost.id, 
      userID: dataToPost.currentUserId,
      destinationID: dataToPost.DestinationID, 
      travelers: Number(dataToPost.dataForTrip.travelers), 
      date: correctDate,
      duration: dataToPost.duration, 
      status: 'pending', 
      suggestedActivities: [],
    }
    return data
  }
}
export default FetchRequests