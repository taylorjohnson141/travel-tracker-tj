import chai from 'chai';
import Traveler from '../src/Traveler.js'
const expect = chai.expect;
let travelerData = {"id": 1, "name": "Ham Leadbeater", "travelerType": "relaxer"}
let TripData = [
  {"id": 117,  "userID": 1, "destinationID": 28, "travelers": 3, "date": "2021/01/09" , "duration": 15 , "status": "approved", "suggestedActivities": []},
  {"id": 193, "userID": 1, "destinationID": 35 , "travelers": 1, "date": "2020/11/09" , "duration": 19 , "status": "approved", "suggestedActivities": []},
]
describe('Traveler', () => {
  let traveler;
  beforeEach(() => {
    traveler = new Traveler(travelerData,TripData);
  });
  it('should have an identifier', () =>{
    expect(traveler.id).to.equal(1)
  })
  it('should have a name ', () =>{
    expect(traveler.name).to.equal('Ham')
  })
  it('should have a type of traveler propetry', () =>{
    expect(traveler.type).to.equal('algo')
  })
  it('should have a trips property', () =>{
    expect(traveler.trips).to.deep.equal([])
  })
  it('should be able to find the correct trips based on the id', () =>{
    traveler.addTrips()
    expect(traveler.trips).to.deep.equal([''])
  })
  it('should be able to calculate the amount the user spent in the last year', () =>{
    expect(traveler.calculateAmountSpentInAYear()).to.equal(333)
  })
})