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
  let firstNum = 0;
  let operand = "";
  let secondNum = 0;
  let answer = 0;
  let count = 0;

  for(i=0; i <= lengthInput - 1; i++){ 
    console.log(`Loop iteration: ${i}`)

    // If we have an operand we can do math
    if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      console.log(`We have an operand ${problem[i]} at iteration ${i}`)
      firstNum = parseInt(problem.slice(0, i).join(''))
      operand = problem[i]
      secondNum = parseInt(problem.slice(i+1))
      console.log(`First num: ${firstNum}`)
      console.log(`Operand: ${operand}`)
      console.log(`Second num: ${secondNum}`)
      let remainingArray = problem.slice(i+1)
      console.log(`RemainingArray ${remainingArray}`)

      
      // Everything here is code to allow it to pass the full array
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
      
      // Answer should be updated with operate on first and second number
      answer = operate(firstNum, operand, secondNum)
      console.log(`Answer is: ${answer}`)
    }
  }
  return answer;
}

// Store everything in array 
function getInput(){
  // Add eventlisteners to all buttons
  let userInput = []

  // Update screen as user adds input
  const screen = document.querySelector('.screen')
  let firstOperator = ""
  let secondOperator = ""

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
    console.log(`Length of user Input: ${userInput.length}`)
    const opclick = button.id
    // console.log(`Button clicked: ${opclick}`)
    // console.log(`UserInput so far: ${userInput}`)

    // One option might be to create two operators and store them
    // If User Input greater than two we evaluate 

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
    // console.log(`Checked for + - x and / and we have userInput: ${userInput}`)
    // console.log(`First operator: ${firstOperator}`)
    // console.log(`Second Operator: ${secondOperator}`)
    // console.log(`Length of userinput after assigning operator: ${userInput.length}`)
    if (firstOperator !== '' && secondOperator !== ''){
      let toCompute = userInput.slice(0, (userInput.length -1))
      console.log(`To compute: ${toCompute}`)
      answer = parseInput(toCompute)
      console.log(`Getting an answer: ${answer}`)
      userInput = [answer]
      userInput.push(secondOperator)
    }

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
    //Update screen
    screen.textContent = userInput.join(' ')
  })
})
 
}

let input = getInput()
if (input){
  console.log(`What's being returned: ${input}`)
}
