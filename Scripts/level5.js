let userInput1 = document.getElementById('userInput1')
let userInput2 = document.getElementById('userInput2')
let userInput3 = document.getElementById('userInput3')
let userInput4 = document.getElementById('userInput4')
let userInput5 = document.getElementById('userInput5')
let userInput6 = document.getElementById('userInput6')
let userInput7 = document.getElementById('userInput7')
let userInput8 = document.getElementById('userInput8')
let userInput9 = document.getElementById('userInput9')
let result = document.getElementById('result')

let btn = document.getElementById('submitBtn')
btn.addEventListener('click', ()=>{
    ApiCall(userInput1.value, userInput2.value, userInput3.value, userInput4.value, userInput5.value, userInput6.value, userInput7.value, userInput8.value, userInput9.value)
})


const ApiCall = async (name, place, adverb, name2, numberOf, thing, adjective, verb, verb2) =>{
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/MadLib/${name}/${place}/${adverb}/${name2}/${numberOf}/${thing}/${adjective}/${verb}/${verb2}?adverb=${adverb}`)
    const data = await promise.text()
    console.log(data)
    result.textContent = data
}