$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.slider .slide');
    var bubblesContainer = $('.bubbles');
  
    // Create bubbles
    slides.each(function(index) {
      var bubble = $('<div class="bubble"></div>');
      bubble.click(function() {
        currentIndex = index;
        updateSlider();
      });
      bubblesContainer.append(bubble);
    });
  
    function updateSlider() {
      // Hide all slides
      slides.hide();
      // Show current slide
      slides.eq(currentIndex).show();
      // Remove active class from all bubbles
      bubblesContainer.find('.bubble').removeClass('active');
      // Add active class to current bubble
      bubblesContainer.find('.bubble').eq(currentIndex).addClass('active');
    }
  
    // Next arrow click event
    $('.arrow.next').click(function() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  
    // Automatic sliding
    function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
  
    // Set interval for automatic sliding
    var intervalId = setInterval(autoSlide, 3000);
  
    // Pause automatic sliding on hover
    $('.slider').hover(function() {
      clearInterval(intervalId);
    }, function() {
      intervalId = setInterval(autoSlide, 3000);
    });
  
    // Initial slide display
    updateSlider();
  });
  