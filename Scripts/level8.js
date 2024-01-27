let userInput = document.getElementById('UserInput1')
let Btn = document.getElementById('submitBtn')
let result = document.getElementById('result');

Btn.addEventListener('click',  () =>{
     ApiCall(userInput.value)
})

const ApiCall = async (num1) =>{
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/8Ball/${num1}`)
    const data = await promise.text()
    console.log(data)
    result.textContent = data
}