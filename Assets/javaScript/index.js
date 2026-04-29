let index=0;
const text = "Where style meets precision";
const interval = setInterval(()=>{
    document.querySelector('.typing').textContent = text.slice(0,index);
    index++;
    if(index>text.length){
        clearInterval(interval);
    }
},100);