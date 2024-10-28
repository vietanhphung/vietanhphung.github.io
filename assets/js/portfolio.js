$(document).ready(function() {
    const $galleryImages = $(".gallery .image");
    const $galleryText = $(".gallery #text")
    const $activeButtonClass = "active";

    // Set default filter to "Projects"
    $galleryImages.hide(); // Hide all items initially
    $galleryText.hide(); // Hide all items initially
    $(".gallery .project").show(); // Show only "Projects" items

    // Filter functionality on button click
    $(".button").click(function() {
        const $this = $(this);
        const filter = $this.attr("data-filter");

        // Update active button class
        $this.addClass($activeButtonClass).siblings().removeClass($activeButtonClass);

        // Show and hide images based on the filter
        $galleryImages.hide().filter("." + filter).show(); // Hide all, then show filtered
        $galleryText.hide().filter("." + filter).show();
    });
});
