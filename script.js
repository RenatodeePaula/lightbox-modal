const body = document.body
const button = document.querySelector('.on-off')
const circle = document.querySelector('#button-circle')
const h1 = document.querySelector('h1')
const galleryImages = document.querySelectorAll('.box-image')
const imageModal = document.querySelector('.modal-image')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close-modal')

galleryImages.forEach((element) => {      
        element.addEventListener('click', () => { 
            const indentImage = element.querySelector('.img').getAttribute('data-src')               
            imageModal.setAttribute('src', indentImage)  
            modal.style.display = "flex"
    })
})

button.addEventListener('click', function dayNig() {
    body.classList.toggle('night')
    h1.classList.toggle('night')
    button.classList.toggle('white-button-circle')
    circle.classList.toggle('black-button-circle')
})

const date = new Date()
const hour = date.getHours().toString()

if(hour < 6 || hour > 19) {
    body.classList.add('night')
    button.classList.add('white-button-circle')
    circle.classList.add('black-button-circle')
}

console.log(hour)
close.addEventListener('click', () => {
    modal.style.display = "none"
})
