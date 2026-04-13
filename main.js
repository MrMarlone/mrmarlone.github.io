// Lucide Icons initialisieren
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

const hamburger = document.querySelector('.hamburger');
const iconNav = document.querySelector('.icon-nav');
let navManuallyClosed = false;

hamburger.addEventListener('click', () => {
    if (iconNav.classList.contains('hidden')) {
        iconNav.classList.remove('hidden');
        navManuallyClosed = false;
        hamburger.setAttribute('aria-expanded', 'false');
    } else {
        iconNav.classList.add('hidden');
        navManuallyClosed = true;
        hamburger.setAttribute('aria-expanded', 'true');
    }
});



// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.icon-nav__item');
// Active nav highlight on scroll
function updateActiveNav() {
    let currentId = sections[0].id;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
            currentId = section.id;
        }
    });

    navItems.forEach(item => item.classList.remove('active'));
    const active = document.querySelector(`.icon-nav__item[href="#${currentId}"]`);
    if (active) active.classList.add('active');
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Projekt-Videos: Hover → Play, Cursor weg → Poster zurück, Klick → Vollbild
document.querySelectorAll('.project-card__image').forEach(video => {
    const originalSrc = video.getAttribute('src');

    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.removeAttribute('src');
        video.load();                        // Browser zeigt poster wieder
        video.setAttribute('src', originalSrc);
    });

    video.addEventListener('click', () => {
        video.requestFullscreen();
    });
});
// Karriere Zeitstrahl: Hover -> aktiv, Cursor weg -> zurück zum ersten
document.querySelectorAll('.timeline').forEach(timeline => {
    const items = timeline.querySelectorAll('.timeline__item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            items.forEach(s => s.classList.remove('active'));
            item.classList.add('active');
        });

        timeline.addEventListener('mouseleave', () => {
            items.forEach(s => s.classList.remove('active'));
            items[0].classList.add('active');
        });
    });
});