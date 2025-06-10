document.querySelectorAll('input[type="checkbox"][data-target]').forEach(checkbox => {
  const page = document.getElementById(checkbox.dataset.target);
  const baseZ = checkbox.dataset.baseZ;
  const activeZ = checkbox.dataset.activeZ;

  if (!page) return; // Skip jika page tidak ditemukan

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      page.style.zIndex = baseZ;
      page.style.transform = "rotateY(-180deg)";
      
      setTimeout(() => {
        page.style.zIndex = activeZ;
      }, 1000);
    } else {
      setTimeout(() => {
        page.style.zIndex = baseZ;
      }, 1000);
      page.style.transform = "";
    }
  });
});
// Dapatkan elemen tombol dan checkbox


