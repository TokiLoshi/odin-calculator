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
  
  // Set up the variables we'll need to change
  let problem = Array.from(userInput)

  // Remove any commas from the array
  let lengthInput = problem.length
  let firstNum = 0;
  let operand = "";
  let secondNum = 0;
  let answer = 0;

  for(i=0; i <= lengthInput - 1; i++){ 

    // If we have an operand we can do math
    if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      // First number should be everything before the operand and remove any commas
      firstNum = Number.parseFloat(problem.slice(0, i).join('').replace(',', ''))
      operand = problem[i]
      // Second number should be everything after the operand
      secondNum = Number.parseFloat(problem.slice(i+1).join(''))

      // Calculate the answer using operator function
      answer = operate(firstNum, operand, secondNum)

      // Handle error cases dividing by zero and answer being not a number
      if (answer === "Error! Dividing by zero? 😔"){
        answer = "Error! Dividing by zero? 😔"
      }
      else if (isNaN(answer)) {
        answer = "Error"
      }
      
      // Handle possible decimal point screen overflow
      else if (answer - Math.floor(answer) !== 0){
        // Find the length of everything after the decimal to cap decimals at 3 places
        let tempAnswer = answer.toString()
        let decimalPoint = tempAnswer.indexOf(".")
        let decimalPart = tempAnswer.split(".")[1]
        
        if (decimalPoint && decimalPart.length > 3){
          answer = answer.toFixed(3)
        }
      }
      
      // If number is whole make it an int so we don't see a decimal point
      else { 
        answer = parseInt(answer)
      }
      return answer;
    }
  }
  // return answer;
}

// Store everything in array to display on screen
function getInput(){
  let userInput = []
  const screen = document.querySelector('.screen')
  let firstOperator = ""
  let secondOperator = ""
  let zeroStatus = false

  // Get value of the number buttons 
  const buttons = document.querySelectorAll('.numbutton')
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const numclick = button.id
    userInput.push(numclick)
    screen.textContent = userInput.join(' ') 
  })
})

// Get value of the operation buttons 
const operations = document.querySelectorAll('.opbutton')
operations.forEach((button) => {
  button.addEventListener('click', () => {
    const opclick = button.id

    // Assign operators to buttons being clicked 
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
      let point = document.querySelector('#point')
      userInput.push('.')
    }
    
    // Point should be disabled if it's already in use
    if (userInput.includes('.')){
      let pointIndex = userInput.indexOf('.')
      let inputAfterPoint = userInput.slice(pointIndex + 1)
      if (firstOperator === ''){
        point.setAttribute('disabled', true)
        point.style.background = 'grey'
      }
      else if(firstOperator !== '' && secondOperator === '' && inputAfterPoint.includes('.')){
        point.disabled = true;
        point.style.background = 'grey';
      }
      else{
        point.disabled = false;
        point.style.background = 'rgb(137, 28, 253)';
      }
    }

    // Get the answer if equals button clicked
    if (opclick === 'equal' && firstOperator !== ''){
      answer = parseInput(userInput).toLocaleString("en-US")
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
    }

    // User wants to evaluate multiple numbers - do first pair
    let lastElement = userInput.slice(-1)
    if (firstOperator !== '' && secondOperator !== '' && !lastElement.includes('.')){
      let endUnit = userInput[userInput.length - 1]
      if (typeof endUnit === NaN){
        let toCompute = userInput.slice(0, (userInput.length -1))
      answer = parseInput(toCompute).toLocaleString("en-US")
      }
      else{
        answer = parseInput(userInput).toLocaleString("en-US")
      }
      userInput = [answer]

      // Don't let the uzer Divide by zero
      if (answer === "Error! Dividing by zero? 😔" || userInput.includes("Error! Dividing by zero?")){
        // userInput = userInput
        // Disable buttons from further operations 
        disableButtons()
        zeroStatus = true;
      }
      // else {
      if (secondOperator !== ''){
        if (answer === "Error! Dividing by zero? 😔"){
          userInput = [answer]
          disableButtons()
          zeroStatus = true;
        }
        
        else if (isNaN(userInput)){
          if (userInput.includes(',')){
          userInput = ["ERROR"]
          disableButtons()
          zeroStatus = true;
        }
        }
      userInput.push(secondOperator)
    }
    }

    // Remove everything if user wants to clear 
    if (opclick === 'clear'){
      userInput = []
      firstOperator = ""
      secondOperator = ""
      point.disabled = false;
      point.style.background =  'rgb(137, 28, 253)';
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
  }
  })
})
}

let input = getInput()

// Disable for points and if 
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
        let pointbutton = document.querySelector('#point')
        pointbutton.setAttribute('disabled', true); 
        pointbutton.style.background = 'grey';

}

      // // From ParseInput Function: 
      // This allowed users to input multiple operations while the code above evaluates only on number pair at a time
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