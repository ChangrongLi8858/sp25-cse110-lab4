let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  for (let prop in statistics) {
    let value = statistics[prop];
    if (prop.startsWith('r') || (typeof value === 'number' && value % 2 === 1)) {
      console.log(value);
    }
  }
  