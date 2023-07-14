// 11.10.2. Raid a Shuttle

function checkFuel(level) {
    if (level > 100000){
      return 'green';
    } else if (level > 50000){
      return 'yellow';
    } else {
      return 'red';
    }
  }

  let suspicious = function(str){
    if (checkFuel === 'green'){
      return str - 100001; 
    }
    if (checkFuel === 'yellow'){
      return str - 50001 
    }
    else{
      return str
    }
  }
  
  function holdStatus(arr){
    if (arr.length < 7) {
      return `Spaces available: ${7-arr.length}.`;
    } else if (arr.length > 7){
      return `Over capacity by ${arr.length-7} items.`;
    } else {
      return "Full";
    }
  }
  
 
  let fuelLevel = 200000;
  let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
  

  console.log("Fuel level: " + checkFuel(fuelLevel));
  console.log("Hold status: " + holdStatus(cargoHold));
  