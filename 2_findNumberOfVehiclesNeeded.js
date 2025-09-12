const vehicles = [
  { type: 'cycle', weightCapacity: 1},
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];

const parcelsDetails = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 220 },
  { location: 'velachery', weight: 60 }
];
// a. Calculate the minimum number of vehicles required to deliver the parcel for each location
// b. Make the most of the weight that each vehicle can carry. There shouldn't be any wasted space in the vehicle
// For example:
// To deliver to velachery, we will require one auto and two bike (20 + 5(bike) + 5(bike)) = 30
// We can deliver this in two auto (20 + 20) but 10 kg will be wasted in space
// The logic is to find the minimum number of vehicles required to deliver the parcel without wasting space in vehicle

function displayError(){
    console.error("Invalid input");
    return null;
}

function mergeCommonLocations(parcels){
    const merged = {};

    for (let i = 0; i < parcels.length; i++) {
        if (parcels[i].weight < 0){
            displayError();
            continue;
        }
        const location = parcels[i].location;
        const weight = parcels[i].weight;

        if (merged[location]) {
          merged[location] += weight; 
        } else {
          merged[location] = weight; 
        }
    }

    const result = [];
    for (let key in merged) {
        result.push({ location: key, weight: merged[key] });
    }

    return result;
}

function findNumberOfVehiclesNeeded(parcelsDetails, vehicles){
    const parcels = mergeCommonLocations(parcelsDetails);
    // console.log(parcels);
    if (parcels.length<=0) return displayError();
    
    const sortedVehicles = vehicles.sort((a, b) => b.weightCapacity - a.weightCapacity);
    const result = {};

    for (const parcel of parcels) {
      let vehicleNeeded = {};
      let currentWeight = parcel.weight;
      let i=0;
      for (i;i<sortedVehicles.length;i++){
        if (currentWeight<=0) break;
        const currentVehicle = sortedVehicles[i];
        const vehicleCount = Math.floor(currentWeight / currentVehicle.weightCapacity);

        if (vehicleCount > 0) {
          vehicleNeeded[currentVehicle.type] = vehicleCount;
          currentWeight %= currentVehicle.weightCapacity;
        }
      }
      if (currentWeight>0){
        for (i;i<sortedVehicles;i++){
          const vehicle = sortedVehicles[i];
          if (vehicle.weightCapacity >= currentWeight) {
            vehicleNeeded[vehicle.type] = (vehicleNeeded[vehicle.type] || 0) + 1;
            currentWeight = 0;
            break;
          }
        }
      }
      result[parcel.location] = vehicleNeeded;
    }
    return result;
}

console.log(findNumberOfVehiclesNeeded(parcelsDetails,vehicles));