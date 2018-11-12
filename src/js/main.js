(function($) {
	$(function(){
		var classView = localStorage.getItem('classView');
		!!classView && $('.popuplocation').removeClass().addClass(classView);
		!!classView && $('.popuplocation-bg').removeClass().addClass(classView);
		var popupCacheButton = document.querySelectorAll('.popuplocation__container-content-item');
		for (var i = 0; i < popupCacheButton.length; i++) {
			$(popupCacheButton[i]).on('click', function(e) {
				if ($(this).hasClass('popuplocation__active')) {
					$('.popuplocation').removeClass('popuplocation__active');
					$('.popuplocation-bg').removeClass('popuplocation__active');
					localStorage.setItem('classView', 'popuplocation__active');
				} else if ($(this)) {
					$('.popuplocation').addClass('popuplocation__active');
					$('.popuplocation-bg').addClass('popuplocation__active');
					localStorage.setItem('classView', 'popuplocation__active');
				}
			});
		}
	})
})(jQuery);
//mobile menu
var selectorMenu = document.querySelector('.mob__menu'); // menu selector
var svgMenu = document.querySelector('.ham'); // button selector
svgMenu.onclick = function() {
	if (selectorMenu.classList.contains('active-mobmenu') && (svgMenu.classList.contains('active'))) {
		selectorMenu.classList.remove('active-mobmenu');
		svgMenu.classList.remove('active');
		document.body.style.overflowY = "auto";
	} else {
		selectorMenu.classList.add('active-mobmenu');
		svgMenu.classList.add('active');
		document.body.style.overflowY = "hidden";
	}
}

//close menu by window resize
window.onresize = function() {
	document.body.style.overflowY = "auto";
	selectorMenu.classList.remove('active-mobmenu');
	svgMenu.classList.remove('active');
	popupCallback.classList.remove('popup__active');
	popupBg.classList.remove('popup__active');
	locationPopUp.classList.remove('active');
}

// slider brands
var swiper = new Swiper('.slider1', {
	slidesPerView: 7,
	loop: true,
	grabCursor: true,
	speed: 800,
	autoplay: true,
	breakpoints: {
		414: {
			slidesPerView: 1,
			allowTouchMove: true,
		},
		700: {
			slidesPerView: 3,
			allowTouchMove: true,
		},
		991: {
			slidesPerView: 5,
			allowTouchMove: true,
		},
	},
})

// slider products
var swiper = new Swiper('.slider2', {
	slidesPerView: 3,
	grabCursor: true,
	loop: true,
	speed: 800,
	breakpoints: {
		700: {
			slidesPerView: 1,
			allowTouchMove: true,
		},
		991: {
			slidesPerView: 2,
			allowTouchMove: true,
		}
	},
	navigation: {
		nextEl: '.g-wrapper .swiper-button-next',
		prevEl: '.g-wrapper .swiper-button-prev',
	},
})

// slider blog
var swiper = new Swiper('.slider3', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 10,
	allowTouchMove: false,
	grabCursor: false,
	breakpoints: {
		767: {
			slidesPerView: 1,
			allowTouchMove: true,
			grabCursor: true,
			navigation: {
				nextEl: '.blog .swiper-button-next',
				prevEl: '.blog .swiper-button-prev',
			},
		},
		991: {
			slidesPerView: 2,
			allowTouchMove: true,
			grabCursor: true,
			navigation: {
				nextEl: '.blog .swiper-button-next',
				prevEl: '.blog .swiper-button-prev',
			},
		},
	},
})

// slider blog
var swiper = new Swiper('.slider4', {
	slidesPerView: 2,
	loop: true,
	grabCursor: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.blogpost__container-slider .swiper-button-next',
		prevEl: '.blogpost__container-slider .swiper-button-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 1,
			allowTouchMove: true,
			grabCursor: true,
		},
		991: {
			slidesPerView: 2,
			allowTouchMove: true,
			grabCursor: true,
		},
	},
})


