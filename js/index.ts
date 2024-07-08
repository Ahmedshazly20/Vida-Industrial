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