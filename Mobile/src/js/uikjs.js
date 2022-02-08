// script kjs
$(function(){


	//floating button apList 체크박스 체크 시 floating button on off
	$(window).on('load', function(){
		$('.apList').find(':input[type="checkbox"]').on('change', function(e) {
			if ($('.apList').find(':input[type="checkbox"]:checked').length > 0) {
				$('.BtmBtn.floating').addClass('on2');
				$('.content').css('padding-bottom','99px');
			} else {
				$('.BtmBtn.floating').removeClass('on2');
				$('.content').css('padding-bottom','55px');
			}
		});
		
	});


	// logo 사라지는 현상
	$(window).on('load', function(){
		setTimeout(function(){
			$('.logo').addClass('on');
		},3000);
		setTimeout(function(){
			$('.header .keyWord').addClass('on');
		},4000);
	});

	// 헤더 검색창 bg
	$(document).on('click', '.inputBox.sch > .inp', function(){
		$(this).closest('.inputBox').addClass('on');
	});

	/// 공지사항 닫기
	$(document).on('click', '.noticeWrap > .btn.close', function(){
		$(this).closest('.noticeWrap').addClass('on');
	});

	//gnb 호출
	$(document).on('click', '.gnbOpen', function(){
		var wH = $(window).height();
		$('nav').addClass('on');
		if(!$('.noticeWrap').hasClass('on')){
				$('.noticeWrap').addClass('on').addClass('on2');
		}
		setTimeout(function(){
			$('body').css('position','fixed');
			$('body').css('height',wH);
		},300);
	});

	//gnb 닫기
	$(document).on('click', '.navTop > button', function(){
		console.log("tab")
		$('nav').removeClass('on');
		$('body').removeAttr('style');
		if($('.noticeWrap').hasClass('on2')){
			$('.noticeWrap').removeClass('on').removeClass('on2');
		}
	});

	if(!$('.noticeWrap').hasClass('on')){
		$(document).on('click', '.gnbOpen', function(){
			$('.noticeWrap').addClass('on');
		});
	}

	//입력창 리셋 버튼
	InputReset();

	//Short Cut 메뉴 활성화/비활성화
	$('.scMenuBtn').on('click', function(){
		if ($('.shortCutList').css('display') == 'none') {
			$('.shortCutList').stop(true, true).slideDown();
			return false;
		} else {
			$('.shortCutList').stop(true, true).slideUp();
			return false;
		}
	});

	// main swiper
	var swiperH = new Swiper('.mainSliider', {
		slidesPerView:1.05,
	});
	var swiperH = new Swiper('.badgeSlider', {
		slidesPerView:2.5,
	});
	var swiperH = new Swiper('.badgeSlider2', {
		slidesPerView:3,
	});
	var swiperH = new Swiper('.topicSliider', {
		width : 230,
		spaceBetween : 15
	});
	
	if ( $('.recCourse2').find('.swiper-slide').length > 1 )
	{
		var swiperH = new Swiper('.recCourse2', {
			loop: true,
			pagination: {
				el: '.swiper-pager',
				clickable: true,
			},
		});
	} else {
		$('.recCourse2 .swiper-pagination').remove();
	}

	if ( $('.recBannerWrap').find('.swiper-slide').length > 1 )
	{
		var swiperH = new Swiper('.recBannerWrap', {
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
		});
	} else {
		$('.recBannerWrap .swiper-pagination').remove();
	}
	


	// page top
	$(document).on('click', '.gototop', function(){
		$('html, body').animate({ 
			scrollTop: 0 
		}, 500);
	});

	// toolbar 존재에 따른 하단 여백 조정
	if ( $('.toolBar').length > 0)
	{
		$('.content').css('padding-bottom','55px');
		if($('.BtmBtn.floating').length > 0){
			$('.content').find('.BtmBtn.floating').css('bottom','55px');
		}
	}

	// input date label on off
	var InpDate = $('input[type=date]');
	$(InpDate).each(function(){
		$(this).on('change', function(){
			if($(this).val()) {
				$(this).prev('label').css('display','none');
			}
			if ( !$(this).val() )
			{
				$(this).prev('label').css('display','block');
			}
		});
	});

	$('.dateReset').on('click', function(){
		$(this).closest('.datePickers').find('input[type=date]').val('');
		$(this).closest('.datePickers').find('label').css('display','block');
	});

	$('.popCont').on('scroll', function(){
		var popWrapTop = $('.popCont').scrollTop();
		if (popWrapTop > 0)
		{
			$('.popTitle').addClass('on');
		} else {
			$('.popTitle').removeClass('on');
		}
	});

	// channel btn
	$('.channelBtn').on('click', function(){
		if ( $(this).hasClass('on') )
		{
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
	});

	// scroll floating
	$(window).on('load', function(){
		var menuWrapOff = $('.menuWrap').offset();
		$(window).on('scroll', function(){
			// header box shadow on off
			var winTop = $(window).scrollTop();
			var listHeaderHeight = $('.listHeader').outerHeight();
			var detailHeaderHeight = $('.detailHeader').outerHeight();
			
			if (winTop > 0)
			{
				$('.header').addClass('on');
				$('.detailHeader').addClass('on');
				$('.listHeader').addClass('on');
			} else {
				$('.header').removeClass('on');
				$('.detailHeader').removeClass('on');
				$('.listHeader').removeClass('on');
			}

			// menuWrap floating
			if ($('.listHeader').length > 0 && $('.menuWrap').length > 0)
			{		
				if (winTop > (menuWrapOff.top - listHeaderHeight))
				{
					$('.listHeader').removeClass('on');
					$('.menuWrap').addClass('on');
					$('.menuWrap').css('top',listHeaderHeight);
				} else {
					$('.menuWrap').removeClass('on').removeAttr('style');
				}
			}

			if ($('.detailHeader').length > 0 && $('.menuWrap').length > 0)
			{	
				//console.log(winTop + ' , ' + detailHeaderHeight + ' , ' + menuWrapOff.top);
				//console.log(menuWrapOff.top - detailHeaderHeight);
				if (winTop > (menuWrapOff.top - detailHeaderHeight))
				{
					$('.detailHeader').addClass('none');
					$('.menuWrap').addClass('on');
					$('.menuWrap').css('top',detailHeaderHeight);
				} else {
					$('.detailHeader').removeClass('none');
					$('.menuWrap').removeClass('on').removeAttr('style');
				}
			}

			// page Top
			if ($('.recCourseWrap').length > 0)
			{
				var recOff = $('.recCourseWrap').offset();
				var recH = $('.recCourseWrap').outerHeight();
				var headerH = $('.header').outerHeight();
				var cut = (recOff.top + recH) - headerH;
				//console.log(winTop + ' , ' + cut);

				if (winTop > cut)
				{
					$('.pageTop').addClass('on');
				} else {
					$('.pageTop').removeClass('on');
				}
			}
		});
	});

	// My Page Chart
	$(window).on('load', function(){
		if ( $('#chart').length > 0)
		{
			var maxTh = Number($('.maxTh').html());
			var maxTm = Number($('.maxTm').html());
			var maxTotal = (maxTh * 60) + maxTm;
			var ltTh = Number($('.ltTh').html());
			var ltTm = Number($('.ltTm').html());
			var ltTotal = (ltTh * 60) + ltTm;
			var chartPerA = Math.floor((ltTotal / maxTotal) * 100);
			var chartPerB = 100 - chartPerA;
			chart(chartPerA, chartPerB);
		}
	});

	// mobile keypad show hide
	$('input:text, input:password, textarea').bind('focus', function(e) {
		$('.BtmBtn.floating').addClass('on');
	});

	$('input:text, input:password, textarea').bind('blur', function(e) {
		$('.BtmBtn.floating').removeClass('on');
	});

	// mobile script
});


// input reset
function InputReset() {
	// input reset
	$('.inpReset').click(function(){
		$(this).closest('.inputBox').find('.inp').val('');
		$(this).removeClass('on');
	});

	// input reset button display
	var InpObj = $('input:text, input:password');
	$(InpObj).on('keyup', function(e) {
		if($(this).val().length >= 1) {
			$(this).addClass('on');
			$(this).closest('.inputBox').find('.inpReset').addClass('on');
		}
		if ( $(this).val().length == 0 )
		{
			$(this).removeClass('on');
			$(this).closest('.inputBox').find('.inpReset').removeClass('on');
		}
	});

	$(InpObj).unbind('focusin').focusin(function(){
		//console.log('focus in');
		if($(this).val().length >= 1) {
			$(this).addClass('on');
			$(this).closest('.inputBox').find('.inpReset').addClass('on');
		}
	});

	$(InpObj).unbind('focusout').focusout(function(){
		obj = this;
		setTimeout(function(){
			$(obj).removeClass('on');
			$(obj).closest('.inputBox').find('.inpReset').removeClass('on');
		}, 10);
	});
}

// chart
function chart(a, b) {
	var config = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [a, b],
				backgroundColor: [
					'rgba(255, 102, 77, 1)',
					'rgba(84, 93, 139, 1)',
				],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 0,
			responsive: false,
			aspectRatio: 1,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			},
			layout: {
                padding: 0,
            },
			animation: {
				duration: 0
			}
		}
	};

	var ctx = document.getElementById('chart').getContext('2d');
	var myChart = new Chart(ctx, config);
}

