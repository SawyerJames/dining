;
$(function() {
    // 初始化控件
    var day = $(".Day_order").find('span'),
        time = $("input[name='time']"),
        tabelNumber = $("input[name='tableNumber']"),
        sex = $("input[name='sex']"),
        name = $("input[name='nickName']"),
        phone = $("input[name='phone']"),
        remark = $("textarea"),
        submitBtn = $("#submitBtn").find('button'),
        reContent = $("#reContent");
    // 初始化控件value值和索引
    var dayIndex = null,
        timeVal = $("input[name='time'][checked]").val(),
        tabelNumberVal = $("input[name='tableNumber'][checked]").val(),
        sexVal = $("input[name='sex'][checked]").val(),
        remarkVal = $("textarea").val();

    // 正则定义
    var phoneRe = /^1[34578]\d{9}$/,
    	nameRe = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
    // day函数->选择当前日期(天数索引值)，并返回索引index
    day.on('click', function() {
        dayIndex = $(this).index();
        $(this).addClass('choose');
        $(this).siblings('span').removeClass('choose');
        tabelNumber.parent().find('label').removeClass('disabled');
    })
    // 其他获取当前点击的input值事件->增加样式类，并返回此值，对默认value赋值\
    // 桌位取值
    tabelNumber.on('click', function() {
        tabelNumberVal = $(this).val();
        $(this).prev().addClass('choose');
        $(this).parent().siblings('.radio').find('label').removeClass('choose');
        time.parent().find('span').removeClass('disabled');
    });
    // 时间取值
    time.on('click', function() {
        timeVal = $(this).val();
        $(this).prev().addClass('choose');
        $(this).parent().siblings('.time_radio_container').find('span').removeClass('choose');
    });
    // 性别取值
    sex.on('click', function() {
        sexVal = $(this).val();
        $(this).prev().addClass('name_radio_type_hack_true');
        $(this).parent().parent().siblings('.name_sex_content').find('label').removeClass('name_radio_type_hack_true');
    });
    // 点击事件end
    // 打开餐桌选位函数->在这个函数中写入ajax->查询桌位
    var tabelOpen = setInterval(function() {
        if (dayIndex != null) {
            clearInterval(tabelOpen);
            tabelNumber.attr('disabled', false);
        }
    }, 100);
    // 打开具体时间函数->在这个函数中写入ajax->查询时间
    var timeOpen = setInterval(function() {
        if (tabelNumberVal != undefined) {
            clearInterval(timeOpen);
            time.attr('disabled', false);
        }
    }, 100);
    // 打开填写姓名和备注函数
    var nameOpen = setInterval(function() {
        if (timeVal != undefined&&dayIndex!=null&&tabelNumberVal!=undefined) {
            clearInterval(nameOpen);
            sex.attr('disabled', false);
            name.attr('disabled', false);
            phone.attr('disabled', false);
            remark.attr('disabled', false);
        }
    }, 100);

    // 表单验证
    submitBtn.on('click', function() {
    	var phoneVal = $("input[name='phone']").val(),
    		nickNameVal = $("input[name='nickName']").val();
        if (!phoneRe.test(phoneVal)) {
        	reContent.show().html('请输入正确的手机号码！');
        }
        if (!nameRe.test(nickNameVal)) {
        	reContent.show().html('请输入正确的姓名格式！');
        }
        if (sexVal == undefined) {
        	reContent.show().html('请输入选择性别！');
        }
        if (sexVal != undefined && nameRe.test(nickNameVal) && phoneRe.test(phoneVal)) {
        	reContent.hide();
        	$('form').submit();
        	$(location).attr('href','../html/orderSuccess.html');
        }
    });
})