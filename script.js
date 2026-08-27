/* Scroll Reveal Animation */
.reveal {
    opacity: 0;
    transform: translateY(35px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

/* Navbar Scroll Effect */
#navbar {
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.navbar-scrolled {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

/* Card Hover Movement */
.highlight-card,
.project-card,
.commerce-card,
.skill-group {
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover,
.project-card:hover,
.commerce-card:hover,
.skill-group:hover {
    transform: translateY(-6px);
    border-color: var(--primary-color);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Button Movement */
.button {
    transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}

.button:hover {
    transform: translateY(-2px);
}
