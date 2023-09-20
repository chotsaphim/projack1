let moneyInput;
let pricePerLiterInput;
let tankCapacityInput;
let resultText = '';
let fullTankCostText = '';
let litersPerTankText = '';
let instructionText = 'Enter the respective amounts and click calculate.';

function setup() {
  createCanvas(windowWidth, 420);

  // Create an input field for money with placeholder
  moneyInput = createInput('');
  moneyInput.position(20, 60);
  moneyInput.size(200);
  moneyInput.attribute('placeholder', 'Amount in THB');

  // Create labels and input fields with better spacing
  textSize(16);
  text('Enter the amount of money (THB):', 20, 50);
  
  // Create an input field for price per liter with placeholder
  pricePerLiterInput = createInput('');
  pricePerLiterInput.position(20, 120);
  pricePerLiterInput.size(200);
  pricePerLiterInput.attribute('placeholder', 'Price per liter in THB');

  text('Enter the price per liter (THB):', 20, 110);

  // Create an input field for tank capacity with placeholder
  tankCapacityInput = createInput('');
  tankCapacityInput.position(20, 180);
  tankCapacityInput.size(200);
  tankCapacityInput.attribute('placeholder', 'Tank capacity in liters');

  text('Enter the tank capacity (liters):', 20, 170);

  // Create a button with some style
  let button = createButton('Calculate');
  button.position(20, 220);
  button.mousePressed(calculateGas);
  button.style('padding', '10px');
  button.style('background-color', '#5cb85c');
  button.style('border', 'none');
  button.style('color', 'white');
  button.style('font-size', '14px');
  button.style('cursor', 'pointer');
}

function draw() {
  background(220);

  // Display instruction and result
  textSize(14);
  fill(50);
  text(instructionText, 20, 20);
  text(resultText, 20, 300);
  text(fullTankCostText, 20, 320);
  text(litersPerTankText, 20, 340);
}

function calculateGas() {
  // Get the inputs from the fields
  let money = parseFloat(moneyInput.value());
  let pricePerLiter = parseFloat(pricePerLiterInput.value());
  let tankCapacity = parseFloat(tankCapacityInput.value());

  // Input validation and calculation
  if (isNaN(money) || isNaN(pricePerLiter) || isNaN(tankCapacity)) {
    resultText = 'Please enter valid numbers for all fields.';
    fullTankCostText = '';
    litersPerTankText = '';
  } else if (money <= 0 || pricePerLiter <= 0 || tankCapacity <= 0) {
    resultText = 'All inputs must be greater than zero.';
    fullTankCostText = '';
    litersPerTankText = '';
  } else {
    let gasAmount = money / pricePerLiter;
    resultText = 'You can get ' + gasAmount.toFixed(2) + ' liters of gas.';

    let fullTankCost = tankCapacity * pricePerLiter;
    fullTankCostText = 'The cost for a full tank is ' + fullTankCost.toFixed(2) + ' THB.';
    
    litersPerTankText = 'You need ' + tankCapacity.toFixed(2) + ' liters to fill the tank.';
  }
}

// Function to make canvas responsive
function windowResized() {
  resizeCanvas(windowWidth, 420);
}
