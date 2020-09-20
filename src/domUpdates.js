let userTravelSection = document.querySelector('.user-travels')
let domUpdates = {

  addDestinations(userTravels) {
    userTravelSection.innerHTML = ''
    userTravels.forEach(trip => {
      userTravelSection.innerHTML +=
      `<article id = ${trip.id} class="single-recipe-card ${trip.status}">
         <article class="card-image-section">
           <img class="card-image" tabindex="0" src="${trip.image}" alt= ${trip.destination.alt}>
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name" tabindex="0">${trip.destination.name}</h2>
         </article>
       </article>`
    });
  }
}