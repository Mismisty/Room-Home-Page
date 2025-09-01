const desktopImages = ["images/desktop-image-hero-1.jpg",
                       "images/desktop-image-hero-2.jpg",   
                      "images/desktop-image-hero-3.jpg"];

const mobileImages = ["images/mobile-image-hero-1.jpg",
                      "images/mobile-image-hero-2.jpg", 
                      "images/mobile-image-hero-3.jpg"];

const mobileBreakpoint = 768;                                          


const paragraphs = [
          `<h1 class="discover">Discover innovative ways to decorate</h1><p class="provide">We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make&nbsp;your property a reflection of you and what you love.</p><p class="shop-arrow">Shop now <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="" fill-rule="nonzero"/></svg></p>`, 

          `<h2 class="globe">We are available all across the globe</h2><p class="provide">With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.<p class="shop-arrow">Shop now <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="" fill-rule="nonzero"/></svg></p>`,

          `<h3 class="manufactured">Manufactured with the best materials</h3><p class="provide">Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.<p class="shop-arrow">Shop now <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="" fill-rule="nonzero"/></svg></p>`
          ];

let currentIndex = 0;
const imageElement = document.getElementById('slider-image');
const sliderContainer = document.getElementById('desktop-container');
const textContainer = document.getElementById('slider-para');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateSlider() {
    console.log("Current index:", currentIndex);
   // console.log("Window width:", window.innerWidth);

    if(window.innerWidth < mobileBreakpoint){
        imageElement.src = mobileImages[currentIndex];
        //imageElement.style.backgroundImage = "";

        sliderContainer.style.backgroundImage = "";
    }else {
       /* imageElement.style.backgroundImage = `url(${desktopImages[currentIndex]})`;
        imageElement.removeAttribute("src");*/
        //imageElement.src = desktopImages[currentIndex];

        sliderContainer.style.backgroundImage = `url(${desktopImages[currentIndex]})`;
        //sliderContainer.style.backgroundSize = "center";
       // sliderContainer.style.display = "none";
    }

   // imageElement.src = desktopImages[currentIndex];
    textContainer.innerHTML = paragraphs[currentIndex];
}

prevButton.addEventListener("click", () =>{
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = desktopImages.length - 1;
    }
    updateSlider();
});

nextButton.addEventListener("click", () =>{
    currentIndex++;
    if(currentIndex >= desktopImages.length) {
        currentIndex = 0;
    }
    updateSlider();
});

//window.addEventListener("resize", updateSlider);


updateSlider();

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

open.addEventListener('click', () => {
   // console.log('hello');
    container.classList.remove('hidden');
    
   open.classList.add('hidden');
  backdrop.classList.remove('hidden'); // Show overlay
    
});

close.addEventListener('click', () => {
    //console.log('bye');
    container.classList.add('hidden');

    open.classList.remove('hidden');
  backdrop.classList.add('hidden'); // Hide overlay
}); 


