let userInput = document.getElementById('UserInput1')
let Btn = document.getElementById('submitBtn')
let result = document.getElementById('result');

Btn.addEventListener('click',  () =>{
     ApiCall(userInput.value)
})

const ApiCall = async (word) =>{
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItWord/${word}`)
    const data = await promise.text()
    console.log(data)
    result.textContent = `The word in reverse is ${data}`
}