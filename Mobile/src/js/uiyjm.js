

// script yjm

function inputDesign(){
	$('.inpD input').each(function(){
		if ($(this).prop('checked')) {
			// if ($(this).type = 'radio') {
			// 	var $name = $(this).attr('name');
			// 	$('input[name='+$name+']').parents('.inpD').removeClass('checked')
			// }
			$(this).closest('.inpD').addClass('checked')
		}else{
			$(this).closest('.inpD').removeClass('checked')
		}
	})
}

//코스카드 내 큐브카드 리스트 오픈
function courseCard(){	
	$('.cardToggle').click(function(){
		if ($(this).closest('.cardWrap').hasClass('open')){
			$(this).closest('.card').siblings().slideUp(300)
			.closest('.cardWrap').removeClass('open');
		} else {
			$(this).closest('.card').siblings().slideDown(300).css('display','block')
			.closest('.cardWrap').addClass('open');
		}
		return false;
	})
}

//아코디언 메뉴
function accordion(){
	$('.accordion').each(function(){
		$(this).children('.open').find('.sub').show();
		$(this).find('.anch').click(function(){
			if ($(this).closest('li').hasClass('open')) {
				$(this).closest('.viewBox').next('.sub').slideUp(200)
				.closest('li').removeClass('open');
				return false;
			} else {
				$(this).closest('.viewBox').next('.sub').slideDown(200)
				.closest('li').addClass('open')
				.siblings('li').removeClass('open').find('.sub').slideUp(200);
				return false;
			}
		})
	})
}

//gnb 아코디언 
function accordionGnb(){
	$('.gnbList .accordion').each(function(){
		$(this).find('button').on('click',function(){
			if($(this).parent('li').hasClass('open')){
				$(this).parent('li').removeClass('open');
				
				$(this).next('.gnbListDept').slideUp(200);
			}else{
				$(this).parent('li').addClass('open');
				
				$(this).next('.gnbListDept').slideDown(200);
			}
		})
	})
}

//별점주기
function starRate(){
	$('.starRate.edit > i').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$(this).prevAll().addClass('on');
	})
}

//코멘트 입력박스 포커스
function cmntFocus(){
	$('.cmntEnter').each(function(){
		$('.cmntEnter textarea').focus(function(){
			$(this).closest('.cmntEnter').addClass('focus');
		})
		$('.cmntEnter textarea').blur(function(){
			$(this).closest('.cmntEnter').removeClass('focus');
		})
	})
}

//코멘트 입력 글자제한
function textByteLimit(){
	$('.cmntEnter').each(function(){
		var $inputArea = $(this).find('textarea');
		var $leftTxt = $(this).find('.left');
		var $totalTxt = $(this).find('.total');
		//var maxLength = 500;
		// var maxLength = $inputArea.attr('maxlength');
		var maxLength = $totalTxt.text();
		var txtLength = $inputArea.val().length;
		$leftTxt.text(txtLength);
		$totalTxt.text(maxLength);
		if (txtLength < 1) {
			$leftTxt.text(0);
			$(this).find('.btn').attr('disabled', true);
		}
		$inputArea.on("propertychange change keyup keydown paste input", function(){
			txtLength = $inputArea.val().length;
			$leftTxt.text(txtLength);
			if (maxLength < txtLength) {
				$(this).closest('.cmntEnter').addClass('txtOver')
				.find('.btn').attr('disabled', true);
			}if(1 <= txtLength && txtLength <= maxLength){
				$(this).closest('.cmntEnter').removeClass('txtOver')
				.find('.btn').attr('disabled', false);
			}else{
				$(this).closest('.cmntEnter').find('.btn').attr('disabled', true);
			}
		})
	})	
}

//코멘트 리스트
function cmntViewReply(){
	$('.cmntArea .reply').hide()	.filter('.on').show()
	.siblings('.box').find('.moreReply').addClass('opened');
	$('.moreReply').click(function(){
		var $btnText = $(this).html();	
		var $reText;
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened')
			.closest('li').find('.reply').hide().removeClass('on');
			$reText = $btnText.replace('Hide','View');
			$(this).html($reText);
		} else {
			$(this).addClass('opened')
			.closest('li').find('.reply').show().addClass('on');
			$reText = $btnText.replace('View','Hide');
			$(this).html($reText);	
		}
	})
}

//코멘트 리스트 내 View more 버튼 위치
function btnViewPosition(){
	$('.cmntArea .cmntText').each(function(){
		var $cmntTextH= $(this).innerHeight();
		var $cmntTextPosition = $(this).position().top + $cmntTextH;
		$(this).siblings('.moreReplyArea').find('.moreRead').css('top', $cmntTextPosition);
		if ($cmntTextH < 23) {
			$(this).addClass('fit')
		}else{
			$(this).removeClass('fit')
		}
	})
}

//input file 디자인
function inputFileTxt(){
	$('.inputFile').each(function(){
		var $topParent = $(this).closest('.inputFile');
		$('input[type="file"]').on('change',function(){
			var $fileName = $(this).val();
			$topParent.addClass('on').find('input[type="text"]').val($fileName);
		})

		$(this).find('button.del').click(function(){
			$topParent.removeClass('on').find('input').val('');
		})
	})
}

