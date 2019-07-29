//slider
$(document).ready(function(){
  $('.slider-team').slick({
    dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  })
})

//smooth scrolling
$(document).ready(function(){
  jQuery('a.header-link').click(function() {
    elementClick = $(this).attr("href");
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 1100);  
    return false;  
  });
});
