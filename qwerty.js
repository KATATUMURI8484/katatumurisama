window.addEventListener('scroll', function(){
    var header =doucment.querySelector('header');
    header.classList.toggle('sticky',window.scrolly > 0);
});
