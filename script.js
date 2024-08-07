/*Creating a 16x16 grid div */

// creating the div
const div1 = document.createElement(`div`);

//giving them ids
div1.id = `container1`

// appending them to the DOM
const containerbigdaddy = document.querySelector(`#container`)
containerbigdaddy.appendChild(div1);

// Function for creating more divs
function createdivs  () {for(i = 1; i < 320; i++)
    {const div1 = document.createElement(`div`);containerbigdaddy.appendChild(div1);div1.id = `container1`}}
createdivs ();
// Selecting all divs
const alldivs = document.querySelectorAll(`#container > div`);

// Function for creating hover effect
alldivs.forEach(div1 => {div1.addEventListener(`mouseover`,( ) => {div1.classList.add(`special`)})})



/*function createhovereffect () {div1.addEventListener(`mouseover`,() => {
    for (i = 0 ; i <= alldivs.length; i++) {
        
        alldivs[i].setAttribute
        ("style","background-color: red")}
    
})}
createhovereffect();*/


// Adding the button that will generate a div grid

const buttonselector = document.querySelector(`#button1`)
const prompt1 = prompt("choose between 0-100 squares","")
function creategridonclick () {buttonselector.addEventListener(`click`, 
    ( ) => {prompt1})
if (prompt1 >= 0 && prompt1 <= 100 ) {for(i = 1; i < prompt1; i++)
    {const div1 = document.createElement(`div`);containerbigdaddy.appendChild(div1);div1.id = `container1`}}
}
    creategridonclick () 