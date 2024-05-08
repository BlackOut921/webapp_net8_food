const _observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        /*else {
            entry.target.classList.remove("show");
        }*/
    });
});

//Get all elements that use bo-scroll-target (the elements that will animate in)
//Better as an animation?? can be delayed...
const _fadeElements = document.querySelectorAll(".bo-scroll-target");
if (_fadeElements.length > 0) {
    _fadeElements.forEach(i => {
        _observer.observe(i);
    });
}