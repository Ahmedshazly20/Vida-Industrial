// Get the toggle menu button and mobile menu element
var toggleMenuBtn = document.getElementById('toggleMenu');
var mobileMenu = document.getElementById('mobile-menu');
// Add event listener to the toggle menu button
toggleMenuBtn.addEventListener('click', function () {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('hidden');
});
// Add a media query listener to hide the mobile menu on desktop view
window.matchMedia('(min-width: 640px)').addEventListener('change', function (event) {
    if (event.matches) {
        // If the screen size is at least 640px (sm breakpoint), hide the mobile menu
        mobileMenu.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var btnBoxes = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .btn-box");
    var overlays = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .overlay");
    var closeButtons = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .close");
    var listItems = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .list");
    var squareImgs = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .squareImg");
    btnBoxes.forEach(function (btnBox) {
        btnBox.addEventListener('click', function () {
            var _a;
            (_a = btnBox.parentElement) === null || _a === void 0 ? void 0 : _a.children[1].style.display = 'block';
        });
    });
    closeButtons.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            overlays.forEach(function (overlay) {
                overlay.style.display = 'none';
            });
        });
    });
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            var value = listItem.getAttribute('data-filter');
            if (value === 'all') {
                squareImgs.forEach(function (img) {
                    img.style.display = 'block';
                });
            }
            else {
                squareImgs.forEach(function (img) {
                    if (img.classList.contains(value)) {
                        img.style.display = 'block';
                    }
                    else {
                        img.style.display = 'none';
                    }
                });
            }
            listItems.forEach(function (item) {
                item.classList.remove('active');
            });
            listItem.classList.add('active');
        });
    });
});
var swiperEl = document.querySelector('swiper-container');
var params = {
    injectStyles: ["\n    .swiper-pagination-bullet {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      line-height: 20px;\n      font-size: 12px;\n      color: #000;\n      opacity: 1;\n      background: rgba(0, 0, 0, 0.2);\n    }\n\n    .swiper-pagination-bullet-active {\n      color: #fff;\n      background: #007aff;\n    }\n    "],
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
};
Object.assign(swiperEl, params);
swiperEl.initialize();
