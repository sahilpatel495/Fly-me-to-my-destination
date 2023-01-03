function minPlanes(fuel) {
  let planes = 0;
  let currentAirport = 0;

  while (currentAirport < fuel.length - 1) {
    // Find the furthest airport we can reach from the current airport
    let farthestAirport = currentAirport;
    for (
      let i = currentAirport + 1;
      i <= currentAirport + fuel[currentAirport];
      i++
    ) {
      if (i === fuel.length - 1) {
        // We've reached the last airport, so we don't need to hire any more planes
        return planes + 1;
      }
      if (fuel[i] + i > fuel[farthestAirport] + farthestAirport) {
        farthestAirport = i;
      }
    }
    if (farthestAirport === currentAirport) {
      // We couldn't find an airport to reach, so it's not possible to reach the last airport
      return -1;
    }
    currentAirport = farthestAirport;
    planes++;
  }
  return planes;
}

let data1 = [2, 1, 2, 3, 1];
let data2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];

console.log(minPlanes(data1)); // 2
console.log(minPlanes(data2)); // 3
