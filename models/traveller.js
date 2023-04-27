const Traveller = function(journeys) {
  this.journeys = journeys;
};

// use .map(() => {})
Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

// use .map(() => {})
Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

// use .filter(() => {})
Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

// use .filter(() => {})

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
};

// use .reduce((,) => {})
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((accumulator, journey) => {
    return accumulator + journey.distance;
  }, 0);
  return totalDistance
};

// returning an array
Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = []; // created a variable with empty array to store transport modes

  this.journeys.forEach((journey) => {  // forEach iterates over each journey in array
    if(!modesOfTransport.includes(journey.transport)) {  // the includes()method checks if journey.transport is already in modesOfTransport array.
      modesOfTransport.push(journey.transport); // if it's not in the list, it gets pushed to to modesOfTransport
    }
  });
  return modesOfTransport;
};

module.exports = Traveller;
