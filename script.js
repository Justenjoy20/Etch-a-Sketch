// creating the div
const div1 = document.createElement(`div`);

//giving them classes
div1.classList.add = `grid-item`

// appending them to the DOM
const containerbigdaddy = document.querySelector(`#container`)
containerbigdaddy.appendChild(div1);

// Function for creating more divs
function createdivs  () {for(i = 1; i < 320; i++)
    {const div1 = document.createElement(`div`);
        div1.classList.add(`grid-item`)
        containerbigdaddy.appendChild(div1);
         
    }}
    createdivs  ()
// Changing dinamically the color
function randomizeColor () {  let color = 0xFFFFFF
    const random = Math.floor(Math.random()* color) 
    let randColor = random.toString(16)
    let finalColor = randColor.padStart(6, `0`);
return `#${finalColor.toUpperCase()}`}


// Function for creating hover effect
function hovereffect () { const alldivs = document.querySelectorAll(`#container > .grid-item`);
    alldivs.forEach(div1 => {div1.addEventListener(`mouseover`,( ) => {div1.style.backgroundColor = randomizeColor ()})})}
hovereffect ()

// Adding the button that will generate a div grid
const buttonselector = document.querySelector(`#button1`)
function creategridonclick() {
    buttonselector.addEventListener('click', () => {
        const prompt1 = parseInt(prompt("Choose between 0-100 squares", ""), 10);
        if (!isNaN(prompt1) && prompt1 >= 0 && prompt1 <= 100) {
            containerbigdaddy.innerHTML = ''; // Clear existing grid
            
            // Create new grid based on user input
            for (let i = 1; i <= prompt1 * prompt1; i++) {
                const div1 = document.createElement('div');
                div1.className = 'grid-item'; // Use a class instead of an ID
                containerbigdaddy.appendChild(div1);
            }
            
            // Reapply hover effect to new grid items
            hovereffect();
        } else {
            alert("Please enter a valid number between 0 and 100.");
        }
    });
}
    creategridonclick () 
    hovereffect();

    

   

