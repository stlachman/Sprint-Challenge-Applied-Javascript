class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = carousel.querySelector('.left-button');
    this.rightButton = carousel.querySelector('.right-button');
    this.images = carousel.querySelectorAll('img');



    this.leftButton.addEventListener('click', () => {
      this.slideLeft();
    });

    this.rightButton.addEventListener('click', () => {
      this.slideRight();
    });
  }
  slideLeft() {
    
  }

  slideRight() {
    
  }

}

let carousel = document.querySelector('.carousel');
const fancyCarousel = new Carousel(carousel);
console.log(fancyCarousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/