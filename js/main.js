(function ($) {
  'use strict';

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').css('top', '0px');
    } else {
      $('.sticky-top').css('top', '-100px');
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $('.dropdown');
  const $dropdownToggle = $('.dropdown-toggle');
  const $dropdownMenu = $('.dropdown-menu');
  const showClass = 'show';

  $(window).on('load resize', function () {
    if (this.matchMedia('(min-width: 992px)').matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr('aria-expanded', 'true');
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr('aria-expanded', 'false');
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off('mouseenter mouseleave');
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header carousel
  $('.header-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds per slide
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: false,
    autoplayHoverPause: false, // prevents pause on hover
  });

  // Testimonials carousel
  // $('.testimonial-carousel').owlCarousel({
  //   autoplay: true,
  //   smartSpeed: 1500,
  //   autoplayTimeout: 4000, // 3 seconds per slide

  //   center: true,
  //   margin: 24,
  //   dots: true,
  //   loop: true,
  //   nav: false,
  //   autoplayHoverPause: false, // prevents pause on hover

  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     992: {
  //       items: 3,
  //     },
  //   },
  // });

  // Single button to toggle mute/unmute for all videos
  // document.addEventListener('DOMContentLoaded', function () {
  //   const toggleBtn = document.getElementById('sound-toggle');
  //   if (!toggleBtn) return;

  //   const heroVid = document.getElementById('hero-video');

  //   toggleBtn.addEventListener('click', () => {
  //     // Toggle HTML5 video sound
  //     if (heroVid) {
  //       heroVid.muted = !heroVid.muted;
  //     }

  //     // Toggle YouTube player sound if available
  //     if (typeof player !== 'undefined' && player && player.isMuted) {
  //       if (player.isMuted()) {
  //         player.unMute();
  //       } else {
  //         player.mute();
  //       }
  //     }

  //     // Change button text
  //     toggleBtn.textContent =
  //       heroVid && !heroVid.muted ? 'Mute Sound' : 'Play Sound';
  //   });
  // });

  // Vendor carousel
  $('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000, // 3 seconds per slide
    autoplayHoverPause: false, // prevents pause on hover

    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 4,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Ensure OwlCarousels resume after tab switch
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      $('.header-carousel').trigger('play.owl.autoplay', [1000]);
      $('.testimonial-carousel').trigger('play.owl.autoplay', [1000]);
      $('.vendor-carousel').trigger('play.owl.autoplay', [1000]);
    } else {
      $('.header-carousel').trigger('stop.owl.autoplay');
      $('.testimonial-carousel').trigger('stop.owl.autoplay');
      $('.vendor-carousel').trigger('stop.owl.autoplay');
    }
  });

  // document.addEventListener('DOMContentLoaded', function () {
  //   const video = document.querySelector('#video-intro video');
  //   if (!video) return;

  //   // Set initial volume to 40%
  //   video.volume = 0.1;

  //   // Try to autoplay
  //   video.play().catch(() => {
  //     // Browser may block autoplay with sound
  //   });

  //   // Pause/resume video based on visibility
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           video.play();
  //         } else {
  //           video.pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(video);
  // });

  // Autoplay when the page loads
  // document.addEventListener('DOMContentLoaded', () => {
  //   video.play().catch(() => {
  //     // Handle autoplay restrictions on some browsers
  //   });
  // });

  // Ensure OwlCarousels pause on tab switch and resume correctly
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      $('.header-carousel').trigger('play.owl.autoplay', [3000]);
      $('.testimonial-carousel').trigger('play.owl.autoplay', [4000]);
      $('.vendor-carousel').trigger('play.owl.autoplay', [3000]);
    } else {
      $('.header-carousel').trigger('stop.owl.autoplay');
      $('.testimonial-carousel').trigger('stop.owl.autoplay');
      $('.vendor-carousel').trigger('stop.owl.autoplay');
    }
  });

  let player;

  // Create the YouTube player
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      videoId: 'GS1LIkxjPUs', // your video ID
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        loop: 1,
        playlist: 'GS1LIkxjPUs',
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: function (e) {
          e.target.playVideo();
          observeVisibility(e.target);
        },
      },
    });
  }

  function observeVisibility(player) {
    const iframe = player.getIframe();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only play if visible and tab is active
          if (entry.isIntersecting && !document.hidden) {
            player.playVideo();
          } else {
            player.pauseVideo();
          }
        });
      },
      { threshold: 0 } // 0 = any part visible triggers
    );

    observer.observe(iframe);
  }

  // ✅ SINGLE SOURCE OF TRUTH FOR VIDEO AUTOPLAY
  (function () {
    const videos = document.querySelectorAll('video');

    // Force autoplay-safe settings
    videos.forEach((v) => {
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
    });

    function playVisibleVideos() {
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const visible =
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          rect.right > 0 &&
          rect.left < window.innerWidth;

        if (!document.hidden && visible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }

    // Run on tab switch
    document.addEventListener('visibilitychange', playVisibleVideos);

    // Run on scroll
    window.addEventListener('scroll', playVisibleVideos);

    // Run on load
    window.addEventListener('load', playVisibleVideos);
  })();

  // Initialize EmailJS
  (function () {
    emailjs.init({
      publicKey: 'cMuC23Ggyv6DYgGV9',
    });
  })();

  // Handle contact form submission with button animation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!submitButton) return;

      // Disable button and show loading spinner
      submitButton.disabled = true;
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';

      emailjs.sendForm('service_h61jwby', 'template_cvt4f9k', this).then(
        () => {
          // Success animation
          submitButton.innerHTML = 'Message Sent!';
          submitButton.classList.add('btn-success');

          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('btn-success');
            submitButton.disabled = false;
          }, 2500);

          contactForm.reset();
        },
        (error) => {
          // Failure animation
          submitButton.innerHTML = 'Failed ❌';
          submitButton.classList.add('btn-danger');

          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('btn-danger');
            submitButton.disabled = false;
          }, 2500);

          alert(
            '❌ Failed to send message. Please try again.\n' +
              JSON.stringify(error)
          );
        }
      );
    });
  }
})(jQuery);
