function initCloud(){
		var width = $(window).width();
		$('.cloud').each(function() {
		$(this).css('left', (Math.floor(Math.random()*width))+'px').css('top', (Math.floor(Math.random()*301)+60)+'px');
		$('.cloud').fadeIn(300);
	});
	
	setInterval(function() {
		$('.clouds-1').css({
			left: '-=2'
		});
		$('.clouds-2').css({
			left: '-=2'
		});
		$('.clouds-3').css({
			left: '-=1'
		});
		$('.clouds-4').css({
			left: '-=1'
		});
		$('.clouds-5').css({
			left: '-=1'
		});
		$('.clouds-6').css({
			left: '-=1'
		});
		$('.clouds-7').css({
			left: '-=1'
		});
		$('.clouds-8').css({
			left: '-=1'
		});
		$('.clouds-9').css({
			left: '-=1'
		});
		$('.cloud').each(function() {
			if($(this).position().left<-320){
				$(this).css('left', (width)+'px').css('top', (Math.floor(Math.random()*301)+60)+'px');
				$('.header').css('width', (width)+'px');
			}
		});
	}, 41);
	
}