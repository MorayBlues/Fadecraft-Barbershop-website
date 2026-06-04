function checkPassword() {
  const input = document.querySelector("#admin-password").value;
  if (input === "admin123") {
    document.querySelector(".password-gate").style.display = "none";
    document.querySelector("#Available-Bookings").style.display = "block";
    const stored = localStorage.getItem("bookings");
    const bookings = stored ? JSON.parse(stored) : [];
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    if (bookings.length === 0){
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 6;
      cell.textContent = "No bookings yet.";
      cell.style.textAlign = "center";
      cell.style.color = "#99a1af";
      row.appendChild(cell);
      tbody.appendChild(row);
      return;
    }

    bookings.forEach(booking => {
        const row = document.createElement('tr');
       ["name","email","phone","service","date","time"].forEach((key) =>{
        const cell = document.createElement("td");
        cell.textContent = booking[key] || "-";
        row.appendChild(cell);
       });
       tbody.appendChild(row);
      });
    } else {
      const errEl = document.querySelector("#password-error");
      errEl.textContent = "Incorrect password. Please try again.";
    }
  }