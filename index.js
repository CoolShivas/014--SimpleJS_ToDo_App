/*// // // Starting of accessing the id's and classes by it's name.*/
    
let accessInputField = document.getElementById("inputField");
console.log(accessInputField); // <input type="text" id="inputField">

let accessAddBtn = document.querySelector(".add_Btn");
console.log(accessAddBtn); // <button class="add_Btn">Add</button>

// let accessListToDos = document.getElementsByClassName("listOfToDos");
// console.log(accessListToDos); // HTMLCollection [div.listOfToDos]; Here, we are unable to access the div and p tag;

let accessListToDos = document.querySelector(".listOfToDos");
console.log(accessListToDos); // <div class="listOfToDos"></div> ; Here, previously we are not able to access the p tag i.e., inside the div tag;

/*// // // Ending of accessing the id's and classes by it's name.*/



//////---------------------------------------------------------------------------------------------///////        


 /*// // // Starting of writing function to add ToDos.*/

 let additionOfToDOs = () => {
    console.log(accessInputField.value); // After add btn click then whatever the user enter on the inputField reflect on console;
    
    let pElem = document.createElement('p');
    pElem.textContent = accessInputField.value;
    console.log(pElem); // After add btn click => <p>adfasdfasdf</p>
    

    accessListToDos.append(pElem); // Pushing the pElem in the listToDos div in the p tag; And, get displayed on the screen;

    accessInputField.value = " "; // After writing and clicking add btn then clearing the inputField;

 };

 /*// // // Ending of writing function to add ToDos.*/


//////---------------------------------------------------------------------------------------------///////        


 /*// // // Starting of firing the event listener on add button.*/

 accessAddBtn.addEventListener('click', (() => {
    // console.log("Add Button Click"); // Add Button Click
    additionOfToDOs(); // Function Invocation or Calling;
 }));



 accessListToDos.addEventListener("click", ((event) => {
    console.log(event.target); // Targeting the p tag by mouse click; 
    
    let delAddedListToDos = event.target; // Assigning the delAddedListToDos to set the event.target;

    delAddedListToDos.remove(); // Removing the pElem from the listToDos div in the p tag; And, get removed from the screen;

}));


  /*// // // Starting of firing the event listener on add button.*/


//////---------------------------------------------------------------------------------------------///////        


