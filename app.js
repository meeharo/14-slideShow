var listImage = document.querySelectorAll('.listImage img')
var imageFeatures = document.querySelector('.imageFeatures img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0
updateImage(currentIndex)

function updateImage (index) {
    currentIndex = index
    imageFeatures.src = listImage[index].getAttribute('src')

    document.querySelectorAll('.image-item').forEach(item =>  {
        item.classList.remove('active')
    })

    listImage[index].parentElement.classList.add('active')
}

listImage.forEach((image, index) => {
    image.addEventListener('click', () => {
        imageFeatures.style.opacity = '0.2'
        
        setTimeout(() => {
            updateImage(index)
            imageFeatures.style.opacity = '1'
        }, 400)
        
    })
})

prevBtn.addEventListener('click', () => {
    currentIndex == 0 ? currentIndex = listImage.length - 1 : currentIndex--
    updateImage(currentIndex)

    // imageFeatures.style.animation = ''
    // setTimeout(() => {
    //     imageFeatures.style.animation = 'slidePrev 1s ease-in-out forwards'
    // }, 400)

})

nextBtn.addEventListener('click', () => {
    currentIndex == listImage.length - 1 ? currentIndex = 0 : currentIndex++
    updateImage(currentIndex)
})