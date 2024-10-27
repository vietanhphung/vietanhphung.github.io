$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });

});



window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, null, ' '); // Clears the fragment from URL
    window.scrollTo(0, 0); // Scrolls to the top
  }
});







document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".skill-item .progress-bar span");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const span = entry.target;
              const width = span.getAttribute("data-width");

              // Set the width to trigger animation
              span.style.width = width;
              
              observer.unobserve(span); // Stop observing once animated
          }
      });
  }, { threshold: 0.5 });

  // Set data-width attributes for each skill bar
  progressBars.forEach(bar => {
      bar.setAttribute("data-width", bar.style.width); // Set data-width to predefined width
      bar.style.width = "0"; // Reset initial width to 0
      observer.observe(bar);
  });
});
