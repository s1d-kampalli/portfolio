import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  var options = {
    strings: [
      "Let's connect!",
      "Email me at sk3999@drexel.edu.",
      "Find me on LinkedIn.",
      "Let's chat tech, security, or Drexel!"
    ],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 400,
    loop: true
  };

  new Typed('#typed-contact', options);
});



document.addEventListener('DOMContentLoaded', () => {
    const burgerContainer = document.getElementById('burger-container');
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-container');
  
    if (burgerContainer && burger && nav) {
      burgerContainer.addEventListener('click', () => {
        console.log('Burger clicked!');
        nav.classList.toggle('active');
        burger.classList.toggle('active');
      });
    }
  });