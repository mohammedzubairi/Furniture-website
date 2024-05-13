let tl = gsap.timeline({
   scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '80%',
      scrub: 1,
   },
  });
let tl2 = gsap.timeline({
   scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '80%',
      scrub: 1,
   },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '400%',
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});


tl.fromTo('.sliding-text', {y: 0}, {y: -400, overwrite: true} );
tl2.fromTo('.logo', {scale: 6}, {scale: 1, top: '2rem', left: '3rem', x: '50%', y: '50%', overwrite: true});

// tween.kill()
// gsap.fromTo('.home', {height: '10vh'});
  // Set the height of the .home element to a specific value
  // gsap.set('.home', {height: '50vh'});






// ---------------------  VIDEO --------------------------- //
const videos = document.querySelectorAll('.vid');

videos.forEach(vid => {
   vid.addEventListener('mouseenter', () => {
      vid.play();
});
vid.addEventListener('mouseleave', () => {
   vid.pause();
   vid.currentTime = 0;
});

});
// ---------------------  IMAGE --------------------------- //
var image = document.getElementById("image");
var images = ["/images/4 (4).jpg", "/images/4 (5).jpg", "/images/4 (6).jpg"]
var index = 0;

function updateImage(){
  image.src = images[index];
  // image.classList.add('fade');
  index = (index + 1) % images.length;

  // setTimeout(function() {
    // image.style.opacity = 1;
  //   image.classList.remove('fade');
  //   image.classList.add('visible');
  //   setTimeout(function() {
  //     image.classList.remove('visible');
  //   }, 1000);
  // }, 1000);

// }, 10);
}

setInterval(updateImage, 8000);

//----------------------------------------------------------
