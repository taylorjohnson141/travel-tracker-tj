class Traveler {
  constructor(userData,UserTripData) {
    this.id = userData.id;
    this.name = userData.name;
    this.type = userData.travelerType;
    this.trips = UserTripData
  }
}
export default Traveler