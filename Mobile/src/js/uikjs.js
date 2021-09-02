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
	
	//emoji
	if($('.emoji_icons').find('.em_b').length > 1)
	{
		$('.emoji_box').each(function(){
			var lw = width_li($(this));
			$(this).css('width', lw +'px' );
		})
	}

	function width_li(w){
		var lw = (w.find('.em_b').length) % 4 ;
		var sw = ((w.find('.em_b').length)/4)* 39;
		console.log(sw);
		if (lw > 0){
			sw = (parseInt((w.find('.em_b').length)/4) + 1 )* 39;
		}
		return sw;
	}
	$('.emoji_list').on('click',function(){
		$('.emoji_list').removeClass('active');
		$(this).addClass('active');
	})


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

