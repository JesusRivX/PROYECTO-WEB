
//SLIDER
const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    arrowsShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

function setBgPosition(slide, index){
    const x =-(slide.tarjet + flkty.x) / 4;
    slides[index].style.backgroundPosition = `${x}px`;
}


// Slides initialization
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'))
const flkty = new Flickity(carousel, options);

//Event listener using bg position
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});

