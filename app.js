function add(num1, num2)
{
  const answer = num1 + num2
  return answer
}

function subtract(num1, num2)
{
  const answer = num1 - num2
  return answer
}

function multiply(num1, num2)
{
  const answer = num1 * num2
  return answer
}

function divide(num1, num2)
{
  let answer;
  if (num2 === 0){
    answer = "Error! Dividing by zero? 😔"
  }
  else {
    answer = num1 / num2
  }
  return answer
}

// Do the first addition
function operate(firstNum, operator, secondNum){
  if (operator === '+'){
    return add(firstNum, secondNum)
  }
  else if (operator === '-'){
    return subtract(firstNum, secondNum)
  }
  else if(operator === 'x'){
    return multiply(firstNum, secondNum)
  }
  else if (operator === '/'){
    return divide(firstNum, secondNum)
  }
  else {
    return `Something else happened`
  }
}

function parseInput(userInput){
  
  console.log(`In parse function with ${userInput}`)
  
  let problem = Array.from(userInput)
  const lengthInput = problem.length
  let firstNum = 0;
  let operand = "";
  let secondNum = 0;
  let answer = 0;

  for(i=0; i <= lengthInput - 1; i++){ 

    // If we have an operand we can do math
    if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      console.log(`We have an operand ${problem[i]} at iteration ${i}`)
      firstNum = parseFloat(problem.slice(0, i).join(''))
      operand = problem[i]
      secondNum = parseFloat(problem.slice(i+1).join(''))

      console.log(`First num: ${firstNum}`)
      console.log(`Type first num: ${typeof firstNum}`)
      console.log(`Operand: ${operand}`)
      console.log(`Type of operand: ${operand}`)
      console.log(`Second num: ${secondNum}`)
      console.log(`Type of second num: ${typeof secondNum}`)

      // Answer should be updated with operate on first and second number
      answer = operate(firstNum, operand, secondNum)
      if (isNaN(answer)) {
        console.log("***Answer returned not a Number !$#%&*")
        answer = "Error"
      }
      // Check if the number is whole or decimal to parse int or float 
      else if (answer - Math.floor(answer) !== 0){
        console.log(`This is a decimal ${answer - Math.floor(answer)}`)
        
        // Find the index of decimal point if more than 10 places cap to 5
        let tempAnswer = answer.toString()
        let decimalPoint = tempAnswer.indexOf(".")
        
        let decimalPart = tempAnswer.split(".")[1]
        console.log(`Decimal part ${decimalPart}`)
        console.log(`Decimal point ${decimalPoint}`)
       
        if (decimalPoint && decimalPart.length > 5){
          console.log(`What is this: ${decimalPart} and type ${decimalPart.length}`)
          answer = answer.toFixed(5)
        }
        console.log(`Index of decimal point ${decimalPoint}`)
        console.log(`Trying to split away from decimal point: ${decimalPart}`)

      }
      else { 
        console.log(`Looks like a whole number ${answer}`)
        answer = parseInt(answer)
      }
      console.log(`Answer from parse: ${answer} which is type ${typeof answer}`)
     
      return answer;
    }
  }
  // return answer;
}

// Store everything in array 
function getInput(){
  // Add eventlisteners to all buttons
  let userInput = []

  // Update screen as user adds input
  const screen = document.querySelector('.screen')
  let firstOperator = ""
  let secondOperator = ""
  let zeroStatus = false

  // Get the number buttons 
  const buttons = document.querySelectorAll('.numbutton')
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const numclick = button.id

    userInput.push(numclick)
    console.log(`UserInput has been updated by number button ${userInput}`)
    screen.textContent = userInput.join(' ')
    
  })
})