function chart2Call() {
	var maxTh = Number($('.maxTh2').html());
	var maxTm = Number($('.maxTm2').html());
	var maxTotal = (maxTh * 60) + maxTm;
	var ltTh = Number($('.ltTh2').html());
	var ltTm = Number($('.ltTm2').html());
	var ltTotal = (ltTh * 60) + ltTm;
	var chartPerA = Math.floor((ltTotal / maxTotal) * 100);
	var chartPerB = 100 - chartPerA;
	chart2(chartPerA, chartPerB);
}

function chart2(a, b) {
	var config = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [a, b],
				backgroundColor: [
					'rgba(255, 102, 77, 1)',
					'rgba(84, 93, 139, 1)',
				],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 0,
			responsive: false,
			aspectRatio: 1,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			},
			layout: {
                padding: 0,
            },
			animation: {
				duration: 0
			}
		}
	};

	var ctx = document.getElementById('chart2').getContext('2d');
	var myChart = new Chart(ctx, config);
}

//비디오panoptoplayer 

$(document).on('click', '.overlay-button.playspeed', function(){
	if ( $(this).hasClass('on') )
	{
		$(this).removeClass('on');
	} else {
		$(this).addClass('on');
		if($('.overlay-button.language').hasClass('on')){
			$('.overlay-button.language').removeClass('on')
		}
	}
});

