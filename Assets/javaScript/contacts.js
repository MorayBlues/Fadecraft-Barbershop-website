const dateInput=document.querySelector('#date');
const today=new Date();
dateInput.min=today.toISOString().split('T')[0];
const form=document.querySelector('#contactForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
   document.querySelectorAll(".error").forEach((el)  => (el.textContent = ""));
   const nameInput = document.querySelector("#Name");
   const emailInput = document.querySelector("#Email");
   const phoneInput = document.querySelector("#Phone");
   const serviceInput = document.querySelector("#Service");
   const timeInput = document.querySelector("#time");

   let hasError = false;

   if (nameInput.value.trim() === ""){
    document.querySelector("#name-error").textContent = "Name can't be empty.";
    hasError = true;
   }
   if (emailInput.value.trim() === "") {
    document.querySelector("#email-error").textContent = "Email can't be empty.";
    hasError = true;
   }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())){
    document.querySelector("email-error").textContent = "Please enter a valid email.";
    hasError = true;
   }
   if (phoneInput.value.trim() === ""){
    document.querySelector("phone-error").textContent = "Phone number can't be empty.";
    hasError = true;
   }
   if (serviceInput.value === ""){
    document.querySelector("service-error").textContent = "Please select a service.";
    hasError = true;
   }
   if (dateInput.value === ""){
    document.querySelector("date-error").textContent = "Please select a Preferred date.";
    hasError = true;
   } else if(dateInput.value < today.toISOString().split("T")[0]){
    document.querySelector("#date-error").textContent = "Please select a future date.";
    hasError = true
   }
   if (timeInput.value === ""){
    document.querySelector("time-error").textContent = "Please select a convenient time.";
    hasError = true;
   }
   if (hasError) return;

    
const stored=localStorage.getItem('bookings');
const bookings = stored ? JSON.parse(stored) : [];

const bookingData={
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    service: serviceInput.value,
    date: dateInput.value,
    time: timeInput.value
};
bookings.push(bookingData);
localStorage.setItem('bookings', JSON.stringify(bookings));

const successMsg = document.querySelector("#success-message");
successMsg.textContent = "Asante! We'll confirm your appointment within 24 hours.";
successMsg.computedStyleMap.visibility = "visible"
document.getElementById('contactForm').reset();
});