// Operation buttons 
const operations = document.querySelectorAll('.opbutton')
operations.forEach((button) => {
  button.addEventListener('click', () => {
    const opclick = button.id

    // Assign operators if clicked 
    if (opclick === 'plus'){
      userInput.push('+')
      if (firstOperator === ""){
        firstOperator = '+'
      }
      else{
        secondOperator = '+' 
      }
    }
    else if (opclick === 'minus'){
      userInput.push('-')
      if (firstOperator === ""){
        firstOperator = '-'
      }
      else{
        secondOperator = '-' 
      }
    }
    else if (opclick === 'multiply'){
      userInput.push('x')
      if (firstOperator === ""){
        firstOperator = 'x'
      }
      else{
        secondOperator = 'x' 
      }
    }
    else if (opclick === 'divide'){
      userInput.push('/')
      if (firstOperator === ""){
        firstOperator = '/'
      }
      else{
        secondOperator = '/' 
      }
    }
    else if (opclick === 'point'){
      console.log(`Need to deal with points`)
    }
    console.log(`End assigning operators in Event Listener: ${firstOperator} and second ${secondOperator}`)

    if (opclick === 'equal' && firstOperator !== ''){
      console.log(`User hit equals on ${userInput} where ${firstOperator} and second ${secondOperator}`)
      answer = parseInput(userInput)
      userInput = [answer]
      firstOperator = ''
      secondOperator = ''

      // Don't let them divide by zero
      if (answer === "Error! Dividing by zero? 😔" || userInput.includes("Error! Dividing by zero?")){
        userInput = userInput
        disableButtons()
        zeroStatus = true;
      }
      userInput = [answer]
      firstOperator = ''
      secondOperator = ''
      console.log(`After parsing equals answer we have first op ${firstOperator} which is a type ${typeof firstOperator} and second op ${secondOperator} a type of ${secondOperator} and ${userInput} which is type ${typeof userInput}`)
    }

    // User wants to evaluate multiple numbers - do first pair 
    if (firstOperator !== '' && secondOperator !== ''){
      console.log(`User Input before slicing to compute: ${userInput}`)
      console.log(`End unit: ${userInput[userInput.length - 1]}`)
      let endUnit = userInput[userInput.length - 1]
      if (typeof endUnit === NaN){
        let toCompute = userInput.slice(0, (userInput.length -1))
      console.log(`To compute: ${toCompute}`)
      answer = parseInput(toCompute)
      }
      else{
        console.log(`Else statement activated so no slicing just computing ${userInput} and op1 ${firstOperator} and 2nd op ${secondOperator}`)
        answer = parseInput(userInput)
      }
      // let toCompute = userInput.slice(0, (userInput.length -1))
      // console.log(`To compute: ${toCompute}`)
      // answer = parseInput(toCompute)
      console.log(`Getting an answer in else: ${answer} type ${typeof answer} to update user input ${userInput}`)
      userInput = [answer]
      console.log(`After answer first: ${firstOperator}`)
      console.log(`After anser second operator: ${secondOperator}`)
      console.log(`After getting answer the user in put is: ${userInput}`) 


      // Don't let the uzer Divide by zero
      if (answer === "Error! Dividing by zero? 😔" || userInput.includes("Error! Dividing by zero?")){
        userInput = userInput
        // Disable buttons from further operations 
        disableButtons()
        zeroStatus = true;
      }
      // else {
      if (secondOperator !== ''){
        if (isNaN(userInput)){
          userInput = ["ERROR"]
          console.log(`We got an error: ${userInput} please disable buttons`)
          disableButtons()
          console.log("Finished running disable buttons function")
          zeroStatus = true;
        }
      
      console.log(`We're running else statment in line 213 on ${userInput} where firstop ${firstOperator} and ${secondOperator}`)
      userInput.push(secondOperator)
    }
    }

    // Remove everything if user wants to clear 
    if (opclick === 'clear'){
      userInput = []
      firstOperator = ""
      secondOperator = ""
      console.log(`User wanted to clear and it is now ${userInput.length}`)
      if (zeroStatus === true) {
      location.reload();
      }
    }

    //Update screen
    if (userInput.length === 0){
      screen.textContent = 0
    }
    else {
      
    screen.textContent = userInput.join(' ')
    console.log(`Updating the screen where length of user input not zero: ${userInput} and type ${typeof userInput}`)
   
  }
  console.log(`Operations done here? First op: ${firstOperator} second op: ${secondOperator} user input: ${userInput}`)
  })
})
 
}

let input = getInput()
if (input){
  console.log(`What's being returned: ${input}`)
}

function disableButtons() {
  let addbutton = document.querySelector('#plus')
        addbutton.setAttribute('disabled', true);
        addbutton.style.background = 'grey';
        let minusbutton = document.querySelector('#minus')
        minusbutton.setAttribute('disabled', true)
        minusbutton.style.background = 'grey';
        let multibutton = document.querySelector('#multiply')
        multibutton.setAttribute('disabled', true)
        multibutton.style.background = 'grey';
        let dividebutton = document.querySelector('#divide')
        dividebutton.setAttribute('disabled', true)
        dividebutton.style.background = 'grey';
        let equalbutton = document.querySelector('#equal')
        equalbutton.setAttribute('disabled', true);
        equalbutton.style.background = 'grey';
}


