// event pada saat link di klik
$(".nav-link").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elemenTujuan = $(tujuan);

  $("html , body").scrollTop(elemenTujuan.offset().top - 100);

  e.preventDefault();
});
