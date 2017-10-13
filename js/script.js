 

// THIS SCRIPT IS FOR CHANGING THE ICON OF THE SECTION WHEN IT EXPANDS AND COLLAPSES


$('.collapseTable').click(function(){

	var collapsed=$(this).find('i').hasClass('fa-angle-down');
	    
	$(this).find('i').removeClass('fa-angle-up');

	$(this).find('i').addClass('fa-angle-down');

	if(collapsed)
	    $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
	
});
