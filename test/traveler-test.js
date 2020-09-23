import chai from 'chai';
import Traveler from '../src/Traveler.js'
const expect = chai.expect;
let travelerData = {"id": 1, "name": "Ham Leadbeater", "travelerType": "relaxer"}
let TripData = [
  {"id": 117,  "userID": 1, "destinationID": 28, "travelers": 3, "date": "2021/01/09" , "duration": 15, "status": "approved", "suggestedActivities": [],
    destination: {"id": 28, "destination": "San Juan, Puerto Rico", "estimatedLodgingCostPerDay": 70, "estimatedFlightCostPerPerson": 900, "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80", "alt": "white and brown concrete buildings near sea under white clouds during daytime"}
  },
  {"id": 193, "userID": 1, "destinationID": 35, "travelers": 4, "date": "2020/11/09" , "duration": 19, "status": "approved", "suggestedActivities": [],
    destination: {"id": 35, "destination": "Anchorage, Alaska", "estimatedLodgingCostPerDay": 200, "estimatedFlightCostPerPerson": 100, "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "man riding on kayak surrounded by mountains"}
  },
]
describe('Traveler', () => {
  let traveler;
  beforeEach(() => {
    traveler = new Traveler(travelerData, TripData);
  });
  it('should have an identifier', () =>{
    expect(traveler.id).to.equal(1)
  })
  it('should have a name ', () =>{
    expect(traveler.name).to.equal('Ham Leadbeater')
  })
  it('should have a type of traveler propetry', () =>{
    expect(traveler.type).to.equal('relaxer')
  })
  it('should return correct traveler propetry', () =>{
    expect(traveler.type).to.not.equal('fussy')
  })
  it('should have a trips property', () =>{
    expect(traveler.trips).to.deep.equal(TripData)
  })
  it('should return correct trips property', () =>{
    expect(traveler.trips).to.not.equal([])
  })
  it('should be able to calculate the amount the user spent in the last year correctly', () =>{
    expect(traveler.calculateAmountSpentInAYear()).to.not.equal(509)
  })
  it('should be able to calculate the amount the user spent in the last year', () =>{
    expect(traveler.calculateAmountSpentInAYear()).to.equal(600)
  })
})