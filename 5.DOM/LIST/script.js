// we selected elements that we need,so if we want and elemend there is no need to go 
//again and again get.doc... but we just type "button"(ex.) as a shortcut.
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//this function is created to return the value of the input

function inputLength() {
	return input.value.length;
}

// we created a function and in the function we created a shortcut for "li".
//so we take "li" and we append a "child" to it, that child is a TextNode, and in this case that
//TextNode is what we type in out input box, and then we take the ul and we append a child to it
//in our case the "child" is "li", and then we want our input box to be empty again.

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

//in this function we added an if statement and if the "inputLength" id greater than 0
//which meand is not empty, then "createListElement" the one we created above.

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();	
	}
}

// in this function we created an "if" statement so if "inputLength"
//is greater than 0(not empty) and if the keyCode 13 is pressed in input then "createListElement"

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}

//these do all the job!
//so this basically means if someone 'clicks' button, then "addListAfterClick"(function we created)
//and if somebody presses the specified key in input then addListAfterkeypress"
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);