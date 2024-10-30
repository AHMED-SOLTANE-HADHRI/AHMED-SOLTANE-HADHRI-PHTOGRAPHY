let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  currentIndex += direction;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

window.addEventListener('resize', () => {
  moveSlide(0);
});
function filterCategory(category) {
    // Get all portfolio items
    const items = document.querySelectorAll('.portfolio-item');
    
    // Remove 'active' class from all filter buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    event.target.classList.add('active');
  
    // Loop through all portfolio items
    items.forEach(item => {
      // If 'all' is selected, display all items
      if (category === 'all') {
        item.classList.add('active');
      } else {
        // Otherwise, display only the items of the selected category
        if (item.classList.contains(category)) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });
  }
  