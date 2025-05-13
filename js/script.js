// Mobile Menu Toggle
document.querySelector('header button').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Quick View Modal
const productCards = document.querySelectorAll('.product-card');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');

productCards.forEach(card => {
    card.addEventListener('click', function (e) {
        if (!e.target.closest('button')) {
            quickViewModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeQuickView.addEventListener('click', function () {
    quickViewModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Login Modal
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const showRegisterForm = document.getElementById('showRegisterForm');

document.querySelector('header a[href="#"]:last-child').addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeLoginModal.addEventListener('click', function () {
    loginModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

showRegisterForm.addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.classList.add('hidden');
    registerModal.classList.remove('hidden');
});

// Register Modal
const registerModal = document.getElementById('registerModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const showLoginForm = document.getElementById('showLoginForm');

closeRegisterModal.addEventListener('click', function () {
    registerModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

showLoginForm.addEventListener('click', function (e) {
    e.preventDefault();
    registerModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
});

// Cart Sidebar
const cartSidebar = document.getElementById('cartSidebar');
const closeCartSidebar = document.getElementById('closeCartSidebar');

document.querySelector('header .relative:last-child a').addEventListener('click', function (e) {
    e.preventDefault();
    cartSidebar.classList.remove('transform', '-translate-x-full');
    document.body.style.overflow = 'hidden';
});

closeCartSidebar.addEventListener('click', function () {
    cartSidebar.classList.add('transform', '-translate-x-full');
    document.body.style.overflow = 'auto';
});

// Product Gallery Thumbnails
const thumbnails = document.querySelectorAll('.product-gallery-thumbnail');
const mainImage = document.getElementById('quickViewMainImage');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
        thumbnails.forEach(t => t.classList.remove('border-red-500'));
        this.classList.add('border-red-500');
        mainImage.src = this.querySelector('img').src;
    });
});

// Search Input Focus
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('focus', function () {
    searchResults.style.display = 'block';
});

searchInput.addEventListener('blur', function () {
    setTimeout(() => {
        searchResults.style.display = 'none';
    }, 200);
});

// Initialize Swiper
const mainSwiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
