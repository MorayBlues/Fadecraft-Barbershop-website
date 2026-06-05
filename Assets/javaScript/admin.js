const SUPABASE_URL = "https://amuwdajowkyxrogdcyqy.supabase.co";
const SUPERBASE_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdXdkYWpvd2t5eHJvZ2RjeXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NDAzOTcsImV4cCI6MjA5NjIxNjM5N30.bGicPRZZpHSCpdOLJNwor-hRGVTNXhCHDU4Aivi0qlM";
async function checkPassword() {
  const input = document.querySelector("#admin-password").value;
  const errorEl = document.querySelector("#password-error");
  if (input !== "admin123") {
    errorEl.textContent = "Incorrect password. Please try again";
    return;
  }
  errorEl.textContent = "";
  document.querySelector(".password-gate").style.display = "none";
  document.querySelector("#Available-Bookings").style.display = "block";

  const tbody = document.querySelector("tbody");
  tbody.innerHTML ="<tr><td colspan='6' style='text-align:center;color:#99a1af'>Loading...</td></tr>";

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/bookings?select=*&order=created_at.desc`,
      {
        headers: {
          apikey: SUPERBASE_KEY,
          Authorization: `Bearer${SUPERBASE_KEY}`,
        },
      },
    );
    if (!response.ok) throw new Error("Failed to fetch bookings");

    const bookings = await response.json();
    tbody.innerHTML = "";

    if (bookings.length === 0) {
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

    bookings.forEach((booking) => {
      const row = document.createElement("tr");
      ["name", "email", "phone", "service", "date", "time"].forEach((key) => {
        const cell = document.createElement("td");
        cell.textContent = booking[key] || "-";
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  } catch (error) {
    tbody.innerHTML ="<tr><td colspan='6' style='text-align:center;color:#ff4d4d'>Failed to load bookings. Check your connection.</td></tr>";
  }
}
