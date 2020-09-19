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
  it('should have a name'), () =>{
    expect(traveler.name).to.equal('Ham')
  }
})