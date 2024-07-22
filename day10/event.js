//Activity 1:Basic event handling

//Task 1:
const button = document.getElementById("myButton");
const para = document.getElementById("para");

button.addEventListener("click",()=>{
    para.textContent = "Text has been changed";
})

//Task 2:)
document.getElementById('myImage').addEventListener('dblclick',function(){
    var img = document.getElementById('myImage');
    if(img.style.display === 'none'){
        img.style.display = 'block';

    }
    else{
        img.style.display='none';
    }
});

//Activity 2 : Mouse Events

//Task 3:
document.getElementById('myElement').addEventListener('mouseover',function(){
    this.style.backgroundColor = 'lightblue';
});

//Task 4:
document.getElementById('myElement').addEventListener('mouseout',function(){
    this.style.backgroundColor = 'lightgray';
});

//Activity 3 :Keyboard Events

//Task 5:
document.getElementById('inputField').addEventListener('keydown',function(event){
    console.log('key pressed :',event.key);
});
//Task 6:
document.getElementById('input').addEventListener('keyup',function(){
    var currentValue = this.value;
    document.getElementById('displayPara').textContent = 'currentValue :' + currentValue;
});

//Activity 4 : Form Events

//Task 7:
document.getElementById('myFrom').addEventListener('submit',function(event){
    event.preventDefault();

    var formData = newFormData(event.target);

    var formObject = {};
    formData.forEach(function(value,key){
        formObeject[key] = value;
    });
    console.log(formObject);
});

//Task 8:
document.getElementById('mySelect').addEventListener('change',function(){
    var selectedValue = this.value;

    document.getElementById('selectedValue').textContent = 'selectedValue: ' + selectedValue;
});

//Activity 5: Event Delegation

//Task 9 :

document.getElementById('myList').addEventListener('click',function(event){
    if(event.target && event.target.nodeName === 'LI'){
        console.log('Clicked item text:',event.target.textContent);
    }
});

//Task 10 :

 let itemCount = 0;

document.getElementById('parentElement').addEventListener('click',function(event){

    if(event.target && event.target.nodeName === 'LI'){         console.log('Clicked item text:',event.target.textContent);
     }
});

document.getElementById('addButton').addEventListener('click',function(){    const newItem = document.createElement('li');
    newItem.textContent = 'Item' + (++itemCount);

 document.getElementById('dynamicList').appendChild(newItem);

 });



