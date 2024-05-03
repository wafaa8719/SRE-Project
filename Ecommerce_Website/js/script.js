'use strict';
// Start Modal Variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');
// End Modal Variables
// Modal Function
const modalCloseFunc = function () { modal.classList.add('closed') }
// Start Modal Event Listener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);
// End Modal Event Listener
// ===================================================================


// ===========================================================================
// Start Notification Toast Variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');
// End Notification Toast Variables
// Start Notification Toast Event Listener
toastCloseBtn.addEventListener('click', function () {
	notificationToast.classList.add('closed');
});
// End Notification Toast Event Listener
// ===========================================================================






// Mobile Menu Variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
	// Start Remove Mobile Menu Function
	const mobileMenuCloseFunc = function () {
		mobileMenu[i].classList.remove('active');
		overlay.classList.remove('active');
	}
	// End Remove Mobile Menu Function
	// Start Apeand Mobile Menu Function
	mobileMenuOpenBtn[i].addEventListener('click', function () {
		mobileMenu[i].classList.add('active');
		overlay.classList.add('active');
	});
	// End Apeand Mobile Menu Function

	mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
	overlay.addEventListener('click', mobileMenuCloseFunc);
}






// ===========================================================================
// Accordion Variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');
for (let i = 0; i < accordionBtn.length; i++) {
	accordionBtn[i].addEventListener('click', function () {
		const clickedBtn = this.nextElementSibling.classList.contains('active');
		for (let i = 0; i < accordion.length; i++) {
			if (clickedBtn) break;
			if (accordion[i].classList.contains('active')) {
				accordion[i].classList.remove('active');
				accordionBtn[i].classList.remove('active');
			}
		}
		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active');
	});
}









// Start Filtring And Sorting Code
(function () {
	let field = document.querySelector('.items');
	let li = Array.from(field.children);
	function FilterProduct() {
		for (let i of li) {
			const name = i.querySelector('.showcase-category');
			const x = name.textContent;
			i.setAttribute("data-category", x);
		}
		let indicator = document.querySelector('.indicator').children;
		this.run = function () {
			for (let i = 0; i < indicator.length; i++) {
				indicator[i].onclick = function () {
					for (let x = 0; x < indicator.length; x++) {
						indicator[x].classList.remove('active');
					}
					this.classList.add('active');
					const displayItems = this.getAttribute('data-filter');
					for (let z = 0; z < li.length; z++) {
						li[z].style.transform = "scale(0)";
						setTimeout(() => {
							li[z].style.display = "none";
						}, 500);
						if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all") {
							li[z].style.transform = "scale(1)";
							setTimeout(() => {
								li[z].style.display = "block";
							}, 500);
						}
					}
				};
			}
		}
	}

	new FilterProduct().run();
})();