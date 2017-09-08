;
$(function() {
    // init
    var cancelBtn = $('.cancelBtn'),
        mask = $('#mask'),
        confirmWs = $("#confirm_ws"),
        confirmTrue = $(".wx_true"),
        confirmCancel = $(".wx_false"),
        empty = $("#empty");
    var orderVal = '';
    // 删除按钮点击事件->弹出选择框
    cancelBtn.on('click', function() {
        mask.show();
        confirmWs.show();
        // 拿到当前点击的tr的id值并赋给orderVal，用来传递后台数据
        orderVal = $(this).parent('tr').attr('id');
    });
    // 点击确定->传递信息，隐藏选择框
    confirmTrue.on('click', function() {
            // ajax->利用获取到的orderVal进行删除操作
            mask.hide();
            confirmWs.hide();
            window.location.reload(true);
        })
        // 点击取消->直接隐藏选择框
    confirmCancel.on('click', function() {
        mask.hide();
        confirmWs.hide();
        orderVal = '';
    })
    if ($('tbody').find('tr').length == 0) {
        empty.show();
    } else {
        empty.hide();
    }
})
