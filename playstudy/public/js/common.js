$(function(){
	
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
	
	$("#userListLink").click(function(){
		$.ajax({
		    type: 'GET',
		    url: '/users',
		    dataType: 'html',
		    beforeSend: function(xhr){
		    	$("#content-body").html("<div class='text-center'><img src='/public/img/loading.gif'/></div>");
		    },
		    success: function(data){
		    	$("#content-body").html(data);
		    }
		});
	});
	
});