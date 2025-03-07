document.addEventListener('DOMContentLoaded', function () {
    const testimonialWrappers = document.querySelectorAll('.testimonials__wrapper');

    if (testimonialWrappers.length > 0) {
        testimonialWrappers[0].classList.add('selected');
    }

    testimonialWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function () {
            testimonialWrappers.forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});