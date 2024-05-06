const _observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

//Get all elements that use classSelector
const _fadeElements = document.querySelectorAll(".bo-fade-scroll");
if (_fadeElements.length > 0) {
    _fadeElements.forEach((Element) => {
        _observer.observe(Element);
    });
}