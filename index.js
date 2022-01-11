const toggler = document.getElementById("toggler");
const main = document.getElementById("main");
const hand = document.getElementById("solidHand");
const arrow = document.getElementById("nacArrow");
const navlinks = document.querySelectorAll('.navlink')

window.addEventListener('resize', (e) => { e.preventDefault()})

toggler.addEventListener("click", () => {
  main.classList.toggle("showNav");
//   hand.classList.toggle("showNav");
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        main.classList.remove('showNav')
        hand.classList.remove('showNav')
    })
})
