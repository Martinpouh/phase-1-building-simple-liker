const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelector('#modal').className = 'hidden'
const likeButtons = document.querySelectorAll('.like-glyph')

function myLikes() {
    likeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {

            if (event.target.innerHTML == EMPTY_HEART) {
                mimicServerCall("")
                    .then(function(resp) {

                        event.target.innerHTML = FULL_HEART
                        event.target.classList.add('activated-heart')
                    })

                .catch(function(error) {
                    let modal = document.querySelector('#modal')
                    modal.classList.remove('hidden')
                    modal.innerText = "Random server error. Try again."

                    setTimeout(() => {
                        modal.classList.add('hidden')
                    }, 3000);
                })

            } else {
                event.target.innerHTML = EMPTY_HEART
                event.target.classList.remove('activated-heart')
            }
        })
    })

}
myLikes()

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}