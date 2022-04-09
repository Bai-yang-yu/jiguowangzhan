// 封装ajax
// get方式
function get_(url_) {
  $.ajax({
    url: url_,
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
      a = data;
      // console.log(a);
    },
  });
}
