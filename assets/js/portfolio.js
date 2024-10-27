
    $(document).ready(function() {
        // Set default filter to "Projects"
        $(".gallery .image").hide(); // Hide all items initially
        $(".gallery .project").show(); // Show only "Projects" items
    
        // Filter functionality on button click
        $(".button").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
    
            var filter = $(this).attr("data-filter");
    
            $(".gallery .image").hide(); // Hide all images
            $(".gallery .image").filter("." + filter).show(); // Show only selected category
        });
    




});