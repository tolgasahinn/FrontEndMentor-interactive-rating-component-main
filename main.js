const ratingcontainer = document.querySelector (".rating-container")
const thanksContainer = document.querySelector (".thank-you-state")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const ratesBtn = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden");
    ratingcontainer.style.display = "none";
})

rateAgain.addEventListener("click", () =>{
    thanksContainer.classList.add("hidden");
    ratingcontainer.style.display = "block";
})

ratesBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
        rating.style.color = "white";

    })
    
})
