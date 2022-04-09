$(function () {
  // 倒计时
  var newdate_ = +new Date("2022-5-1 00:00:00");
  daojishi();
  setInterval(daojishi, 1000);
  function daojishi() {
    var date = +new Date();
    var value = (newdate_ - date) / 1000;
    var d = parseInt(value / (24 * 3600));
    // 天数
    d = d < 10 ? "0" + d : d;
    // 小时
    var h = parseInt((value % (24 * 3600)) / 3600);
    h = h < 10 ? "0" + h : h;
    // 分钟
    var m = parseInt((value % 3600) / 60);
    m = m < 10 ? "0" + m : m;
    // 秒钟
    var s = parseInt(value % 60);
    s = s < 10 ? "0" + s : s;
    $(".time-value").html(
      "申请时间剩余：" + d + "天" + h + "小时" + m + "分钟" + s + "秒"
    );
  }

  // 第三部分轮播图
  function lunbo() {
    var arr = [];
    get_("http://192.168.43.200:3000/report/new");
    $.each(a, function (e, ele) {
      arr.push(ele);
    });
    console.log(arr);
    var newarr = arr.slice(0, 4);
    console.log(newarr);
    var arr_ = arr.slice(4, 8);
    console.log(arr_);
    var html = template("tpl", newarr);
    var ul = document.getElementsByClassName("third-content_")[0];
    $(ul).html(html);

    var html_ = template("tp2", arr_);
    var ul_ = document.getElementsByClassName("third-content2")[0];
    $(ul_).html(html_);
  }
  lunbo();

  // 第四部分报告精选部分
  function baogao() {
    get_("http://192.168.43.200:3000/report/new");
    $.each(a, function (e, ele) {
      if (e < 8) {
        var li = $("<li></li>");
        $(".fourth_content").append(li);
        var img = $("<img src=" + ele.img + ">" + "<p>" + ele.text + "</p>");
        $(li).append(img);
        var span_left = $("<span class=zuozhe>" + "●" + ele.uName + "</span>");
        $(li).append(span_left);
        var div = $("<div></div>");
        $(li).append(div);
        var xin = $(
          "<span><img src=" + "./css/img/zan.png" + ">" + 3 + "</span>"
        );
        $(div).append(xin);
        var zan = $(
          "<span><img src=" + "./css/img/xin.png" + ">" + 5 + "</span>"
        );
        $(div).append(zan);
      }
    });
  }
  baogao();

  // 第五部分导购精选
  function daogou() {
    get_("http://192.168.43.200:3000/guid/new");
    $.each(a, function (e, ele) {
      if (e < 4) {
        var li = $("<li></li>");
        $(".fifth_content").append(li);
        var img = $("<img src=" + ele.img + ">" + "<p>" + ele.text + "</p>");
        $(li).append(img);
        var div = $("<div></div>");
        $(li).append(div);
        var xin = $(
          "<span><img src=" + "./css/img/zan.png" + ">" + ele.like + "</span>"
        );
        $(div).append(xin);
        var zan = $(
          "<span><img src=" + "./css/img/xin.png" + ">" + ele.words + "</span>"
        );
        $(div).append(zan);
      }
    });
  }
  daogou();

  // 第六部分发现酷玩
  function faxian() {
    get_("http://192.168.43.200:3000/play/new");
    var arr = [];
    $.each(a, function (e, ele) {
      $.each(ele, function (i, ele_) {
        arr.push(ele_);
      });
    });
    var newarr = arr.slice(0, 16);
    var arr_ = arr.slice(16);
    var html = template("tpl", newarr);
    var ul_ = document.getElementsByClassName("sixth_content")[0];
    // ul_.innerHTML="";
    $(ul_).html(html);
  }
  faxian();

  // 返回顶部
  $(".back").on("click", function () {
    $("html,body").stop().animate(
      {
        scrollTop: 0,
      },
      "fast"
    );
  });
});
