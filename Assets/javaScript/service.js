const category = document.querySelectorAll('.service-category');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});
category.forEach((cat)=>{
    const serviceCards = cat.querySelectorAll('.service-card');
    serviceCards.forEach((card, index)=>{
        card.style.transitionDelay = index*100 + "ms";
        observer.observe(card);
    });
});