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
