//Movement animation

const card = document.querySelector('.card');

const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const picture = document.querySelector('.picture img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const edu = document.querySelector('.Edu')

//Moving animation event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = "none"
        //Popout
    title.style.transform = 'translateZ(150px)';
    picture.style.transform = 'translateZ(175px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    edu.style.transform = 'translateZ(100px)';
})

purchase.addEventListener('mouseover', e => {
    card.style.transition = "none"
    purchase.style.transform = 'translateZ(75px)';
})

container.addEventListener('mouseout', e => {
    purchase.style.transform = 'translateZ(0)';
})

//Animate out

container.addEventListener('mouseleave',
    e => {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
        title.style.transform = 'translateZ(0px)';
        picture.style.transform = 'translateZ(0px)';
        purchase.style.transform = 'translateZ(0px)';
        description.style.transform = 'translateZ(0px)';
        sizes.style.transform = 'translateZ(0px)';
        edu.style.transform = 'translateZ(0px)';
    })