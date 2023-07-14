// const btn = document.querySelector('button');
// const body = document.querySelector('body');
// const color = ['pink','black','red','green','blue'];
// body.style.backgroundColor = 'green';
// document.addEventListener('click',function(){
// const colorIndex = parseInt(math.random()*color.length);
// body.style.backgroundColor = color[colorIndex];

// })

const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','brown','green','yellow','viloet'];
body.style.backgroundColor = 'yellow';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});