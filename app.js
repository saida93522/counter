const allBtn = document.querySelectorAll('.btn')
const numSpan = document.querySelector('#value')
//seting initial count
let counter = 0;

allBtn.forEach(el => el.addEventListener('click', function (e) {
    const btnClasses = e.currentTarget.classList;

    if (btnClasses.contains('increase')) {
        counter++
        if (counter > 0)
            numSpan.style.color = 'green'
    }

    if (btnClasses.contains('decrease')) {
        counter--
        if (counter < 0)
            numSpan.style.color = 'red'
    }

    if (btnClasses.contains('reset') || counter === 0) {
        counter = 0
        numSpan.style.color = '#222'
    }
    numSpan.textContent = counter;

}))


