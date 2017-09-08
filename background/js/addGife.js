;
$(function() {
    var validate = $('#validate'),
        gift_name = $('input[name="gift_name"]'),
        gift_type = $('input[name="gift_type"]'),
        gift_bonus = $('input[name="gift_bonus"]'),
        gift_url = $('input[name="gift_url"]'),
        submitBtn = $('#submitBtn');
    // 正则
    var bonusRe = /^[1-9]\d*$/;

    // 名称失焦验证
    gift_name.blur(function() {
            if (gift_name.val() == '') {
                validate.html('').html('名称不能为空').show();
            } else {
                validate.html('').hide();
            }
        })
        // 积分失焦验证
    gift_bonus.blur(function() {
        if (!bonusRe.test(gift_bonus.val())) {
            validate.html('').html('积分格式不正确').show();
        } else {
            validate.html('').hide();
        }
    })

    // 礼品图片验证
    gift_url.change(function() {
        if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test($(this).val())) {
            validate.show().html('').html("图片格式不正确");
            $(this).val('');
        } else {
            validate.html('').hide();
        }
    });

    // 点击提交
    submitBtn.on('click', function() {
        if (gift_name.val() == '') {
            validate.html('').html('名称不能为空').show();
        }
        if (!bonusRe.test(gift_bonus.val())) {
            validate.html('').html('积分格式不正确').show();
        }
        if (gift_url.val() == '') {
            validate.html('').html('礼品图片不能为空').show();
        }
        // 全部验证后通过
        if (gift_name.val() != '' && bonusRe.test(gift_bonus.val()) && gift_url.val() != '') {
            $('form').submit();
        }
    })
})
