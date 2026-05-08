const products = [
  { name: "Box Rosas Premium", price: "S/ 159", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80" },
  { name: "Ramo Encanto", price: "S/ 119", image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=900&q=80" },
  { name: "Girasoles & Rosas", price: "S/ 169", image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=900&q=80" },
  { name: "Ramo Love", price: "S/ 139", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80" }
];

const testimonials = [
  { text: "Hermoso arreglo, superó mis expectativas.", author: "María Fernanda" },
  { text: "Excelente atención y entrega puntual.", author: "Ana Lucía" },
  { text: "Mi mamá quedó encantada con su sorpresa.", author: "Sofía Valentina" }
];

const productsGrid = document.getElementById("productsGrid");
products.forEach((item) => {
  const card = document.createElement("article");
  card.className = "product";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
    <div class="content">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <a class="btn btn-primary" href="https://wa.me/51987654321?text=Hola%2C%20me%20interesa%20${encodeURIComponent(item.name)}" target="_blank" rel="noreferrer">Comprar ahora</a>
    </div>`;
  productsGrid.appendChild(card);
});

const testimonialSlider = document.getElementById("testimonialSlider");
testimonials.forEach((t) => {
  const card = document.createElement("article");
  card.className = "quote";
  card.innerHTML = `<p>“${t.text}”</p><strong>— ${t.author}</strong>`;
  testimonialSlider.appendChild(card);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => navLinks?.classList.toggle("open"));

document.querySelectorAll("[data-animate]").forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(el);
});
