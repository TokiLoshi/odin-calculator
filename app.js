function add(num1, num2)
{
  console.log('Function to add')
  const answer = num1 + num2
  return answer
}

function subtract(num1, num2)
{
  console.log('Function to subtract')
  const answer = num1 - num2
  return answer
}

function multiply(num1, num2)
{
  console.log('Function to multiply')
  const answer = num1 * num2
  return answer
}

function divide(num1, num2)
{
  console.log('Function to multiply')
  let answer;
  if (num2 === 0){
    answer = "You can't divide by zero"
  }
  else {
    answer = num1 / num2
  }
  return answer
}

function operate(firstNum, operator, secondNum){
  console.log(`First number: ${firstNum}`)
  console.log(`Second number: ${secondNum}`)
  console.log(`Operator: ${operator}`)

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
  let firstNum = "";
  let operand;
  console.log(`firstNum: ${firstNum}`)
  let secondNum = "";
  for(i=0; i <= lengthInput - 1; i++){
    if (problem[i] === ' ' && typeof operand === undefined){
      console.log(`We have a space at ${i}`)
      firstNum = firstNum + problem[i]
      console.log(`First number where operand is not defined: ${firstNum}`)
    }
    else if (problem[i] === '+' || problem[i] === '-' || problem[i] === '*' || problem[i] === '/'){
      operand = problem[i]
      console.log(`Operand is: ${operand}`)
    }
    if (operand) {
      secondNum = secondNum + problem[i]
    }
    console.log(`${i} is ${problem[i]}`)
  }
  console.log(`First number: ${firstNum}`)

}

// Store everything in array 
function getInput(){
  console.log(`Time to get input`)
  // Add eventlisteners to all buttons

  let userInput = []

  const screen = document.querySelector('.screen')

  // Get the number buttons 
  const buttons = document.querySelectorAll('.numbutton')
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const numclick = button.id

    // Handle if clear button was used - should get rid of the zero
    if (userInput[0] === 0){
      console.log("First number is 0")
      userInput = []
    }
    userInput.push(numclick)
    screen.textContent = userInput.join(' ')
    console.log(`Button id: ${numclick}`)
    console.log(`UserInput: ${userInput}`)
    
  })
})

const operations = document.querySelectorAll('.opbutton')
operations.forEach((button) => {
  button.addEventListener('click', () => {
    const opclick = button.id
    if (opclick === 'equal'){
      parseInput(userInput.join(' '))
      userInput = [0]
    }
    else if (opclick === 'plus'){
      userInput.push('+')
    }
    else if(opclick === 'minus'){
      userInput.push('-')
    }
    else if(opclick === 'divide'){
      userInput.push('/')
    }
    else if(opclick === 'multiply'){
      userInput.push('x')
    }
    else if(opclick === 'clear'){
      console.log
      userInput = [0]
    }
    else {
     
      console.log("No equals button yet")
    userInput.push(opclick)
    
    }
    console.log(`Op clicked: ${opclick}`)
    console.log(`User input: ${userInput}`)
    screen.textContent = userInput.join(' ')
  })
})
 
}


console.log("Testing the operator function")
let numberOne = 20
let operand = '+'
let numberTwo = 4
const answer = operate(numberOne, operand, numberTwo)
console.log(`Answer is ${answer}`)

let input = getInput()
console.log(`What's being returned: ${input}`)