var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value
	 + ")";

	 //Get the text content of an element
	 //The textContent property sets or returns the text content of the specified node, and all its descendants
	 //If you set the textContent property, any child nodes are removed and replaced by a single Text node containing the specified string.
	 
	 css.textContent = body.style.background + ";";
}

//The addEventListener() method attaches an event handler to the specified element.
//Attach a click event to a <button> element. When the user clicks on the button output something.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

