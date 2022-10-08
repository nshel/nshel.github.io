

window.addEventListener('DOMContentLoaded', () => {
    
    /***
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        document.addEventListener('scroll', () => {
            window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
    }

    /**
   * Mobile nav toggle
   */
    
    const mobileNavShow = document.querySelector('mobile-nav-show');
    const mobileNavHide = document.querySelector('mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', function(event) {
            event.preventDefault();
            mobileNavToggle();
        });
    });

    function mobileNavToggle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    }

      /**
     * Animation on scroll function and init
     */
    function aos_init() {
        AOS.init({
        duration: 800,
        easing: 'slide',
        once: true,
        mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();
    });
    
});