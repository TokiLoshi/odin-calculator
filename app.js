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
  let loopNumOne = 0;
  let nextTwo = 0;

  for(i=0; i <= lengthInput - 1; i++){ 
    console.log(`Loop iteration: ${i}`)

    // If we have an operand we can do math
    if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      console.log(`We have an operand ${problem[i]} at iteration ${i}`)
      operand = problem[i]
      
      // if the count is zero this is our first time assigning firstNum
      if (count === 0){
        console.log(`This is our first time assigning firstNum (currently ${firstNum})`)
        console.log(`Current index: ${i} and number before it: ${problem[i-1]} and slice for first num is: ${problem.slice(0, (i))}`)
        firstNum = parseInt(problem.slice(0, i).join(''))
        console.log(`First number assigned: ${firstNum}`)
        count++
      }

      // Else the first num should be the answer 
      else {
        console.log(`Count is not zero: ${count}`)
        firstNum = answer
        console.log(`first num has been set to answer ${answer}`)
      }
      console.log("Time to set the second number")
      
      // Get the rest of the array to parse
      let remainingArray = problem.slice(i+1)
      console.log(`Remaining array: ${remainingArray}`)
      let nextInArray = i + 1

      // If there is another operand in the array get the next index of it
      if (remainingArray.includes('+')){
        console.log(`Found another operand in ${remainingArray} it is ${remainingArray[i]} at ${i}`)
        
        let nextOperator = remainingArray.findIndex((nextOperator) => 
        nextOperator === '+')
        console.log(`Next operator index at: ${nextOperator}`)
        // Second number is slice of operand index + 1 to the next index
        secondNum = parseInt(remainingArray.slice(nextOperator - 1))
        
      }
      else{
        console.log("No other operand")
        // Else the second number is the rest of the array 
        secondNum = parseInt(remainingArray)
        console.log(`Second number with no remaining array: ${secondNum}`)
        // console.log(`Time to calculate the answer with ${firstNum} a ${typeof firstNum} operator ${operand} and ${secondNum} a ${typeof secondNum}`)
        // answer = operate(firstNum, operand, secondNum)
        // console.log(`Answer is: ${answer}`)
      }
      console.log(`Time to calculate the answer with ${firstNum} a ${typeof firstNum} operator ${operand} and ${secondNum} a ${typeof secondNum}`)
      answer = operate(firstNum, operand, secondNum)
      console.log(`Answer is: ${answer}`)
     
      
      
      // Answer should be updated with operate on first and second number
    }

  }

  // for(i=0; i <= lengthInput - 1; i++){
  //   console.log(`Loop: ${i}: dealing with: ${problem[i]}`)
    
  //   // If we have an operators we want to assign each
  //   if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
      
  //     // Assign the operator
  //     operand = problem[i]
  //     console.log(`Operand ${problem[i]} in iteration ${i} of the loop`)

  //     // If it's not 0 then it should be updated to the answer?
  //     if (firstNum !== 0) {
  //       console.log(`First num is already calculated ${firstNum} and can be updated`)
  //       firstNum = parseInt(answer);
  //       console.log(`First num should be answer of ${answer}`)
  //     }
  //     else{
  //       firstNum = problem.slice(0, i)
  //       loopNumOne = parseInt(firstNum.join('').replace(' ', ''))
  //       console.log(`First Num ${firstNum} hasn't been set before`)
  //       console.log(`Setting loop for first timeLoop number one: ${loopNumOne}`)
  //     }

      // Check the first number 
      // Determine if there's another operand in the array
      // If there is then get the index of it
      // Set the second number from this index until that index 
      // Operate 
      // Update answer 
  //   }
  // }

      // Commenting this all out for now 
  //     console.log(`Outside of conditionals  first num before setting: ${firstNum}`)
  //     console.log(`Outside of conditionals second num before setting ${secondNum}`)
  //     firstNum = problem.slice(0, i)
  //     secondNum = problem.slice(i+1, lengthInput)
  //     console.log(`first num after setting: ${firstNum}`)
  //     console.log(`second num after setting ${secondNum}`)

  //     loopNumOne = parseInt(firstNum.join('').replace(' ', ''))
  //     nextTwo = parseInt((secondNum.join('').replace(' ', '')).replace(' ', ''))
  //     answer += operate(loopNumOne, operand, nextTwo)
  //     count +=1
  //     firstNum = answer
      
  //     console.log(`First loop out of conditional: ${loopNumOne}`)
  //     console.log(`Loop second num cleaned: ${nextTwo}`)
  //     console.log(`Updating answer after cleaned second number: ${answer}`)
  //   }
    
  //   console.log(`After if statement updating answer with: ${answer}`)
  //   console.log(`End of loop round ${i} is number ${problem[i]}`)
  // }
  // if (count >= 1){
  //   console.log(`We should already have first num ${firstNum} secondNum ${secondNum} operand ${operand} and answer ${answer}`)
  //   if (problem[i] === '+' || problem[i] === '-' || problem[i] === 'x' || problem[i] === '/'){
  //     console.log(`We have our next operator? ${problem[i]}`)
  //   }
  // }


  // Older - was working without this 
  // let getNum = parseInt(firstNum.join('').replace(' ', ''))
  // console.log(`After loop firstnum: ${firstNum}`)
  // console.log(getNum)
  // console.log(`After loop operand: ${operand}`)
  
  // console.log(`After loop second num: ${secondNum}`)
  // let nextNum = parseInt((secondNum.join('').replace(' ', '')).replace(' ', ''))
  // console.log(nextNum)

  // const firstSum = operate(getNum, operand, nextNum)
  // console.log(`ANSWER TO FIRST SUM: ${firstSum}`)
  // End older - was working without this 


  return answer;
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
