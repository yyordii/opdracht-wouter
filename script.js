// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active")
    })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Newsletter form submission
const newsletterForm = document.getElementById("newsletter-form")
newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const email = this.querySelector('input[type="email"]').value

    // Simuleer form submission
    alert(`Bedankt! We hebben je e-mailadres ${email} toegevoegd aan onze nieuwsbrief.`)
    this.reset()
})

// Button click handlers
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
        if (this.textContent === "Bekijk Menu") {
            e.preventDefault()
            document.getElementById("menu").scrollIntoView({
                behavior: "smooth",
            })
        } else if (this.textContent === "Reserveer Tafel") {
            e.preventDefault()
            alert("Reserveringssysteem wordt binnenkort gelanceerd!")
        }
    })
})

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".feature-card, .menu-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)"
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.9)"
    }
})