// slider blog
var swiper = new Swiper('.slider5', {
	slidesPerView: 1,
	loop: true,
	grabCursor: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.contacts__block-slider .swiper-button-next',
		prevEl: '.contacts__block-slider .swiper-button-prev',
	}
})

var swiper = new Swiper('.slider6', {
	slidesPerView: 4,
	grabCursor: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.product__relatedslider .swiper-button-next',
		prevEl: '.product__relatedslider .swiper-button-prev',
	},
	breakpoints: {
		500: {
			slidesPerView: 1,
			allowTouchMove: true,
			grabCursor: true,
		},
		767: {
			slidesPerView: 2,
			allowTouchMove: true,
			grabCursor: true,
		},
		991: {
			slidesPerView: 3,
			allowTouchMove: true,
			grabCursor: true,
		},
	},
})

var swiper = new Swiper('.slider7', {
	slidesPerView: 5,
	allowTouchMove: false,
	spaceBetween: 10,
	navigation: {
		nextEl: '.m-clothes__slider .swiper-button-next',
		prevEl: '.m-clothes__slider .swiper-button-prev',
	},
	breakpoints: {
		500: {
			slidesPerView: 1,
			allowTouchMove: true,
			grabCursor: true,
		},
		767: {
			slidesPerView: 2,
			allowTouchMove: true,
			grabCursor: true,
		},
		991: {
			slidesPerView: 3,
			allowTouchMove: true,
			grabCursor: true,
		},
	},
})

// //send mail
// var sendMail = function sendMail(selector) {
//   return fetch('mail.php', {
// 	method: 'POST',
// 	body: new FormData(document.querySelector(selector))
//   }).catch(function (error) {
// 	alertify.error("Ошибка. Повторите отправку позже");
//   });
// };

// // form for sendmail method with yandex counter
// var sendMessage = function() {
// 	document.querySelector("selector"); // button selector
// 	document.querySelector("selector").onsubmit = function(n) { //menu selector
// 		n.preventDefault(), sendMail("selector").then(function(e) { //menu selector
// 			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
// 		})
// 	};
// }
// sendMessage();

// //smoothscroll
// new SmoothScroll('a[href*="#"]', {
//     speed: 1500,
//     after: function() {
//         document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "0px"
//     }
// });



// mask for "tel" input
var input = document.querySelectorAll('input[type="tel"]')
var mask = new Inputmask("+7 (999) 999-99-99");
for (i = 0; i < input.length; i++){
var input = document.querySelectorAll('input[type="tel"]')
	mask.mask(input[i]);
}

//close popup by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		locationPopUp.classList.remove('active');
		locationArrow.style.transform = 'rotate(0)';
		popupBg.classList.remove('popup__active');
		popupCallback.classList.remove('popup__active');
		popupLocation.classList.add('popuplocation__active');
		popupLocationBg.classList.add('popuplocation__active');
	}
};

var locationButton = document.getElementById('location-button');
var locationPopUp = document.getElementById('location-popup');
var locationArrow = document.getElementById('location-arrow');
var locationItem = document.querySelectorAll('.r__menu-item-dropdown-link');
locationButton.onclick = function() {
	if (locationPopUp.classList.contains('active')) {
		locationPopUp.classList.remove('active');
		locationArrow.style.transform = 'rotate(0)';
	} else {
		locationPopUp.classList.add('active');
		locationArrow.style.transform = 'rotate(180deg)';
	}
}
for (i = 0; i < locationItem.length; i++) {
	locationItem[i].onclick = function() {
		locationPopUp.classList.remove('active');
		locationArrow.style.transform = 'rotate(0)';
	}
}

$('#location-button').click(function(e) {
	var $message = $('#location-popup');

	if ($message.css('display') != 'block') {
		$message.addClass('active');

		var firstClick = true;
		$(document).bind('click.myEvent', function(e) {
			if (!firstClick && $(e.target).closest('#message').length == 0) {
				locationPopUp.classList.remove('active');
				locationArrow.style.transform = 'rotate(0)';
				$(document).unbind('click.myEvent');
			}
			firstClick = false;
		});
	}

	e.preventDefault();
});

