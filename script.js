/*
    Grabbing all carousel items and attaching button event listeners
    
    1) Grab all 'carousel-item' - hint: elements...by...class name! Store this value in a const called 'slides'
    2) Set a slide position of 0 (as that's what the starting index position will be when we grab all the carousel items - remember that arrays start from 0 and not 1) - we want the slide position to always start at 0. When a user goes to the next or previous slide, we will update this--the reason it's 0 and not one is that we want to match the position in the 'slides' const that we stored above! As this is going to be changing, what seems more appropriate, a let statement or a const?
    3) Store a const value of 'totalSlides' that is equal to the length of the slides
    4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' - seeing as though we expect the user to click to change slide position, make sure we set the eventListener to 'click' and the second arguments will be functions!
    5) Create two functions: moveToNextSlide and moveToPrevSlide - use both of these in action 4 as the second argument on your 'addEventListener' - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const
*/


/*
    Hiding non-active slides
    
    1) In our 'styles.css', add a new class 'carousel-item-hidden' that is set to display none
    2) Create a new function called 'hideAllSlides'
    3) Inside 'hideAllSlides' use a 'for of loop' to iterate through the slides (each iteration will give you direct access to 'carousel-item')
    4) When inside the 'for of loop', remove the class 'carousel-item-visible' and add the class 'carousel-item-hidden' - all our slides will now be hidden, and inside 'moveToNextSlide' at the end, we add back the slide we want visible!
    5) Call 'hideAllSlides' right away within the function 'moveToNextSlide' - make sure it's before any other code!
*/



const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
    
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);

document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');

    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}



function moveToPrevSlide() {
    
}



/*
    Moving to the previous slide
    
    1) As we did with 'moveToNextSlide', call 'hideAllSlides' within 'moveToPrevSlide'
    2) Check if the slidePosition === 0, if it is, we know that we're on the first slide, so to go back, we take 'totalSlides' and decrease the value by 1. An example: 3-1 = 2, which gives us slidePosition 2 which is the last item in our array of slides [0, 1, 2] <- these are the indexes in the array, the actual values can be accessed by 'slides[slidePosition]' as we did for 'moveToNextSlide'
    3) If we are not on the 'slidePosition' of 0, we are not on the first slide item, therefore we just decrease 'slidePosition'. This is the reason we check for 0 prior, because if we are on 0 and try decrease from 0, we'll end up passing an index value to the 'slides' that doesn't exist - 'slides[-1]' <- like so! This will cause an error!
    4) As we did in 'moveToNextSlide', we want to add the class of 'carousel-item-visible'
    5) Check both your buttons and see the result!
*/





function moveToPrevSlide() {
    hideAllSlides();

    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}