// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Verdu website loaded successfully!");

  // Smooth Scroll para anclas internas (si las hay)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if(targetId && document.querySelector(targetId)) {
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Ejemplo: Detectar scroll para animar elementos con la clase "animate-on-scroll"
  const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      if(el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Ejemplo: Aplica efecto "shake" al hacer click en elementos con la clase "shake-on-click"
  document.querySelectorAll('.shake-on-click').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('shake');
      setTimeout(() => el.classList.remove('shake'), 500);
    });
  });

  // Interacción extra: Cambiar la opacidad del hero al hacer scroll para un efecto dinámico
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      let scrollPos = window.pageYOffset;
      heroSection.style.opacity = 1 - scrollPos / 600;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Verdu website loaded successfully!");

  // Smooth Scroll para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && document.querySelector(targetId)) {
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Animación al hacer scroll
  const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Efecto de brillo en botones
  document.querySelectorAll('.btn-glow').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('btn-glow-active');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('btn-glow-active');
    });
  });

  // Animación de carga inicial
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.opacity = '0';
    setTimeout(() => {
      heroSection.style.transition = 'opacity 1s ease';
      heroSection.style.opacity = '1';
    }, 500);
  }
});

// Interacción con la zanahoria
const zanahoria = document.getElementById('zanahoria-guia');

zanahoria.addEventListener('click', () => {
  alert('¡Hola! Soy Zany, tu guía de verduras. ¿Necesitas ayuda?');
});

// Mover la zanahoria al hacer scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 500) {
    zanahoria.style.transform = 'translateY(-100px)';
  } else {
    zanahoria.style.transform = 'translateY(0)';
  }
});
