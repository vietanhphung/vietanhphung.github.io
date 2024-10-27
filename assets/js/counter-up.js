$(document).ready(function(){

    $('.count').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum + '+');
        }
      });
    });

    $('.count1').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text('countless');
        }
      });
    });
    
    $('.count2').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    
    });