$(document).on('click', '.overlay-button.language', function(){
	if ( $(this).hasClass('on') )
	{
		$(this).removeClass('on');
	} else {
		$(this).addClass('on');
		if($('.overlay-button.playspeed').hasClass('on')){
			$('.overlay-button.playspeed').removeClass('on')
		}
	}
});

$(document).on('click', '.overlay-button.caption', function(){
	if($('.overlay-button').hasClass('on')){$('.overlay-button').removeClass('on')}
	if ( $(this).hasClass('off') )
	{
		$(this).removeClass('off');
		$(this).addClass('on');
	} else {
		$(this).removeClass('on');
		$(this).addClass('off');
	}
});

$(document).on('click', '.overlay-button.fullscreen', function(){
	if($('.overlay-button').hasClass('on')){$('.overlay-button').removeClass('on')}
	if($('.video-container').hasClass('full')){
		$(this).removeClass('exit');
		$('.video-container').removeClass('full');
		$('section.content').removeClass('fullscreen');
	}else{
		$(this).addClass('exit');
		$('.video-container').addClass('full');
		$('section.content').addClass('fullscreen');
	}
})

//다국어 선택
$(document).on('click', '.globalSelect ul li > button', function(){
	if ( $(this).closest('li').hasClass('active') ){
	} else {
		$('.globalSelect ul li').removeClass('active');
		$(this).closest('li').addClass('active');
	}
});
//emoji
$(document).on('click','.emoji-btn', function (){
	
	if($('.emoji-btn').hasClass('active')){
		$('.emoji-btn').removeClass('active')
		$('.emoji-wrap').removeClass('on')
	}else{
		$('.emoji-btn').removeClass('active')
		$('.emoji-wrap').removeClass('on')
		$(this).addClass('active')
		$('.emoji-wrap').addClass('on')
	}

});

