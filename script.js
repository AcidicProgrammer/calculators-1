function converter(inpValue) {
let farenheit = document.querySelector("#farenheit").value;
let celcius = document.querySelector("#celcius").value;
let kelvin = document.querySelector("#kelvin").value;
let rankine = document.querySelector("#rankine").value;

  switch(inpValue) {
    case inpValue = farenheit:
    inpValue = parseFloat(inpValue);
    this.celcius.value = ((inpValue - 32) * 5/9).toFixed(2);
    this.kelvin.value = ((inpValue - 32) * 5/9 + 273.15).toFixed(2);
    this.rankine.value = ((inpValue + 459.67).toFixed(2));

    break;

    case inpValue = celcius:
    inpValue = parseFloat(inpValue);
    this.farenheit.value = ((inpValue * 9/5) + 32).toFixed(2);
    this.kelvin.value = ((inpValue + 273.15).toFixed(2));
    this.rankine.value = ((inpValue * 9/5 + 491.67)).toFixed(2);

    break;

    case inpValue = kelvin:
    inpValue = parseFloat(inpValue);
    this.farenheit.value = ((inpValue - 273.15) * 9/5 + 32).toFixed(2);
    this.celcius.value = ((inpValue - 273.15)).toFixed(2);
    this.rankine.value = ((inpValue * 1.8)).toFixed(2);

    break;

    case inpValue = rankine:
    inpValue = parseFloat(inpValue);
    this.farenheit.value = (inpValue - 459.67).toFixed(2);
    this.celcius.value = ((inpValue - 491.67) * 5/9).toFixed(2);
    this.kelvin.value = (inpValue * 5/9).toFixed(2);

    break;
  }
}

function convertSpeed(inpValue) {
  let miles = document.querySelector("#miles").value;
  let kilometers = document.querySelector("#kilometers").value;

  switch(inpValue) {

    case inpValue = this.miles.value:
    inpValue = parseFloat(inpValue);
    this.kilometers.value = (inpValue * 1.609).toFixed(3);

    break;

    case inpValue = this.kilometers.value:
    inpValue = parseFloat(inpValue);
    this.miles.value = (inpValue / 1.609).toFixed(3);

    break;
  }
}



//----------------------------------------------------------------------------------------------------------
function compute(int) {
  document.querySelector("#calcOutput").value += int;
}

function squared(int) {
  let output = document.querySelector("#calcOutput").value;
  output = Math.pow(output, int);
  document.querySelector("#calcOutput").value = parseFloat((output).toFixed(7));
}

function calculate() {
  let evaluate = eval(document.querySelector("#calcOutput").value);
  document.querySelector("#calcOutput").value = parseFloat((evaluate).toFixed(7));
}

function root(int) {
  let output = document.querySelector("#calcOutput").value;
  let root = int - int;
  root = output;
  output = Math.sqrt(root);
  document.querySelector("#calcOutput").value = parseFloat((output).toFixed(7));
}

function percent() {
  let output = document.querySelector("#calcOutput").value;
  output = parseFloat(output);
  let percent = parseFloat(output / 100);
  document.querySelector("#calcOutput").value = percent;

}
