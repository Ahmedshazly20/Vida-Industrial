  // Get the toggle menu button and mobile menu element
  const toggleMenuBtn = document.getElementById('toggleMenu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Add event listener to the toggle menu button
  toggleMenuBtn.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('hidden');
    
  });

  // Add a media query listener to hide the mobile menu on desktop view
  window.matchMedia('(min-width: 640px)').addEventListener('change', (event) => {
    if (event.matches) {
      // If the screen size is at least 640px (sm breakpoint), hide the mobile menu
      mobileMenu.classList.add('hidden');
    }
  });




  document.addEventListener('DOMContentLoaded', () => {
    const btnBoxes = document.querySelectorAll<HTMLElement>("[unique-script-id='w-w-dm-id'] .btn-box");
    const overlays = document.querySelectorAll<HTMLElement>("[unique-script-id='w-w-dm-id'] .overlay");
    const closeButtons = document.querySelectorAll<HTMLElement>("[unique-script-id='w-w-dm-id'] .close");
    const listItems = document.querySelectorAll<HTMLElement>("[unique-script-id='w-w-dm-id'] .list");
    const squareImgs = document.querySelectorAll<HTMLElement>("[unique-script-id='w-w-dm-id'] .squareImg");
  
    btnBoxes.forEach((btnBox) => {
      btnBox.addEventListener('click', () => {
        btnBox.parentElement?.children[1].style.display = 'block';
      });
    });
  
    closeButtons.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        overlays.forEach((overlay) => {
          overlay.style.display = 'none';
        });
      });
    });
  
    listItems.forEach((listItem) => {
      listItem.addEventListener('click', () => {
        const value = listItem.getAttribute('data-filter');
        if (value === 'all') {
          squareImgs.forEach((img) => {
            img.style.display = 'block';
          });
        } else {
          squareImgs.forEach((img) => {
            if (img.classList.contains(value!)) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
        }
  
        listItems.forEach((item) => {
          item.classList.remove('active');
        });
        listItem.classList.add('active');
      });
    });
  });


  const swiperEl = document.querySelector('swiper-container')

  const params = {
    injectStyles: [`
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
    }
    `],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  }

  Object.assign(swiperEl, params)

  swiperEl.initialize();