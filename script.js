//your JS code here. If required.
let element = document.getElementById('level'); // get the element
let counter = 0; // initialize counter

while(element) { // loop till we reach the root
    counter++; // increment the counter
    element = element.parentNode; // get the parent element
}
alert('The level of the element is: ' + (counter-1));