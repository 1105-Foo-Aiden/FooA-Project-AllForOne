let userInput = document.getElementById('UserInput')
let Btn = document.getElementById('submitBtn')
let result = document.getElementById('result');

Btn.addEventListener('click',  () =>{
     ApiCall(userInput.value)
})

const ApiCall = async (name) =>{
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/Hello/${name}`)
    const data = await promise.text()
    console.log(data)
    result.textContent = data
}