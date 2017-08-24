;
$(function() {
	// init
    var cancelBtn = $('.cancelBtn'),
        mask = $('#mask'),
        confirmWs = $("#confirm_ws"),
        confirmTrue = $(".wx_true"),
        confirmCancel = $(".wx_false");
    // 删除按钮点击事件->弹出选择框
    cancelBtn.on('click', function() {
        mask.show();
        confirmWs.show();
    });
    // 点击确定->传递信息，隐藏选择框
    confirmTrue.on('click', function() {
    	// ajax
        mask.hide();
        confirmWs.hide();
    })
    // 点击取消->直接隐藏选择框
    confirmCancel.on('click', function() {
        mask.hide();
        confirmWs.hide();
    })
})
