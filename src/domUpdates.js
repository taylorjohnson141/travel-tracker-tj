let userTravelSection = document.querySelector('.user-travels')
let amountSpentThisYear = document.querySelector('.total-spent')

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
  }

}
export default domUpdates