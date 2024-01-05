document.addEventListener("DOMContentLoaded", function () {
  const calculationSection = document.getElementById("calculation_section");
  const bottomPanel = document.getElementById("bottom_pannel");
  let currentCalculation = "";
  bottomPanel.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("box")) {
      const value = clickedElement.textContent;
      if (value === "AC") {
        currentCalculation = "";
      } else if (value === "=") {
        try {
          currentCalculation = eval(currentCalculation);
        } catch (error) {
          currentCalculation = "Error";
        }
      } else {
        currentCalculation += value;
      }
      calculationSection.textContent = currentCalculation;
    }
  });
});