var menu01 = new MobileMenu;
menu01.init();
function MobileMenu(){
	var $body = $('body');
	var $dd = $('.mob__menu .dd');
	this.init = function(){
		$body.addClass('show');
		$('.mob__menu .dd').addClass('dd-show');
		$('.mob__menu .dd').each(function(){
			var theHeight = $(this).next().height();
			$(this).next().attr('data-height', theHeight);
		});
		$body.removeClass('show');
		$('.mob__menu .dd').removeClass('dd-show');
		$dd.click(function(){
			if($(this).hasClass('dd-show')){
				menu01.hideDropDown(this);
			}else{
				menu01.showDropDown(this);
			}
			menu01.hideDropDown($(this).parent().siblings('.mob__menu-item-dropdown').children('.dd'));
		})
	}
	this.showDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('dd-show');
		$(elem).next().css('height', $(elem).next().data('height'))
		$(elem).addClass('dd-show');
	}
	this.hideDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('dd-show');
	}
}


var popupCallbackButton = document.querySelectorAll('.callback');
var popupCallback = document.querySelector('.popup');
var popupBg = document.querySelector('.popup-bg');
var popupCallbackClose = document.querySelector('.popup__container-close');
for (i = 0; i < popupCallbackButton.length; i++) {
	popupCallbackButton[i].onclick = function() {
		if (popupCallback.classList.contains('popup__active')) {
			popupCallback.classList.remove('popup__active');
			popupBg.classList.remove('popup__active');
		} else {
			popupBg.classList.add('popup__active');
			popupCallback.classList.add('popup__active');
		}
	}
}

popupCallbackClose.onclick = function() {
	popupCallback.classList.remove('popup__active');
	popupBg.classList.remove('popup__active');
}

popupBg.onclick = function() {
	popupCallback.classList.remove('popup__active');
	popupBg.classList.remove('popup__active');
}


var popupLocationButton = document.querySelector('.location-button');
var popupLocationArrow = document.getElementById('location-arrow2');
var popupLocation = document.querySelector('.popuplocation');
var popupLocationBg = document.querySelector('.popuplocation-bg');
var popupLocationClose = document.querySelector('.popuplocation__container-close');
popupLocationButton.onclick = function() {
	if (popupLocation.classList.contains('popuplocation__active')) {
		popupLocation.classList.remove('popuplocation__active');
		popupLocationBg.classList.remove('popuplocation__active');
		popupLocationArrow.style.transform = 'rotate(0)';
	} else {
		popupLocationBg.classList.add('popuplocation__active');
		popupLocation.classList.add('popuplocation__active');
		popupLocationArrow.style.transform = 'rotate(180deg)';
	}
}


popupLocationClose.onclick = function() {
	popupLocation.classList.add('popuplocation__active');
	popupLocationBg.classList.add('popuplocation__active');
	popupLocationArrow.style.transform = 'rotate(0)';
}

popupLocationBg.onclick = function() {
	popupLocation.classList.add('popuplocation__active');
	popupLocationBg.classList.add('popuplocation__active');
	popupLocationArrow.style.transform = 'rotate(0)';
}

var openCatButton = document.querySelector('.blogpost__sidebar-block-titles-button');
var catBlock = document.querySelector('.blogpost__sidebar-block-cats');
if (openCatButton != null ) {
	openCatButton.onclick = function() {
		catBlock.classList.toggle('hide');
	}
	window.onresize = function() {
		catBlock.classList.remove('hide');
	}
}

var openCatButton2 = document.querySelector('.blog__sidebar-block-titles-button');
var catBlock2 = document.querySelector('.blog__sidebar-block-cats');
if (openCatButton2 != null ) {
	openCatButton2.onclick = function() {
		catBlock2.classList.toggle('hide');
	}
	window.onresize = function() {
		catBlock2.classList.remove('hide');
	}
}

