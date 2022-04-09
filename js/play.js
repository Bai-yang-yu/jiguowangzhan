$(function () {
  $(".title span").on("click", function () {
    $(this).addClass("border-bottom").siblings().removeClass("border-bottom");
  });

  get_("http://192.168.43.200:3000/play/new");
  var html = template("tpl", {
    data: a,
  });
  var content_ = document.getElementsByClassName("content")[0];
  content_.innerHTML = "";
  content_.innerHTML = html;

  $(".zuire").on("click", function () {
    get_("http://192.168.43.200:3000/play/hot");
    var html = template("tpl", {
      data: a,
    });
    var content_ = document.getElementsByClassName("content")[0];
    content_.innerHTML = "";
    content_.innerHTML = html;
    var ul = document.getElementsByClassName("ul_")[0];
    ul.style.display = "none";
  });

  $(".zuixin").on("click", function () {
    get_("http://192.168.43.200:3000/play/new");
    var html = template("tpl", {
      data: a,
    });
    var content_ = document.getElementsByClassName("content")[0];
    content_.innerHTML = "";
    content_.innerHTML = html;
    var ul = document.getElementsByClassName("ul_")[0];
    ul.style.display = "none";
  });

  $(".pinlei").on("click", function () {
    get_("http://192.168.43.200:3000/play/category");
    console.log(a);
    var html = template("tp2", {
      data: a,
    });
    // var ul = document.getElementsByClassName("ul_")[0];
    // ul.style.display = "block";
    var content_ = document.getElementsByClassName("content")[0];
    content_.innerHTML = "";
    content_.innerHTML = html;
    ul.innerHTML = ul;
  });
});
