// document.getElementById('btn').addEventListener('click', function() {
//     const activeItem = document.querySelector('.carousel-item.active');
//     const imgs = activeItem.querySelectorAll('.img');
//     imgs.forEach(img => {
//         img.classList.toggle('hidden');
//     });
// });

function switchPls(){
    const activeItem = document.querySelector('.carousel-item.active');
    const imgs = activeItem.querySelectorAll('.img');
    imgs.forEach(img => {
        img.classList.toggle('hidden');
    });
}