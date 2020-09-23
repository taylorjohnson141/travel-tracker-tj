import chai from 'chai';
import Trip from '../src/Trip.js'
const expect = chai.expect;
let DataForTrip = {travelers: 1, duration: 4, destination: "Lima, Peru"}
let tripData = [{"id":1,"userID":1,"destinationID":1,"travelers":1,"date":"2019/09/16","duration":8,"status":"approved","suggestedActivities":[]}] 
let destinationData = [{"id": 1, "destination":"Lima, Peru","estimatedLodgingCostPerDay":70,"estimatedFlightCostPerPerson":400,"image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80", "alt": "overview of city buildings with a clear sky"},
{"id": 2, "destination":"Stockholm, Sweden","estimatedLodgingCostPerDay":100,"estimatedFlightCostPerPerson":780,"image":  "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "city with boats on the water during the day time"},
{"id": 3, "destination":"Sydney, Austrailia","estimatedLodgingCostPerDay":130,"estimatedFlightCostPerPerson":950,"image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "opera house and city buildings on the water with boats"}];

describe('Trip', () => {
  let trip;
  beforeEach(() => {
    trip = new Trip(1, DataForTrip, tripData, destinationData)
  });
  it('should contain an id', () =>{
    expect(trip.currentUserId).to.equal(1)
  })
  it('should calculate the correct estimated price for the trip', () =>{
    expect(trip.calculateEstimatedCost()).to.equal(680)
  })
  it('should give trip a unique id', () => {
    expect(trip.findID()).to.equal(2)
  })
  it('should give trip a correct unique id', () => {
    expect(trip.findID()).to.not.equal(3)
  })

  it('should always have a status of pending', () => {
    expect(trip.status).to.equal('pending')
  })
  it('should never be anything other than pending', () => {
    expect(trip.status).to.not.equal('future')
  })
})