var openCatButton3 = document.querySelector('.accessories__sidebar-block-titles-button');
var catBlock3 = document.querySelector('.accessories__sidebar-block-cats');
if (openCatButton3 != null ) {
	openCatButton3.onclick = function() {
		catBlock3.classList.toggle('hide');
	}
	window.onresize = function() {
		catBlock3.classList.remove('hide');
	}
}

$(document).on("click", "span.ordering__form-table__items-counts__count", function(){
	var type = $(this).attr("data-type");
	var inp = $(this).parents('.ordering__form-table__items-counts').find('input.ordering__form-table__items-counts__count');
	var vl = parseInt(inp.val());

	if(type == 'minus'){
		if(vl > 0) inp.val(vl - 1); else return;
	}else{
		if(vl < 100) inp.val(vl + 1); else return;
	}

	inp.change();
});

$(document).on("click", "span.cart__form-table__items-counts__count", function(){
	var type = $(this).attr("data-type");
	var inp = $(this).parents('.cart__form-table__items-counts').find('input.cart__form-table__items-counts__count');
	var vl = parseInt(inp.val());

	if(type == 'minus'){
		if(vl > 0) inp.val(vl - 1); else return;
	}else{
		if(vl < 100) inp.val(vl + 1); else return;
	}

	inp.change();
});

const data = {
	'Санкт-Петербург': {
		phone: '+7 (812) 645-14-33',
		email: 'spb@aurora-carne.ru',
		address: 'Санкт-Петербург, Басков пер., 35',
		time: 'Ежедневно, 10:00 — 21:00',
		href: 'tel:78126451433',
		hrefemail: 'mailto:spb@aurora-carne.ru',
		photo: 'url("http://localhost:3000/images/contacts-slide.jpg")',
		photo: 'url("http://localhost:3000/images/contacts-slide.jpg")',
		photo: 'url("http://localhost:3000/images/contacts-slide.jpg")',
	},
	'Москва': {
		phone: '+7 (495) 003-34-23',
		email: 'msk@aurora-carne.ru',
		address: 'Москва, Гончарная ул., 21	',
		time: 'Ежедневно, 09:00 — 21:00',
		href: 'tel:74950033423',
		hrefemail: 'mailto:msk@aurora-carne.ru',
		photo: 'url("http://localhost:3000/images/sertif3.jpg")',
		photo: 'url("http://localhost:3000/images/sertif3.jpg")',
		photo: 'url("http://localhost:3000/images/sertif3.jpg")',
	},
}
void function() {
	const select = [...document.querySelectorAll('.contacts__block-title__menu-item')];
	const contacts = [...document.querySelectorAll('.contacts__block-text')];
	const href = document.getElementById('contacts-phone');
	const email = document.getElementById('contacts-email');
	const photos = [...document.querySelectorAll('.contacts__block-slider-slide')];
	const label = document.getElementById('contacts-city');
	select.forEach(option => option.onclick = e => {
		label.textContent = e.target.textContent;
		select[i].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}))
	});
	if (select[i] != null) {
		select[i].addEventListener('change', (e) => {
			contacts[0].textContent = data[e.detail.value].phone
			contacts[1].textContent = data[e.detail.value].email
			contacts[2].textContent = data[e.detail.value].address
			contacts[3].textContent = data[e.detail.value].time
			href.href = data[e.detail.value].href
			email.href = data[e.detail.value].hrefemail
			for (var k = 0; k < photos.length; k++) {
				photos[k].style.background = data[e.detail.value].photo
				photos[k].style.backgroundSize = 'cover';
				photos[k].style.backgroundRepeat = 'no-repeat';
				photos[k].style.backgroundPosition = '50% 50%';
				localStorage.photo = photos[k].style.background;
			}

			localStorage.city1 = label.textContent;
			localStorage.phone = contacts[0].textContent;
			localStorage.email = contacts[1].textContent;
			localStorage.address = contacts[2].textContent;
			localStorage.time = contacts[3].textContent;
			localStorage.href = href.href;
			localStorage.hrefemail = email.href;
		})
	}
}();

