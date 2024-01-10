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

function openSB() {
    document.getElementById("sb").style.display = "block";
    document.getElementById("sbopen").style.visibility = "hidden";
}
function closeSB() {
    document.getElementById("sb").style.display = "none";
    document.getElementById("sbopen").style.visibility = "visible";
}
