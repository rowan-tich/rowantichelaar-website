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




document.querySelectorAll('.blurry').forEach(div => {
    div.addEventListener('mouseover', () => {
      // Split the data-set values and filter out any empty strings
      const dataSets = div.getAttribute('data-set').split(',').filter(Boolean);
      // For each data-set value, find matching divs and unblur
      dataSets.forEach(dataSet => {
        document.querySelectorAll(`.blurry[data-set*="${dataSet}"]`).forEach(matchingDiv => matchingDiv.classList.add('unblurred'));
      });
    });
  
    div.addEventListener('mouseout', () => {
      const dataSets = div.getAttribute('data-set').split(',').filter(Boolean);
      dataSets.forEach(dataSet => {
        document.querySelectorAll(`.blurry[data-set*="${dataSet}"]`).forEach(matchingDiv => matchingDiv.classList.remove('unblurred'));
      });
    });
  });
  