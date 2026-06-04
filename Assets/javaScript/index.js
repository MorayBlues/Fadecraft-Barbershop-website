let index=0;
const text = "Nairobi's Finest Cuts";
const interval = setInterval(()=>{
    document.querySelector('.typing').textContent = text.slice(0,index);
    index++;
    if(index>text.length){
        clearInterval(interval);
    }
},100); 