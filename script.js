var button = document.querySelector('.btn-switch')

button.addEventListener('click', () => {
    button.classList.contains('dark') ? (
        button.classList.remove('dark'),
        button.classList.add('white')
    ) : (
        button.classList.remove('white'),
        button.classList.add('dark')
    )
})