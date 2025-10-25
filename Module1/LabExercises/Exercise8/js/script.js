// Default Dice image
let baseImageUrl = './assets/images/dices';
let diceValue = 1;
let imageSection = document.getElementById("dice-image");
let imageTag1 = document.createElement('img');
let imageTag2 = document.createElement('img');//if another dice needed

let diceType = document.getElementById("diceType");
let rollBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");

let resultValue = document.getElementById("resultValue");

/** --------------------------
 * Creating Specification functions 
 * to define functions without body
 *  --------------------------
 */
//specification for getting random number
function rollDice() {}

/** --------------------------
 * Dice image rendering using number type and generated numbers
 *  --------------------------
 */
function diceRender(diceNumber){
    //if image section has already value then its first child should be removed
    while(imageSection.firstChild){ imageSection.removeChild(imageSection.firstChild) }

    let diceValue1 = 0;
    let diceValue2 = 0;
    
    if(diceNumber > 6){
        diceValue1 = 6; 
        diceValue2 = diceNumber - 6;
        
        //first dice
        imageTag1.src = `${baseImageUrl}/0${diceValue1}.png`;
        imageSection.appendChild(imageTag1);

        //second dice
        imageTag2.src = `${baseImageUrl}/0${diceValue2}.png`;
        imageSection.appendChild(imageTag2);    

    }else if(diceNumber <= 6){
        diceValue1 = diceNumber;
        //only first dice
        imageTag1.src = `${baseImageUrl}/0${diceValue1}.png`;
        imageSection.appendChild(imageTag1);
    }
    
}

/** --------------------------
 * Creating Testing functions Suite
 * with test cases for rollDice random number genrator
 *  --------------------------
 */
function runTests(){
    //rolling dice for multiple times as rollDice function result random numbers for each time.
    for(let i = 0 ; i <=50; i++){
        if (rollDice(6) < 1 || rollDice(6) > 6) {
            throw new Error("Test failed: rollDice(6) out of range, expected 1-6");
        }

        if (rollDice(10) < 1 || rollDice(10) > 10) {
            throw new Error("Test failed: rollDice(10) out of range, expected 1-10");
        }

        if(rollDice(0) !==0){
            throw new Error("Test failed: rollDice(0) should return 0, for invalid sides");
        }

        if(rollDice(-6) !==0){
            throw new Error("Test failed: rollDice(0) should return 0, for invalid sides");
        }
    }
    

    

    console.log("All test cases passed!")
}

/** --------------------------
 *  Main Functions
 *  Write the Code (Actual Implementation)
 *  --------------------------
 */
//gives a random number starting 1 according to dice max size 6 or 10
function rollDice(diceMaxSize){
    if(!Number.isInteger(diceMaxSize) || diceMaxSize < 1){
        return 0;
    }
    return Math.floor(Math.random() * diceMaxSize + 1)
}


/** --------------------------
 *  Event Listeners actions
 *  --------------------------
 */
//calling onclick add event listener to do event
rollBtn.addEventListener('click', () => {
    const diceSize = parseInt(diceType.value, 10);//taking value of dice type with base 10 2 digit integer 
    const value = rollDice(diceSize); //calling function to get random number
    
    //setting timeout to execute calling diceRender image function on 600ms
    setTimeout(() => {
        diceRender(value);
        resultValue.textContent = value;
    }, 600);
    
    
});

//resetting to default value
resetBtn.addEventListener('click', () => {
    const diceSize = 6;
    diceType.value = 6
    const value = rollDice(diceSize);
    diceRender(value);
    resultValue.textContent = value;
})

/** --------------------------
 * Executing Rendering with default diceValue 
 * and Test suite
 *  --------------------------
 */

diceRender(diceValue)

try{
    runTests();//calling test suite
}catch(err){
    console.error("Test case failed", err.message);
}




