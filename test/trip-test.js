import chai from 'chai';
import Trips from '../src/Trip.js'
const expect = chai.expect;

describe('Trip', () => {
  let trips;
  beforeEach(() => {
    trips = new Trips(id, TripData, destinationData);
  });
  it('should contain an Id',() =>{
    expect(trips.id).to.equal(1)
  })
  
})