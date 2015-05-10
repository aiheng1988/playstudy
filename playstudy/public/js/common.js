$(function(){
	
	var $loading = $("<div class='text-center'><br/><img src='/public/img/loading.gif'/></div>");
	
	$('.submenu > a').click(function(e)
	{
		e.preventDefault();
		var submenu = $(this).siblings('ul');
		var li = $(this).parents('li');
		var submenus = $('#sidebar li.submenu ul');
		var submenus_parents = $('#sidebar li.submenu');
		if(li.hasClass('open'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenu.slideUp();
			} else {
				submenu.fadeOut(250);
			}
			li.removeClass('open');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenus.slideUp();			
				submenu.slideDown();
			} else {
				submenus.fadeOut(250);			
				submenu.fadeIn(250);
			}
			submenus_parents.removeClass('open');		
			li.addClass('open');	
		}
	});
	
	$(".urlLink").click(function(){
		var $this = $(this);
		var linkUrl = $(this).attr("data-url");
		if(linkUrl) {
			$.ajax({
			    type: 'GET',
			    url: linkUrl,
			    dataType: 'html',
			    beforeSend: function(xhr){
			    	$("#content-body").html($loading);
			    },
			    error: function(xhr) {
			    	$.alert("服务器错误");
			    },
			    success: function(data){
			    	$("#content-body").html(data);
			    	$("#bigMenuUl").find("*[class='active']").removeClass();
			    	$this.parent("li").attr("class", "active");
			    }
			});
		} else {
			$.alert("未设置data-url属性");
		}
	});
	
});