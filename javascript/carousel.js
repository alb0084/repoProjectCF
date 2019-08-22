const carouselSlide =document.querySelector('.carousel-slide');
const carouseImages =document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn =document.querySelector('#prevBtn')
const nextBtn =document.querySelector('#nextBtn')

//counter
let counter=1;

const size=carouseImages[0].clientWidth;
  
carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if(counter>=carouseImages.length-1) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouseImages[counter].id==='lastClone'){
        console.log(carouseImages[counter],'riga 31')
        carouselSlide.style.transition="none"; 
        counter=carouseImages.length-2;
        carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }
    if(carouseImages[counter].id==='firstCLone'){
        console.log(carouseImages[counter],'riga 37')
        carouselSlide.style.transition="none"; 
        counter=carouseImages.length-counter;
        carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }

});

