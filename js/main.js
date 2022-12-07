// let img = document.getElementsByClassName("one");
// let img = document.getElementById("beans");

// function enlargeImg() {
//     img.style.transform = 'scale(1.5)';
//     img.style.transition = "transform 0.25s ease";
//     img.style.display = "inline-block"
// }

// document.getElementsByClassName

// $(document).ready(function(){
//     $('.toggle').click(function(){
//         $('.menu').toggleClass('active');
//     });
// });

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

