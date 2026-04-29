function animateOnScroll(selector) {
const elements = document.querySelectorAll(selector);
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});
elements.forEach((element,index)=>{
    element.style.transitionDelay = index*100 + "ms";
    observer.observe(element);
});
}