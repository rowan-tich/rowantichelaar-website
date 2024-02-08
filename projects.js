//Magical appearing content
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElemens = document.querySelectorAll(".hidden");
hiddenElemens.forEach((el) => observer.observe(el));


//Magical menu
function openSB() {
    document.getElementById("sb").style.display = "block";
    document.getElementById("sbopen").style.visibility = "hidden";
}
function closeSB() {
    document.getElementById("sb").style.display = "none";
    document.getElementById("sbopen").style.visibility = "visible";
}


//Magical appearing logos
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("showLogos");
        }
    });
});

const hiddenElemens2 = document.querySelectorAll(".hiddenLogos");
hiddenElemens2.forEach((el) => observer2.observe(el));

window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('#imageBar img');
  
    images.forEach(img => {
      const imgPosition = img.getBoundingClientRect(); // Get position of the image relative to the viewport
  
      // Check if the image is outside the viewport
      if(imgPosition.top < window.innerHeight && imgPosition.bottom >= 0) {
        img.classList.remove('blur'); // Image is in view, remove blur
      } else {
        img.classList.add('blur'); // Image is out of view, add blur
      }
    });
  });