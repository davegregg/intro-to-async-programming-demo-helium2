// Synchronous code

// "sync": together, aligned, sequential, matched up, step-by-step, harmony, accord
// "chrono": time

// Asynchronous code
// "A-" means "not"

// So...
"Synchronous code executes reliably, one after the other."
"Asynchronous code will run LATER, perhaps even at an unknown time."

console.log("First in order")
setTimeout(() => console.log("Seventh in order"), 5000)
setTimeout(() => console.log("Third in order"), 0)
setTimeout(() => console.log("Fourth in order"), 0)
setInterval(() => {}, 0) // Async code is non-blocking. This is an infinite loop which DOESN'T block other things from happening.
setTimeout(() => console.log("Fifth in order"), 0)
setTimeout(() => console.log("Sixth in order"), 1000)
console.log("Second in order")

let mainElement = document.querySelector("main")
let searchTextbox = document.querySelector("#search-text")
let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", () => {
    let searchTerm = searchTextbox.value.toLowerCase()
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(response => response.json()) 
        .then(pokemon => {
            console.log(pokemon)
            
            let imgElement = document.createElement("img")
            imgElement.src = pokemon.sprites.front_default

            mainElement.append(imgElement)
        })
})
