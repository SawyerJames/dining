;
$(function() {
    // init
    var submitBtn = $('.submitBtn'),
        mask = $('#maskRe'),
        re = /^\d{1,}$/;
    // 点击校验，正确则传递数据
    function Re() {
        submitBtn.on('click', function() {
            var inputVal = $('.peopleNumber').val();
  
            // 校验不通过
            if (!re.test(inputVal)) {
                mask.css('display', 'block');
            }
            // 校验通过->传递参数->跳转页面
            else if(re.test(inputVal)){
                mask.css('display', 'none');
                // 页面数值提交
                $('form').submit();
                // 跳转
                $(location).attr('href','../html/orderConfirm.html');
            }
        })
    }

    // 主函数
    function main() {
        Re();
    }

    // API
    main();

})
