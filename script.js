// ============================================
// MONTEVÍ ENGENHARIA - JAVASCRIPT
// Otimizado para Responsividade Máxima
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar-container")) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ============================================
// SERVICE CARDS INTERACTION
// ============================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  // Click event
  card.addEventListener("click", handleServiceCardClick);

  // Keyboard event (Enter and Space)
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleServiceCardClick.call(card);
    }
  });
});

function handleServiceCardClick() {
  // Remove active class from all detail items
  document.querySelectorAll(".service-detail-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Get the service type from data attribute
  const serviceType = this.getAttribute("data-service");

  // Add active class to the corresponding detail item
  const detailItem = document.getElementById(`${serviceType}-detail`);
  if (detailItem) {
    detailItem.classList.add("active");
  }
}

// Set the first service as active by default
window.addEventListener("load", () => {
  const firstCard = serviceCards[0];
  if (firstCard) {
    firstCard.click();
  }
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
      navbar.style.boxShadow = "0 2px 10px rgba(10, 36, 99, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }

    lastScrollTop = scrollTop;
  },
  { passive: true }
);

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector("textarea");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate form
    if (!name) {
      showNotification("Por favor, insira seu nome", "error");
      nameInput.focus();
      return;
    }

    if (!email) {
      showNotification("Por favor, insira seu e-mail", "error");
      emailInput.focus();
      return;
    }

    // Validate email
    if (!isValidEmail(email)) {
      showNotification("Por favor, insira um e-mail válido", "error");
      emailInput.focus();
      return;
    }

    if (!message) {
      showNotification("Por favor, insira uma mensagem", "error");
      messageInput.focus();
      return;
    }

    // Send email via mailto
    const mailtoLink = `mailto:metta.engenharias@gmail.com?subject=Novo Contato de ${encodeURIComponent(
      name
    )}&body=Nome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(
      email
    )}%0A%0AMensagem:%0A${encodeURIComponent(message)}`;

    // Show success message
    showNotification(
      "✓ Mensagem preparada! Abrindo cliente de e-mail...",
      "success"
    );

    // Open mailto link
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1500);

    // Reset form
    contactForm.reset();
  });
}

// ============================================
// EMAIL VALIDATION
// ============================================

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.role = "alert";
  notification.setAttribute("aria-live", "polite");

  // Determine colors
  let bgColor;
  switch (type) {
    case "success":
      bgColor = "#10b981";
      break;
    case "error":
      bgColor = "#ef4444";
      break;
    default:
      bgColor = "#0a2463";
  }

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${bgColor};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
        max-width: 90vw;
        font-size: clamp(0.85rem, 1.2vw, 1rem);
    `;

  // Add animation if not already present
  if (!document.querySelector("style[data-notification]")) {
    const style = document.createElement("style");
    style.setAttribute("data-notification", "true");
    style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  // Add to page
  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements
document
  .querySelectorAll(".service-card, .portfolio-item, .team-member, .stat")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  },
  { passive: true }
);

// ============================================
// PARALLAX EFFECT (OTIMIZADO)
// ============================================

let ticking = false;

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const heroImage = document.querySelector(".hero-placeholder");
        if (heroImage) {
          const scrollPosition = window.scrollY;
          heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

// ============================================
// RESPONSIVE VIEWPORT DETECTION
// ============================================

function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
  };
}

window.addEventListener(
  "resize",
  () => {
    const viewport = getViewportSize();

    // Close mobile menu on resize to desktop
    if (!viewport.isMobile && navMenu) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  },
  { passive: true }
);

// ============================================
// TOUCH SUPPORT FOR SERVICE CARDS
// ============================================

let touchStartX = 0;
let touchEndX = 0;

serviceCards.forEach((card) => {
  card.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  card.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    const currentIndex = Array.from(serviceCards).findIndex((card) =>
      card.querySelector(".service-detail-item.active")
    );

    if (diff > 0 && currentIndex < serviceCards.length - 1) {
      // Swipe left - next card
      serviceCards[currentIndex + 1].click();
    } else if (diff < 0 && currentIndex > 0) {
      // Swipe right - previous card
      serviceCards[currentIndex - 1].click();
    }
  }
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if needed
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  });

  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => imageObserver.observe(img));
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(
  "%cMontevì Engenharia",
  "font-size: 24px; font-weight: bold; color: #247ba0;"
);
console.log(
  "%cConstrução | Solução | Sonhos",
  "font-size: 14px; color: #5a7a8a;"
);
console.log("%c© 2026 Monteví Engenharia", "font-size: 12px; color: #999;");

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✓ Site carregado com sucesso");

  // Verify all critical elements are present
  const criticalElements = [
    "menuToggle",
    "navMenu",
    "contactForm",
    "serviceCards",
  ];
  criticalElements.forEach((el) => {
    if (el === "serviceCards") {
      console.log(`✓ ${serviceCards.length} cards de serviço encontrados`);
    } else if (
      document.getElementById(el) ||
      document.querySelector(`.${el}`)
    ) {
      console.log(`✓ Elemento ${el} encontrado`);
    }
  });
});

// SERVICOS COMO CARTOES

// Solução alternativa que modifica o HTML existente
// Função para os cartões interativos
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os cartões
  const flipCards = document.querySelectorAll(".service-card-flip");

  // Adiciona evento de clique para cada cartão
  flipCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
      updateAriaLabel(this);
    });

    // Adiciona evento para teclado (Enter ou Espaço)
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.classList.toggle("is-flipped");
        updateAriaLabel(this);
      }
    });
  });

  // Função para atualizar o texto de acessibilidade
  function updateAriaLabel(card) {
    const service = card.getAttribute("data-service");
    let serviceName = "";

    switch (service) {
      case "civil":
        serviceName = "Engenharia Civil";
        break;
      case "electrical":
        serviceName = "Engenharia Elétrica";
        break;
      case "complementary":
        serviceName = "Projetos Complementares";
        break;
    }
  }
});
