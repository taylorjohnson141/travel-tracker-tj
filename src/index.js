// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import domUpdates from './domUpdates'
import FetchRequests from './fetchRequests'
import Traveler from './Traveler';
import Trips from './Trips';
import Trip from './Trip.js'
let currentUser;

window.onload = () =>{
let currentFetch = new FetchRequests(3)
currentFetch.getData().then(() => {
let tripData = currentFetch.tripData.trips
let destinationData = currentFetch.destinationData.destinations
let newTrip = new Trips(3, tripData, destinationData)
newTrip.findUserTrips()
newTrip.formatTripsAndDestination()
let currentUser = new Traveler(currentFetch.currentUserData, newTrip.currentUserTrips)
console.log(currentUser)
domUpdates.addDestinations(currentUser.trips)
domUpdates.showAmountSpentInAYear(currentUser)
newTrip.findStatus()
let DataForTrip = {travelers: 1, duration: 4, destination: "Lima, Peru"}

let trip = new Trip(1,DataForTrip,tripData,destinationData)
console.log(trip)
})
}
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

