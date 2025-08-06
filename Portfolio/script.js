
  // window.onload = function () {
  //   const homeSection = document.getElementById('home');
  //   if (homeSection) {
  //     homeSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

/* ----------------------------------------------------------------------------------------------- */
// Loading bar

document.addEventListener("DOMContentLoaded", () => {
  const loadingBar = document.getElementById("loading-bar");
  let width = 0;
  const interval = setInterval(() => {
    width += 20;
    loadingBar.style.width = width + "%";

    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingBar.style.display = "none";
      }, 300);
    }
  }, 100);
});

/* ----------------------------------------------------------------------------------------------- */

  let hasCounted = false;

  const startCounting = () => {
    // Counter for .stat-number-counter
    document.querySelectorAll('.stat-number-counter').forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 500;
      const increment = Math.ceil(target / speed);

      const update = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });

    // Counter for .stat-number
    document.querySelectorAll('.stat-number').forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = 1;

      const update = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(update, 100);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        startCounting();
      }
    });
  }, { threshold: 1 });

  observer.observe(document.querySelector('#stats'));

/* ----------------------------------------------------------------------------------------------- */

// const cnt = document.querySelectorAll('.stat-number-counter');

// cnt.forEach(counter => {
//   const target = +counter.getAttribute('data-target');
//   const speed = 500; // higher = faster increment
//   const increment = Math.ceil(target / speed); // calculated increment

//   const updateCount = () => {
//     const count = +counter.innerText;

//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount, 20); // faster refresh
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCount();
// });


// const counters = document.querySelectorAll('.stat-number');

// counters.forEach(counter => {
//   const target = +counter.getAttribute('data-target');
//   const speed = 200; // Adjust for slower animation

//   const updateCount = () => {
//     const count = +counter.innerText;
//     const increment = 1;

//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount, 100);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCount();
// });

/* ----------------------------------------------------------------------------------------------- */


// document.addEventListener("DOMContentLoaded", () => {
//   const heroText = document.querySelector(".hero-text-container");

//   // Trigger animation manually (forces reflow)
//   heroText.classList.remove("hero-text-container");
//   void heroText.offsetWidth; // trigger reflow
//   heroText.classList.add("hero-text-container");
// });

