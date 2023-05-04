
//                                      -漫~*'¨¯¨'*·舞~ 丂卂丨 Ҝ丨尺卂几 ~舞*'¨¯¨'*·~漫-

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1); //removes last character
  } else {
    // if the output value is empty and the first button pressed is specialChar 
    //then the loop breaks
    if (output === "" && specialChars.includes(btnValue)) return; //breaks calculate function
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => { //for every button
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
  //e.target refers to the HTML element that triggered the event, in this case the button element.
  //e.target.dataset.value retrieves the value attribute from the button element's data-* attribute. 
  //This attribute is used to store custom data on an element.
});