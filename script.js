const openContactButton = document.querySelectorAll('[data-contact-target]')
const closeContactButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const button = document.getElementById("dropdown-button");
const menu = document.getElementById("menu-hidden");

openContactButton.forEach(button => {
    button.addEventListener('click', () => {
      const contact = document.querySelector(button.dataset.contactTarget)
      openModal(contact)
    })
  })
  
  overlay.addEventListener('click', () => {
    const contacts = document.querySelectorAll('.contact.active')
    contact.forEach(contact => {
      closeModal(contact)
    })
  })
  
  closeContactButton.forEach(button => {
    button.addEventListener('click', () => {
      const contact = button.closest('.contact')
      closeModal(contact)
    })
  })
  
  function openModal(contact) {
    if (contact == null) return
    contact.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(contact) {
    if (contact == null) return
    contact.classList.remove('active')
    overlay.classList.remove('active')
  }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.padding = "20px, 0, 20px, 0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}

if (button){
  button.addEventListener("click", function(){
if (menu.classList.contains("show")) {
    menu.classList.remove("show");
} else {
    menu.classList.add("show");
}
});
};

const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);

