# FadeCraft Barbershop Website

A modern, responsive web platform for **FadeCraft Barbershop**, located in Nairobi, Kenya. The website features interactive animations, service showcases, an online appointment booking system connected to Supabase, and an admin dashboard to review incoming client bookings.

## Project Structure

```
fadecraftbarbers/
├── Assets/
│   ├── images/              # Image assets for gallery, services, and team
│   └── javaScript/
│       ├── about.js         # Scroll triggers for About page animations
│       ├── admin.js         # Password gate authentication & booking data retrieval
│       ├── animations.js    # Shared IntersectionObserver animation helper
│       ├── contacts.js      # Booking form validation and Supabase submission logic
│       ├── fetch.js         # Injects shared navigation, footer, and floating WhatsApp widget
│       ├── gallery.js       # Image entrance animations for the gallery grid
│       ├── index.js         # Typewriter effect for the hero section
│       └── service.js       # Card entrance animations for service categories
├── styles/
│   ├── Aboutus.css          # Layout & styling for About page & Team sections
│   ├── admin.css            # Styling for admin gate and bookings table
│   ├── contacts.css         # Styling for appointment booking form
│   ├── footer.css           # Global footer layout & styles
│   ├── Gallery.css          # Image grid & gallery layouts
│   ├── index.css            # Home page hero section & core styling
│   └── navstyles.css        # Responsive navigation bar & mobile menu styles
├── Aboutus.html             # About Us page
├── admin.html               # Admin portal for viewing booking requests
├── contactus.html           # Appointment booking page
├── footer.html              # Shared footer component
├── Gallery.html             # Visual showcase page
├── index.html               # Main landing page
├── nav.html                 # Shared header navigation component
├── service.html             # List of barber services & pricing
├── .gitattributes          # Git configuration
└── README.md                # Project documentation

```

##  Key Features

* **Dynamic Component Loading:** Automatically injects shared `nav.html` and `footer.html` across all pages with a responsive mobile menu and a persistent WhatsApp quick-chat floating widget (`fetch.js`).

* **Interactive UI & Animations:** Smooth entrance scroll triggers powered by `IntersectionObserver` (`animations.js`, `service.js`, `gallery.js`, `about.js`) and a dynamic typewriter text effect on the home page (`index.js`).

* **Online Booking System:** Client-side validation (`contacts.js`) preventing invalid inputs or past-date selections, sending bookings straight to the **Supabase Database**.

* **Admin Portal:** Secure password-gated dashboard (`admin.html` & `admin.js`) displaying submitted client bookings chronologically.

## Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, CSS Grid, Custom Animations), Vanilla JavaScript (ES6+)

* **Backend / Database:** [Supabase](https://supabase.com) (PostgreSQL REST API)

* **Typography:** Google Fonts (`Inter`, `Oswald`)

##  Setup & Local Development

1. **Clone or download** the project folder.

2. **Serve locally using a local server:**

   Because the project uses `fetch()` to load HTML fragments (`nav.html` and `footer.html`), run it via a local web server (e.g., VS Code *Live Server* extension or Python):

   ```
   # Python 3
   python -m http.server 8000
   
   ```

3. Open `http://localhost:8000` in your browser.

## Configuration & Database (Supabase)

The booking system connects to a Supabase database table named `bookings`.

### Table Schema (`bookings`)

| Column | Type | Description | 
| ----- | ----- | ----- | 
| `id` | `uuid` / `bigint` | Primary Key | 
| `created_at` | `timestamp` | Default: `now()` | 
| `name` | `text` | Client name | 
| `email` | `text` | Client email | 
| `phone` | `text` | Client phone number | 
| `service` | `text` | Selected haircut/service | 
| `date` | `date` / `text` | Preferred appointment date | 
| `time` | `text` | Preferred appointment time | 

### Admin Credentials

* **Default Admin Password:** `admin123` *(configurable in `Assets/javaScript/admin.js`)*

##  Contact & Support

* **WhatsApp:** [+254 756 985 332](https://wa.me/254756985332)

* **Location:** Nairobi, Kenya