// Debugging: 
// Test only using equals after an operation
// 1) ***PASSES*** 1 (+) 2 (=) => 3 
// 2) ***PASSES*** 1 (+) 6 (=) => 7 (+) 3 (=) => 10

// Test using multiple operations 
// 3)  ***PASSES*** 1 (+) 4 (+) => 5 +

// Test using equals first and then multiple operations 
// 4) ***PASSES*** 1 (+) 5 (=) => 6 + 4 + => 10 + 
// 5) ***PASSES*** 1 (+) 6 (=) => 7 (+) 3 (+) => 10+ 5 (+) => 15

// Test using multiple operations first and then equals
// 6) ***PASSES*** 1 (+) 5 (+) => 6 (+) 4 (=) => 10

// 7) ***PASSES*** 1 (+) 5 (+) => 6 + 4 (=) => 10 (+) 5 (=) => 15
// 8) ***PASSES*** 1 (+) 5 (+) => 6 + 4 (=) => 10 (+) 5 (+) => 15+

// Test using equals first and then multiple operations then equals
// 9) ****PASSES*** 1 (+) 6 (=) => 7 + 3 + => 10 + 5 (=) => 15

// Test using equals first and then multiple operations then equals then multiple operations
// 10) ***PASSES**** 1 (+) 6 (=) => 7 (+) 3 (+) => 10 + 5 (=) => 15 (+) 5 (+) => 20+


    // This part of operator button from the getInput functions
    // else if (opclick === 'equal'){
    //   userInput.join(' ')
    //   let answer = parseInput(userInput)
    //   console.log(`We got the answer back in operations function: ${answer}`)
    //   userInput = [answer]
    //   screen.textContent = userInput
    // }
    // else if (opclick === 'plus'){
    //   operatorbutton = '+'
    //   userInput.push(operatorbutton)
    // }
    // else if(opclick === 'minus'){
    //   userInput.push('-')
    // }
    // else if(opclick === 'divide'){
    //   userInput.push('/')
    // }
    // else if(opclick === 'multiply'){
    //   userInput.push('x')
    // }
    // else if(opclick === 'clear'){
    //   userInput = [0]
    // }
    // else {
    //   userInput.push(opclick)
    // }





      // // From ParseInput Function: 
      // This allowed users to input multiple operations 
      // if(i === lengthInput -1){
      //   return answer}
      //   else{
      //     operand = problem[i]
      //   }
      
      // if the count is zero this is our first time assigning firstNum
      // if (count === 0){
      //   console.log(`This is our first time assigning firstNum (currently ${firstNum})`)
      //   console.log(`Current index: ${i} and number before it: ${problem[i-1]} and slice for first num is: ${problem.slice(0, (i))}`)
      //   firstNum = parseInt(problem.slice(0, i).join(''))
      //   console.log(`First number assigned: ${firstNum}`)
      //   count++
      // }

      // Else the first num should be the answer 
      // else {
      //   console.log(`Count is not zero: ${count}`)
      //   firstNum = answer
      //   console.log(`first num has been set to answer ${answer}`)
      // }
      // console.log("Time to set the second number")
      
      // Get the rest of the array to parse
      // let remainingArray = problem.slice(i+1)
      // console.log(`Remaining array: ${remainingArray}`)
      // let nextInArray = i + 1

      // If there is another operand in the array get the next index of it
      // if (remainingArray.includes('+')){
      //   console.log(`Found another operand in ${remainingArray} it is ${remainingArray[i]} at ${i}`)
      //   let nextOperator = remainingArray.findIndex((nextOperator) => 
      //   nextOperator === '+')
      //   console.log(`Next operator index at: ${nextOperator}`)
        // Second number is slice of operand index + 1 to the next index
      //   secondNum = parseInt(remainingArray.slice(nextOperator - 1))
        
      // }
      // else{
      //   console.log("No other operand")
      //   // Else the second number is the rest of the array 
      //   secondNum = parseInt(remainingArray)
      //   console.log(`Second number with no remaining array: ${secondNum}`)
      // }
      // console.log(`Time to calculate the answer with ${firstNum} a ${typeof firstNum} operator ${operand} and ${secondNum} a ${typeof secondNum}`)