window.onload = function() {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
};
