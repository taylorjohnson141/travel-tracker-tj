
class Trip {
  constructor(currentUserId,id dataForTrip,tripData, destinationData) {
    this.currentUserId = currentUserId
    this.id= this.findID()
    this.tripData;
    this.dataForTrip = dataForTrip;
    this.destinationData = destinationData;
    this.estimatedCost;
  }
  calculateEstimatedCost(){
    currectDestination = destinationData.find(destination =>{
      this.destinationData.name === destination.destination
    })
    this.estimatedCost += curr.destination.estimatedLodgingCostPerDay
    this.estimatedCost += (curr.travelers * curr.destination.estimatedFlightCostPerPerson)
    return this.estimatedCost
  }
   findID (){
    return tripData.reduce((acc,trip) => {
      if(acc === trip.id){
        acc += this.findUniqueValue(trip.id,acc)
      }
      else{
        return acc
      }
    },0)
   }
   findUniqueValue(trip,value){
    value +=1
     if(trip === value){
      return this.findUniqueValue(trip,value)
     }
     else{
       return value
     }
   }
}