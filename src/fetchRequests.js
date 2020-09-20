class FetchRequests {
  constructor(id) {
    this.currentUserId = id
    this.currentUserData;
    this.tripData;
    this.DestinationData;
  }
  getData() {
    Promise.all([
      `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${this.currentUserId}`,
      `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`,
      `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`
    ]).then(data =>{
      this.currentUserData = data[0]
      this.tripData = data[1]
      this.DestinationData = data[3]
    })
  }
}