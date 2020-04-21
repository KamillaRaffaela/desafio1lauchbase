const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute (id)
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/GykTLqODQuU ${videoId}`
    })
}

document.querySelector("loser-modal").addEventListener("click", function() {
    modalOverlay.classList.removeEventListener("active")
    modalOverlay.querySelector("iframe").src = ("")
} 
