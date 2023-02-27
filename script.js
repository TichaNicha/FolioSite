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
    dropdown.textContent = "DROPDOWN";
  }
}

window.addEventListener("resize", changeText);