
  const modal = document.getElementById("pricingModal");
  const btn = document.getElementById("createBtn");
  const span = document.querySelector(".modal .close");
  const modalBody = document.getElementById("modalBody");
  const pricingSection = document.querySelector(".cs_pricing_section");

  btn.onclick = function () {
    const clonedSection = pricingSection.cloneNode(true); // Deep clone
    modalBody.innerHTML = ''; // Clear previous content
    modalBody.appendChild(clonedSection); // Inject cloned pricing section
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalBody.innerHTML = "";
    }
  }