//툴팁 너비 조절
function tooltipBox(){

	$('.tooltip').each(function(){
		var winWidth = $(window).width();
		var $target = $(this);
		var $tipBox = $(this).find('.tipBox');
		var $tipBoxLeft = $tipBox.offset().left;	
		var $tipBoxW = $tipBox.innerWidth();	
		var $tipBoxP = $tipBoxLeft + $tipBoxW;


		if ($tipBoxP > winWidth) {
			$(this).addClass('right')
		}else{
			$(this).removeClass('right')
		}

		if (winWidth < 360){
			$(this).find('.tipBox').addClass('narrow')
		}else{
			$(this).find('.tipBox').removeClass('narrow')
		}
	})
}

//set cookie (이름,값,유효기간)
function fXSetCookie(cname, cvalue, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get cookie (이름)
function fXGetCookie (cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function fxLoader(flag){
	if($('.ui.wait').length == 0){
		$('body').append(
			$('<div>').addClass('ui wait').append(
				$('<div>').text('LOADING')
			)
		);
	}
	if(flag){
		$('.ui.wait').show();
		var now = 0;
		_loadIntervar = setInterval(function(){
				now = now + 1;
				if(now > 14){
						now = 1;
				}
				$('.ui.wait').attr('class', 'ui wait').addClass('s'+now);
		},100);
	}else{
		$('.ui.wait').hide().attr('class', 'ui wait');
		clearInterval(_loadIntervar);
	}
}

function moreShow(){
	var obj = $('.box .moreRead');
	var sum = obj.closest('.box').find('.flowText').find('.txtCont').outerHeight();
    if(sum <= parseInt(obj.closest('.box').find('.flowText').css('max-height'), 10)){
      obj.remove();
    }
}

function schResultStyle(){
	var searchBox = $('.searchBox .inputBox');
	var resultSelect = $('.searchBox .schResult');
	if(resultSelect.css("display") !== "none" || resultSelect.hasClass('on')){
    searchBox.addClass('focus');
	}else if(resultSelect.css("display") == "none"){
		searchBox.removeClass('focus');
	}else{
		searchBox.removeClass('focus');
	}
}


$(function(){
	//console.log('test yjm');
	schResultStyle();
	inputDesign();
	inputFileTxt();
	courseCard();
	accordion();
	accordionGnb();
	cmntViewReply();
	starRate();
	cmntFocus();
	textByteLimit();
	btnViewPosition();
	moreShow();

	$('.inpD').find('input').on('change',function(){
		inputDesign();
	})

	$('.txtCont').bind('DOMSubtreeModified', function(){
		btnViewPosition();
	})

	$(window).resize(function(){
		btnViewPosition();
		tooltipBox();
	})

	
$('.box .moreRead').click(function(){
		var openCont = $(this).closest('.box').find('.flowText');
		if(openCont.hasClass('opened')){
			openCont.removeClass('opened');
			$(this).hide();
			$(this).siblings('.more').css('display','block');
		}else{
			openCont.addClass('opened');
			$(this).hide();
			$(this).siblings('.hide').css('display','block');
		}
	})

	//course / cube / community 의 typeB (subinfo 영역) more버튼 200218 ebk


	//러닝 참고자료 개수에 따른 more 버튼 여부 200130 ebk
	if ($('.downLink .linkWrap .link').length >= 3) {
		$('.downLink .moreRead').css('display','');
	}else{
		$('.downLink .moreRead').css('display','none');
	}
	//러닝 참고자료 more 버튼 기능 200130 ebk
	$('.downLink .moreRead').on('click', function(event){
		$('.downLink .linkWrap').removeClass('hide3');
		$(this).css('display','none');
	});

	//툴팁 (러닝 디테일 페이지)
	$('.ico.tip').on('click', function(){		
		if ( $(this).next('.tipBox').css('display') == 'block'){
			$(this).next('.tipBox').hide().closest('.tooltip').removeClass('on');
		} else {
			$(this).next('.tipBox').show().closest('.tooltip').addClass('on');
			tooltipBox();
		}
	});

	$('.tipBox .closeTip').on('click', function(){
		$(this).closest('.tipBox').hide().closest('.tooltip').removeClass('on');
	});


	$('.menuWrap .menu').each(function(){
		var activeM = $(this).find('.active');
		var menuLeft = activeM.offset().left;
		$(this).scrollLeft(menuLeft - 15);
	})

	$('.badgeSelect ul li').find('button').on('click',function(){
		$(this).parent('li').addClass('on');
		$(this).parent('li').siblings('li').removeClass('on');
	});

	$('.cBadgeBox .btnPath').on('click',function(){
		if($(this).parents('.cBadgeBox').hasClass('on')){
			$(this).parents('.cBadgeBox').removeClass('on');
		}else{
			$(this).parents('.cBadgeBox').addClass('on');
		}
	});


	$('.organTable ul li button').on('click',function(){
		var parentLi = $(this).parent('li');
		if(parentLi.hasClass('close')){
			parentLi.removeClass('close');
		}else if($(this).siblings('ul').length > 0){
			parentLi.addClass('close');
		}
	});



	// mobile script
});

