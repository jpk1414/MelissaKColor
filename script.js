document.querySelectorAll('.btn').forEach(b=>{
b.addEventListener('mouseenter',()=>b.style.background='rgba(233,89,196,.18)');
b.addEventListener('mouseleave',()=>b.style.background='rgba(0,0,0,.45)');
});