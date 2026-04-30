const form=document.querySelector('#contactForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const nameError=document.querySelector('#name-error');
    const nameInput=document.querySelector('#Name');
    if(nameInput.value===""){
        console.log("Name can't be empty.");
        nameError.textContent="Name can't be empty.";
        return;
    }
    else{
        console.log(nameInput.value);
    }
    const emailError=document.querySelector('#email-error');
    const emailInput=document.querySelector('#Email');
    if(emailInput.value===""){
        console.log("This field can't be empty.");
        emailError.textContent="Email can't be empty.";
        return;
    }
    else{
        console.log(emailInput.value);
    }
    const phoneError=document.querySelector('#phone-error');
    const phoneInput=document.querySelector('#Phone');
    if(phoneInput.value===""){
        console.log("Please fill out this field.");
        phoneError.textContent="Phone can't be empty.";
        return;
    }
    else{
        console.log(phoneInput.value);
    }
    const serviceError=document.querySelector('#service-error');
    const serviceInput=document.querySelector('#service');
    if(serviceInput.value===""){
        console.log("please select a service.");
        serviceError.textContent="Please select a service.";
        return;
    }
    else{
        console.log(serviceInput.value);
    }
    const dateError=document.querySelector('#date-error');
    const dateInput=document.querySelector('#date');
    if(dateInput.value===""){
        console.log("Which date is best for you?");
        dateError.textContent="Which date is best for you?";
        return;
    }
    else{
        console.log(dateInput.value);
    }
    const timeError=document.querySelector('#time-error');
    const timeInput=document.querySelector('#time');
    if(timeInput.value===""){
        console.log("What time can you be available?");
        timeError.textContent="What time can you be available?";
        return;
    }
    else{
        console.log(timeInput.value);
    }
    console.log('Thank you for reaching out to us!');

const stored=localStorage.getItem('bookings');
const bookings = stored ? JSON.parse(stored) : [];

const bookingData={
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    service: serviceInput.value,
    date: dateInput.value,
    time: timeInput.value
};
bookings.push(bookingData);
localStorage.setItem('bookings', JSON.stringify(bookings));
document.querySelector('#success-message').textContent="Thank you for reaching out to us!";
document.querySelector('#success-message').style.visibility="visible";
document.getElementById('contactForm').reset();
});