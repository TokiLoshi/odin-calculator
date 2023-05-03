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
    answer = "You can't divide by zero"
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
  let firstNum = "";
  let operand = "";
  let secondNum = "";
  let answer = 0;
  let loopNumOne = "";
  let nextTwo = "";

  for(i=0; i <= lengthInput - 1; i++){
    if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      // If we have an operators we want to assign each
      operand = problem[i]
      if (firstNum !== "") {
        console.log("First num is not an empty string")
    
        firstNum = parseInt(answer);
        console.log(`First num should be answer of ${answer}`)
      }
      else{
        console.log("You got an empty string")
        
        firstNum = problem.slice(0, i)
        loopNumOne = parseInt(firstNum.join('').replace(' ', ''))
        console.log(`First num in conditional: ${loopNumOne}`)
      }
      // firstNum = problem.slice(0, i)
      secondNum = problem.slice(i+1, lengthInput)

      // Clean everything up 
      // loopNumOne = parseInt(firstNum.join('').replace(' ', ''))
      nextTwo = parseInt((secondNum.join('').replace(' ', '')).replace(' ', ''))
      console.log(`First loop out of conditional: ${loopNumOne}`)
      console.log(`Loop second num cleaned: ${nextTwo}`)
      answer += operate(loopNumOne, operand, nextTwo)
      console.log(`Updating answer after cleaned second number: ${answer}`)
      // i++
    }
    
    console.log(`After if statement updating answer with: ${answer}`)

    console.log(`Round of loop ${i} is number ${problem[i]}`)
  }
  if (operand !== ""){
  console.log(`Answer after loop ${answer}`)
}
  // let getNum = parseInt(firstNum.join('').replace(' ', ''))
  // console.log(`After loop firstnum: ${firstNum}`)
  // console.log(getNum)
  // console.log(`After loop operand: ${operand}`)
  
  // console.log(`After loop second num: ${secondNum}`)
  // let nextNum = parseInt((secondNum.join('').replace(' ', '')).replace(' ', ''))
  // console.log(nextNum)

  // const firstSum = operate(getNum, operand, nextNum)
  // console.log(`ANSWER TO FIRST SUM: ${firstSum}`)
  return answer;
  return firstSum;
}

// Store everything in array 
function getInput(){
  // Add eventlisteners to all buttons
  let userInput = []

  // Update screen as user adds input
  const screen = document.querySelector('.screen')

  // Get the number buttons 
  const buttons = document.querySelectorAll('.numbutton')
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const numclick = button.id

    // Handle if clear button was used - should get rid of the zero
    if (userInput[0] === 0){
      userInput = []
    }
    userInput.push(numclick)
    screen.textContent = userInput.join(' ')
    
  })
})

const operations = document.querySelectorAll('.opbutton')
operations.forEach((button) => {
  button.addEventListener('click', () => {
    const opclick = button.id
    if (opclick === 'equal'){
      userInput.join(' ')
      let answer = parseInput(userInput)
      console.log(`We got the answer back in operations function: ${answer}`)
      userInput = [answer]
      screen.textContent = answer
      
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
      userInput = [0]
    }
    else {
      userInput.push(opclick)
    }
    // Update screen
    screen.textContent = userInput.join(' ')
  })
})
 
}

let input = getInput()
if (input){
  console.log(`What's being returned: ${input}`)
}
