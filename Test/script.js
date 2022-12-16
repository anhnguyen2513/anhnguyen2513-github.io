document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li')

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
    

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        }else{
        link.style.animation = `naLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        // console.log(index / 5);
    }); 
    burger.classList.toggle('toggle');

    });
}
navSlide();