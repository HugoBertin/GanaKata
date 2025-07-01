// Mode toggle buttons
const modeButtons = document.querySelectorAll("#mode-toggle button");
modeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const isCustom = btn.dataset.mode === "custom";
    document.getElementById("custom-selection").classList.toggle("hidden", !isCustom);
    document.getElementById("standard-select-wrapper").classList.toggle("hidden", isCustom);
  });
});
