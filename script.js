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

