$(document).ready(function(){
	mobileDropdown();
	mobileNavbar();
	mobileForm();
});

$(window).resize(function(){
	mobileDropdown();
	mobileNavbar();
	mobileForm();
});

// BM: input focus
function inputFocus(id){
	$(id).parent('.input-group').addClass('input-group_active');
}

// BM: input blur
function inputBlur(id){
	var valueInput = '';
	valueInput = $(id).val();
	
	if(!valueInput){
		$(id).parent('.input-group').removeClass('input-group_active');	
	}
}

// BM: prev and next steps
function step(number){
	var elementStep = '';
	
	elementStep = 'div[data-item="' + number + '"]';
	$('.steps-container__item').removeClass('steps-container__item_active');
	$(elementStep).addClass('steps-container__item_active');
}

// BM: mobile dropdown
function mobileDropdown(){
	var bodyWidth = 0;
	
	bodyWidth = $('body').width();
	if(bodyWidth <= 767){
		$(document).on('click', '.dropdown > a', function(e){
			e.preventDefault();
			$(this).siblings('.dropdown__ul').toggle();
		});
	}
	else{
		$(this).siblings('.dropdown__ul').removeAttr('style');
	}
}

// BM: mobile navbar popup
function mobileNavbar(){
	var bodyWidth = 0;
	
	bodyWidth = $('body').width();
	if(bodyWidth <= 767){
		$(document).on('click', '.mobile-button__nav', function(){
			$('.header').toggleClass('header-active');
		});
	}
	else{
		$('.header').removeClass('header-active');
	}
}

// BM: mobile form popup
function mobileForm(){
	var bodyWidth = 0;
	
	bodyWidth = $('body').width();
	if(bodyWidth <= 767){
		$(document).on('click', '.mobile-button__sentence', function(){
			$('body').addClass('order-form__open');
		});
		$(document).on('click', '.mobile-button__close', function(){
			$('body').removeClass('order-form__open');
		});
	}
	else{
		$('body').removeClass('order-form__open');
	}
}