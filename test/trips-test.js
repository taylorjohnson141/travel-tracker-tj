import chai from 'chai';
import Trips from '../src/Trips.js'
const expect = chai.expect;
let id = 1
let TripData = [
{"id":1,"userID":1,"destinationID":1,"travelers":1,"date":"2019/09/16","duration":8,"status":"approved","suggestedActivities":[]}, 
{"id":2,"userID":35,"destinationID":25,"travelers":5,"date":"2020/10/04","duration":18,"status":"pending","suggestedActivities":[]},
{"id":3,"userID":3,"destinationID":22,"travelers":4,"date":"2020/05/22","duration":17,"status":"pending","suggestedActivities":[]},
{"id":4,"userID":1,"destinationID":2,"travelers":2,"date":"2020/02/25","duration":10,"status":"approved","suggestedActivities":[]},
{"id":5,"userID":42,"destinationID":29,"travelers":3,"date":"2020/04/30","duration":18,"status":"approved","suggestedActivities":[]},
{"id":6,"userID":1,"destinationID":4,"travelers":3,"date":"2020/06/29","duration":9,"status":"approved","suggestedActivities":[]},
{"id":7,"userID":37,"destinationID":17,"travelers":5,"date":"2020/5/28","duration":20,"status":"approved","suggestedActivities":[]},
{"id":8,"userID":36,"destinationID":5,"travelers":6,"date":"2021/02/07","duration":4,"status":"approved","suggestedActivities":[]}
];

let destinationData = [
  {"id": 1, "destination":"Lima, Peru","estimatedLodgingCostPerDay":70,"estimatedFlightCostPerPerson":400,"image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80", "alt": "overview of city buildings with a clear sky"},
  {"id": 2, "destination":"Stockholm, Sweden","estimatedLodgingCostPerDay":100,"estimatedFlightCostPerPerson":780,"image":  "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "city with boats on the water during the day time"},
  {"id": 3, "destination":"Sydney, Austrailia","estimatedLodgingCostPerDay":130,"estimatedFlightCostPerPerson":950,"image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "opera house and city buildings on the water with boats"},
  {"id": 4, "destination":"Cartagena, Colombia","estimatedLodgingCostPerDay":65,"estimatedFlightCostPerPerson":350,"image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", "alt": "boats at a dock during the day time"},
  {"id": 5, "destination":"Madrid, Spain","estimatedLodgingCostPerDay":150,"estimatedFlightCostPerPerson":650,"image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "city with clear skys and a road in the day time"},
  {"id": 6, "destination":"Jakarta, Indonesia","estimatedLodgingCostPerDay":70,"estimatedFlightCostPerPerson":890,"image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "lit up city at night"},
  {"id": 7, "destination":"Paris, France","estimatedLodgingCostPerDay":100,"estimatedFlightCostPerPerson":395,"image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80", "alt": "city during the day time with eiffel tower"},
  {"id": 8, "destination":"Tokyo, Japan","estimatedLodgingCostPerDay":125,"estimatedFlightCostPerPerson":1000,"image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80", "alt": "city with people walking in crosswalk and brightly lit shops at night"},
  {"id": 9, "destination":"Amsterdam, Netherlands","estimatedLodgingCostPerDay":100,"estimatedFlightCostPerPerson":950,"image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt": "canal with boats and trees and buildings along the side"},
  {"id": 10, "destination":"Toronto, Canada","estimatedLodgingCostPerDay":90,"estimatedFlightCostPerPerson":450,"image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"}
];
describe('Trip', () => {
  let trips;
  beforeEach(() => {
    trips = new Trips(id, TripData, destinationData);
  });
  it('should contain an id',() =>{
    expect(trips.currentUserId).to.equal(1)
  })
  it('should be able to find the currect User Trips correctly',() =>{
    trips.findUserTrips()
    expect(trips.currentUserTrips).to.deep.equal(
      [
        {
          id: 1,
          userID: 1,
          destinationID: 1,
          travelers: 1,
          date: '2019/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 4,
          userID: 1,
          destinationID: 2,
          travelers: 2,
          date: '2020/02/25',
          duration: 10,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 6,
          userID: 1,
          destinationID: 4,
          travelers: 3,
          date: '2020/06/29',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  })
  it('should be able to format the data correctly', () =>{
    trips.findUserTrips()
    trips.formatTripsAndDestination()
    console.log(trips.currentUserTrips)
    expect(trips.currentUserTrips).to.deep.equal(
      [
        {
          id: 1,
          userID: 1,
          destinationID: 1,
          travelers: 1,
          date: '2019/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 1,
            destination: 'Lima, Peru',
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 400,
            image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
            alt: 'overview of city buildings with a clear sky'
          }
        },
        {
          id: 4,
          userID: 1,
          destinationID: 2,
          travelers: 2,
          date: '2020/02/25',
          duration: 10,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 2,
            destination: 'Stockholm, Sweden',
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 780,
            image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'city with boats on the water during the day time'
          }
        },
        {
          id: 6,
          userID: 1,
          destinationID: 4,
          travelers: 3,
          date: '2020/06/29',
          duration: 9,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 4,
            destination: 'Cartagena, Colombia',
            estimatedLodgingCostPerDay: 65,
            estimatedFlightCostPerPerson: 350,
            image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            alt: 'boats at a dock during the day time'
          }
        }
      ]
    )

  })
  // it('should be able to calculate the cost of an individual trip',() =>{
  //   trips.findUserTrips()
  //   trips.formatTripsAndDestination()
  //   trips.findCost(trips.currentUserTrips[0]).to.deep.equal()
  // })
})