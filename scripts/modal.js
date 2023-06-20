const custombutton = document.querySelectorAll('.custombutton');
const modals = document.querySelectorAll('.modal');

custombutton.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.add('active');
    })
})

modals.forEach((modal, index) => {
    modal.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target === modal) {
            modal.classList.remove('active');
        } else if (e.target === modalContent) {
            e.stopPropagation();
        }
    })
})