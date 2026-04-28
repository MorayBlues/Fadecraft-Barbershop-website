const images = document.querySelectorAll('.img');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});
images.forEach((image,index)=>{
    image.style.transitionDelay = index*100 + "ms";
    observer.observe(image);
});