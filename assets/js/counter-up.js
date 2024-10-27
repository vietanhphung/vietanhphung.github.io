$(document).ready(function() {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const $this = $(entry.target);
              const countTo = $this.attr('data-count');

              if ($this.hasClass('count1')) {
                  $({ countNum: $this.text() }).animate(
                      { countNum: countTo },
                      {
                          duration: 3000,
                          step: function() {
                              $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                              $this.text('countless');
                          }
                      }
                  );
              } else if ($this.hasClass('count2')) {
                  $({ countNum: $this.text() }).animate(
                      { countNum: countTo },
                      {
                          duration: 3000,
                          step: function() {
                              $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                              $this.text(this.countNum);
                          }
                      }
                  );
              } else {
                  $({ countNum: $this.text() }).animate(
                      { countNum: countTo },
                      {
                          duration: 3000,
                          step: function() {
                              $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                              $this.text(this.countNum + '+');
                          }
                      }
                  );
              }

              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  }, { threshold: 0.5 });

  // Observe each .count element
  $('.count, .count1, .count2').each(function() {
      observer.observe(this);
  });
});
