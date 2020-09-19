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
  }
  
})