$(window).on("scroll load resize", () => {
  if($(window).scrollTop()) {
    $('.navbar').addClass("top-nav-collapse");
    $('.nav-link').addClass("top-nav-collapse");
  }else{
    $('.navbar').removeClass("top-nav-collapse");
    $('.nav-link').removeClass("top-nav-collapse");
  }
});
