;
$(function() {
    var cancelGife = $('.cancelGife'),
        addGife = $('#addGife'),
		trueBtn = $('.true'),
		cancelBtn = $('.cancel'),
		gifeContent = '';
    // 定义暂无数据图片
    var empty = $('#empty');
    // 定义弹窗
	var confirmWs = $('#confirmWs'),
		mask = $('#mask');

	// 点击删除按钮触发事件
    cancelGife.on('click', function() {
    	gifeContent = $(this).parent('div').parent('.gifeContent');
		mask.show();
		confirmWs.show();
		confirmFunction();
    });

    // 点击新增礼品按钮跳转页面
    addGife.on('click', function() {
    	$(location).attr('href','../html/addGife.html');
    });

	// 处理删除tr函数
	function confirmFunction (){
		// 点击确认
		trueBtn.on('click', function() {
			mask.hide();
			confirmWs.hide();
			gifeContent.remove();
			// 删除后进行一些后台操作并刷新页面
			

			// 刷新页面
			location.reload(true);
		});
		// 点击取消
		cancelBtn.on('click',function () {
			mask.hide();
			confirmWs.hide();
		})
	}

    // 为空时显示暂无数据
    if ($('#gifeContainer').find('.gifeContent').length == 0) {
        empty.show();
    } else {
        empty.hide();
    }
})
