$(function () {
  $(".title span").on("click", function () {
    $(this).addClass("border-bottom").siblings().removeClass("border-bottom");
  });

  get_("http://192.168.43.200:3000/guid/new");
  var html = template("tpl", {
    data: a,
  });
  var content_ = document.getElementsByClassName("content")[0];
  content_.innerHTML = "";
  content_.innerHTML = html;

  $(".zuire").on("click", function () {
    get_("http://192.168.43.200:3000/guid/hot");
    var html = template("tpl", {
      data: a,
    });
    var content_ = document.getElementsByClassName("content")[0];
    content_.innerHTML = "";
    content_.innerHTML = html;
  });
  $(".zuixin").on("click", function () {
    get_("http://192.168.43.200:3000/guid/new");
    var html = template("tpl", {
      data: a,
    });
    var content_ = document.getElementsByClassName("content")[0];
    content_.innerHTML = "";
    content_.innerHTML = html;
  });
});
