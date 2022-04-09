$(function () {
    var url_ = 'http://192.168.43.200:3000';
    // 轮播图
    $.ajax({
        type: 'GET',
        url: url_ + '/useing/public',
        async: false,
        success: function (data) {
            InHtml(data)
        }
    })
    function InHtml(a) {
        $.each(a, function (i, n) {
            if (i <= 11) {
                var html_ = $('<li><img src="" alt=""><span class="label"></span><p></p><p><span class="tnumber"></span><span class="tnumber"></span></p><p><span class="applyN"></span><span>申请</span></p><p class="ptime"></p></li>');
                $('.sImg').children('ul').append(html_);
                $('.sImg').find('li:last').find('img').attr('src', n.img);
                $('.sImg').find('li:last').children('span').html(n.info_ty);
                $('.sImg').find('li:last').find('p:first').html(n.text);
                $('.sImg').find('li:last').find('.tnumber').eq(0).html(n.totalnum);
                $('.sImg').find('li:last').find('.tnumber').eq(1).html(n.num + '台');
                $('.sImg').find('li:last').find('.applyN').html(n.apply);
                $('.sImg').find('li:last').find('p:last').html('剩余时间2天')
                if (n.info_ty.length != 2) {
                    $('.sImg').find('li:last').children('span').addClass('label_g');
                    $('.tnumber').addClass('tnumber_g');
                    $('.sImg').find('li:last').find('p:last').html('查看试用名单').addClass('ptime_g')
                }
            }
        })
    }
    $('.sRight').click(function () {
        slideR()
    });
    $('.sLeft').click(function () {
        slideL()
    })
    function slide() {
        timer1 = setInterval(function () {
            slideR()
        }, 2000)
    }
    slide()
    var timer1;
    var timer2;
    var time1 = 0;
    var switch_ = 1;
    var SR = -800;
    function slideR() {
        if (switch_ == 1) {
            switch_ = 0;
            timer2 = setInterval(function () {
                SR -= 100;
                time1 += 1;
                if (SR <= -1600) {
                    clearInterval(timer2);
                    $('.sImg').children('ul').css('left', '0');
                    SR = 0;
                }
                $('.sImg').children('ul').css('left', SR);
                if (time1 >= 8) {
                    clearInterval(timer2);
                    switch_ = 1;
                    time1 = 0;
                    slide()
                }
            }, 50)
        }
    }
    function slideL() {
        if (switch_ == 1) {
            switch_ = 0;
            timer2 = setInterval(function () {
                SR += 100;
                time1 += 1;
                if (SR >= 0) {
                    clearInterval(timer2);
                    $('.sImg').children('ul').css('left', '-1600');
                    SR = -1600;
                }
                $('.sImg').children('ul').css('left', SR);
                if (time1 >= 8) {
                    clearInterval(timer2);
                    switch_ = 1;
                    time1 = 0;
                    slide()
                }
            }, 50)
        }
    }
    // 五一倒计时
    var wuyiTimer;
    wuyiTimer = setInterval(
        function () {
            var dateNow = new Date();
            var dateAfter = new Date(2022, 4, 1);
            var time = dateAfter - dateNow;
            var d = Math.floor(time / 1000 / 60 / 60 / 24);
            d = d > 9 ? d : '0' + d;
            var h = Math.floor(time / 1000 / 60 / 60 % 24);
            h = h > 9 ? h : '0' + h;
            var m = Math.floor(time / 1000 / 60 % 60);
            m = m > 9 ? m : '0' + m;
            var timeline = '申请时间剩余：:' + d + '天' + h + '时' + m + '分';
            $('.headtext').children('li').eq('2').html(timeline)
        }, 1000
    )
    // 报告精选
    $.ajax({
        type: 'GET',
        url: url_ + '/play/hot',
        async: false,
        success: function (data) {
            InHtml1(data[0])
        }
    })
    function InHtml1(a) {
        $.each(a, function (i, n) {
            var html_ = $(' <li><img src = "" alt = ""><p></p><span>● 苏苏</span><span class="L_C"><span></span><span></span></span></li > ');
            $('.reportChoose').children('ul').append(html_);
            $('.reportChoose').children('ul').children('li:last').children('img').attr('src', n.img);
            $('.reportChoose').children('ul').children('li:last').children('p').html(n.text);
            $('.reportChoose').children('ul').children('li:last').children('.L_C').children('span:first').html(n.like);
            $('.reportChoose').children('ul').children('li:last').children('.L_C').children('span:last').html(n.words);
        })
    }
    // 导购精选
    $.ajax({
        type: 'GET',
        url: url_ + '/guid/new',
        async: false,
        success: function (data) {
            InHtml2(data)
        }
    })
    function InHtml2(a) {
        $.each(a, function (i, n) {
            if (i >= 11) {
                var html_ = $(' <li><img src = "" alt = ""><p></p><span class="L_C"><span></span><span></span></span></li > ');
                $('.buyChoose').children('ul').append(html_);
                $('.buyChoose').children('ul').children('li:last').children('img').attr('src', n.img);
                $('.buyChoose').children('ul').children('li:last').children('p').html(n.text);
                $('.buyChoose').children('ul').children('li:last').children('.L_C').children('span:first').html(n.like);
                $('.buyChoose').children('ul').children('li:last').children('.L_C').children('span:last').html(n.words);

            }
        })
    }
    // 发现酷玩
    $.ajax({
        type: 'GET',
        url: url_ + '/play/hot',
        async: false,
        success: function (data) {
            InHtml3(data)
        }
    })
    function InHtml3(a) {
        $.each(a, function (i, n) {
            $.each(n, function (a, b) {
                var html_ = $(' <li><img src = "" alt = ""><p><span></span></p><span></span><span class="L_C"><span></span><span></span></span></li > ');
                $('.coldplay').children('ul').append(html_);
                $('.coldplay').children('ul').children('li:last').children('img').attr('src', b.img);
                $('.coldplay').children('ul').children('li:last').children('p').prepend(b.description);
                $('.coldplay').children('ul').children('li:last').children('p').children('span').html(b.text);
                $('.coldplay').children('ul').children('li:last').children('span:first').html(b.price)
                $('.coldplay').children('ul').children('li:last').children('.L_C').children('span:first').html(b.like);
                $('.coldplay').children('ul').children('li:last').children('.L_C').children('span:last').html(b.words);
            })
        })
    }
})