import chai from 'chai';
import Traveler from '../src/Traveler.js'
const expect = chai.expect;

describe('Traveler', () => {
  let traveler;
  beforeEach(() => {
    traveler = new Traveler(1);
  });
  it('should have an identifier', () =>{
    expect(traveler.id).to.equal(1)
  })
  it('should have a name '), () =>{
    expect(traveler.name).to.equal('Ham')
  }
  it('should have a type of traveler propetry'), () =>{
    expect(traveler.type).to.equal('algo')
  }
  it('should have a trips property'), () =>{
    expect(traveler.trips).to.deep.equal([])
  }
  it('should be able to find the correct trips based on the id'), () =>{
    traveler.findTrips()
    expect(traveler.trips).to.deep.equal([])
  }

})