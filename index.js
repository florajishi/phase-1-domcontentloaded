// Your code goes here
document.addEventListener('DOMContentLoaded' , () =>{ //the complete function to execute any js that runs after HTML done loading
    console.log("The DOM has loaded!")
    let text = document.getElementById('text')
    text.textContent = "This is really cool!"
    console.log(text)
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
)