const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.style.flex = '0.5';
            } else {
                b.style.flex = '4';
            }
        });
    });

    box.addEventListener('mouseout', () => {
        boxes.forEach(b => {
            b.style.flex = '1';
        });
    });
});
