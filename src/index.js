// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import moment from 'moment'
import './css/base.scss';
import domUpdates from './domUpdates'
import FetchRequests from './fetchRequests'
import Traveler from './Traveler';
import Trips from './Trips';
import Trip from './Trip.js'
let submitTrip = document.querySelector('.add-trip')
let rejectTrip = document.querySelector('.reject-trip')
let formButton = document.querySelector('.plan-another-trip')
let submitButton = document.querySelector('.submit')
let userInput = document.querySelector('.userInput')
let destinationPick = document.querySelector('#destination')
let form = document.querySelector('.userInput') 
let startDate = document.querySelector('#startDate')
let endDate = document.querySelector('#endDate')
let numOfTravelers = document.querySelector('#numtrav')
let pendingTrip;
let currentUser;
let destinationData;
let tripData;
let currentFetch;
window.onload = () =>{
 currentFetch = new FetchRequests(3)
currentFetch.getData().then(() => {
 tripData = currentFetch.tripData.trips
 destinationData = currentFetch.destinationData.destinations
let newTrip = new Trips(3, tripData, destinationData)
newTrip.findUserTrips()
newTrip.formatTripsAndDestination()
 currentUser = new Traveler(currentFetch.currentUserData, newTrip.currentUserTrips)
domUpdates.addDestinations(currentUser.trips)
domUpdates.showAmountSpentInAYear(currentUser)
newTrip.findStatus()
})

}
formButton.addEventListener('click', () =>{
  domUpdates.toggleForm()
  domUpdates.addDestinationsToCalender(destinationData)
})
userInput.addEventListener('submit', ()=>{
  event.preventDefault()
  if (checkValues()) {
    let momStartDate = moment(startDate.value)
    let momEndDate = moment(endDate.value)
    let diff = momStartDate.diff(momEndDate, 'days') * -1
    let DataForTrip = { travelers: numOfTravelers.value, startDate: startDate.value , endDate: endDate.value, duration: diff, destination: destinationPick.value}
    pendingTrip = new Trip(3,DataForTrip,tripData,destinationData )
    domUpdates.showEstimatePrice(pendingTrip.estimatedCost)
    domUpdates.showSubmitButton()
  }
  
})
function checkValues() {
  if (destinationPick.value === undefined
|| startDate.value === undefined
|| endDate.value === undefined
|| numOfTravelers.value === undefined
  ) {
    alert('Please fill every prompt')
  }
  let today = new Date()
  if (endDate <= today || startDate < today || endDate < startDate ) {
    alert('Dates are invalid')
  } else { 
    return true
  }
}
submitTrip.addEventListener('click', ()=>{
  currentFetch.postRequest(pendingTrip).then( response =>{
    document.location.reload()
  }

  )
})
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

