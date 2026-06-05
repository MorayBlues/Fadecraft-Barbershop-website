const SUPABASE_URL = "https://amuwdajowkyxrogdcyqy.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdXdkYWpvd2t5eHJvZ2RjeXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NDAzOTcsImV4cCI6MjA5NjIxNjM5N30.bGicPRZZpHSCpdOLJNwor-hRGVTNXhCHDU4Aivi0qlM";

const dateInput = document.querySelector("#date");
const today = new Date();
dateInput.min = today.toISOString().split("T")[0];

const form = document.querySelector("#contactForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  const nameInput = document.querySelector("#Name");
  const emailInput = document.querySelector("#Email");
  const phoneInput = document.querySelector("#Phone");
  const serviceInput = document.querySelector("#service");
  const timeInput = document.querySelector("#time");

  let hasError = false;

  if (nameInput.value.trim() === "") {
    document.querySelector("#name-error").textContent = "Name can't be empty.";
    hasError = true;
  }
  if (emailInput.value.trim() === "") {
    document.querySelector("#email-error").textContent = "Email can't be empty.";
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    document.querySelector("#email-error").textContent = "Please enter a valid email.";
    hasError = true;
  }
  if (phoneInput.value.trim() === "") {
    document.querySelector("#phone-error").textContent = "Phone number can't be empty.";
    hasError = true;
  }
  if (serviceInput.value === "") {
    document.querySelector("#service-error").textContent = "Please select a service.";
    hasError = true;
  }
  if (dateInput.value === "") {
    document.querySelector("#date-error").textContent = "Please select a preferred date.";
    hasError = true;
  } else if (dateInput.value < today.toISOString().split("T")[0]) {
    document.querySelector("#date-error").textContent = "Please select a future date.";
    hasError = true;
  }
  if (timeInput.value === "") {
    document.querySelector("#time-error").textContent = "Please select a convenient time.";
    hasError = true;
  }

  if (hasError) return;

  const bookingData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    service: serviceInput.value,
    date: dateInput.value,
    time: timeInput.value,
  };

  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  try {

    const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error("Booking failed");
    }

    const successMsg = document.querySelector("#success-message");
    successMsg.textContent = "Asante! We'll confirm your appointment within 24 hours.";
    successMsg.style.color = "#4cff72";
    successMsg.style.visibility = "visible";
    form.reset();

    setTimeout(() => {
      successMsg.style.visibility = "hidden";
      successMsg.textContent = "";
    }, 4000);

  } catch (error) {
    console.log("Caught error:", error);
    const successMsg = document.querySelector("#success-message");
    successMsg.textContent = "Something went wrong. Please call us on +254 756 985 332.";
    successMsg.style.color = "#ff4d4d";
    successMsg.style.visibility = "visible";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Appointment Request";
  }
});