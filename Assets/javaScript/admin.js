function checkPassword() {
  const input = document.querySelector("#admin-password").value;
  if (input === "admin123") {
    document.querySelector(".password-gate").style.display = "none";
    document.querySelector("#Available-Bookings").style.display = "block";
    const stored = localStorage.getItem("bookings");
    const bookings = stored ? JSON.parse(stored) : [];
    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${booking.name}</td>
          <td>${booking.email}</td>
          <td>${booking.phone}</td>
          <td>${booking.service}</td>
          <td>${booking.date}</td>
          <td>${booking.time}</td>
        `;
        document.querySelector('table').appendChild(row);
      });
  } else {
    alert("Incorrect password. Please try again.");
  }
}
