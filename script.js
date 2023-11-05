let left=document.querySelector('#left');
let right=document.querySelector('#right');
let projects=document.querySelector('.projects');
right.addEventListener('click',()=>{
    projects.scrollLeft += 400;
})
left.addEventListener('click',()=>{
    projects.scrollLeft -= 400;
})