import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




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