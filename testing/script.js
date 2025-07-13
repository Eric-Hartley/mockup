const scrollContainer = document.getElementById("scrollContainer");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault(); // Prevent default vertical scrolling
  scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
});