var body = document.querySelector('body')
var button = document.querySelector('.btn-switch')

button.addEventListener('click', () => {
    button.classList.contains('dark') ? (
        button.classList.remove('dark'),
        button.classList.add('white'),
        body.style.backgroundColor = '#F1F1F1'
    ) : (
        button.classList.remove('white'),
        button.classList.add('dark'),
        body.style.backgroundColor = '#292C35'
    )
})