$(document).on('click','.emojiButton', function (){
	if($('.emojiButton').hasClass('active')){
		$('.emojiButton').removeClass('active')
		$('.emoji-wrap').removeClass('on')
	}else{
		$('.emojiButton').removeClass('active')
		$('.emoji-wrap').removeClass('on')
		$(this).addClass('active')
		$('.emoji-wrap').addClass('on')
	}
});

$(document).on('click','.emoji_belt > .emoji_list', function(){
	var idx = $(this).index();		
	var i = idx - 1;
	$('.emoji_list').removeClass('active');
	$(this).addClass('active');	

	var go_i = getWidth(i);	
	$('.emoji_popup_body').scrollLeft(go_i);
});

function getWidth(idx) {
	var a = 0;
	if (idx < 0 ) return a = 0;
	for( var i = 0; i <= idx; i++ ){
		var wd = $('.emoji_box').eq(i).outerWidth() + 9;
		a = a + wd;		
	}
	return a;
}
function emoji_beltClick(i){
	$('.emoji_belt > .emoji_list').removeClass('active');
	$('.emoji_belt > .emoji_list').eq(i).addClass('active');
}

function scrollEmoji(e){
	
	var a = $(this).scrollLeft(),
	b = 0,
	e_1 = $('#emoji01').outerWidth(), 
	e_2 = getWidth(1) - 9, 
	e_3 = getWidth(2) - 9, 
	e_4 = getWidth(3) - 9, 
	e_5 = getWidth(4) - 9,
	e_6 = getWidth(5) - 9,
	e_7 = $('.emoji_inner').outerWidth() - $(this).outerWidth() - 9;
	
	if(a <= e_1){ b= 0; 
	}else if(e_1 < a && a <= e_2 ){b = 1; 
	}else if(e_2 < a && a <= e_3 ){b = 2; 
	}else if(e_3 < a && a <= e_4 ){b = 3;
	}else if(e_4 < a && a <= e_5 ){b = 4;
	}else if(e_5 < a && a <= e_6 ){b = 5;
	}else if(e_6 < a && a <= e_7 ){b = 6;
	}else if(e_7 <= a ){b = 7;
	}

	emoji_beltClick(b);
};

$(document).on('mousemove scroll wheel touchmove','.cmntFloat.up .emoji_popup_body',scrollEmoji);


$(document).on('click', '.cmntFloat textarea', function(){
	if($('.cmntFloat').hasClass('up')) return;
	$('.cmntFloat').addClass('up');	
	$(this).attr({inputMode : 'text'});
	$(this).focus();
});

$(document).on('keyup', '.cmntFloat textarea', function(){
	if($(this).val().length === 0) {$('.cmntFloat.up .enterButton').removeClass('active')};
	if($(this).val().length > 1 && $('.cmntFloat.up .enterButton').hasClass('active')===false) {
		$('.cmntFloat.up .enterButton').addClass('active');
	};

	//text 높이 조정
	$(this).css('height', 'auto');	
	var el_h = $(this).prop('scrollHeight');
	$(this).css('height',el_h);
});


$(document).on('click', '.cmntArea.sty2 .btn.rep', function(){	
	$(this).siblings('.edit').removeClass('active');
	if($(this).hasClass('active')){
	}else{
		$(this).addClass('active');
		$('.cmntFloat.on').addClass('re');
	
	}	
	$('.cmntFloat textarea').focus();
	$('.cmntFloat textarea').trigger('click');
})

$(document).on('click', '.cmntFloat.re .btnClose', function(){
	$('.cmntArea.sty2 .btn.rep').removeClass('active');
	$('.cmntFloat').removeClass('re');	
	$('.cmntFloat textarea').focus();
})

$('.cmntFloat.up').on('blur',function(){
	$(this).find('textarea').attr({inputMode : 'none'});
});

/* survey textarea placeholder 변경 */
$(document).on('change', '.q.impt + .a input[name="q1"]',function(){
	var idx = $(this).parents('li').index();	
	if(idx <3 ) {
		$('.a-text').attr('placeholder', '어떤 점을 개선하면 좋을까요? 개선 포인트를 남겨주세요.');
	}else{
		$('.a-text').attr('placeholder', '어떤 점이 특별히 좋았나요? 자세한 학습 후기를 남겨주세요.');
	}
})

