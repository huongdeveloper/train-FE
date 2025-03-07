document.addEventListener('DOMContentLoaded', function () {
    const colorLists = document.querySelectorAll('.product__list');

    colorLists.forEach(list => {
        const colorGrids = list.querySelectorAll('.product__grid');

        colorGrids.forEach(grid => {
            const colorItems = grid.querySelectorAll('.color__item');

            if (colorItems.length > 0) {
                colorItems[0].classList.add('selected');
            }

            colorItems.forEach(item => {
                item.addEventListener('click', function () {
                    colorItems.forEach(el => el.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        });
    });
});