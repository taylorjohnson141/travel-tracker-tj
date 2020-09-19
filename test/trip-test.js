import chai from 'chai';
import Trips from '../src/Trip.js'
const expect = chai.expect;

describe('Trip', () => {
  let trips;
  beforeEach(() => {
    trips = new Trips(id, TripData, destinationData);
  });
  it('should contain an id',() =>{
    expect(trips.id).to.equal(1)
  })
  it('should be able to find the currect User Trips correctly',() =>{
    trips.findUserTrips()
    expect(trips.currentUserTrips).to.deep.equal()
  })
  it('should be able to format the data correctly',() =>{
    trips.findUserTrips()
    trips.formatTripsAndDestination()
    expect(trips.currentUserTrips).to.deep.equal()

  })
  it('should be able to calculate the cost of an individual trip',() =>{
    trips.findUserTrips()
    trips.formatTripsAndDestination()
    trips.findCost(trips.currentUserTrips[0]).to.deep.equal()
  })
})