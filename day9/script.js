//Activity 1: Selecting and manipulating element

//Task 1:
const element = document.getElementById("myelement");
element.textContent = "Han G!! Kaise h aap sab..";

//Task 2:
 document.querySelector('.myClass').style.backgroundColor = "Red";

 //Activity 2: Creating and Appending Elements

 //Task 3:
 const newDiv = document.createElement("div");
 newDiv.textContent = "This is a new div element.";
 document.body.appendChild(newDiv);

 //Task 4:
 const newLi = document.createElement("li");
 newLi.textContent = "Item 3";

 const ul = document.getElementById("myList");
 ul.appendChild(newLi);

 //Activity 3: Removing Elements

 //Task 5:
 var ele = document.getElementById("removeMe");
 ele.parentNode.removeChild(ele);

 //Task 6:
const remove = document.getElementById("Parent");
remove.removeChild(remove.lastElementChild);

//Activity 4: Modyfying attributes and Classes

//Task 7:
 const img = document.querySelector(".myImg");
 img.src = "./newimg.jpg"

 //Task 8:
 function addclass(){
    const element = document.getElementById("myParagraph");
    element.classList.add("boldText")
 }

  function removeClass(){
     const element = document.getElementById("myParagraph");
    element.classList.remove("boldText")
 }

 //Activity 5 : Event Handling

 //Task 9:

 const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('textParagraph');

button.addEventListener('click', function() {
    
    paragraph.textContent = 'This is the new text after clicking the button!';
});

//Task 10:

const borderElement = document.getElementById('borderElement');


borderElement.addEventListener('mouseover', function() {
    
    borderElement.style.borderColor = 'red';
});


borderElement.addEventListener('mouseout', function() {
    
    borderElement.style.borderColor = 'black';
});


 
