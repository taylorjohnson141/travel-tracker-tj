let userTravelSection = document.querySelector('.user-travels')
let amountSpentThisYear = document.querySelector('.total-spent')
let destinationSelecton = document.querySelector('#destination')
let formButton = document.querySelector('.plan-another-trip')
let form= document.querySelector('.userInput') 
let startDate = document.querySelector('#startDate')
let endDate = document.querySelector('#endDate')
let numOfTravelers = document.querySelector('#numtrav')
let estimatePrice = document.querySelector('.estimated-price')
let confirmTrip = document.querySelector('.post-trip')
let domUpdates = {

  addDestinations(userTravels) {
    userTravelSection.innerHTML = ''
    userTravels.forEach(trip => {
      userTravelSection.innerHTML +=
      
      `<div>
      <article id = ${trip.id} class="single-recipe-card ">
         <article class="card-image-section">
           <img class="card-image" tabindex="0" src="${trip.destination.image}" alt= ${trip.destination.alt}>
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name" tabindex="0">${trip.destination.destination} status : ${trip.status}</h2>
         </article>
       </article>
       </div>
       `
    });
  },
  showAmountSpentInAYear(traveler) {
    amountSpentThisYear.innerText += ` ${traveler.calculateAmountSpentInAYear()} dollars`  
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
    estimatePrice.classList.toggle('hidden')
    estimatePrice.innerText += price
  },
  showSubmitButton() {
    confirmTrip.classList.toggle('hidden')
    
  }
}
export default domUpdates