let userInput = document.getElementById('UserInput1')
let userInput2 = document.getElementById('UserInput2')
let Btn = document.getElementById('submitBtn')
let result = document.getElementById('result');

Btn.addEventListener('click',  () =>{
     ApiCall(userInput.value, userInput2.value)
})

const ApiCall = async (num1, num2) =>{
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/CompareNumbers/${num1}/${num2}`)
    const data = await promise.text()
    console.log(data)
    result.textContent = data
}