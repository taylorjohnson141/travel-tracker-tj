let userTravelSection = document.querySelector('.user-travels')
let amountSpentThisYear = document.querySelector('.total-spent')
let destinationSelecton = document.querySelector('#destination')
let formButton = document.querySelector('.plan-another-trip')
let form = document.querySelector('.userInput') 
let logIn = document.querySelector('.log-in')
let page = document.querySelector('.page')
let userInfo = document.querySelector('.user-info')
import moment from 'moment'

// let startDate = document.querySelector('#startDate')
// let endDate = document.querySelector('#endDate')
// let numOfTravelers = document.querySelector('#numtrav')
let estimatePrice = document.querySelector('.estimated-price')
let confirmTrip = document.querySelector('.post-trip')
let domUpdates = {

  addDestinations(userTravels) {
    logIn.classList.add('hidden')
    page.classList.remove('hidden')
    userTravelSection.innerHTML = ''
    userTravels.forEach(trip => {
      console.log(trip)
      userTravelSection.innerHTML +=
      
      `<div>
      <article id = ${trip.id} class="single-recipe-card ">
         <article class="card-image-section">
           <img class="card-image" tabindex="0" src="${trip.destination.image}" alt= ${trip.destination.alt}>
         </article>
        <article>${trip.date}- ${moment(trip.date).add(5, 'days').format('YYYY/MM/DD')}<article>
         <article class="trip-name-area">

           <h2 class="trip-name" tabindex="0">${trip.destination.destination} status : ${trip.status}</h2>
         </article>
       </article>
       </div>
       `
    });
  },
  showAmountSpentInAYear(traveler) {
    amountSpentThisYear.innerText = `How Much Have you Spent this year : ${traveler.calculateAmountSpentInAYear()} dollars`  
  },
  addDestinationsToCalender(destinationData) {
    destinationSelecton.innerHTML +=  ''
    destinationData.forEach(destination =>{
      destinationSelecton.innerHTML +=  
      `<option value="${destination.destination}">${destination.destination}</option>`
    })
  },
  toggleForm() {
    formButton.classList.toggle('hidden')
    form.classList.toggle('hidden')
  },
  showEstimatePrice(price) {
    estimatePrice.innerText = ''
    estimatePrice.classList.toggle('hidden')
    estimatePrice.innerText += `Estimated cost ${price}`
  },
  showSubmitButton() {
    confirmTrip.classList.toggle('hidden')
    
  },
  showUserName(currentUser) {
    userInfo.innerText = ''
    userInfo.innerText += `Welcome ${currentUser.name}!`
  }
  
}
export default domUpdates