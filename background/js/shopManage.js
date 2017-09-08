;$(function () {
	var subBtn = $('#newShop'),
		delBtn = $('.cancelShop'),
		trueBtn = $('.true'),
		cancelBtn = $('.cancel'),
		shopMsg = '',
		shopMsgContainer = $('.shopMsgContainer');
	var confirmWs = $('#confirmWs'),
		mask = $('#mask');
	var empty = $('#empty');
	// 新建优惠券事件
	subBtn.on('click',function () {
		$(location).attr('href','../html/addShop.html');
	});
	// 删除卡券事件
	delBtn.on('click',function () {
		// 选中删除行的tr并全部删除
		shopMsg = $(this).parent().parent();
		// 对事件进行处理
		mask.show();
		confirmWs.show();
		confirmFunction();
	});
	// 处理删除tr函数
	function confirmFunction (){
		// 点击确认
		trueBtn.on('click', function() {
			mask.hide();
			confirmWs.hide();
			shopMsg.remove();
			// 删除后进行一些表单操作并刷新页面
			
			// 刷新页面
			location.reload(true);
		});
		// 点击取消
		cancelBtn.on('click',function () {
			mask.hide();
			confirmWs.hide();
		})
	}
	
	if ($('.shopMsg').length == 0) {
		empty.show();
	}else{
		empty.hide();
	}
})