var contactsButtonArrow = document.getElementById('contacts-arrow');
var contactsButton = document.getElementById('contacts-button');
var contactsMenu = document.querySelector('.contacts__block-title__menu');
if (contactsButton != null) {
	contactsButton.onclick = function() {
		if (contactsMenu.classList.contains('active-menu')) {
			contactsMenu.classList.remove('active-menu');
			contactsButtonArrow.style.transform = 'rotate(0)';
		} else {
			contactsMenu.classList.add('active-menu');
			contactsButtonArrow.style.transform = 'rotate(180deg)';
		}
	}
}

const data2 = {
	'Санкт-Петербург': {
		phone: '+7 (812) 645-14-33',
		href1: 'tel:78126451433',
		footerphone1: '+7 (812) 645-14-33',
		footeraddress: 'Санкт-Петербург, Басков пер., 35',
	},
	'Москва': {
		phone: '+7 (499) 390-80-07',
		href1: 'tel:74993908007',
		footerphone1: '+7 (499) 390-80-07',
		href2: 'tel:74950033423',
		footerphone2: '+7 (495) 003-34-23',
		footeraddress: 'Москва, Гончарная ул., 21 (м. Таганская)',
	},
}

void function() {
	const select = [...document.querySelectorAll('.r__menu-item-dropdown-link, .popuplocation__container-content-item')];
	const phone = document.getElementById('header-phone');
	const href = document.getElementById('header-hrefphone');
	const label = document.getElementById('location-button');
	const footerphone1 = document.getElementById('footer-phone1');
	const footerphone2 = document.getElementById('footer-phone2');
	const footeraddress = document.getElementById('footer-address');
	select.forEach(option => option.onclick = e => {
		label.textContent = e.target.textContent;
		select[i].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}))
	});
	if (select[i] != null) {
		select[i].addEventListener('change', (e) => {
			phone.textContent = data2[e.detail.value].phone
			href.href = data2[e.detail.value].href
			footerphone1.textContent = data2[e.detail.value].footerphone1
			footerphone1.href = data2[e.detail.value].href1
			if (footerphone2 != null) {
				footerphone2.textContent = data2[e.detail.value].footerphone2
				footerphone2.href = data2[e.detail.value].href2
			}
			footeraddress.textContent = data2[e.detail.value].footeraddress
			localStorage.city = label.textContent;
			localStorage.phone = phone.textContent;
			localStorage.href = href.href;
			localStorage.footerphone1 = footerphone1.textContent;
			localStorage.href1 = footerphone1.href;
			localStorage.footerphone2 = footerphone2.textContent;
			localStorage.href2 = footerphone2.href;
			localStorage.footeraddress = footeraddress.textContent;
		})

	}
	if (localStorage.city != undefined) {
		label.textContent = localStorage.getItem('city');
		phone.textContent = localStorage.getItem('phone');
		href.href = localStorage.getItem('href');
		footerphone1.textContent = localStorage.getItem('footerphone1');
		footerphone1.href = localStorage.getItem('href1');
		footerphone2.textContent = localStorage.getItem('footerphone2');
		footerphone2.href = localStorage.getItem('href2');
		footeraddress.textContent = localStorage.getItem('footeraddress');
	}
}();

$('.accessories__sidebar-block-filters__select').selectize();

$(document).ready(function() {
	var siteContent = document.querySelector('.wrapper');
	setTimeout(() => siteContent.classList.add('render'), 100);

	$('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		speed: 1000,
		slideMargin: 0,
		thumbItem: 5.1,
		thumbMargin: 10
	});
	$('#galleryLookbook').lightGallery();
	$('#galleryWorks').lightGallery();

	$('#galleryClothesM').lightSlider({
		gallery:false,
		item:5,
		loop: false,
		pager: false,
		slideMargin:0,
		enableDrag: true,
		currentPagerPosition:'left',
		onSliderLoad: function(el) {
			el.lightGallery({
				selector: '#galleryClothesM .lslide'
			});
		},
		responsive : [
			{
				breakpoint:991,
				settings: {
					item:3,
					}
			},
			{
				breakpoint:600,
				settings: {
					item:2,
					}
			}
		]
	});
});

