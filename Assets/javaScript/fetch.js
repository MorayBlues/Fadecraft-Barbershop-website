fetch('nav.html')
.then(response => response.text())
.then(html=>{
    document.querySelector('#nav-placeholder').innerHTML = html;
});

fetch('footer.html')
.then(response => response.text())
.then(html=>{
    document.querySelector('#footer-placeholder').innerHTML = html;
});