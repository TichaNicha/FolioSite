//animation
const svg = document.querySelector('.moon');

setTimeout(function() {
    svg.classList.remove('fade-in');

    svg.addEventListener('click', () => {
        svg.classList.add('bounce');
        
        setTimeout(() => {
          svg.classList.remove('bounce');
        }, 1000);
      });
}, 1300 );

// change to dropdown menu placeholder
const dropdown = document.querySelector(".about");

function changeText() {
  if (window.innerWidth > 768) {
    dropdown.textContent = "ABOUT";
  } else {
    dropdown.textContent = "DRP";
  }
}

function changeSvgSize() {
 if (window.innerWidth > 768) {
  svg.style.width = "15.5em";
} else {
  svg.style.width = "10.075em";
 }
}

// call resize events on page load
changeText();
changeSvgSize();


window.addEventListener("resize", changeText);
window.addEventListener("resize", changeSvgSize);