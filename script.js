function on() {
  document.getElementById("overlay").style.display = "block";
  overlay.style.display = 'block';
  overlay.style.animation = 'fadeIn 0.5s ease-in-out'; // Apply the fade-in animation
};

function off() {
  var overlay = document.getElementById('overlay');
  
  // Set the fade-out animation
  overlay.style.animation = 'fadeOut 0.5s ease-in-out';

  // Listen for the 'animationend' event
  overlay.addEventListener('animationend', function(event) {
    // Check if the animation that ended is the "fadeOut" animation
    if (event.animationName === 'fadeOut') {
      // This code will execute only when the "fadeOut" animation ends
      document.getElementById("overlay").style.display = "none";
    }
  });
}
