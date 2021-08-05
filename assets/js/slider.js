$(".icon-01").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/1.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/1_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-02").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/2.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/2_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-03").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/3.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/3_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-04").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/4.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/4_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-05").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/5.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/5_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-06").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/6.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/6_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-07").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/7.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/7_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-08").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/8.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/8_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-09").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/9.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/9_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});
$(".icon-10").mouseover(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/10.png");
}).mouseout(function (e) {
    $(this).attr("src", "assets/img/icons/new-icons/10_1.png");
    // $(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
});


// Vidoe Slider



(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 2000 });
  $('#carouselABC').carousel({ interval: 3600 });
}());

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());