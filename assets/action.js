/* Begin jQuery */ ;
(function ($) {

  // DOM ready
  $(function () {

    /* Navigation */

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').toggle();
    });
    // Toggle active CSS class (X - close)
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });

    document.querySelector(".nav-list").addEventListener("click", function () {
      $('nav ul').toggle();
    });

    document.querySelector(".nav-list").addEventListener("click", function () {
      $("#nav-toggle").removeClass("active");
    });


  });

})(jQuery);