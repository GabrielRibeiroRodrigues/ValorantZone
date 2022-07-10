
const nav = document.querySelector('#header nav')
const icons = document.querySelectorAll('nav .toggle')

for(const element of icons){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a');

for( const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}