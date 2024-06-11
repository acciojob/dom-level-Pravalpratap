//your JS code here. If required.
let elment=document.getElementByID("level")

let counter=1
while(elment){
	counter++;
	elment=elment.parentNode
	
}
alert('The level of the element is: ' + (counter-1));