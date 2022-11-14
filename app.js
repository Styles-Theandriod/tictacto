let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msg = document.getElementById("message");
let letter = [ "X"];
// console.log(letter[0]);
//winning pattern arrays
//winning pattern array
let winningPattern = [
 [0, 1, 2],
 [0, 3, 6],
 [2, 5, 8],
 [6, 7, 8],
 [3, 4, 5],
 [1, 4, 7],
 [0, 4, 8],
 [2, 4, 6],
];
 
//player "X" Plays first
 
let xTurn = true;
let count = 0;
 

 
//Disable All Buttons
const disableButtons = () => {
 btnRef.forEach((element) => (element.disabled = true));
 //enable popup
 popupRef.classList.remove("hide");
};
 
//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
 btnRef.forEach((element) => {
 element.innerText = "";
 element.disabled = false;
 });
 popupRef.classList.add("hide");
};

//This function will be excuted when a player wins
const winFunction = () =>{
    disableButtons();
    if(letter[0] = "X"){
        msg.innerHTML ="Player X won";
    }else if(letter[0] = "X"){
        msg.innerHTML = "Player O won ";       

    }};

// Function for draw 
const drawFunction = () => {
    disableButtons();
    msg.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// New Game 
newgameBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener('click', () => {
    count = 0
    enableButtons();
});

//Win logic
const winChecker = () => {
    //Loop through all the win pattern
    for(let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //Check if element are filled
        //If 3 empty elements are the same and would give as should
        if(element1 != "" && (element2 != "") && (element3 != "")){
            if(element1 == element2 && element2 == element3){
                //If all 3 buttons have the same value to winFunction
                winFunction(element1)
            }
        }
    }
};

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(xTurn){
            xTurn = false;
            //Display X
            element.innerText = "X";
            element.disabled = true;
        }else{
            xTurn = true;
            //Display O 
            element.innerText = "O";
            element.disabled = true;
        }
        //Increment count on each click
        count +=1;
        if (count == 9){
            drawFunction();
        }
        //check for win on every click
        winChecker();
    });
});

//Enable Buttons and disable popup on page load
window.onload = enableButtons;


